import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import AddOrChange from './pages/addOrChange';
import Remove from './pages/remove';

function App() {
  return (
    <div className="p-[60px]">
      <div className='flex justify-between'>
        <span>Agile Communication Form Card</span>
        <select id="choose" className='w-1/2 bg-[#ddd] px-[12px] py-[6px] cursor-pointer'>
          <option value="" className='cursor-pointer'>
            <Link to='/'>Məhsul Silinmə (Əlavə et/Dəyiş)</Link>
          </option>
          <option value="" className='cursor-pointer p-[6px]'>
            <Link to='/f'>Məhsul Silinmə Siyahısı</Link>
          </option>
        </select>
      </div>
      <div>
        <Routes>
          <Route path='/f' element={<AddOrChange/>}/>
          <Route path='/' element={<Remove/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
