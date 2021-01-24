import React from 'react';
import Button from "./components/Button";
import { hot} from "react-hot-loader/root";
import Title from "./components/Title";

const App = () => <div>
  <Title/>
  <Button text={'buttons'}/>
</div>;
export default hot(App);
