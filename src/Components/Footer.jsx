import Navbar from 'react-bootstrap/Navbar';

function Footer() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className='footer container-fluid justify-content-center text-white p-4'>
            <p>
            La información utilizada para esta app fue obtenida de <a href="https://www.breakingbadapi.com/" className='text-white'>https://www.breakingbadapi.com/</a>
            </p>
    
      </Navbar>
    </>
  );
}

export default Footer;