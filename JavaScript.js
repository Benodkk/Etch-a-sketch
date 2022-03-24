const main = document.querySelector('.main');


for (i=1; i<=256; i++){
    const dupa = document.createElement('div')
    main.appendChild(dupa);
    dupa.classList.add('dupa');
    dupa.textContent='siema'
}
