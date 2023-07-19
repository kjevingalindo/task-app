import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { CustonInputComponent } from './components/custon-input/custon-input.component';
import { LogoComponent } from './components/logo/logo.component';



@NgModule({
  declarations: [
    HeaderComponent,
    CustonInputComponent,
    LogoComponent
  ],
  exports: [
    HeaderComponent,
    CustonInputComponent,
    LogoComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class SharedModule { }
