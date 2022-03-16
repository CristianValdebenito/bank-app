
class UserValidations {
    constructor(){}
    validate(form) {
        let globalUser =[]
        let globalObject = null;
        let globalRut = null;
        let globalName = null;
        //var globalUser = null
        globalName = Object.keys(form).map(inputName => { 
        
            if(inputName === 'rut') {
                const isValidRut = this.validateRut(form[inputName][0])
                globalRut = Object.values(isValidRut)
                globalUser.push(globalRut[1]);
            }
            if(inputName === 'userName') {
                const isValidName = this.validateName(form[inputName][0])
                globalName = Object.values(isValidName)
                //console.log(globalName,"globalname")
                globalUser.push(globalName[1]);
                //console.log(globalUser,"globaluser")
            }
          //console.log(globalUser),"retorno")
           return globalUser

        })
       //console.log(globalName[0],"globalName")
        return globalName
        
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
                err: ''
            }
        }
    }

    /*minCharacters(string) {
        if(string.length < 3) {
            return 'Debe tener mínimo 3 caracteres'
        } else {
            return ''
        }
    }*/

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
                err: '',
            }
        }

    }
}

export default UserValidations;