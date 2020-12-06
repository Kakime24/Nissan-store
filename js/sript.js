function change(element){
    var a = element.innerHTML;
    switch(a){
        case "X-Trail":
        document.getElementById("himg").src = "images/xtrail.png";
        document.getElementById("himg").style.width="40%";
        document.getElementById("himg").style.marginTop="200px";
        document.getElementById("himg").style.marginLeft="100px";
        document.getElementById("h1").innerHTML = "NISSAN X-TRAIL";
        document.getElementById("h1").style.marginTop="-420px";
        document.getElementById("h1").style.marginLeft="950px";
        document.getElementById("h2").innerHTML = "Ниссан Икстрейл Новый в Алматы в автосалонах Eurasia Motor <br> Almaty и Aster Auto Nissan по цене от 9 954 000 ₸ до 15 134 000 <br> ₸. Вы можете купить новый кроссовер Nissan X-Trail NEW 2020 <br> года выпуска в 25 комплектациях c MT, CVT, AT и объёмом <br> двигателя 2.0 л (144 л. с.), 2.5 л (171 л. с.), 1.6 л (130 л. с.)";
        document.getElementById("h2").style.marginLeft="950px";
        document.body.style.overflow = "hidden";
        document.body.style = "media";
        break;

        case "Murano":
        document.getElementById("himg").src = "images/murano.png";
        document.getElementById("himg").style.width="38%";
        document.getElementById("himg").style.marginTop="200px";
        document.getElementById("himg").style.marginLeft="100px";
        document.getElementById("h1").innerHTML = "NISSAN MURANO";
        document.getElementById("h1").style.marginTop="-420px";
        document.getElementById("h1").style.marginLeft="950px";
        document.getElementById("h2").innerHTML = "Ниссан Мурано в Алматы в автосалонах Aster Auto Nissan и <br> Eurasia Motor Almaty по цене от 17 199 000 ₸ до 20 569 000 ₸. <br> Вы можете купить новый кроссовер Nissan Murano 2020 <br> года выпуска в 6 комплектациях c AT и объёмом двигателя <br> 3.5 л (249 л. с.)";
        document.getElementById("h2").style.marginLeft="950px";
        document.body.style.overflow = "hidden";
        break;

        case "Juke":
        document.getElementById("himg").src = "images/Juke.png";
        document.getElementById("himg").style.width="40%";
        document.getElementById("himg").style.marginTop="200px";
        document.getElementById("himg").style.marginLeft="100px";
        document.getElementById("h1").innerHTML = "NISSAN JUKE";
        document.getElementById("h1").style.marginTop="-420px";
        document.getElementById("h1").style.marginLeft="950px";
        document.getElementById("h2").innerHTML = "Ниссан Икстрейл Новый в Алматы в автосалонах Eurasia Motor <br> Almaty и Aster Auto Nissan по цене от 9 954 000 ₸ до 15 134 000 <br> ₸. Вы можете купить новый кроссовер Nissan X-Trail NEW 2020 <br> года выпуска в 25 комплектациях c MT, CVT, AT и объёмом <br> двигателя 2.0 л (144 л. с.), 2.5 л (171 л. с.), 1.6 л (130 л. с.)";
        document.getElementById("h2").style.marginLeft="950px";
        document.body.style.overflow = "hidden";
        break;

        case "Teana":
        document.getElementById("himg").src = "images/teana.png";
        document.getElementById("himg").style.width="38%";
        document.getElementById("himg").style.marginTop="200px";
        document.getElementById("himg").style.marginLeft="100px";
        document.getElementById("h1").innerHTML = "NISSAN TEANA";
        document.getElementById("h1").style.marginTop="-355px";
        document.getElementById("h1").style.marginLeft="950px";
        document.getElementById("h2").innerHTML = "Ниссан Мурано в Алматы в автосалонах Aster Auto Nissan и <br> Eurasia Motor Almaty по цене от 17 199 000 ₸ до 20 569 000 ₸. <br> Вы можете купить новый кроссовер Nissan Murano 2020 <br> года выпуска в 6 комплектациях c AT и объёмом двигателя <br> 3.5 л (249 л. с.)";
        document.getElementById("h2").style.marginLeft="950px";
        document.body.style.overflow = "hidden";
        break;
    }
    $("#himg").animate({left: '+=100px', opacity: '0'}, "s");
	$("#himg").animate({left: '-=200px', opacity: '1'}, "slow");
	$("#himg").animate({left: '+=200px', opacity: '0'}, "slow");
	$("#himg").animate({left: '-=100px', opacity: '1'}, "slow");
}

