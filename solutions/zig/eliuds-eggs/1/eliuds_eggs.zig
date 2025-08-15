pub fn eggCount(number: usize) usize {
    var count: usize = 0;
    var input = number;

    while (input > 0) {
        if (input & 0b1 == 0b1) {
            count += 1;
        }

        input >>= 1;
    }

    return count;
}
