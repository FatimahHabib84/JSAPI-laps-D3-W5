btn = document.getElementsByClassName("phone-button")

btn[0].addEventListener('click',()=>{
    let lnk = document.getElementsByTagName("input")[0].value
    window.open(lnk,'newwin','width=375,height=812');
})
btn[1].addEventListener('click',()=>{
    let lnk = document.getElementsByTagName("input")[0].value
    window.open(lnk,'newwin','width=412,height=869');
})
btn[2].addEventListener('click',()=>{
    let lnk = document.getElementsByTagName("input")[0].value
    window.open(lnk,'newwin','width=1024,height=1366');
})
btn[3].addEventListener('click',()=>{
    let lnk = document.getElementsByTagName("input")[0].value
    window.open(lnk,'newwin','width=1920,height=1018');
})

// 