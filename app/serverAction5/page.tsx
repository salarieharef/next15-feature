'use client'
import { FormState, handleAdd5 } from "@/function/postAction5";
import { useActionState, useEffect } from "react";


const ServerAction5 =  () => {

  const initialState = {
    errors: {},
    isSuccess: false
  };

   const [state, formAction, isPending] = useActionState<FormState, FormData>(handleAdd5, initialState);

   useEffect(() => {
    if (state.isSuccess) {
      alert(state.message); // یا از toast/notification استفاده کنید
      // میتوانید فرم را ریست کنید اگر نیاز است
    }
    
    if (state.serverError) {
      alert(state.serverError);
    }
  }, [state]);

  return (
    <div>
      <h1>validation + useActionState </h1>

      <form action={formAction}>
        <input name="name" placeholder="name" />
        {state?.errors.name && <p>{state.errors.name}</p>}
        <input name="age" placeholder="age" />
        {state?.errors.age && <p>{state.errors.age}</p>}
        <button type="submit" disabled={isPending}  className="disabled:bg-red-300">Submit</button>
      </form>
    </div>
  );
};

export default ServerAction5;
