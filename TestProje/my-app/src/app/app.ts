import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  template: `

  <h1>Kredi Hesaplama</h1>
  <div>
    <label>Kredi Tutarı</label>
    <input [(ngModel)]="krediTutari">
  </div>
  <div>
    <label>Taksit Sayisi</label>
    <select [(ngModel)]="taksitSayisi">
      @for (item of taksitler; track item) {
        <option>{{item}}</option>
      }
    </select>
  </div>
  <div>
    <button (click)="hesapla()">Hesapla</button>
  </div>
  <hr>
  <h1>{{result}}</h1>
  <hr>
  <table>
    <thead>
      <tr>
        <th>Taksit</th>
        <th>Taksit Tutarı</th>
        <th>Kalan Geri Ödeme</th>
      </tr>
    </thead>
    <tbody>
      @for(item of odemePlani;track item){
        <tr>
          <td>{{$index + 1}}</td>
          <td>{{item.taksitTutari}}</td>
          <td>{{item.kalanGeriOdeme}}</td>
        </tr>
      }
    </tbody>
  </table>

  `,
  styleUrl: './app.css'
})
export class App {
  krediTutari: number = 0;
  taksitler: number[] = [3, 6, 12, 18];
  taksitSayisi: number = 3;
  result: string = "";

  odemePlani: { taksitTutari: number, kalanGeriOdeme: number }[] = [];

  hesapla() 
  {
    const taksitTutari = (this.krediTutari / this.taksitSayisi) * 1.29;
    let toplamGeriOdeme = taksitTutari * this.taksitSayisi;
    this.result = `Taksit Tutarı: ${taksitTutari} - Taksit Sayısı: ${this.taksitSayisi} - Toplam Geri Ödeme: ${toplamGeriOdeme}`
    this.odemePlani = [];
    for (let i = 0; i < this.taksitSayisi; i++) {
      toplamGeriOdeme -= taksitTutari;
      const data = {
        taksitTutari:taksitTutari,
        kalanGeriOdeme:toplamGeriOdeme
      }
      this.odemePlani.push(data);
    }
  }

}
