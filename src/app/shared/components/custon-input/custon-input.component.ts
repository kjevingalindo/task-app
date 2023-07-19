import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-custon-input',
  templateUrl: './custon-input.component.html',
  styleUrls: ['./custon-input.component.scss'],
})
export class CustonInputComponent  implements OnInit {

  @Input() control: FormControl;
  @Input() label: string;
  @Input() icon: string;
  @Input() type: string;
  @Input() autocomplete: string;

  isPassword: boolean;
  hide: boolean=true;

  constructor() { }

  ngOnInit() {

    if(this.type == 'password') this.isPassword = true;

  }


  ShowOrHidePassword(){
    this.hide = !this.hide

    if(this.hide){
      this.type = 'password'
    }else{
      this.type = 'text'
    }
  }


}
