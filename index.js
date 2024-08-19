const app = document.getElementById("app");

var menuLinks = [
    {text: 'Home', href: '/Home'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'shonen', href: '/catalog/shonen'},
      {text: 'seinen', href: '/catalog/seinen'},
      {text: 'isekai', href: '/catalog/isekai'},
    ]},
    {text: 'Anime', href: '#' , subLinks: [
      {text: 'news', href: '/Anime/news'},
      {text: 'search', href: '/anime/search'},
    ]},
    {text: 'Account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
];
//template to show nav bar
function showContent() {
    let temp = document.getElementsByTagName("template")[0];
    let clon = temp.content.cloneNode(true);
    return clon;
}
app.appendChild(showContent());//to show nav bar

let topMenuEl = document.getElementById("top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");

menuLinks.forEach((link)=>{
    const a=document.createElement("a");
    a.setAttribute("href",link.href);
    a.textContent=link.text;
    topMenuEl.appendChild(a);
});

//lab rlab DOM manipualtion(part 2)    part3
let subMenuEl= document.getElementById("sub-menu");
subMenuEl.style.height="100%";
subMenuEl.style.backgroundColor="var(--sub-menu-bg)";
subMenuEl.classList.add("flex-around");
subMenuEl.style.position="absolute";
subMenuEl.style.top="0";

const topMenuLinks = document.querySelectorAll("a")


topMenuEl.addEventListener('click',(event)=>{
  event.preventDefault();
  //check if target is a link "a"
  if(!event.target.matches("a")){
    //if not just return
    return
  }else{
    topMenuLinks.forEach((a)=>{
      if(a!==event.target)
        a.classList.remove("active");
    });
    if(event.target.classList.contains("active")){
      subMenuEl.style.top="0";
    }
    else{
      for (link of menuLinks) {
        if (link.text == event.target.text) {
          if (link.subLinks) {
            subMenuEl.style.top = "100%";
            buildSubmenu(link);
          } else {
            subMenuEl.style.top = "0%";
          }
        }
      }
    }
    event.target.classList.toggle("active");
  }
});
function buildSubmenu(Links){ 
  subMenuEl.innerHTML='';
  for(subLink in Links.subLinks){
    const a=document.createElement("a");
    a.href=("href",Links.subLinks[subLink].href);
    a.textContent=Links.subLinks[subLink].text;
    subMenuEl.appendChild(a);
  }
}
subMenuEl.addEventListener('click',(event)=>{
  event.preventDefault();
  if(!event.target.matches("a")){
    return;
  }else{
    subMenuEl.style.top="0";
    topMenuLinks.forEach(link => {
      link.classList.remove("active")
    });
  }
});
//<-----BOM------->
let availH = window.screen.availHeight;
let availW = window.screen.availWidth;
let myWindow;
function newWindow() {
  myWindow = window.open(
    "https://www.crunchyroll.com/",
    "crunchyroll",
    `width=${availW * 0.75}, height=${availH * 0.75}, left=${
      availW * 0.125
    }, top=${availH * 0.125}, resizable=yes, scrollbars=yes, location=yes`
  );
  myWindow.focus();
}
function closeWindow() {
  myWindow.close();
}
// A sneak peek at event handling!
// This will be covered in depth during a future lesson.
document.getElementById("openWindowBtn").addEventListener("click", newWindow);
document.getElementById("closeWindowBtn").addEventListener("click", closeWindow);

let mySecondWindow;

function newSecWindow() {
  mySecondWindow = window.open(
    "https://www.hulu.com/welcome?orig_referrer=https%3A%2F%2Fwww.google.com%2F",
    "Hulu",
    "width=800, height=400, resizable=yes, scrollbars=yes, location=yes"
  );
  mySecondWindow.focus();
}
function closeSecWindow() {
    myWindow.close();
  }
document.getElementById("openWindowBtn2").addEventListener("click", newSecWindow);
document.getElementById("closeWindowBtn2").addEventListener("click", closeSecWindow);

let myThirdWindow;

function newThiWindow() {
  mythirdWindow = window.open(
    "login.html",
    "login",
    "width=800, height=400, resizable=yes, scrollbars=yes, location=yes"
  );
  mySecondWindow.focus();
}
function closeThiWindow() {
    myWindow.close();
  }
document.getElementById("openWindowBtn3").addEventListener("click", newThiWindow);
document.getElementById("closeWindowBtn3").addEventListener("click", closeThiWindow);
//<---BOM------>

//<------html form-------->
const myForm = document.getElementById("myForm");

myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert(`You submitted: 
  ${myForm.querySelector("input").value}`);
});