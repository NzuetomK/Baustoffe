import { FassadeDaemmungComponent } from './fassade-daemmung/fassade-daemmung.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DachdaemmungComponent } from './dachdaemmung/dachdaemmung.component';
import { DachComponent } from './dach/dach.component';
import { ZiegelComponent } from './ziegel/ziegel.component';
import { DachbodenDaemmungArtikelComponent } from './dachboden-daemmung-artikel/dachboden-daemmung-artikel.component';
import { SteildachDaemmungArtikelComponent } from './steildach-daemmung-artikel/steildach-daemmung-artikel.component';
import { FirstziegelArtikelComponent } from './firstziegel-artikel/firstziegel-artikel.component';
import { OrtgangziegelArtikelComponent } from './ortgangziegel-artikel/ortgangziegel-artikel.component';
import { DachbahnenComponent } from './dachbahnen/dachbahnen.component';
import { DachfensterComponent } from './dachfenster/dachfenster.component';
import { SchieferComponent } from './schiefer/schiefer.component';
import { BraasUnterkategorienComponent } from './braas-unterkategorien/braas-unterkategorien.component';
import { ProduktbeschreibungComponent } from './produktbeschreibung/produktbeschreibung.component';


const routes: Routes = [
  { path: 'dach', component: DachComponent },
  { path: 'dachdaemmung', component: DachdaemmungComponent },
  { path: 'ziegel', component: ZiegelComponent },
  { path: 'dachboden-daemmung-artikel', component: DachbodenDaemmungArtikelComponent },
  { path: 'steildach-daemmung-artikel', component: SteildachDaemmungArtikelComponent },
  { path: 'firstziegel-artikel', component: FirstziegelArtikelComponent },
  { path: 'ortgangziegel-artikel', component: OrtgangziegelArtikelComponent },
  { path: 'dachbahnen', component: DachbahnenComponent },
  { path: 'dachfenster', component: DachfensterComponent },
  { path: 'schiefer', component: SchieferComponent },
  { path: 'braas-unterkategorien', component: BraasUnterkategorienComponent },
  { path: 'produktbeschreibung', component: ProduktbeschreibungComponent}






];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
