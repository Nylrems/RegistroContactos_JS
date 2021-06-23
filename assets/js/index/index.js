function Validate(){ //Esta es la función para validar que se ha puesto el nombre

    let isValid = true;

    //Validar el nombre
    const inputName = document.getElementById("name"); 
    const valueName = inputName.value;

    if(valueName == "" || valueName == null || valueName == undefined){
        isValid = false;
    }


    const inputPhone = document.getElementById("phone"); 
    const valuePhone = inputPhone.value;

    if(valuePhone == "" || valuePhone == null || valuePhone == undefined){
        isValid = false;
    }

}