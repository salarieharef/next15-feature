import React from "react";

type UserType = {
  id:number
  name:string
  age:number
}

const SimpleGet = async () => {
  const res = await fetch(
    "https://673ef547a9bc276ec4b66ea0.mockapi.io/users/user",
    { cache: "no-store" }
  );
  const users:UserType[] = await res?.json();
  return (
    <div>
      {users?.map((item) => {
        return (
          <div key={item.id}>
            <h1>{item.name}</h1>
            <h1>{item.age}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default SimpleGet;
