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
let anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    let blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
};
// ACCORDEON
let accordeonItem = document.getElementsByClassName('accordeon-item');
let accordeon = document.getElementsByClassName('accordeon__wrapper');

for (let i = 0; i < accordeonItem.length; i++) {
    accordeonItem[i].addEventListener("click", function() {
      let panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        accordeon[i].style.backgroundColor = "#fff"
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
        accordeon[i].style.backgroundColor = "#33d2fd";
      }
    });
};