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