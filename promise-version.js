function getClueFromPromise() {
    // const response = fetch("https://jservice.xyz/api/random-clue")

    fetch("https://jservice.xyz/api/random-clue").then(res=>{
        console.log(res)
        if(res.ok === true){
            return res.json();
        } else {
            throw new Error(res.status)
        }
    }).then(body => {
        body.json();
    }).then(json => console.log(json))
}

export { getClueFromPromise }




// .catch(error=>console.log(error))
