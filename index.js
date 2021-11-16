const counterBtn = document.getElementById('counter')

counterBtn.addEventListener('click', function incrementCounter(){
    const count = Number(counterBtn.innerText)
    counterBtn.innerText = count
})