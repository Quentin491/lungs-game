function NumbersMode() {

    function moveImage(event) {
        if (!isPlaying) return;

        const mouseX = event.clientX;
        const mouseY = event.clientY;

        gameImage.style.transform = `translate(${mouseX}px, ${mouseY}px)`;

        checkCollisions();
        activeTargets();

        if (activationTargets2 == true) {
            activeTargets2();
        }
    }

    document.addEventListener('mousemove', moveImage);

    var activationTargets2 = false;

    var v1 = document.querySelector('.target1').textContent;
    var v2 = document.querySelector('.target2').textContent;
    var v3 = document.querySelector('.target3').textContent;
    var v4 = document.querySelector('.target4').textContent;
    var v5 = document.querySelector('.target5').textContent;
    var v6 = document.querySelector('.target6').textContent;
    var v7 = document.querySelector('.target7').textContent;
    var v8 = document.querySelector('.target8').textContent;

    var values = [
        { name: "tar1", value: v1 },
        { name: "tar2", value: v2 },
        { name: "tar3", value: v3 },
        { name: "tar4", value: v4 },
        { name: "tar5", value: v5 },
        { name: "tar6", value: v6 },
        { name: "tar7", value: v7 },
        { name: "tar8", value: v8 }
    ];

    values.sort((a, b) => a.value - b.value);
    var values2 = values.map(item => item.name);

    console.log(values2);

    function activeTargets() {
        //   target 1 in first
        if (values2[0] == "tar1" && values2[1] == "tar2" && values2[2] == "tar3" && values2[3] == "tar4") {
            if (nextTarget == 0) {
                const order = [0, 1, 2, 3];
                processScenario(order[0]);
            }
            if (nextTarget == 1) {
                const order = [0, 1, 2, 3];
                processScenario(order[1]);
            }
            if (nextTarget == 2) {
                const order = [0, 1, 2, 3];
                processScenario(order[2]);
            }
            if (nextTarget == 3) {
                const order = [0, 1, 2, 3];
                processScenario(order[3]);
            }
        }
        if (values2[0] == "tar1" && values2[1] == "tar2" && values2[2] == "tar4" && values2[3] == "tar3") {
            if (nextTarget == 0) {
                const order = [0, 1, 3, 2];
                processScenario(order[0]);
            }
            if (nextTarget == 1) {
                const order = [0, 1, 3, 2];
                processScenario(order[1]);
            }
            if (nextTarget == 2) {
                const order = [0, 1, 3, 2];
                processScenario(order[2]);
            }
            if (nextTarget == 3) {
                const order = [0, 1, 3, 2];
                processScenario(order[3]);
            }
        }
        if (values2[0] == "tar1" && values2[1] == "tar3" && values2[2] == "tar2" && values2[3] == "tar4") {
            if (nextTarget == 0) {
                const order = [0, 2, 1, 3];
                processScenario(order[0]);
            }
            if (nextTarget == 1) {
                const order = [0, 2, 1, 3];
                processScenario(order[1]);
            }
            if (nextTarget == 2) {
                const order = [0, 2, 1, 3];
                processScenario(order[2]);
            }
            if (nextTarget == 3) {
                const order = [0, 2, 1, 3];
                processScenario(order[3]);
            }
        }
        if (values2[0] == "tar1" && values2[1] == "tar3" && values2[2] == "tar4" && values2[3] == "tar2") {
            if (nextTarget == 0) {
                const order = [0, 2, 3, 1];
                processScenario(order[0]);
            }
            if (nextTarget == 1) {
                const order = [0, 2, 3, 1];
                processScenario(order[1]);
            }
            if (nextTarget == 2) {
                const order = [0, 2, 3, 1];
                processScenario(order[2]);
            }
            if (nextTarget == 3) {
                const order = [0, 2, 3, 1];
                processScenario(order[3]);
            }
        }
        if (values2[0] == "tar1" && values2[1] == "tar4" && values2[2] == "tar2" && values2[3] == "tar3") {
            if (nextTarget == 0) {
                const order = [0, 3, 1, 2];
                processScenario(order[0]);
            }
            if (nextTarget == 1) {
                const order = [0, 3, 1, 2];
                processScenario(order[1]);
            }
            if (nextTarget == 2) {
                const order = [0, 3, 1, 2];
                processScenario(order[2]);
            }
            if (nextTarget == 3) {
                const order = [0, 3, 1, 2];
                processScenario(order[3]);
            }
        }
        if (values2[0] == "tar1" && values2[1] == "tar4" && values2[2] == "tar3" && values2[3] == "tar2") {
            if (nextTarget == 0) {
                const order = [0, 3, 2, 1];
                processScenario(order[0]);
            }
            if (nextTarget == 1) {
                const order = [0, 3, 2, 1];
                processScenario(order[1]);
            }
            if (nextTarget == 2) {
                const order = [0, 3, 2, 1];
                processScenario(order[2]);
            }
            if (nextTarget == 3) {
                const order = [0, 3, 2, 1];
                processScenario(order[3]);
            }
        }
        //   target 2 in first
        if (values2[0] == "tar2" && values2[1] == "tar1" && values2[2] == "tar3" && values2[3] == "tar4") {
            if (nextTarget == 0) {
                const order = [1, 0, 2, 3];
                processScenario(order[0]);
            }
            if (nextTarget == 1) {
                const order = [1, 0, 2, 3];
                processScenario(order[1]);
            }
            if (nextTarget == 2) {
                const order = [1, 0, 2, 3];
                processScenario(order[2]);
            }
            if (nextTarget == 3) {
                const order = [1, 0, 2, 3];
                processScenario(order[3]);
            }
        }
        if (values2[0] == "tar2" && values2[1] == "tar1" && values2[2] == "tar4" && values2[3] == "tar3") {
            if (nextTarget == 0) {
                const order = [1, 0, 3, 2];
                processScenario(order[0]);
            }
            if (nextTarget == 1) {
                const order = [1, 0, 3, 2];
                processScenario(order[1]);
            }
            if (nextTarget == 2) {
                const order = [1, 0, 3, 2];
                processScenario(order[2]);
            }
            if (nextTarget == 3) {
                const order = [1, 0, 3, 2];
                processScenario(order[3]);
            }
        }
        if (values2[0] == "tar2" && values2[1] == "tar3" && values2[2] == "tar1" && values2[3] == "tar4") {
            if (nextTarget == 0) {
                const order = [1, 2, 0, 3];
                processScenario(order[0]);
            }
            if (nextTarget == 1) {
                const order = [1, 2, 0, 3];
                processScenario(order[1]);
            }
            if (nextTarget == 2) {
                const order = [1, 2, 0, 3];
                processScenario(order[2]);
            }
            if (nextTarget == 3) {
                const order = [1, 2, 0, 3];
                processScenario(order[3]);
            }
        }
        if (values2[0] == "tar2" && values2[1] == "tar3" && values2[2] == "tar4" && values2[3] == "tar1") {
            if (nextTarget == 0) {
                const order = [1, 2, 3, 0];
                processScenario(order[0]);
            }
            if (nextTarget == 1) {
                const order = [1, 2, 3, 0];
                processScenario(order[1]);
            }
            if (nextTarget == 2) {
                const order = [1, 2, 3, 0];
                processScenario(order[2]);
            }
            if (nextTarget == 3) {
                const order = [1, 2, 3, 0];
                processScenario(order[3]);
            }
        }
        if (values2[0] == "tar2" && values2[1] == "tar4" && values2[2] == "tar1" && values2[3] == "tar3") {
            if (nextTarget == 0) {
                const order = [1, 3, 0, 2];
                processScenario(order[0]);
            }
            if (nextTarget == 1) {
                const order = [1, 3, 0, 2];
                processScenario(order[1]);
            }
            if (nextTarget == 2) {
                const order = [1, 3, 0, 2];
                processScenario(order[2]);
            }
            if (nextTarget == 3) {
                const order = [1, 3, 0, 2];
                processScenario(order[3]);
            }
        }
        if (values2[0] == "tar2" && values2[1] == "tar4" && values2[2] == "tar3" && values2[3] == "tar1") {
            if (nextTarget == 0) {
                const order = [1, 3, 2, 0];
                processScenario(order[0]);
            }
            if (nextTarget == 1) {
                const order = [1, 3, 2, 0];
                processScenario(order[1]);
            }
            if (nextTarget == 2) {
                const order = [1, 3, 2, 0];
                processScenario(order[2]);
            }
            if (nextTarget == 3) {
                const order = [1, 3, 2, 0];
                processScenario(order[3]);
            }
        }
        //   target 3 in first
        if (values2[0] == "tar3" && values2[1] == "tar1" && values2[2] == "tar2" && values2[3] == "tar4") {
            if (nextTarget == 0) {
                const order = [2, 0, 1, 3];
                processScenario(order[0]);
            }
            if (nextTarget == 1) {
                const order = [2, 0, 1, 3];
                processScenario(order[1]);
            }
            if (nextTarget == 2) {
                const order = [2, 0, 1, 3];
                processScenario(order[2]);
            }
            if (nextTarget == 3) {
                const order = [2, 0, 1, 3];
                processScenario(order[3]);
            }
        }
        if (values2[0] == "tar3" && values2[1] == "tar1" && values2[2] == "tar4" && values2[3] == "tar2") {
            if (nextTarget == 0) {
                const order = [2, 0, 3, 1];
                processScenario(order[0]);
            }
            if (nextTarget == 1) {
                const order = [2, 0, 3, 1];
                processScenario(order[1]);
            }
            if (nextTarget == 2) {
                const order = [2, 0, 3, 1];
                processScenario(order[2]);
            }
            if (nextTarget == 3) {
                const order = [2, 0, 3, 1];
                processScenario(order[3]);
            }
        }
        if (values2[0] == "tar3" && values2[1] == "tar2" && values2[2] == "tar1" && values2[3] == "tar4") {
            if (nextTarget == 0) {
                const order = [2, 1, 0, 3];
                processScenario(order[0]);
            }
            if (nextTarget == 1) {
                const order = [2, 1, 0, 3];
                processScenario(order[1]);
            }
            if (nextTarget == 2) {
                const order = [2, 1, 0, 3];
                processScenario(order[2]);
            }
            if (nextTarget == 3) {
                const order = [2, 1, 0, 3];
                processScenario(order[3]);
            }
        }
        if (values2[0] == "tar3" && values2[1] == "tar2" && values2[2] == "tar4" && values2[3] == "tar1") {
            if (nextTarget == 0) {
                const order = [2, 1, 3, 0];
                processScenario(order[0]);
            }
            if (nextTarget == 1) {
                const order = [2, 1, 3, 0];
                processScenario(order[1]);
            }
            if (nextTarget == 2) {
                const order = [2, 1, 3, 0];
                processScenario(order[2]);
            }
            if (nextTarget == 3) {
                const order = [2, 1, 3, 0];
                processScenario(order[3]);
            }
        }
        if (values2[0] == "tar3" && values2[1] == "tar4" && values2[2] == "tar1" && values2[3] == "tar2") {
            if (nextTarget == 0) {
                const order = [2, 3, 0, 1];
                processScenario(order[0]);
            }
            if (nextTarget == 1) {
                const order = [2, 3, 0, 1];
                processScenario(order[1]);
            }
            if (nextTarget == 2) {
                const order = [2, 3, 0, 1];
                processScenario(order[2]);
            }
            if (nextTarget == 3) {
                const order = [2, 3, 0, 1];
                processScenario(order[3]);
            }
        }
        if (values2[0] == "tar3" && values2[1] == "tar4" && values2[2] == "tar2" && values2[3] == "tar1") {
            if (nextTarget == 0) {
                const order = [2, 3, 1, 0];
                processScenario(order[0]);
            }
            if (nextTarget == 1) {
                const order = [2, 3, 1, 0];
                processScenario(order[1]);
            }
            if (nextTarget == 2) {
                const order = [2, 3, 1, 0];
                processScenario(order[2]);
            }
            if (nextTarget == 3) {
                const order = [2, 3, 1, 0];
                processScenario(order[3]);
            }
        }
        //    target 4 in first
        if (values2[0] == "tar4" && values2[1] == "tar1" && values2[2] == "tar2" && values2[3] == "tar3") {
            if (nextTarget == 0) {
                const order = [3, 0, 1, 2];
                processScenario(order[0]);
            }
            if (nextTarget == 1) {
                const order = [3, 0, 1, 2];
                processScenario(order[1]);
            }
            if (nextTarget == 2) {
                const order = [3, 0, 1, 2];
                processScenario(order[2]);
            }
            if (nextTarget == 3) {
                const order = [3, 0, 1, 2];
                processScenario(order[3]);
            }
        }
        if (values2[0] == "tar4" && values2[1] == "tar1" && values2[2] == "tar3" && values2[3] == "tar2") {
            if (nextTarget == 0) {
                const order = [3, 0, 2, 1];
                processScenario(order[0]);
            }
            if (nextTarget == 1) {
                const order = [3, 0, 2, 1];
                processScenario(order[1]);
            }
            if (nextTarget == 2) {
                const order = [3, 0, 2, 1];
                processScenario(order[2]);
            }
            if (nextTarget == 3) {
                const order = [3, 0, 2, 1];
                processScenario(order[3]);
            }
        }
        if (values2[0] == "tar4" && values2[1] == "tar2" && values2[2] == "tar1" && values2[3] == "tar3") {
            if (nextTarget == 0) {
                const order = [3, 1, 0, 2];
                processScenario(order[0]);
            }
            if (nextTarget == 1) {
                const order = [3, 1, 0, 2];
                processScenario(order[1]);
            }
            if (nextTarget == 2) {
                const order = [3, 1, 0, 2];
                processScenario(order[2]);
            }
            if (nextTarget == 3) {
                const order = [3, 1, 0, 2];
                processScenario(order[3]);
            }
        }
        if (values2[0] == "tar4" && values2[1] == "tar2" && values2[2] == "tar3" && values2[3] == "tar1") {
            if (nextTarget == 0) {
                const order = [3, 1, 2, 0];
                processScenario(order[0]);
            }
            if (nextTarget == 1) {
                const order = [3, 1, 2, 0];
                processScenario(order[1]);
            }
            if (nextTarget == 2) {
                const order = [3, 1, 2, 0];
                processScenario(order[2]);
            }
            if (nextTarget == 3) {
                const order = [3, 1, 2, 0];
                processScenario(order[3]);
            }
        }
        if (values2[0] == "tar4" && values2[1] == "tar3" && values2[2] == "tar1" && values2[3] == "tar2") {
            if (nextTarget == 0) {
                const order = [3, 2, 0, 1];
                processScenario(order[0]);
            }
            if (nextTarget == 1) {
                const order = [3, 2, 0, 1];
                processScenario(order[1]);
            }
            if (nextTarget == 2) {
                const order = [3, 2, 0, 1];
                processScenario(order[2]);
            }
            if (nextTarget == 3) {
                const order = [3, 2, 0, 1];
                processScenario(order[3]);
            }
        }
        if (values2[0] == "tar4" && values2[1] == "tar3" && values2[2] == "tar2" && values2[3] == "tar1") {
            if (nextTarget == 0) {
                const order = [3, 2, 1, 0];
                processScenario(order[0]);
            }
            if (nextTarget == 1) {
                const order = [3, 2, 1, 0];
                processScenario(order[1]);
            }
            if (nextTarget == 2) {
                const order = [3, 2, 1, 0];
                processScenario(order[2]);
            }
            if (nextTarget == 3) {
                const order = [3, 2, 1, 0];
                processScenario(order[3]);
            }
        }
    }

    function activeTargets2() {
        //   target 5 in first
        if (values2[4] == "tar5" && values2[5] == "tar6" && values2[6] == "tar7" && values2[7] == "tar8") {
            if (nextTarget2 == 0) {
                const order = [0, 1, 2, 3];
                processScenario2(order[0]);
            }
            if (nextTarget2 == 1) {
                const order = [0, 1, 2, 3];
                processScenario2(order[1]);
            }
            if (nextTarget2 == 2) {
                const order = [0, 1, 2, 3];
                processScenario2(order[2]);
            }
            if (nextTarget2 == 3) {
                const order = [0, 1, 2, 3];
                processScenario2(order[3]);
            }
        }
        if (values2[4] == "tar5" && values2[5] == "tar6" && values2[6] == "tar8" && values2[7] == "tar7") {
            if (nextTarget2 == 0) {
                const order = [0, 1, 3, 2];
                processScenario2(order[0]);
            }
            if (nextTarget2 == 1) {
                const order = [0, 1, 3, 2];
                processScenario2(order[1]);
            }
            if (nextTarget2 == 2) {
                const order = [0, 1, 3, 2];
                processScenario2(order[2]);
            }
            if (nextTarget2 == 3) {
                const order = [0, 1, 3, 2];
                processScenario2(order[3]);
            }
        }
        if (values2[4] == "tar5" && values2[5] == "tar7" && values2[6] == "tar6" && values2[7] == "tar8") {
            if (nextTarget2 == 0) {
                const order = [0, 2, 1, 3];
                processScenario2(order[0]);
            }
            if (nextTarget2 == 1) {
                const order = [0, 2, 1, 3];
                processScenario2(order[1]);
            }
            if (nextTarget2 == 2) {
                const order = [0, 2, 1, 3];
                processScenario2(order[2]);
            }
            if (nextTarget2 == 3) {
                const order = [0, 2, 1, 3];
                processScenario2(order[3]);
            }
        }
        if (values2[4] == "tar5" && values2[5] == "tar7" && values2[6] == "tar8" && values2[7] == "tar6") {
            if (nextTarget2 == 0) {
                const order = [0, 2, 3, 1];
                processScenario2(order[0]);
            }
            if (nextTarget2 == 1) {
                const order = [0, 2, 3, 1];
                processScenario2(order[1]);
            }
            if (nextTarget2 == 2) {
                const order = [0, 2, 3, 1];
                processScenario2(order[2]);
            }
            if (nextTarget2 == 3) {
                const order = [0, 2, 3, 1];
                processScenario2(order[3]);
            }
        }
        if (values2[4] == "tar5" && values2[5] == "tar8" && values2[6] == "tar6" && values2[7] == "tar7") {
            if (nextTarget2 == 0) {
                const order = [0, 3, 1, 2];
                processScenario2(order[0]);
            }
            if (nextTarget2 == 1) {
                const order = [0, 3, 1, 2];
                processScenario2(order[1]);
            }
            if (nextTarget2 == 2) {
                const order = [0, 3, 1, 2];
                processScenario2(order[2]);
            }
            if (nextTarget2 == 3) {
                const order = [0, 3, 1, 2];
                processScenario2(order[3]);
            }
        }
        if (values2[4] == "tar5" && values2[5] == "tar8" && values2[6] == "tar7" && values2[7] == "tar6") {
            if (nextTarget2 == 0) {
                const order = [0, 3, 2, 1];
                processScenario2(order[0]);
            }
            if (nextTarget2 == 1) {
                const order = [0, 3, 2, 1];
                processScenario2(order[1]);
            }
            if (nextTarget2 == 2) {
                const order = [0, 3, 2, 1];
                processScenario2(order[2]);
            }
            if (nextTarget2 == 3) {
                const order = [0, 3, 2, 1];
                processScenario2(order[3]);
            }
        }
        //   target 6 in first
        if (values2[4] == "tar6" && values2[5] == "tar5" && values2[6] == "tar7" && values2[7] == "tar8") {
            if (nextTarget2 == 0) {
                const order = [1, 0, 2, 3];
                processScenario2(order[0]);
            }
            if (nextTarget2 == 1) {
                const order = [1, 0, 2, 3];
                processScenario2(order[1]);
            }
            if (nextTarget2 == 2) {
                const order = [1, 0, 2, 3];
                processScenario2(order[2]);
            }
            if (nextTarget2 == 3) {
                const order = [1, 0, 2, 3];
                processScenario2(order[3]);
            }
        }
        if (values2[4] == "tar6" && values2[5] == "tar5" && values2[6] == "tar8" && values2[7] == "tar7") {
            if (nextTarget2 == 0) {
                const order = [1, 0, 3, 2];
                processScenario2(order[0]);
            }
            if (nextTarget2 == 1) {
                const order = [1, 0, 3, 2];
                processScenario2(order[1]);
            }
            if (nextTarget2 == 2) {
                const order = [1, 0, 3, 2];
                processScenario2(order[2]);
            }
            if (nextTarget2 == 3) {
                const order = [1, 0, 3, 2];
                processScenario2(order[3]);
            }
        }
        if (values2[4] == "tar6" && values2[5] == "tar7" && values2[6] == "tar5" && values2[7] == "tar8") {
            if (nextTarget2 == 0) {
                const order = [1, 2, 0, 3];
                processScenario2(order[0]);
            }
            if (nextTarget2 == 1) {
                const order = [1, 2, 0, 3];
                processScenario2(order[1]);
            }
            if (nextTarget2 == 2) {
                const order = [1, 2, 0, 3];
                processScenario2(order[2]);
            }
            if (nextTarget2 == 3) {
                const order = [1, 2, 0, 3];
                processScenario2(order[3]);
            }
        }
        if (values2[4] == "tar6" && values2[5] == "tar7" && values2[6] == "tar8" && values2[7] == "tar5") {
            if (nextTarget2 == 0) {
                const order = [1, 2, 3, 0];
                processScenario2(order[0]);
            }
            if (nextTarget2 == 1) {
                const order = [1, 2, 3, 0];
                processScenario2(order[1]);
            }
            if (nextTarget2 == 2) {
                const order = [1, 2, 3, 0];
                processScenario2(order[2]);
            }
            if (nextTarget2 == 3) {
                const order = [1, 2, 3, 0];
                processScenario2(order[3]);
            }
        }
        if (values2[4] == "tar6" && values2[5] == "tar8" && values2[6] == "tar5" && values2[7] == "tar7") {
            if (nextTarget2 == 0) {
                const order = [1, 3, 0, 2];
                processScenario2(order[0]);
            }
            if (nextTarget2 == 1) {
                const order = [1, 3, 0, 2];
                processScenario2(order[1]);
            }
            if (nextTarget2 == 2) {
                const order = [1, 3, 0, 2];
                processScenario2(order[2]);
            }
            if (nextTarget2 == 3) {
                const order = [1, 3, 0, 2];
                processScenario2(order[3]);
            }
        }
        if (values2[4] == "tar6" && values2[5] == "tar8" && values2[6] == "tar7" && values2[7] == "tar5") {
            if (nextTarget2 == 0) {
                const order = [1, 3, 2, 0];
                processScenario2(order[0]);
            }
            if (nextTarget2 == 1) {
                const order = [1, 3, 2, 0];
                processScenario2(order[1]);
            }
            if (nextTarget2 == 2) {
                const order = [1, 3, 2, 0];
                processScenario2(order[2]);
            }
            if (nextTarget2 == 3) {
                const order = [1, 3, 2, 0];
                processScenario2(order[3]);
            }
        }
        //   target 7 in first
        if (values2[4] == "tar7" && values2[5] == "tar5" && values2[6] == "tar6" && values2[7] == "tar8") {
            if (nextTarget2 == 0) {
                const order = [2, 0, 1, 3];
                processScenario2(order[0]);
            }
            if (nextTarget2 == 1) {
                const order = [2, 0, 1, 3];
                processScenario2(order[1]);
            }
            if (nextTarget2 == 2) {
                const order = [2, 0, 1, 3];
                processScenario2(order[2]);
            }
            if (nextTarget2 == 3) {
                const order = [2, 0, 1, 3];
                processScenario2(order[3]);
            }
        }
        if (values2[4] == "tar7" && values2[5] == "tar5" && values2[6] == "tar8" && values2[7] == "tar6") {
            if (nextTarget2 == 0) {
                const order = [2, 0, 3, 1];
                processScenario2(order[0]);
            }
            if (nextTarget2 == 1) {
                const order = [2, 0, 3, 1];
                processScenario2(order[1]);
            }
            if (nextTarget2 == 2) {
                const order = [2, 0, 3, 1];
                processScenario2(order[2]);
            }
            if (nextTarget2 == 3) {
                const order = [2, 0, 3, 1];
                processScenario2(order[3]);
            }
        }
        if (values2[4] == "tar7" && values2[5] == "tar6" && values2[6] == "tar5" && values2[7] == "tar8") {
            if (nextTarget2 == 0) {
                const order = [2, 1, 0, 3];
                processScenario2(order[0]);
            }
            if (nextTarget2 == 1) {
                const order = [2, 1, 0, 3];
                processScenario2(order[1]);
            }
            if (nextTarget2 == 2) {
                const order = [2, 1, 0, 3];
                processScenario2(order[2]);
            }
            if (nextTarget2 == 3) {
                const order = [2, 1, 0, 3];
                processScenario2(order[3]);
            }
        }
        if (values2[4] == "tar7" && values2[5] == "tar6" && values2[6] == "tar8" && values2[7] == "tar5") {
            if (nextTarget2 == 0) {
                const order = [2, 1, 3, 0];
                processScenario2(order[0]);
            }
            if (nextTarget2 == 1) {
                const order = [2, 1, 3, 0];
                processScenario2(order[1]);
            }
            if (nextTarget2 == 2) {
                const order = [2, 1, 3, 0];
                processScenario2(order[2]);
            }
            if (nextTarget2 == 3) {
                const order = [2, 1, 3, 0];
                processScenario2(order[3]);
            }
        }
        if (values2[4] == "tar7" && values2[5] == "tar8" && values2[6] == "tar5" && values2[7] == "tar6") {
            if (nextTarget2 == 0) {
                const order = [2, 3, 0, 1];
                processScenario2(order[0]);
            }
            if (nextTarget2 == 1) {
                const order = [2, 3, 0, 1];
                processScenario2(order[1]);
            }
            if (nextTarget2 == 2) {
                const order = [2, 3, 0, 1];
                processScenario2(order[2]);
            }
            if (nextTarget2 == 3) {
                const order = [2, 3, 0, 1];
                processScenario2(order[3]);
            }
        }
        if (values2[4] == "tar7" && values2[5] == "tar8" && values2[6] == "tar6" && values2[7] == "tar5") {
            if (nextTarget2 == 0) {
                const order = [2, 3, 1, 0];
                processScenario2(order[0]);
            }
            if (nextTarget2 == 1) {
                const order = [2, 3, 1, 0];
                processScenario2(order[1]);
            }
            if (nextTarget2 == 2) {
                const order = [2, 3, 1, 0];
                processScenario2(order[2]);
            }
            if (nextTarget2 == 3) {
                const order = [2, 3, 1, 0];
                processScenario2(order[3]);
            }
        }
        //   target 8 in first
        if (values2[4] == "tar8" && values2[5] == "tar5" && values2[6] == "tar6" && values2[7] == "tar7") {
            if (nextTarget2 == 0) {
                const order = [3, 0, 1, 2];
                processScenario2(order[0]);
            }
            if (nextTarget2 == 1) {
                const order = [3, 0, 1, 2];
                processScenario2(order[1]);
            }
            if (nextTarget2 == 2) {
                const order = [3, 0, 1, 2];
                processScenario2(order[2]);
            }
            if (nextTarget2 == 3) {
                const order = [3, 0, 1, 2];
                processScenario2(order[3]);
            }
        }
        if (values2[4] == "tar8" && values2[5] == "tar5" && values2[6] == "tar7" && values2[7] == "tar6") {
            if (nextTarget2 == 0) {
                const order = [3, 0, 2, 1];
                processScenario2(order[0]);
            }
            if (nextTarget2 == 1) {
                const order = [3, 0, 2, 1];
                processScenario2(order[1]);
            }
            if (nextTarget2 == 2) {
                const order = [3, 0, 2, 1];
                processScenario2(order[2]);
            }
            if (nextTarget2 == 3) {
                const order = [3, 0, 2, 1];
                processScenario2(order[3]);
            }
        }
        if (values2[4] == "tar8" && values2[5] == "tar6" && values2[6] == "tar5" && values2[7] == "tar7") {
            if (nextTarget2 == 0) {
                const order = [3, 1, 0, 2];
                processScenario2(order[0]);
            }
            if (nextTarget2 == 1) {
                const order = [3, 1, 0, 2];
                processScenario2(order[1]);
            }
            if (nextTarget2 == 2) {
                const order = [3, 1, 0, 2];
                processScenario2(order[2]);
            }
            if (nextTarget2 == 3) {
                const order = [3, 1, 0, 2];
                processScenario2(order[3]);
            }
        }
        if (values2[4] == "tar8" && values2[5] == "tar6" && values2[6] == "tar7" && values2[7] == "tar5") {
            if (nextTarget2 == 0) {
                const order = [3, 1, 2, 0];
                processScenario2(order[0]);
            }
            if (nextTarget2 == 1) {
                const order = [3, 1, 2, 0];
                processScenario2(order[1]);
            }
            if (nextTarget2 == 2) {
                const order = [3, 1, 2, 0];
                processScenario2(order[2]);
            }
            if (nextTarget2 == 3) {
                const order = [3, 1, 2, 0];
                processScenario2(order[3]);
            }
        }
        if (values2[4] == "tar8" && values2[5] == "tar7" && values2[6] == "tar5" && values2[7] == "tar6") {
            if (nextTarget2 == 0) {
                const order = [3, 2, 0, 1];
                processScenario2(order[0]);
            }
            if (nextTarget2 == 1) {
                const order = [3, 2, 0, 1];
                processScenario2(order[1]);
            }
            if (nextTarget2 == 2) {
                const order = [3, 2, 0, 1];
                processScenario2(order[2]);
            }
            if (nextTarget2 == 3) {
                const order = [3, 2, 0, 1];
                processScenario2(order[3]);
            }
        }
        if (values2[4] == "tar8" && values2[5] == "tar7" && values2[6] == "tar6" && values2[7] == "tar5") {
            if (nextTarget2 == 0) {
                const order = [3, 2, 1, 0];
                processScenario2(order[0]);
            }
            if (nextTarget2 == 1) {
                const order = [3, 2, 1, 0];
                processScenario2(order[1]);
            }
            if (nextTarget2 == 2) {
                const order = [3, 2, 1, 0];
                processScenario2(order[2]);
            }
            if (nextTarget2 == 3) {
                const order = [3, 2, 1, 0];
                processScenario2(order[3]);
            }
        }
    }

    // Left Lung
    var activeT = [true, true, true, true];
    var isTouchedT = [false, false, false, false];
    var tRect1 = t1.getBoundingClientRect();
    var tRect2 = t2.getBoundingClientRect();
    var tRect3 = t3.getBoundingClientRect();
    var tRect4 = t4.getBoundingClientRect();
    var tRect = [tRect1, tRect2, tRect3, tRect4]
    var nextTarget = 0;

    function processScenario(targetIndex) {
        const tRectItem = tRect[targetIndex];
        const imageRect = gameImage.getBoundingClientRect();

        if (
            activeT[targetIndex] &&
            imageRect.right >= tRectItem.left &&
            imageRect.left <= tRectItem.right &&
            imageRect.bottom >= tRectItem.top &&
            imageRect.top <= tRectItem.bottom
        ) {
            activeT[targetIndex] = false;
            isTouchedT[targetIndex] = true;
            document.querySelector(`.target${targetIndex + 1}`).style.backgroundColor = "#ffb5d7";
            document.querySelector(`.target${targetIndex + 1}`).style.color = "#ffb5d7";
            UpdateScore();

            if (nextTarget == 3) {
                activationTargets2 = true;
            } else {
                nextTarget += 1;
            }
        }
    }

    // Right Lung
    var activeT2 = [true, true, true, true];
    var isTouchedT2 = [false, false, false, false];
    var tRect5 = t5.getBoundingClientRect();
    var tRect6 = t6.getBoundingClientRect();
    var tRect7 = t7.getBoundingClientRect();
    var tRect8 = t8.getBoundingClientRect();
    var tRect2 = [tRect5, tRect6, tRect7, tRect8]
    var nextTarget2 = 0;

    function processScenario2(targetIndex) {
        const tRectItem2 = tRect2[targetIndex];
        const imageRect = gameImage.getBoundingClientRect();

        if (
            activeT2[targetIndex] &&
            imageRect.right >= tRectItem2.left &&
            imageRect.left <= tRectItem2.right &&
            imageRect.bottom >= tRectItem2.top &&
            imageRect.top <= tRectItem2.bottom
        ) {
            activeT2[targetIndex] = false;
            isTouchedT2[targetIndex] = true;
            document.querySelector(`.target${targetIndex + 5}`).style.backgroundColor = "#ffb5d7";
            document.querySelector(`.target${targetIndex + 5}`).style.color = "#ffb5d7";
            nextTarget2 += 1;
            UpdateScore();
        }
    }
}