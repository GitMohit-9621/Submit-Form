import React, { useState } from 'react'

function Form(){

const[fname, setfname]=useState('')
const[lname,setlanme]=useState('')
const[email,setemail]=useState('')
const[contact,setcontact]=useState('')
const[gender,setgender]=useState('male')
const[subject,setsubject]=useState({
    English:true,
    Math:false,
    physics:false
});

const[resume,setresume]=useState('')
const[url,seturl]=useState('')
const[slect,setslect]=useState('')
const[about,setabout]=useState('')


const handdelsubmit=((e)=>{
    e.preventdefault()
    console.log(fname,lname,email,contact,gender,subject,url,resume,about,slect)
})


const reset=(()=>{
    setfname('')
    setlanme('')
    setemail('')
    setcontact('')
    setgender('male')
    setsubject({
      
        Math:false,
        physics:false
    })
    setresume('')
    setslect('')
    seturl('')
    setabout('')

})
const handdlesubject=((sub)=>{
    setsubject((prev)=>{

       
    })
})


    return(
        <div className='container'>
            <h1>Form in React</h1>
     <form action='#' method='get'>
        <label for='firstname' className='first'>First Name*</label>
        <input type='text' placeholder='Enter Firstname' name='firstname' id='firstname' value={fname} onChange={(e)=>setfname(e.target.value)}></input>


        <label for='lastname' id='last'>Last Name*</label>
        <input type='text' placeholder='Enter Lastname' name='lastname' id='lastname' value={lname} onChange={(e)=>setlanme(e.target.value)}></input>

        <label for='email'className='eml'>Email*</label>
        <input type='email' placeholder='Enter email' name='email' id='email' value={email} onChange={(e)=>setemail(e.target.value)}></input>

        <label for='contact' className='con'>Contact*</label>
        <input type='number' placeholder='Enter mobile number' name='contact' id='contact' value={contact} onChange={(e)=>setcontact(e.target.value)}></input>

      <div className='box'>

      <label for='gender' id='all-gender'>gender*</label>
        <input type='radio' name='gender'id='male' value='male' checked={gender==="male"} onChange={(e)=>setgender(e.target.value)}/><span className='male'>male</span>


        <input type='radio' name='gender'id='female' value='female' checked={gender==='female'} onChange={(e)=>setgender(e.target.value)
        }/><span className='female'>female</span>

        <input type='radio' name='gender'id='other' value='other' checked={gender==='other'}onChange={(e)=>setgender(e.target.value)} /><span className='other'>Other</span>

 
      </div>

       

<div className='box2'></div>


      <label for='lang' id='all-lang'>Your best Subject*</label>
    <input type='checkbox' name='lang' id='English'    onChange={(e)=> handdlesubject('English')}/><span className='english'>English</span>

        <input type='checkbox' name='lang' id='Math' onChange={(e)=>handdlesubject('Math')} /><span className='physics'>Physics</span>


        <input type='checkbox' name='lang' id='Physics'onChange={(e)=>handdlesubject('Physics')} /><span className='math'>Math</span>



        <label for="file" className='upload'>Upload Resume*</label>
<input type="file" name="file" id="file" placeholder="Enter Upload File" required/>



<label for="url" className='url'>Enter Url*</label>
<input type="url" name="url" id="url" placeholder="Enter url" required/>



<label className='select'>Select your choice</label>
                    <select
                        name="select"
                        id="select"
                       
                    >
                        <option
                            value=""
                            disabled
                           
                        >
                            Select your Ans
                        </option>
                        <optgroup label="Beginers">
                            <option value="1">HTML</option>
                            <option value="2">CSS</option>
                            <option value="3">
                                JavaScript
                            </option>
                        </optgroup>
                        <optgroup label="Advance">
                            <option value="4">React</option>
                            <option value="5">Node</option>
                            <option value="6">
                                Express
                            </option>
                            <option value="t">
                                MongoDB
                            </option>
                        </optgroup>
                    </select>

                    <label for="about" className='about'>About</label>
                    <textarea
                        name="about"
                        id="about"
                        cols="60"
                        rows="10"
                       
                        placeholder="About your self"
                        required
                    ></textarea>


<button type='reset'  className='btn1'>Reset</button>
  <button type='submit' className='btn2' onClick={(e)=>handdelsubmit(e)}>submit</button>

     </form>

        </div>
    )
}

export default Form