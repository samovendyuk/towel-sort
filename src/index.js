// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (arguments.length == 0) {
        return [];
    }
    if (matrix.length === 0) {
        return (matrix = []);
    }
    for (let i = 0; i < matrix.length; i = i + 2) {
        matrix[i].sort((a, b) => a - b);
    }
    for (let j = 1; j < matrix.length; j = j + 2) {
        matrix[j].sort((a, b) => b - a);
    }
    return matrix.flat();
};
