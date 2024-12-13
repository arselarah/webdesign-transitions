// "use client";
import React from "react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import Page from "@/components/page";

const Contact: React.FC = () => {
  const [status, setStatus] = useState("");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Almacena una referencia al formulario
    const form = e.currentTarget;

    // FormData tipado
    const formData = new FormData(form);

    // Aseguramos que TypeScript reconozca los valores obtenidos de FormData
    const name = formData.get("name") as string | null;
    const email = formData.get("email") as string | null;
    const options = formData.getAll("options[]") as string[];
    const message = formData.get("message") as string | null;

    // Convertir las opciones seleccionadas en un formato adecuado para enviar por email
    const optionsString = options.join(", "); // Une las opciones seleccionadas en una cadena de texto

    console.log("Nombre:", name);
    console.log("Email:", email);
    console.log("Intereses seleccionados:", optionsString); // Esto debería mostrar las opciones seleccionadas
    console.log("Mensaje:", message);

    emailjs
      .sendForm(
        "service_d07lmdb", // Reemplaza con tu Service ID
        "template_sqnnim3", // Reemplaza con tu Template ID
        form, // Usamos el formulario completo
        "9Nhr0oYcdiIcOpF6M" // Reemplaza con tu User ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("¡Mensaje enviado exitosamente!");
          form.reset(); // Usa la referencia almacenada para resetear el formulario
        },
        (error) => {
          console.error(error.text);
          setStatus("Hubo un error al enviar el mensaje.");
        }
      );
  };

  return (
    <Page>
      <div className="relative max-w-[100rem] mx-auto my-1 px-5 xl:px-4">
        <div className="hero-inner relative py-28 xl:py-56 px-5 w-full">
          <div className="bg-animation"></div>
          <div className="hero_text-container max-w-[100rem] mx-auto xl:px-4">
            <div className=" text-container_box scroll-reveal-loading">
              <h3 className="text-sm xl:text-xl text-center">Contacto</h3>
              <h1 className="heading-hero text-center mx-auto">
                <span>¿Tienes un proyecto en mente? Háblame de el</span>
              </h1>
            </div>
          </div>
        </div>
        {/* <h2 className="heading mb-6 text-gray-800">
          ¿Tienes un proyecto en mente? Háblame de el
        </h2> */}
        <motion.div
          initial={{ opacity: 0, y: "50px" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.3, duration: 0.5, ease: "linear" }}
        >
          <form id="contact-form" className="space-y-4" onSubmit={sendEmail}>
            <div className="flex flex-col md:flex-row flex-wrap gap-8 justify-between">
              <div className="grow">
                <label
                  htmlFor="name"
                  className="text-sm xl:text-xl pb-4 pt-6 block"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-7 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent rounded border border-zinc-800"
                />
              </div>
              <div className="grow">
                <label
                  htmlFor="email"
                  className="text-sm xl:text-xl pb-4 pt-6 block"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-7 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent rounded border border-zinc-800"
                />
              </div>
            </div>
            <div>
              <label className="text-sm xl:text-xl pb-4 pt-6 block">
                Estoy interesado en los servicios de:
              </label>
              <div className="flex flex-row justify-between flex-wrap gap-4">
                {[
                  "Diseño Web",
                  "E-Commerce Diseño Web",
                  "Branding",
                  "Diseño Gráfico",
                  "Consultoría",
                  "Otros",
                ].map((option, index) => (
                  <div
                    key={index}
                    className="flex flex-row items-center justify-center gap-4"
                  >
                    <input
                      type="checkbox"
                      id={`checkbox-${index}`}
                      name="options[]" // Importante, asegúrate de que sea "options[]"
                      value={option}
                      className="w-8 h-8 appearance-none border-2 rounded-xl border-gray-500 checked:bg-black checked:border-black"
                    />
                    <label
                      htmlFor={`checkbox-${index}`}
                      className="text-sm xl:text-xl py-4 block"
                    >
                      {option}
                    </label>
                    <input
                      type="hidden"
                      name="selectedOptions"
                      value={option}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="grow w-full">
              <label
                htmlFor="message"
                className="text-sm xl:text-xl pb-4 pt-6 block"
              >
                Cuéntame sobre el proyecto que tienes en mente
              </label>
              <textarea
                id="message"
                name="message"
                //rows="4"
                required
                className="w-full px-4 py-7 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent rounded border border-zinc-800"
              ></textarea>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="w-40 bg-black text-white font-medium py-[0.65rem] px-[1.4rem] rounded-[50vw] transition duration-300 border-black border-2 hover:bg-button-gradient hover:text-black"
              >
                Enviar
              </button>
            </div>
          </form>
          {status && <p className="mt-4 text-center text-gray-700">{status}</p>}
        </motion.div>
      </div>
    </Page>
  );
};

export default Contact;
