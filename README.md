# Suduku-Solver-X-Wing-Swordfish-in-Javascript
SudukoSolve 11 x 11 X-Wing &amp; Swordfish To make the algorithm smarter and solve 11x11 Sudoku puzzles faster than the previous one 3 x3, thr implement additional optimization techniques. But the program is written in javascript. 

# Description

SudukoSolve 11 x 11 X-Wing & Swordfish
To make the algorithm smarter and solve 11x11 Sudoku puzzles faster than the previous one 3 x3, thr implement additional optimization techniques. Here's an updated version of the solving algorithm with further enhancements e.g Forward Checking, Hidden Singles, Naked Pairs/Triples/Quads and X-Wing and Swordfish Techniques. These steps: 

- Forward Checking: After placing a number in a cell, update the possible values of its peers. If any cell ends up with no possible values, backtrack immediately.

- Hidden Singles: Identify hidden singles (cells with only one possible value) and fill them in before resorting to backtracking.

- Naked Pairs/Triples/Quads: Search for rows, columns, or boxes where a combination of cells has the same subset of possible values. If such a subset exists, eliminate these values from other cells in the same row, column, or box.

- X-Wing and Swordfish Techniques: Search for patterns in the puzzle that indicate certain numbers must occupy specific positions in rows or columns, even if they aren't immediately evident.

This code should provide a more efficient solving algorithm for 11x11 Sudoku puzzles, incorporating advanced techniques like forward checking, hidden singles, and elimination strategies for naked pairs/triples/quads.
