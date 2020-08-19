import { getClueFromPromise } from "./promise-version.js";
import { getClue as getClueFromAsyncFunction } from "./async-await-version.js"

const state = {
    currentClue: undefined,
    score: 0
}

function updateUI(){
    document.getElementById("score").innerHTML = state.score;
}

function checkAnswer(){
    document.getElementById("answer").classList.remove("is-hidden");
    document.getElementById("check-response").classList.add("is-hidden");
    const userAnswer = document.getElementById("player-response").value.trim();
    const answer = state.currentClue.answer.trim();
    if(userAnswer.toLowerCase() === answer.toLowerCase()){
        state.score = state.score + Number(state.currentClue.value);
        document.getElementById("player-response").value = "";
    }else{
        state.score = state.score - Number(state.currentClue.value);
    }
    updateUI();
}
window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("player-response").value = "";
    document.getElementById("check-response").addEventListener("click", checkAnswer)
    document.getElementById('use-promise').addEventListener('click', function(){
        document.getElementById("answer").classList.add("is-hidden");
        document.getElementById("check-response").classList.remove("is-hidden");
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
            state.currentClue = data;
        }).catch(error=> console.log(error))
    })

    document.getElementById('use-async-await').addEventListener('click' , async function() {
        document.getElementById("player-response").value = "";
        document.getElementById("answer").classList.add("is-hidden");
        document.getElementById("check-response").classList.remove("is-hidden");
        try {
            let data = await getClueFromAsyncFunction();
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
            state.currentClue = data;
        } catch (err) {
            console.log(err);
        }
    })
})