function big(element){
    element.style.fontSize = "30px";
}

function small(element){
    element.style.fontSize = "20px";
}

function load(){
    $(".block2").animate({opacity: '1'}, "slow");
}

function vhod(){
    var btn = document.getElementById("btn_white").innerHTML;
    if(btn == "Авторизоваться"){
        btn = document.getElementById("btn_white").innerHTML = "Вход";
        document.querySelector(".vhod").style.display = "flex";
        $(".vhod").animate({opacity: "1"}, "slow");
        document.body.style.overflow = "hidden";
    }
    if(btn == "Вход"){
        document.querySelector(".vhod").style.display = "flex";
        $(".vhod").animate({opacity: "1"}, "slow");
        document.body.style.overflow = "hidden";
    }
    else{
        logout();
    }
}

function zakaz(){
    var btn = document.getElementById("ftn_white").innerHTML;
    if(btn == "Оставить заявку"){
           $(".zakaz").animate({opacity: "1"}, "slow");
    document.querySelector(".zakaz").style.display = "flex";
    document.body.style.overflow = "hidden";
    }
}

function regist(){
    var btn = document.getElementById("rtn_white").innerHTML;
    if(btn == "Зарегистрировать аккаунт"){
        document.querySelector(".regist").style.display = "flex";
        $(".regist").animate({opacity: "1"}, "slow");
        document.body.style.overflow = "hidden";
        document.querySelector(".vhod").style.display = "none";
    }
    else{
        logout();
    }
}

function close_vhod(){
    $(".vhod").animate({opacity: "0"}, "slow");
    document.querySelector(".vhod").style.display = "none";
    document.body.style.overflow = "scroll";
    document.getElementById("username").value = "";
    document.getElementById("pass").value = "";
}

function login(name){
    document.querySelector(".user_profile").style.display = "inline";
    $(".vhod").animate({opacity: "1"}, "slow");
    document.body.style.overflow = "hidden";
    document.getElementById("user_name").innerHTML = name;
    document.getElementById("btn_white").innerHTML = "Выйти";
    close_vhod();
}

function logout(){
    document.querySelector(".user_profile").style.display = "none";
    document.getElementById("btn_white").innerHTML = "Вход";
}


function close_regist(){
    $(".regist").animate({opacity: "1"}, "slow");
    document.querySelector(".regist").style.display = "none";
    document.body.style.overflow = "scroll";
    document.getElementById("name").value = "";
    document.getElementById("surname").value = "";
}

function close_zakaz(){
    $(".zakaz").animate({opacity: "0"}, "slow");
    document.querySelector(".zakaz").style.display = "none";
    document.body.style.overflow = "scroll";
    document.getElementById("username").value = "";
    document.getElementById("pass").value = "";
}

function registry(){
    document.querySelector(".regist").style.display = "none";
    document.querySelector(".vhod").style.display = "flex";
}

function zakaz1(){
    $(".zakaz").animate({opacity: "0"}, "slow");
    document.querySelector(".zakaz").style.display = "none";
    document.body.style.overflow = "scroll";
    }

