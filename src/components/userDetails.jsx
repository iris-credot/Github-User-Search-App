import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot,faLink, faBuilding } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function GithubUsers({userOne}){
    const { bio, blog,created_at,followers,following,location,login,name,public_repos,avatar_url,twitter_username,company} = userOne;
    
const date = new Date(created_at);

const options = { day: '2-digit', month: 'short', year: 'numeric' };
const formattedDate = date.toLocaleDateString('en-GB', options);
    return(
   
    <div className="bg-[#FEFEFE] w-full h-[400px] sm:h-[350px] md:h-[280px] rounded-lg dark:bg-[#1E2A47] flex flex-row">
        <div className="w-1/4 h-full">
        <div className="bg-yellow-500 rounded-full overflow-hidden h-20 max-w-20 mt-6 md:ml-8 ml-2">
        <img src={avatar_url} alt="profile" className="w-full h-full object-cover" />
        </div>
        </div>
        <div className="w-3/4 h-full flex flex-col p-3 mt-3 space-y-3">
        <div className="w-full h-[50%] md:h-[45%] flex flex-col">
            <div className="flex gap-x-9">
                <h1 className="text-[hsba(220, 31%, 19%, 1)] font-medium dark:text-[#FEFEFE] w-1/2">{name || "Not available"}</h1>
                <p className="text-[10px] text-[#5C7B9D] dark:text-[#FEFEFE]  w-1/2">Joined {formattedDate || "Not available"}</p>
            </div>
            <h3 className="text-[10px] text-[#0079FF] dark:text-[]">@{login || "Not available"}</h3>
            <h2 className="text-[10px] sm:text-[12px] text-[#5C7B9D] dark:text-[#FEFEFE] mt-4 ">{bio || "Not available"}</h2>
        </div>
        <div className="bg-[#F6F8FF] dark:dark:bg-[#141D2F]  w-[95%] h-[20%] md:h-[25%] rounded-md mr-9 flex justify-center items-center space-x-4 p-6 mt-4">
           <div className="flex flex-col w-1/3">
           <h4 className="text-[#5C7B9D] dark:text-[#FEFEFE] text-[10px]">Repos</h4>
           <h5 className="font-medium dark:text-white text-[12px]">{public_repos || "Not available"}</h5>
           </div>
           <div className="flex flex-col w-1/3">
           <h4 className="text-[#5C7B9D] dark:text-[#FEFEFE] text-[10px]">Followers</h4>
           <h5 className="font-medium dark:text-white text-[12px]">{followers || "Not available"}</h5>
           </div>
           <div className="flex flex-col w-1/3">
           <h4 className="text-[#5C7B9D] dark:text-[#FEFEFE] text-[10px]">Following</h4>
           <h5 className="font-medium dark:text-white text-[12px]">{following || "Not available"}</h5>
           </div>
        </div>
        <div className="w-full h-[30%] grid grid-cols-1 sm:grid-cols-2 gap-x-8 pt-2 pb-3 text-[#5C7B9D] dark:text-[#FEFEFE]">
            <div className=" flex space-x-3">
                <div> <FontAwesomeIcon icon={faLocationDot}  className="text-xs pb-2"/></div>
                <p className="text-[10px] ml-3">{location || "Not available"}</p>
            </div>
            <div className="flex space-x-3">
                <div><FontAwesomeIcon icon={faTwitter} className="text-xs pb-2"/></div>
                <p className="text-[10px]">{twitter_username || "Not available"}</p>
            </div>
            <div className="flex space-x-3">
  <div><FontAwesomeIcon icon={faLink} className="text-xs pb-2" /></div>
  <a href={blog} target="_blank" rel="noopener noreferrer">
    <p className="text-[10px] text-blue-500 font-sans">{blog || "Not available"}</p>
  </a>
</div>
            <div className="flex space-x-3">
                <div>  <FontAwesomeIcon icon={faBuilding} className="text-xs pb-2" /></div>
                <p className="text-[10px] ">{company || "Not available"}</p>
            </div>
        </div>
        </div>
    </div>

    );
}