import React, { useMemo } from 'react';
import { checkPrime } from '../utils/mathLogic';

const PrimeChecker = ({ n }) => {
  const isPrime = useMemo(() => checkPrime(n), [n]);
  return (
    <div className="card">
      <h3>Prime Check</h3>
      <p className={`status ${isPrime ? 'prime' : 'not-prime'}`}>
        {n} is {isPrime ? "a Prime Number" : "Not a Prime Number"}
      </p>
    </div>
  );
};
export default PrimeChecker;