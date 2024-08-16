const printReversedPyramid =(rows) => {
    for (let i = rows; i >= 1; i--) {
        let line = '';

        for (let j = 0; j < rows - i; j++) {
            line += ' ';
        }

        for (let k = 0; k < (2 * i - 1); k++) {
            if (i % 2 === 0) {
                line += '+';
            } else {
                if (k % 2 === 0) {
                    line += '#';
                } else {
                    line += '+';
                }
            }
        }

        console.log(line);
    }
}
printReversedPyramid(5);

