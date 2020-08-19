function getClueFromPromise() {
    // const response = fetch("https://jservice.xyz/api/random-clue")

    return fetch("https://jservice.xyz/api/random-clue").then(res=>{
        if(res.ok === true){
           return res.json();
        } else {
            throw new Error(res.status)
        }
    }).then(data=>{
        return data;
    })
}

export { getClueFromPromise }




// .catch(error=>console.log(error))
