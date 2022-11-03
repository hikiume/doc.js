import React, { useRef } from "react";

const ChatInput: React.FC<{ sendMessage: (content: string) => void }> = ({
  sendMessage,
}) => {
  const contentRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    if (contentRef.current) {
      const content = contentRef.current.value.trim();
      if (content) {
        sendMessage(content);
      }
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <input type="text" name="content" ref={contentRef} />
      <button type="submit">Send</button>
    </form>
  );
};

export default ChatInput;
