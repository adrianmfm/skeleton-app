import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { AlertController, IonItem } from '@ionic/angular';
import { AnimationController } from '@ionic/angular';
import { AnimationService } from '../animation.service'; 
import { Animation } from '@ionic/angular';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private animation!: Animation;
  estadoAnimacion = '';
  dateFormControl = new FormControl();
  
  public usuario: string | null = localStorage.getItem("username");
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
  @ViewChildren(IonItem, { read: ElementRef }) cardElements!: QueryList<ElementRef<HTMLIonItemElement>>;

  constructor(
    public alertController: AlertController,
    private animationCtrl: AnimationController,
    private animationService: AnimationService,
    private router: Router
  ) {
  }

  limpiar() {
    for (const [key, value] of Object.entries(this.data)) {
      Object.defineProperty(this.data, key, { value: '' });
    }
  }

  startShakeAnimation() {
    

    for (const element of this.cardElements) {
      if (element) {
        const card = this.animationCtrl
          .create()
          .addElement(element.nativeElement)
          .duration(500)
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
    this.limpiar()
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
  navegar() {
    this.router.navigate(['/home/experiencia-laboral']);
    //evento cada vez que presiono el boton no router
  }
}
