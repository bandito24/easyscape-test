//FOR SCROLLING THROUGH PLANT THUMBNAILS

const scrollForward = document.getElementById('scroll-forward')
const scrollBackward = document.getElementById('scroll-backward')

function forwardPlants(){
    // document.getElementById('preview-images').scrollLeft += 100;
    document.getElementById('preview-images').scrollLeft += 620;
}

function backwardPlants(){
    // document.getElementById('preview-images').scrollLeft -= 100;
    document.getElementById('preview-images').scrollLeft -= 620;
}

scrollForward.addEventListener('click', forwardPlants)
scrollBackward.addEventListener('click', backwardPlants)

//FOR SELECTING SHOWCASE PHOTO AND HIGHLIGHTING THUMBNAIL 

const showcasePlant = document.getElementById('showcase-plant')
let images = document.getElementsByClassName('plant-photo')

function choosePhoto(e) {
    let newImage = e.target.src
    showcasePlant.src = newImage
}

function highlightThumbnail(){
    for(let i= 0; i < images.length; i++){
        images[i].style.border = '2px solid white'
        if (images[i].src === showcasePlant.src){
            images[i].style.border = '2px solid #768AAF'
        }
    }
}

function assignPhotos(){
    for(let i = 0; i < images.length; i++){
        let image = images[i]
        image.addEventListener('click', choosePhoto)
        image.addEventListener('click', highlightThumbnail)
 }
}

assignPhotos()
highlightThumbnail()


//FOR SCROLLING THROUGH PLANTS ON THE SHOWCASE TOGGLE ARROWS

// const plantImageUrls = [
//     "file:///Users/charlie/Desktop/coding/easyscape-test/easyscape-test-photos/test-portrait.jpg",
//     "file:///Users/charlie/Desktop/coding/easyscape-test/easyscape-test-photos/test-landscape.jpg",
//     "file:///Users/charlie/Desktop/coding/easyscape-test/easyscape-test-photos/main.jpeg",
//     "file:///Users/charlie/Desktop/coding/easyscape-test/easyscape-test-photos/1.jpeg",
//     "file:///Users/charlie/Desktop/coding/easyscape-test/easyscape-test-photos/2.jpeg",
//     "file:///Users/charlie/Desktop/coding/easyscape-test/easyscape-test-photos/3.jpeg",
//     "file:///Users/charlie/Desktop/coding/easyscape-test/easyscape-test-photos/4.jpeg",
//     "file:///Users/charlie/Desktop/coding/easyscape-test/easyscape-test-photos/7.jpeg",
//     "file:///Users/charlie/Desktop/coding/easyscape-test/easyscape-test-photos/8.jpeg",
//     "file:///Users/charlie/Desktop/coding/easyscape-test/easyscape-test-photos/9.jpeg",
//     "file:///Users/charlie/Desktop/coding/easyscape-test/easyscape-test-photos/10.jpeg",
//     "file:///Users/charlie/Desktop/coding/easyscape-test/easyscape-test-photos/11.jpeg",
//     "file:///Users/charlie/Desktop/coding/easyscape-test/easyscape-test-photos/12.jpeg",
//     "file:///Users/charlie/Desktop/coding/easyscape-test/easyscape-test-photos/13.jpeg"
// ]
const plantImageUrls = [
    "https://bandito24.github.io/easyscape-test/easyscape-test-photos/test-portrait.jpg",
    "https://bandito24.github.io/easyscape-test/easyscape-test-photos/test-landscape.jpg",
    "https://bandito24.github.io/easyscape-test/easyscape-test-photos/main.jpeg",
    "https://bandito24.github.io/easyscape-test/easyscape-test-photos/1.jpeg",
    "https://bandito24.github.io/easyscape-test/easyscape-test-photos/2.jpeg",
    "https://bandito24.github.io/easyscape-test/easyscape-test-photos/3.jpeg",
    "https://bandito24.github.io/easyscape-test/easyscape-test-photos/4.jpeg",
    "https://bandito24.github.io/easyscape-test/easyscape-test-photos/7.jpeg",
    "https://bandito24.github.io/easyscape-test/easyscape-test-photos/8.jpeg",
    "https://bandito24.github.io/easyscape-test/easyscape-test-photos/9.jpeg",
    "https://bandito24.github.io/easyscape-test/easyscape-test-photos/10.jpeg",
    "https://bandito24.github.io/easyscape-test/easyscape-test-photos/11.jpeg",
    "https://bandito24.github.io/easyscape-test/easyscape-test-photos/12.jpeg",
    "https://bandito24.github.io/easyscape-test/easyscape-test-photos/13.jpeg"
]

const showcaseForward = document.getElementById('scroll-showcase-forward')
const showcaseBackward = document.getElementById('scroll-showcase-backward')



function nextShowcase(){
    let i = plantImageUrls.indexOf(showcasePlant.src)
    if(showcasePlant.src !== plantImageUrls[plantImageUrls.length - 1]){
    showcasePlant.src = plantImageUrls[i + 1]
    }
    document.getElementById('preview-images').scrollLeft += 110;
}

console.log(showcasePlant.src)
    console.log(plantImageUrls[0])

function previousShowcase(){
    let i = plantImageUrls.indexOf(showcasePlant.src)
    if(showcasePlant.src !== plantImageUrls[0]){
    showcasePlant.src = plantImageUrls[i - 1]
    }
    document.getElementById('preview-images').scrollLeft -= 110;
}

showcaseForward.addEventListener('click', nextShowcase)
showcaseForward.addEventListener('click', highlightThumbnail)
showcaseBackward.addEventListener('click', previousShowcase)
showcaseBackward.addEventListener('click', highlightThumbnail)


const dropDown = document.getElementById('menu-dropdown')
const clickableMenu = document.getElementById('clickable-menu')

function showMenu(){
    var display = getComputedStyle(dropDown).display;

     if (display == "none") {
             dropDown.style.display = "block";
         } else {
            dropDown.style.display = "none";
         }
}

function hideMenu(event){
    if (!dropDown.contains(event.target)) {
    dropDown.style.display = "none"
    }
}
document.addEventListener("mousedown", hideMenu)
clickableMenu.addEventListener('click', showMenu)





