import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LoggerService {

  constructor() {
    debugger;
    //some logic
  }

  messages: string[] = [];

  log(message: string) {
    debugger;
    this.messages.push(message);
  }
}
