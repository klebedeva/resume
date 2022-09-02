const counterContainer = document.querySelector('.counter');
const counterValue = document.querySelector('.counter_value');
const btnMinus = document.getElementById('minus');
const btnPlus = document.getElementById('plus');

const colorCounter = (counter) => {
    if(counter > 0) {
        counterValue.classList.add('positive');
    }

    if(counter < 0) {
        counterValue.classList.add('negative');
    }
}

const increment = () => {
    let counter = counterValue.innerHTML;
    counter = Number(counter) + 1;
    colorCounter(counter);

    const span = document.createElement('span');

    span.innerText = counter;
    span.style.color = 'blue';
    span.style.fontWeight = '700';
    
    counterContainer.append(span);

    counterValue.innerHTML = counter;  
};

const decrement = () => {
    let counter = counterValue.innerHTML;
    counter = Number(counter) - 1;
    colorCounter(counter);

    counterValue.innerHTML = counter;  
};

btnMinus.addEventListener('click', decrement);
btnPlus.addEventListener('click', increment);