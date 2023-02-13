// import React, { useRef, useState, useEffect } from 'react';
// import './DropDownMenu.css'

// const DropDownMenu = () => {
//   const dropdownRef = useRef(null);
//   const [isActive, setisActive] = useState(false);
//   const onClick = () => setisActive(!isActive);

//   useEffect(() => {
//     const pageClickEvent = (e) => {
//       console.log(e.target);
//       console.log(dropdownRef.current);
//       if (dropdownRef.current !== null && !dropdownRef.current.contains(e.target)) {
//         setisActive(!isActive);
//       }
//     }
//     isActive && window.addEventListener('click', pageClickEvent);
//     return () => window.removeEventListener('click', pageClickEvent);
//   }, [isActive])

//   return (
//     <div className="menu-container">
//       <button onClick={onClick} className="menu-trigger">
//         <span>User  ⌵</span>
//       </button>
//       <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
//         <ul>
//           <li><a href='#'>something</a></li>
//           <li><a href='#'>something</a></li>
//           <li><a href='#'>something</a></li>
//         </ul>
//       </nav>
//     </div>
//   )
// }

// export default DropDownMenu;

import React, { useRef, useState, useEffect } from 'react';
import './DropDownMenu.css';

const SelectMenu = ({ partsArr, setDropDownValue }) => {
  const dropdownRef = useRef(null);
  const handleSelectTypeChange = () => { setDropDownValue(dropdownRef.current.value); };

  return (
    <select
      ref={dropdownRef}
      onChange={(e) => handleSelectTypeChange(e)}
      className="browser-default selectBox"
      required
    >
      {partsArr.map((partType, key) => <option key={key} id="optionStyle" value={partType === 'Enter Category' ? '' : partType}>{partType}</option>)}
    </select>
  );
};

export default SelectMenu;
