$(function () {

    //記住現在的場景
    var currentScene = 1;

    //把按鈕找出來 存起來

    var $doneButton = $("#doneButton");
    //把場景圖找出來 存起來
    var $scene = $("#scene");
    //按下按鈕 要下的決定
    function makeDecision(decision) {
        //根據場景編號換場景
        if (currentScene === 1) {
            currentScene = 2;
        } else if (currentScene === 2) {
            currentScene = decision === 1 ? 3 : 1;
        }else if (currentScene === 3) {
            currentScene = decision === 1 ? 4 : 1;
        }else if (currentScene === 4) {
            currentScene = decision === 1 ? 5 : 1;
        }else if (currentScene === 5) {
            currentScene = decision === 1 ? 6 : 1;
        }else if (currentScene === 6) {
            currentScene = decision === 1 ? 7 : 1;
        }else if (currentScene === 7) {
            currentScene = decision === 1 ? 8 : 1;
        }

        //重新畫網頁
        renderScreen(currentScene);
    }

    //繪製網頁
    function renderScreen(scene) {
        var url = "images/" + scene + ".jpg";
        $scene.attr("src", url);
    }

    $doneButton.click(function () {
        makeDecision(1);
    });





});
