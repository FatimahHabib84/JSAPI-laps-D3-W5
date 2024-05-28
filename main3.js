url = "https://rickandmortyapi.com/api/character/"
console.log(url);
async function fetchData(){
    let response =await fetch(url)
    let json = await response
    let jsons = await json.json()
    console.log(jsons);
    let jsonData = jsons.results
    console.log(jsonData);
    let container = document.getElementsByClassName('container')[0]
    jsonData.forEach((data) => {
        
        div1 = document.createElement('div')
        img1 = document.createElement('img')
        h51 = document.createElement('h5')
        img1.src = data.image
        h51.innerText = data.name
        container.append(div1)
        div1.append(h51)
        div1.append(img1)
        
    });
}
fetchData()