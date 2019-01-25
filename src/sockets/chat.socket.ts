import { Socket, OnEvent, ISocket, Autowired } from 'odi';
import HistoryService, { Message } from '../services/history';

@Socket('chat')
export default class ChatSocket extends ISocket {

  @Autowired()
  history: HistoryService;

  @OnEvent('message:send')
  onmessage(message: Message) {
    this.history.addMessage(message);
    this.emit('message:new', message);
  }

}
