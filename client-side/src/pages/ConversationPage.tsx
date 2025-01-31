import { FC, useState } from "react";
import ConversationList from "../components/messages/ConversationList";
import { conversations } from "../data/data";
import { Conversations } from "../types/types";
import Message from "../components/messages/Message";

const ConversationPage: FC = () => {
    const [selectedConversation, setSelectedConversation] = useState<Conversations | null>(null);

    const handleSelectConversation = (id: number) => {
        const conversation = conversations.find(conv => conv.id === id);
        setSelectedConversation(conversation || null);
    };

    return (
        <div className="flex gap-6 p-6 min-h-screen bg-gray-100">
            {/* Liste des conversations */}
            <div className="w-1/4 bg-white p-4 rounded-lg shadow-md">
                <ConversationList conversations={conversations} onSelectConversation={handleSelectConversation} />
            </div>

            {/* Affichage des messages */}
            <div className="w-3/4 bg-white p-6 rounded-lg shadow-md flex flex-col">
                {selectedConversation ? (
                    <>
                        <h1 className="text-2xl font-semibold mb-4 text-gray-800">
                            {selectedConversation.title}
                        </h1>
                        <div className="flex flex-col gap-3 overflow-y-auto max-h-[60vh] p-2 scrollbar-thin scrollbar-thumb-gray-300">
                            {selectedConversation.messages.map(message => (
                                <Message key={message.id} message={message} />
                            ))}
                        </div>
                    </>
                ) : (
                    <p className="text-gray-500 text-center mt-10">
                        Sélectionnez une conversation pour afficher les messages.
                    </p>
                )}
            </div>
        </div>
    );
};

export default ConversationPage;
