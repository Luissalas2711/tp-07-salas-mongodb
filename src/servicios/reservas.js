const crearServicioReserva = (datosIniciales = []) => {
  const reservas = [...datosIniciales];
  let proximoIdReserva = Math.max(0, ...reservas.map((r) => r.id)) + 1;

  const listar = () => reservas;

  const buscarPorId = (id) => reservas.find((reserva) => reserva.id === id);

  const obtenerCantidad = () => reservas.length;

  const crear = (datos) => {
    const nuevaReserva = { ...datos, id: proximoIdReserva++ };
    reservas.push(nuevaReserva);
    return nuevaReserva;
  };

  return {
    listar,
    buscarPorId,
    obtenerCantidad,
    crear,
  };
};

module.exports = { crearServicioReserva };
