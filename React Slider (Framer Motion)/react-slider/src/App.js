import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './App.css';
import images from './images';

function App() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    // console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div className="App">
      <motion.div 
        className='carousel'
        ref={carousel}
        whileTap={{cursor: "grabbing"}}
      >
        <motion.div 
          drag="x" 
          dragConstraints={{right: 0, left: -width}} 
          className='inner-carousel'
        >
          {images.map(img => {
            return(
              <motion.div className='item' key={img}>
                <img src={img} alt="" />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default App;
