import React, { useState } from 'react';
import { Video, Mic, MessageSquare } from 'lucide-react';

interface LandingPageProps {
  onStart: (mode: 'video' | 'voice' | 'text') => void;
}

export default function LandingPage({ onStart }: LandingPageProps) {
  const [interests, setInterests] = useState('');

  return (
    <div className="min-h-screen bg-[#222222] flex flex-col items-center p-4">
      <div className="max-w-2xl w-full text-center pt-8">
        <h1 className="text-6xl font-bold text-blue-500 mb-4">AnimeChat</h1>
        <p className="text-lg text-gray-300 mb-8">Talk to random anime fans!</p>

        <div className="bg-[#333333] rounded-lg p-6 mb-8">
          <textarea
            value={interests}
            onChange={(e) => setInterests(e.target.value)}
            placeholder="Enter your anime interests (optional)"
            className="w-full bg-[#444444] text-white p-3 rounded-lg mb-4 resize-none h-24"
          />

          <div className="grid grid-cols-1 gap-4">
            <button
              onClick={() => onStart('text')}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors"
            >
              Text Chat
            </button>

            <button
              onClick={() => onStart('video')}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors"
            >
              Video Chat
            </button>
          </div>
        </div>

        <div className="bg-[#333333] rounded-lg p-6">
          <h2 className="text-white text-xl mb-4">Chat Rules:</h2>
          <ul className="text-gray-300 text-left space-y-2">
            <li>• Must be 18 or older</li>
            <li>• No inappropriate content</li>
            <li>• Be respectful to others</li>
            <li>• No hate speech or harassment</li>
          </ul>
        </div>
      </div>
    </div>
  );
}