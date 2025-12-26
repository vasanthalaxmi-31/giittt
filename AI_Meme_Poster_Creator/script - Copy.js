function generate() {
    var caption = document.getElementById("caption").value;
    var type = document.getElementById("type").value;
    var output = document.getElementById("output");

    if (caption === "" || type === "") {
        output.innerHTML = "Please enter caption and select type";
        return;
    }

    if (type === "meme") {
        output.innerHTML = `
        <div class="card">
            <img src="https://i.imgflip.com/30b1gx.jpg" alt="Meme Image">
            <div class="caption-text">${caption}</div>
        </div>
        `;
    }

    if (type === "poster") {
        output.innerHTML = `
        <div class="card">
            <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b" alt="Poster Image">
            <div class="caption-text poster-text">${caption}</div>
        </div>
        `;
    }
}
