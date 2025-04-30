import React,{useState,useEffect} from "react";
import GithubUsers from './userDetails';   
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon,faSun,faSearch } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from "./theme";
export default function SearchUsers(){
const [user,setUser]=useState('');
const[search,setSearch]=useState('');
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
const { darkMode, toggleDarkMode } = useTheme();

const searchUser =async(username)=>{
    const apiUrl=`https://api.github.com/users/${username}`;
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
         
    if (data.message === "Not Found") {
      setUser(null);     
      setError("User not found");
    } else {
      setUser(data);
      setError("");
    }
               }
      catch (error) {
        console.error("Request failed:", error);
        setError(error.message);
        setUser(null); 
      }
      finally{
        setLoading(false);
    }
}
useEffect(()=>{
    searchUser('iris-credot');
    },[]);
  
    
    return(
<div className="flex flex-col  justify-center items-center max-w-lg w-full space-y-4 m-20">
<div className="bg-transparent flex flex-row justify-between  w-full p-4 h-[40px] ">
      <h1 className="text-[hsba(220, 31%, 19%, 1)] font-medium dark:text-[#FEFEFE]">devfinder</h1>
     <div className="flex space-x-2 justify-end text-[#697C9A]">
     <p className="text-[9px] font-serif pt-1">  {darkMode ? "LIGHT" : "DARK"}</p>
     <button className="text-sm"   onClick={toggleDarkMode}>  <FontAwesomeIcon icon={darkMode ? faSun : faMoon} /></button>
     </div>
    </div>
    <div className="bg-[#FEFEFE] w-full h-[50px] rounded-lg flex space-x-40 dark:bg-[#1E2A47]">
        <div className="flex justify-center items-center p-5 space-x-4">
        <div>  <FontAwesomeIcon icon={faSearch} className="text-[#0079FF] " size="lg" /></div>
        <input
            type="text"
            placeholder="Search GitHub username..."
           className="text-[14px] text-[#4B6A9B] dark:text-white focus:outline-none dark:bg-transparent w-full font-sans"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
           
            }}

          />
        </div>
        <button  className={`px-5 h-[30px] bg-[#0079FF] rounded-md inline-block text-[#FEFEFE] text-[12px] mt-3 ${
    search.trim() && !error ? "cursor-pointer opacity-60" : "hover:bg-blue-400"
  }`} onClick={() => {
      setLoading(true);
    searchUser(search);
  }}>Search</button>
    </div>

           {loading ? (  <p>Loading...</p>) : error ? (<p style={{ color: "red" }}>{error}</p>  ) : user ? (
        <GithubUsers userOne={user} />
      )
       : 
       (<p>No User Found...</p>)
       }
</div>
    );
}