import correo from '../assets/correo.png';

const Footer = () => {
    const year = new Date().getFullYear();
  
    return <footer className="FooterUnique">{`Copyright © Mg-ars-pl ${year}`}
            <div className="InfoFooter"><img className='IconGmail' src={correo}/><div className='NameFooter'>miguelriverasarmiento@gmail.com</div></div>
           </footer>;
      
  };
  
  export default Footer;
