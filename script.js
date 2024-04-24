document.addEventListener("DOMContentLoaded", function() {
    const sudokuGrid = document.getElementById("sudoku-grid");
    const solveBtn = document.getElementById("solve-btn");
    const resetBtn = document.getElementById("reset-btn");

    // Generate the Sudoku grid
    for (let i = 0; i < 121; i++) {
        const cell = document.createElement("input");
        cell.type = "text";
        cell.className = "cell";
        cell.maxLength = 1;
        sudokuGrid.appendChild(cell);
    }

    // Add event listener to the Solve button
    solveBtn.addEventListener("click", solveSudoku);
    // Add event listener to the Reset button
    resetBtn.addEventListener("click", resetSudoku);
});

async function solveSudoku() {
    const puzzle = readSudokuGrid();
    const solved = await solveWithAdvancedTechniques(puzzle);
    if (solved) {
        alert("Sudoku solved successfully!");
    } else {
        alert("Could not solve Sudoku puzzle. Please check input.");
    }
}

function resetSudoku() {
    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => {
        cell.value = '';
    });
}

async function solveWithAdvancedTechniques(puzzle) {
    const emptyCell = findEmptyCellWithMRV(puzzle);
    if (!emptyCell) {
        return true; // Puzzle solved
    }

    const [row, col] = emptyCell;
    const possibleValues = getPossibleValues(puzzle, row, col);

    for (const num of possibleValues) {
        puzzle[row * 11 + col] = num;
        updateSudokuGrid(puzzle);
        await sleep(100); // Delay for animation

        if (await solveWithAdvancedTechniques(puzzle)) {
            return true;
        }

        puzzle[row * 11 + col] = 0; // Backtrack
        updateSudokuGrid(puzzle);
        await sleep(100); // Delay for animation
    }

    return false; // No valid number found
}

function readSudokuGrid() {
    const puzzle = [];
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell, index) => {
        const value = parseInt(cell.value) || 0;
        puzzle.push(value);
    });
    return puzzle;
}

function updateSudokuGrid(puzzle) {
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell, index) => {
        cell.value = puzzle[index] === 0 ? '' : puzzle[index];
    });
}

function findEmptyCellWithMRV(puzzle) {
    let minPossibleValues = 12;
    let minCell = null;

    for (let row = 0; row < 11; row++) {
        for (let col = 0; col < 11; col++) {
            if (puzzle[row * 11 + col] === 0) {
                const possibleValues = getPossibleValues(puzzle, row, col);
                const numPossibleValues = possibleValues.size;

                if (numPossibleValues < minPossibleValues) {
                    minPossibleValues = numPossibleValues;
                    minCell = [row, col];
                }
            }
        }
    }

    return minCell;
}

function getPossibleValues(puzzle, row, col) {
    const possibleValues = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);

    // Remove values in the same row and column
    for (let i = 0; i < 11; i++) {
        possibleValues.delete(puzzle[row * 11 + i]);
        possibleValues.delete(puzzle[i * 11 + col]);
    }

    // Remove values in the same 3x3 subgrid (not applicable for 11x11 Sudoku)
    // Adjust according to the rules of your custom Sudoku variant

    return possibleValues;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
