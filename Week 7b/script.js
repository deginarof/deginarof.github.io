//Get all the images with data src attibute.
let imagesToLoad = document.querySelectorAll('img[data-src]');

//Optional parameter being set for the IntersectionalObserrver
const imgOptions = {
    threshold: 0,
    rootMàrgin: "0px 0px 50px 0px"
};
const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');
    };
};
//First check to see if Intersection Observer is supported
if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        });
    });

    //Loop through each img on check status and load if necessary
    imagesToLoad.forEach((img) => {
        observer.observe(img);
    });
} else { //Just load all the images if is not supported
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}