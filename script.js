"use strict";
const plus = document.getElementById('plus');
const newPlantForm = document.getElementById('inputForm');
const button = document.getElementById('button');
let nameInput = document.getElementById('plant-name-input');
let numberInput = document.getElementById('plant-number-input');
let infoInput = document.getElementById('plant-info-input');
const section = document.getElementById('section-1');
let allPlantsArray = [];
const storedPlants = localStorage.getItem('plant');
if (storedPlants) {
    allPlantsArray = JSON.parse(storedPlants);
}
plus.addEventListener('click', () => {
    newPlantForm.style.visibility = 'visible';
});
button.addEventListener('click', () => {
    const plantObject = {
        name: nameInput.value,
        num: numberInput.valueAsNumber,
        info: infoInput.value
    };
    allPlantsArray.push(plantObject);
    localStorage.setItem('plant', JSON.stringify(allPlantsArray));
    newPlantForm.style.visibility = 'hidden';
    section.innerHTML = '';
    for (let i = 0; i < allPlantsArray.length; i++) {
        buildCards(allPlantsArray[i].name, allPlantsArray[i].num, allPlantsArray[i].num, allPlantsArray[i].info);
    }
});
function buildCards(name, waterLevel, waterDays, info) {
    const newPlantCard = document.createElement('div');
    const plantName = document.createElement('h1');
    const waterContainer = document.createElement('div');
    const plantWaterLevel = document.createElement('h3');
    const plantWaterLevelPicture = document.createElement('img');
    const plantWaterLevelDiv = document.createElement('div');
    const plantWaterDays = document.createElement('h3');
    const plantWaterDaysPicture = document.createElement('img');
    const plantWaterDaysDiv = document.createElement('div');
    const plantPicture = document.createElement('img');
    const plantInfo = document.createElement('p');
    newPlantCard.className = 'card';
    waterContainer.className = 'water-container';
    plantName.textContent = name;
    plantWaterLevel.textContent = `${(waterLevel / waterLevel) * 100}%`;
    plantWaterLevelPicture.src = '/assets/images/water-drop.png';
    plantWaterLevelPicture.className = 'water-picture';
    plantWaterLevelDiv.className = 'water-div';
    plantWaterDays.textContent = `${waterDays} Days`;
    plantWaterDaysPicture.src = '/assets/images/water-can.png';
    plantWaterDaysPicture.className = 'water-picture';
    plantWaterDaysDiv.className = 'water-div';
    plantInfo.textContent = info;
    plantPicture.src = '/assets/images/plant.png';
    plantWaterLevelDiv.append(plantWaterLevelPicture, plantWaterLevel);
    plantWaterDaysDiv.append(plantWaterDaysPicture, plantWaterDays);
    waterContainer.append(plantWaterLevelDiv, plantWaterDaysDiv);
    section.append(newPlantCard);
    newPlantCard.append(plantName, waterContainer, plantPicture, plantInfo);
}
console.log('allPlantsArray:', allPlantsArray);
for (let i = 0; i < allPlantsArray.length; i++) {
    buildCards(allPlantsArray[i].name, allPlantsArray[i].num, allPlantsArray[i].num, allPlantsArray[i].info);
}
//# sourceMappingURL=script.js.map