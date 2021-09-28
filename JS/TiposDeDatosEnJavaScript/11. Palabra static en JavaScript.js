/* ----------------------------------------------Static ------------------------------------------------------------------- */
class Persona{ 

    //Atributos staticos
    static contadorObjetosPersonas = 5;//Los atributos static se asocian con la clase (plantilla)


    //Atributos no static
    email = 'miemail@mail.com'; //Los atributos no static, se asocian a traves de los objetos


    constructor(nombre, apellido){ 
        this._nombre = nombre; 
        this._apellido = apellido;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    nombreCompleto(){ 
        return this.nombre + " " + this.apellido;
    }

    static saludar(){//Un metodo static se asocia solo con esta clase y no con los objetos que se creen a partil de ella
        console.log('Saludos desde el metodo static');
    }

    //Pero si se puede crear un metodo que reciba como argumento un objeto, en este caso que muestre el valor del atributo nombre de ese objeto  
    static saludar2(persona){
        console.log('Hola ' + persona.nombre);
    }
}

let personax = new Persona('Juan', 'Perez');
//personax.saludar();   No es posible llamar un metodo static desde un objeto

Persona.saludar(); //El metodo static solo podra ser llamado desde la clase

Persona.saludar2(personax); //El metodo estatico recibe como argumento el objeto que se creo y muestra el valor del atributo nombre

//El metodo static no puede ser utilizado por un objeto, pero si por una clase hija, static siempre se relaciona con clases y no con objetos.


/* ----------------------------------------------------Atributos estaticos ---------------------------------------------- */
//Una vez definida el atributo static en la clase, lo llamamos a travez de la clase y no desde el objero, al igual que con el metododo static
console.log(Persona.contadorObjetosPersonas);

/* ----------------------------------------------------Atributos no estaticos ---------------------------------------------- */
//Una vez definida el atributo no static en la clase, lo llamamos a traves del objeto y no desde la clase.
console.log(personax.email);
