import { FC } from "react";
import { Conversations } from "../../types/types";
import { format } from "date-fns";

interface ConversationItemProps {
    conversation: Conversations;
    onSelectConversation: (id: number) => void;
}

const ConversationItem: FC<ConversationItemProps> = ({ conversation, onSelectConversation }) => {
    return (
        <div
            onClick={() => onSelectConversation(conversation.id)}
            className="p-4 rounded-md shadow-sm cursor-pointer hover:bg-gray-200 flex justify-between items-center transition duration-200"
        >
            <h3 className="text-lg font-medium text-gray-900">{conversation.title}</h3>
            <span className="text-gray-500 text-sm">
                {format(conversation.date, "dd MMM yyyy")}
            </span>
        </div>
    );
};

export default ConversationItem;
