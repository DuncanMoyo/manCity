import React, { Component } from "react";
import { easePolyOut } from "d3-ease";
import Animate from "react-move/Animate";

class Stripes extends Component {
  state = {
    stripes: [
      {
        background: "#98c5e9",
        left: 120,
        rotate: 25,
        top: -260,
        delay: 0,
      },
      {
        background: "#ffffff",
        left: 360,
        top: -397,

        rotate: 25,
        delay: 200,
      },
      {
        background: "#98c5e9",
        left: 600,
        rotate: 25,
        top: -498,

        delay: 400,
      },
    ],
  };


  showStripes = () =>
    this.state.stripes.map((stripe, i) => (
      <Animate
        key={i}
        show={true}
        start={{ background: stripe.background, opacity: 0, left: 0, rotate: 0, top: 0 }}
        enter={{
          background: [stripe.background],
          opacity: [1],
          rotate: [stripe.rotate],
          top: [stripe.top],
          left: [stripe.left],
          timing: { delay: stripe.delay, duration: 200, ease: easePolyOut },
          events: {
            end() {
              console.log('Animation finished');
            }
          }
        }}
      >
        {({ background, left, rotate, top, opacity }) => {
          return (
            <div
              className="stripe"
              style={{
                background: `${background}`,
                opacity: `${opacity}`,
                transform: `rotate(${rotate}deg) translate(${left}px, ${top}px)`,
              }}
            ></div>
          );
        }}
      </Animate>
    ));

  render() {
    return <div className="featured_stripes">{this.showStripes()}</div>;
  }
}

export default Stripes;
