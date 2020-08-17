import React from "react";
import { easePolyOut } from "d3-ease";
import Animate from "react-move/Animate";
import featuredPlayer from "../../../Assets/images/featured_player.png";


  

  const Text = () => {

    const animateNumber = () => (
      <Animate
        show={true}
        start={{ opacity: 0, rotate: 0 }}
        enter={{
          opacity: [1],
          rotate: [360],
          timing: { duration: 1000, ease: easePolyOut },
        }}
      >
        {(opacity, rotate) => {
          return (
            <div
              className="featured_number"
              style={{
                opacity: `${opacity}`,
                transform: `rotateY(${rotate}deg) translate(260px, 170px)`,
              }}
            >
              3
            </div>
          );
        }}
      </Animate>
    );
  
    const animateFirst = () => (
      <Animate
        show
        start={{ opacity: 0, x: 503, y: 450 }}
        enter={{
          opacity: [1],
          x: [273],
          y: [250],
          timing: { duration: 500, ease: easePolyOut },
        }}
      >
        {(opacity, x, y) => {
          return (
            <div
              className="featured_first"
              style={{
                opacity,
                transform: `translate(${x}px, ${y}px)`,
              }}
            >
              League
            </div>
          );
        }}
      </Animate>
    );
  
    const animateSecond = () => (
      <Animate
        show
        start={{ opacity: 0, x: 503, y: 586 }}
        enter={{
          opacity: [1],
          x: [273],
          y: [586],
          timing: { delay: 2000, duration: 500, ease: easePolyOut },
        }}
      >
        {(opacity, x, y) => {
          return (
            <div
              className="featured_second"
              style={{
                opacity,
                transform: `translate(${x}px, ${y}px)`,
              }}
            >
              Championships
            </div>
          );
        }}
      </Animate>
    );
  
    const animatePlayer = () => (
      <Animate
        show
        start={{ opacity: 0, x: 503, y: 586 }}
        enter={{
          opacity: [1],
          timing: { delay: 3000, duration: 500, ease: easePolyOut },
        }}
      >
        {(opacity) => {
          return (
            <div
              className="featured_player"
              style={{
                opacity,
                background: `url(${featuredPlayer})`,
                transform: `translate(550px, 201px)`,
              }}
            ></div>
          );
        }}
      </Animate>
    );

    return (
      <div className="featured_text">
        {animatePlayer()}
        {animateNumber()}
        {animateFirst()}
        {animateSecond()}
      </div>
    );
  }


export default Text;