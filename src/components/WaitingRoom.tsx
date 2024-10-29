import React from 'react';
import { Video } from 'lucide-react';

interface WaitingRoomProps {
  onStart: () => void;
}

export default function WaitingRoom({ onStart }: WaitingRoomProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="bg-gray-700 p-4 rounded-full inline-block mb-4">
            <Video className="w-12 h-12 text-blue-400" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">Video Chat</h1>
          <p className="text-gray-400">
            Connect with random people from around the world
          </p>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 shadow-xl mb-6">
          <div className="space-y-4">
            <div className="flex items-center text-gray-400">
              <span className="flex-1 h-px bg-gray-700"></span>
              <span className="px-4">Chat Rules</span>
              <span className="flex-1 h-px bg-gray-700"></span>
            </div>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• Be respectful to other users</li>
              <li>• No inappropriate content</li>
              <li>• Must be 18+ to use this service</li>
              <li>• Don't share personal information</li>
            </ul>
          </div>
        </div>

        <button
          onClick={onStart}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
        >
          <span>Start Chatting</span>
        </button>
      </div>
    </div>
  );
}