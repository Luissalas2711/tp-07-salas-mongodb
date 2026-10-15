const { salasPermitidas } = require("../middleware/reservas");

const crearControladorReservas = (servicio) => {
  const listarReservas = (req, res) => {
    res.render("reservas/lista", {
      titulo: "Listado de Reservas",
      reservas: servicio.listar(),
    });
  };
  const formularioNuevaReserva = (req, res) => {
    res.render("reservas/nueva", {
      titulo: "Nueva Reserva",
      salasPermitidas,
      errores: [],
      valores: {},
    });
  };

  const obtenerReservaPorId = (req, res) => {
    const id = Number.parseInt(req.params.id, 10);
    const reserva = servicio.buscarPorId(id);

    if (!reserva) {
      return res.status(404).render("no-encontrado", {
        titulo: "Reserva no encontrada",
        mensaje: `No se encontró la reserva con ID ${req.params.id}`,
      });
    }

    res.render("reservas/detalle", { titulo: "Detalle de Reserva", reserva });
  };

  const crearReserva = (req, res) => {
    servicio.crear(req.reservaValidada);
    res.redirect("/reservas");
  };

  const obtenerEstado = (req, res) => {
    res.json({
      servicio: "activo",
      reservas: servicio.obtenerCantidad(),
      solicitudId: res.locals.solicitudId,
    });
  };

  return {
    listarReservas,
    formularioNuevaReserva,
    obtenerReservaPorId,
    crearReserva,
    obtenerEstado,
  };
};

module.exports = { crearControladorReservas };
