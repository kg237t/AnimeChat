import React from 'react';
import { Loader2 } from 'lucide-react';

interface MatchingScreenProps {
  mode: 'video' | 'voice' | 'text';
  onCancel: () => void;
}

export default function MatchingScreen({ mode, onCancel }: MatchingScreenProps) {
  return (
    <div className="min-h-screen bg-[#222222] flex flex-col items-center justify-center p-4">
      <div className="text-center">
        <Loader2 className="w-16 h-16 text-blue-500 animate-spin mx-auto mb-4" />
        <h2 className="text-2xl text-white mb-2">Looking for someone to chat...</h2>
        <p className="text-gray-400 mb-8">
          {mode === 'video' && 'Make sure your camera is ready'}
          {mode === 'voice' && 'Make sure your microphone is ready'}
          {mode === 'text' && 'Get ready to type'}
        </p>
        <button
          onClick={onCancel}
          className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg transition-colors"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}