import './App.css';
import { RouterApp } from '@routes';
import {app} from "@redux/store"
import {Provider} from "react-redux"
import 'primereact/resources/primereact.min.css';

const App = () => {
  return (
    <Provider store={app}>
      <RouterApp />
    </Provider>
  );
}

export default App;
