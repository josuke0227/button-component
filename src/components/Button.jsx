import React, { Component } from "react";

import "../css/button.css";

class Button extends Component {
  assingnStyleByClassName = (props) => {
    const propsLength = Object.keys(props).length;

    // startIcon is not included because the markup is different.
    const valiantAttrs = [
      "outline",
      "text",
      "disabledShadow",
      "disabled",
      "size",
      "color",
      "variant",
    ];

    for (let key in props) {
      if (propsLength === 1 && key === "children") {
        return <button className="color-default">{props.children}</button>;
      } else {
        if (key === "startIcon") {
          return this.renderIconButton(key, props[key]);
        } else if (valiantAttrs.includes(key)) {
          return (
            <button className={`${key}-${props[key]}`}>{props.children}</button>
          );
        }
      }
    }
  };

  renderIconButton = (className, iconVariant) => {
    return (
      console.log(className, iconVariant),
      (
        <button className={`${className}`}>
          <div className="icon-button-content">
            <i className="material-icons">{iconVariant}</i>
            <span> {this.props.children} </span>
          </div>
        </button>
      )
    );
  };

  render() {
    return (
      <React.Fragment>
        {this.assingnStyleByClassName(this.props)}
      </React.Fragment>
    );
  }
}

export default Button;
