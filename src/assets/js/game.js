/*
	От себя добавил:

	- Функцию рандомной генерации цветов (реально рандомных)
	- Создание поля с настраиваемыми размерами
*/

// Размер поля в количестве квадратов
const BOARD_SIZES = {
	x: 40, // Ширина
	y: 20 // Высота
}
const SQUARE_WIDTH = 20 // Ширина квадрата с учетом всех margin
const squaresNumber = BOARD_SIZES.x * BOARD_SIZES.y // Подсчет общего количества квадратов

const board = document.querySelector('#board')
board.style.width = `${SQUARE_WIDTH * BOARD_SIZES.x}px` // Задаем ширину поля, для того чтобы квадраты корректно переносились

for (let i = 0; i < squaresNumber; i++) {
	const square = document.createElement('div')
	square.classList.add('square')

	square.addEventListener('mouseover', setColor) 
	square.addEventListener('mouseleave', removeColor)

	board.append(square)
}

function setColor() {
	const color = generateRandomColor()

	this.style.backgroundColor = color
	this.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor() {
	this.style = ''
}

function getColor() {
	return colors[Math.floor(Math.random() * colors.length)]
}

//===========

function generateRandomColor() {
	return `rgb(${randomNumber(255)}, ${randomNumber(255)}, ${randomNumber(255)})`	
}

function randomNumber(max) {
	return Math.round(Math.random() * max)
}