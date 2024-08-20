(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Fixed Navbar
    $(window).scroll(function () {
        if ($(window).width() < 992) {
            if ($(this).scrollTop() > 45) {
                $('.fixed-top').addClass('bg-white shadow');
            } else {
                $('.fixed-top').removeClass('bg-white shadow');
            }
        } else {
            if ($(this).scrollTop() > 45) {
                $('.fixed-top').addClass('bg-white shadow').css('top', -45);
            } else {
                $('.fixed-top').removeClass('bg-white shadow').css('top', 0);
            }
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Project carousel
    $(".project-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        loop: true,
        center: true,
        dots: false,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
			0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
			576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    // Validacion Formulario 
    document.addEventListener("DOMContentLoaded", function () {
        const fields = [
            { id: "name", message: "Por favor, ingresa tu nombre." },
            { id: "mail", message: "Por favor, ingresa un correo electrónico válido." },
            { id: "countryCode", message: "Por favor, selecciona tu país." },
            { id: "mobile", message: "Por favor, ingresa un número de teléfono válido." }
        ];
    
        fields.forEach(field => {
            const input = document.getElementById(field.id);
            const feedback = document.getElementById(`${field.id}Feedback`);
    
            input.addEventListener("input", function () {
                if (input.checkValidity()) {
                    input.classList.remove("is-invalid");
                    input.classList.add("is-valid");
                    feedback.textContent = "";
                } else {
                    input.classList.remove("is-valid");
                    input.classList.add("is-invalid");
                    feedback.innerHTML = `<small class="text-danger">${field.message}</small>`;
                }
            });
        });
    
        const countryCodeSelect = document.getElementById("countryCode");
    
        countryCodeSelect.addEventListener("change", function () {
            const selectedOption = countryCodeSelect.options[countryCodeSelect.selectedIndex];
            const flag = selectedOption.getAttribute("data-flag");
            countryCodeSelect.style.backgroundImage = `url(${flag})`;
        });
    
        const form = document.getElementById("contactForm");
        form.addEventListener("submit", function (event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add("was-validated");
        });
    });
    // FIN Validacion Formulario 
})(jQuery);

