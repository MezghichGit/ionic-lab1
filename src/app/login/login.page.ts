import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  vlogin: string = "amine";
  vpwd: string = "1234";

  login: string;
  pwd: string;
  constructor(private router: Router, public toastController :ToastController ,public alertController: AlertController) { }

  ngOnInit() {
  }

  auth() {
    console.log(this.login + " " + this.pwd);
    //1- recupérer le login + password
    //2- redirection vers la page home

    if (this.login == this.vlogin && this.pwd == this.vpwd)
      this.router.navigate(["/home"]);
    else { // afficher un message d'alerte
      
      
      //this.presentAlert();
      this.presentToast()
      this.router.navigate(["login"]);
    }

  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Problème authentification',
      message: 'Login ou mot de passe invalides.',
      buttons: ['Return']
    });

    await alert.present();
  }


  async presentToast() {
    const toast = await this.toastController.create({
      message: 'LOGIN or PASSWORD invalid!!',
      duration: 2000,
      color: "danger",
    });
    toast.present();
  }

}
