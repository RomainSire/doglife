/**
 * Génère une couleur aléatoire en HSL, avec une saturation et une luminosité fixées.
 * @param saturation - La saturation de la couleur (entre 0 et 100) - 80 par défaut
 * @param lightness - La luminosité de la couleur (entre 0 et 100) - 30 par défaut
 * @returns Une couleur HSL aléatoire
 */
export function getRandomHueColor(saturation = 80, lightness = 30): string {
	const hue = Math.floor(Math.random() * 360); // Génère une valeur de teinte entre 0 et 359
	return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}
