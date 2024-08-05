import React, { useState } from 'react';
import { IonFooter, IonToolbar, IonInput, IonButton } from '@ionic/react';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage }) => {
  const [text, setText] = useState('');

  const handleSend = () => {
    if (text.trim() !== '') {
      onSendMessage(text);
      setText('');
    }
  };

  return (
    <>
      <IonToolbar>
        <IonInput
         fill="outline"
          value={text}
          placeholder="Ask your question"
          onIonChange={(e) => setText(e.detail.value!)}
          clearInput
        />
        <IonButton expand="block" onClick={handleSend}>Send</IonButton>
      </IonToolbar>
    </>
  );
};

export default ChatInput;
