import React, { useEffect, useRef, useState } from 'react'
import { Card, Form, Button} from 'react-bootstrap'
import '../components/interest.css'

const InterestForm = () => {

    const firstName = useRef();
    const lastName = useRef();
    const email = useRef();
    const phoneNumber = useRef();
    const homeAddress = useRef();
    const course = useRef();
    const [education, setEducation] = useState('');
    const [experienceLevel, setExperienceLevel] = useState('')
    const [refer, setRefer]  = useState('');
    const courseType = [{label:"OND", value:"OND"}, {label:"HND", value:"HND"},{label:"BSC", value:"BSC"},
    {label:"Masters", value:"Masters"}, {label:"Phd", value:"Phd"}
    ]
    const experience = [{label: "Yes", value: "Yes"}, {label: "No", value: "No"}, {label: "Maybe", value: "Maybe"}];
    const information = [{label: "Social Media", value: "Social Media"},{label: "From a Friend", value: "From a Friend"},
    {label: "Advert", value: "Advert"}, {label: "Online search", value: "Online search"}, {label: "Referral", value: "Referral"} 
]


    const select =()=>{
        console.log(course.current.value)
    }
  return (
    <div
    className="container-fluid d-flex justify-content-center pt-2" 
    
  >
    <Card className='mobile'>
        <Card.Body>
            <h1 className="text-center mb-4">Registration Form</h1>
            <div className='d-flex'>
            <Form className='flex-column' >
                <Form.Group className="mb-3 form-group d-flex" id="email">
                    <Form.Control  type="text" required placeholder='First Name' className='input-form' ref={firstName}/> 
                    <Form.Control type="text" required placeholder='Last Name' className='input-form' ref={lastName}/> 
                </Form.Group>
                <Form.Group className="mb-3 form-group d-flex" id="email">
                    <Form.Control  type="t" required placeholder='Email' className='input-form' ref={email}/> 
                </Form.Group>
                <Form.Group className="mb-3 form-group d-flex" id="email">
                    <Form.Control  type="text" required placeholder='Phone Number' className='input-form' ref={phoneNumber}/> 
                </Form.Group>
                <Form.Group className="mb-3 form-group d-flex" id="email">
                    <Form.Control  type="text" required placeholder='Home address' className='input-form' ref={homeAddress}/> 
                </Form.Group>
                <Form.Group className="mb-3 form-group d-flex" id="email">
                <Form.Select aria-label="Please Select your Preferred Course" ref={course} onChange={select}>
                    <option>Please Select your Preferred Course</option>
                    <option value="Data Analysis (3Months)">Data Analysis (3Months)</option>
                    <option value="Complete 6-Month Full-Stack Development Course">Complete 6-Month Full-Stack Development Course</option>
                    <option value="Front-End Development Phase (3 months)">Front-End Development Phase (3 months)</option>
                    <option value="Back-End Development Phase (3 months)">Back-End Development Phase (3 months)</option>
                </Form.Select>
                </Form.Group>

                <Form.Group >
                <Form.Label>Highest Level of Education Completed</Form.Label>
                    {courseType.map((qualification) =>
                     <Form.Check type={'radio'} label={qualification.label} id={`OND`} name ='id' value={qualification.value} onChange={e => setEducation(e.target.value)} />
                    )}
                <Form.Control  type="text" placeholder='Please Specify' onChange={e => setEducation(e.target.value)} className='input-form'/> 
                </Form.Group>

                <Form.Group>
                <Form.Label className='mt-3' >Relevant IT Experience</Form.Label>{
                experience.map((level) =>(
                    <Form.Check type={'radio'} label={level.label} id={`OND`}  name='experienceCheck'
                    value={level.value}
                    onChange={f=> setExperienceLevel(f.target.value)}
                    />  
                ))}
                </Form.Group>
                <Form.Group>
                <Form.Label className='mt-3'>*How did you hear about our course?</Form.Label>
                {   
                information.map((info) => 
                    <Form.Check type={'radio'} label={info.label} value ={info.value} id={`know`}  name='know'
                    onChange={g =>setRefer(g.target.value) }
                    />
                    )}
                
                <Form.Control   type="text" placeholder='Please Specify'  name='know' onChange={g => setEducation(g.target.value)} className='input-form mb-2'/>  
                </Form.Group>
                <Button className='mt-2 btn'> Submit</Button>
            </Form>
            </div>
        </Card.Body>
    </Card>
    </div>
  )
}

export default InterestForm