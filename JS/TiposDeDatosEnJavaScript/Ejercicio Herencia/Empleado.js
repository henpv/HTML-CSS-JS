class Empleado extends Persona{
    static contadorEmpleados = 0;

    contructor(sueldo){
        this._idEmpleado = ++ Empleado.contadorEmpleados;
        this._sueldo = sueldo;
    }

    get idEmpleado(){
        return this._idEmpleado;
    }
    get sueldo(){
        return this._sueldo;
    }

    
    set idEmpleado(idEmpleado){
        this._idEmpleado = idEmpleado;
    }
    set sueldo(sueldo){
        this._sueldo = sueldo;
    }

    toString(){
        return super.toString() + " " + this.idEmpleado + " " + this._sueldo;
    }

}