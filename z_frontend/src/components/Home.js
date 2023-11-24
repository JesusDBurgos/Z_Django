import slide01 from '../static/Mecatronica01.jpg'
import slide02 from '../static/Mecatronica02.jpg'
import slide03 from '../static/Mecatronica03.jpg'
import slide04 from '../static/Mecatronica06.jpg'

import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
  return (
  <div className="row" style={{ marginTop: '2rem' }}>
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          width={1100} height={500}
          className="d-block w-100"
          src={slide01}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          width={1100} height={500}
          className="d-block w-100"
          src={slide02}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          width={1100} height={500}
          className="d-block w-100"
          src={slide03}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          width={1100} height={500}
          className="d-block w-100"
          src={slide04}
          alt="Fourth slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
  );
};

export default Home;