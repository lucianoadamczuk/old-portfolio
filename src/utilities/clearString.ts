export function cleanString(str: string): string {
	const trimmedStr = str.trim().replace(/\s+/g, ' ');
	const cleanedStr = trimmedStr
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '');
	return cleanedStr.replace(/[^a-zA-Z0-9 ]/g, '');
}
