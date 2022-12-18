import setHtmlCardData from "./htmlcard.js"
const cardsContainer = document.getElementById('time-content')
const dailyTab = document.querySelector('[data-daily')
const weeklyTab = document.querySelector('[data-weekly]')
const monthlyTab = document.querySelector('[data-monthly]')
let timeToRender = "weekly";


document.addEventListener('click',(e)  => {
    if(e.target.dataset.daily){
        timeToRender = "daily"
        document.querySelector('.active').classList.remove('active')
        e.target.classList.add('active')
        getCardData(timeToRender)
    }
    else if(e.target.dataset.weekly){
        timeToRender = "weekly"
        document.querySelector('.active').classList.remove('active')
        e.target.classList.add('active')
        getCardData(timeToRender)
    }
    else if(e.target.dataset.monthly){
        timeToRender = "monthly"
        document.querySelector('.active').classList.remove('active')
        e.target.classList.add('active')
        getCardData(timeToRender)
    }
})


async function getCardData(timeParam){
    const resp = await fetch('./data.json')
    const data = await resp.json()
    let chosenTimeFrame; 

 switch(timeParam){
        case "daily":
            chosenTimeFrame = data.map(data => data.timeframes.daily);
        break;
        case "weekly":
            chosenTimeFrame = data.map(data => data.timeframes.weekly);
        break;
        case "monthly":
            chosenTimeFrame = data.map(data => data.timeframes.monthly);
        break;
    }
    
    cardsContainer.innerHTML = setHtmlCardData(chosenTimeFrame,data)

}
getCardData(timeToRender)
