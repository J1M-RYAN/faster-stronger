export function poundsToKg(pounds) {
	return pounds * 0.453592;
}
// foot input example "5  foot"
export function footToMeters(foot, inches) {
	let footAsNum = parseInt(foot.split(' ')[0]);
	let inchesAsNum = parseInt(inches.split(' ')[0]);
	return footAsNum * 0.3048 + inchesAsNum * 0.0254;
}
