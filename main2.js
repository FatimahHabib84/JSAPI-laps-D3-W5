

// طريقة الاولى
let url = "https://coffee.alexflipnote.dev/random.json"
fetch(url)
.then(response => response.json())
.then(data =>{
    console.log(data);
    let imgsrc = document.getElementById('img')
    imgsrc.src = data.file
})  

// طريقة ثانية

async function fetchData(){
    let res = await fetch(url)
    let data = await res.json()
    console.log(data);
}
fetchData()