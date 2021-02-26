$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 500) {
            $('#toTopBtn').fadeIn();
        } else {
            $('#toTopBtn').fadeOut();
        }
    });
    
    $('#toTopBtn').click(function() {
        $("html, body").animate({
            scrollTop: 0
        },
        500);
        return false;
    });

});

window.addEventListener('scroll', function() {
    let element = document.getElementById("btnNav");

    if(window.scrollY > 500){
                element.classList.add("btn-active");
        } else {
            element.classList.remove("btn-active");
        }
});

    document.getElementById("btnNav").addEventListener("click", myFunction);

function myFunction() {
    console.log("test");
    window.scroll({
        top: 0,
        behavior: 'smooth'
    });
};

// document.getElementById("his").addEventListener("click", mainFunct);

function navScrolling(param){
    let element = document.getElementById(param);
    element.scrollIntoView({behavior: "smooth"});
}   