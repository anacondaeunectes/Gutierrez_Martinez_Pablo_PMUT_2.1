import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular'

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private alertCtrl: AlertController) {}

  async presentInfo(){
    const alert = await this.alertCtrl.create({
      header:'Info',
      message: String('<b>VERSIÓN:</b><br>1.0.0 <br> <b>MÓDULO:</b><br> Programación  Multimedia y Dispositivos Móviles'),
      buttons:[
        {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }
      ]
    });

    await alert.present();
  }

}
