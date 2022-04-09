

var thirdContent = document.querySelector('.content-third-section');
var thirdCloser = document.querySelector('.third-content-closer');
var thirdOpner = document.querySelector('.content-third-toggler');
var third_main = document.querySelector('.third-main');
var body = document.querySelector('body');

thirdCloser.addEventListener('click', function(){
	thirdContent.classList.remove("third-close");
},true);

thirdOpner.addEventListener('click', function(){
	thirdContent.classList.add('third-close');


},true);
third_main.addEventListener('click', function(){
	thirdContent.classList.add('third-close');

});





// TOP NAVBAR TOGGLE SECTION

var navCloser = document.querySelector('.nav-closer span');
var navBar = document.getElementById('my-nav');
var navbar_wrapp = document.querySelector('.navbar-wrapp');
var navOpener = document.querySelector('.navbar-opener');


navbar_wrapp.addEventListener('click', function(){
	navBar.style.left = "0";

},true);

navCloser.addEventListener('click', function(){
	// navBar.classList.add('.nav-close');
	navBar.style.left = "-100%";
},true);

navOpener.addEventListener('click', function(){
	navBar.style.left = "0";
	// navBar.classList.add('red');


},true);




// SEARCH SECTION

var searchOpener = document.querySelector('.search-opener');
var searchContainer = document.querySelector('.search-wrap');
var searchClose = document.querySelector('.search-close');
var searchInput = document.querySelector('.input');

searchOpener.addEventListener('click', function(){
	searchContainer.classList.remove('d-lg-none');
});

searchInput.addEventListener("click", function(){
	searchContainer.classList.remove('d-lg-none');
	
})

searchClose.addEventListener('click', function(){
	searchContainer.classList.add('d-lg-none');

},true);





body.addEventListener('click', function(){
	thirdContent.classList.remove("third-close");
	navBar.style.left = "-100%";
	searchContainer.classList.add('d-lg-none');



},true);