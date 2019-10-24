import React from 'react';
import { useSpring, animated } from 'react-spring'
import '../styles/card.css'

const calc = (x, y) => [x,y, 1.1]
const trans = (x,y,s) => `perspective(600px) scale(${s})`

function Card({title,description,image,link}) {
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 1, tension: 350, friction: 40 }}))
    
    return (
      <section className="card-wrapper">
        <animated.div      
          className="card"
          onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y)})}
          onMouseLeave={() => set({ xys: [0, 0, 1]})}
          onClick={()=>window.open(link)}
          style={{ transform: props.xys.interpolate(trans),backgroundImage: 'url('+require(`../images/${image}`)+')'}}
          >
          <div className="card-opacity">
              <h1 className="card-title">{title}</h1>
          </div>
        </animated.div>
        <p className="project-description">{description}</p>
      </section>
    )
  }

export default Card