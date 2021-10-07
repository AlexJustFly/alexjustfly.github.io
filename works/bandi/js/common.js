jQuery(document).ready(function(){
	$(window).scroll(function () {
		if ($(this).scrollTop() > 600) {
			$('#scroller').fadeIn();
		} else {
			$('#scroller').fadeOut();
		}
	});
	$('#scroller').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 400);
		return false;
	});
});

window.onload = function() {




// navigation list
let listItems = document.querySelectorAll('.navigation_link');
//hover function for navigation list
	for (let i = 0; i < listItems.length; i++) {
		listItems[i].onmouseover = listHoverOver;
		listItems[i].onmouseout = listHoverOut;
	}

// screen
let availHeight = screen.availHeight; // availHeight of screen
// array of blocks
let funNumbers = document.querySelectorAll('.funFacts__block_number'); // array of numbers
//constructor for min height of number block
let min_height_of_number_block = new min_fun_numb_height(funNumbers); // min Height of number blocks
//function for min height of number block
min_height_of_number_block.find();
/*let position = positionForEffect(availHeight, 0minHeightOfNumberBlock); //min position for scroll effect
*/// blocks 
let work = document.querySelector('#work'); // work
let clients = document.querySelector('#clients'); // clients
let projects = document.querySelector('#projects'); // projects
let awards = document.querySelector('#awards'); //awards
// constructor
let numberW = new numbers((work.innerHTML - 200), work, work);
let numberC = new numbers(0, clients, clients);
let numberP = new numbers((projects.innerHTML - 200), projects, projects);
let numberA = new numbers(0, awards, awards);
// scroll function
window.onscroll = () => {
	if ( (work.getBoundingClientRect().bottom - availHeight) < 0) {
		numberW.run()
		numberC.run()
		numberP.run()
		numberA.run()	
	}
};




// works images array
let works_images = document.querySelectorAll('.works__images-container');
//buttons
let works_all_btn = document.querySelector('#works_all');
let works_branding_btn = document.querySelector('#works_branding');
let works_web_btn = document.querySelector('#works_web');
let works_logo_btn = document.querySelector('#works_logo');
let works_photography_btn = document.querySelector('#works_photography');
// show works constructor
let works_all = new show_works('all', works_images);
let works_branding = new show_works('branding', works_images);
let works_web = new show_works('web', works_images);
let works_logo = new show_works('logo_design', works_images);
let works_photography = new show_works('photography', works_images);
// show works function
works_all_btn.onclick = () => works_all.show(); 
works_branding_btn.onclick = () => works_branding.show();
works_web_btn.onclick = () => works_web.show();
works_logo_btn.onclick = () => works_logo.show();
works_photography_btn.onclick = () => works_photography.show();


//modal
let modal_close = document.querySelector('.modal_close'); // close button
let modal_window = document.querySelector('.modal_window'); // modal window
let modal_img = document.querySelector('.modal_img'); // modal img
//close modal window constructor
let close_modal = new close_modal_window(modal_img, modal_window, function(){
	if (modal_window.style.animationName == 'close') {
	setTimeout(function(){modal_window.style.display = 'none'}, 300)
}})
// close modal window
modal_window.onclick = function(event) {
	close_modal.close()
}







//link for display img
let data_for_modal_img = document.querySelectorAll('.images-hover_img-link');
// constructor for show modal img
let show_modal_img = new show_modal_image(data_for_modal_img, modal_img, modal_window, 'flex');
// function for show modal img
show_modal_img.show();













}// end of window.onload function

