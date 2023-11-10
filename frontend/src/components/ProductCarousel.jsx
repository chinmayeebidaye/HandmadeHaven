import { Carousel } from 'react-bootstrap';
import { Link } from 'react-scroll';

const ProductCarousel = () => {
  const images = [
    { src: 'img1.png', alt: 'Image 1', sectionId: 'car1' },
    { src: 'img2.png', alt: 'Image 2'},
    { src: 'img3.png', alt: 'Image 3' },
    // Add more images as needed
  ];

  return (
    <Carousel pause='hover' className='bg-primary mb-4'>
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <Link
            to={image.sectionId}
            spy={true}
            smooth={true}
            offset={-70} // Adjust the offset based on your layout
            duration={500}
          ></Link>
          <a href="#car1"><img src={image.src} alt={image.alt} className='d-block w-100' /></a>
          {/* You can add a caption if needed */}
          {/* <Carousel.Caption>
            <h2 className='text-white'>{image.alt}</h2>
          </Carousel.Caption> */}
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
