<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p En el entorno digital actual, los datos se han convertido en un recurso estratégico fundamental para la toma de decisiones en las organizaciones. Su calidad, disponibilidad y preparación son esenciales para el funcionamiento de los algoritmos de inteligencia artificial (IA), especialmente en áreas como la visión por computadora, la salud, el procesamiento de lenguaje natural y el Internet de las cosas. Las organizaciones, tanto públicas como privadas, demandan personal capacitado en análisis, transformación y gobernanza de datos, con el fin de convertir la información en un activo de alto valor para la innovación, la eficiencia operativa y la adaptación al cambio. La IA se consolida como un motor clave de la transformación digital, cuyo desempeño depende del manejo adecuado de grandes volúmenes de datos, aunque la escasez de talento especializado representa una barrera para su adopción efectiva. Este programa formativo se articula con la misión del SENA al fortalecer competencias técnicas en ciencia de datos, impulsando una economía basada en el conocimiento, la tecnología y la innovación .
    

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="En la síntesis se resume los contenidos del componente “Fundamentos de datos, estadística descriptiva y seguridad de la información”, organizados en tres ejes: tipos de datos (estructurados, no estructurados, semiestructurados y calidad de los datos), estadística descriptiva (niveles de medición, variables, medidas de tendencia central y dispersión, y visualización de datos) y gobernanza y seguridad (normativas, procesos de gestión y protección de datos).")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
