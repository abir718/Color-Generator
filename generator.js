let box = document.getElementById('box');
let btn = document.getElementById('btn');
let h1 = document.getElementById('h1')

btn.addEventListener('click', function() {

    let r = Math.floor(Math.random()*256)
    let g = Math.floor(Math.random()*256)
    let b = Math.floor(Math.random()*256)

    box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    h1.innerHTML = `
    <h1 class="text-2xl font-medium mt-4">rgb(${r}, ${g}, ${b})</h1>
    `

});
