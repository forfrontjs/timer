let milisec = document.querySelector('.milisec')
let second = document.querySelector('.second')
let minute = document.querySelector('.minute')
let res = document.querySelector('.res')
let start = document.querySelector('.start')

let isactive = false    

let timer;

start.addEventListener('click', () => {
    isactive = !isactive;
    if (isactive) {
        timer = setInterval(() => {
            milisec.textContent = +milisec.textContent + 1;
            if (+milisec.textContent === 100) {
                second.textContent = +second.textContent + 1;
                milisec.textContent = '00';
            }
            if (+second.textContent === 60) {
                minute.textContent = +minute.textContent + 1;
                second.textContent = '00';
            }
        }, 10);
    } else {
        clearInterval(timer);
    }
});

res.addEventListener('click', ()=>{
    milisec.textContent = '00';
    second.textContent = '00';
    minute.textContent = '00';
    
})

