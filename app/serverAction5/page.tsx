'use client'
import { FormState, handleAdd5 } from "@/function/postAction5";
import { useActionState } from "react";


const ServerAction5 =  () => {

  const initialState:FormState = {
    errors : {}
  }
  const [state, formAction , isPending] = useActionState(handleAdd5, initialState);


  return (
    <div>
      <h1>validation + useActionState </h1>

      <form action={formAction}>
        <input name="name" placeholder="name" />
        {state?.errors.name && <p>{state.errors.name}</p>}
        <input name="age" placeholder="age" />
        {state?.errors.age && <p>{state.errors.age}</p>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ServerAction5;
