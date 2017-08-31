var imageNames = ["bag.jpg","banana.jpg","boots.jpg","chair.jpg","cthulhu.jpg","dragon.jpg","pen.jpg","scissors.jpg","shark.jpg","sweep.jpg","unicorn.jpg","usb.jpg","water_can.jpg","wine_glass.jpg","diffuser.jpg", "hat.jpg"];
var imageAlt =  []

function addImage(imageFileName) {
  var container =document.getElementById("image-container");
  var image = document.createElement("img");
  image.src = imageFileName;
  image.addEventListener("click", recordClick);
  container.appendChild(image);
}


function showImages() {


var index1 = 0
var index2 = 0
var index3 = 0


while(index1 == index2 || index2 == index3 || index3 == index1) {


index1 = Math.floor(Math.random() * imageNames.length);
index2 = Math.floor(Math.random() * imageNames.length);
index3 = Math.floor(Math.random() * imageNames.length);


}

addImage ("images/" +imageNames[index1]) ;
addImage ("images/" +imageNames[index2]) ;
addImage ("images/" +imageNames[index3]) ;


}
//showImages is going to reference the images folder and pick one image at random from images folder.
//Think about using while loop.


function recordClick(event) {

var imageSource = event.target.src;
  console.log("image was clicked!" + src);

}
//When you click on the image you are going to see the name.

window.addEventListener("load", showImages);
