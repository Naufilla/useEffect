// useEffect

// import { useEffect } from "react";
// function App() {
//   useEffect(() => {
//     console.log("Component loaded");
//   });
//   return (
//   <h1>Hello useEffect</h1>
//   );
// }
// export default App;

// useEffect with useState

// import { useState, useEffect } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log("Count is : ", count);
//   }, [count]);

//   return (
//     <div>
//       <h1>Count : {count}</h1>
//       <button onClick={() => setCount(count + 1)}>Increase</button>
//     </div>
//   );
// }

// export default App;

// import { useState, useEffect } from "react";

// function Two() {
//   const [count1, setCount1] = useState(0);

//   useEffect(() => {
//     document.title = `count1 : ${count1}`;
//   }, [count1]);

//   return (
//     <button onClick={() => setCount1(count1 + 1)}>count1 : {count1}</button>
//   );
// }
// export default Two;




// useEffect when state changes

// import { useState, useEffect } from "react";

// function App(){
//   const [name, setName] = useState("Naufilla");

//     useEffect(() => {
//         console.log("Name changed:", name);
//     }, [name]);

//     return (
//         <div>
//             <h2>Hello, {name}!</h2>

//             <button onClick={() => setName("Ayesha")}>
//                 Change Name
//             </button>
//         </div>
//     );
// }

// export default App;









import { useState, useEffect } from "react";

function App() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        async function fetchUser() {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/users/1"
            );

            const data = await response.json();

            setUser(data);
        }

        fetchUser();
    }, []);

    return (
        <div>
            <h1>User Details</h1>

            {user ? (
                <div>
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                    <p>{user.phone}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default App;