<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span 1
      h1 Tipo de datos
    
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-5.col-6.col-md-6.col-8.mb-lg-0.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/tema1/img1.png', alt='Imagen decorativa')
      .col-lg-7
        p En el ámbito de la Inteligencia Artificial (IA), el análisis de datos es un proceso fundamental, ya que la calidad y relevancia de la información analizada inciden directamente en el rendimiento y la precisión de los modelos desarrollados. Un Análisis Exploratorio de Datos (AED) eficaz permite identificar patrones y tendencias clave para el entrenamiento de algoritmos de aprendizaje automático y la mejora en la toma de decisiones basada en datos. Para ello, se emplean técnicas estadísticas que facilitan la comprensión de las relaciones entre las variables analizadas.
        .cajon.color-secundario.p-4.mb-4
          p Según García (2017), la esencia del AED radica en permitir que los datos “hablen” y, a partir de ellos, identificar los patrones y modelos correspondientes. Por esta razón, el AED se considera una herramienta de gran utilidad en la generación de modelos que representan fenómenos específicos.
    p El volumen de datos generado en los distintos sistemas de información supera la capacidad humana para analizarlos sin el uso de técnicas automatizadas. Los datos recopilados en los medios transaccionales de las organizaciones han experimentado un crecimiento constante, reflejando una tendencia al alza.
    p Existen diversas definiciones sobre el análisis de datos. Una de las más reconocidas es la propuesta por Hair y otros (2010), quienes lo definen como el proceso de convertir datos en bruto en información útil para la toma de decisiones. Este proceso no solo implica la aplicación de razonamiento estadístico y herramientas informáticas, sino también la capacidad de interpretar los resultados en el contexto del problema de investigación.

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/tema1/img2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El análisis de datos es un componente esencial en la era del big data, ya que abarca la examinación, limpieza, transformación y modelado de datos con el objetivo de descubrir información valiosa, extraer conclusiones y respaldar la toma de decisiones. Este proceso incluye una variedad de técnicas y herramientas, que van desde métodos tradicionales de minería de datos y aprendizaje automático hasta enfoques avanzados como el aprendizaje profundo (Wang, 2017).
    p.mb-4 Un aspecto clave en el análisis de datos es la identificación de sus fuentes, las cuales pueden clasificarse en:

    .row.mb-4
      .col-lg-6
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/img3.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              h4 Internas
              p Generadas dentro de la organización, como registros de transacciones, bases de datos de clientes y datos operativos.

      .col-lg-6
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/img4.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              h4 Externas
              p Provenientes de fuentes externas a la organización, como información de mercado, datos demográficos, estadísticas gubernamentales y registros meteorológicos.

    separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1	Datos estructurados
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        p Los sistemas de información actuales manejan diversos tipos de datos, los cuales pueden provenir de múltiples fuentes, incluyendo dispositivos IoT, sistemas operativos, aplicaciones y procesos de curación manual (Gehani y Tariq, 2012).
        p Los datos estructurados se encuentran organizados en formatos predefinidos, como tablas en bases de datos relacionales, donde cada campo tiene un tipo de dato específico (Pyle, 1999). Su organización sistemática permite realizar consultas eficientes, aplicar filtros y establecer relaciones entre diferentes conjuntos de datos. Se almacenan en bases de datos relacionales, hojas de cálculo y archivos con formato fijo, lo que facilita su procesamiento y análisis en diversos sectores, como el comercio electrónico, la banca y la gestión empresarial.
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5
        igure
          img(src='@/assets/curso/temas/tema1/img5.png', alt='Imagen decorativa')
      .col-lg-5
        p Por ejemplo, en un sistema de administración de inventarios, los datos estructurados incluyen información como el código del producto, nombre, precio, cantidad disponible y ubicación en el almacén. Esta estructura facilita la gestión del inventario, el análisis de tendencias de venta y la toma de decisiones estratégicas. Además, los datos estructurados son fundamentales para la implementación de sistemas de inteligencia empresarial y análisis predictivo, ya que proporcionan una base sólida para extraer información clave.
        p En este contexto, los datos estructurados pueden contener tanto variables cualitativas como cuantitativas. Por ejemplo, una columna puede indicar la categoría de un producto (cualitativo) y otra su precio (cuantitativo). Esta organización facilita la aplicación de análisis estadísticos, como distribuciones de frecuencia y medidas de tendencia central.
    p.mb-4 La tabla 1 presenta un ejemplo de datos estructurados en una tienda en línea, donde se organizan en filas y columnas con tipos de datos definidos.

    .titulo-sexto.color-acento-contenido.offset-1(data-aos="zoom-in")
      h5 Tabla 1.
      span  #[i Datos estructurados en una tienda en línea]
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .tabla-a.color-acento-contenido.mb-4(data-aos="fade-left")
          table(alt="")
            thead
              tr
                th ID Cliente
                th Nombre Completo
                th Edad
                th Género
                th Fecha de registros
                th Ciudad
                th Total Compras
            tbody
              tr
                td C001
                td Laura Gómez
                td 28
                td F
                td 12/05/2023
                td Madrid
                td 350000
              tr
                td C002
                td Jorge Ramírez
                td 35
                td M
                td 8/11/2022
                td Valencia
                td 590000
              tr
                td C003
                td Ana Pérez
                td 42
                td F
                td 19/07/2021	
                td Sevilla	
                td 275000
              tr
                td C004
                td Manuel Ortega	
                td 31	
                td M	
                td 25/01/2023	
                td Bilbao	
                td 120000
              tr
                td C005	
                td Isabel Fernández	
                td 24	
                td F	
                td 14/09/2022	
                td Barcelona	
                td 480000
    p.mb-4 De manera similar, la tabla 2 describe un conjunto de datos estructurados en un contexto de atención médica, organizado en filas y columnas predefinidas.

    .titulo-sexto.color-acento-contenido.offset-0(data-aos="zoom-in")
      h5 Tabla 2.
      span  #[i Datos estructurados en una historia clínica]

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .tabla-a.color-acento-contenido.mb-4(data-aos="fade-left")
          table(alt="")
            thead
              tr
                th ID Paciente	
                th Nombre Completo	
                th Edad	
                th Género	
                th Fecha Ingreso	
                th Diagnóstico Principal	
                th Nivel de Riesgo
            tbody
              tr
                td P001	
                td Carmen Rodríguez	
                td 56	
                td F	
                td 5/11/2024	
                td Hipertensión arterial	
                td Medio
                
              tr
                td P002	
                td Luis González	
                td 43	
                td M	
                td 1/12/2024	
                td Diabetes tipo 2	
                td Alto
                
              tr
                td P003	
                td Daniela Martínez	
                td 30	
                td F	
                td 15/01/2025	
                td Asma leve	
                td Bajo
                
              tr
                td P004	
                td Jorge Herrera	
                td 65	
                td M	
                td 7/02/2025	
                td Enfermedad pulmonar crónica	
                td Alto
                
              tr
                td P005	
                td Lucía Torres	
                td 49	
                td F	
                td 12/03/2025	
                td Dolor lumbar	
                td Medio
    p La estructuración de estos datos en un formato tabular permite una gestión eficiente en distintos ámbitos, como la atención médica. En la tabla 2, se describe un ejemplo de historia clínica con información clave sobre los pacientes, incluyendo su identificación, diagnóstico y nivel de riesgo. Esta organización facilita el acceso rápido a los datos, el seguimiento de la evolución clínica y la toma de decisiones informadas en el tratamiento de cada paciente. Además, la disposición estructurada de la información posibilita el análisis estadístico y la implementación de herramientas de inteligencia artificial para mejorar la precisión en los diagnósticos y optimizar la gestión hospitalaria.

    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2	Datos no estructurados
    p.mb-4 Los datos no estructurados son aquellos que no siguen un modelo predefinido ni una organización tabular fija, a diferencia de los datos estructurados. No pueden almacenarse ni procesarse fácilmente en bases de datos relacionales sin una transformación previa. Se estima que representan aproximadamente el 80 % de los datos generados a nivel global (Gartner, citado en Katal et al., 2013). Ejemplos comunes incluyen correos electrónicos, documentos de texto, imágenes, videos y publicaciones en redes sociales.
    
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-3.col-6.col-md-6.col-8.mb-lg-0.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/tema1/img6.png', alt='Imagen decorativa')
      .col-lg-7
        .cajon.color-secundario.p-4.mb-4
          p En su estado original, estos datos no se ajustan directamente a las categorías de cualitativos o cuantitativos según los criterios del análisis estadístico tradicional. No obstante, para que los modelos de aprendizaje automático, como los Modelos de Lenguaje Grandes (LLMs), puedan utilizarlos, es necesario transformarlos en representaciones estructuradas o numéricas. Por ejemplo, los textos se tokenizan y convierten en embeddings numéricos, mientras que las imágenes se representan mediante matrices de valores de píxeles.
        p La transformación de datos no estructurados permite su análisis y uso en diversas aplicaciones. En el caso de las imágenes, por ejemplo, cada píxel se representa con un valor numérico que refleja su intensidad o color. Una vez procesados, estos datos pueden analizarse como variables cuantitativas continuas o, tras una categorización, como variables cualitativas discretas. Gracias a esta conversión, los modelos de inteligencia artificial pueden identificar patrones y extraer información valiosa para tareas como la clasificación de imágenes, el análisis de sentimientos en texto y la generación de lenguaje natural.
    p.mb-4 En la tabla 3 se presentan ejemplos de datos no estructurados y sus formatos más comunes:
    
    .titulo-sexto.color-acento-contenido.offset-0(data-aos="zoom-in")
      h5 Tabla 3.
      span  #[i Formatos de datos no estructurados]

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .tabla-a.color-acento-contenido.mb-4(data-aos="fade-left")
          table(alt="")
            thead
              tr
                th Tipo de Dato	
                th Ejemplo concreto
            tbody
              tr
                td Texto libre	
                td Comentarios en redes sociales, opiniones en Amazon.
              tr
                td Imágenes	
                td Fotografías almacenadas en el móvil o en Google Photos.
              tr
                td Audio	
                td Grabaciones de llamadas, podcasts, notas de voz.
              tr
                td Video	
                td Clases grabadas, transmisiones en vivo, videos de YouTube.
              tr
                td Documentos diversos	
                td PDFs, presentaciones, archivos Word con texto sin estructura.
              tr
                td Correos electrónicos	
                td Emails con texto, archivos adjuntos y formato libre.

    p Los datos no estructurados representan un reto y una oportunidad en el análisis de información. Su flexibilidad permite capturar detalles ricos y contextuales, pero también requiere herramientas avanzadas para su procesamiento. Tecnologías como el procesamiento de lenguaje natural, la visión por computadora y la inteligencia artificial han facilitado la extracción de valor a partir de estos datos. En sectores como la salud, el comercio y la ciberseguridad, su análisis ha permitido mejorar la toma de decisiones, automatizar procesos y descubrir patrones que serían difíciles de detectar con métodos tradicionales.
    separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3	Datos semiestructurados
    
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-7
        p Los datos semiestructurados representan una forma híbrida de información que combina elementos de datos estructurados y no estructurados. A diferencia de los datos estructurados, que se organizan de manera rígida en bases de datos relacionales, los datos semiestructurados no siguen un esquema fijo, aunque conservan ciertos elementos organizativos. Esta flexibilidad permite representar jerarquías y relaciones complejas dentro de los datos, facilitando su adaptación a diferentes necesidades y contextos.
        .cajon.color-primario.p-4.mb-4
          p Ejemplos comunes de datos semiestructurados son los archivos XML y JSON, que utilizan etiquetas o pares clave-valor para organizar la información. También se incluyen correos electrónicos con metadatos, logs de servidores y archivos YAML, los cuales contienen estructura, pero sin ajustarse a una forma tabular estricta.
      .col-lg-5.col-6.col-md-6.col-8.mb-lg-0.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/tema1/img7.png', alt='Imagen decorativa')
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.col-6.col-md-6.col-8.mb-lg-0.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/tema1/img8.svg', alt='Imagen decorativa')
      .col-lg-7
        p Los datos semiestructurados son especialmente útiles en escenarios donde las estructuras de datos pueden evolucionar con el tiempo o cuando se trabaja con fuentes de información heterogéneas. Se emplean ampliamente en tecnologías web, integración de datos en plataformas diversas y sistemas de gestión documental. Además, son esenciales en entornos donde la interoperabilidad y el intercambio de información entre distintos sistemas requieren flexibilidad sin perder organización.
        p Su uso ha crecido con el auge del big data y la computación en la nube, ya que facilitan la recopilación y análisis de grandes volúmenes de información procedente de diversas fuentes. En la tabla 4 se presentan algunos tipos de archivos comúnmente clasificados como semiestructurados.
    
    .titulo-sexto.color-acento-contenido.offset-0(data-aos="zoom-in")
      h5 Tabla 4.
      span  #[i Ejemplo de tipos de datos semiestructurados]

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .tabla-a.color-acento-contenido.mb-4(data-aos="fade-left")
          table(alt="")
            thead
              tr
                th Tipo de archivo	
                th Ejemplo de contenido
            tbody
              tr
                td JSON (JavaScript Object Notation)	
                td {"nombre": "Ana", "edad": 30, "activo": true}
              tr
                td XML (eXtensible Markup Language)	
                td <cliente><nombre>Ana</nombre><edad>30</edad></cliente>
              tr
                td Archivos YAML	
                td nombre: Ana\nedad: 30\nactivo: true
              tr
                td Correos electrónicos con metadatos	
                td Asunto, fecha, remitente, cuerpo del mensaje.
              tr
                td Logs de servidor	
                td Estructurados por línea pero no en formato tabular.
    p A continuación, en la tabla 5 se presenta una comparación entre los diferentes tipos de datos analizados hasta ahora.

    .titulo-sexto.color-acento-contenido.offset-0(data-aos="zoom-in")
      h5 Tabla 5.
      span  #[i Comparativa de datos]

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .tabla-a.color-acento-contenido.mb-4(data-aos="fade-left")
          table(alt="")
            thead
              tr
                th Característica	
                th Estructurados	
                th Semiestructurados	
                th No estructurados
            tbody
              tr
                td Formato	
                td Tablas (SQL)	
                td Etiquetas (XML, JSON)	
                td Texto libre, imágenes
              tr
                td Esquema	
                td Fijo	
                td Flexible	
                td Ausente
              tr
                td Ejemplo	
                td Tabla de ventas	
                td JSON de pedidos online	
                td Opiniones en redes
              tr
                td Almacenamiento	
                td Bases de datos SQL	
                td Bases de datos NoSQL	
                td Sistemas de archivos
              tr
                td Facilidad de análisis	
                td Alta	
                td Moderada	
                td Baja (requiere IA, NLP)
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p Los datos no estructurados representan un reto y una oportunidad en el análisis de información. Su flexibilidad permite capturar detalles ricos y contextuales, pero también requiere herramientas avanzadas para su procesamiento. Tecnologías como el procesamiento de lenguaje natural, la visión por computadora y la inteligencia artificial han facilitado la extracción de valor a partir de estos datos. En sectores como la salud, el comercio y la ciberseguridad, su análisis ha permitido mejorar la toma de decisiones, automatizar procesos y descubrir patrones que serían difíciles de detectar con métodos tradicionales.
    separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.4	Calidad de los datos
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p La calidad de los datos se refiere a la idoneidad de los datos para servir a un propósito específico, como el análisis, la toma de decisiones o el entrenamiento de modelos de inteligencia artificial. En la metodología Data Assay, se describe como un proceso que "literalmente evalúa la calidad o el valor de los datos para la minería de datos" (Pyle, 1999). La calidad de los datos abarca múltiples dimensiones que determinan su fiabilidad y utilidad.
        p Las principales características de la calidad de los datos son:

    LineaTiempoD.color-acento-botones.mb-4
      .row(numero="1" titulo="Precisión y exactitud")
        .col-md-12.mb-4.mb-md-0
          p Los datos deben reflejar la realidad sin errores. La exactitud implica que los valores registrados sean correctos, mientras que la precisión se refiere a la consistencia en la medición. Errores de medición, transcripción o interpretación pueden afectar estos aspectos (Del Pino, 2008).
        .col-md-12
          figure
            img(src='@/assets/curso/temas/tema1/img9.png', alt='Texto que describa la imagen')
      .row(numero="2" titulo="Integridad y validez")
        .col-md-12.mb-4.mb-md-0
          p Un dato de calidad es válido si pertenece a su espacio muestral correcto. Datos incompletos o con valores no válidos (como “No sabe/No contesta”) pueden comprometer la fiabilidad del análisis (Viedma, 2018).      
        .col-md-12
          figure
            img(src='@/assets/curso/temas/tema1/img10.png', alt='Texto que describa la imagen')
      .row(numero="3" titulo="Consistencia y coherencia")
        .col-md-12.mb-4.mb-md-0
          p Los datos deben mantenerse uniformes en diferentes sistemas y bases de datos. La falta de coherencia, como diferencias en nombres o formatos entre conjuntos de datos, puede generar errores en el análisis.
        .col-md-12
          figure
            img(src='@/assets/curso/temas/tema1/img11.png', alt='Texto que describa la imagen')
      .row(numero="4" titulo="Completitud")
        .col-md-12.mb-4.mb-md-0
          p Un conjunto de datos de calidad debe contener toda la información necesaria para su propósito. Datos faltantes o incompletos pueden afectar la validez de los resultados.
        .col-md-12
          figure
            img(src='@/assets/curso/temas/tema1/img12.png', alt='Texto que describa la imagen')
      .row(numero="5" titulo="Actualidad y temporalidad")
        .col-md-12.mb-4.mb-md-0
          p La información debe estar actualizada y reflejar la realidad en el momento en que se usa. Datos desactualizados pueden generar decisiones erróneas.     
        .col-md-12
          figure
            img(src='@/assets/curso/temas/tema1/img13.png', alt='Texto que describa la imagen')
      .row(numero="6" titulo="Accesibilidad y usabilidad")
        .col-md-12.mb-4.mb-md-0
          p La calidad de los datos también depende de su disponibilidad para los usuarios adecuados en el momento oportuno. Los datos deben estar bien documentados y en formatos utilizables.
        .col-md-12
          figure
            img(src='@/assets/curso/temas/tema1/img14.png', alt='Texto que describa la imagen')
      .row(numero="7" titulo="Adecuación al propósito")
        .col-md-12.mb-4.mb-md-0
          p La granularidad o nivel de detalle de los datos debe ser apropiado para el análisis que se pretende realizar. Datos demasiado generales o específicos pueden afectar la interpretación y los resultados.
        .col-md-12
          figure
            img(src='@/assets/curso/temas/tema1/img15.png', alt='Texto que describa la imagen')

    p.mb-5 Además, es importante considerar los diferentes tipos de calidad de datos, los cuales incluyen:
    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.tarjeta--BG01.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/tema1/img16.svg' alt='AvatarTop')
        h5.text-center Calidad intrínseca
        p.text-center Relacionada con la precisión, consistencia y validez de los datos, independientemente de su uso.
      .tarjeta.tarjeta--BG01.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/tema1/img17.svg' alt='AvatarTop')
        h5.text-center Calidad contextual
        p.text-center Evalúa si los datos son adecuados para un propósito específico, considerando factores como la completitud y la actualidad.
      .tarjeta.tarjeta--BG01.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/tema1/img18.svg' alt='AvatarTop')
        h5.text-center Calidad de representación
        p.text-center Se refiere a la claridad con la que los datos están estructurados y documentados, incluyendo su formato y facilidad de comprensión.
      .tarjeta.tarjeta--BG01.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/tema1/img19.svg' alt='AvatarTop')
        h5.text-center Calidad operativa o de accesibilidad
        p.text-center Determina si los datos pueden ser obtenidos y utilizados sin restricciones, asegurando su disponibilidad y seguridad.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.color-secundario.p-4.mb-4
          p En síntesis, la calidad de los datos es un concepto multidimensional que garantiza que la información sea precisa, válida, completa, coherente y adecuada para el propósito al que está destinada. Evaluar la calidad de los datos es un paso esencial en la preparación de datos para cualquier análisis estadístico o aplicación de inteligencia artificial (Pyle, 1999).
  </template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicador: true,
  }),
}
</script>

<style lang="sass"></style>
