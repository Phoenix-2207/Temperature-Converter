let CelsiusInput = document.getElementById('celsius');
let FarhenInput = document.getElementById('fahrenheit');
let kelvinInput = document.getElementById('kelvin');

CelsiusInput.addEventListener('input',function(){
    let C= parseFloat(CelsiusInput.value)
    FarhenInput.value = ((C*(9/5)) + 32).toFixed(2)
    kelvinInput.value = (Number(C) + 273.15).toFixed(2)
    if (C=='' && C!=0){
        FarhenInput.value = ''
        kelvinInput.value = ''
    }
})

FarhenInput.addEventListener('input',function(){
    let F= parseFloat(FarhenInput.value)
    CelsiusInput.value = ((F - 32)*(5/9)).toFixed(2)
    kelvinInput.value = ((F - 32)*(5/9) + 273.15).toFixed(2)
    if (F=='' && F!=0){
        CelsiusInput.value = ''
        kelvinInput.value = ''
    }
})

kelvinInput.addEventListener('input',function(){
    let K= this.parseFloat(kelvinInput.value)
    FarhenInput.value = ((K - 273.15)*(9/5) + 32).toFixed(2)
    CelsiusInput.value = (Number(K) - 273.15).toFixed(2)
    if (K=='' && K!=0){
        FarhenInput.value = ''
        CelsiusInput.value = ''
    }
})