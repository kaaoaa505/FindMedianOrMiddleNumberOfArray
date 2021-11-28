function solve(a: number[] = []): number {
    const isEven: boolean = a.length % 2 === 0;
    return isEven ? a[Math.floor(a.length / 2) - 1] : a[Math.floor(a.length / 2)];
}

const a01 = [2, 4, 7];
console.log(solve(a01)); // 4

console.log('________________________________');

const a02 = [2, 4, 7, 6];
console.log(solve(a02)); // 4

console.log('________________________________');

const a03 = [2, 4, 7, 6, 6];
console.log(solve(a03)); // 7

console.log('________________________________');

const a04 = [2, 4, 7, 6, 6, 8];
console.log(solve(a04)); // 7

console.log('________________________________');

