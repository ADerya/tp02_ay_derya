export class Client {

    civilite !: string;
    nom !: string;
    prenom !: string;
    email !: string;
    tel !: string;
    adresse !: string;
    codepostal !: number;
    ville !: string;
    pays !: string;
    login !: string;
    password !: string;
    password2 !: string;

    constructor(civilite: string, nom: string, prenom: string, email: string, tel: string, adresse: string, codepostal: number, ville: string, pays: string, login: string, password: string, password2: string) {
        this.civilite = civilite;
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.tel = tel;
        this.adresse = adresse;
        this.codepostal = codepostal;
        this.ville = ville;
        this.pays = pays;
        this.login = login;
        this.password = password;
        this.password2 = password2;
    }
}
