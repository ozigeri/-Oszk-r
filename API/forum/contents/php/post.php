<?php 
require_once('../private/db.php');

$mod = $_GET['mod'] ?? null;
if($mod === 'threadnyitas') {
    $sectionId = $_GET['section_id'] ?? null;
    if (!$sectionId) die ('Nincs megadva section_id!');
} elseif($mod === 'commenthozzadasa') {
    $threadId = $_GET['thread_id'] ?? null;
    if (!$threadId) die('Nincs megadva thread_id!');
    $sectionId = $_GET['section_id'] ?? null;
    if (!$sectionId) die ('Nincs megadva section_id!');
} else die('Hiba!');

if ($_SERVER['REQUEST_METHOD'] === 'POST'){
    if ($mod === 'threadnyitas')
    {
        $args = ['thread_name' => $_POST['thread_name'], 'name' => $_POST['name'], 'content' => $_POST['content'], 'current_date' => $_POST['current_date']];
        post(intval($sectionId), $args, 'threadnyitas');
        header("Location: ../../index.php");
    }
    elseif($mod === 'commenthozzadasa')
    {
        $args = ['name' => $_POST['name'], 'content' => $_POST['content'], 'current_date' => $_POST['current_date']];
        post(intval($threadId), $args, 'commenthozzadasa');
        header("Location: ../../index.php");
    }
    else die('Nem jó a post!');
}




?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="../JS/loader.js?v=<?php echo time(); ?>"></script>
    <link rel="stylesheet" href="../css/styles.css?v=<?php echo time(); ?>">
    <title><?=$mod?></title>
</head>
<body>
    <header id="header" class="header">

    </header>
    <section class="hero" id="borito"></section>


    <?php if($mod === 'threadnyitas'): ?>
        <nav>
            <a href="../../index.php">Főoldal</a> / <?=getSection(intval($sectionId))?>
        </nav>
        <div id = "post-div">
            <h2>Új thread itt: <?=getSection(intval($sectionId))?></h2>
            <form method="POST" >
                <input type="hidden" name="current_date" value="<?php echo date('Y-m-d H:i:s'); ?>">
                <label for="thread_name">Thread neve</label><br>
                <input type="text" id="thread_name" name="thread_name" required class="post-input"><br>
                <label for="name">Név:</label><br>
                <input type="text" id="name" name="name" class="post-input"><br>
                <label for="content">Szöveg:</label><br>
                <textarea  type="content" id="content" name="content" required class="post-inputc"></textarea><br>
                <div id ="hozzaszolasp"><button type="submit">Elküldés</button></div>
            </form>     
        </div>
    <?php elseif($mod === 'commenthozzadasa'): ?>
        <nav>
            <a href="../../index.php">Főoldal</a> / <?=getSection(intval($sectionId))?> / <?=getThreadName(intval($threadId))?>
        </nav>
        <div id = "post-div">
            <h2>Hozzászólás itt: <?=getThreadName(intval($threadId))?> </h2>
            <form method="POST">
                <input type="hidden" name="current_date" value="<?php echo date('Y-m-d H:i:s'); ?>">
                <label for="name">Név:</label><br>
                <input type="text" id="name" name="name" class="post-input"><br>
                <label for="content">Szöveg:</label><br>
                <textarea type="text" id="content" name="content" required class="post-inputc"></textarea><br>
                <div id ="hozzaszolasp"><button type="submit">Elküldés</button></div>
            </form>
        </div>
    <?php endif;?>
</body>
</html>