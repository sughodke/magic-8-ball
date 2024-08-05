import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter,
  IonFooter
} from '@ionic/react';
import MessageList from '../components/MessageList';
import ChatInput from '../components/ChatInput';
import getAnswer from '../data/magic';

const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);

  const handleSendMessage = (message: string) => {
    setMessages([...messages, message]);

    const resp = getAnswer(message);
    setMessages([...messages, message, resp]);
  };

  const getResponse = (resp: string) => {
    setTimeout(() => {
      setMessages([...messages, resp]);
    }, 300);
  };

  return (
    <IonPage id="chat-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Magic 8 Ball</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <MessageList messages={messages} />
      </IonContent>
      <IonFooter collapse="fade" className="ion-padding">
          <ChatInput onSendMessage={handleSendMessage} />
      </IonFooter>
    </IonPage>
  );
};

export default ChatPage;
