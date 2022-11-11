/**
* Esta es una forma (1). Crear funciones que realizan una solicitud HTTP para luego solo utilizarla
* Entonces se puede llamar a esta función desde varios archivos solo utilizando la palabra reservada 'await'
* la cual solo se puede usar en funciones async. Ver ejemplo en HomeView
*/
import axios from 'axios';

export function getProducto(url) {
    return axios.get(url).then(res => { return res.data });
}