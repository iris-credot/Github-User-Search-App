import React,{useState,useEffect} from "react";
import GithubUsers from './userDetails';   
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon,faSun,faSearch } from '@fortawesome/free-solid-svg-icons';
export default function SearchUsers(){
const [user,setUser]=useState('');
const[search,setSearch]=useState('');
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
const [darkMode, setDarkMode] = useState(false);

const searchUser =async(username)=>{
    const apiUrl=`https://api.github.com/users/${username}`;
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
          setUser(data);
          console.log(data);
          setError(''); // Store weather data if request is successful
               }
      catch (error) {
        console.error("Request failed:", error);
        setError(error.message);
      }
      finally{
        setLoading(false);
    }
}
useEffect(()=>{
    searchUser('iris-credot');
    },[search]);
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
          document.documentElement.classList.add('dark');
          setDarkMode(true);
        }
      }, []);
      const toggleDarkMode = () => {
        if (darkMode) {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('theme', 'light');
        } else {
          document.documentElement.classList.add('dark');
          localStorage.setItem('theme', 'dark');
        }
        setDarkMode(!darkMode);
      };
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
        <div>  <FontAwesomeIcon icon={faSearch} className="text-[#0079FF]" size="lg" /></div>
        <input
            type="text"
            placeholder="Search GitHub username..."
           className="text-[14px] text-[#4B6A9B] dark:text-white focus:outline-none dark:bg-transparent "
            value={search}
            onChange={(e) => setSearch(e.target.value)} // Update username state
          />
        </div>
        <button className="px-5 h-[30px] bg-[#0079FF] rounded-md inline-block text-[#FEFEFE] text-[12px] mt-3 " onClick={()=>{searchUser(search)}}>Search</button>
    </div>

           {loading ? (  <p>Loading...</p>) : error ? (<p style={{ color: "red" }}>{error}</p>  ) : (  <GithubUsers user={user} />)}
</div>
    );
}