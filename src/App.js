import logo from './logo.svg';
import './App.css';
import {
  NewForm1 
 } from './ui-components';
 import {
  HeroLayout3 
 } from './ui-components';
 import { DataStore } from '@aws-amplify/datastore';
import { Test } from './models';

function App() {
  return (
    <div className="App">
      <HeroLayout3 />
<NewForm1
    onSubmit={(fields) => {
        // Example function to trim all string inputs
        const updatedFields = {}
        Object.keys(fields).forEach(key => {
            if (typeof fields[key] === 'string') {
                updatedFields[key] = fields[key].trim()
            } else {
                updatedFields[key] = fields[key]
            }
        })
        return updatedFields
    }} />
    </div>
  );
}

export default App;
