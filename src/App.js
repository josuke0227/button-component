import React from "react";
import "./App.css";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Buttons</h1>
        <div className="column">
          <div className="usage">&lt;Button /&gt;</div>
          <Button>Default</Button>
        </div>
        <div className="column">
          <div className="usage">&lt;Button variant="outline" /&gt;</div>
          <Button variant="outline">Default</Button>
        </div>
        <div className="column">
          <div className="usage">&lt;Button variant="text" /&gt;</div>
          <Button variant="text">Default</Button>
        </div>
        <div className="column">
          <div className="usage">&lt;Button disabledShadow /&gt;</div>
          <Button disabledShadow>Default</Button>
        </div>
        <div className="column">
          <div className="usage">&lt;Button disabled /&gt;</div>
          <Button disabled>Disabled</Button>
        </div>

        <div className="icon-buttons">
          <div className="icon-button">
            <div className="usage">
              &lt;Button startIcon="add_shopping_cart" /&gt;
            </div>
            <Button startIcon="add_shopping_cart">Default</Button>
          </div>
          <div className="icon-button">
            <div className="usage">&lt;Button startIcon="delete" /&gt;</div>
            <Button startIcon="delete">Default</Button>
          </div>
          <div className="icon-button">
            <div className="usage">&lt;Button startIcon="done" /&gt;</div>
            <Button startIcon="done">Default</Button>
          </div>
          <div className="icon-button">
            <div className="usage">
              &lt;Button startIcon="help_outline" /&gt;
            </div>
            <Button startIcon="help_outline">Default</Button>
          </div>
          <div className="icon-button">
            <div className="usage">&lt;Button startIcon="login" /&gt;</div>
            <Button startIcon="login">Default</Button>
          </div>
        </div>

        <div className="sized-button">
          <div className="items">
            <div className="usage">&lt;Button size="sm" /&gt;</div>
            <Button size="sm">Small</Button>
          </div>
          <div className="items">
            <div className="usage">&lt;Button size="md" /&gt;</div>
            <Button size="md">Midium</Button>
          </div>
          <div className="items">
            <div className="usage">&lt;Button size="lg" /&gt;</div>
            <Button size="lg">Large</Button>
          </div>
        </div>

        <div className="color-valiation">
          <div className="colors">
            <div className="usage">&lt;Button color="default" /&gt;</div>
            <Button color="default">Default</Button>
          </div>
          <div className="colors">
            <div className="usage">&lt;Button color="primary" /&gt;</div>
            <Button color="primary">Primary</Button>
          </div>
          <div className="colors">
            <div className="usage">&lt;Button color="secondary" /&gt;</div>
            <Button color="secondary">Secondary</Button>
          </div>
          <div className="colors">
            <div className="usage">&lt;Button color="danger" /&gt;</div>
            <Button color="danger">Danger</Button>
          </div>
        </div>
        <footer>josuke0227 @ DevChallenges.io</footer>
      </div>
    </div>
  );
}

export default App;
