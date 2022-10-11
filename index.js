addEventListener('DOMContentLoaded', (event) => {


    const funFacts = [
        {Nihaal: "I’ve won more than half of the fantasy football leagues I’ve been in."},
        {Shraeya: "My dog has over 2.6 million views on TikTok"},
        {Sarah: "I met one of Brazil’s most famous pop stars on a plane when I was a newborn and she told my mom that I was a cute baby."},
        {SarahRose: "Graduated from EMT school but was unable to do it professionally because, well… human fluids."},
        {Roger: "I share a first name with my father, grandfather, and great grandfather, making me the 4th in a row with this name."},
        {Sean:  "I grew up right across the street from Harry Houdini's childhood home and only found this out a few years ago when they honored that home with a plaque."},
        {Taryn:  "I have a dead person's bone in my foot."},  
        {Phil: "I have auditioned for one play in my life and got the lead role."},
        {Sue: "I had a custom VW bug featured in several car magazines in U.S. and Japan."},
        {Venkat: "I've visited 36 countries on 5 continents."},
        {Ohm:  "I went to 5 dubstep shows this summer."},
        {Nicki: "Ran the merch table for the Boston Typewriter Orchestra."},
        {Lilian: "I visited an alpaca farm recently and bought a stuffed alpaca with real alpaca fur"},
        {Lana: "Won the Silver Medal for the USA in the Dance Olympics"},
        {Kevin: "In high school, I was on Homecoming Court without running for it."},
        {Kathy: "I have watched Game of Thrones a total of 4 times from start to finish."}, 
        {Jim: "I was invited to play guitar by Yo Yo Ma and his Silk Road Ensemble at the Peabody Essex Museum."},
        {Jake: "Used to work at State Farm."},
        {Allen: " I own a 5 gallon tank with over 100 shrimp and another 20 gallon tank where one fish magically disappeared."},
        {Heather: "Won a 2011 Guiness Book of World Records for participating in the longest Secret Santa game."},
        {Chuck: "As a child actor, I was featured in a print ad that ran in the New England editions of Newsweek, Time, U.S. News & World Report, and other top magazines, as a Boston Globe paperboy. The real paperboy in my neighborhood was annoyed, but my sixth-grade self said, 'Sorry bro, it’s the ad biz. It’s all make-believe'"},
        {DJ: "Went skydiving and did not like it."},
        {Fiona: "I’ve been on Japanese television."},
        {Erika: "Loves going to concerts alone and makes friends there. "},
        {Eric: "Played tennis with Arthur Ashe."},
        {Emily: "I’ve gone to 150+ concerts for free as a concert photographer-I have an instagram account for this as well"},
        {Ellie: "Who's been stranded in Japan because of the worst typhoon to hit it in 60 years?"},
        {Chris:" Loves spicy food and spent the summer cooking recipes with ghost peppers from his garden."},
       {Brian: "My dog is by far more popular than me.  Everyone knows my dog's name in my neighborhood but less than half know mine."},
        {Bob:  "Picked up and drove his current car on a different continent."},
        {Beatrice: "There is nothing fun about me! I am dead serious!"},
        {Amy: "Has an irrational fear of escalators."},
        {Barbara: "Has had two dogs: both named, Buddy."},
        {Ally: "My dog climbed a tree once to chase a squirrel."},
        {Allie: "I've seen 5 out of the 7 wonders of the worlds so far! 2 more to go!"},
        {Abby: "I’m a twin."},
        {Amanda: "Member of the 4,000 footer club."},
        {Bailey: "I can slalom water ski."},
        {Andrew:" When I was a teenager, I “borrowed” a 6-foot-tall iPhone 4S display from an AT&T parking lot because it had Siri on it and I thought it was so cool!"},
        {Zaden: "I made it to the callback rounds of auditioning for a Harrison Ford & Brendan Frasier movie (Extraordinary Measures). Unfortunately I didn’t get the part and my career as a child actor ended before it began."},
        {Mitchell:" Born in Omaha, Nebraska. "},
        {Milynn: "I’m a HUGE crocheter & have made over 100 projects in the past 2 years!"},
        {Michael: "Has solved the New York Times crossword every day for the last 5 years"},
        {Josh: "I have five chickens for whom I built a custom chicken coop palace. So far it kept a 400-lb. bear out so SO FAR I'm happy!"},
       {Geoff: "When I was 16, I played in the orchestra for three months of a Broadway-backed production of West Side Story."},
      {Piotr: "Coffee makes me want to go to sleep, 9 out of 10 times. But randomly, it makes me a Duracell Bunny.  y"},
        {Pascal:  "I have got over 250 cultivars of edible perennials planted at my house."},
       {Ean:  "I have a twin brother and when we were kids I broke my right arm, he broke his left arm, I got stitches above my left  eye, and he got stitches above his right eye all in the span of ~two years."},
       {Eli: "Successfully taught my significant other how to ski....and now she’s better at it than I am."},
       {Chris: "I love spicy food and spent the summer cooking recipes with ghost peppers from my garden."},
        {Kathy: "I have watched Game of Thrones a total of 4 times from start to finish."},
        {Lucy: "When I was 11, I wrote Warrior Cats fan fiction - over 100 pages!"},
        {Ben: "Played football in Cardinal’s Stadium for the state finals. "},
        {Logan: "I built the American Ninja Warrior obstacle “The Salmon Ladder” in my backyard."}, 
         {Kyu: "Will run 1,000 miles this year."},
         {Abhi: "I got eagle scout in under 2 years"},
         {Jerry: "At the age of 7 I was in a public service announcement on seatbelt use/safety."},
         {Steven: " I paid for university working as a musician."},
         {Allen: "I own a 5-gallon tank with over 100 shrimp. And another 20-gallon tank where one fish magically disappeared. "},
         {Nick: "I've visited 50+ cities in the last 2 years"},
         {Ryan: "I had a broken wrist for 7 weeks before it was diagnosed."}

    ]
    


    let userCount = 60
    let body = document.body
    for(let currentTable = 0; currentTable<userCount; currentTable++){
        let funFactsCopy = [...funFacts]
        let funFactsValues = funFactsCopy.map((fact)=>Object.values(fact)[0])
        let table = document.createElement(`div`)
        table.className = `.main-table--${currentTable}`
        table.classList.add('main-table')
        table.classList.add('pb')
        table.innerHTML = `
            <div class "header" justify-content: center;> 
<H2 style="font-family: tahoma; font-size: 60px; text-align: center;">ALIGNABLE BINGO </H2>
<img source="alignable-img.png">


    </div>
                <br>
                            <br>
        <div class="row">
            <div class="grid-marker-row box">1</div>
        </div>
        <div class="row"><div class="grid-marker-row box">2</div></div>
        <div class="row"><div class="grid-marker-row box">3</div></div>
        <div class="row"><div class="grid-marker-row box">4</div></div>
        <div class="row"><div class="grid-marker-row box">5</div></div>


        `

        for( let currentRow = 0; currentRow<5; currentRow++){
            for(let i=0; i<5; i++){
                let randIdx = Math.floor(Math.random() *(funFactsValues.length-1))
                let currentFunFact = funFactsValues[randIdx]
                funFactsValues= funFactsValues.filter(funfact=> funfact !== currentFunFact)
                let currentFunFactBox = document.createElement('div')
                currentFunFactBox.className="box"
                currentFunFactBox.innerHTML=
                `
                <div border:transparent>
                    <div class="box-content"     width: 180px;
    height: 100%>
                    ${currentFunFact}
                    </div>
                </div>`
               
                table.getElementsByClassName("row")[currentRow].appendChild(currentFunFactBox)
                body.appendChild(table)
            }
        }
    }

});
