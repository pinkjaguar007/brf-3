const openBtn = document.getElementById('openmodal');
const modal = document.getElementById('playermodal');


const closeBtn = document.getElementById('closemodal');
closeBtn.addEventListener('click', closeModal);
const playerform = document.querySelector( 'form')





openBtn.addEventListener('click', function () {
    modal.classList.remove('hidden');
});


function closeModal() {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
}




//const namep = document.querySelector('#player-name')

//const numberp = document.querySelector('#player-number')

//const players= [    ];

//playerform.addEventListener('submit', function () {  

    //const playerobject = {
     //   name: namep.value
       //////} )


