export function tdeeCalc(isMale, weightInKg, heightInM, ageInYears) {
	let heightIncm = heightInM * 100;
	if (isMale) {
		return 66 + 13.7 * weightInKg + 5 * heightIncm - 6.8 * ageInYears;
	} else {
		return 655 + 9.6 * weightInKg + 1.8 * heightIncm - 4.7 * ageInYears;
	}
}
