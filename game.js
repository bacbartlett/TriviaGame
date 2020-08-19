import { getClueFromPromise } from "./promise-version.js";

window.addEventListener("DOMContentLoaded", () => {
    document.getElementById('use-promise').addEventListener('click', getClueFromPromise);
})
