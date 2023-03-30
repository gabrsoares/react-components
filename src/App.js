import './App.css';
import Form from './components/Form/Form';
import Header from './components/Header/index';
import IMC from './components/IMC';
import Login from './components/Login/LoginControl'

function App() {
  return (
    <div className="App">
      {/* <Header title="Testando" />
      <IMC /> */}
      <Form title = "props"/>

      <Login name={'Gabriel'} />

    </div>
  );
}

export default App;
