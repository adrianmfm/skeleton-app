import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.page.html',
  styleUrls: ['./experiencia-laboral.page.scss'],
})
export class ExperienciaLaboralPage implements OnInit {
  data: any = {
    empresa: '',
    fechaInicio: '',
    trabajoActual: '',
    fechaTermino: '',
    cargo: '',

  }
  trabajaActual: boolean = true;


  constructor(private router: Router, public alertController: AlertController,private modalController: ModalController) { }

  ngOnInit() {
  }

  mostrar() {
    let trabajaActualTexto = '';

    const botonSi = document.querySelector('.boton-si') as HTMLIonCheckboxElement;
    const botonNo = document.querySelector('.boton-no') as HTMLIonCheckboxElement;

    if (botonSi.checked) {
      trabajaActualTexto = 'Sí';
    } else if (botonNo.checked) {
      trabajaActualTexto = 'No';
    }

    this.presentAlert(
      'Datos',
      `Empresa: ${this.data.empresa}\n
      Fecha ingreso: ${this.data.fechaInicio}\n
      ¿Actualmente trabaja aquí? ${trabajaActualTexto}
      Fecha término: ${this.data.fechaTermino}
      Cargo: ${this.data.cargo}`
    );
  }



  async presentAlert(titulo: string, message: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: message,
      buttons: ['OK'],
    });

    await alert.present();

  }


}
