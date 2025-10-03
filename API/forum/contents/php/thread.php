<?php
require_once '../private/db.php';
$threadId = $_GET['thread_id'] ?? null;
if (!$threadId) die ('nincs megadva thread_id!');

$first = getThreadFirst(intval($threadId));
$section = getSection(intval($first['section_id']));

$comments = getComments($threadId);

if ($_SERVER['REQUEST_METHOD'] === 'POST'){
    if (isset($_POST['thread_id'])){
        ArchThread(intval($_POST['thread_id']));
    } elseif(isset($_POST['comment_id'])) {
        DelComment(intval($_POST['comment_id']));
    } 
    else die('Nem végrehajtjató!');


}



?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="../JS/loader.js?v=<?php echo time(); ?>"></script>
    <script src="../JS/thread.js?v=<?php echo time(); ?>"></script>
    <link rel="stylesheet" href="../css/styles.css?v=<?php echo time(); ?>">
    <title><?=$first['name']?></title>
</head>
<body>
    <header id="header" class="header">

    </header>
    <section class="hero" id="borito"></section>

    <nav>
        <a href="../../index.php">Főoldal</a> /  <?=$section?> / <?=$first['name']?>
    </nav>
    <div id = "comment">
        <table class = "commentt">
            <tr>
                <td rowspan="2"><?=$first['author_name']?></td>
                <td>
                    <div class="commenthd">
                        <span class="comment-name"><?=$first['name']?></span>
                        <div class="commentbuttons">
                            <button onclick="CopyThreadLink(<?=$threadId?>)">Megosztás</button>
                            <form method="POST" style="display:inline;">
                                <input type="hidden" name="thread_id" value ="<?=intval($threadId)?>">
                                <button type="submit">Archíválás</button>
                            </form>
                        </div>
                    </div>
                </td>
            </tr>
            <tr><td><div class = 'content-div'><?=$first['content']?></div><?= substr($first['created_at'],0,-9)?></td></tr>

            <?php foreach ($comments as $x): ?>
                <table id="comment-<?=$x['id'] ?>" class = "commentt">
                    <tr>
                        <td rowspan="2">
                            <?=$x['author_name']?>
                        </td>
                        <td>
                            <div class="commenthd">
                                <span class ="comment-name"><?=$first['name']?></span>
                                <div class="commentbuttons">
                                    <button onclick="CopyCommentLink(<?=$threadId?>,<?=$x['id']?>)">Megosztás</button>
                                    <?php if ($first['is_archived'] == 0): ?>
                                        <form method="POST">
                                            <input type="hidden" name="comment_id" value ="<?=intval($x['id'])?>">
                                            <button type="submit">Törlés</button>
                                        </form>
                                    <?php endif; ?>
                                </div>
                            </div>                        
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class = 'content-div'><?=$x['content']?>
                            </div><?= substr($x['created_at'],0,-9)?>
                        </td>
                    </tr>
                </table>
            <?php endforeach; ?>
        </table>
    </div>
    <?php if ($first['is_archived'] == 0): ?>
        <spanid id = "hozzaszolas"><a href="./post.php?thread_id=<?=$threadId?>&section_id=<?=$first['section_id']?>&mod=commenthozzadasa" id = "hozzaszolas">hozzászólás</a> </span>
    <?php endif; ?>
</body>
</html>