ymaps.ready(init);
function init() {
    var myMap = new ymaps.Map("map", {
            center: [47.106811, 51.916874],
            zoom: 16
        }, {
            searchControlProvider: 'yandex#search'
        }),

    // Создаем геообъект с типом геометрии "Точка".
        myGeoObject = new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [47.106756, 51.914889]
            },
            // Свойства.
            properties: {
                // Контент метки.
                iconContent: 'Местоположение',
                hintContent: 'Можете подвигнуть куда угодно'
            }
        }, {
            // Опции.
            // Иконка метки будет растягиваться под размер ее содержимого.
            preset: 'islands#blackStretchyIcon',
            // Метку можно перемещать.
            draggable: true
        }),
        myPieChart = new ymaps.Placemark();

    myMap.geoObjects
        .add(myGeoObject)
        .add(myPieChart)
        .add(new ymaps.Placemark([47.100396, 51.912185], {
            balloonContent: 'Прикаспийский современный высший колледж'
        }, {
            preset: 'islands#icon',
            iconColor: '#0095b6'
        }))
        .add(new ymaps.Placemark([47.098304, 51.912140], {
            balloonContent: '<strong>Атырауская гуманитарная университет</strong>'
        }, {
            preset: 'islands#dotIcon',
            iconColor: '#735184'
        }))
        .add(new ymaps.Placemark([47.103499, 51.908394], {
            balloonContent: 'цвет <strong>Сеним учебное заведение</strong>'
        }, {
            preset: 'islands#circleIcon',
            iconColor: '#3caa3c'
        }))
        .add(new ymaps.Placemark([47.104419, 51.906193], {
            balloonContent: 'цвет <strong>Алтел и Теле2 центр</strong>'
        }, {
            preset: 'islands#circleDotIcon',
            iconColor: 'yellow'
        }))
        var myCircle = new ymaps.Circle([
        // Координаты центра круга.
        [47.100426, 51.913613],
        // Радиус круга в метрах.
        10
    ], {
        // Описываем свойства круга.
        // Содержимое балуна.
        balloonContent: "Радиус круга - 10 м",
        // Содержимое хинта.
        hintContent: "Подвинь меня"
    }, {
        // Задаем опции круга.
        // Включаем возможность перетаскивания круга.
        draggable: true,
        // Цвет заливки.
        // Последний байт (77) определяет прозрачность.
        // Прозрачность заливки также можно задать используя опцию "fillOpacity".
        fillColor: "#DB709377",
        // Цвет обводки.
        strokeColor: "#990066",
        // Прозрачность обводки.
        strokeOpacity: 0.8,
        // Ширина обводки в пикселях.
        strokeWidth: 5
    });

    // Добавляем круг на карту.
    myMap.geoObjects.add(myCircle);

    var myPolyline = new ymaps.Polyline([
            // Указываем координаты вершин.
            [47.100426, 51.913613],
            [47.098304, 51.912140],
            [47.100396, 51.912185],
            [47.103499, 51.908394],
            [47.104419, 51.906193]
        ], {}, {
            // Задаем опции геообъекта.
            // Цвет с прозрачностью.
            strokeColor: '#FF008888'
        });
        myMap.geoObjects.add(myPolyline);
         var myPolyline = new ymaps.Polyline([
        // Указываем координаты вершин.
        [47.104677, 51.912365],
        [47.106333, 51.900866],
        [47.105707, 51.896941],
        [47.105707, 51.895360]
    ], {}, {
        // Задаем опции геообъекта.
        // Цвет с прозрачностью.
        strokeColor: "#00000088",
        // Ширину линии.
        strokeWidth: 4,
        // Максимально допустимое количество вершин в ломаной.
        editorMaxPoints: 6,
        // Добавляем в контекстное меню новый пункт, позволяющий удалить ломаную.
        editorMenuManager: function (items) {
            items.push({
                title: "Удалить линию",
                onClick: function () {
                    myMap.geoObjects.remove(myPolyline);
                }
            });
            return items;
        }
    });

    // Добавляем линию на карту.
    myMap.geoObjects.add(myPolyline);

    // Включаем режим редактирования.
    myPolyline.editor.startEditing();
}
