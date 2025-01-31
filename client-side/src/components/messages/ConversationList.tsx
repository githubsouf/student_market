import { FC } from "react";
import { Conversations } from "../../types/types";
import ConversationItem from "./ConversationItem";

interface ConversationListProps {
    conversations: Conversations[];
    onSelectConversation: (id: number) => void;
}

const ConversationList: FC<ConversationListProps> = ({ conversations, onSelectConversation }) => {
    return (
        <div className="flex flex-col gap-3">
            {conversations.map(conversation => (
                <ConversationItem
                    key={conversation.id}
                    conversation={conversation}
                    onSelectConversation={onSelectConversation}
                />
            ))}
        </div>
    );
};

export default ConversationList;
