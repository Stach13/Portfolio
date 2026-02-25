
var i = 0
var images = [];
var caption = []

caption[0] = 'golf friends'
caption[1] = 'Fans on the 18th Hole PGA'
caption[2] = 'Lake Erie Bluff Cliff'
caption[3] = 'Ground water runoff'
caption[4] = 'Solar Eclipse 2024'
caption[5] = 'Flower'
caption[6] = 'LIV golfer Brooks Koepka'
caption[7] = 'Leaf'
caption[8] = 'The Columbia River at Multnomah Falls in Oregon'
caption[9] = 'Rec Hall at Penn State'
caption[10] = 'Wide Shot of Koepka and Media Outlets'

images[0] = 'images/album/golf_friends_final.jpg'
images[1] = 'images/album/18th-hole.jpg'
images[2] = 'images/album/bluff-cliff.JPG'
images[3] = 'images/album/bluff-stream.JPG'
images[4] = 'images/album/eclipse.JPG'
images[5] = 'images/album/flower.JPG'
images[6] = 'images/album/koepka.jpg'
images[7] = 'images/album/leaf.JPG'
images[8] = 'images/album/multnomah.JPG'
images[9] = 'images/album/rec-hall.JPG'
images[10] = 'images/album/press.jpg'

function changeImg(){
    document.slide.src = images[i];
    document.querySelector('.caption').innerHTML = caption[i];

    if (i < images.length - 1){
        i++;
    } else {
        i = 0;
    }

    if (i < caption.length - 1){
        i++;
    } else {
        i = 0;
    }

    setTimeout('changeImg()', 5 * 1000);
}

var opac = 0

function FadeIn(){

        if (opac < 1) {
            opac += .01;
            setTimeout(function(){FadeIn()}, 10)
        }

    document.slide.style.opacity = opac;
    document.querySelector('.caption').style.opacity = opac;
}


window.addEventListener('load', changeImg);
window.addEventListener('load', FadeIn);