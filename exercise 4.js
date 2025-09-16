var age = prompt("How old are you? ")
age = Number(age)
if (age === 18) {
	prompt("Congrats on your first year driving!")
} else if (age < 18) {
	prompt("Sorry, you are too young to drive.")
} else {
	prompt("Enjoy the ride!")
}