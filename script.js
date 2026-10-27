const openBtn = document.getElementById('openmodal');
const modal = document.getElementById('playermodal');


const closeBtn = document.getElementById('closemodal');
closeBtn.addEventListener('click', closeModal);

const playerform = document.querySelector('form')





openBtn.addEventListener('click', function () {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
});


function closeModal() {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
}




const namep = document.querySelector('#player-name')

const numberp = document.querySelector('#player-number')







const players = JSON.parse(localStorage.getItem("localstoragedata")) || [];

function sendtolocalstorage() {


    localStorage.setItem("localstoragedata", JSON.stringify(players))




}



const addbutton = document.getElementById("ajouter")

playerform.addEventListener('submit', function (event) {

    event.preventDefault();

    const player = {
        name: namep.value,
          id: Date.now(),
        number: numberp.value ,

    }

    playerform.reset();

    players.push(player)

    sendtolocalstorage()

    renderPlayers()
    closeModal()
    


}

)


const container = document.querySelector('#players-container')
const template = document.querySelector('#player-template')


function renderPlayers() {
    container.innerHTML = ""

    players.forEach(function (player) {
        const card = template.content.firstElementChild.cloneNode(true)

        card.querySelector(".player-name").textContent = player.name
        card.querySelector(".player-number").textContent = player.number

        container.appendChild(card)
    })
}

renderPlayers()


const anuller = document.querySelector('#anuller-button')
anuller.addEventListener ('click' , closeModal)





