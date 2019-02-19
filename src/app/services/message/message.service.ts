import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  constructor() {}

  messagesArray: Array<string> = [];

  add(message: string) {
    this.messagesArray.push(message);
  }

  clear() {
    this.messagesArray = [];
  }
}
