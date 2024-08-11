import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonCard, IonCardContent, IonCardTitle, IonCardHeader],
})
export class ProductCardComponent  implements OnInit {

  product: any = {
    title: 'BIG NEW YORKER BACON & BANANA PEPPERS',
    description: 'Es una pizza de gran tamaño, inspitada al estilo New York con reabanadas grandes, de pepperoni y trocitos de bacon, con abundante rebanadas de chile banana peppers de sabor suave con toque ácido, con una mezcla de orégano y queso parmesno sobre los ingredientes y mantequilla de ajo a la orilla. ',
    price: 329.00, 
    image: 'https://th.bing.com/th/id/OIG2.zwLHbSRgzwN.SRHsit2q?pid=ImgGn'
  };


cantidad: number = 1;

  constructor(private alertController: AlertController) { }

  incrementarCantidad() {
    this.cantidad++;
    this.actualizarPrecio();
  }

  decrementarCantidad() {
    if (this.cantidad > 1) {
      this.cantidad--;
      this.actualizarPrecio();
    }
  }

  async ordenProduct() {
    const alert = await this.alertController.create({
      header: 'Orden',
      message: 'Ha agregado correctamente el producto a su carrito',
      buttons: ['Aceptar'],
    });

    await alert.present();
  }

  actualizarPrecio() {
    const precioBase = 329.00;
    this.product.price = precioBase * this.cantidad;
  }


  ngOnInit() {}

}
