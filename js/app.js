var clickTotal = 0;

var imageOption = function (filename, name){
  this.name = name;
  this.tally = 0;
  this.filename = filename;
  // this.y = Math.floor(Math.random() * 10);
}

var images = [];
images.push(new imageOption("bag.jpg", "Bag"));
images.push(new imageOption("banana.jpg", "Banana"));
images.push(new imageOption("boots.jpg", "Boots"));
images.push(new imageOption("chair.jpg", "Chair"));
images.push(new imageOption("cthulhu.jpg", "Cthulu"));
images.push(new imageOption("dragon.jpg", "Dragon"));
images.push(new imageOption("pen.jpg", "Pen"));
images.push(new imageOption("scissors.jpg", "Scissors"));
images.push(new imageOption("shark.jpg", "Shark"));
images.push(new imageOption("unicorn.jpg", "Unicorn"));
images.push(new imageOption("usb.jpg", "USB"));
images.push(new imageOption("water_can.jpg", "Water Can"));
images.push(new imageOption("wine_glass.jpg", "Wine Glass"));
images.push(new imageOption("diffuser.jpg", "Diffuser"));
images.push(new imageOption("hat.jpg", "Hat"));

//use data attribute

function addImage(imageFileName, index) {
  var container =document.getElementById("image-container");
  var image = document.createElement("img");
  image.src = imageFileName;
  image.dataset.index = index;
  image.addEventListener("click", recordClick);
  container.appendChild(image);



}


function showImages() {
var container = document.getElementById("image-container");
console.dir(container);
container.innerHTML = "";

var index1 = 0
var index2 = 0
var index3 = 0


while(index1 == index2 || index2 == index3 || index3 == index1) {


index1 = Math.floor(Math.random() * images.length);
index2 = Math.floor(Math.random() * images.length);
index3 = Math.floor(Math.random() * images.length);


}


addImage ("images/" +images[index1].filename, index1);
addImage ("images/" +images[index2].filename, index2);
addImage ("images/" +images[index3].filename, index3);


}
//showImages is going to reference the images folder and pick one image at random from images folder.
//Think about using while loop.


var recordClick = function(event) {

clickTotal++;

var imageSource = event.target.src;


  console.log(event);
  images[event.target.dataset.index].tally++; //increments tally
  console.log(images[event.target.dataset.index]);

if(clickTotal == 15) {
  document.getElementById("image-container").innerHTML = "";
  var product = document.getElementById("result");
  product.removeEventListener("click",recordClick);

} else{
  showImages();
}

}

function clicksCycles(){
  if(clickTotal == 15) {
    document.getElementById("image-container").innerHTML = "";
    var product = document.getElementById("result");
    product.removeEventListener("click",recordClick);

  }else{
    showImages();
  }





var list =document.getElementById("favorite-list");
for (var i = 0; i < images.length; i++) {
  var li = document.createElement("li");
  li.innerText = images[i].name + " was clicked" + images[i].tally + "times";

  list.appendChild(li);
}
console.log(images[event.target.dataset.index]);

}
//When you click on the image you are going to see the name.

window.addEventListener("load", showImages);
