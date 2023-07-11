import React,{useState, useRef} from "react";
import ErrorWindow from "./ErrorWindow";
import Card from "../UI/Card";
import classes from "./User.module.css"
import Button from "../UI/Button";
import Wrapper from "../Helpers/Wrapper";


const User=(props)=>{

    
    const [Error,setError]=useState('')
    const NameInputRef=useRef();
    const AgeInputRef=useRef();
    const CollegeInputRef=useRef();

    const SubmitHandler=(event)=>{
        event.preventDefault()
        const enteredName=NameInputRef.current.value;
        const enteredAge=AgeInputRef.current.value;
        const enteredCollege=CollegeInputRef.current.value;
        const UserData={
            id: Math.random().toString(),
            name: enteredName,
            age: enteredAge,
            college: enteredCollege
        }
        
            if(enteredName.trim().length===0 | enteredAge.trim().length===0 | enteredCollege.trim().length===0)
              {
                 setError({
                      title: "Invalid Input",
                      message: "Please enter the valid details"
                    })   
              }
            else if(+enteredAge < 1)
             {
                 setError({
                     title: "Invaild Age",
                     message: "Please enter a vaild age"
                    })
             }
            else{
                 props.onAddUser(UserData)
               }
        
       
        NameInputRef.current.value=''
        AgeInputRef.current.value=''
        CollegeInputRef.current.value=''
    }

    const ErrorHandler=()=>{
        setError(null)
    }

    return (
        <Wrapper>
         {Error && <ErrorWindow title={Error.title} message={Error.message} onConfirm={ErrorHandler} />}
         <Card className={classes.input}>
          <form onSubmit={SubmitHandler}>
            <div>
                <label htmlFor="name">Name</label>
                <input id="name" type="text"  ref={NameInputRef} />
            </div>
            <div>
                <label htmlFor="number">Age (Years)</label>
                <input id="number" type="number"  ref={AgeInputRef} />
            </div>
            <div>
                <label htmlFor="college">College Name</label>
                <input id="college" type="text" ref={CollegeInputRef} />
            </div>
            <div>
                <Button type="submit">Add User</Button>
            </div>
          </form>
         </Card>
        </Wrapper>
    )
}

export default User
