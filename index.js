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
    document.body.appendChild(clon);
}
showContent();//to show nav bar

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