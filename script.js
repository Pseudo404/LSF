function search(){
    const research = document.getElementById("search").value;

    const displayText = document.getElementById("searched");
    displayText.textContent = research;

    const img = document.getElementById("searched-img");

    img.src = `alphabet/${research.toLowerCase()}.jpg`;
}