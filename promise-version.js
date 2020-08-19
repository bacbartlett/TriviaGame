fetch("https://jservice.xyz/api/random-clue").then(res=>{
    if(res.ok){
        return res.json()
    }else{
        throw new Error(res.status)
    }
})



// .catch(error=>console.log(error))