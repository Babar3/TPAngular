export class Animal {
    id?: number
    name: string;
    species: string;
    veterinarian: string;
    comment: string;
    email: string;
    phoneNumber: string;

    constructor(id, name, species, veterinarian, comment, email, phoneNumber) {
        this.id = id;
        this.name = name;
        this.species = species;
        this.veterinarian = veterinarian;
        this.comment = comment;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }

}
