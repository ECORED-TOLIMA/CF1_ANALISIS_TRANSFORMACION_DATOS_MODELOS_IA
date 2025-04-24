<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Estadística descriptiva
    
    .row.justify-content-center.align-items-centerr.mb-4
      .col-lg-12(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema2/img1.png', alt='Texto que describa la imagen')
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12(data-aos="fade-left")
        p Los métodos estadísticos se dividen en dos grandes categorías, estadística descriptiva y estadística inferencial. La estadística descriptiva se encarga de recopilar, organizar, analizar y presentar datos de manera resumida, sin realizar inferencias sobre la población de origen. En contraste, la estadística inferencial busca extraer conclusiones sobre una población a partir de una muestra, utilizando técnicas como la estimación de parámetros y el contraste de hipótesis (Aroca, 2009).
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-2(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema2/img2.svg', alt='Texto que describa la imagen')

      .col-lg-8
        p Este programa de formación complementario se centrará en la estadística descriptiva, la cual permite representar la información mediante tablas, gráficos y medidas estadísticas que sintetizan las características de los datos (Viedma, 2018). Dependiendo del origen de las fuentes, la estadística descriptiva organiza y clasifica los datos obtenidos a través de observaciones. Para ello, se utilizan herramientas como distribuciones de frecuencia, medidas de tendencia central (media, mediana, moda) y medidas de dispersión (rango, varianza, desviación estándar) (Del Pino, 2008).
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-10
        .cajon.color-secundario.p-4.mb-4
          p Dentro de la estadística descriptiva, es posible diferenciar entre la estadística univariada y la estadística bivariada. La estadística univariada analiza una sola variable a la vez, mientras que la estadística bivariada estudia la relación entre dos variables, utilizando herramientas como tablas de contingencia, diagramas de dispersión y coeficientes de correlación.
    p Es importante señalar que la estadística descriptiva no emplea el cálculo de probabilidades ni permite realizar inferencias más allá de los datos analizados. Su objetivo principal es resumir y presentar la información de manera clara y comprensible, facilitando su interpretación y uso en la toma de decisiones (Del Pino, 2008).
    
    separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1	Niveles de medición
    p.mb-4 Los niveles de medición en estadística describen las propiedades de los datos y determinan qué tipo de operaciones matemáticas y análisis estadísticos pueden aplicarse a ellos. Según la clasificación de Stevens (1946), existen cuatro niveles de medición: nominal, ordinal, de intervalo y de razón. Cada nivel tiene características particulares que determinan cómo se pueden interpretar y analizar los datos:
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-10
        LineaTiempoD.color-acento-botones.mb-4
          .row(numero="A" titulo="Nivel nominal")
            .col-md-12.mb-4.mb-md-0
              p Es el más básico y solo permite clasificar los datos en categorías sin establecer un orden entre ellas. No hay una jerarquía o secuencia lógica entre las categorías, y las únicas operaciones posibles son la clasificación y el conteo. A continuación, se presentan algunos ejemplos:
            .col-md-12.bgblanco.p-3
              ul.lista-ul
                li
                  i.fas.fa-angle-right
                  | Género (masculino, femenino, otro).
                li
                  i.fas.fa-angle-right
                  | Estado civil (soltero, casado, viudo, divorciado).
                li
                  i.fas.fa-angle-right
                  | Nacionalidad (colombiana, argentina, mexicana).
                li
                  i.fas.fa-angle-right
                  | Marcas de teléfonos (Samsung, Apple, Xiaomi).
              figure
                img(src='@/assets/curso/temas/tema2/img3.png', alt='Texto que describa la imagen')
          .row(numero="B" titulo="Nivel ordinal")
            .col-md-12.mb-4.mb-md-0
              p Permite clasificar los datos en categorías con un orden o jerarquía, pero sin indicar diferencias cuantificables entre ellas. Se puede establecer una secuencia, pero no es posible medir con precisión la distancia entre los valores. A continuación, se presentan algunos ejemplos:
            .col-md-12.bgblanco.p-3
              ul.lista-ul
                li
                  i.fas.fa-angle-right
                  | Grados militares (soldado, cabo, sargento, teniente).
                li
                  i.fas.fa-angle-right
                  | Nivel de satisfacción en una encuesta (bajo, medio, alto)
                li
                  i.fas.fa-angle-right
                  | Clasificación en una competencia (primer lugar, segundo lugar, tercer lugar).
                li
                  i.fas.fa-angle-right
                  | Nivel educativo (primaria, secundaria, universitaria, posgrado).
              figure
                img(src='@/assets/curso/temas/tema2/img4.png', alt='Texto que describa la imagen')
          .row(numero="C" titulo="Nivel de intervalo")
            .col-md-12.mb-4.mb-md-0
              p No solo establece un orden, sino que también permite medir la distancia entre los valores. Sin embargo, no tiene un punto cero absoluto, lo que significa que no se pueden hacer afirmaciones proporcionales sobre los valores. A continuación, se presentan algunos ejemplos:
            .col-md-12.bgblanco.p-3
              ul.lista-ul
                li
                  i.fas.fa-angle-right
                  | Temperatura en grados Celsius o Fahrenheit (0 °C no significa ausencia de temperatura).
                li
                  i.fas.fa-angle-right
                  | Años en un calendario (el año 0 es arbitrario).
                li
                  i.fas.fa-angle-right
                  | Puntuaciones en un test de inteligencia (IQ).

              figure
                img(src='@/assets/curso/temas/tema2/img3.png', alt='Texto que describa la imagen')
          .row(numero="D" titulo="Nivel de razón")
            .col-md-12.mb-4.mb-md-0
              p Es el más completo, ya que permite establecer un orden, medir la distancia entre los valores y tiene un punto cero absoluto, lo que permite realizar operaciones matemáticas como la multiplicación y la división. A continuación, se presentan algunos ejemplos:
            .col-md-12.bgblanco.p-3
              ul.lista-ul
                li
                  i.fas.fa-angle-right
                  | Ingresos mensuales de una persona ($0 indica ausencia de ingresos).
                li
                  i.fas.fa-angle-right
                  | Edad de una persona (20 años es el doble de 10 años).
                li
                  i.fas.fa-angle-right
                  | Peso en kilogramos.
                li
                  i.fas.fa-angle-right
                  | Distancia en kilómetros.

              figure
                img(src='@/assets/curso/temas/tema2/img3.png', alt='Texto que describa la imagen')

    p.mb-4 En la tabla 6 se presenta una comparación de los niveles de medición con sus características principales:

    .titulo-sexto.color-acento-contenido.offset-1(data-aos="zoom-in")
      h5 Tabla 6.
      span  #[i Comparación de los niveles de medición]

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .tabla-a.color-acento-contenido.mb-4(data-aos="fade-left")
          table(alt="")
            thead
              tr
                th Nivel de medición	
                th Clasificación	
                th Orden	
                th Diferencia cuantificable	
                th Punto cero absoluto	
                th Ejemplo
            tbody
              tr
                td Nominal	
                td Sí	
                td No	
                td No	
                td No	
                td Color de ojos.
              tr
                td Ordinal	
                td Sí	
                td Sí	
                td No	
                td No	
                td Nivel socioeconómico.
              tr
                td Intervalo	
                td Sí	
                td Sí	
                td Sí		
                td No	
                td Temperatura en °C.	
              tr
                td Razón	
                td Sí	
                td Sí	
                td Sí	
                td Sí	
                td Peso en kg.
    p La correcta identificación del nivel de medición de una variable es crucial para seleccionar las técnicas estadísticas adecuadas y evitar interpretaciones erróneas de los datos.
    separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2	Variables categóricas
    p.mb-4 En el campo de la estadística descriptiva, una variable categórica clasifica los datos en grupos o categorías según cualidades o atributos, sin asignarles un valor numérico inherente. Sin embargo, en algunos casos, pueden recibir códigos numéricos solo para facilitar su análisis.
    p.mb-4 Las variables categóricas se dividen en dos tipos principales:
    .row.justify-content-center.align-items-center.mb-4
        .col-lg-10.movil(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/tema2/img7_1.svg', alt='Texto que describa la imagen')
        .col-lg-10.desktop(data-aos="zoom-in")
          ImagenInfografica.color-acento-botones.mb-4
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/tema2/img7.svg', alt='Texto que describa la imagen')
            .tarjeta.color-primario.tarjeta--BG02.p-3(x="15%" y="39%" numero="+")
              p Ejemplos: género, país de origen y carrera universitaria.
            .tarjeta.color-primario.tarjeta--BG02.p-3(x="85%" y="39%" numero="+")
              p Ejemplos: nivel de satisfacción y nivel educativo.
    p.mb-4 En la tabla 7, se presentan ejemplos de registros de personas con variables categóricas nominales y ordinales.

    .titulo-sexto.color-acento-contenido.offset-1(data-aos="zoom-in")
      h5 Tabla 7.
      span  #[i Ejemplo de tabla de datos]

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .tabla-a.color-acento-contenido.mb-4(data-aos="fade-left")
          table(alt="")
            thead
              tr
                th ID de la persona	
                th Nombre	
                th Género (Nominal)	
                th Carrera (Nominal)	
                th Nivel de satisfacción (Ordinal)	
                th Nivel educativo (Ordinal)
            tbody
              tr
                td E001	
                td Laura Gómez	
                td Femenino	
                td Ingeniería	
                td Alto	
                td Universitario	
              tr
                td E002	
                td Pedro Martínez	
                td Masculino	
                td Psicología	
                td Medio	
                td Secundario
              tr
                td E003	
                td Ana Torres	
                td Femenino	
                td Medicina	
                td Bajo	
                td Universitario
              tr
                td E004	
                td Juan Pérez	
                td Masculino	
                td Derecho	
                td Alto	
                td Técnico
              tr
                td E005	
                td Silvia Ramírez	
                td Femenino	
                td Ingeniería	
                td Medio	
                td Universitario
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12
        p Las variables categóricas suelen organizarse en tablas de frecuencia, que permiten visualizar la cantidad de veces que aparece cada categoría dentro de un conjunto de datos. Por ejemplo, en una encuesta realizada a 20 personas sobre su nivel de satisfacción con un curso, se obtuvieron los siguientes resultados: 4 personas indicaron un nivel de satisfacción bajo, 9 personas lo calificaron como medio y 7 personas como alto. La tabla 8 muestra la distribución de frecuencias correspondiente, facilitando el análisis de estos datos:

    .titulo-sexto.color-acento-contenido.offset-1(data-aos="zoom-in")
      h5 Tabla 8.
      span  #[i Representación de variables categóricas]

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .tabla-a.color-acento-contenido.mb-4(data-aos="fade-left")
          table(alt="")
            thead
              tr
                th Nivel de satisfacción	
                th Frecuencia absoluta (f)	
                th Frecuencia relativa (%)	
                th Frecuencia acumulada
            tbody
              tr
                td Bajo	
                td 4	
                td 20 %	
                td 4
              tr
                td Medio	
                td 9	
                td 45 %	
                td 13
              tr
                td Alto	
                td 7	
                td 35 %	
                td 20
              tr
                td Total	
                td 20	
                td 100 %	
                td —
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-4.col-md-6.col-sm-8.mb-4(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/tema2/img8.png', alt='Texto que describa la imagen')
        .col-lg-8.col-md-6.col-sm-8.mb-4(data-aos="fade-left")
          p Las variables categóricas se pueden visualizar mediante:
          .row.justify-content-center
            .col-lg-6.mb-4.col-md-6.col-sm-8.mb-4(data-aos="fade-left")
              .tarjeta-avatar.h-100
                img(src='@/assets/curso/temas/tema2/img9.svg' alt='AvatarTop')
                .tarjeta.color-secundario.tarjeta.color5.w-100
                  .text-black.p-4
                    h4.text-center Gráficos de barras
                    p.text-center Representan la frecuencia de cada categoría mediante barras de diferente altura.
            .col-lg-6.mb-4(data-aos="fade-left")
              .tarjeta-avatar.h-100
                img(src='@/assets/curso/temas/tema2/img10.svg' alt='AvatarTop')
                .tarjeta.color-secundario.tarjeta.color5.w-100
                  .text-black.p-4
                    h4.text-center Gráficos circulares o de pastel
                    p.text-center Presentan la proporción de cada categoría como un sector de un círculo.
          p A continuación, se presenta la tabla 9, que servirá como base para graficar los datos:
    .titulo-sexto.color-acento-contenido.offset-1(data-aos="zoom-in")
      h5 Tabla 9.
      span  #[i Tabla de frecuencias variable categórica nominal]

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .tabla-a.color-acento-contenido.mb-4(data-aos="fade-left")
          table(alt="")
            thead
              tr
                th Lenguaje de programación	
                th Frecuencia absoluta (f)	
                th Frecuencia relativa (%)
            tbody
              tr
                td Python	
                td 12	
                td 40 %
              tr
                td Java	
                td 8	
                td 26.7 %
              tr
                td C++	
                td 6	
                td 20 %
              tr
                td JavaScript	
                td 4	
                td 13.3 %
              tr
                td Total	
                td 30	
                td 100 %
    p.mb-4 Estos datos pueden representarse con un gráfico de barras o un gráfico circular para una mayor claridad en su interpretación para la frecuencia absoluta:
    
    .titulo-sexto.color-acento-contenido.offset-1(data-aos="zoom-in")
      h5 Figura 1.
      span  #[i Gráfico de barras ]

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10.movil(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema2/img11_1.svg', alt='Texto que describa la imagen')
      .col-lg-10.desktop(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema2/img11.svg', alt='Texto que describa la imagen')

    .titulo-sexto.color-acento-contenido.offset-1(data-aos="zoom-in")
      h5 Figura 2.
      span  #[i Gráfico de barras ]

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10.movil(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema2/img12_1.svg', alt='Texto que describa la imagen')
      .col-lg-10.desktop(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema2/img12.svg', alt='Texto que describa la imagen')
    p Las variables categóricas permiten clasificar datos cualitativos en grupos diferenciados, ya sean nominales (sin jerarquía) u ordinales (con jerarquía). Para analizarlas, se pueden usar tablas de frecuencia y gráficos visuales que faciliten su interpretación
    separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3	Variables numéricas
    p.mb-4 En estadística descriptiva, una variable numérica o cuantitativa es aquella cuyos valores son números que representan cantidades o medidas. Estos valores tienen un significado intrínseco y permiten realizar operaciones aritméticas, como sumas, restas o cálculos de promedios. Las variables numéricas son fundamentales para el análisis estadístico, ya que permiten medir y comparar características dentro de un conjunto de datos.
    p.mb-4 Estas variables se clasifican en dos tipos principales:
    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-4
            figure
              img(src='@/assets/curso/temas/tema2/img13.svg', alt='Texto que describa la imagen')
        h4 Variables discretas
        p Toman valores aislados, generalmente números enteros, sin posibilidad de valores intermedios entre dos consecutivos. Suelen surgir de procesos de conteo, como el número de materias cursadas o la cantidad de hijos en una familia.

      .col-md.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-4
          .col-4
            figure
              img(src='@/assets/curso/temas/tema2/img14.svg', alt='Texto que describa la imagen')
        h4 Variables continuas
        p Pueden asumir cualquier valor dentro de un rango o intervalo determinado, incluidos valores decimales. Son comunes en mediciones como la estatura, la temperatura o el tiempo empleado en una tarea.

    p.mb-4 Para analizar las variables numéricas, se utilizan herramientas como medidas de tendencia central (media, mediana y moda) y medidas de dispersión (rango, desviación estándar y varianza). Además, pueden representarse mediante histogramas, diagramas de caja o polígonos de frecuencia para facilitar su interpretación.
    p En la siguiente tabla, se presentan 10 registros con datos que explican el concepto de variables numéricas en estadística descriptiva, diferenciando entre discretas y continuas:

    .titulo-sexto.color-acento-contenido.offset-1(data-aos="zoom-in")
      h5 Tabla 10.
      span  #[i Ejemplo de valores de variables numéricas]

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .tabla-a.color-acento-contenido.mb-4(data-aos="fade-left")
          table(alt="")
            thead
              tr
                th ID de la persona	
                th Edad (años)	
                th Estatura (cm)	
                th Cantidad de materias cursadas	
                th Promedio académico
            tbody
              tr
                td E001	
                td 19	
                td 165.2	
                td 5	
                td 3.8
              tr
                td E002	
                td 21	
                td 172.4	
                td 6	
                td 4.2
              tr
                td E003	
                td 20	
                td 160.8	
                td 4	
                td 3.5
              tr
                td E004	
                td 22	
                td 168.0	
                td 6	
                td 4.0
              tr
                td E005	
                td 23	
                td 175.5	
                td 7	
                td 3.9
              tr
                td E006	
                td 19	
                td 162.1	
                td 5	
                td 3.2
              tr
                td E007	
                td 24	
                td 178.3	
                td 7	
                td 4.5
              tr
                td E008	
                td 20	
                td 169.6	
                td 5	
                td 4.1
              tr
                td E009	
                td 21	
                td 171.0	
                td 6	
                td 3.7
              tr
                td E010	
                td 22	
                td 166.7	
                td 6	
                td 4.3
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2
        figure
          img(src='@/assets/curso/temas/tema2/img15.svg', alt='Texto que describa la imagen')
      .col-lg-10
        p En la tabla se presentan ejemplos de variables numéricas discretas y continuas:
        ul.lista-ul
          li
            i.fas.fa-angle-right
            | Variables discretas: la edad (en años) y la cantidad de materias cursadas son variables discretas, ya que toman valores enteros sin fracciones intermedias.
          li
            i.fas.fa-angle-right
            | Variables continuas: la estatura (en centímetros) y el promedio académico son variables continuas, pues pueden tomar cualquier valor dentro de un rango, incluyendo valores decimales.

    separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.4	Medidas de tendencia central y dispersión
    
    p.mb-4 En estadística descriptiva, las medidas de tendencia central (MTC) son valores representativos de un conjunto de datos. También se les conoce como promedios, ya que proporcionan un valor típico que resume la distribución de los datos (Mesa Guerrero, 2020). Las principales MTC son:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema2/img16.png', alt='Texto que describa la imagen')

      .col-lg-7
        h4 A.	Media aritmética
        p Es el resultado de sumar todos los valores y dividirlos por el número total de observaciones. Su fórmula es:
        .cajon.color-primario.p-4.mb-4
          p Formulas
        p Por ejemplo, si se tienen las edades de cinco aprendices: 20, 22, 24, 21 y 23, la media se calcula como:
    
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12
        h4 B. Mediana
    p.mb-4 Es el valor central cuando los datos están ordenados. Si el número de datos es impar, la mediana es el valor del centro; si es par, se calcula como el promedio de los dos valores centrales.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        p Ejemplo con un número impar de datos:
        ul.lista-ul
          li
            i.fas.fa-angle-right
            | Datos originales: 20, 22, 21, 23, 25.
          li
            i.fas.fa-angle-right
            | Ordenados: 20, 21, 22, 23, 25.
          li
            i.fas.fa-angle-right
            | Mediana: 22 (el valor central).
        p Ejemplo con un número par de datos:
        ul.lista-ul
          li
            i.fas.fa-angle-right
            | Datos ordenados: 15, 18, 20, 25, 30, 35.
          li
            i.fas.fa-angle-right
            | Se toman los dos valores centrales: 20 y 25.
        .cajon.color-primario.p-4.mb-4
          p Mediana = 20 + 25 / 2 = 22.5

      .col-lg-6
        figure
          img(src='@/assets/curso/temas/tema2/img18.svg', alt='Texto que describa la imagen')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        h4 C. Moda
    p.mb-4 Es el valor que ocurre con mayor frecuencia en un conjunto de datos. Puede ser:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        ol.lista-ol--cuadro.lista-ol--separador
          li 
            .lista-ol--cuadro__vineta
              span 1
            | Unimodal: un solo valor más frecuente. Ejemplo: en el conjunto {18, 19, 20, 20, 20, 21, 22, 23}, la moda es 20.
          li 
            .lista-ol--cuadro__vineta
              span 2
            | Bimodal: dos valores con la misma mayor frecuencia. Ejemplo: en {14, 15, 15, 16, 16, 17, 18}, las modas son 15 y 16.
          li 
            .lista-ol--cuadro__vineta
              span 3
            | Multimodal: más de dos valores con la misma mayor frecuencia. Ejemplo: en {12, 13, 14, 14, 15, 15, 16, 17, 17, 18, 18, 19}, las modas son 14, 15, 17 y 18.
          li 
            .lista-ol--cuadro__vineta
              span 4
            | Sin moda: todos los valores aparecen con la misma frecuencia. Ejemplo: en {10, 11, 12, 13, 14, 15}, no hay moda.
    
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-8
        .cajon.color-secundario.p-4.mb-4
          .row.justify-content-center.align-items-center
            .col-lg-2
              figure
                img(src='@/assets/curso/temas/tema2/img19.svg', alt='Texto que describa la imagen')
            .col-lg-10
              p Estas medidas ayudan a describir la distribución de los datos y se eligen según la estructura de la muestra:
              ul.lista-ul
                li
                  i.fas.fa-angle-right
                  | La media aritmética es útil en conjuntos grandes y con distribución normal.
                li
                  i.fas.fa-angle-right
                  | La mediana es preferida cuando hay valores extremos o en muestras pequeñas.
                li
                  i.fas.fa-angle-right
                  | La moda es especialmente relevante en datos cualitativos o cuando se desea conocer el valor más común.
    p.mb-4 Además, existen otras medidas relacionadas, como cuartiles, deciles y percentiles, que ayudan a analizar la dispersión y posición de los datos dentro de la distribución.
    p.mb-4 En conclusión, la estadística descriptiva proporciona herramientas para resumir y comprender un conjunto de datos a través de métodos como la tabulación, la representación gráfica y el cálculo de estadísticos descriptivos (Del Pino, 2008).

    separador
    #t_2_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.5	Visualización de datos y análisis exploratorio
    p.mb-4 La visualización de datos y el análisis exploratorio (AED) son pasos fundamentales en la estadística descriptiva, ya que permiten examinar la distribución, el comportamiento y la estructura de los datos antes de aplicar técnicas más complejas. Su objetivo es ofrecer una representación clara y comprensible de la información recolectada, facilitando la identificación de patrones, tendencias, valores atípicos y posibles errores.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema2/img20.png', alt='Texto que describa la imagen')
      .col-lg-7
        p Dependiendo del tipo de variable, se seleccionan diferentes tipos de gráficos. Para variables categóricas, los gráficos de barras y los diagramas de sectores permiten comparar frecuencias de manera visual. En cambio, para variables numéricas, se utilizan histogramas, diagramas de caja (boxplot) y gráficos de dispersión, que facilitan el análisis de distribución, variabilidad y relaciones entre variables.
        p El análisis exploratorio también contribuye a verificar la calidad de los datos, ya que permite detectar valores inconsistentes, datos faltantes o atípicos que podrían afectar los resultados estadísticos. Esta revisión previa es esencial para decidir si se requiere depuración, transformación o imputación de valores antes de proceder con análisis inferenciales.
        p Actualmente, existen múltiples herramientas tecnológicas que facilitan estos procesos. Programas como Excel, SPSS, R o Python (utilizando bibliotecas como Matplotlib, Seaborn o Pandas), así como plataformas como Power BI y Tableau, permiten generar visualizaciones dinámicas y realizar análisis exploratorio de manera efectiva.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.color-primario.p-4.mb-4
          p En conjunto, la visualización de datos y el AED no solo proporcionan una comprensión inicial de los datos, sino que también orientan la selección de métodos estadísticos adecuados en etapas posteriores del análisis.
</template>

<script>
export default {
  name: 'Tema2',
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
