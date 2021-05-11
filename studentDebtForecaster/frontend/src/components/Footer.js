import React from "react";

const Footer = () => (
  <div className="footer" style={{'marginTop': '1rem', 
  'paddingBottom': '5px', 'opacity': '0.7', 'position': 'fixed', 'bottom': 0, 'left': 0, 'width': '100%'}}>
    <p className="footer-text" style={{'textAlign': 'center', 'margin': 'auto',  'size': '70%'}}>&copy;2021- Student Debt Forecast Was Developed By <a href="https://fervent-elion-bc63b4.netlify.app/" target={'_blank'}>Yasmine Kamel</a></p>
  </div>
);

export default Footer;