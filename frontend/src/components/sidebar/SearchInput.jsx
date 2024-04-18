import { useState } from "react";
import { BsSearchHeartFill } from "react-icons/bs";
import useConversation from "../../zustand/useConversation"
import useGetConversations from "../../hooks/useGetConversations"
import toast from "react-hot-toast";
const SearchInput = () =>{
  const [search, setSearch] = useState("")
  const {setSelectedConversation} = useConversation()
  const {conversations} = useGetConversations()
  const handleSubmit = (e) =>{
    e.preventDefault()
    if(!search) return;
    if(search.length<3){
      return toast.error("Search term must be at least 3 characters")
    }
    const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()))
    if(conversation){
      setSelectedConversation(conversation)
      setSearch("")
    }
    else{
      toast.error("No conversation found")
    }
  }
  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
        <input type="text" placeholder="Search..." className="input input-bordered rounded-full"
        value={search}
        onChange={e => setSearch(e.target.value)}
        />
        <button type="submit" className="btn btn-circle bg-cyan-500 text-white">
        <BsSearchHeartFill />
        </button>
    </form>
  )
}

export default SearchInput