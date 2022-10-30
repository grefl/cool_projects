import React from 'react';
import './slider.css';



export default function Slider({image1, image2, options}) {
  const [crop, setCrop] = React.useState(50);
  function log(e) {
    const target = e.target;
    const rect = target.getBoundingClientRect();
    const y = e.clientY - rect.top;
    const x = e.clientX - rect.left;
    const width = rect.right - rect.left;
    // const percentage = parseInt((x / width) * 100);
    setCrop(x);
  }

  return (<div className='comparison-slider' onMouseMove={log} style={{'--crop': crop}}>
          <div className="line" />
          <img src={image1} className="image1"/>
          <img src={image2} className="image2" />
        </div>);
}
