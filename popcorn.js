const elements = 100;
let container = document.querySelector('main')

async function createPopCorn () {
    let popcornContainer = document.createElement('span')
    let popcorn = document.createElement('img');
    let posisionHorizontal = Math.random()*screen.width;
    popcornContainer.appendChild(popcorn)
    popcornContainer.classList.add('popcorn-up')
    popcorn.setAttribute('src', './Assets/popcorn.svg');
    
    container.appendChild(popcornContainer)
    await new Promise(res => setTimeout(res, 1000));
    popcornContainer.classList.add('popcorn-down')
    popcorn.style.transform = 'rotate(360deg)';
    popcornContainer.style.left = posisionHorizontal+'px';
    
}

async function sacarlasPopcorn(){
    let counter = 0;
    setInterval(() => {
        if(counter < elements){
            createPopCorn()
            counter ++
        } else {window.clearInterval()}
    }, 100)
    
    await new Promise(res => setTimeout(res, 4000+(elements*100)+1000));
    for (let index = 0; index < elements; index++) {        
        container.firstChild.remove()
    }
}

