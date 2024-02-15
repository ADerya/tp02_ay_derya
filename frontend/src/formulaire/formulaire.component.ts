import { Component, OnInit, ViewChild } from '@angular/core';
import intlTelInput from 'intl-tel-input';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Client } from '../class/client';
import { RecapitulatifComponent } from '../recapitulatif/recapitulatif.component';



@Component({
  selector: 'app-formulaire',
  standalone: true,
  imports: [FormsModule, CommonModule, RecapitulatifComponent],
  templateUrl: './formulaire.component.html',
  styleUrl: './formulaire.component.css'
})
export class FormulaireComponent implements OnInit {
  @ViewChild('myForm') myForm: any;
  title : string = "Composant initialisé";
  civilite: string = "";
  nom: string = "";
  prenom: string = "";
  email: string = "";
  tel : string = "";
  adresse: string = "";
  codepostal: string = "";
  ville: string = "";
  pays: string = "";
  login: string = "";
  password: string = "";
  password2: string = "";
  error : string = "";
  errorMdp : string = "";
  isEmailValid: boolean = true;
  formIsValid : boolean = false;
  cacher : boolean = true;

  civiliteInvalide : boolean = false;
  nomInvalide : boolean = false;
  prenomInvalide : boolean = false;
  emailInvalide : boolean = false;
  telInvalide : boolean = false;
  adresseInvalide : boolean = false;
  codepostalInvalide : boolean = false;
  villeInvalide : boolean = false;
  paysInvalide : boolean = false;
  loginInvalide : boolean = false;
  passwordInvalide : boolean = false;
  password2Invalide : boolean = false;

  client !: Client;

  ngOnInit(): void {
    this.title = "Formulaire de contact";
    console.log(this.title);
    const inputElement = document.querySelector('#phone');
    if(inputElement) {
         intlTelInput(inputElement, {
           utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@19.2.19/build/js/utils.js"
         });
         }
  }

  convertirEnMajuscules(champ: string) {
    if (this[champ] && typeof this[champ] === 'string') {
      this[champ] = this[champ].toUpperCase();
    }
  }

  convertirEnPascalCase(champ: string) {
    if (this[champ] && typeof this[champ] === 'string') {
      this[champ] = this[champ].charAt(0).toUpperCase() + this[champ].slice(1);
    }
  }

  validateEmail() {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    this.isEmailValid = emailRegex.test(this.email);
  }


  verifierChampModifie(nomChamp: any) {
    const nomVariableInvalidite = nomChamp + 'Invalide';
    this[nomVariableInvalidite] = !this.verifierChamp(this[nomChamp]);

    if(nomChamp === 'nom' || nomChamp === 'pays'){
      this.convertirEnMajuscules(nomChamp);
    } 
    if(nomChamp === 'prenom' || nomChamp === 'ville'){
      this.convertirEnPascalCase(nomChamp);
    }
    if(nomChamp === 'email'){
      this.validateEmail();
    }
    if(nomChamp === 'password' || nomChamp === 'password2'){
      this[nomVariableInvalidite] = !this.verifierMotDePasse(this[nomChamp]);
      if(nomChamp === 'password2'){
        this.verifierMotDePasseIdentique('password2', 'password');
      }
    } 
  }

  verifierMotDePasse(motDePasse: string): boolean {
    const longueurMinimum = 8;
    const expressionReguliere = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    this.errorMdp = "Les mots de passes doivent contenir minumum 8 caractères avec une majuscule, une minuscule, un chiffre et un caractère spécial."
    return motDePasse !== undefined && motDePasse !== null && motDePasse.length >= longueurMinimum && expressionReguliere.test(motDePasse);
  }

  verifierMotDePasseIdentique(password2: string, password: string) {
    if(this[password2] !== this[password] ){
      this.formIsValid = false;
      this.errorMdp = "Les mots de passe ne correspondent pas. ";
    }else {
      this.formIsValid = true;
      this.errorMdp = "";
    }
  }

  verifierChamp(champ: any): boolean {
    if (typeof champ === 'string') {
      return champ !== undefined && champ !== null && champ.trim() !== '';
    } else if (typeof champ === 'number') {
        return champ !== undefined && champ !== null;
    }
    return false;
  }

  verifierForm(){
    this.formIsValid = true;
    this.verifierChampModifie('civilite');
    this.verifierChampModifie('nom');
    this.verifierChampModifie('prenom');
    this.verifierChampModifie('email');
    this.verifierChampModifie('tel');
    this.verifierChampModifie('adresse');
    this.verifierChampModifie('codepostal');
    this.verifierChampModifie('ville');
    this.verifierChampModifie('pays');
    this.verifierChampModifie('login');
    this.verifierChampModifie('password');
    this.verifierChampModifie('password2');
    this.error = " ";


    this.verifierMotDePasseIdentique('password2', 'password');

    if(this.nomInvalide || this.prenomInvalide || this.emailInvalide || this.telInvalide || this.adresseInvalide || this.codepostalInvalide || this.villeInvalide || this.paysInvalide || this.loginInvalide || this.passwordInvalide || this.password2Invalide || this.civiliteInvalide){
      this.formIsValid = false;
      this.error = "Veuillez remplir tous les champs obligatoires. ";
    }else {
      this.formIsValid = true;
      this.error = "";
    }

    if(this.formIsValid == true){
      console.log("Formulaire valide");
      this.client = new Client(this.civilite, this.nom, this.prenom, this.email, this.tel, this.adresse, parseInt(this.codepostal), this.ville, this.pays, this.login, this.password, this.password2);
      this.cacher = false;
      this.resetFormulaire();
    }
  }

  [key: string]: any;

  resetFormulaire() {
    this.civilite = "";
    this.nom = "";
    this.prenom = "";
    this.email = "";
    this.tel = "";
    this.adresse = "";
    this.codepostal = "";
    this.ville = "";
    this.pays = "";
    this.login = "";
    this.password = "";
    this.password2 = "";
  }

  ngOnDestroy () {
    console.log("Le composant a été détruit");
  }
}