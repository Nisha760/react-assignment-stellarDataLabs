import React, {useState, useContext} from 'react';
import CandidateContext from '../context/CandidateContext';
import CandidateDataContext from '../context/CandidateDataContext';
import './NewCandidate.css'


function NewCandidate() {
    const { setCandidate} = useContext(CandidateContext) ;
    // const {setCandidateArr} = useContext(CandidateDataContext) ;
    const [firstname, setFirstname] = useState('') ;
    const [lastname, setLastname] = useState('') ;
    const[email, setEmail] = useState('') ;
    const [radioFemale, setRadioFemale] = useState(false) ;
    const [radioMale, setRadioMale] = useState(false) ;
    

    const handleButtonClick = (e)=>{
        e.preventDefault() ;
        console.log("form submit") ;

        setCandidate({
            first_name: firstname,
            last_name: lastname,
            email,
            gender: radioFemale?"Female":"Male"
        })

    }

    const handlefemaleinput = (e)=>{
        setRadioFemale(true) ;
        setRadioMale(false) ;
    }
    const handlemaleinput = (e)=>{
        setRadioFemale(false) ;
        setRadioMale(true) ;
    }

  return (
      <>
      <h1>
          Add new candidate
      </h1>
      <form>
          <input type='text' placeholder='first name' value={firstname} onChange={(e)=>{setFirstname(e.target.value)}}/>
          <input type='text' placeholder='last name' value={lastname} onChange={(e)=>{setLastname(e.target.value)}}/>
          <input type='email' placeholder='Email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
          <div>
          <label htmlFor='female'>Female</label>
          
          <input type='radio' name="gender" value='female' id='female' checked={radioFemale} onClick={handlefemaleinput}></input>
          <label htmlFor='male'>Male</label>
          <input type='radio' name="gender" value='male' id='male' checked={radioMale} onClick={handlemaleinput}></input>
          </div>
          <button type='submit' onClick={handleButtonClick}>ADD</button>
      </form>
      </>

  )
}

export default NewCandidate;
