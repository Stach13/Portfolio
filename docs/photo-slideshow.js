

var i = 0
var images = [];

images[0] = 'images/album/golf_friends_final.jpg'
images[1] = 'images/album/18th-hole.jpg'
images[2] = 'images/album/bluff-cliff.JPG'
images[3] = 'images/album/bluff-stream.JPG'
images[4] = 'images/album/eclipse.JPG'
images[5] = 'images/album/flower.JPG'
images[6] = 'images/album/icicles.JPG'
images[7] = 'images/album/koepka.jpg'
images[8] = 'images/album/leaf.JPG'
images[9] = 'images/album/multnomah.JPG'
images[10] = 'images/album/rec-hall.JPG'
images[11] = 'images/album/press.jpg'


function changeImg(){
    document.slide.src = images[i];

    if (i < images.length - 1){
        i++;
    } else {
        i = 0;
    }

    setTimeout('changeImg()', 4 * 1000);
}
window.onload = changeImg;