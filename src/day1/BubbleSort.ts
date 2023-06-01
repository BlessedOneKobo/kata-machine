export default function bubble_sort(arr: number[]): void {
	let j = arr.length - 1;
	let didSwap;
	do {
		didSwap = false;
		for (let i = 0; i < j; ++i) {
			if (arr[i] > arr[i + 1]) {
				[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
				didSwap = true;
			}
		}

		if (didSwap) {
			--j;
		}
	} while (didSwap);
}
