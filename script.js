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
function callMe(){
    window.open("tel:+989199158065");
}
function telegramMe(){
    window.open("https://t.me/ErfanSefat");
}
{
    const boxes = document.querySelectorAll(".magnet");
    boxes.forEach((box) => {
        box.addEventListener('mousemove', (e) => {
            let x = e.offsetX;
            let y = e.offsetY;
            let boxWidth = box.clientWidth;
            let boxHeight = box.clientHeight;
            let moveX = (x - boxWidth/2)/5;
            let moveY = (y - boxHeight/2)/5;
            box.style.transform = `translateX(${moveX}px)
            translateY(${moveY}px)`;
        })
        box.addEventListener("mouseout", (e) => {
            box.style.transform = ``;
        })
    })
    
}
{
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting)
            {
                entry.target.classList.add("show");
            }else{
                entry.target.classList.remove("show");
            }
        });
    });
    const hiddenItems = document.querySelectorAll(".hidden");
    hiddenItems.forEach((item) => {
        observer.observe(item);
    });
}
function next(){
    const selected = document.querySelector(".selected");
    const unselected_R = document.querySelector(".unselected-right");
    const unselected_L = document.querySelector(".unselected-left");
    const unselected_R_R = document.querySelector(".unselected-right-right");
    const unselected_L_L = document.querySelector(".unselected-left-left");

    unselected_L_L.classList.add('unselected-right-right');
    unselected_L.classList.add('unselected-left-left');
    selected.classList.add('unselected-left');
    unselected_R.classList.add('selected');
    unselected_R_R.classList.add('unselected-right');

    unselected_L_L.classList.remove('unselected-left-left');
    unselected_L.classList.remove('unselected-left');
    selected.classList.remove('selected');
    unselected_R.classList.remove('unselected-right');
    unselected_R_R.classList.remove('unselected-right-right');
}
function previous(){
    const selected = document.querySelector(".selected");
    const unselected_R = document.querySelector(".unselected-right");
    const unselected_L = document.querySelector(".unselected-left");
    const unselected_R_R = document.querySelector(".unselected-right-right");
    const unselected_L_L = document.querySelector(".unselected-left-left");

    unselected_L_L.classList.add('unselected-left');
    unselected_L.classList.add('selected');
    selected.classList.add('unselected-right');
    unselected_R.classList.add('unselected-right-right');
    unselected_R_R.classList.add('unselected-left-left');

    unselected_L_L.classList.remove('unselected-left-left');
    unselected_L.classList.remove('unselected-left');
    selected.classList.remove('selected');
    unselected_R.classList.remove('unselected-right');
    unselected_R_R.classList.remove('unselected-right-right');
}