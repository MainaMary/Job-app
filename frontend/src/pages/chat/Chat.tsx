import React ,{useEffect} from "react";
import { AiFillSetting } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import { FiSearch, FiHash } from "react-icons/fi";
import {BsThreeDots} from "react-icons/bs"

const list = [
  {
    label: "Drugs",
    id: "1",
  },
  {
    label: "Mental Health Awareness",
    id: "2",
  },
];
const chatList = [
  {
    img: <RxAvatar   size={20}/>,
    name: "Juan",
    id: 1,
    desc: "How is weather today?",
    time: "12:35am",
  },
  {
    img: <RxAvatar  size={20}/>,
    name: "Ess Jofi",
    id: 2,
    desc: "How is weather today?",
    time: "12:35am",
  },
  
  {
    img: <RxAvatar  size={20}/>,
    name: "Juan",
    id: 3,
    desc: "How is weather today?",
    time: "12:35am",
  },
  {
    img: <RxAvatar  size={20}/>,
    name: "Juan",
    id: 3,
    desc: "How is weather today?",
    time: "12:35am",
  },
];

const Chat = () => {
  const fetchMockServerData= async () => {
   
      try {
        const requestOptions = {
          method: "GET",
          redirect: "follow",
        };
    
        fetch(
          `https://openai-server-e30nejt8b-harry3167.vercel.app/api/v1/mock-server`,
          
           
        )
          .then((response) => response.json())
          .then((result) => {
           console.log(result)
          })
          .catch((error) => {
            console.log("error", error)
           
          });
      } catch (error) {
        console.log(error);
       
      }
    };
    useEffect(()=>{
      fetchMockServerData()
    },[])
  return (
    <div className="flex m-auto justify-center  items-center">
      <div className="rounded-md border-2 border-gray-100 w-[80%] flex">
        <nav className="w-full lg:w-[30%] bg-blue-50">
          <div className="px-3 flex border-b-2 border-gray-100 py-4 h-auto items-center justify-between">
            <h3 className="flex gap-2 h-auto items-center">
              <RxAvatar />
              <span>John doe</span>
            </h3>
            <AiFillSetting />
          </div>
          <h2 className="px-3 my-4 text-sm font-medium">Chats</h2>
          <form className="px-3 border-t-2 border-gray-100 py-4">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <FiSearch />
              </div>
              <input
                type="text"
                id="simple-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search"
                required
              />
            </div>
          </form>
          <div className="px-3 py-3">
            <h3>Channels</h3>
            <ul>
              {list.map((item) => (
                <li
                  key={item.id}
                  className="my-2 flex h-auto items-center gap-2"
                >
                  <FiHash />
                  {item.label}
                </li>
              ))}
            </ul>
            <h3>Direct messages</h3>
            <div className="px-3 overflow-y-scroll lg:h-[40vh]">
              {chatList.map((chat) => (
                <div key={chat.id} className=" flex w-full justify-between p-3 border-2 border-gray-300 rounded-md my-2">
                  <div className="flex h-auto items-center gap-2 lg:w-[75%]">
                  {chat.img}
                    <div>
                      
                      <p>{chat.name}</p>
                      <p>{chat.desc}</p>
                    </div>
                  </div>
                  <div className="lg:w-[25%]">
                    <p>{chat.time}</p>
                    <p>2</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </nav>
        <div className="lg:w-[70%]">
        <div className="px-3 flex border-b-2 border-gray-100 py-4 h-auto items-center justify-between">
            <h3 className="flex gap-2 h-auto items-center">
              <RxAvatar />
              <span>John doe</span>
            </h3>
            <BsThreeDots size={24} />
          </div>
          <div className="px-3"></div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
