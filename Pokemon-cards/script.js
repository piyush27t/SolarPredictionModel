let main = document.getElementById("main");
let arr = 
["https://i.pinimg.com/736x/17/61/02/1761025e8afd02fce69971df143e80f0.jpg",
 "https://i.pinimg.com/736x/35/e0/be/35e0be005797f7c07dc54ed77d829789.jpg",
 "https://i.pinimg.com/736x/08/9a/2f/089a2f7c15b409a64bd0c9511acabe5c.jpg",
 "https://i.pinimg.com/736x/05/84/64/0584641449c5f786d971b99b6d5096f3.jpg",
 "https://i.pinimg.com/736x/31/f9/ad/31f9ad8e8ab9a7944c69c4d5fbd21a3f.jpg"]
 let s = "";
for(let i =0; i<=64; i++){
    let r = Math.floor(Math.random()*5);
    
    s+=` <div class="card">
  <img src=${arr[r]} ></div>`;
}
main.innerHTML = s;
let cursor = document.getElementById("cursor");
main.addEventListener("mousemove" , function(coordinate){
    console.log(coordinate.x, coordinate.y);
    cursor.style.left = coordinate.x +"px";
    cursor.style.top = coordinate.y + "px";
})



