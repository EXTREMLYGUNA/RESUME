/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import Table from 'react-bootstrap/Table';
import image from './assets/GUNASEKAR.jpg'

function App() {
  const overlay = document.querySelector('.overlay')
  function show(){
    overlay.style.display='block'
  }

  return (<>

  <div className='overlay' ></div>
  <div className='cover'>
    <div className='move' >
  <h1 className='resume' >RESUME</h1>
  <a onClick={(image)=>show(image)} href={image} className='click' ><img src={image} className='image' /></a>
  <p className='details' >
    <b style={{color:"red"}}  >NAME</b>&nbsp;&nbsp;&nbsp; :<b style={{color:"green"}} > GUNASEKAR.V <b style={{color:"red"}}>,</b></b><br/>
    <b style={{color:"red"}} >ADDRESS</b> : <b style={{color:"green"}} >Melkavanoor village, Thamoodharanpettai,<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;K.V.kuppam Taluk, Vellore district <b style={{color:"red"}}>,</b> </b><br/>
    <b style={{color:"red"}}>EMAIL</b>&nbsp;&nbsp; : <a href='https://mail.google.com/mail/u/0/#inbox' className='email' >gunasekar17329777577amma@gmail.com <b style={{color:"red"}}>,</b></a><br/>
    <b style={{color:"red"}}>PINCODE</b> : <b  style={{color:"green"}}>632209 <b style={{color:"red"}}>,</b></b><br/>
    <b style={{color:"red"}}>MOBILE</b>&nbsp; : <b  style={{color:"green"}}>6380720250 <b style={{color:"red"}}>/</b> 8148932075 <b style={{color:"red"}}>,</b></b><br/>
    <hr/>
    </p>

    <div>
      <h4 className='career'>CAREER OBJECTS</h4>
      <p className='object' >To work with maximum potential in a challenging and dynamic environment. I am looking forward to effectively utilize my knowledge and skills and give my best for the growth of the company.</p>
    </div><br/>

    <div>
    <h4 className='career'>EDUCATION</h4>
    <Table striped bordered hover className='table' style={{width:"955px"}} >
      <thead>
        <tr>
          <th style={{color:"red"}} >Examination</th>
          <th style={{color:"red"}} >Year of Passing</th>
          <th style={{color:"red"}} >Name of Institution and location</th>
          <th style={{color:"red"}} >Percentage</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>SSLC</td>
          <td>2015</td>
          <td>Government Boys Higher Secondary School, K.V.Kuppam</td>
          <td>84%</td>
        </tr>
        <tr>
          <td>HSC</td>
          <td>2017</td>
          <td>Government Boys Higher Secondary School, K.V.Kuppam</td>
          <td>71%</td>
        </tr>
        <tr>
          <td>DIPLOMA<sub style={{color:"red"}} >(EEE)</sub></td>
          <td>2019</td>
          <td>Rajagopal Polytechnic College, Gudiyatham</td>
          <td>83%</td>
        </tr>
        <tr>
          <td>B.TECH<sub style={{color:"red"}} >(EEE)</sub></td>
          <td>2025</td>
          <td>Government Boys Higher Secondary School, K.V.Kuppam</td>
          <td>Currently Studying<br/><b style={{color:"red"}} >Final Year</b></td>
        </tr>
      </tbody>
    </Table>
    </div>

    <div>
    <h4 className='career'>STRENGTH</h4>
    <ul className='strength'>
      <li>Adaptive in the challenging circumstances</li>
      <li>Good personality</li>
      <li>Hardworking and highly self-motivated person</li>
      <li>Flexible to adapt in new situations</li>
      <li>Willing to learn</li>
      <li>Honesty and Punctuality</li>
      <li>Searching for solution more than ways</li>
    </ul>
    </div>

    <div>
    <h4 className='career'>ACADAMIC PROJECT_DIPLOMA</h4>
    <ul className='strength'>
      <li>Android based home appliances control</li>
    </ul>
    </div>

    <div>
    <h4 className='career'>EXPERIENCE</h4>
    <Table striped bordered hover className='table' style={{width:"955px"}} >
      <thead>
        <tr>
          <th style={{color:"red"}} >Company Name</th>
          <th style={{color:"red"}} >Location</th>
          <th style={{color:"red"}} >Designation</th>
          <th style={{color:"red"}} >Working area</th>
          <th style={{color:"red"}} >Duration</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>CEAT Tyres LTD</td>
          <td>Chennai plant, Kanandhangal, Madhuramangalam, Kancheepuram District</td>
          <td>ME (Management Excutive)</td>
          <td>Production engineer and Technical</td>
          <td>12.09.2020 - 30.12.2024<br/><sub style={{color:"red"}} >(4.4 Years)</sub></td>
        </tr>
      </tbody>
    </Table>
    </div>

    <div>
    <h4 className='career'>MANUFACTURING</h4>
    <ul className='strength'>
      <li>Carry out Production,inspection,and Machine operation duties</li>
      <li>Setup Machinery & Ensure All materials are readily Available</li>
      <li>Effectively Monitor production equipment</li>
      <li>Perform Appropriate duties as assigned by management</li>
      <li>Maintain a safe and maintaining 5s Activity</li>
      <li>Follow established safety rules and regulations</li>
      <li>Prevantive Maintenance in machinery area</li>
    </ul>
    </div>

    <div>
    <h4 className='career'>TECHNICAL SKILLS</h4>
    <ul className='strength'>
      <li>MS office & Systematic skills</li>
      <li>AutoCAD (Basic)</li>
      <li>Time Management</li>
      <li>Communication</li>
    </ul>
    </div>

    <div>
    <h4 className='career'>IT SKILLS</h4>
    <h4 className='itskill'>GUVI INSTITUE</h4>
    <ul className='strength'>
      <h4 style={{color:"red",fontWeight:"bold"}} >FRONT END</h4>
      <li>HTML</li>
      <li>CSS</li>
      <li>JAVASCRIPT</li>
      <li>REACT</li>
      <h4 style={{color:"red",fontWeight:"bold"}} >BACK END</h4>
      <li>NODE.JS</li>
      <li>EXPRESS</li>
      <li>JAVASCRIPT</li>
      <li>SQL</li>
      <li>MONGODB</li>
      <li>POSTMAN</li>
    </ul>
    </div>

    <div>
      <h4 className='career'>AREA OF INTEREST</h4>
      <p className='object' >Eager to develop my knowledge in Supervising Production Area
      And Intrested to Work in Logistics And Planning</p>
    </div>

    <h4 className='career'>PERSONAL DETAILS</h4>
    <p className='personal' >
    <b style={{color:"red"}}  >FULL NAME</b> :<b style={{color:"green"}} > GUNASEKAR.V <b style={{color:"red"}}>,</b></b><br/>
    <b style={{color:"red"}} >FATHER'S NAME</b> : <b style={{color:"green"}} >VIJAYARANGAN.M <b style={{color:"red"}}>,</b> </b><br/>
    <b style={{color:"red"}}>MOTHER'S NAME</b> : <b style={{color:"green"}} >RANJITHAM.V <b style={{color:"red"}}>,</b></b><br/>
    <b style={{color:"red"}}>DATE OF BIRTH</b> : <b  style={{color:"green"}}>14<b style={{color:"red"}}>/</b>12<b style={{color:"red"}}>/</b>1999 <b style={{color:"red"}}>,</b></b><br/>
    <b style={{color:"red"}}>GENDER</b> : <b  style={{color:"green"}}>MALE <b style={{color:"red"}}>,</b></b><br/>
    <b style={{color:"red"}}  >MARRIGE STATUS</b> :<b style={{color:"green"}} > SINGLE<b style={{color:"red"}}>,</b></b><br/>
    <b style={{color:"red"}}  >NATIONALITY</b> :<b style={{color:"green"}} > INDIA <b style={{color:"red"}}>,</b></b><br/>
    <b style={{color:"red"}}  >RELIGION</b> :<b style={{color:"green"}} > HINDU <b style={{color:"red"}}>,</b></b><br/>
    <b style={{color:"red"}}  >LANGUAGES</b> :<b style={{color:"green"}} > TAMIL,ENGLISH <b style={{color:"red"}}>,</b></b><br/>
    <b style={{color:"red"}}  >ADDRESS</b> :<b style={{color:"green"}} > MELKAVANUR VILLAGE, THAMOODHIRAN PETTAI, K.V.KUPPAM TALUK,, VELLORE DISTRICT <b style={{color:"red"}}>,</b></b><br/>
    </p>

    <div>
      <h4 className='career'>DECLARATION</h4>
      <p className='object' >I hereby declare that above provided information are true to the
      best of knowledge</p>
    </div><br/>

    
    </div>
  </div>

  </>)
}

export default App
