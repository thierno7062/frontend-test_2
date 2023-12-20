import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, PopoverController } from '@ionic/angular';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  @ViewChild('new_chat') modal: ModalController;
  @ViewChild('popover') popover: PopoverController;
segment: any;
open_new_chat = false;
// users: Observable<any[]>;
users= [
  {id: 1, name: 'Thierno', photo: 'https://i.pravatar.cc/315'},
  {id: 1, name: 'Modou', photo: 'https://i.pravatar.cc/325'}
];
chatRooms= [
  {id: 1, name: 'Thierno Niang', photo: 'https://i.pravatar.cc/315'},
  {id: 1, name: 'Modou Ndiaye', photo: 'https://i.pravatar.cc/325'}
];



  constructor(
    private router: Router,
  ) {}

  ngOnInit() {
  }

  logout(){
    this.popover.dismiss();
  }

  segmentChanged(event: any){

  }
  newChat(){
    this.open_new_chat = true;
  }
  cancel(){
    this.modal.dismiss();
    this.open_new_chat= false;
  }
  onWillDismiss(even: any){}

  startChat(item){}

  getChat(item) {
    this.router.navigate(['/', 'home', 'chats', item?.id]);
  }

}
