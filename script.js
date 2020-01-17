var summ = 3500;
$('#price').val(`${summ} руб`);

function getValue(a) {
    var part = a.value;
    if(part < 0){
        part = 0;
    }
    return Number(part);
}
function getPrice() {
    var summ = 0;
    var part = document.getElementsByClassName('selec');
    // квадратных метров > 10
    if(getValue(part[0]) < 10){
        $('#meter').val("10");
        summ += 3500;
    }
    else{
        summ += Number(getValue(part[0])) * 350;
    }

    summ += Number(getValue(part[1])) * 250;
    $('#light').val(getValue(part[1]));

    summ += Number(getValue(part[2])) * 200;
    $('#tube').val(getValue(part[2]));

    if(getValue(part[3]) < 5){
        $('#corner').val("4");
    }
    else{
        summ += Number(getValue(part[3])) * 100 - 400;
    }

    if($("#scales").prop("checked")){
        summ += Number(getValue(part[4])) * 250;
        $('#perimeter').val(getValue(part[4]));
    }else{
        summ += Number(getValue(part[4])) * 50;
        $('#perimeter').val(getValue(part[4]));
    }

    $('#price').val(`${summ} руб`);
}

// $('.formPole1').change(function (){
//     getPrice();
// });

$('.formPole1').on('input keyup', function(e) {
    getPrice();
});

$('.showMap').click(function () { 
    $('.textMap').fadeOut(400);
    setTimeout(function(){
        $('.textMap').detach();
    }, 350);
});

$( document ).ready(function(){
    if ($('#header').height() < $(window).height()) {
        $('#header').addClass('allHeight');
    }
});

 $(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top-50;
        $('body,html').animate({scrollTop: top}, 1500);
    });
    $("#ClassLinkCalc").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top-50;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

$(window).scroll(function () { 
    if(window.pageYOffset != 0){
        $('nav #navbarText #menu .nav-link').addClass('hide');
        $('.nav-item > span').addClass('backgroundHide');
        $('nav').addClass('navHide');
    }else{
        $('nav #navbarText #menu .nav-link').removeClass('hide');
        $('.nav-item > span').removeClass('backgroundHide');
        $('nav').removeClass('navHide');
    }
    // $('.navbar-collapse').collapse('hide');
    // $a = $($(this).attr('href'));
    // $('html,body').animate({ scrollTop: $a.offset().top - 50}, 500);
    // return false;
});

if ($(window).width() < 1400) {
    $('#headContact').removeClass('flex-row');
    $('#headContact').addClass('flex-column');
    $('.headBtn').removeClass('ml-4');
    $('.headBtn').addClass('mt-2');
}
if ($(window).width() < 770) {
    $('.animat').detach();
    $('.hid').append('<img src="img/bottom.png" alt="" width="30%" class="moveBottom">');
    $('.rowCalc').removeClass('px-5');
    $('.rowCalc').addClass('px-1');
    $('.divReview').removeClass('px-5');
    $('.divReview').addClass('px-1');
    $('.comments > .row > .col-md-6:nth-child(2)').detach()
}

if($(window).width() < 460){
    $('.rowCalc').removeClass('px-5');
    $('.rowCalc').addClass('px-1');
}
else{
    $("#phone").hide();
}

// Timer
var endDay = [31, 24, 60, 60];
let nowDate = [0,0,0,0];
var date = new Date();
    nowDate[0] = 31 - date.getDate();
    nowDate[1] = 24 - date.getHours();
    nowDate[2] = 60 - date.getMinutes();
    nowDate[3] = 60 - date.getSeconds();
    for (let i = 0; i < nowDate.length; i++) {
        $(`#date${i+1}`).text(nowDate[i]);
    }
setInterval(() => {
    var date = new Date();
    nowDate[0] = 31 - date.getDate();
    nowDate[1] = 24 - date.getHours();
    nowDate[2] = 60 - date.getMinutes();
    nowDate[3] = 60 - date.getSeconds();
    for (let i = 0; i < nowDate.length; i++) {
        $(`#date${i+1}`).text(nowDate[i]);
    }
}, 1000);

function randomInteger(min, max) {
    // получить случайное число от (min-0.5) до (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

let flagPresent = true;
$('.circle').click(function () { 
    if (flagPresent) {
        let present = randomInteger(20, 35);
        $('#NumberPresent').text(present);
        $('.promoCode').text(`newYear20${9*present}20`);
        $('.fonPresent').addClass('rollOut');
    }
    flagPresent = false;
});

$('#retry').click(function () {
    $('.fonPresent').removeClass('rollOut');
    flagPresent = true;
});