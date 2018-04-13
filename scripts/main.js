//changes image onclick with button
function changeImage() {
  var myImage = document.querySelector('img');
  var mySrc = myImage.getAttribute('src');

  if(mySrc === 'images/art.jpg') {
    myImage.setAttribute ('src','images/art2.jpg');
  } else {
    myImage.setAttribute ('src','images/art.jpg');
  }
}
