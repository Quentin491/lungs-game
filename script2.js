function NoNumbersMode() {

    var taRect1 = t1.getBoundingClientRect();
    var taRect2 = t2.getBoundingClientRect();
    var taRect3 = t3.getBoundingClientRect();
    var taRect4 = t4.getBoundingClientRect();
    var taRect5 = t5.getBoundingClientRect();
    var taRect6 = t6.getBoundingClientRect();
    var taRect7 = t7.getBoundingClientRect();
    var taRect8 = t8.getBoundingClientRect();
    var taRect = [taRect1, taRect2, taRect3, taRect4, taRect5, taRect6, taRect7, taRect8];
    var isActive = [true, true, true, true, true, true, true, true];
    var targetClass = [".target1", ".target2", ".target3", ".target4", ".target5",
        ".target6", ".target7", ".target8"];

    function checkTarget(targetIndex) {
        const taRectItem = taRect[targetIndex];
        const imageRect = gameImage.getBoundingClientRect();

        if (
            isActive[targetIndex] == true &&
            imageRect.right >= taRectItem.left &&
            imageRect.left <= taRectItem.right &&
            imageRect.bottom >= taRectItem.top &&
            imageRect.top <= taRectItem.bottom
        ) {
            UpdateScore();
            isActive[targetIndex] = false;
            document.querySelector(targetClass[targetIndex]).style.backgroundColor = "#ffb5d7";
            document.querySelector(targetClass[targetIndex]).style.color = "#ffb5d7";
        }
    }

    function moveImage(event) {
        if (!isPlaying) return;

        const mouseX = event.clientX;
        const mouseY = event.clientY;

        gameImage.style.transform = `translate(${mouseX}px, ${mouseY}px)`;

        checkCollisions();
        for (let i = 0; i <= 7; i++) {
            checkTarget(i);
        }
    }

    document.addEventListener('mousemove', moveImage);
}