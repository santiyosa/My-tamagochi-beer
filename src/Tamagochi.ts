const btnbeer: HTMLInputElement = document.querySelector('#imgbear')!;
const btnpizza: HTMLInputElement = document.querySelector('#imgpizza')!;
const hidratacionSpan: HTMLElement = document.querySelector('#valorHidratacion')!;
const hambreSpan: HTMLElement = document.querySelector('#valorHambre')!;
const VidaSpan: HTMLElement = document.querySelector('#valorVida')!;
const Expecvida: HTMLElement = document.querySelector('#valorExpectativa')!;

let hidratacion: number = 300;
let hambre: number = 300;
let totalAlimento: number = 0; 
let porcentajeVida: number = 0; hambre+hidratacion;
let vida: number = 100;
let contHambre: number = 0;
let conthid: number = 0;
let constExpectativaVida : number = 0;
totalAlimento = hidratacion + hambre;


//Disminuye la variable de hambre y de hidratación
const controlVida = () => {
  porcentajeVida = hambre+hidratacion;
  hidratacion = hidratacion - 5;
  hambre = hambre - 7;
  constExpectativaVida++;
  // Controlar que al imprimir no se muestren números mayores de 100 o numeros negativos
  hidratacion = Math.max(0, Math.min(hidratacion, 300));
  hambre = Math.max(0, Math.min(hambre, 300));

  hidratacionSpan.textContent = hidratacion.toString();
  hambreSpan.textContent = hambre.toString();
  VidaSpan.textContent = vida.toString();

  if (hambre <= 30 && contHambre <= 0) {
    alert("Tengo mucha hambre, dame pizza");
    contHambre++;
  }

  if (hidratacion <= 30 && conthid <= 0) {
    alert("Tengo mucha sed, dame una polita");
    conthid++;
  }  
  VidaSpan.textContent = ((porcentajeVida/600)*100).toFixed(0).toString() + '%';
  Expecvida.textContent = (constExpectativaVida).toString()+ " Años.";

  if (hidratacion <= 0 && hambre <= 0) {
    VidaSpan.textContent = '0%';
    clearInterval(intervalId);
    alert('¡Me dejaste morir!\n Al menos recuérdame: \n Desde el más alla: ' + tamagotchiName);
  }
}

// Intervalo de tiempo en el que se ejecuta la función de desminuir valores
const intervalId = setInterval(controlVida, 2000);

//Recibe el evento de la imagen cerveza para sumar en el hambre
btnbeer.addEventListener('click', () => {
  hidratacion += 5;
  hidratacionSpan.textContent = hidratacion.toString();
  conthid = 0;
});

//Recibe el evento de la imagen pizza para sumar en la hidratación
btnpizza.addEventListener('click', () => {
  hambre += 7;
  hambreSpan.textContent = hambre.toString();
  contHambre = 0;
});

let tamagotchiName: string | null = prompt("Ingresa un nombre para tu tamagochi:", "");
if (tamagotchiName === null || tamagotchiName.replace(/\s/g, '') === "") {
  tamagotchiName = "John Doe";
}
document.querySelector("#name")!.textContent = tamagotchiName;