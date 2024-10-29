import React, { useEffect, useRef, useState } from 'react';
import SimplePeer from 'simple-peer';
import Controls from './Controls';
import ChatBox from './ChatBox';
import MatchingScreen from './MatchingScreen';

interface VideoChatProps {
  onDisconnect: () => void;
  mode: 'video' | 'voice' | 'text';
}

export default function VideoChat({ onDisconnect, mode }: VideoChatProps) {
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(mode === 'voice' || mode === 'text');
  const [isChatOpen, setIsChatOpen] = useState(mode === 'text');
  const [isMatching, setIsMatching] = useState(true);
  const [isConnected, setIsConnected] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const remoteVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const startMedia = async () => {
      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia({
          video: mode === 'video',
          audio: mode === 'video' || mode === 'voice'
        });
        setStream(mediaStream);
        if (videoRef.current) {
          videoRef.current.srcObject = mediaStream;
        }
        // Simulate finding a match after 2-5 seconds
        setTimeout(() => {
          setIsMatching(false);
          setIsConnected(true);
        }, 2000 + Math.random() * 3000);
      } catch (error) {
        console.error('Error accessing media devices:', error);
      }
    };
    startMedia();

    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, [mode]);

  const findNewMatch = () => {
    setIsMatching(true);
    setIsConnected(false);
    // Simulate finding a new match
    setTimeout(() => {
      setIsMatching(false);
      setIsConnected(true);
    }, 2000 + Math.random() * 3000);
  };

  const toggleMute = () => {
    if (stream) {
      stream.getAudioTracks().forEach(track => {
        track.enabled = !track.enabled;
      });
      setIsMuted(!isMuted);
    }
  };

  const toggleVideo = () => {
    if (stream) {
      stream.getVideoTracks().forEach(track => {
        track.enabled = !track.enabled;
      });
      setIsVideoOff(!isVideoOff);
    }
  };

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleDisconnect = () => {
    if (isConnected) {
      findNewMatch();
    } else {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
      onDisconnect();
    }
  };

  if (isMatching) {
    return <MatchingScreen mode={mode} onCancel={onDisconnect} />;
  }

  return (
    <div className="flex flex-col h-screen bg-[#222222]">
      {mode !== 'text' && (
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-4 p-4">
          <div className="relative rounded-lg overflow-hidden bg-black/30">
            <video
              ref={videoRef}
              autoPlay
              muted
              playsInline
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 text-white bg-black/50 px-3 py-1 rounded-full">
              You
            </div>
          </div>
          <div className="relative rounded-lg overflow-hidden bg-black/30">
            <video
              ref={remoteVideoRef}
              autoPlay
              playsInline
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 text-white bg-black/50 px-3 py-1 rounded-full">
              Stranger
            </div>
          </div>
        </div>
      )}

      {mode === 'text' && (
        <div className="flex-1 p-4">
          <ChatBox isOpen={true} />
        </div>
      )}

      <Controls
        isMuted={isMuted}
        isVideoOff={isVideoOff}
        isChatOpen={isChatOpen}
        onToggleMute={toggleMute}
        onToggleVideo={toggleVideo}
        onToggleChat={toggleChat}
        onDisconnect={handleDisconnect}
        mode={mode}
        isConnected={isConnected}
      />
    </div>
  );
}