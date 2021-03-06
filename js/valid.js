const unternehmenForm = document.querySelector("#msgOne"),
	nameForm = document.querySelector("#name"),
	emailForm = document.querySelector("#emailInp"),
	phoneForm = document.querySelector("#inputPhone"),
	nachrichtForm = document.querySelector("#msg"),
	checkboxForm = document.querySelector("#inputCheckbox"),
	btnForm = document.querySelector(".form__btn.btn"),
	formBody = {};


const addEventInput = (element, fieldName) => {
	element.addEventListener("input", (event) => {
		event.target.style.borderColor = "#D9D9D9"
		formBody[fieldName] = event.target.value
		!event.target.value && inputErrorWriter(element)
	})
}

addEventInput(unternehmenForm, "unternehmen")
addEventInput(nameForm, "name")
addEventInput(emailForm, "email")
addEventInput(phoneForm, "phone")
addEventInput(nachrichtForm, "nachricht")

checkboxForm.addEventListener("click", (event) => {
	event.target.checked && event.target
	formBody.checked = (document.querySelector(".checkbox__body span").style.color = "#000")
})

const inputErrorWriter = (element) => {
	element.style.borderColor = "#ef0404"
	element.value = ""
	element.placeholder = "Information eingeben"
	element.className = `${element.className.split(" ").filter(el => el !== "placeholder-none").join(" ")} placeholder-none`
}

const validateForm = () => {
	const unternehmenForm = document.querySelector("#msgOne")
	const nameForm = document.querySelector("#name")
	const emailForm = document.querySelector("#emailInp")
	const phoneForm = document.querySelector("#inputPhone")
	const nachrichtForm = document.querySelector("#msg")

	const { unternehmen, name, email, phone, nachricht, checked } = formBody
	if (unternehmen && name && email && phone && nachricht && checked) {

	} else {
		!unternehmen && inputErrorWriter(unternehmenForm)
		!name && inputErrorWriter(nameForm)
		!email && inputErrorWriter(emailForm)
		!phone && inputErrorWriter(phoneForm)
		!nachricht && inputErrorWriter(nachrichtForm)
		!checked && (document.querySelector(".checkbox__body span").style.color = "rgb(239, 4, 4)")
	}
}

btnForm.addEventListener("click", (event) => {
	event.preventDefault()
	console.log(formBody)
	validateForm()
})




btnForm.setAttribute("disabled","")

checkboxForm.addEventListener("click", function () {
	if (checkboxForm.checked) {
		btnForm.removeAttribute("disabled")

	} else {
		btnForm.setAttribute("disabled","")
	}
})