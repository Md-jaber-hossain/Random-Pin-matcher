function getPin(){
    const pin = Math.round(Math.random()*10000);
    const pinString = pin + '';
    if(pinString.length == 4){

        const displayPin = document.getElementById('display-pin');
        displayPin.value = pinString;
    }
    else{
        // console.log('got 3 digit and calling again', pin);
        return getPin();
    }
}
document.getElementById('generatePin').addEventListener('click', function(){
    getPin();
})

document.getElementById('key-pad').addEventListener('click', function(event){
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if(isNaN(number)){
        if(number == 'C'){
            calcInput.value = '';
        }
    }
    else{
        
        calcInput.value = calcInput.value + number;
    }
})

document.getElementById('verifyPin').addEventListener('click', function(){
    
    const pin = document.getElementById('display-pin').value;
    const typedNumber = document.getElementById('typed-numbers').value;

    const successMessage = document.getElementById('notify-success');
    const failError = document.getElementById('notify-fail');

    if(pin == typedNumber){
        
        successMessage.style.display = 'block';
        failError.style.display = 'none';
    }
    else{
        
        failError.style.display = 'block';
        successMessage.style.display = 'none';
    }
})
    
