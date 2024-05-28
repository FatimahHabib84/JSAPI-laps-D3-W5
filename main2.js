
fetch("https://coffee.alexflipnote.dev/random.json")
.then(response => response.json())
.then(data =>{
    console.log(data);
    let imgsrc = document.getElementById('img')
    imgsrc.src = data.file
}
)