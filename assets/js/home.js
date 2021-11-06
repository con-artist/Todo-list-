console.log("my script is running");

var elements = document.getElementsByClassName("categories");


for (let i = 0; i < elements.length; i++) {              // setting different colours for categories

  var category = elements[i];
     console.log(category.innerText);
    
     if(category.innerText=="Personal"){
         category.style.backgroundColor="rgb(61,106,184)";
     }
  
     else if(category.innerText=="Work"){
        category.style.backgroundColor="rgb(154,0,171)";
     }
     else if(category.innerText=="School"){
        category.style.backgroundColor="rgb(242,167,0)";
     }
     else if(category.innerText=="Cleaning"){
        category.style.backgroundColor="rgb(52, 206, 52)";
     }
     else if(category.innerText=="Others"){
        category.style.backgroundColor="rgb(70, 171, 187)";
     }
    
    
  
}



var card = document.getElementsByClassName("cardss");
for (let i = 0; i < card.length; i++) {                          //styling tasks on hover
   card[i].addEventListener("mouseover", function(){
      card[i].style.boxShadow="rgba(0, 0, 0, 0.25) 0px 14px 28px";
   })
   
   card[i].addEventListener("mouseout", function(){
      card[i].style.boxShadow="rgb(0 0 0 / 5%) 0px 15px 113px";
   })

 }