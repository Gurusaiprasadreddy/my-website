// Factorial logic
export const calculateFactorial = (n) => {
  if (n < 0) return "No negative numbers";
  if (n === 0) return "1";
  let res = BigInt(1);
  for (let i = 2n; i <= BigInt(n); i++) res *= i;
  return res.toString();
};

// Fibonacci logic
export const generateFibonacci = (n) => {
  if (n <= 0) return [];
  if (n === 1) return ["0"];
  let seq = [0n, 1n];
  for (let i = 2; i < n; i++) {
    seq.push(seq[i - 1] + seq[i - 2]);
  }
  return seq.slice(0, n).map(num => num.toString());
};

// Prime check logic
export const checkPrime = (n) => {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  return true;
};