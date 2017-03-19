(function () {
    var isOpen = false;
    var button = document.getElementById('navMenu');
    var buttonInner = document.getElementById('navMenuInner');

    function toggle() {
        var className = 'unhide';
        var aniClassName = 'animate';
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


$(function () {
    var theHref = location.pathname.split("/")[1];
    if (!theHref) {
        theHref = "index.shtml";
    }
    $('nav a[href^="' + theHref + '"]').addClass('active');
});

$(function () {
    $("#gallery").unitegallery({
        gallery_theme: "tiles",
        gallery_width:"100%",
        tiles_type: "justified",
        tiles_justified_row_height: 100, //base row height of the justified type
        tiles_justified_space_between: 7,
        tile_enable_border: true,
        tile_border_width:1,
        tile_border_color:"white"
    });
    console.log('gallery init')
});
