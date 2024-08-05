import React from 'react';
import { IonList, IonItem, IonLabel, IonNote } from '@ionic/react';
import './MessageList.css';

interface MessageListProps {
  messages: string[];
}

const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  if (!messages || messages.length === 0) {
    return <p>No messages yet.</p>;
  }

  return (
    <IonList lines="full">
      {messages.map((message, index) => {
        const isUserMessage = index % 2 === 0;
        
        return (
        <IonItem key={index}>
          <IonLabel className="ion-text-wrap">{message}</IonLabel>
          <IonNote>{isUserMessage ? "User" : "8 Ball"}</IonNote>
        </IonItem>
      )})}
    </IonList>
  );
};

export default MessageList;
