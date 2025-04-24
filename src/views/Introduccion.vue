<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-12
        p.mb-0 En una sociedad donde la tecnología evoluciona constantemente, las organizaciones dependen de los datos de sus sistemas de información para la toma de decisiones. La calidad y coherencia de estos datos son fundamentales para el rendimiento óptimo de los algoritmos de aprendizaje automático. La preparación de los datos es un paso esencial en el desarrollo de sistemas inteligentes y en la extracción de información relevante mediante técnicas de aprendizaje automático, las cuales tienen un impacto significativo en áreas como la visión por computadora, el procesamiento del habla, la comprensión del lenguaje natural, la neurociencia, la salud y el Internet de las cosas.
    
    .row.justify-content-center.align-items-center
      .col-lg-3.col-6.col-md-6.col-8.mb-lg-0.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/intro/img1.png', alt='Imagen decorativa')
      .col-lg-9
        .cajon.color-secundario.p-4.mb-4
          p Las organizaciones requieren personal altamente capacitado en análisis y preparación de datos para desarrollar soluciones de inteligencia artificial (IA). Esto permite adaptarse a un ecosistema tecnológico en constante transformación, aportando valor estratégico a las empresas y respondiendo a los desafíos del mercado. La gestión eficiente de los datos facilita la conversión de la información en conocimiento estratégico, impulsando la innovación y la competitividad empresarial.
        p En este contexto, la IA se consolida como un motor de innovación, por lo que es fundamental que las organizaciones aprovechen de manera efectiva los datos recopilados en sus sistemas de información y gestionen grandes volúmenes de información en sectores tanto públicos como privados. La escasez de talento especializado representa un obstáculo para la digitalización y el desarrollo tecnológico.
        p Este programa se alinea con la visión del SENA de fortalecer el entorno productivo mediante el desarrollo de competencias técnicas y actitudinales que favorecen una economía basada en el conocimiento y la tecnología. La transformación digital en Colombia y la creciente implementación de IA destacan la necesidad de contar con profesionales especializados en datos. Los indicadores de desarrollo tecnológico y la inversión en innovación evidencian la integración de técnicas de aprendizaje automático en la gestión y toma de decisiones.
    p Para profundizar en la importancia de estos temas, se recomienda acceder al siguiente video:
    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
