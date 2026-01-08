function search(){
    const research = document.getElementById("search").value;

    const displayText = document.getElementById("searched");
    displayText.textContent = research;

    const img = document.getElementById("searched-img");

    research = research.toLowerCase();

    img.src = `alphabet/${research}.jpg`;
}