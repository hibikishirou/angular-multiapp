import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class CreateDataModule { }

@NgModule({})
export class CreateDataSharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CreateDataModule,
      providers: []
    };
  }
}
