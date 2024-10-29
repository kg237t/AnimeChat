import React from 'react';
import { Video, VideoOff, Mic, MicOff, PhoneOff, MessageCircle } from 'lucide-react';

interface ControlsProps {
  isMuted: boolean;
  isVideoOff: boolean;
  isChatOpen: boolean;
  onToggleMute: () => void;
  onToggleVideo: () => void;
  onToggleChat: () => void;
  onDisconnect: () => void;
  mode: 'video' | 'voice' | 'text';
  isConnected: boolean;
}

export default function Controls({
  isMuted,
  isVideoOff,
  isChatOpen,
  onToggleMute,
  onToggleVideo,
  onToggleChat,
  onDisconnect,
  mode,
  isConnected
}: ControlsProps) {
  return (
    <div className="bg-[#333333] p-4">
      <div className="flex justify-center space-x-4">
        {(mode === 'video' || mode === 'voice') && (
          <button
            onClick={onToggleMute}
            className={`p-4 rounded-lg transition-colors ${
              isMuted ? 'bg-red-500' : 'bg-blue-500 hover:bg-blue-600'
            }`}
          >
            {isMuted ? (
              <MicOff className="w-6 h-6 text-white" />
            ) : (
              <Mic className="w-6 h-6 text-white" />
            )}
          </button>
        )}
        
        {mode === 'video' && (
          <button
            onClick={onToggleVideo}
            className={`p-4 rounded-lg transition-colors ${
              isVideoOff ? 'bg-red-500' : 'bg-blue-500 hover:bg-blue-600'
            }`}
          >
            {isVideoOff ? (
              <VideoOff className="w-6 h-6 text-white" />
            ) : (
              <Video className="w-6 h-6 text-white" />
            )}
          </button>
        )}

        {mode !== 'text' && (
          <button
            onClick={onToggleChat}
            className={`p-4 rounded-lg transition-colors ${
              isChatOpen ? 'bg-green-500' : 'bg-blue-500 hover:bg-blue-600'
            }`}
          >
            <MessageCircle className="w-6 h-6 text-white" />
          </button>
        )}

        <button
          onClick={onDisconnect}
          className="bg-red-500 hover:bg-red-600 text-white px-6 py-4 rounded-lg transition-colors flex items-center space-x-2"
        >
          <PhoneOff className="w-6 h-6" />
          <span>{isConnected ? 'Next' : 'Stop'}</span>
        </button>
      </div>
    </div>
  );
}