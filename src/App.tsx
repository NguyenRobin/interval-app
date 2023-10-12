import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './ui/AppLayout';
import LandingPage from './pages/LandingPage';
import StartTimer from './pages/StartTimer';
import Analog from './pages/Analog';
import Digital from './pages/Digital';
import TimesUp from './pages/TimesUp';
import Pause from './pages/Pause';

function App() {
  return (
    <BrowserRouter basename={import.meta.env.DEV ? '/' : '/interval-app/'}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route element={<AppLayout />}>
          <Route path="start" element={<StartTimer />} />
          <Route path="analog" element={<Analog />} />
          <Route path="digital" element={<Digital />} />
          <Route path="timesup" element={<TimesUp />} />
          <Route path="pause" element={<Pause />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
