pub const ComputationError = error{
    IllegalArgument,
};

pub fn steps(number: usize) ComputationError!usize {
    if (number == 0) {
        return ComputationError.IllegalArgument;
    }

    var current: usize = number;
    var step: usize = 0;

    while (current != 1) {
        if (current % 2 == 0) {
            current /= 2;
        } else {
            current = 3 * current + 1;
        }

        step += 1;
    }

    return step;
}
