




// let container=document.getElementById("container");

// let items=document.getElementById("items");

// let display=document.getElementById("display");


// let images=document.querySelectorAll("img");

const displayData=()=>{

    const image=`
<div class="items" id="items">
<img  id="computer" src="computers.jpg" alt="computer">
<img  id="phones"  src="phones.jpg" alt="phone">
<img  id="shoes1" src="shoes1.jpg" alt="shoes">
<img  id="flowers" src="flowers.jpg" alt="flower">
<img  id="bags" src="bags.jpg" alt="shoes">
<img  id="shoes2" src="shoes2.jpg" alt="bag">
</div><br>
<div class="display" id="display">

</div>
`;

console.log(image);
container.innerHTML=image; 
displayData.innerHTML=`${id}`;
}


 items.addEventListener("click",e=>{
    console.log(e.target);
  const item=e.target;
  const id=item.getAttribute("id");
  console.log(id);
  display.textContent=`${id}`;
})








   
    
