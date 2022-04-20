
const COLORS = {
  bicho: '#3ca151',
  siniestro: '#5b597e',
  dragon: '#45919e',
  electrico: '#faff6c',
  hada: '#f61267',
  lucha: '#f86635',
  fuego: '#e7273a',
  volador: '#9ab8d2',
  fantasma: '#916694',
  planta: '#25d451',
  tierra: '#b0742c',
  hielo: '#d8f6fe',
  normal: '#d49eac',
  veneno: '#a16ae2',
  psiquico: '#a92d6b',
  roca: '#903f21',
  acero: '#5d7d70',
  agua: '#83a9fe'
}

function color(type) {
  return COLORS[type];
}


export default color;
