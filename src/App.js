import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux';
import './App.css';
// Components
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

const App = () => (
  <Provider store={store}>
    <div className="main">
      <TodoInput />
      <TodoList />
    </div>
  </Provider>
);

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
