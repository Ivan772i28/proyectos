let v=parseInt(prompt("ingresa un valor del 1 al 5"))
let r=devolver(v)
function devolver() {
   switch (v) {
    case 1:
        document.write("uno")
        break;
        case 2:
        document.write("dos")
        break;
        case 3:
        document.write("tres")
        break;
        case 4:
        document.write("cuatro")
        break;
        case 5:
        document.write("cinco")
        break;
   
    default:
        document.write("valor no admitido")
        break;
   }

    
}