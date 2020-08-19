
async function getClue() {
    const res = await fetch("https://jservice.xyz/api/random-clue");
    if (res.ok) {
        const obj = await res.json();
        return obj;
    } else {
        throw new Error(res.status);
    }
}



export {getClue}
