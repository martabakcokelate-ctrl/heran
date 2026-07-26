
function openImage(src) {
    var popup = document.getElementById("popup");
     var popupImg = document.getElementById("popup-img");
    popupImg.src = src;
    popup.style.display = "flex";
}
function closeImage() {
document.getElementById("popup").style.display = "none";
}
document.addEventListener("click", function(event) {
var popup = document.getElementById("popup");
if (event.target === popup) {
closeImage();
}
});
