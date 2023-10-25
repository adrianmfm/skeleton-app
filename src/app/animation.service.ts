import { Injectable } from '@angular/core';
import { AnimationController } from '@ionic/angular';
import { Animation } from '@ionic/angular';
import { ElementRef } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AnimationService {
  constructor(private animationCtrl: AnimationController) {}

  createShakeAnimation(element: ElementRef) {
    const inputElement = element.nativeElement as HTMLIonInputElement;

    const animation = this.animationCtrl
      .create()
      .addElement(inputElement)
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

    return this.animationCtrl.create().addAnimation([animation]);
  }
}
