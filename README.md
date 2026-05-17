# Narrativa web de calidad del aire

En forma de página web se narra la situación de la contaminación en el Valle de
México. Esta página web esta hecha en html usando javascript y css para dar estilo a la
misma.

## Versión actual: 1.2

- Revisión de accesibilidad
- Se agregaron secciones, se corrigieron etiquetas de titulos consecutivos, se utilizo html semantico y se agregaron textos descriptivos a imágenes con datos
- Quitando la imagen de fondo de los CSS se maneja en pasos con JS
- Arreglando bug de carga cuando un paso no lleva imagen relacionada
- Quitando mensajes de consola
- Se vinvularon las bibliotecas localmente para que no necesite conexion a internet
- Se agrego la tipografia localmente para no depender de nada de internet

## Versión: 1.1

- Se hicieron correcciones a la redacción del texto.
- Se cambiaron los colores de los url's de referencia para que fueran acorde a la paleta de colores
del documento.
- La imagen de movilidad se hizo más grande para que se pudiera apreciar a simple vista.
- Se agregaron algunos subtítulos para dar mayor cohesión a la narrativa.
- Se redujo la duración de la animación de las gráficas de enfermedades circulatorias y respiratorias. 
Esto para que vaya acorde a la velocidad de lectura del público.
- Se agregó el logo de CONACyT al final de la narrativa y se abreviaron los nombres de 
los colaboradores.


## Versión: 1.0

- Algunas gráficas y animaciones están hechas usando D3 (estacionalidad de la 
concentración de los contaminantes y enfermedades respiratorias y circulatorias). En 
la sección de requerimientos se especifica que bibliotecas de javascript son necesarias.

- Se incluye un jupyter notebook donde se ilustra la obtención de los promedios de 
concentraciones de los contaminantes por hora del día y mes del año.

## Instalación y requerimientos

No es necesario instalar bibliotecas o software extra para visualizar la narrativa. 
Todas las bibliotecas de javascript necesarias se incluyen en este repositorio. 
Se da un listado de las bibliotecas usadas.

- D3: https://github.com/d3/d3
- radarChart.js: https://gist.github.com/nbremer/6506614
- scrollama: https://github.com/russellgoldenberg/scrollama
- jquery-2.2.4: http://jquery.com/

## Visualización en local

Para visualizar correctamente las gráficas se requiere levantar un servidor local

```python
python3 -m http.server 8000
```

Y abrir el navegador en la ruta

```
http://localhost:8000/
```

NOTA: 
*Si se abre directamente el archivo `index.html` en el navegador, se muestra el scrollytelling excepto las gráficas de 'enfermedades circulatorias' y 'enfermedades respiratorias' de la sección de 'Impacto en la salud'*
