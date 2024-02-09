import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import AddOrChange from './pages/addOrChange';
import Remove from './pages/remove';

function App() {
  const navigate = useNavigate();

  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;
    if (selectedValue === 'add') {
      navigate('/');
    } else if (selectedValue === 'remove') {
      navigate('/about');
    }
  };
  return (
    <div className="p-[60px]">
      <div className='flex justify-between'>
        <span>Agile Communication Form Card</span>
        <select id="selectOption" onChange={handleSelectChange} className='w-1/2 bg-[#ddd] px-[12px] py-[6px] cursor-pointer'>
          <option value="add" className='cursor-pointer'>Məhsul Silinmə (Əlavə et/Dəyiş)</option>
          <option value="remove" className='cursor-pointer p-[6px]'>Məhsul Silinmə Siyahısı</option>
        </select>
      </div>
      <div>
        <Routes>
          <Route path='/' element={<AddOrChange/>}/>
          <Route path='/about' element={<Remove/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
