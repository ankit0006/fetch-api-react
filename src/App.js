import './App.css';
import {useEffect,useState} from 'react';
import UsersData from './components/UsersData';
const api="https://jsonplaceholder.typicode.com/users";

function App() {
  

  const[user,setUser]=useState([]);
  const fetchUser=async (api)=>{
    try{
      const res=await fetch(api);
      const data=await res.json();
      if(data.length>0){
        setUser(data);
      }
    }
    catch(e){
      console.error(e)
    }  
  }

  useEffect(()=>{
    fetchUser(api);
  },[])
  return (
    <div className="App">
      <table id='tid'>
        <thead>
          <tr>
            <th id='id1'>ID</th>
            <th id='id2'>Name</th>
            <th id='id3'>Email</th>
          </tr>
        </thead>
        <tbody>
          <UsersData user={user}/>
        </tbody>
      </table>
    </div>
  );
}

export default App;
