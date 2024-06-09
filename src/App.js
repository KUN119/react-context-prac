import './App.css';
import OrderPage from './pages/OrderPage/OrderPage';
import SummuryPage from './pages/SummuryPage/SummuryPage';
import CompletePage from './pages/CompletePage/CompletePage';
import { useState } from 'react';

function App() {
  const [step, setStep] = useState(0);

  return (
    <div className="p-16">
      {step === 0 && <OrderPage setStep={setStep} />}
      {step === 1 && <SummuryPage setStep={setStep} />}
      {step === 2 && <CompletePage setStep={setStep} />}
    </div>
  );
}

export default App;
