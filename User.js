import React,{useState, useEffect} from "react";
import ErrorWindow from "./ErrorWindow";
import Card from "../UI/Card";
import classes from "./User.module.css"
import Button from "../UI/Button";
import Wrapper from "../Helpers/Wrapper";


const User=(props)=>{

    
    const [Error,setError]=useState('')
    const [enteredName,setenteredName]=useState('')
    const [enteredAge,setenteredAge]=useState('')
    const [enteredCollege,setenteredCollege]=useState('')

    var ErrorMessage

    useEffect(()=>{
        if(enteredName.trim().length===0 | enteredAge.trim().length===0 | enteredCollege.trim().length===0)
        {
            ErrorMessage=1;
        }
        else if(+enteredAge < 1){
            ErrorMessage=2
        }
    })

    const SubmitHandler=(event)=>{
        event.preventDefault()
        
        const UserData={
            id: Math.random().toString(),
            name: enteredName,
            age: enteredAge,
            college: enteredCollege
        }
        
            if(ErrorMessage===1)
              {
                 setError({
                      title: "Invalid Input",
                      message: "Please enter the valid details"
                    })   
              }
            else if(ErrorMessage===2)
             {
                 setError({
                     title: "Invaild Age",
                     message: "Please enter a vaild age"
                    })
             }
            else{
                 props.onAddUser(UserData)
               }
            setenteredAge('')
            setenteredName('')
            setenteredCollege('')
    }

    const NameChangeHandler=(event)=>{
        setenteredName(event.target.value)
    }

    const CollegeChangeHandler=(event)=>{
        setenteredCollege(event.target.value)
    }

    const AgeChangeHandler=(event)=>{
        setenteredAge(event.target.value)
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
                <input id="name" type="text"  value={enteredName} onChange={NameChangeHandler} />
            </div>
            <div>
                <label htmlFor="number">Age (Years)</label>
                <input id="number" type="number"  value={enteredAge} onChange={AgeChangeHandler}/>
            </div>
            <div>
                <label htmlFor="college">College Name</label>
                <input id="college" type="text" value={enteredCollege} onChange={CollegeChangeHandler} />
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
