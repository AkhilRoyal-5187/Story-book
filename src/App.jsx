import Button from './components/Button';
import { useState } from 'react';

function App() {

  const [colour, setColour] = useState('bg-[#48e5c2]');
  const [font, setFont] = useState('font-sans');

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <Button colour = {colour} font={font}
      onColourChange={(set)=>setColour(set)}
      onFontChange={(set)=> setFont(set)}/>
    </div>
  );
}

export default App;