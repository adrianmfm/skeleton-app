import { Component, ElementRef, ViewChildren, ViewChild } from '@angular/core';
import { QueryList } from '@angular/core';
import { Animation } from '@ionic/angular';
import { AnimationController, IonCard, IonInput } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { AnimationService } from '../animation.service'; // Asegúrate de tener la ruta correcta

@Component({
  selector: 'app-input',
  templateUrl: 'input.page.html',
})
export class InputPage {
  @ViewChildren(IonCard, { read: ElementRef }) cardElements!: QueryList<ElementRef<HTMLIonCardElement>>;

  private animation!: Animation;
  estadoAnimacion = '';
  usuario: string;
  niveles: any[] = [
    { id: 1, nivel: 'Basica Incompleta' },
    { id: 2, nivel: 'Basica Completa' },
    { id: 3, nivel: 'Media Incompleta' },
    { id: 4, nivel: 'Media Completa' },
    { id: 5, nivel: 'Media Incompleta' },
    { id: 6, nivel: 'Superior Completa' },
  ];
  data: any = {
    nombre: '',
    apellido: '',
    education: '',
    nacimiento: '',
  };
  @ViewChild('myInput', { static: false, read: IonInput }) myInput!: IonInput; // Cambia el tipo de ElementRef a IonInput

  constructor(
    private animationCtrl: AnimationController,
    private alertController: AlertController,
    private animationService: AnimationService
  ) {
    this.usuario = '';
  }

  startShakeAnimation() {
    const firstCardElement = this.cardElements.get(0);

    if (firstCardElement) {
      const card = this.animationCtrl
        .create()
        .addElement(firstCardElement.nativeElement)
        .duration(1000)
        .keyframes([
          { offset: 0, transform: 'translateX(0)' },
          { offset: 0.1, transform: 'translateX(-10px)' },
          { offset: 0.2, transform: 'translateX(10px)' },
          { offset: 0.3, transform: 'translateX(-10px)' },
          { offset: 0.4, transform: 'translateX(10px)' },
          { offset: 0.5, transform: 'translateX(-10px)' },
          { offset: 0.6, transform: 'translateX(10px)' },
          { offset: 0.7, transform: 'translateX(-10px)' },
          { offset: 0.8, transform: 'translateX(10px)' },
          { offset: 0.9, transform: 'translateX(-10px)' },
          { offset: 1, transform: 'translateX(0)' },
        ]);

      this.animation = this.animationCtrl.create().addAnimation([card]);
      this.animation.play();
    }
  }

  play() {
    this.animation.play();
  }

  limpiar() {
    for (const [key, value] of Object.entries(this.data)) {
      Object.defineProperty(this.data, key, { value: '' });
    }
  }

  mostrar() {
    (this.data.nombre !== '' && this.data.apellido !== '') &&
      this.presentAlert('Usuario', 'Su nombre es ' + this.data.nombre + ' ' + this.data.apellido);
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
