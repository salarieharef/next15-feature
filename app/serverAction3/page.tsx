'use client'
import axios from "axios";
import React, { useEffect, useState } from "react";
import { handleAdd } from "../function/postAction";

type UserType = {
  id: number;
  name: string;
  age: number;
};

const ServerAction3 =  () => {
  const [users, setUsers] = useState<UserType[]>([]);

  const getUsers = async () => {
    const res = await axios.get(
      "https://673ef547a9bc276ec4b66ea0.mockapi.io/users/user"
    );
    setUsers(res.data);
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {users?.map((item) => {
          return (
            <div key={item.id} className="w-1/12 border-2 p-4">
              <h1>{item.name}</h1>
              <h1>{item.age}</h1>
            </div>
          );
        })}
      </div>

      <form action={handleAdd}>
        <input name="name" placeholder="name" />
        <input name="age" placeholder="age" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ServerAction3;
