'use client'
import { useState, useTransition } from 'react';

function UseTransitionPage() {
  const [value, setValue] = useState<string>('x');
  const [items, setItems] = useState<any>(null);
  const [isPending, startTransition] = useTransition();

  const handleChange = () => {
    
    startTransition(async () => {
      const res = await fetch("https://673ef547a9bc276ec4b66ea0.mockapi.io/users/user");
      const data = await res.json();
      setItems(data);
    });
    setValue('yes');

  };

  const handleRandom = async () => {
    const res = await fetch("https://673ef547a9bc276ec4b66ea0.mockapi.io/users/user");
    const data = await res.json();
    setItems(data);

    setValue('no');

  };

  return (
    <div>
      <div >
        <h1>{value}</h1>
        <button onClick={handleChange} disabled={isPending} className='disabled:bg-red-400'>startTransition</button>
        <br />
        <button onClick={handleRandom} >no startTransition</button>
      </div>
      {items?.map((item:any) => (
        <div key={item.id}>
          <h1>{item.name}</h1>
          <p>{item.age}</p>
        </div>
      ))}
    </div>
  );
}

export default UseTransitionPage;