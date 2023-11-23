export interface Chat {
  chatId: number;
  title: string;
  messages: Message[];
}

export interface Message {
  sender: "user" | "system";
  content: string;
}
