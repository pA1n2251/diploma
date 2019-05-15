

; (function () {


    // *******************************************************

    /* Список кнопок */
    var buttonsList = new Array(
        new Button(
            "Музей Франциска Скорины",
            "fs.html",
            "fsdata/pano_9/html5/0.jpg"
        ),
        new Button("Музей спортивной славы",
            "sport.html"),
        new Button("Музей биологии",
            "biology.html",
            "biologydata/img_litle_25/html5/0.jpg"),
        new Button("Музей Геологии",
            "geology.html"),
        new Button("Музей Истории",
            "history.html"),
        new Button("Музей ГГУ",
            "gsu.html"),
        new Button("Библиотека минералов",
            "http://old.gsu.by/biglib/gsu/физический/asoi/3DlibGEO/")

    );

    var hoverText = document.createElement("p");

    hoverText.className = "hover-text";


    /* Стили */
    var NAV_DIV_STYLES = "nav-div";
    var BAR_DIV_STYLES = "bar-div";
    var BAR_STYLE = "bar-hr";
    var UL_STLYE = "nav-ul-list";
    var LI_STYLE = "nav-li";


    /* Остальные настройки */
    var A_TARGET = "_self";
    var IMG_WIDTH = "200px";
    var IMG_HEIGHT = "140px";


    // *******************************************************


    /* Текущий URL */
    var htmlUrl = window.location.href;
    /* Адрес этого скрипта */
    var scriptUrl = document.currentScript.src;
    /* Определение каталога, в котором находится скрипт */
    var scriptPosition = scriptUrl.lastIndexOf("/");
    var SCRIPT_PATH = scriptUrl.substring(0, scriptPosition + 1);
    /* Адрес текущей страницы относительно скрипта */
    var currentHtml = htmlUrl.substring(scriptPosition + 1);
    var docName = htmlUrl.substring(htmlUrl.lastIndexOf("/") + 1);




    // *******************************************************

    /* Конструктор кнопок */
    function Button(title, ref, image) {
        this.title = title + "";
        this.ref = ref + "";
        this.image = image + "";
    }


    /* Навигационный список */
    var buttonsUl = document.createElement("ul");
    buttonsUl.className = UL_STLYE;

    /* Серая панель */
    var navigationDiv = document.createElement("div");
    navigationDiv.className = NAV_DIV_STYLES;

    /* Навигационный блок */
    var barsDiv = document.createElement("div");
    barsDiv.className = BAR_DIV_STYLES;



    // Формирование баров
    for (var i = 0; i < 3; i++) {
        var bar = document.createElement("hr");
        bar.className = BAR_STYLE;

        barsDiv.appendChild(bar);
    }

    buttonsUl.appendChild(barsDiv);

    // Формирование кнопок
    buttonsList.forEach(button => {
        // li
        var liButton = document.createElement("li");
        liButton.className = LI_STYLE;
        // li > a
        var buttonLink = document.createElement("a");
        // li > img
        var buttonImage = document.createElement("img");


        // ссылка на страницу
        if (button.ref.startsWith("http")) {
            buttonLink.href = button.ref;
        } else {
            buttonLink.href = SCRIPT_PATH + button.ref;
        }
        // содержимое кнопки
        buttonLink.innerHTML = button.title;
        // способ открытия страницы
        buttonLink.target = A_TARGET;


        // путь к изображению
        buttonImage.src = SCRIPT_PATH + button.image;
        // ширина изображения
        buttonImage.style.width = IMG_WIDTH;
        // высота изображения
        buttonImage.style.height = IMG_HEIGHT;

        if (button.ref.indexOf(docName) != -1) {
            hoverText.innerHTML = button.title;
        }

        liButton.appendChild(buttonLink);
        if (button.image === "undefined") {
            liButton.style.height = "40px";
        } else {
            liButton.appendChild(buttonImage);
        }
        buttonsUl.appendChild(liButton);
    });


    // *******************************************************


    navigationDiv.appendChild(buttonsUl);
    navigationDiv.appendChild(hoverText);
    document.body.appendChild(navigationDiv);

    // /* Добавление div с bars */
    // navigationDiv.appendChild(barsDiv);
    // buttonsUl.appendChild(navigationDiv);
    // document.body.appendChild(buttonsUl);
})();