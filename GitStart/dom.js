/*console.log(document.domain);
console.log(document.URL);
console.log(document.title);
console.log(document.doctype);
console.log(document.body);
console.log(document.all);
console.log(document.all[10]);
console.log(document.forms);*/
let headertitle=document.getElementById("header-title");
console.log(headertitle);
headertitle.textContent = "Hello";
console.log(headertitle)
let header=document.getElementById("main-header");
header.style.borderBottom = "solid 3px #000";
let h2=document.getElementsByClassName("title");
h2[0].style.color="green";
h2[0].style.fontWeight="bold";

let items=document.getElementsByClassName("list-group-item");
items[2].style.backgroundColor="green";
for(let i=0;i<items.length;i++)
{
    items[i].style.fontWeight="bold";
}