import React from 'react'

const Footer = () => {
  return (
    <div>
     <footer className="footer">
      <div className="contenedor__footer">
        <div className="contenedro__footer-item">
          <h3>Resources:</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Skills</a></li>
            <li><a href="#">Projects</a></li>
          </ul>
        </div>
        <div className="contenedro__footer-item">
          <h3>Support:</h3>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Services</a></li>
          </ul>
        </div>
        <div className="contenedro__footer-item social">
          <h3>Social:</h3>
          <ul>
            <li>
              <a href="https://www.facebook.com/luis.ranglsierra" target="_blank"><i className='bx bxl-facebook-circle'></i></a>
            </li>
            <li>
              <a href="https://wa.link/53tncz" target="_blank"><i className='bx bxl-whatsapp'></i></a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/luis-carlos-rangel-641512249/" target="_blank"><i className="bx bxl-linkedin"></i></a>
            </li>
          </ul>
        </div>
      </div>
      <div className="contenedor__footer-copy">
        <p className="footer__p"> ©️ Todos los derechos reservados 2022</p>
      </div>
    </footer>
    </div>
  )
}

export default Footer