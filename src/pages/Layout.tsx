import React from 'react'
import Header from '../layout/Header';
import Footer from '../layout/Footer';


const Layout = (props:any) => {
    return (
    <div className={props.className}>
      <Header />
        {props.children}
      <Footer />
    </div>
  );
}; 

export default Layout;
