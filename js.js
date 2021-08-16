window.onload = function () {
    let cats = [
        {"cat": document.getElementById("cat1"), "step": 0, "stepY": 0},
        {"cat": document.getElementById("cat2"), "step": 0, "stepY": 0},
        {"cat": document.getElementById("cat3"), "step": 0, "stepY": 0},
        {"cat": document.getElementById("cat4"), "step": 0, "stepY": 0},
        {"cat": document.getElementById("cat5"), "step": 0, "stepY": 0},
    ];
    function moveCat() {
        cats[0].stepY += 400*getRandomInt(3, -3);
        cats[0].step += 400*getRandomInt(3, -3);
    }
    function moveCat1() {
        cats[1].stepY += 400*getRandomInt(3, -3);
        cats[1].step += 400*getRandomInt(3, -3);
    }
    function moveCat2() {
        cats[2].stepY += 400*getRandomInt(3, -3);
        cats[2].step += 400*getRandomInt(3, -3);
    }
    function moveCat3() {
        cats[3].stepY += 400*getRandomInt(3, -3);
        cats[3].step += 400*getRandomInt(3, -3);
    }
    function moveCat4() {
        cats[4].stepY += 400*getRandomInt(3, -3);
        cats[4].step += 400*getRandomInt(3, -3);
    }
    cats[0].cat.addEventListener("mouseenter", moveCat, false);
    cats[1].cat.addEventListener("mouseenter", moveCat1, false);
    cats[2].cat.addEventListener("mouseenter", moveCat2, false);
    cats[3].cat.addEventListener("mouseenter", moveCat3, false);
    cats[4].cat.addEventListener("mouseenter", moveCat4, false);
    console.log(cats);
    const pageWidth = window.innerWidth-cats[0].cat.clientWidth;
    const pageHeight = window.innerHeight-cats[0].cat.clientHeight;
    console.log(pageWidth);
    console.log(pageHeight);
    setInterval(function(){
        for (let number = 0; number < 5; number++) {
            cats[number].cat.style.left = cats[number].step +'px';
            cats[number].cat.style.top = cats[number].stepY +'px';
            cats[number].stepY+=getRandomInt(-90, 90);
            cats[number].step+=getRandomInt(-90, 90);
            if (cats[number].stepY > pageHeight) {                                                      //ограничения
                cats[number].stepY = pageHeight;
            }
            if (cats[number].step > pageWidth) {
                cats[number].step = pageWidth;
            }
            if (cats[number].stepY < 0) {
                cats[number].stepY = 0;
            }
            if (cats[number].step < 0) {
                cats[number].step = 0;
            }
        }
    }, 100)
}
function getRandomInt(min, max) {    //рандомайзер
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

/*
    let step = 0;
    let stepY = 0;
    window.onload = function () {
        let nyanCatElement = document.getElementById("cat2");
        const pageWidth = document.documentElement.scrollWidth-nyanCatElement.clientWidth;
        const pageHeight = document.documentElement.scrollHeight-nyanCatElement.clientHeight;
        nyanCatElement.addEventListener("mouseenter", moveCat, false);
        setInterval(function(){

            nyanCatElement.style.left = step +'px';
            nyanCatElement.style.top = stepY +'px';
            stepY+=getRandomInt(-90, 90);
            step+=getRandomInt(-90, 90);
            if (stepY > pageHeight) {                                                      //ограничения
                stepY = pageHeight;
            }
            if (step > pageWidth) {
                step= pageWidth;
            }
            if (stepY < 0) {
                stepY = 0;
            }
            if (step < 0) {
                step = 0;
            }

        }, 100)
    }
    function getRandomInt(min, max) {    //рандомайзер
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
    function moveCat() {
        stepY += 200*getRandomInt(3, -3);
        step += 200*getRandomInt(3, -3);
}
*/
