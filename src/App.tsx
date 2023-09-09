//https://www.youtube.com/watch?v=BJc5cX_D1Lg
import { FC, useState } from 'react';

import './style.css';

export const App: FC = () => {
  const [cells, setCells] = useState(['a', 'b', 'c']);
  const changeCellContent = (newCellValue: string, indexToUpdate: number) => {
    setCells((prevCells) =>
      prevCells.map((cell, i) => (i === indexToUpdate ? newCellValue : cell))
    );
  };
  const handlePlusClicked = (index: number) => {
    setCells((prev) => [
      ...cells.slice(0, index + 1),
      '-',
      ...cells.slice(index + 1),
    ]);
  };
  return (
    <div className="App">
      <div className="cells">
        {cells.map((cell, ind) => (
          <div className="cell">
            <input
              onChange={(e) => changeCellContent(e.target.value, ind)}
              value={cell}
            ></input>
            {ind < cells.length - 1 && (
              <div className="plus" onClick={() => handlePlusClicked(ind)}>+</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
