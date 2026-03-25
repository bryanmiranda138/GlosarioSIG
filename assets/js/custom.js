(function ($) {
	
	"use strict";

	// Page loading animation
	$(window).on('load', function() {

        $('#js-preloader').addClass('loaded');

    });

	// WOW JS
	$(window).on ('load', function (){
        if ($(".wow").length) { 
            var wow = new WOW ({
                boxClass:     'wow',      // Animated element css class (default is wow)
                animateClass: 'animated', // Animation css class (default is animated)
                offset:       20,         // Distance to the element when triggering the animation (default is 0)
                mobile:       true,       // Trigger animations on mobile devices (default is true)
                live:         true,       // Act on asynchronously loaded content (default is true)
            });
            wow.init();
        }
    });

	$(window).scroll(function() {
	  var scroll = $(window).scrollTop();
	  var box = $('.header-text').height();
	  var header = $('header').height();

	  if (scroll >= box - header) {
	    $("header").addClass("background-header");
	  } else {
	    $("header").removeClass("background-header");
	  }
	});
	
	$('.filters ul li').click(function(){
        $('.filters ul li').removeClass('active');
        $(this).addClass('active');
          
          var data = $(this).attr('data-filter');
          $grid.isotope({
            filter: data
          })
        });

        var $grid = $(".grid").isotope({
          	itemSelector: ".all",
          	percentPosition: true,
          	masonry: {
            columnWidth: ".all"
        }
    })

	var width = $(window).width();
		$(window).resize(function() {
			if (width > 992 && $(window).width() < 992) {
				location.reload();
			}
			else if (width < 992 && $(window).width() > 992) {
				location.reload();
			}
	})



	$(document).on("click", ".naccs .menu div", function() {
		var numberIndex = $(this).index();
	
		if (!$(this).is("active")) {
			$(".naccs .menu div").removeClass("active");
			$(".naccs ul li").removeClass("active");
	
			$(this).addClass("active");
			$(".naccs ul").find("li:eq(" + numberIndex + ")").addClass("active");
	
			var listItemHeight = $(".naccs ul")
				.find("li:eq(" + numberIndex + ")")
				.innerHeight();
			$(".naccs ul").height(listItemHeight + "px");
		}
	});

	$('.owl-features').owlCarousel({
		items:3,
		loop:true,
		dots: false,
		nav: true,
		autoplay: true,
		margin:30,
		responsive:{
			  0:{
				  items:1
			  },
			  600:{
				  items:2
			  },
			  1200:{
				  items:3
			  },
			  1800:{
				items:3
			}
		}
	})

	$('.owl-collection').owlCarousel({
		items:3,
		loop:true,
		dots: false,
		nav: true,
		autoplay: true,
		margin:30,
		responsive:{
			  0:{
				  items:1
			  },
			  800:{
				  items:2
			  },
			  1000:{
				  items:3
			}
		}
	})

	$('.owl-banner').owlCarousel({
		items:1,
		loop:true,
		dots: false,
		nav: true,
		autoplay: true,
		margin:30,
		responsive:{
			  0:{
				  items:1
			  },
			  600:{
				  items:1
			  },
			  1000:{
				  items:1
			}
		}
	})

	
	
	

	// Menu Dropdown Toggle
	if($('.menu-trigger').length){
		$(".menu-trigger").on('click', function() {	
			$(this).toggleClass('active');
			$('.header-area .nav').slideToggle(200);
		});
	}


	// Menu elevator animation
	$('.scroll-to-section a[href*=\\#]:not([href=\\#])').on('click', function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				var width = $(window).width();
				if(width < 991) {
					$('.menu-trigger').removeClass('active');
					$('.header-area .nav').slideUp(200);	
				}				
				$('html,body').animate({
					scrollTop: (target.offset().top) - 80
				}, 700);
				return false;
			}
		}
	});

	$(document).ready(function () {
	    $(document).on("scroll", onScroll);
	    
	    //smoothscroll
	    $('.scroll-to-section a[href^="#"]').on('click', function (e) {
	        e.preventDefault();
	        $(document).off("scroll");
	        
	        $('.scroll-to-section a').each(function () {
	            $(this).removeClass('active');
	        })
	        $(this).addClass('active');
	      
	        var target = this.hash,
	        menu = target;
	       	var target = $(this.hash);
	        $('html, body').stop().animate({
	            scrollTop: (target.offset().top) - 79
	        }, 500, 'swing', function () {
	            window.location.hash = target;
	            $(document).on("scroll", onScroll);
	        });
	    });
	});

	function onScroll(event){
	    var scrollPos = $(document).scrollTop();
	    $('.nav a').each(function () {
	        var currLink = $(this);
	        var refElement = $(currLink.attr("href"));
	        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
	            $('.nav ul li a').removeClass("active");
	            currLink.addClass("active");
	        }
	        else{
	            currLink.removeClass("active");
	        }
	    });
	}


	// Page loading animation
	$(window).on('load', function() {
		if($('.cover').length){
			$('.cover').parallax({
				imageSrc: $('.cover').data('image'),
				zIndex: '1'
			});
		}

		$("#preloader").animate({
			'opacity': '0'
		}, 600, function(){
			setTimeout(function(){
				$("#preloader").css("visibility", "hidden").fadeOut();
			}, 300);
		});
	});

	

	const dropdownOpener = $('.main-nav ul.nav .has-sub > a');

    // Open/Close Submenus
    if (dropdownOpener.length) {
        dropdownOpener.each(function () {
            var _this = $(this);

            _this.on('tap click', function (e) {
                var thisItemParent = _this.parent('li'),
                    thisItemParentSiblingsWithDrop = thisItemParent.siblings('.has-sub');

                if (thisItemParent.hasClass('has-sub')) {
                    var submenu = thisItemParent.find('> ul.sub-menu');

                    if (submenu.is(':visible')) {
                        submenu.slideUp(450, 'easeInOutQuad');
                        thisItemParent.removeClass('is-open-sub');
                    } else {
                        thisItemParent.addClass('is-open-sub');

                        if (thisItemParentSiblingsWithDrop.length === 0) {
                            thisItemParent.find('.sub-menu').slideUp(400, 'easeInOutQuad', function () {
                                submenu.slideDown(250, 'easeInOutQuad');
                            });
                        } else {
                            thisItemParent.siblings().removeClass('is-open-sub').find('.sub-menu').slideUp(250, 'easeInOutQuad', function () {
                                submenu.slideDown(250, 'easeInOutQuad');
                            });
                        }
                    }
                }

                e.preventDefault();
            });
        });
    }

