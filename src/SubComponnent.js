import React from 'react';
import useToggle from './usePopin';

function SubComponnent() {
    const [{isShowing}, dispatch] = useToggle();
  return (
    <div className="Test">
        <button onClick={() => dispatch({type: 'toggle'})}>POPUP</button>
        

    </div>
  );
}

export default SubComponnent;
