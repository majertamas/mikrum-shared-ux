import {NgModule} from '@angular/core';
import {BasicInputsComponent} from './basic-inputs.component';
import {BeerComponent} from './beer/beer.component';
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    BasicInputsComponent,
    BeerComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    BasicInputsComponent,
    BeerComponent
  ]
})
export class BasicInputsModule {
}
