import { defaultCorrectionFactor as defaultCorrectionFactor } from './constants';

/**
 * Sums the informed value applying the correction factor for better precision
 * @param values the list of values to sum
 * @param correctionFactor a power of 10. The number of zeroes is the number of decimal places you want as precision
 * @returns the sum
 */
export function sum(
	values: (number | string)[],
	correctionFactor: number = defaultCorrectionFactor,
) {
	let acc = 0;
	const { length } = values;
	for (let i = 0; i < length; i++) {
		acc += (values[i] as number) * correctionFactor;
	}
	return acc / correctionFactor;
}
