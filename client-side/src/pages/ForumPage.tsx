import { FC, useState } from "react";
import ForumList from "../components/forum/ForumList";
import ForumThread from "../components/forum/ForumThread";
import { forumMessages } from "../data/data";
import { ForumMessage } from "../types/types";

const ForumPage: FC = () => {
    const [selectedMessage, setSelectedMessage] = useState<ForumMessage | null>(null);

    const handleSelectMessage = (id: number) => {
        const message = forumMessages.find((msg) => msg.id === id);
        setSelectedMessage(message || null);
    };

    return (
        <div className="flex gap-6 p-6 min-h-screen bg-gray-100">
            <div className="w-1/4 bg-white p-4 rounded-lg shadow-md">
                <ForumList messages={forumMessages} onSelectMessage={handleSelectMessage} />
            </div>

            <div className="w-3/4">
                {selectedMessage ? <ForumThread message={selectedMessage} /> : (
                    <p className="text-gray-500 text-center mt-10">Sélectionnez une discussion.</p>
                )}
            </div>
        </div>
    );
};

export default ForumPage;
