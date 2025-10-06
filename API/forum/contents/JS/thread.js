document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        const hash = window.location.hash;
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            } else {
                console.warn('A cél elem nem található!');
            }
        }
    }, 100); 
});


function CopyThreadLink(ThreadId)
{
    let url = "localhost/-Oszk-r/api/forum/contents/php/thread.php?thread_id=" + ThreadId;
    navigator.clipboard.writeText(url).then(() => {
        alert("Sikeresen kimásoltad a thread linkjét!");
    })
}

function CopyCommentLink(ThreadId,CommentId)
{
    let url = "localhost/-Oszk-r/api/forum/contents/php/thread.php?thread_id=" + ThreadId + "#comment-" + CommentId;
    navigator.clipboard.writeText(url).then(() => {
        alert("Sikeresen kimásoltad a comment linkjét!");
    })
}
