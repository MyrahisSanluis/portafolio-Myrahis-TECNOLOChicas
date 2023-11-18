let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #9db73d;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #9db73d;">Desarrollo sitios web y proyectos de ciencia con impacto social y ambiental</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
