const plus = document.getElementById('plus') as HTMLDivElement
const newPlantForm = document.getElementById('inputForm') as HTMLDivElement
const button = document.getElementById('button') as HTMLButtonElement
let nameInput = document.getElementById('plant-name-input') as HTMLInputElement
let numberInput = document.getElementById('plant-number-input') as HTMLInputElement
let infoInput = document.getElementById('plant-info-input') as HTMLInputElement
const section = document.getElementById('section-1') as HTMLDivElement
let allPlantsArray: any[] = []
const storedPlants = localStorage.getItem('plant')

if (storedPlants) {
	allPlantsArray = JSON.parse(storedPlants)
	}
plus.addEventListener('click', ():void => {
	newPlantForm.style.visibility = 'visible'
})
button.addEventListener('click', (): void => {
	const plantObject: {name: string, num: number, info: string} = {
		name: nameInput.value,
		num: numberInput.valueAsNumber,
		info: infoInput.value
	}

	allPlantsArray.push(plantObject)
	localStorage.setItem('plant', JSON.stringify(allPlantsArray))
	newPlantForm.style.visibility = 'hidden'
	section.innerHTML = ''
	for(let i = 0; i < allPlantsArray.length; i++ ) {
		buildCards(allPlantsArray[i].name, allPlantsArray[i].num, allPlantsArray[i].num, allPlantsArray[i].info )
	}
})

function buildCards(name: string, waterLevel: number, waterDays: number, info: string) {
	const newPlantCard = document.createElement('div') as HTMLDivElement
	const plantName = document.createElement('h1') as HTMLHeadingElement
	const waterContainer = document.createElement('div') as HTMLHeadingElement
	const plantWaterLevel = document.createElement('h3') as HTMLHeadingElement
	const plantWaterLevelPicture = document.createElement('img') as HTMLImageElement
	const plantWaterLevelDiv = document.createElement('div') as HTMLDivElement
	const plantWaterDays = document.createElement('h3') as HTMLHeadingElement
	const plantWaterDaysPicture = document.createElement('img') as HTMLImageElement
	const plantWaterDaysDiv = document.createElement('div') as HTMLDivElement
	const plantPicture = document.createElement('img') as HTMLImageElement
	const plantInfo = document.createElement('p') as HTMLHeadingElement

	newPlantCard.className = 'card'
	waterContainer.className = 'water-container'

	plantName.textContent = name

	plantWaterLevel.textContent = `${(waterLevel / waterLevel) * 100}%`
	plantWaterLevelPicture.src = '/assets/images/water-drop.png'
	plantWaterLevelPicture.className = 'water-picture'
	plantWaterLevelDiv.className = 'water-div'

	plantWaterDays.textContent = `${waterDays} Days`
	plantWaterDaysPicture.src = '/assets/images/water-can.png'
	plantWaterDaysPicture.className = 'water-picture'
	plantWaterDaysDiv.className = 'water-div'

	plantInfo.textContent = info
	plantPicture.src = '/assets/images/plant.png'

	plantWaterLevelDiv.append(plantWaterLevelPicture, plantWaterLevel)
	plantWaterDaysDiv.append(plantWaterDaysPicture, plantWaterDays)
	waterContainer.append(plantWaterLevelDiv, plantWaterDaysDiv)
	section.append(newPlantCard)
	newPlantCard.append(plantName, waterContainer, plantPicture, plantInfo)
}

console.log('allPlantsArray:', allPlantsArray)

for(let i = 0; i < allPlantsArray.length; i++ ) {
	buildCards(allPlantsArray[i].name, allPlantsArray[i].num, allPlantsArray[i].num, allPlantsArray[i].info)
}
