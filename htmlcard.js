export default function setHtmlCardData(chosenTimeFrame,data){
    return `
    <article class="work">
        <div class="row">
        <p>${data[0].title}</p>
        <img src="images/icon-ellipsis.svg" alt=""/>
        </div>
        <div class="row row2">
        <h1>${chosenTimeFrame[0].current}hrs</h1>
        <span class="previous">Last Week - ${chosenTimeFrame[0].previous}hrs</span>
        </div>

        <div class="icon-folder">
        <img src="images/icon-work.svg" alt="" aria-hidden="true">
        </div>
    </article>

    <article class="play">
    <div class="row">
        <p>${data[1].title}</p>
        <img src="images/icon-ellipsis.svg" alt=""/>
    </div>

    <div class="row row2">
        <h1>${chosenTimeFrame[1].current}hrs</h1>
        <span class="previous">Last Week - ${chosenTimeFrame[1].previous}hrs</span>
    </div>
    <div class="icon-folder">
        <img src="images/icon-play.svg" alt="" aria-hidden="true">
    </div>
    </article>

    <article class="study">
    <div class="row">
    <p>${data[2].title}</p>
    <img src="images/icon-ellipsis.svg" alt=""/>
    </div>

    <div class="row row2">
    <h1>${chosenTimeFrame[2].current}hrs</h1>
    <span class="previous">Last Week - ${chosenTimeFrame[2].previous}hrs</span>
    </div>
        
    <div class="icon-folder">
        <img src="images/icon-study.svg" alt="" aria-hidden="true">
    </div>
    </article>

    <article class="exercise">
    <div class="row">
        <p>${data[3].title}</p>
        <img src="images/icon-ellipsis.svg" alt=""/>
    </div>

    <div class="row row2">
        <h1>${chosenTimeFrame[3].current}hrs</h1>
        <span class="previous">Last Week - ${chosenTimeFrame[3].previous}hrs</span>
    </div>
        
    <div class="icon-folder">
        <img src="images/icon-exercise.svg" alt="" aria-hidden="true">
    </div>
    </article>

    <article class="social">
    <div class="row">
        <p>${data[4].title}</p>
        <img src="images/icon-ellipsis.svg" alt=""/>
    </div>

    <div class="row row2">
    <h1>${chosenTimeFrame[4].current}hrs</h1>
    <span class="previous">Last Week - ${chosenTimeFrame[4].previous}hrs</span>
    </div>
        
    <div class="icon-folder">
        <img src="images/icon-social.svg" alt="" aria-hidden="true">
    </div>
    </article>

    <article class="selfcare">
    <div class="row">
        <p>${data[5].title}</p>
        <img src="images/icon-ellipsis.svg" alt=""/>
    </div>
    <div class="row row2">
        <h1>${chosenTimeFrame[5].current}hrs</h1>
        <span class="previous">Last Week - ${chosenTimeFrame[5].previous}hrs</span>
    </div>
    <div class="icon-folder">
        <img src="images/icon-self-care.svg" alt="" aria-hidden="true">
    </div>
    </article>
`
}