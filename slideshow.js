//-- Slideshow --//
var destination = document.getElementById("bg-gray");
var imgs = [' ./static/img/paintings/IMG_4502.jpg', 
'./static/img/paintings/IMG_5108.jpg',
'./static/img/paintings/IMG_5124.jpg',
'./static/img/paintings/IMG_5139.jpg',
'./static/img/paintings/IMG_5143.jpg',
'./static/img/paintings/IMG_5228.jpg',
'./static/img/paintings/IMG_5229.jpg',
'./static/img/paintings/IMG_5235.jpg',
'./static/img/paintings/IMG_6452.jpg',
'./static/img/paintings/IMG_6543.jpg',
'./static/img/paintings/IMG_6548.jpg',
'./static/img/paintings/IMG_6555.jpg',
'./static/img/paintings/IMG_6558.jpg',
'./static/img/paintings/IMG_6562.jpg',
'./static/img/paintings/IMG_6563.jpg',
'./static/img/paintings/IMG_7110.jpg',
'./static/img/paintings/IMG_7154_2.jpg',
'./static/img/paintings/IMG_7166_q2.jpg',
];

var hrefs = [];
var nextIndex = 0;
destination.style.backgroundImage = 'url('+imgs[nextIndex]+')';
// destination.src = imgs[nextIndex];
var href = hrefs[nextIndex];
setTimeout(fadeimg, 8000);

function showimg() {
  nextIndex = (nextIndex + 1) % imgs.length;
  destination.style.backgroundImage = 'url('+imgs[nextIndex]+')';

//   destination.src = imgs[nextIndex];
  href = hrefs[nextIndex];
  destination.style.opacity = "1"
  setTimeout(fadeimg, 15000)
}

function fadeimg() {
  destination.style.opacity = "0"
  setTimeout(showimg, 1000);
}

console.log(destination)