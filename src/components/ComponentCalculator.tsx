import React, { useState } from 'react';
import { Calculator, Zap, CircuitBoard, Battery, Cpu } from 'lucide-react';

const ComponentCalculator: React.FC = () => {
  const [calculatorType, setCalculatorType] = useState<'resistor' | 'capacitor' | 'inductor' | 'power'>('resistor');
  const [values, setValues] = useState({
    voltage: '',
    current: '',
    resistance: '',
    capacitance: '',
    frequency: '',
    inductance: '',
    power: ''
  });
  const [result, setResult] = useState<string>('');

  const calculateResistor = () => {
    const V = parseFloat(values.voltage);
    const I = parseFloat(values.current);
    const R = parseFloat(values.resistance);

    if (V && I && !R) {
      const resistance = V / I;
      setResult(`مقاومت: ${resistance.toFixed(2)} اهم`);
    } else if (V && R && !I) {
      const current = V / R;
      setResult(`جریان: ${current.toFixed(3)} آمپر`);
    } else if (I && R && !V) {
      const voltage = I * R;
      setResult(`ولتاژ: ${voltage.toFixed(2)} ولت`);
    } else {
      setResult('لطفاً دو مقدار وارد کنید');
    }
  };

  const calculateCapacitor = () => {
    const C = parseFloat(values.capacitance) * 1e-6; // میکروفاراد به فاراد
    const f = parseFloat(values.frequency);

    if (C && f) {
      const reactance = 1 / (2 * Math.PI * f * C);
      setResult(`راکتانس خازنی: ${reactance.toFixed(2)} اهم`);
    } else {
      setResult('لطفاً ظرفیت و فرکانس را وارد کنید');
    }
  };

  const calculateInductor = () => {
    const L = parseFloat(values.inductance) * 1e-3; // میلی‌هنری به هنری
    const f = parseFloat(values.frequency);

    if (L && f) {
      const reactance = 2 * Math.PI * f * L;
      setResult(`راکتانس سلفی: ${reactance.toFixed(2)} اهم`);
    } else {
      setResult('لطفاً اندوکتانس و فرکانس را وارد کنید');
    }
  };

  const calculatePower = () => {
    const V = parseFloat(values.voltage);
    const I = parseFloat(values.current);
    const R = parseFloat(values.resistance);
    const P = parseFloat(values.power);

    if (V && I && !P) {
      const power = V * I;
      setResult(`توان: ${power.toFixed(2)} وات`);
    } else if (V && R && !P) {
      const power = (V * V) / R;
      setResult(`توان: ${power.toFixed(2)} وات`);
    } else if (I && R && !P) {
      const power = I * I * R;
      setResult(`توان: ${power.toFixed(2)} وات`);
    } else {
      setResult('لطفاً مقادیر مناسب وارد کنید');
    }
  };

  const handleCalculate = () => {
    switch (calculatorType) {
      case 'resistor':
        calculateResistor();
        break;
      case 'capacitor':
        calculateCapacitor();
        break;
      case 'inductor':
        calculateInductor();
        break;
      case 'power':
        calculatePower();
        break;
    }
  };

  const resetValues = () => {
    setValues({
      voltage: '',
      current: '',
      resistance: '',
      capacitance: '',
      frequency: '',
      inductance: '',
      power: ''
    });
    setResult('');
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <div className="flex items-center mb-6">
        <Calculator className="w-8 h-8 text-blue-500 ml-3" />
        <h3 className="text-2xl font-bold text-gray-800">ماشین حساب قطعات</h3>
      </div>

      {/* Calculator Type Selector */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        <button
          onClick={() => setCalculatorType('resistor')}
          className={`flex items-center justify-center p-3 rounded-lg transition-all ${
            calculatorType === 'resistor'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          <Zap className="w-5 h-5 ml-2" />
          مقاومت
        </button>
        <button
          onClick={() => setCalculatorType('capacitor')}
          className={`flex items-center justify-center p-3 rounded-lg transition-all ${
            calculatorType === 'capacitor'
              ? 'bg-green-500 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          <CircuitBoard className="w-5 h-5 ml-2" />
          خازن
        </button>
        <button
          onClick={() => setCalculatorType('inductor')}
          className={`flex items-center justify-center p-3 rounded-lg transition-all ${
            calculatorType === 'inductor'
              ? 'bg-purple-500 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          <Cpu className="w-5 h-5 ml-2" />
          سلف
        </button>
        <button
          onClick={() => setCalculatorType('power')}
          className={`flex items-center justify-center p-3 rounded-lg transition-all ${
            calculatorType === 'power'
              ? 'bg-orange-500 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          <Battery className="w-5 h-5 ml-2" />
          توان
        </button>
      </div>

      {/* Input Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {calculatorType === 'resistor' && (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">ولتاژ (V)</label>
              <input
                type="number"
                value={values.voltage}
                onChange={(e) => setValues({...values, voltage: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="ولتاژ به ولت"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">جریان (A)</label>
              <input
                type="number"
                value={values.current}
                onChange={(e) => setValues({...values, current: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="جریان به آمپر"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">مقاومت (Ω)</label>
              <input
                type="number"
                value={values.resistance}
                onChange={(e) => setValues({...values, resistance: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="مقاومت به اهم"
              />
            </div>
          </>
        )}

        {calculatorType === 'capacitor' && (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">ظرفیت (μF)</label>
              <input
                type="number"
                value={values.capacitance}
                onChange={(e) => setValues({...values, capacitance: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                placeholder="ظرفیت به میکروفاراد"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">فرکانس (Hz)</label>
              <input
                type="number"
                value={values.frequency}
                onChange={(e) => setValues({...values, frequency: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                placeholder="فرکانس به هرتز"
              />
            </div>
          </>
        )}

        {calculatorType === 'inductor' && (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">اندوکتانس (mH)</label>
              <input
                type="number"
                value={values.inductance}
                onChange={(e) => setValues({...values, inductance: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
                placeholder="اندوکتانس به میلی‌هنری"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">فرکانس (Hz)</label>
              <input
                type="number"
                value={values.frequency}
                onChange={(e) => setValues({...values, frequency: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
                placeholder="فرکانس به هرتز"
              />
            </div>
          </>
        )}

        {calculatorType === 'power' && (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">ولتاژ (V)</label>
              <input
                type="number"
                value={values.voltage}
                onChange={(e) => setValues({...values, voltage: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                placeholder="ولتاژ به ولت"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">جریان (A)</label>
              <input
                type="number"
                value={values.current}
                onChange={(e) => setValues({...values, current: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                placeholder="جریان به آمپر"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">مقاومت (Ω)</label>
              <input
                type="number"
                value={values.resistance}
                onChange={(e) => setValues({...values, resistance: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                placeholder="مقاومت به اهم"
              />
            </div>
          </>
        )}
      </div>

      {/* Buttons */}
      <div className="flex space-x-reverse space-x-4 mb-6">
        <button
          onClick={handleCalculate}
          className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300"
        >
          محاسبه
        </button>
        <button
          onClick={resetValues}
          className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
        >
          پاک کردن
        </button>
      </div>

      {/* Result */}
      {result && (
        <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-4">
          <h4 className="font-bold text-gray-800 mb-2">نتیجه:</h4>
          <p className="text-lg text-gray-700">{result}</p>
        </div>
      )}
    </div>
  );
};

export default ComponentCalculator;