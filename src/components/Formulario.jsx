import React from "react";

function Formulario() {
  return (
    <div className="container">
      <h2>Crear Reporte</h2>

      <div className="row">
        <form>
          <label>Picture</label>
          <input
            type="file"
            className="button-primary u-full width"
            accept=".png, .jpg, .jpeg"
            placeholder="hola"
          />
          <br />
          <br />

          <label>Location</label>
          <input
            type="text"
            name="location"
            className="u-full-width"
            placeholder="Location"
            value=""
          />

          <label>types of garbage</label>
          <input
            type="text"
            name="garbage"
            className="u-full-width"
            placeholder="types of garbage"
            value=""
          />

          <label>Fecha</label>
          <input type="date" name="date" className="u-full-width" value="" />

          <label>Hora</label>
          <input type="time" name="hour" className="u-full-width" value="" />

          <label>Description</label>
          <textarea
            className="u-full-width"
            name="description"
            value=""
          ></textarea>

          <button type="submit" className="u-full-width button-primary">
            Agregar Cita
          </button>
        </form>
      </div>
    </div>
  );
}

export default Formulario;
