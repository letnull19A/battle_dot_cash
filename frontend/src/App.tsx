import { useState } from 'react';
import './App.css';
import { Wheel } from 'react-custom-roulette';
import { Header } from '@ui';
import { Layout } from '@layouts';
import { RouterApp } from '@routes';
import {app} from "@redux/store"
import {Provider} from "react-redux"
import 'primereact/resources/primereact.min.css';

const data = [
  { option: '0', style: { backgroundColor: '#26854c' } },
  { option: '32', style: { backgroundColor: '#ac2847' } },
  { option: '15', style: { backgroundColor: '#2c1e31' } },
  { option: '19', style: { backgroundColor: '#ac2847' } },
  { option: '4', style: { backgroundColor: '#2c1e31' } },
  { option: '21', style: { backgroundColor: '#ac2847' } },
  { option: '2', style: { backgroundColor: '#2c1e31' } },
  { option: '25', style: { backgroundColor: '#ac2847' } },
  { option: '17', style: { backgroundColor: '#2c1e31' } },
  { option: '34', style: { backgroundColor: '#ac2847' } },
  { option: '6', style: { backgroundColor: '#2c1e31' } },
  { option: '27', style: { backgroundColor: '#ac2847' } },
  { option: '13', style: { backgroundColor: '#2c1e31' } },
  { option: '36', style: { backgroundColor: '#ac2847' } },
  { option: '11', style: { backgroundColor: '#2c1e31' } },
  { option: '30', style: { backgroundColor: '#ac2847' } },
  { option: '8', style: { backgroundColor: '#2c1e31' } },
  { option: '23', style: { backgroundColor: '#ac2847' } },
  { option: '10', style: { backgroundColor: '#2c1e31' } },
  { option: '5', style: { backgroundColor: '#ac2847' } },
  { option: '24', style: { backgroundColor: '#2c1e31' } },
  { option: '16', style: { backgroundColor: '#ac2847' } },
  { option: '33', style: { backgroundColor: '#2c1e31' } },
  { option: '1', style: { backgroundColor: '#ac2847' } },
  { option: '20', style: { backgroundColor: '#2c1e31' } },
  { option: '14', style: { backgroundColor: '#ac2847' } },
  { option: '31', style: { backgroundColor: '#2c1e31' } },
  { option: '9', style: { backgroundColor: '#ac2847' } },
  { option: '22', style: { backgroundColor: '#2c1e31' } },
  { option: '18', style: { backgroundColor: '#ac2847' } },
  { option: '29', style: { backgroundColor: '#2c1e31' } },
  { option: '7', style: { backgroundColor: '#ac2847' } },
  { option: '28', style: { backgroundColor: '#2c1e31' } },
  { option: '12', style: { backgroundColor: '#ac2847' } },
  { option: '35', style: { backgroundColor: '#2c1e31' } },
  { option: '3', style: { backgroundColor: '#ac2847' } },
  { option: '26', style: { backgroundColor: '#2c1e31' } },
];

const textColors = ['#fff'];
const outerBorderColor = '#fff';
const outerBorderWidth = 4;
const innerBorderColor = '#000000';
const innerBorderWidth = 120;
const innerRadius = 0;
const radiusLineColor = '#fff';
const radiusLineWidth = 0;
const fontFamily = 'Nunito';
const fontWeight = 'bold';
const fontSize = 20;
const fontStyle = 'normal';
const textDistance = 87;
const spinDuration = 1.0;

const WheelExample = () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [history, setHistory] = useState<Array<any>>([]);

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber =
        data[Math.floor(Math.random() * data.length)].option;
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  };

  return (
    <div className="App">
      <Header />
      {data[prizeNumber].option}
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        textColors={textColors}
        fontFamily={fontFamily}
        fontSize={fontSize}
        fontWeight={fontWeight}
        fontStyle={fontStyle}
        outerBorderColor={outerBorderColor}
        outerBorderWidth={outerBorderWidth}
        innerRadius={innerRadius}
        innerBorderColor={innerBorderColor}
        innerBorderWidth={innerBorderWidth}
        radiusLineColor={radiusLineColor}
        radiusLineWidth={radiusLineWidth}
        spinDuration={spinDuration}
        startingOptionIndex={2}
        perpendicularText
        textDistance={textDistance}
        onStopSpinning={() => {
          setMustSpin(false);
          //setHistory(prev => [...prev, data.find(t => Number.parseInt(t.option) === prizeNumber)])
        }}
      />
      <ul
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          width: 180,
          listStyle: 'none',
        }}
      >
        {history.length > 0 &&
          history.map((item) => (
            <li
              style={{
                width: 30,
                height: 30,
                //backgroundColor: item.style.backgroundColor
              }}
            >
              {item.option}
            </li>
          ))}
      </ul>
      <button className={'spin-button'} onClick={handleSpinClick}>
        SPIN
      </button>
    </div>
  );
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <Provider store={app}>
      <RouterApp />
    </Provider>
  );
}

export default App;
