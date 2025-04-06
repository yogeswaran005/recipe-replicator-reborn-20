
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, X } from 'lucide-react';

const ChatBubble: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="bg-white rounded-lg shadow-lg w-80 h-96 flex flex-col overflow-hidden">
          <div className="bg-red-600 text-white p-4 flex justify-between items-center">
            <h3 className="font-semibold">Health Chat Assistant</h3>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8 text-white hover:bg-red-700 rounded-full"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          <div className="flex-grow p-4 overflow-y-auto">
            <div className="bg-gray-100 rounded-lg p-3 mb-3 max-w-[80%]">
              Hello! I'm your health recipe assistant. How can I help you today?
            </div>
          </div>
          <div className="p-4 border-t">
            <div className="flex items-center">
              <input 
                type="text" 
                placeholder="Type your question here..."
                className="flex-grow border rounded-l-lg p-2 focus:outline-none"
              />
              <Button className="bg-red-600 hover:bg-red-700 rounded-l-none">
                Send
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <Button 
          className="bg-red-600 hover:bg-red-700 h-14 w-14 rounded-full shadow-lg"
          onClick={() => setIsOpen(true)}
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}
    </div>
  );
};

export default ChatBubble;
