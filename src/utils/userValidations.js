
class UserValidations {
    constructor(){}
    validate(form) {
        let globalRut = null
        //var globalUser = null
        const varkey = Object.keys(form);
        const varmap = varkey.map(inputName => { 
            if(inputName === 'rut') {
                const isValidRut = this.validateRut(form[inputName][0])
                globalRut = Object.assign({},isValidRut)
                return isValidRut;
            }
        })
        return globalRut
    }

    validateName(name) {
        if(name === '') {
            return {
                status: false,
                err: 'Debe tener un nombre válido'
            }
        } 
        if(name.length < 3) {
            return {
                status: false,
                err: 'Debe tener mínimo 3 caracteres'
            }
        } else {
            return {
                status: true,
                err: 'Nombre valido'
            }
        }
    }

    minCharacters(string) {
        if(string.length < 3) {
            return 'Debe tener mínimo 3 caracteres'
        } else {
            return ''
        }
    }

    validateRut(name){
        
        if(name === ''){
            return {
                status: false,
                err: 'Debes ingresar un rut',
            }
        }
        if(!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(name)){
           

            return {
                status: false,
                err: 'Debes ingresar un rut correcto',
            } 
        } else {
            return {
                status: true,
                err: 'rut correcto',
            }
        }

    }
}

export default UserValidations;