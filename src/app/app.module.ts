import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { MenubarModule } from 'primeng/menubar';
import { HeaderComponent } from './header/header.component';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import {ButtonModule} from 'primeng/button';
import { SidebarComponent } from './sidebar/sidebar.component';
import {PanelModule} from 'primeng/panel';
import {CardModule} from 'primeng/card';
import {SidebarModule} from 'primeng/sidebar';
import { AdvertisingComponent } from './advertising/advertising.component';
import { InputNumberModule } from 'primeng/inputnumber';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DachdaemmungComponent } from './dachdaemmung/dachdaemmung.component';
import { FassadeDaemmungComponent } from './fassade-daemmung/fassade-daemmung.component';
import { DachComponent } from './dach/dach.component';
import { ZiegelComponent } from './ziegel/ziegel.component';
import { DachbodenDaemmungArtikelComponent } from './dachboden-daemmung-artikel/dachboden-daemmung-artikel.component';
import { OrtgangziegelArtikelComponent } from './ortgangziegel-artikel/ortgangziegel-artikel.component';
import { SteildachDaemmungArtikelComponent } from './steildach-daemmung-artikel/steildach-daemmung-artikel.component';
import { FirstziegelArtikelComponent } from './firstziegel-artikel/firstziegel-artikel.component';
import { DachbahnenComponent } from './dachbahnen/dachbahnen.component';
import { DachfensterComponent } from './dachfenster/dachfenster.component';
import { SchieferComponent } from './schiefer/schiefer.component';
import { SliderModule } from 'primeng/slider';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    SidebarComponent,
    AdvertisingComponent,
    DachdaemmungComponent,
    FassadeDaemmungComponent,
    DachComponent,
    ZiegelComponent,
    DachbodenDaemmungArtikelComponent,
    OrtgangziegelArtikelComponent,
    SteildachDaemmungArtikelComponent,
    FirstziegelArtikelComponent,
    DachbahnenComponent,
    DachfensterComponent,
    SchieferComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MenubarModule,
    InputTextModule,
    IconFieldModule,
    InputIconModule,
    ButtonModule,
    PanelModule,
    CardModule,
    SidebarModule,
    InputNumberModule,
    BrowserAnimationsModule,
    SliderModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
]
})
export class AppModule { }
