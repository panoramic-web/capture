
const script = ()=>{
   
var menuIcon = document.querySelector('#menu_icon');
var closeIcon = document.querySelector('#close_icon');
var linkWrapper = document.querySelector('.link_wrapper');
var menuItems = document.querySelectorAll('.menu_list li a');

menuIcon.onclick = function() {
   linkWrapper.style.display = 'block';
}

closeIcon.onclick = function() {
   linkWrapper.style.display = 'none';
}


for (var i = 0; i <= menuItems.length; i++) {
   menuItems[i].onclick = function() {
      if (innerWidth <= 800) {
         setTimeout(function() {
            linkWrapper.style.display = 'none';
         }, 300);
      }
   }
}
};

export default script;
