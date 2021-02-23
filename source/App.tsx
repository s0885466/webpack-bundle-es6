import React from 'react';
import Button from './components/Button';
// @ts-ignore
import {hot} from 'react-hot-loader/root';
import Title from './components/Title';

const App = () => <div>
  <Title/>
  <Button text="button"/>
</div>;
export default hot(App);
