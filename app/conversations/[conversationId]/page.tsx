

interface IParams {
    conversationId: string;
  }
const ConversationId = async ({params} : {params: IParams}) => {
return (
    <div>
        Conversation Id!
    </div>
)
}


export default ConversationId;