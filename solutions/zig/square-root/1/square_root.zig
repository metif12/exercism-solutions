pub fn squareRoot(radicand: usize) usize {
    if (radicand <= 1) return radicand;

    var low: usize = 0;
    var high: usize = radicand + 1 / 2;
    var result: usize = 0;

    while (low <= high) {
        const mid = low + (high - low) / 2;
        const midSquared = mid * mid;

        if (midSquared == radicand) {
            return mid; // Found exact square root
        } else if (midSquared < radicand) {
            low = mid + 1;
            result = mid; // Update result to the largest known value where mid^2 < radicand
        } else {
            high = mid - 1;
        }
    }

    return result;
}
