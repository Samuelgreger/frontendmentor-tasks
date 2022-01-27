const nationContEl = document.querySelector("[data-all-nations-cont]")
const backBtn = document.getElementById("back-btn")
const nationSpecificContEl = document.querySelector("[data-specific-nations-cont]")

const searchBtn = document.getElementById("search")
let searchInput = document.querySelector("[data-country-search]")

const darkModeBtn = document.getElementById("dark-mode")
const body = document.querySelector("body")

darkModeBtn.addEventListener('click', () => {
    body.classList.toggle("dark-mode")
})

async function getAllNations() {
    let data = await fetch("https://restcountries.com/v3.1/all")
    let dataJson = await data.json()
    let dataNations = dataJson

    displayNations(dataNations)
}

async function getNationsFromCont(region) {
    let data = await fetch(`https://restcountries.com/v2/region/${region}`)
    let dataJson = await data.json()
    let dataNationsContinent = dataJson
    displayNations(dataNationsContinent)
}

async function getNationByName(name) {
    let data = await fetch(`https://restcountries.com/v2/name/${name}`)
    let dataJson = await data.json()
    let dataNationName = dataJson

    const currentLocation = window.location.href
    
    if (currentLocation.includes("index.html")){
        //console.log(currentLocation.includes("index.html"))
        displayNations(dataNationName)
    } else {
        if(dataNationName.length === 1){
            //console.log(dataNationName)
            //console.log(dataNationName.length)
            displaySpecificNation(dataNationName[0])
        } else {
            //console.log(dataNationName)
            //console.log(dataNationName.length)
        }
    }
}
    
function displayNations(dataNations) {
    console.log(dataNations)
    nationContEl.innerHTML = ""
    dataNations.forEach(nation => {
        let nationName = nation.name.common;
        if(!nationName){
            nationName = nation.name
        }
        let nationFlagUrl = nation.flags.svg;
        let nationCapital = nation.capital;
        let nationContinent = nation.continents;
        if(!nationContinent){
            nationContinent = nation.region
        }
        let nationPopulation = populationTransform(nation.population);

        const nationCard = document.createElement("div");
        nationCard.classList.add("nation-card");
        
        nationCard.innerHTML = `
        <div onclick="location.href='nation.html?nation=${nationName}'">
        <img src="${nationFlagUrl}" alt="${nationName}">
        <div class="nation-info">
            <h2>${nationName}</h2>
            <p><span>Population:</span> ${nationPopulation}</p>
            <p><span>Region:</span> ${nationContinent}</p>
            <p><span>Capital:</span> ${nationCapital}</p>
        </div>
        </div>`
        nationContEl.appendChild(nationCard);   
    });
}

function initializeSpecific() {
    let nation = new URLSearchParams(location.search).get("nation");
    getNationByName(nation)
        backBtn.addEventListener('click', () => {
        window.location.href="index.html";
    })
}

function initialize(){
    const menuOptions = document.getElementById("menu-options")
    getAllNations()
    searchBtn.addEventListener('click', (e) => {
        e.preventDefault()
        console.log(searchInput)
        getNationByName(searchInput.value)
        searchInput.value = ""
    })

    menuOptions.addEventListener("click", () => {
        let value = ""
        if(menuOptions.value) {
            value = menuOptions.value
            if(value === "all"){
                getAllNations();
            } else {
                getNationsFromCont(value)
            }
        } else {
            return
        }
    })
}

function displaySpecificNation(nation) {
    let nationName = nation.name;
    let nationFlagUrl = nation.flag;
    let nationCapital = nation.capital;
    let nationContinent = nation.region;
    let nationPopulation =  nation.population;
    let nationNativeName = nation.nativeName;
    let nationSubregion= nation.subregion;
    let nationDom = nation.topLevelDomain;
    let nationLan = nation.languages[0].name; //maybe different to other nations
    let nationCurrency = nation.currencies[0].name; //maybe different to other nations
    let nationBorder = nation.borders

    const specificCard = document.createElement("div")
    specificCard.classList.add("specific-nation-card")

    specificCard.innerHTML =`
        <div class="specific-nation-img">
            <img src=${nationFlagUrl} alt="${nationName}">
        </div>
        <div class="specific-nation-info">
            <h2>${nationName}</h2>
            <div class="content">
            <div class="left">            
                <p><span>Native Name:</span> ${nationNativeName}</p>
                <p><span>Population:</span> ${populationTransform(nationPopulation)}</p>
                <p><span>Region:</span> ${nationContinent}</p>
                <p><span>Subregion:</span> ${nationSubregion}</p>
                <p><span>Capital:</span> ${nationCapital}</p>
            </div>
            <div class="right">
                <p><span>Top Level Domain:</span> ${nationDom}</p>
                <p><span>Language:</span> ${nationLan}</p>
                <p><span>Currency:</span> ${nationCurrency}</p>
                <p><span>Border Countries:</span> ${nation.borders}</p>
            </div>
            </div>
        </div>`
    
    nationSpecificContEl.appendChild(specificCard)
}

function populationTransform(num) {
    return num.toLocaleString(undefined, { 
        minimumFractionDigits: 0, 
        maximumFractionDigits: 2
    });
}