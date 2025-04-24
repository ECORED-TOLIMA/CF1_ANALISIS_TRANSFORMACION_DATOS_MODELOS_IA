<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Gobernanza y seguridad de datos
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2
        figure
          img(src='@/assets/curso/temas/tema3/img1.svg', alt='Texto que describa la imagen')
      .col-lg-10
        p La visualización de datos y el análisis exploratorio (AED) son pasos fundamentales en la estadística descriptiva, ya que permiten examinar la distribución, el comportamiento y la estructura de los datos antes de aplicar técnicas más complejas. Su objetivo es ofrecer una representación clara y comprensible de la información recolectada, facilitando la identificación de patrones, tendencias, valores atípicos y posibles errores.
        p Dependiendo del tipo de variable, se seleccionan diferentes tipos de gráficos. Para variables categóricas, los gráficos de barras y los diagramas de sectores permiten comparar frecuencias de manera visual. En cambio, para variables numéricas, se utilizan histogramas, diagramas de caja (boxplot) y gráficos de dispersión, que facilitan el análisis de distribución, variabilidad y relaciones entre variables.
    
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/tema3/img2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El crecimiento exponencial de los datos digitales, así como la transformación digital de las organizaciones, ha llevado a que los datos se posicionen como uno de los recursos más valiosos. Ante esta realidad, se vuelve imprescindible implementar una estrategia de gobernanza que permita su gestión eficaz, integrando procesos de control, supervisión, protección y aprovechamiento. Según la CEPAL (2023), la gobernanza de datos es la clave para organizar, custodiar y maximizar el valor de la información dentro de las instituciones.
    p.mb-4 Adicionalmente, la seguridad de los datos es un componente inseparable de la gobernanza. Esta implica establecer mecanismos técnicos y normativos para prevenir accesos no autorizados, proteger la confidencialidad, mantener la integridad y garantizar la disponibilidad de la información. El cumplimiento de marcos legales como la Ley de Protección de Datos Personales y las normativas internacionales refuerza esta dimensión, promoviendo un entorno seguro para el intercambio y procesamiento de datos.
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-10
        .cajon.color-secundario.p-4
          p En resumen, una estrategia efectiva de gobernanza y seguridad de los datos permite no solo cumplir con las exigencias normativas, sino también potenciar el valor de los datos como base para la innovación, la eficiencia operativa y la transparencia institucional.
    separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 Políticas y normativas 
    p.mb-4 En materia de seguridad de datos y protección de la información, diversas normativas nacionales e internacionales imponen obligaciones a las organizaciones. Estas regulaciones establecen directrices sobre el tratamiento de datos personales, garantizando derechos fundamentales y promoviendo medidas de seguridad para proteger la confidencialidad, integridad y disponibilidad de la información. A continuación, se presentan algunas normativas destacadas:
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-10
        LineaTiempoD.color-acento-botones
          .row(numero="A" titulo="Reglamento General de Protección de Datos (RGPD - Unión Europea)")
            .col-md-12.mb-4.mb-md-0
              p Reglamento (UE) 2016/679, vigente desde 2018 y su objetivo es otorgar a las personas un mayor control sobre sus datos personales y armonizar las leyes de protección de datos en Europa. A continuación, se describen sus aspectos clave:
            .col-md-12.bgblanco.p-3
              ul.lista-ul
                li
                  i.fas.fa-angle-right
                  | Se aplica a organizaciones dentro y fuera de la UE que traten datos de residentes europeos.
                li
                  i.fas.fa-angle-right
                  | Establece principios como licitud, transparencia, integridad y confidencialidad.
                li
                  i.fas.fa-angle-right
                  | Reconoce derechos como acceso, rectificación, supresión y oposición.
                li
                  i.fas.fa-angle-right
                  | Exige notificación de brechas de seguridad.
                li
                  i.fas.fa-angle-right
                  | Requiere la implementación de controles técnicos y organizativos estrictos.
                li
                  i.fas.fa-angle-right
                  | Impone sanciones elevadas por incumplimiento.

              figure
                img(src='@/assets/curso/temas/tema3/img3.png', alt='Texto que describa la imagen')
          .row(numero="B" titulo="Ley Orgánica de Protección de Datos y Garantía de los Derechos Digitales (LOPDGDD - España)")
            .col-md-12.mb-4.mb-md-0
              p Establece disposiciones generales para la protección de datos personales y desarrolla el derecho constitucional al habeas data. Esta ley regula el tratamiento de datos por parte de entidades públicas y privadas. Sus puntos clave son:
            .col-md-12.bgblanco.p-3
              ul.lista-ul
                li
                  i.fas.fa-angle-right
                  | Desarrolla derechos como el olvido, la portabilidad y la desconexión digital.
                li
                  i.fas.fa-angle-right
                  | Regula el tratamiento de datos en entornos laborales y en el ámbito digital.
                li
                  i.fas.fa-angle-right
                  | Refuerza las obligaciones del RGPD en el contexto español.
                li
                  i.fas.fa-angle-right
                  | Establece medidas adicionales para garantizar la privacidad digital de los ciudadanos.
                li
                  i.fas.fa-angle-right
                  | Requiere políticas de seguridad, formación del personal y control de acceso a los datos.
                li
                  i.fas.fa-angle-right
                  | Establece el rol del Delegado de Protección de Datos (DPO) en ciertas organizaciones.
                li
                  i.fas.fa-angle-right
                  | Las sanciones son aplicadas por la Agencia Española de Protección de Datos (AEPD).
              figure
                img(src='@/assets/curso/temas/tema3/img4.png', alt='Texto que describa la imagen')
          .row(numero="C" titulo="Ley 1581 de 2012 - Protección de Datos Personales (Colombia)")
            .col-md-12.mb-4.mb-md-0
              p Ley Orgánica 3/2018, en vigor desde mayo de 2018, complementa al RGPD adaptando su aplicación al contexto español y ampliando derechos en el entorno digital. Entre sus aspectos clave se destacan:
            .col-md-12.bgblanco.p-3
              ul.lista-ul
                li
                  i.fas.fa-angle-right
                  | Clasifica los datos en públicos, privados y sensibles.
                li
                  i.fas.fa-angle-right
                  | Exige consentimiento previo, expreso e informado para el tratamiento de datos.
                li
                  i.fas.fa-angle-right
                  | Reconoce derechos como acceso, actualización, rectificación y cancelación.
                li
                  i.fas.fa-angle-right
                  | Obliga a las organizaciones a implementar medidas técnicas y administrativas de seguridad.
                li
                  i.fas.fa-angle-right
                  | Requiere la inscripción en el Registro Nacional de Bases de Datos.
                li
                  i.fas.fa-angle-right
                  | Impone la adopción de políticas internas para el manejo de datos personales.
                li
                  i.fas.fa-angle-right
                  | Supervisa el cumplimiento la Superintendencia de Industria y Comercio (SIC), que puede imponer sanciones por incumplimiento.

              figure
                img(src='@/assets/curso/temas/tema3/img5.png', alt='Texto que describa la imagen')

    separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Gobernanza de datos
    p.mb-4 La gobernanza de datos consiste en el conjunto de normativas, procedimientos, estándares y roles diseñados para asegurar que los datos dentro de una organización sean confiables, seguros, accesibles, consistentes y se manejen de forma ética. Ha ganado relevancia a medida que las organizaciones reconocen el valor crucial de los datos como un activo fundamental para la toma de decisiones. Los componentes clave de la gobernanza de datos incluyen:
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema3/img6.png', alt='Texto que describa la imagen')
      .col-lg-7
        ol.lista-ol--cuadro.lista-ol--separador
          li 
            .lista-ol--cuadro__vineta
              span 1
            | Crear políticas y estándares para el tratamiento de los datos.
          li 
            .lista-ol--cuadro__vineta
              span 2
            | Definir roles y responsabilidades en la gestión de la información.
          li 
            .lista-ol--cuadro__vineta
              span 3
            | Implementar medidas que garanticen la calidad y seguridad de los datos.
          li 
            .lista-ol--cuadro__vineta
              span 4
            | Asegurar el cumplimiento de las normativas legales vigentes.
          li 
            .lista-ol--cuadro__vineta
              span 5
            | Facilitar el acceso adecuado y el uso responsable de la información.
          li 
            .lista-ol--cuadro__vineta
              span 6
            | Gestionar el ciclo de vida de los datos, desde su creación hasta su eliminación.

    p.mb-4 Una gestión eficaz de los datos permite a las organizaciones maximizar el valor de su información, al tiempo que minimizan los riesgos asociados. Además, proporciona un marco coherente para administrar los datos en toda la empresa, mejorar su calidad y respaldar decisiones basadas en evidencia. En un entorno donde el volumen de datos crece constantemente, contar con una estrategia sólida de gobernanza es esencial para utilizar la información de manera efectiva y responsable.
    p.mb-4 Actualmente, existen diversos marcos de referencia que apoyan la implementación de programas de gobernanza de datos. Entre los más influyentes y utilizados por empresas y organizaciones se encuentran:

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-8
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="DAMA-DMBOK (Data Management Body of Knowledge)")
            .col-md-12.mb-4.mb-md-0
              p Desarrollado por DAMA International (Asociación de Gestión de Datos), este marco es reconocido como el estándar más completo para la gestión de datos. La Gobernanza de Datos es una de sus 11 áreas de conocimiento fundamentales, y se encarga de coordinar otras áreas como Calidad de Datos, Arquitectura de Datos, Seguridad de Datos y Metadatos. Incluye principios éticos y estratégicos, define estructuras organizativas con roles y responsabilidades claros, y establece flujos de trabajo para la toma de decisiones, la resolución de problemas y la gestión del cambio. También incorpora métricas que permiten evaluar la efectividad del programa de gobernanza y la calidad de los datos.
          .row(titulo="COBIT (Control Objectives for Information and Related Technologies)")
            .col-md-12.mb-4.mb-md-0
              p Desarrollado por ISACA, este marco está orientado a la gobernanza y gestión de la información y tecnología (I&T) en las organizaciones. Aunque no se centra exclusivamente en los datos, los considera un componente clave. COBIT se enfoca en el control, la gestión de riesgos y la alineación con los objetivos estratégicos del negocio. Es ampliamente adoptado por áreas de auditoría, gestión de riesgos y tecnología, especialmente en contextos donde es necesario asegurar el cumplimiento normativo y la creación de valor a partir del uso responsable de la información.
          .row(titulo="Serie ISO/IEC 38500 - Gobernanza de TI")
            .col-md-12.mb-4.mb-md-0
              p Producida por la Organización Internacional de Normalización (ISO) y la Comisión Electrotécnica Internacional (IEC), esta serie ofrece directrices para que los líderes utilicen de manera eficiente y efectiva la tecnología de la información. Si bien su eje central es la TI, su impacto se extiende a la gobernanza de los datos, considerados un activo esencial. Entre sus principios destacan la responsabilidad, la estrategia, la adquisición, el rendimiento, el cumplimiento y el comportamiento humano, todos aplicables a la toma de decisiones relacionadas con la información.
          .row(titulo="ISO 8000 - Calidad de Datos")
            .col-md-12.mb-4.mb-md-0
              p Este estándar, aunque no constituye un marco de gobernanza completo, es fundamental por su enfoque específico en la calidad de los datos. Define principios, conceptos y procesos para medir y mejorar dicha calidad, siendo una herramienta clave para las organizaciones que desean fortalecer su estrategia de gobernanza a partir de datos confiables y precisos.
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema3/img7.png', alt='Texto que describa la imagen')
    p.mb-4 DAMA-DMBOK y COBIT son los marcos más citados y empleados como referencia, complementados por normas ISO y adaptados a los requisitos regulatorios específicos de cada sector y región. La tendencia actual es adoptar y personalizar estos marcos según las necesidades, capacidades y objetivos de cada organización.

    separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3 Seguridad de los datos
    p.mb-4 La seguridad de los datos se refiere al conjunto de políticas, prácticas, herramientas y controles diseñados para proteger la información digital contra accesos no autorizados, alteraciones, pérdida o destrucción. Su objetivo principal es garantizar la confidencialidad, integridad y disponibilidad de los datos, independientemente del medio en el que se almacenen o transmitan.
    p.mb-4 En un entorno empresarial cada vez más digitalizado e interconectado, la seguridad de los datos se ha convertido en una prioridad estratégica. Las amenazas cibernéticas, los errores humanos y los fallos técnicos representan riesgos constantes que pueden comprometer la información crítica de las organizaciones. Por ello, se requiere una gestión proactiva y sistemática que abarque todos los niveles de la organización.
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-10
        .cajon.color-primario.p-4
          .row
            .col-lg-2
              figure
                img(src='@/assets/curso/temas/tema3/img8.svg', alt='Texto que describa la imagen')
            .col-lg-10
              p Los pilares fundamentales de la seguridad de los datos incluyen:
              ul.lista-ul
                li
                  i.fas.fa-angle-right
                  | Confidencialidad: asegura que solo las personas autorizadas puedan acceder a la información.
                li
                  i.fas.fa-angle-right
                  | Integridad: garantiza que los datos no sean alterados de manera no autorizada o accidental.
                li
                  i.fas.fa-angle-right
                  | Disponibilidad: permite que los datos estén accesibles cuando se necesiten, por los usuarios pertinentes.

    .BG03.p-5
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-3
          figure
            img(src='@/assets/curso/temas/tema3/img9.png', alt='Texto que describa la imagen')
        .col-lg-7
          p Las prácticas comunes de seguridad de los datos comprenden:
          
          ol.lista-ol--cuadro.lista-ol--separador
            li 
              .lista-ol--cuadro__vineta
                span 1
              | Implementación de controles de acceso y autenticación.
            li 
              .lista-ol--cuadro__vineta
                span 2
              | Uso de cifrado en tránsito y en reposo.
            li 
              .lista-ol--cuadro__vineta
                span 3
              | Copias de seguridad periódicas y planes de recuperación ante desastres.
            li 
              .lista-ol--cuadro__vineta
                span 4
              | Monitorización continua y detección de incidentes de seguridad.
            li 
              .lista-ol--cuadro__vineta
                span 5
              | Capacitación del personal en buenas prácticas de ciberseguridad.
            li 
              .lista-ol--cuadro__vineta
                span 6
              | Actualización constante de software y sistemas para corregir vulnerabilidades.

    p.mb-4 La seguridad de los datos también está estrechamente vinculada con el cumplimiento normativo. Legislaciones como el Reglamento General de Protección de Datos (RGPD) en Europa o la Ley de Protección de Datos Personales en Colombia exigen a las organizaciones implementar medidas técnicas y organizativas que aseguren la protección de la información.
    p.mb-4 Una estrategia robusta de seguridad de los datos no solo protege los activos digitales de la organización, sino que también fortalece la confianza de los usuarios, clientes y socios comerciales, lo cual es fundamental en la economía digital actual.

</template>

<script>
export default {
  name: 'Tema3',
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
