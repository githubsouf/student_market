import { FC } from "react";
import { Messages } from "../../types/types";
import { format } from "date-fns";

interface MessageProps {
    message: Messages;
}

const Message: FC<MessageProps> = ({ message }) => {
    const isUserMessage = message.sender === "user";

    return (
        <div className={`p-3 rounded-lg max-w-xs ${isUserMessage ? "bg-blue-100 ml-auto" : "bg-gray-200 mr-auto"}`}>
            <p className="text-gray-700">{message.text}</p>
            <span className="block text-xs text-gray-500 mt-1">
                {format(message.date, "HH:mm")}
            </span>
        </div>
    );
};

export default Message;
