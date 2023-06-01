export default function bs_list(haystack: number[], needle: number): boolean {
	let startIdx = 0;
	let endIdx = haystack.length - 1;

	do {
		const midIdx = Math.floor((startIdx + endIdx) / 2);
		if (haystack[midIdx] === needle) {
			return true;
		}

		if (needle < haystack[midIdx]) {
			endIdx = midIdx - 1;
		} else {
			startIdx = midIdx + 1;
		}
	} while (startIdx <= endIdx);

	return false;
}
