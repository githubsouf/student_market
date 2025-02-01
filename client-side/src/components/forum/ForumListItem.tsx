import { FC } from "react";
import { ForumMessage } from "../../types/types";
import { format } from "date-fns";

interface ForumListItemProps {
    message: ForumMessage;
    onSelectMessage: (id: number) => void;
}

const ForumListItem: FC<ForumListItemProps> = ({ message, onSelectMessage }) => {
    return (
        <div
            onClick={() => onSelectMessage(message.id)}
            className="p-4 rounded-md shadow-sm cursor-pointer hover:bg-gray-200 flex justify-between items-center transition duration-200"
        >
            <h3 className="text-lg font-medium text-gray-900">{message.contenu.slice(0, 30)}...</h3>
            <span className="text-gray-500 text-sm">{format(message.sendDate, "dd MMM yyyy")}</span>
        </div>
    );
};

export default ForumListItem;
