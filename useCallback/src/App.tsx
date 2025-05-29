import React, { useState , useCallback} from "react"
import Search from "./Search"

const userList = [
  "Aarav",
  "Isha",
  "Rohan",
  "Ananya",
  "Vivaan",
  "Priya",
  "Karan",
  "Meera",
  "Arjun",
  "Sneha"
];
function App() {
  const [users, setUsers] = useState(userList)

  const shuffle = () => {
    const i = Math.floor((Math.random() * 1000) % users.length);
    const temp = [...users];
    [temp[0], temp[i]] = [temp[i], temp[0]];
    setUsers(temp);
    console.log("suffled");
  }
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(users[0])
    const text = e.target.value;
    setUsers(userList.filter((name)=>name.includes(text)));
  }

  const memoisedHandleSearch = useCallback(handleSearch, [users])
  return (
    <>
      <h1>Use Callback Example </h1>
      <button onClick={shuffle}>Shuffle</button>
      <Search handleSearch={memoisedHandleSearch}/>
      {
        users.map((u) => <p>{u}</p>)
      }
    </>
  )
}

export default App
