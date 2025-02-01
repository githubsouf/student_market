import { FC } from "react";
import { ForumMessage } from "../../types/types";
import ForumListItem from "./ForumListItem";

interface ForumListProps {
    messages: ForumMessage[];
    onSelectMessage: (id: number) => void;
}

const ForumList: FC<ForumListProps> = ({ messages, onSelectMessage }) => {
    return (
        <div className="flex flex-col gap-3">
            {messages.map((msg) => (
                <ForumListItem key={msg.id} message={msg} onSelectMessage={onSelectMessage} />
            ))}
        </div>
    );
};

export default ForumList;
