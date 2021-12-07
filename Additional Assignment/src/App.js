import React from 'react';
import "./App.css";
import Card from "./components/card";

function App() {
  return (
    <div className="container">
      <div className="row">
        <Card
          title="Sneakers Basketball"
          images="../images/sneakers1.png"
          old_price="30"
          newPrice="20"
          rupess="$"
          alt="sneakers1"
          exp_date="6-12-2021"
        />
        <Card
          title="Sneakers Basketball"
          images="../images/sneakers2.png"
          old_price="30"
          newPrice="20"
          rupess="$"
          alt="sneakers2"
          exp_date="6-12-2021"
        />
        <Card
          title="Sneakers Basketball"
          images="../images/sneakers3.png"
          old_price="30"
          newPrice="20"
          rupess="$"
          alt="sneakers3"
          exp_date="6-12-2021"
        />
        <Card
          title="Sneakers Basketball"
          images="../images/sneakers4.png"
          old_price="30"
          newPrice="20"
          rupess="$"
          alt="sneakers4"
          exp_date="6-12-2021"
        />
      </div>
    </div>
  );
}
export default App;