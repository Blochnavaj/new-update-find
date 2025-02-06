import { useState } from 'react';
import styles from './AIChatInputField.module.scss';
import './../../../index.css';
import userIcon from './../../../assets/userChat.png';
import aiIcon from './../../../assets/AIChat.png';
import initial from './../../../assets/initialai.png'

type AIChatInputFieldProps = {
  message: string;
  user: string;
};

type ChatData = {
  chats?: AIChatInputFieldProps[]; // Default empty array
  questions?: string[];
};

const AIChatInputField = ({ questions = [] }: ChatData) => {
  // State to handle chat messages
  const [chatHistory, setChatHistory] = useState<AIChatInputFieldProps[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Function to handle message sending
  const handleSendMessage = () => {
    if (!inputValue.trim()) return; // Prevent empty messages

    // Add user message
    const newMessage = { user: 'You', message: inputValue };
    setChatHistory((prev) => [...prev, newMessage]);

    // Clear input field and set loading state
    setInputValue('');
    setIsLoading(true);

    // Simulate AI response delay
    setTimeout(() => {
      const aiResponse = { user: 'AI', message: 'This is a sample AI response.' };
      setChatHistory((prev) => [...prev, aiResponse]);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className={styles.input}>
      {/* Chat History */}
      {chatHistory.length === 0 && (
        <div className="flex w-full my-[80px] md:my-[111px] justify-center">
          <img className='w-[180px] md:w-[242px]' src={initial} />
        </div>
      )}
      {chatHistory.map((chat, index) => (
        <div key={index} className="flex mb-[30px]">
          <img className="h-[35px]" src={chat.user === 'You' ? userIcon : aiIcon} alt={chat.user} />
          <div className="ml-[15px]">
            <h1 className="text-[16px] md:text-[18px] font-semibold text-[#1f2937]">{chat.user}</h1>
            <p className="mt-[10px] text-[14px] md:text-[16px] font-normal text-[#1f2937]">{chat.message}</p>
          </div>
        </div>
      ))}

      {/* AI Response Loading State */}
      {isLoading && (
        <div className="flex mb-[30px]">
          <img className="h-[35px]" src={aiIcon} alt="AI" />
          <div className="ml-[15px]">
            <h1 className="text-[18px] font-semibold">AI</h1>
            <p className="mt-[10px] text-[16px] font-normal text-gray-500 italic">Typing...</p>
          </div>
        </div>
      )}

      {/* Suggested Questions */}
      <div className={styles.questions}>
        {questions.map((question, index) => (
          <div key={index} className={styles.ques} onClick={() => setInputValue(question)}>
            {question}
          </div>
        ))}
      </div>

      {/* Input Field */}
      <textarea
        placeholder="Your message..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      {/* Send Button */}
      <button className={styles.sendButton} onClick={handleSendMessage} disabled={isLoading}>
        Send
      </button>
    </div>
  );
};

export default AIChatInputField;
