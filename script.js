function showMenu()
{
    const menu = document.getElementById("menu");
    if(menu.style.display === "flex")
    {
        menu.style.display = "none";
    }
    else
    {
        menu.style.display = "flex";
    }
}
function goToAbout()
{
    document.getElementById("about").scrollIntoView({behavior: 'smooth'});
    const menu = document.getElementById("menu");
    menu.style.display = "none";
}
function goToProjects()
{
    document.getElementById("projects").scrollIntoView({behavior: 'smooth'});
    const menu = document.getElementById("menu");
    menu.style.display = "none";
}
function goToContacts()
{
    document.getElementById("contacts").scrollIntoView({behavior: 'smooth'});
    const menu = document.getElementById("menu");
    menu.style.display = "none";
}
function scrollToTop()
{
    document.getElementById("top").scrollIntoView({behavior: 'smooth'});
}
function openBehance()
{
    window.open("https://be.net/erfansefat");
}
function openGithub()
{
    window.open("https://github.com/ErfanSefat");
}
function emailMe(){
    window.open("mailto:erfansefat@yahoo.com");
}