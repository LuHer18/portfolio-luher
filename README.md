# Mi Portafolio Web

Este es el código fuente de mi portafolio personal, creado con **React** y **TypeScript**. El objetivo de este proyecto es mostrar mi experiencia, habilidades, proyectos, y ofrecer una manera de contactarme.

## Captura de pantalla Desktop
![portfolioDesktop](https://github.com/user-attachments/assets/6a795f9a-dd12-47df-9360-7528e43663b0)


## Captura de pantalla Mobile
![portfolioMobile](https://github.com/user-attachments/assets/278db4ee-16f8-49d2-9f9c-a459dd55206e)


## 🛠 Tecnologías Utilizadas

- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **TypeScript**: Superconjunto de JavaScript que añade tipado estático.
- **CSS Modules**: Para estilos locales y evitar colisiones de clases CSS.
- **Framer Motion**: Para animaciones fluidas y atractivas en la interfaz.
- **React Router DOM**: Para la navegación entre páginas dentro de la aplicación.
- **EmailJS**: Para enviar emails directamente desde el formulario de contacto sin necesidad de un backend.

## 💥 Funcionalidades

- **Navegación Dinámica**: Utilizando `React Router DOM` para navegar entre las diferentes secciones del portafolio.
- **Animaciones Interactivas**: Implementadas con **Framer Motion** para animaciones suaves en la carga de páginas, botones y otros elementos interactivos.
- **Estilos Modulares**: Los estilos están implementados usando **CSS Modules**, asegurando un diseño limpio y evitando conflictos entre estilos.
- **Formulario de Contacto**: Implementado con **EmailJS** para permitir a los usuarios enviarme correos electrónicos directamente desde el sitio.
- **Componentización**: La estructura del proyecto sigue la filosofía de componentes reutilizables de React.

## 🚀 Instalación

Si deseas ejecutar este proyecto localmente, sigue estos pasos:

1. Clona el repositorio:

   ```bash
   https://github.com/LuHer18/portfolio-luher.git

2. Instala las depedencias
   ```bash
   npm install
3. Cambia el nombre de .env.template por .env y añade tu clave pública de EmailJS
   ```
   VITE_SERVICE_iD=tu_service_id
   VITE_TEMPLATE_ID=tu_template_id
   VITE_PUBLIC_KEY= tu_llave_publica
   ```
   Inicia la aplicación:
   ```bash
   npm run dev

## 🔑 Licencia
<p><a href='https://github.com/LuHer18/portfolio-luher/blob/main/LICENSE'>MIT</a> - Creado por <a href='https://github.com/LuHer18'>Luis Herrera</a></p>
