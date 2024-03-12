import { Component } from '@angular/core';

interface Baustoffhändler {
  logo: string;
  name: string;
  adress: string;
  tel: string;
  product_name: string;
};

interface Handwerker {
  logo: string;
  name: string;
  adress: string;
  tel: string;
  product_name: string;
};
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  items: Baustoffhändler[];
  handwerker: Handwerker[];

  public constructor(){
    this.items = [
      {logo: "https://www.designtagebuch.de/wp-content/uploads/mediathek//2021/04/raab-karcher-logo.jpg", name: "RAAB KARCHER", adress:"Merkurstraße 39, 67663 Kaiserslautern", tel:"0631 5 34 30", product_name:"Ziegel"},
      {logo: "https://tse3.mm.bing.net/th?id=OIP.n_R8v2CwWRawt-FcoGdSJgAAAA&pid=Api&P=0&h=180", name: "WEGO Kaiserslautern", adress:"Merkurstraße 33, 67663 Kaiserslautern", tel:"0631 5 34 30", product_name:"Ziegel"},
      {logo: "https://tse3.mm.bing.net/th?id=OIP.eazMVopEqR-3CTnYCLBuVwHaCG&pid=Api&P=0&h=180", name: "Hubing GmbH", adress:"Hauptstr. 14, 67697 Otterberg", tel:"06301 20 26", product_name:"Ziegel"},
      {logo: "https://tse2.mm.bing.net/th?id=OIP.XO7jqrrWwLWO9HNq2xud9AHaBp&pid=Api&P=0&h=180", name: "Breco GmbH", adress:"Gewerbestr. 12, 67697 Otterberg", tel:"06301 10 45", product_name:"Ziegel"}
    ];
    this.handwerker = [
      {logo: "https://tse3.mm.bing.net/th?id=OIP.GLd703di2IXEfIT6TSEkmwHaCv&pid=Api&P=0&h=180", name: "GGS", adress:"Mainzerstraße 27, 67657 Kaiserslautern", tel:"0631 3 60 86 80", product_name:"Ziegel"},
      {logo: "https://tse3.mm.bing.net/th?id=OIP.Gvk8Jsk6fcvntGC5mGs8LQHaHa&pid=Api&P=0&h=180", name: "Rose A.", adress:"Rostockerstraße 58, 67663 Kaiserslautern", tel:"0162 2 79 13 79", product_name:"Ziegel"},
      {logo: "https://tse4.mm.bing.net/th?id=OIP.TLm50CAwI-pS0H9AsARw1QHaCx&pid=Api&P=0&h=180", name: "Handwerker Service 24", adress:"Bismarckstraße 1, 68161 Mannheim", tel:"0162 2 79 13 79", product_name:"Ziegel"},
      {logo: "https://tse2.mm.bing.net/th?id=OIP.KN77yWC1SrXaYK8C9w2XogHaBP&pid=Api&P=0&h=180", name: "HORNBACH Kaiserslautern", adress:"Mainzer Straße 33, 67657 Kaiserslautern", tel:"0631 34 17 00", product_name:"Ziegel"}
    ];
  }
}
