let interval = null
let value = location.search.replace('?','')
let time = (value=='')?10:5

let palabras = {
    'mesa':'mayonesa',
    'poso':'persoso',
    'misa':'camisa',
    'moza':'hermoza',
    'musa':'iluza',
    'masa':'amenaza',
    'piso':'petiso',
    'pose':'desglose',
}

if(localStorage.getItem('palabra')){
    delete palabras[localStorage.getItem('palabra')]
}

let list = Object.keys(palabras).sort(()=>{
    return Math.random()-.5
}).sort(()=>{
    return Math.random()-.5
})
let index = null
let setTitle = () =>{
    if(list.length==0){
        clearInterval(interval)
        document.querySelector('ul').classList.add('hide')
        return
    }
    index = list.shift()
    document.querySelector('h1').innerText = 'Rima de '+index+'?'
}

setTitle()
let choice = (e) =>{
    if(palabras[index]===e.target.innerText){
        localStorage.setItem('palabra', index)
        document.querySelector('div').innerText = palabras[index]
        clearInterval(interval)
        document.querySelector('ul').classList.add('hide')
        setTimeout(() => {
            if(value==''){
                location.href = 'siguiente.html'
            } else {
                location.href = 'ganar.html'
            }
        }, 2000);
    } else {
        setTitle()
    }
}
let ul = document.createElement('ul')
document.body.appendChild(ul)
Object.keys(palabras).forEach(palabra=>{
    let li = document.createElement('li')
    li.innerText =palabras[palabra]
    li.addEventListener('click', choice)
    ul.appendChild(li)
})

let setTime = (time) =>{
    document.querySelector('strong').innerText = time
    if(time==0){
        clearInterval(interval)
        let link = document.querySelector('a')
        document.querySelector('ul').classList.add('hide')
        link.innerText = 'Continuar'
    }
}
setTime(time)
interval = setInterval(() => {
    setTime(--time)
}, 1000);