// ==========================================
	// Lógica para el Buscador Multi-página del Glosario
	// ==========================================
	$(document).ready(function() {
		var $input = $('#searchText');
		var $suggestionsBox = $('#searchSuggestions');
		var searchIndex = []; 
		
		// 1. Array con todas tus vistas HTML donde hay términos
		var pages = ['index.html', 'iso-ogc.html', 'arcgis.html', 'qgis.html', 'bde-webgis.html'];
		
		// Identificar en qué página estamos actualmente
		var currentPage = window.location.pathname.split("/").pop();
		if (currentPage === "") currentPage = "index.html"; 

		// 2. Cargar el contenido de las otras páginas en segundo plano (AJAX)
		pages.forEach(function(page) {
			$.get(page, function(data) {
				// Usamos DOMParser para extraer la información de forma segura
				var parser = new DOMParser();
				var doc = parser.parseFromString(data, "text/html");
				
				// Buscamos los .item en la página descargada
				$(doc).find('.item').each(function() {
					var $item = $(this);
					var itemText = $item.text().toLowerCase();
					// Asumimos que el título está en un <h4>
					var itemTitle = $item.find('h4').first().text() || "Término";

					// Guardamos el término en nuestro "diccionario" virtual
					searchIndex.push({
						title: itemTitle,
						text: itemText,
						page: page
					});
				});
			}).fail(function() {
				console.log("No se pudo cargar la vista para el buscador: " + page);
			});
		});

		// 3. Filtrar términos mientras el usuario escribe
		$input.on('input', function() {
			var query = $(this).val().toLowerCase().trim();
			$suggestionsBox.empty();

			if (query.length > 0) {
				var matches = searchIndex.filter(function(item) {
					return item.text.indexOf(query) !== -1;
				});

				if (matches.length > 0) {
					matches.forEach(function(match) {
						var pageName = match.page.replace('.html', '').toUpperCase();
						// Se añade de qué página viene la sugerencia a la derecha
						var $suggestion = $('<div class="suggestion-item"></div>')
							.html('<strong>' + match.title + '</strong> <span style="font-size:10px; color:#aaa; float:right;">(' + pageName + ')</span>');
						
						$suggestion.on('click', function() {
							$suggestionsBox.hide();
							$input.val(match.title);
							
							if (match.page === currentPage) {
								// Si el término está en la misma página, hacer scroll directo
								scrollToTerm(match.title);
							} else {
								// Si está en otra página, redirigir y enviar el término por la URL
								window.location.href = match.page + '?scrollTo=' + encodeURIComponent(match.title);
							}
						});

						$suggestionsBox.append($suggestion);
					});
					$suggestionsBox.fadeIn(200);
				} else {
					$suggestionsBox.hide();
				}
			} else {
				$suggestionsBox.hide();
			}
		});

		// Ocultar caja al hacer clic fuera del buscador
		$(document).on('click', function(e) {
			if (!$(e.target).closest('.search-input').length) {
				$suggestionsBox.hide();
			}
		});

		// 4. Leer la URL por si acabamos de llegar desde otra página mediante una búsqueda
		var urlParams = new URLSearchParams(window.location.search);
		if (urlParams.has('scrollTo')) {
			var termToFind = urlParams.get('scrollTo');
			// Esperar medio segundo para asegurar que la página renderizó el HTML
			setTimeout(function() {
				scrollToTerm(termToFind);
			}, 500);
		}

		// 5. Función compartida para animar el scroll y resaltar el elemento
		function scrollToTerm(termTitle) {
			$('.item').each(function() {
				var title = $(this).find('h4').first().text();
				if (title === termTitle) {
					$('html, body').animate({
						scrollTop: $(this).offset().top - 100
					}, 800);
					
					// Efecto de iluminación temporal
					$(this).css('transition', 'box-shadow 0.5s');
					$(this).css('box-shadow', '0px 0px 20px #e75e8d');
					var $thisItem = $(this);
					setTimeout(function() {
						$thisItem.css('box-shadow', 'none');
					}, 2000);
					return false; // detiene el loop .each()
				}
			});
		}
	});
	


})(window.jQuery);