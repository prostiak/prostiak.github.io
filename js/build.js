 $(document).ready(function() {



     //функция для слайдера с работам
     $('.work-button').click(function() {
         //удалили у всех кнопок цвет активный
         var attr = $(this).hasClass('assign');
         console.log(attr)
         if (!attr) {
             $('.work-button').removeClass('assign');
             $(this).addClass('assign');
             //получили атрибут, по которому показываются работы
             var dataType = $(this).attr('data-type');
             console.log(dataType)
             var allWorks = $('.block-work');

             $(allWorks).hide('slow');
             var actualWork = $('.block-work[data-type=' + '"' + dataType + '"' + ']');
             for (i = 0; i < actualWork.length; i++) {
                 $(actualWork).eq(i).show('slow');

             }
         }


     });


     //функция для меню на мобилке
     $('.menu-arrow').click(function() {   
        $(this).hide();
        $('.menu-mobile').hide();
        $('.menu-arrow.hide').show();
     });
       $('.menu-arrow.hide').click(function() {   
        $(this).hide();
        $('.menu-mobile').show();
        $('.menu-arrow.show').show();
     });

     //просто какой-то код с инета, который позволяет скроллить к разделу
     $('.scroll-link').click(function() {

         if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

             var target = $(this.hash);
             target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
             if (target.length) {
                 $('html,body').animate({
                     scrollTop: target.offset().top
                 }, 1000);
                 return false;
             }
         }

     });

     //код для вывода тайминга
     let QADate = new Date("Jul 1, 2013 09:00:00").getTime();
     let WebDate = new Date("Aug 15, 2017 18:00:00").getTime();

     function timer(countDownDate, id) {
         setInterval(function() {

             // Get todays date and time
             var now = new Date().getTime();
             // Find the distance between now an the count down date
             var distance = now - countDownDate;
             // Time calculations for days, hours, minutes and seconds
             var days = Math.floor(distance / (1000 * 60 * 60 * 24));
             var years = Math.floor(days / 365)
             //узнала, сколько точно дней
             var days_final = days - years * 365
             var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
             var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
             var seconds = Math.floor((distance % (1000 * 60)) / 1000);
             if (years == 0) {
                  var result ="<div class='timer-wrapper'><p>"+ days_final +"</p>" +
                 "<br><span>days</span></div> " + "<div class='timer-wrapper'><p>"+ hours +"</p>" + "<br><span>hours</span></div> " +
                 "<div class='timer-wrapper'><p>"+ minutes +"</p>" + "<br><span>minutes</span></div> " +
                 "<div class='timer-wrapper'><p>"+ seconds +"</p>" + "<br><span>seconds</span></div> ";
             } else {
                 var result ="<div class='timer-wrapper'><p>"+ years +"</p>" + "<br><span>years</span></div> "+ "<div class='timer-wrapper'><p>"+ days_final +"</p>" +
                 "<br><span>days</span></div> " + "<div class='timer-wrapper'><p>"+ hours +"</p>" + "<br><span>hours</span></div> " +
                 "<div class='timer-wrapper'><p>"+ minutes +"</p>" + "<br><span>minutes</span></div> " +
                 "<div class='timer-wrapper'><p>"+ seconds +"</p>" + "<br><span>seconds</span></div> "
             }


             $(id).html(result);
         }, 1000);
     }

     timer(QADate, "#timerqa")
     timer(WebDate, "#timerweb")


     var map = new GMaps({
         el: '#map',
         lat: 55.756631,
         lng: 37.624376,
         styles: [
             { elementType: 'geometry', stylers: [{ color: '#e6e9ee' }] },
             { elementType: 'labels.text.stroke', stylers: [{ color: '#d4d8e0' }] },
             { elementType: 'labels.text.fill', stylers: [{ color: '#d4d8e0' }] },
             {
                 featureType: 'administrative.locality',
                 elementType: 'labels.text.fill',
                 stylers: [{ color: '#67747f' }]
             },
             {
                 featureType: 'poi',
                 elementType: 'labels.text.fill',
                 stylers: [{ color: '#67747f' }]
             },
             {
                 featureType: 'poi.park',
                 elementType: 'geometry',
                 stylers: [{ color: '#ffffff' }]
             },
             {
                 featureType: 'poi.park',
                 elementType: 'labels.text.fill',
                 stylers: [{ color: '#ffffff' }]
             },
             {
                 featureType: 'road',
                 elementType: 'geometry',
                 stylers: [{ color: '#ffffff' }]
             },
             {
                 featureType: 'road',
                 elementType: 'geometry.stroke',
                 stylers: [{ color: '#ffffff' }]
             },
             {
                 featureType: 'road',
                 elementType: 'labels.text.fill',
                 stylers: [{ color: '#67747f' }]
             },
             {
                 featureType: 'road.highway',
                 elementType: 'geometry',
                 stylers: [{ color: '#ffffff' }]
             },
             {
                 featureType: 'road.highway',
                 elementType: 'geometry.stroke',
                 stylers: [{ color: '#ffffff' }]
             },
             {
                 featureType: 'road.highway',
                 elementType: 'labels.text.fill',
                 stylers: [{ color: '#67747f' }]
             },
             {
                 featureType: 'transit',
                 elementType: 'geometry',
                 stylers: [{ color: '#67747f' }]
             },
             {
                 featureType: 'transit.station',
                 elementType: 'labels.text.fill',
                 stylers: [{ color: '#67747f' }]
             },
             {
                 featureType: 'water',
                 elementType: 'geometry',
                 stylers: [{ color: '#ffffff' }]
             },
             {
                 featureType: 'water',
                 elementType: 'labels.text.fill',
                 stylers: [{ color: '#67747f' }]
             },
             {
                 featureType: 'water',
                 elementType: 'labels.text.stroke',
                 stylers: [{ color: '#17263c' }]
             }
         ]
     });

     map.addMarker({
         lat: 55.756631,
         lng: 37.624376,
         title: 'City'
     });
     map.setZoom(10);

 });