const header=document.querySelector("#header");
const number1=document.querySelectorAll(".number1");
const num1=document.querySelectorAll("#num1");

const num=Array.from(num1);

let productNum=document.getElementById("productNum");
const button=document.getElementById("button");
const arrow=document.getElementById("arrow");

const bag=document.getElementById("bagIcon");
const products=document.getElementById("products");



let productNums=[];

let currentPhase=0;
num[currentPhase].classList.add("colorChange");


function items() {

products.addEventListener("click",e=>{

    let source=e.target.getAttribute("src");
    let id=e.target.getAttribute("id");
    function MyImage(src,id){
      this.src=src;
      this.id=id;
    }
    
    const photo=new MyImage(source,id);
    productNums.push(photo);
    productNum.innerText=productNums.length;

})


}
items();


button.addEventListener("click",e=>{
    currentPhase++;
    num[currentPhase].classList.add("colorChange");
    products.innerHTML="";

    for(let i=0;i<productNums.length;i++){
   
      let newSource=productNums[i].src;
     products.innerHTML+=`<img src=${newSource}>`;
  
    }

})










   
    
