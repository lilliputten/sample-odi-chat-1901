import React from 'react';
import { Controller, IController, Get, Autowired } from 'odi';
import { ChatPage } from '../../views/page.view';
import HistoryService  from '../../src/services/history';

@Controller()
export default class RenderController extends IController {

  @Autowired()
  history: HistoryService;

  @Get index() {
    return <ChatPage history={this.history.getMessages()} />;
  }

}