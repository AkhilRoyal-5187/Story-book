import { useState } from 'react';
// import './App.css';

function Button({ colour = 'bg-[#48e5c2]', font = 'font-sans', onColourChange, onFontChange }) {
  const fonts = ['font-sans', 'font-serif', 'font-bold'];
  const colours = ['bg-[#48e5c2]', 'bg-[#ff0000]', 'bg-[#6a994e]'];

  const [selectedColour, setSelectedColour] = useState(colour);
  const [selectedFont, setSelectedFont] = useState(font);


  
  const [toggleFont, setToggleFont] = useState('font-sans');
  const [toggleColour, setToggleColour] = useState('bg-gray-950');



  const handleToggle = () => {
    setToggleFont((prev) => (prev === 'font-sans' ? 'font-serif' : 'font-sans'));
    setToggleColour((prev) => (prev === 'bg-gray-950' ? 'bg-gray-600' : 'bg-gray-950'));
  };



  const handleFontChange = (e) => {
     onFontChange?.(e.target.value);
     setToggleColour(e.target.value);
     setSelectedFont(e.target.value);
  };


  return (
    <div className={`card  flex gap-10 p-10 flex-col rounded-2xl m-auto w-100  ${selectedFont} ${selectedColour} `}>
      

      <div
        onClick={handleToggle}
        className={`${toggleColour} rounded border-2 py-2 border-b-black`}
      >
        <span className={`${toggleFont} ${toggleColour} py-1 px-25 `}>Toggle  Button</span>
      </div>

     

      


      <select
        value={selectedColour}
        onChange={(e) => {
        const newColour = e.target.value;
        setSelectedColour(newColour); 
        onColourChange?.(newColour);  
      }}
      className="border-b-black rounded p-2 bg-gray-950 text-white"
      >

        {colours.map((c) => (
          <option key={c} value={c} className='bg-gray-950'>
            {c}
          </option>
        ))}
      </select>

      <select
          value={selectedFont}
          onChange={(e) => {
            const newFont = e.target.value;
            setSelectedFont(newFont);
            onFontChange?.(newFont);
              }}
              className="border-b-black rounded p-2 bg-gray-950 text-white"
        
      >

        {fonts.map((f)=>(<option key={f} value={f} className='bg-gray-950'>
            {f}
            </option>))}
          
            

      </select>

      
    </div>
  );
}

export default Button;
