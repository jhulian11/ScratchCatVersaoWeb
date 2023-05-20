
const delay = ms => new Promise(res => setTimeout(res, ms));
const delayMiau = async (miau) => {
    await delay(2000);
    miau.classList.add('d-none');
  };

const delay1s= async () => {
    await delay(1000);
};

const myCat = document.querySelector('.my-cat');
const myCatDiv = document.querySelector('.cat-div');
const miau = document.getElementById('miau');

const clicks = document.querySelector('.input-cat');

const myButton = document.querySelector('.btn-clique');
let number = 10;
let fixo = 10;
let rotate = 5;



myButton.addEventListener('click', async () => {
    console.log(clicks);
    console.log(clicks.value);

    for (let i = 0; i < clicks.value; i++) { 

        myCat.style.transform = `translateX(${fixo}px)`;
    
        myCatDiv.style.transform = `rotate(${rotate}deg)`;
    
        rotate = rotate * -1;
    
        fixo += number;
        if(fixo > 140 || fixo < -140)
            number = number * -1;
    
        if(fixo == 70 || fixo == -70){
            miau.classList.remove('d-none');
            delayMiau(miau);
        }

        await delay1s(); 

        
    }

})

