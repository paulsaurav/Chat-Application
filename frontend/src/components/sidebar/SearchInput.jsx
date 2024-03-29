import { BsSearchHeartFill } from "react-icons/bs";
const SearchInput = () =>{
  return (
    <form className="flex items-center gap-2">
        <input type="text" placeholder="Search..." className="input input-bordered rounded-full"/>
        <button type="submit" className="btn btn-circle bg-cyan-500 text-white">
        <BsSearchHeartFill />
        </button>
    </form>
  )
}

export default SearchInput