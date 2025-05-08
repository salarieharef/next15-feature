'use client'


const Login = () => {
    const handleLogin = () => {
        fetch("https://673ef547a9bc276ec4b66ea0.mockapi.io/users/user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // "Authorization" : 'Bearer ' + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjdiNTVlZTQ5LTA0Y2ItNGMxYi04ZDE1LWM1N2NlMWFlNjUzZiIsInN1YiI6IjdiNTVlZTQ5LTA0Y2ItNGMxYi04ZDE1LWM1N2NlMWFlNjUzZiIsImp0aSI6IjkzYjcxMWJhLWQzNDAtNDkxMy05ZjYzLTg3ZWFiZTUxMmMxZSIsImVtYWlsIjoiYXNAZ21haWwuY29tIiwiVWlkIjoiUkhTdk12VnQ1amdlV25sUlJGNDhlaXdOVWlyT09COGx5MU5PQ3ZqVXVKcz1Fczc4ODk2Yjg2YjI3M2ZmMzRmY2UxOWQ2YjgwNGVmZjVhM2Y1NzQ3YWRhNGVhYTIyZjFkNDljMDFlNTJkZGI3ODc1YjRiIiwiZXhwIjoxNzQ0NTU2MDc4LCJpc3MiOiJTZXBlaHJBY2FkZW15IiwiYXVkIjoiU2VwZWhyQWNhZGVteSJ9.Uch0GMjvjZkO0I5Vlk8o_6jjJ4TfuMDViUgoBjeySPE"
          },
          body: JSON.stringify({
            name: "aref",
            age: "1",
          }),
        })
        .then(res => res.json())  // first way to convert to json / second way in serverAction file
        .then(res2 => console.log(res2))  
      
      };

  return (
    <div>
        <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login