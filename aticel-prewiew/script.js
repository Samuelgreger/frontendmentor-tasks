const shareBtn = document.getElementById("share")
const shareBtnActive = document.getElementById("share-active")

const popup = document.getElementById("popup")


const writerEl = document.querySelector(".writer");
const shareContainerEl = document.querySelector(".share-cont");


shareBtn.addEventListener('click', () => {
    writerEl.classList.add("hide");
    shareContainerEl.classList.remove("hide");

     /*if(shareBtn.classList.contains(".share-active")){
        shareBtn.classList.remove(".share-active")
        shareBtn.innerHTML = `<img src="images/icon-share.svg">`;
        normal()
    }
    else {
        shareBtn.classList.add(".share-active")
        shareBtn.innerHTML = `<img src="images/icon-share-active.svg">`;

        popup.innerHTML = ""
        popup.innerHTML = `
        <div class="writer share">
            <p>SHARE</p>
            <img class="avatar" src="images/icon-facebook.svg" alt="">
            <img class="avatar" src="images/icon-twitter.svg" alt="">
            <img class="avatar" src="images/icon-pinterest.svg" alt="">

            <Button id="share"><img src="images/icon-share.svg"></Button>   
        </div>`
        }*/
})

shareBtnActive.addEventListener('click', () => {
    writerEl.classList.remove("hide");
    shareContainerEl.classList.add("hide");
}) 

function showLinks(){
    popup.innerHTML = ""
    popup.innerHTML = `<div class="writer share">
        <p>SHARE</p>
        <img class="link" src="images/icon-facebook.svg" alt="">
        <img class="link" src="images/icon-twitter.svg" alt="">
        <img class="link" src="images/icon-pinterest.svg" alt="">

        <Button id="share"><img src="images/icon-share.svg"></Button>   
      </div>`
}

function normal(){
    console.log("test")
    popup.innerHTML = ""
    popup.innerHTML = `
    <div class="writer">
        <img class="avatar" src="images/avatar-michelle.jpg" alt="">
        <p>
        <span class="name">Michelle Appleton</span>
        <span>28 Jun 2020</span>
        </p>
        <Button id="share"><img src="images/icon-share.svg"></Button>   
    </div>`
}