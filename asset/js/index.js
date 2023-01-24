let lis = document.querySelectorAll(".categories>ul>li");

// console.log(lis[1].innerHTML)
console.log(lis);
// [li, li, li, li, li, li] 6

// for (let index = 0; index < lis.length; index++) {
//     console.log(lis[index].innerHTML)
// }

//foreach map,find,reduce,filter

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