// min height of number blocks
/*min_fun_numb_height = (arr) => {
	let len = arr.length;
	let min = Infinity;
	while (len--) {
		if (arr[len].offsetHeight < min) {
			min = arr[len].offsetHeight;
		}
	}
	return min;
}*/
class min_fun_numb_height {
	constructor(arr) {
		this.arr = arr;
	}
	find() {
		let len = this.arr.length;
		let min = Infinity;
		while (len--) {
			if (this.arr[len].offsetHeight < min) {
				min = this.arr[len].offsetHeight;
			}
		}
	}
};
// navigation hover
function listHoverOver() {
	this.parentNode.style.boxShadow = 'inset 0 1px 0 #32b0ee';
};
//navigation out
function listHoverOut() {
	this.parentNode.style.boxShadow = 'none';
};
//min position for effect
/*function positionForEffect(screen, block) {
	return screen - (block)	
};*/
// timer
class numbers {
	constructor(number, text, data) {
		this.number = number;
		this.text = text;
		this.data = data;
	}
	tick() {
		this.number++;
	}
	show() {
		this.number++;
		this.text.innerHTML = this.number;
	}
	run() {
		setInterval(() => {
			if (this.number == this.data.getAttribute('data-target')) {
				clearInterval(this.show)
			} else {
				this.show()	
			}
			
		}, 50);
	}
};
// show web works
class show_works {
	constructor (keyword, array, callback) {
		this.keyword = keyword;
		this.array = array;
		this.callback = callback;
	}
	show() {
		for (let i = 0; i < this.array.length; i++) {
			if (this.keyword == 'all') {
				this.array[i].style.opacity = '1';
				this.array[i].style.visibility = 'visible';
			}
			else if (this.array[i].getAttribute('class').includes(this.keyword)) {
				this.array[i].style.opacity = '1';
				this.array[i].style.visibility = 'visible';
			} else {
				this.array[i].style.opacity = '0';
				this.array[i].style.visibility = 'hidden';
			}
		}
	}
};
// show modal image onclick
class show_modal_image {
	constructor (data_target, modal_img, modal_window, style_display) {
		this.data_target = data_target;
		this.modal_img = modal_img;
		this.modal_window = modal_window;
		this.style_display = style_display;
	}
	show() {
		for (let i = 0; i < this.data_target.length; i++) {
			this.data_target[i].onclick = () => {
				this.modal_img.src = this.data_target[i].getAttribute('data-target');
				this.modal_window.style.display = this.style_display;
				this.modal_window.style.animationName = 'open';
			}
		}
	}
};
// close modal window
class close_modal_window {
	constructor (modal_img, modal_window, f) {
		this.modal_img = modal_img;
		this.modal_window = modal_window;
		this.callback = f;
	}
	close() {
			if (event.target != this.modal_img) {
				this.modal_window.style.animationName = 'close';	
			}
		this.callback();
	}
}




function initMap() {
	let myLatLng = {lat: 47.046604, lng: -122.869211};

	let mapProp = {
		center: myLatLng,
		zoom: 17
	};
	let map = new google.maps.Map(document.getElementById('map'), mapProp);
	let marker = new google.maps.Marker({
		map: map,
		position: myLatLng,
		title: 'Hello World!',
		icon: '../img/map-marker.png'
	});
	let infowindow = new google.maps.InfoWindow({
		content:"Hello World!"
	});
	google.maps.event.addListener(marker, 'click', function() {
		infowindow.open(map, marker)
	});
};



// SCROLLER
let goto_links = document.querySelectorAll('._goto');
if (goto_links) {
	for (let index = 0; index < goto_links.length; index++) {
		let goto_link = goto_links[index];
		goto_link.addEventListener('click', function (e) {
			let target_block_class = goto_link.getAttribute('href').replace('#', '');
			let target_block = document.querySelector('#' + target_block_class);
			_goto(target_block, 300);
			e.preventDefault();
		});
	}
}
function _goto(target_block, speed) {
	let header = '';
	let options = {
		speedAsDuration: true,
		speed: speed,
		header: header,
		easing: 'easeOutQuad',
	};
	let scr = new SmoothScroll();
	scr.animateScroll(target_block, '', options);
};

