import React from "react";
import{Link} from'react-router-dom'

const Footer =()=>{
    return(
        <div>
            <Footer className ="text-white py-4 bg-dark">
                <div className="container">
                    <nav className="row">
                        <Link to='/'className="col-12 col-md-3 d-flex align-items-center">
                            <img src='./src/assets/image/logo.png' className='mx-2'height='80'/>

                        </Link>
                        <ul className="col-12 col-md-3 list-unstyled">
                            <li className="font-weight-bold">POWERFULL FASHION</li>
                            <li className="text-center">En este sitio podras encontras variedad de prentas renovables</li>

                        </ul>
                        <ul className="col-12 col-md-3 list-unstyled">
                            <li className="font-weight-bold">redes sociales</li>
                            <li className="d-flex justify-content-between">
                                <i className="bi bi-facebook"/>
                                <i className="bi bi-instagram"/>
                                <i className="bi bi-whatsapp"/>
                            

                                
                                
                                </li>
                           
                        </ul>
                        <ul className="col-12 col-md-3 list-unstyled">
                            <li className="font-weight-bold">No te quedes sin la tuya</li>
                          

                        </ul>
                    </nav>
                </div>
            </Footer>

        </div>
    )
}
export default Footer;