/**
 *  Estructura de control Switch
 * 
 *  Sintaxis:
 *      Swicth(elemento a evaluar){
 *          case 'valor':
 *                  codigo
 *                  break;
 *          case 'valor':
 *                  codigo
 *                  break;
 *          case 'valor':
 *                  codigo
 *                  break;
 *          default:
 *              codigo
 *              break; 
 *      }
 */

const metodoPago = 'vale de despensa';

switch (metodoPago) {
    case 'efectivo':
        console.log('Metodo de pago en efectivo aprobado');
        break;
    case 'tarjeta':
        console.log('Pago con tarjeta aprobado')
        break;
    case 'cheque':
        console.log('Pago con cheque aprobado')
        break;
    default:
        console.log('Metodo de pago NO soportado')
        break;
}