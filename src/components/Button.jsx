import { useState } from 'react';
// import './App.css';

function Button() {
  const fonts = ['font-sans', 'font-serif', 'font-bold'];
  const colours = ['bg-[#48e5c2]', 'bg-[#ff0000]', 'bg-[#6a994e]'];

  
  const [selectedFont, setSelectedFont] = useState('font-sans');
  const [colour , setColour] = useState('bg-[#48e5c2  ]');  
  const [toggleFont, setToggleFont] = useState('font-sans');
  const [toggleColour, setToggleColour] = useState('bg-gray-950');



  const handleToggle = () => {
    setToggleFont((prev) => (prev === 'font-sans' ? 'font-serif' : 'font-sans'));
    setToggleColour((prev) => (prev === 'bg-gray-950' ? 'bg-gray-600' : 'bg-gray-950'));
  };



  const handleFontChange = (e) => {
    setToggleColour(e.target.value);
    // setColour(e.target.value);
    setSelectedFont(e.target.value);
  };


  return (
    <div className={`card  flex gap-10 p-10 flex-col rounded-2xl m-auto w-100   ${colour} `}>
      

      <div
        onClick={handleToggle}
        className={`${toggleColour} rounded border-2 py-2`}
      >
        <span className={`${toggleFont} ${toggleColour} py-1 px-25 `}>Toggle  Button</span>
      </div>

     

      


      <select
        value={colour}
        onChange={(e)=>setColour(e.target.value)}
        className="px-25 py-2 border rounded "
      >
        {colours.map((c) => (
          <option key={c} value={c} className='bg-gray-950'>
            {c}
          </option>
        ))}
      </select>

      <select 
      value = {selectedFont}
      onChange={handleFontChange}
      className='px-25 py-2 border rounded'
      >
        {fonts.map((f)=>(<option key={f} value={f} className='bg-gray-950'>
            {f}
            </option>))}
          
            

      </select>

      
    </div>
  );
}

export default Button;
