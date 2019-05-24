import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CoreRoutingModule } from './core-routing.module';
import { EnsureModuleLoadedOnceGuard } from './ensureModuleLoadedOnceGuard';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { SharedModule } from '../shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { AuthenticationService } from './authentication/authentication.service';

@NgModule({
  declarations: [MainLayoutComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    CoreRoutingModule,
    SharedModule
  ],
  providers: [AuthenticationService]

})
export class CoreModule extends EnsureModuleLoadedOnceGuard {
  // Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }
 }
