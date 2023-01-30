let lis = document.querySelectorAll(".categories>ul>li");
const buger = document.querySelector(".burger")
const sidebar=document.querySelector(".sidebar")
const closes=document.querySelector(".sidebar>.close_icon>i")
const bodyoverlay=document.querySelector(".bodyoverlay")
console.log(bodyoverlay)




lis.forEach((item) => {
  // console.log(item.innerHTML)
  // addEventListener

  item.addEventListener("click", () => {
    lis.forEach((items) => {
      items.classList.remove("active");
    });
    item.classList.add("active");
  });
});

closes.addEventListener("click",()=>{
  sidebar.classList.remove("togglesidebar")
  sidebar.style.transition="all ease 0.9s"
  bodyoverlay.classList.remove("overlay1")
  bodyoverlay.style.transition="all ease 0.9s"
})
buger.addEventListener("click",()=>{
  sidebar.classList.add("togglesidebar")
  bodyoverlay.classList.add("overlay1")
})