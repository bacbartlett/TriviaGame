import { getClueFromPromise } from "./promise-version.js";

window.addEventListener("DOMContentLoaded", () => {
    document.getElementById('use-promise').addEventListener('click', function(){
        getClueFromPromise().then(data => {
            console.log(data)
            document.getElementById("question").innerHTML = data.question;
            document.getElementById("answer").innerHTML = data.answer;
            document.getElementById("value").innerHTML = data.value;
            document.getElementById("category-title").innerHTML = data.category.title;
            const invalid = document.getElementById("invalid-count");
            if(data.invalid_count !== undefined && data.invalid_count > 0){
                invalid.innerHTML = "invalid"
            } else{
                invalid.innerHTML = "valid"
            }
        })
    })
})