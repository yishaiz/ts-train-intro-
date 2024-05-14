export function isPalidrome(str: string): boolean {
  return str === str.split('').reverse().join('');
}

// console.log(isPalidrome('madam')); // true
// console.log(isPalidrome('mada')); // true
