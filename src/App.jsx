import { useActionState } from "react";
export default function App(){
  const handleSubmit=(previousData,formData)=>{
    let name=formData.get('name');
    let password=formData.get('password')
    console.log("handleSubmit called",name,password);    
  }
  const[data,action,pending]=useActionState(handleSubmit,undefined)
  return(
    <>
    <div>
      <h1>UseActionState Hook in React Js</h1>
      <form action={action}>
        <input type="text" placeholder="enter name" name="name"/>
        <br /><br />
        <input type="password" placeholder="enter Password" name="password" />
        <br /><br />
        <button>Submit Data</button>
      </form>
    </div>

    </>


  )
}