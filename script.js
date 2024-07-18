document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const navbar = document.querySelector('.navbar');

    menuIcon.addEventListener('click', function() {
        navbar.classList.toggle('active');
    });
});
function goToContact()
{
    window.location.href="contact.html";
}
function goToHome()
{
    window.location.href="home.html";
}