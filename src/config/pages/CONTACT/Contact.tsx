import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '../../../components/BUTTON/Button';
import Footer from '../../../components/FOOTER/Footer';
export default function Contact() {
  return (
    <div>
    <div  className="poster1">
       <div className=" row">
        <div className="container col-md-8 col-sm-6 ">


<p className='para2 '>CONTACT </p>


        </div>
        <div className="col-md-4 col-sm-6">
        
        </div>
       </div>
      </div>
      <div className="poster9 container mt-5 ">

<div className="row ">
  <div className="col-md-6 col-sm-12 text-center">
<img width="80%" height="100%" src="https://preview.colorlib.com/theme/fitnessclub/assets/img/gallery/contact_form.png" alt="" />
  </div>
  <div className="col-md-6 col-sm-12 p-3 text-center">
<div className="para1">  _______ CONTACT FORM</div>
<div className="para2 text-black">FEEL FREE TO CONTACT WITH US!</div>
<TextField className='col-md-5 col-sm-12 m-2' label="NAME" variant="standard" /> 
<TextField className='col-md-5 col-sm-12 m-2' label="PHONE" variant="standard" /> 
<TextField className='col-md-5 col-sm-12 m-2' label="EMAIL" variant="standard" /> 

<TextField className='col-md-5 col-sm-12 m-2' label="BOXING" variant="standard" /> 

<TextField className='col-md-10 col-sm-12 m-2' label="MESSAGE" variant="standard" /> 
<Button label="More Services"/>

  </div>
  
</div>


</div>
<Footer/>
    </div>
  )
}
