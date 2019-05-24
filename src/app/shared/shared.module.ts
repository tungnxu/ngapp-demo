import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';

const exportComponent = [
  HeaderComponent, FooterComponent
];

@NgModule({
  declarations: [exportComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [exportComponent],
})
export class SharedModule { }
