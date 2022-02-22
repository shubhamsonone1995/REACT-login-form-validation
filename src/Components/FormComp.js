import { useState } from "react"
const FormComp=()=>{
    const initialValue={username:'',email:'',password:''}

   const [formValues, setFormValues]= useState(initialValue)

    const changeHandler=(e)=>{
     console.log(e.target)
     const {name,value}=e.target;
    //  console.log(name)
    //  console.log(value)
     setFormValues({...formValues,[name]:value})
     console.log(formValues)
    }
    return(
    <div className="continer">
        <form className="w-50 mx-auto my-5 p-5 border">
     <div className="my-3 text-start">
         <label className="my-2">UserName</label><br/>
         <input placeholder="UserName" 
         type="text"
         name='username'
         value={formValues.username}
         onChange={changeHandler} 
          ></input>
     </div>
     <div className="my-3 text-start">
         <label className="my-2">Email</label><br/>
         <input placeholder="email" 
         type="text"
         name='email'
         value={formValues.email}
         onChange={changeHandler} 
          ></input>
     </div>
     <div className="my-3 text-start">
         <label className="my-2">Password</label> <br/>
         <input placeholder="password" 
         type="text"
         name='password'
         value={formValues.password}
         onChange={changeHandler} 
          ></input>
     </div>
     <button className="btn btn-primary">Submit</button>
     </form>
    </div>)
}
export default FormComp