<?php
require_once 'config.php';

$pdo = null;

try{
    $pdo = new PDO("mysql:host=" . DB_HOST . ";dbname=" . DB_NAME, DB_USER);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(Exception $e) {
    die('Nem lehet csatlakozni az adatbázishoz!');
}

function getAllSections(): array{
    global $pdo;
    $query = "SELECT * from section";
    $result = $pdo->query($query);
    return $result->fetchAll(PDO::FETCH_ASSOC);
}

function getSection(int $id){
    global $pdo;
    $stmt=$pdo->prepare("SELECT name from section where id = :section_id");
    $stmt->execute(['section_id' => $id]);
    $result = $stmt->fetchColumn();
    return $result;
}

function getThreadName(int $id){
    global $pdo;
    $stmt=$pdo->prepare("SELECT name from thread where id = :thread_id");
    $stmt->execute(['thread_id' => $id]);
    $result = $stmt->fetchColumn();
    return $result;
}

function getThread(int $sectionId) : array{
    global $pdo;

    $stmt = $pdo->prepare("SELECT id, name, created_at as created, author_name, is_archived FROM thread WHERE section_id = :section_id ORDER BY is_archived ASC, created_at DESC");
    $stmt->execute(['section_id' => $sectionId]);
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

    if (!$result) {
        return [];
    }

    foreach ($result as &$r) {
        $stmt = $pdo->prepare("SELECT created_at as ccreated_at, author_name as cauthor_name FROM comment WHERE thread_id = :thread_id ORDER BY created_at DESC LIMIT 1");
        $stmt->execute(['thread_id' => $r['id']]);
        $r['ccreated_at'] = $stmt->fetchColumn();
    
        $stmt = $pdo->prepare("SELECT author_name FROM comment WHERE thread_id = :thread_id ORDER BY created_at DESC LIMIT 1");
        $stmt->execute(['thread_id' => $r['id']]);
        $r['cauthor_name'] = $stmt->fetchColumn();
    
        $stmt = $pdo->prepare("SELECT count(id) as count from comment WHERE thread_id = :thread_id");
        $stmt->execute(['thread_id' => $r['id']]);
        $r['count'] = $stmt->fetchColumn();

    }
    unset($r); 

    return $result;
}


function post(int $id, array $data, $mod)
{
    global $pdo;

    if ($mod === 'threadnyitas')
    {
        $data['name'] = $data['name'] ? $data['name'] : 'Anonymous';
        $stmt = $pdo->prepare("INSERT INTO thread (id, name, author_name, content, is_archived, section_id, created_at) VALUES (null, :thread_name, :name, :content, 0, :section_id, :current_date)");
        $stmt->execute([
            ...$data,
            'section_id' => $id
        ]);
    } elseif($mod === 'commenthozzadasa')
    {
        $data['name'] = $data['name'] ? $data['name'] : 'Anonymous';
        $stmt = $pdo->prepare("INSERT INTO comment (id, content, author_name, thread_id, created_at) VALUES (null, :content, :name, :thread_id, :current_date)");
        $stmt->execute([
            ...$data,
            'thread_id' => $id
        ]);
    }
    else die('Hiba!');
}

function getThreadFirst(int $id)
{
    global $pdo;

    $stmt = $pdo->prepare("SELECT name, author_name, content, is_archived, created_at, section_id FROM thread where id = :id");
    $stmt->execute(['id' => $id]);
    $result = $stmt->fetch(PDO::FETCH_ASSOC);

    return $result;
}

function getComments(int $id) : array {
    global $pdo;

    $stmt = $pdo->prepare("SELECT id, content, author_name, created_at  from comment where thread_id = :id order by created_at");
    $stmt->execute(['id' => $id]);
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

    if (!$result) {
        return [];
    }

    return $result;
}


function ArchThread(int $id): void{
    global $pdo;

    $stmt = $pdo->prepare("SELECT is_archived FROM thread WHERE id = :id");
    $stmt->execute(['id' => $id]);
    $current = $stmt->fetchColumn();

    if ((int)$current === 1) {
        $stmt = $pdo->prepare("UPDATE thread SET is_archived = 0 WHERE id = :id");
        $stmt->execute(['id' => $id]);
        echo "Archiválás leszedve";
    } else {
        $stmt = $pdo->prepare("UPDATE thread SET is_archived = 1 WHERE id = :id");
        $stmt->execute(['id' => $id]);
        echo "Thread archíválva!";
    }
}

function DelComment(int $id): void{
    global $pdo;
    $stmt = $pdo->prepare("DELETE FROM comment where id = :id");
    $stmt -> execute(['id' =>$id]);
    header("Location: ../../index.php");
}

function getLast5Ths(): array{
    global $pdo;
    $query = ("SELECT name, author_name, content FROM thread ORDER BY created_at DESC LIMIT 5 ");

    $result = $pdo->query($query);
    return $result->fetchAll(PDO::FETCH_ASSOC);
    if (!$result) {
        return [];
    }

    return $result;
}

function sortThreads(array $threads): array{
    usort($threads, function ($a, $b) {
        if ((int)$a['is_archived'] !== (int)$b['is_archived']) {
            return (int)$a['is_archived'] <=> (int)$b['is_archived'];
        }
        $latestA = !empty($a['ccreated_at']) ? $a['ccreated_at'] : $a['created'];
        $latestB = !empty($b['ccreated_at']) ? $b['ccreated_at'] : $b['created'];
        return strtotime($latestB) <=> strtotime($latestA);
    });

    return $threads;
}

?>