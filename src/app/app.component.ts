import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projetv1';
  activate(event) {
      if (event.target.nextSibling.classList.contains('dropdowns') || event.target.nextSibling.classList.contains('user-setting')) {
        event.target.nextSibling.classList.toggle('active');
    }
  }
   activeParam(event) {
    const c = document.querySelector('.side-panel');
    c.classList.toggle('active');
  }
  activeChat(event) {
    const c = document.querySelector('.chat-box');
    c.classList.toggle('show');

  }
  activePost(event) {
   const c = document.querySelector('.postoverlay');
   c.classList.toggle('display-post');


  }
}
