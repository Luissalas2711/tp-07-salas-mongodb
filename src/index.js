const { crearServicioReserva } = require("./servicios/reservas");
const { crearControladorReservas } = require("./controladores/reservas");
const { crearApp } = require("./app");
const config = require("./config/entorno");

const reservasIniciales = [
  {
    id: 1,
    estudiante: "Juan Pérez",
    email: "juan.perez@example.com",
    sala: "Sala Norte",
    fecha: "2026-03-30",
    turno: "Mañana",
    personas: 2,
  },
  {
    id: 2,
    estudiante: "María Gómez",
    email: "maria.gomez@example.com",
    sala: "Sala Sur",
    fecha: "2026-03-30",
    turno: "Tarde",
    personas: 4,
  },
  {
    id: 3,
    estudiante: "Carlos López",
    email: "carlos.lopez@example.com",
    sala: "Sala Multimedia",
    fecha: "2026-03-31",
    turno: "Noche",
    personas: 1,
  },
  {
    id: 4,
    estudiante: "Ana Martínez",
    email: "ana.martinez@example.com",
    sala: "Sala Norte",
    fecha: "2026-03-31",
    turno: "Tarde",
    personas: 3,
  },
];

const servicioReservas = crearServicioReserva(reservasIniciales);
const controladorReservas = crearControladorReservas(servicioReservas);
const app = crearApp({
  controladorReservas,
  formatoRegistro: config.formatoRegistro,
});

app.listen(config.puerto, () => {
  console.log(`Servidor escuchando en http://localhost:${config.puerto}`);
});
