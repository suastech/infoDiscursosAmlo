//Se crea un objeto que contabilizará las menciones para cada año:
let counter = {"2018": 0, "2019": 0, "2020": 0, "2021": 0, "2022": 0, "2023": 0, "2024": 0};

//Una vez obtenidos los archivos, se itera sobre su contenido con el método exec y una expresión regular.
let expression = new RegExp(`\\b${phrase}\\b`, 'gi');
for (const file of files) {
    let match;
    /*La expresión regular busca coincidencias exactas de una palabra y registra en qué año se produjo.
    Del título del archivo se extrae el año para registrar cada ocurrencia en el contador.*/
    while ((match = expression.exec(file.content.toLowerCase())) !== null) {
      counter[file.name.substring(0, 4)] += 1;
    }
}

//Finalmente, se devuelven los valores de las repeticiones de la palabra o frase para cada año. 
return main_counter