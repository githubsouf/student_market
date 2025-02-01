import { FC } from "react";
import { ForumMessage } from "../../types/types";
import { format } from "date-fns";

interface ForumMessageItemProps {
    message: ForumMessage;
}

const ForumMessageItem: FC<ForumMessageItemProps> = ({ message }) => {
    return (
        <div className={`p-3 rounded-lg max-w-xs ${message.me ? "bg-blue-100 ml-auto" : "bg-gray-200 mr-auto"}`}>
            <div className="flex items-center gap-2">
                <img src={message.user.avatar} alt={message.user.username} className="w-8 h-8 rounded-full" />
                <p className="font-semibold">{message.user.username}</p>
            </div>
            <p className="text-gray-700">{message.contenu}</p>
            <span className="block text-xs text-gray-500 mt-1">
                {format(message.sendDate, "HH:mm")}
            </span>
        </div>
    );
};

export default ForumMessageItem;
