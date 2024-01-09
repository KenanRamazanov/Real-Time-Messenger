'use client';

import { Conversation, User } from "@prisma/client";

interface ConversationListProps {
    initialItems: Conversation[];
    users: User[];
    title?: string;
  }
  
const ConversationList:React.FC<ConversationListProps> = ({
    initialItems,
    users,
    title
}) => {
  return (
    <div
    
    >ConversationList</div>
  )
}

export default ConversationList