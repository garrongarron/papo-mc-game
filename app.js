let interval = null
let time = 5
let setTime = (time) =>{
    document.querySelector('strong').innerText = time
    if(time==0){
        clearInterval(interval)
        let link = document.querySelector('a')
        link.setAttribute('href','ganar.html')
    }
}
setTime(time)
interval = setInterval(() => {
    setTime(--time)
}, 1000);