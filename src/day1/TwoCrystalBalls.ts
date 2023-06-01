export default function two_crystal_balls(breaks: boolean[]): number {
	let firstBreakIndex = -1;
	const step = Math.floor(Math.sqrt(breaks.length));
	for (let i = 0; i < breaks.length; i += step) {
		if (breaks[i]) {
			firstBreakIndex = i;
			break;
		}
	}

	if (firstBreakIndex === -1) {
		return -1;
	}

	for (let i = firstBreakIndex - step; i < firstBreakIndex; ++i) {
		if (breaks[i]) {
			return i;
		}
	}

	return firstBreakIndex;
}
