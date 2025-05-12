'use client'
import { useFormState, useFormStatus } from 'react-dom';
import { useEffect } from 'react';
import { handleAdd5 } from "@/function/postAction5";

const initialState = {
  errors: {},
  isSuccess: false,
  serverError: '',
  message: ''
};

function SubmitButton() {
  const { pending} = useFormStatus();
  return (
    <button type="submit" disabled={pending}>
      {pending ? 'در حال ارسال...' : 'ارسال'}
    </button>
  );
}

export default function FormComponent() {
  const [state, formAction] = useFormState(handleAdd5, initialState);
  
  useEffect(() => {
    if (state.isSuccess) {
      alert(state.message);
      // میتوانید اینجا فرم را ریست کنید اگر نیاز است
    }
    
    if (state.serverError) {
      alert(state.serverError);
    }
  }, [state]);

  return (
    <div>
      <h1>فرم با useFormState</h1>
      
      <form action={formAction}>
        <input name="name" placeholder="نام" />
        {state?.errors.name && <p className="error">{state.errors.name}</p>}
        
        <input name="age" placeholder="سن" type="number" />
        {state?.errors.age && <p className="error">{state.errors.age}</p>}
        
        <SubmitButton />
      </form>

      {/* نمایش پیام‌ها در UI */}
      {state.isSuccess && <div className="success">{state.message}</div>}
      {state.serverError && <div className="error">{state.serverError}</div>}
    </div>
  );
}