/*! smooth-scroll v16.1.2 | (c) 2020 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll */
window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(e){var t,n=(this.document||this.ownerDocument).querySelectorAll(e),o=this;do{for(t=n.length;0<=--t&&n.item(t)!==o;);}while(t<0&&(o=o.parentElement));return o}),(function(){if("function"==typeof window.CustomEvent)return;function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}e.prototype=window.Event.prototype,window.CustomEvent=e})(),(function(){for(var r=0,e=["ms","moz","webkit","o"],t=0;t<e.length&&!window.requestAnimationFrame;++t)window.requestAnimationFrame=window[e[t]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[e[t]+"CancelAnimationFrame"]||window[e[t]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e,t){var n=(new Date).getTime(),o=Math.max(0,16-(n-r)),a=window.setTimeout((function(){e(n+o)}),o);return r=n+o,a}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})})(),(function(e,t){"function"==typeof define&&define.amd?define([],(function(){return t(e)})):"object"==typeof exports?module.exports=t(e):e.SmoothScroll=t(e)})("undefined"!=typeof global?global:"undefined"!=typeof window?window:this,(function(q){"use strict";var I={ignore:"[data-scroll-ignore]",header:null,topOnEmptyHash:!0,speed:500,speedAsDuration:!1,durationMax:null,durationMin:null,clip:!0,offset:0,easing:"easeInOutCubic",customEasing:null,updateURL:!0,popstate:!0,emitEvents:!0},F=function(){var n={};return Array.prototype.forEach.call(arguments,(function(e){for(var t in e){if(!e.hasOwnProperty(t))return;n[t]=e[t]}})),n},r=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,n=String(e),o=n.length,a=-1,r="",i=n.charCodeAt(0);++a<o;){if(0===(t=n.charCodeAt(a)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");1<=t&&t<=31||127==t||0===a&&48<=t&&t<=57||1===a&&48<=t&&t<=57&&45===i?r+="\\"+t.toString(16)+" ":r+=128<=t||45===t||95===t||48<=t&&t<=57||65<=t&&t<=90||97<=t&&t<=122?n.charAt(a):"\\"+n.charAt(a)}return"#"+r},L=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},x=function(e){return e?(t=e,parseInt(q.getComputedStyle(t).height,10)+e.offsetTop):0;var t},H=function(e,t,n,o){if(t.emitEvents&&"function"==typeof q.CustomEvent){var a=new CustomEvent(e,{bubbles:!0,detail:{anchor:n,toggle:o}});document.dispatchEvent(a)}};return function(o,e){var A,a,O,C,M={};M.cancelScroll=function(e){cancelAnimationFrame(C),C=null,e||H("scrollCancel",A)},M.animateScroll=function(i,c,e){M.cancelScroll();var s=F(A||I,e||{}),u="[object Number]"===Object.prototype.toString.call(i),t=u||!i.tagName?null:i;if(u||t){var l=q.pageYOffset;s.header&&!O&&(O=document.querySelector(s.header));var n,o,a,m,r,d,f,h,p=x(O),g=u?i:(function(e,t,n,o){var a=0;if(e.offsetParent)for(;a+=e.offsetTop,e=e.offsetParent;);return a=Math.max(a-t-n,0),o&&(a=Math.min(a,L()-q.innerHeight)),a})(t,p,parseInt("function"==typeof s.offset?s.offset(i,c):s.offset,10),s.clip),y=g-l,v=L(),w=0,S=(n=y,a=(o=s).speedAsDuration?o.speed:Math.abs(n/1e3*o.speed),o.durationMax&&a>o.durationMax?o.durationMax:o.durationMin&&a<o.durationMin?o.durationMin:parseInt(a,10)),E=function(e,t){var n,o,a,r=q.pageYOffset;if(e==t||r==t||(l<t&&q.innerHeight+r)>=v)return M.cancelScroll(!0),o=t,a=u,0===(n=i)&&document.body.focus(),a||(n.focus(),document.activeElement!==n&&(n.setAttribute("tabindex","-1"),n.focus(),n.style.outline="none"),q.scrollTo(0,o)),H("scrollStop",s,i,c),!(C=m=null)},b=function(e){var t,n,o;m||(m=e),w+=e-m,d=l+y*(n=r=1<(r=0===S?0:w/S)?1:r,"easeInQuad"===(t=s).easing&&(o=n*n),"easeOutQuad"===t.easing&&(o=n*(2-n)),"easeInOutQuad"===t.easing&&(o=n<.5?2*n*n:(4-2*n)*n-1),"easeInCubic"===t.easing&&(o=n*n*n),"easeOutCubic"===t.easing&&(o=--n*n*n+1),"easeInOutCubic"===t.easing&&(o=n<.5?4*n*n*n:(n-1)*(2*n-2)*(2*n-2)+1),"easeInQuart"===t.easing&&(o=n*n*n*n),"easeOutQuart"===t.easing&&(o=1- --n*n*n*n),"easeInOutQuart"===t.easing&&(o=n<.5?8*n*n*n*n:1-8*--n*n*n*n),"easeInQuint"===t.easing&&(o=n*n*n*n*n),"easeOutQuint"===t.easing&&(o=1+--n*n*n*n*n),"easeInOutQuint"===t.easing&&(o=n<.5?16*n*n*n*n*n:1+16*--n*n*n*n*n),t.customEasing&&(o=t.customEasing(n)),o||n),q.scrollTo(0,Math.floor(d)),E(d,g)||(C=q.requestAnimationFrame(b),m=e)};0===q.pageYOffset&&q.scrollTo(0,0),f=i,h=s,u||history.pushState&&h.updateURL&&history.pushState({smoothScroll:JSON.stringify(h),anchor:f.id},document.title,f===document.documentElement?"#top":"#"+f.id),"matchMedia"in q&&q.matchMedia("(prefers-reduced-motion)").matches?q.scrollTo(0,Math.floor(g)):(H("scrollStart",s,i,c),M.cancelScroll(!0),q.requestAnimationFrame(b))}};var t=function(e){if(!e.defaultPrevented&&!(0!==e.button||e.metaKey||e.ctrlKey||e.shiftKey)&&"closest"in e.target&&(a=e.target.closest(o))&&"a"===a.tagName.toLowerCase()&&!e.target.closest(A.ignore)&&a.hostname===q.location.hostname&&a.pathname===q.location.pathname&&/#/.test(a.href)){var t,n;try{t=r(decodeURIComponent(a.hash))}catch(e){t=r(a.hash)}if("#"===t){if(!A.topOnEmptyHash)return;n=document.documentElement}else n=document.querySelector(t);(n=n||"#top"!==t?n:document.documentElement)&&(e.preventDefault(),(function(e){if(history.replaceState&&e.updateURL&&!history.state){var t=q.location.hash;t=t||"",history.replaceState({smoothScroll:JSON.stringify(e),anchor:t||q.pageYOffset},document.title,t||q.location.href)}})(A),M.animateScroll(n,a))}},n=function(e){if(null!==history.state&&history.state.smoothScroll&&history.state.smoothScroll===JSON.stringify(A)){var t=history.state.anchor;"string"==typeof t&&t&&!(t=document.querySelector(r(history.state.anchor)))||M.animateScroll(t,null,{updateURL:!1})}};M.destroy=function(){A&&(document.removeEventListener("click",t,!1),q.removeEventListener("popstate",n,!1),M.cancelScroll(),C=O=a=A=null)};return (function(){if(!("querySelector"in document&&"addEventListener"in q&&"requestAnimationFrame"in q&&"closest"in q.Element.prototype))throw"Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";M.destroy(),A=F(I,e||{}),O=A.header?document.querySelector(A.header):null,document.addEventListener("click",t,!1),A.updateURL&&A.popstate&&q.addEventListener("popstate",n,!1)})(),M}}));
