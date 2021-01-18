import { BrowserModule } from '@angular/platform-browser';
/** El LOCALE_ID provee un token que
 * setea la localción de la aplicación
 * el cual debe ser adicionado dentro de los providers
 * y afecta el lenguaje de ciertos pipes
 */
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import localeBr from '@angular/common/locales/pt';

/** Se debe llamar a esta función la cual
 * maneja uns egundo parametro opcional 
 * que no es necesario.*/
registerLocaleData(localeEs);
registerLocaleData(localeBr);

import { AppComponent } from './app.component';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { ContrasenaPipe } from './pipes/contrasena.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe,
    DomseguroPipe,
    ContrasenaPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
