import React, { useMemo } from 'react';
import { generateFibonacci } from '../utils/mathLogic';

const Fibonacci = ({ n }) => {
  const sequence = useMemo(() => generateFibonacci(n), [n]);
  return (
    <div className="card">
      <h3>Fibonacci Sequence</h3>
      <p className="result">{sequence.join(', ')}</p>
    </div>
  );
};
export default Fibonacci;