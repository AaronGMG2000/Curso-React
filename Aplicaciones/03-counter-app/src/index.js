import ReactDom from 'react-dom';
// import PrimeraApp from './PrimeraApp';
import './index.css';
import CounterApp from './CounterApp';

const divRoot = document.querySelector('#root');

ReactDom.render(<CounterApp />, divRoot);


