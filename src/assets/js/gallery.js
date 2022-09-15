// Немного изменил скрипт. На мой взгляд так он выглядит логичнее

const slides = document.querySelectorAll('.slide')

slides.forEach(slide => slide.addEventListener('click', changeActiveSlide))

function changeActiveSlide() {
	slides.forEach(slide => {
		slide.classList.remove('open')
	})

	this.classList.add('open')
}