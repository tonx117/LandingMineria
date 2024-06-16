import React, { useState } from "react";
import "../../public/css/img.css";
import "../../public/css/boton.css";

export const Contacto = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let formErrors = {};
    if (!form.name.trim()) formErrors.name = "El nombre es requerido.";
    if (!form.email) {
      formErrors.email = "El correo electrónico es requerido.";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      formErrors.email = "El correo electrónico no es válido.";
    }
    if (!form.phone) {
      formErrors.phone = "El teléfono es requerido.";
    } else if (!/^\d{10}$/.test(form.phone)) {
      formErrors.phone = "El teléfono debe tener 10 dígitos.";
    }
    if (!form.message.trim()) formErrors.message = "El mensaje es requerido.";
    return formErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      console.log("Form Submitted", form);
      // Aquí puedes agregar la lógica para enviar el formulario
      setForm({ name: "", email: "", phone: "", message: "" });
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="SECCION">
      <section id="muertesrol">
        <h2>Contacto</h2>
        <div className="DivSeccioncontacto">
          <div>
            <img className="contactoimg" src="./img/aac.png" alt="" />
          </div>
          <div></div>
          <div className="Form">
            <form onSubmit={handleSubmit} noValidate>
              <div className="inputform">
                <label className="labelform" htmlFor="name">
                  Nombre
                </label>
                <input
                  type="text"
                  className="inputtext"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                />
                {errors.name && <span>{errors.name}</span>}
              </div>

              <div className="inputform">
                <label className="labelform" htmlFor="email">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  className="inputtext"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                />
                {errors.email && <span>{errors.email}</span>}
              </div>

              <div className="inputform">
                <label className="labelform" htmlFor="phone">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="inputtext"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                />
                {errors.phone && <span>{errors.phone}</span>}
              </div>

              <div className="inputform">
                <label className="labelform" htmlFor="message">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  className="inputtextmg"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                />
                {errors.message && <span>{errors.message}</span>}
              </div>

              <button className="buttonenviar" type="submit">
                Enviar
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacto;
