let interval = null
let value = location.search.replace('?','')
let time = (value=='')?5:10

let setTime = (time) =>{
    document.querySelector('strong').innerText = time
    if(time==0){
        clearInterval(interval)
        let link = document.querySelector('a')
        if(value==2){
            link.setAttribute('href','ganar.html')
        } else{
            link.setAttribute('href','siguiente.html')
        }
    }
}
setTime(time)
interval = setInterval(() => {
    setTime(--time)
}, 1000);