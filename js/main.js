
(function () {
    var isOpen = false;
    var button = document.getElementById('navMenu');
    var buttonInner = document.getElementById('navMenuInner');

    function toggle() {
        var className = 'unhide';
        var aniClassName ='animate';
        isOpen = !isOpen;

        var navEl = document.getElementById('navMain');

        if (isOpen) {
            button.classList.add(aniClassName);
            buttonInner.classList.add(aniClassName);
            navEl.classList.add(className);
        } else {
            button.classList.remove(aniClassName);
            buttonInner.classList.remove(aniClassName);
            navEl.classList.remove(className);
        }
    };

    
    button.addEventListener('click', toggle);
})();


$(function() {
  $('nav a[href^="' + location.pathname.split("/")[1] + '"]').addClass('active');
});