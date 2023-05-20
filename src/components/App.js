import React from 'react';
import "./Style.css";
import { useState } from 'react';
import Board from './Board';

// export default function App() {
//   const [squares, setSquares] = useState(Array(9).fill(null));

//   const handleClick = (index) => {
//     const newSquares = [...squares];
//     newSquares[index] = 'X';
//     setSquares(newSquares);
//   };

//   return (
//     <div>
//       <Board squares={squares} onClick={handleClick} />
//     </div>
//   );
// }


export default function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  return (
    <div>
      <Board squares={squares} />
    </div>
  );
}
