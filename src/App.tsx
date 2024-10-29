import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import VideoChat from './components/VideoChat';

type ChatMode = 'video' | 'voice' | 'text' | null;

function App() {
  const [chatMode, setChatMode] = useState<ChatMode>(null);

  const startChat = (mode: ChatMode) => {
    setChatMode(mode);
  };

  const endChat = () => {
    setChatMode(null);
  };

  return (
    <div className="h-screen">
      {chatMode ? (
        <VideoChat onDisconnect={endChat} mode={chatMode} />
      ) : (
        <LandingPage onStart={startChat} />
      )}
    </div>
  );
}

export default App;