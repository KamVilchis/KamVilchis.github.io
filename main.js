let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

// Color texto
// <span style="color: #AF4B80;">Soy estudiante y desarrollo sitios web :) </span> 
 
typewriter
  .pauseFor(2600)
  .typeString('<span style="color: #6d00c0;">Soy estudiante y desarrollo sitios web <br> Creemos un proyecto juntos :) </span> ')
  .pauseFor(200)
  .deleteChars(10)
  .start();

