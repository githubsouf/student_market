import { FC } from "react";
import { ForumMessage } from "../../types/types";
import ForumMessageItem from "./ForumMessageItem";

interface ForumThreadProps {
    message: ForumMessage;
}

const ForumThread: FC<ForumThreadProps> = ({ message }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col gap-3">
            <ForumMessageItem message={message} />
            {message.replies && message.replies.length > 0 && (
                <div className="ml-6 border-l-2 border-gray-300 pl-4">
                    {message.replies.map((reply) => (
                        <ForumMessageItem key={reply.id} message={reply} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default ForumThread;
