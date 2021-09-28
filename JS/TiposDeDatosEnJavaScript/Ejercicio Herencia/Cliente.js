class Cliente extends Personas{
    static contadorClientes = 0;

    contructor(fechaRegistro){
        this._idCliente = ++ Empleado.contadorClientes;
        this._fechaRegistro = fechaRegistro;
    }

    get idCliente(){
        return this._idCliente;
    }
    get fechaRegistro(){
        return this._fechaRegistro;
    }

    
    set idCliente(idCliente){
        this._idCliente = idCliente;
    }
    set fechaRegistro(fechaRegistro){
        this._fechaRegistro = fechaRegistro;
    }

    toString(){
        return super.toString() + " " + this.idCliente + " " + this._fechaRegistro;
    }
}