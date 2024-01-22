const plus = document.getElementById('plus') as HTMLDivElement
const newPlantForm = document.getElementById('inputForm') as HTMLDivElement
const button = document.getElementById('button') as HTMLButtonElement
let nameInput = document.getElementById('plant-name-input') as HTMLInputElement
let numberInput = document.getElementById('plant-number-input') as HTMLInputElement
let infoInput = document.getElementById('plant-info-input') as HTMLInputElement
const section = document.getElementById('section-1') as HTMLDivElement


plus.addEventListener('click', ():void => {
	newPlantForm.style.visibility = 'visible'
})

button.addEventListener('click', (): void => {
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
	const plantInfo = document.createElement('p') as  HTMLHeadingElement

	newPlantCard.className = 'card'
	waterContainer.className = 'water-container'

	plantName.textContent = nameInput.value

	plantWaterLevel.textContent = `${(numberInput.valueAsNumber / numberInput.valueAsNumber) * 100}%`
	plantWaterLevelPicture.src = '/assets/images/water-drop.png'
	plantWaterLevelPicture.className = 'water-picture'
	plantWaterLevelDiv.className = 'water-div'

	plantWaterDays.textContent = `${numberInput.valueAsNumber} Days`
	plantWaterDaysPicture.src = '/assets/images/water-can.png'
	plantWaterDaysPicture.className = 'water-picture'
	plantWaterDaysDiv.className = 'water-div'

	plantInfo.textContent = infoInput.value
	plantPicture.src = '/assets/images/plant.png'

	plantWaterLevelDiv.append(plantWaterLevelPicture, plantWaterLevel)
	plantWaterDaysDiv.append(plantWaterDaysPicture, plantWaterDays)
	waterContainer.append(plantWaterLevelDiv, plantWaterDaysDiv)
	section.append(newPlantCard)
	newPlantCard.append(plantName, waterContainer, plantPicture, plantInfo)

	newPlantForm.style.visibility = 'hidden'
})

