# Narrativa web de calidad del aire

En forma de página web se narra la situación de la contaminación en el Valle de
México. Esta página web esta hecha en html usando javascript y css para dar estilo a la
misma.

##### Versión actual: 1.1

- Se hicieron correcciones a la redacción del texto.
- Se cambiaron los colores de los url's de referencia para que fueran acorde a la paleta de colores
del documento.
- La imagen de movilidad se hizo más grande para que se pudiera apreciar a simple vista.
- Se agregaron algunos subtítulos para dar mayor cohesión a la narrativa.
- Se redujo la duración de la animación de las gráficas de enfermedades circulatorias y respiratorias. 
Esto para que vaya acorde a la velocidad de lectura del público.
- Se agregó el logo de CONACyT al final de la narrativa y se abreviaron los nombres de 
los colaboradores.


##### Versión: 1.0

- url interno de la narrativa: http://172.25.13.10:8001 

- Algunas gráficas y animaciones están hechas usando D3 (estacionalidad de la 
concentración de los contaminantes y enfermedades respiratorias y circulatorias). En 
la sección de requerimientos se especifica que bibliotecas de javascript son necesarias.

- Se incluye un jupyter notebook donde se ilustra la obtención de los promedios de 
concentraciones de los contaminantes por hora del día y mes del año.

## Instalación y requerimientos

No es necesario instalar bibliotecas o software extra para visualizar la narrativa. 
Basta con correr en un navegador el archivo `index.html`. Todas las bibliotecas de
javascript necesarias se incluyen en este repositorio. Se da un listado de las 
bibliotecas usadas.

- D3: https://github.com/d3/d3
- radarChart.js: https://gist.github.com/nbremer/6506614
- scrollama: https://github.com/russellgoldenberg/scrollama
- jquery-2.2.4: http://jquery.com/
