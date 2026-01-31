import React, { useMemo } from 'react';
import { calculateFactorial } from '../utils/mathLogic';

const Factorial = ({ n }) => {
  const result = useMemo(() => calculateFactorial(n), [n]);
  return (
    <div className="card">
      <h3>Factorial</h3>
      <p className="result">{result}</p>
    </div>
  );
};
export default Factorial;