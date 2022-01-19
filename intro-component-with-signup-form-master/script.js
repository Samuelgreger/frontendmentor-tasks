const submitBtn = document.getElementById("submit-btn");

const inputData = document.querySelectorAll("input")

const mailAdress = document.querySelector("[data-mail]")


submitBtn.addEventListener("click", () => {
    
    inputData.forEach(input => {
        if(input.classList.contains("invalid")){
            input.classList.remove("invalid")
        }
        
        if(!input.value){
            input.classList.add("invalid")
            //console.log("no input")
        }
    });
    validMail()
})

function validMail(){
    if(!mailAdress.value || mailAdress.value.indexOf('@') === -1){
        mailAdress.classList.add("invalid")
    }
}