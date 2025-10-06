<?php
require_once('./contents/private/db.php');
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="./contents/JS/index.js?v=<?php echo time(); ?>"></script>
    <link rel="stylesheet" href="./contents/css/styles.css?v=<?php echo time(); ?>">
    <title>Oszkár</title>
</head>
<body>
    <header id="header" class="header">
    </header>
    <section class="hero" id="borito"></section>


    <nav><a href="index.php">Főoldal</a></nav>

    <main>
        <div>
            <?php foreach (getAllSections() as $x): ?>
                <?php $threads = sortThreads(getThread(intval($x['id']))); ?>
                <div class="sectionhd">
                    <h1 class="section-nev"><?= $x['name'] ?></h1>
                    <div class="section-buttons">
                        <a href="./contents/php/post.php?section_id=<?= $x['id'] ?>&mod=threadnyitas" class="btn-add">+</a>
                        <?php if (!empty($threads)): ?>
                        <button onclick="Hider(<?= $x['id'] ?>)" id="hider-<?= $x['id'] ?>" class="btn-hide">Elrejtés</button>
                        <?php endif; ?>
                    </div>
                </div>
                <?php if (!empty($threads)): ?>
                    <table class="index-table" id="table-<?= $x['id'] ?>">
                        <thead>
                            <tr>
                                <th>Thread név</th>
                                <th>Létrehozva</th>
                                <th>Utolsó komment</th>
                                <th>DB</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php foreach ($threads as $y): ?>
                                <?php $hexCode = $y['is_archived'] ? '#716F6F' : '#FFFFFF'; ?>
                                <tr style="background-color: <?= $hexCode ?>">
                                    <td>
                                        <a href="./contents/php/thread.php?thread_id=<?= $y['id'] ?>">
                                            <?= $y['name'] ?>
                                        </a>
                                    </td>
                                    <td>
                                        <ul class="no-bullets">
                                            <li><?= substr($y['created'], 0, -9) ?></li>
                                            <li class="author-class"><?= $y['author_name'] ?></li>
                                        </ul>
                                    </td>
                                    <td>
                                        <ul class="no-bullets">
                                            <li><?= substr($y['ccreated_at'], 0, -9) ?></li>
                                            <li><div class="author-class"><?= $y['cauthor_name'] ?></div></li>
                                        </ul>
                                    </td>
                                    <td><?= $y['count'] ?></td>
                                </tr>
                            <?php endforeach; ?>
                        </tbody>
                    </table>
                <?php endif; ?>
            <?php endforeach; ?>
        </div>
        <div id = "legujabbakc">
            <div id = "legujabbak">
                <h1 id = "legujabbak-cim">Legújabbak</h1>
                <?php foreach (GetLast5ths() as $x): ?>
                    <ul class="adatok">
                        <li><div class = "legujabb-b"><?= $x['name']?></div><div class = "legujabb-j"><?=$x['author_name'] ?></div> </li>
                        <li><?= substr($x['content'], 0, 200) ?></li>
                    </ul>
                <?php endforeach; ?>
            </div>
        </div>
    </main>
</body>
</html>
