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


let x=document.querySelector(".list-group-item:nth-child(2)");
x.style.backgroundColor="green"

let y=document.querySelector(".list-group-item:nth-child(3)");
y.style.display="none";

let li=document.getElementsByTagName("li");
for(let i=0;i<li.length;i++)
{
    li[i].style.backgroundColor="yellow"


let i2=document.querySelectorAll(".list-group-item");
i2[1].style.color="green";

let odd=document.querySelectorAll(".list-group-item:nth-child(odd)");
for(let i=0;i<odd.length;i++)
{
    odd[i].style.backgroundColor="green"

}

let newdiv=document.createElement("div");
/*newdiv.className="className"
  newdiv.id="id"
  newdiv.setAttribute("attributeName,value")*/

//Inserts a new <div> tag before <h1>
let h1=document.querySelector('header h1');
let div=document.querySelector("header .container");
let newdivtext=document.createTextNode("Hello");
newdiv.appendChild(newdivtext);
div.insertBefore(newdiv,h1);

//inserts hello before item 1
let a=document.querySelector(".list-group");
let b=document.querySelector(".list-group-item");
let newItem=document.createElement("div");
let newItemText=document.createTextNode("Hello");
newItem.appendChild(newItemText);
a.insertBefore(newItem,b);

/* let a=document.querySelector(".list-group")
console.log(a.parentElement)   output-> <div id="main" class="card card-body">
console.log(a.parentElement.parentElement)  output-> <div class="container">
console.log(a.lastelementchild)  output-> <li class="list-group-item">Item 4</li>
console.log(a.lastchild)   output-> #text (lastchild also includes line breaks which is returned as text so better use lastelementchild)
console.log(a.previousElementSibling)  output-> <h2 class="title">Items</h2>
console.log(a.previousSibling)  output-> #text (previoussibling also includes line breaks which is returned as text so better use previousElementSibling)
      Same with (firstchild,firstelementchild) and (nextsibling,nextelementsibling);*/
=======


