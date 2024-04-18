import useGetConversations from "../../hooks/useGetConversations"
import { getRandomEmoji } from "../../utils/emojies";
import Conversation from "./Conversation"

const Conversations = () => {
  const { loading, conversations } =useGetConversations()
  // console.log("Conversation",conversations);
  return (
    <div className="py-2 flex flex-col overflow-auto">

        {conversations.map((conversation, idx) => (
            <Conversation key={conversation._id} 
            conversation={conversation} 
            emoji = {getRandomEmoji()}
            lastIdx = {conversations.length - 1 === idx}
            />
        ))}
        {loading ? <span className="loading loading-spinner mx-auto"></span> : null}
    </div>
  )
}

export default Conversations