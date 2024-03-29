const ESTILOS = ['Estilo 1', 'Estilo 2', 'Estilo 3', 'Estilo 4', 
'Estilo 5', 'Estilo 6', 'Estilo 7', 'Estilo 8'];
const ESTILOS_NRO = ESTILOS.length;

// SET DE DATOS PARA LOS ESTILOS DE APRENDIZAJE
const ESTILOS_DATA = [
    [0.9, 0.8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0.8, 0.8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0.8, 0.9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0.7, 0.9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0.9, 0.9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0.7, 0.9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0.9, 0.8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0.8, 0.8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0.8, 0.9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0.9, 0.8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

    [0, 0.8, 0.9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0.8, 0.9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0.8, 0.9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0.8, 0.9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0.8, 0.9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0.8, 0.9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0.8, 0.9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0.8, 0.9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0.8, 0.9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0.8, 0.9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    
    [0, 0, 0.9, 0.8, 0, 0, 0, 0, 0, 0, 0, 0, 2],
    [0, 0, 0.9, 0.8, 0, 0, 0, 0, 0, 0, 0, 0, 2],
    [0, 0, 0.9, 0.8, 0, 0, 0, 0, 0, 0, 0, 0, 2],
    [0, 0, 0.9, 0.8, 0, 0, 0, 0, 0, 0, 0, 0, 2],
    [0, 0, 0.9, 0.8, 0, 0, 0, 0, 0, 0, 0, 0, 2],
    [0, 0, 0.9, 0.8, 0, 0, 0, 0, 0, 0, 0, 0, 2],
    [0, 0, 0.9, 0.8, 0, 0, 0, 0, 0, 0, 0, 0, 2],
    [0, 0, 0.9, 0.8, 0, 0, 0, 0, 0, 0, 0, 0, 2],
    [0, 0, 0.9, 0.8, 0, 0, 0, 0, 0, 0, 0, 0, 2],
    [0, 0, 0.9, 0.8, 0, 0, 0, 0, 0, 0, 0, 0, 2],

    [0, 0, 0, 0, 0.8, 0.9, 0, 0, 0, 0, 0, 0, 3],
    [0, 0, 0, 0, 0.8, 0.9, 0, 0, 0, 0, 0, 0, 3],
    [0, 0, 0, 0, 0.8, 0.9, 0, 0, 0, 0, 0, 0, 3],
    [0, 0, 0, 0, 0.9, 0.7, 0, 0, 0, 0, 0, 0, 3],
    [0, 0, 0, 0, 0.8, 0.9, 0, 0, 0, 0, 0, 0, 3],
    [0, 0, 0, 0, 0.8, 0.9, 0, 0, 0, 0, 0, 0, 3],
    [0, 0, 0, 0, 0.9, 0.9, 0, 0, 0, 0, 0, 0, 3],
    [0, 0, 0, 0, 0.8, 0.9, 0, 0, 0, 0, 0, 0, 3],
    [0, 0, 0, 0, 0.8, 0.8, 0, 0, 0, 0, 0, 0, 3],
    [0, 0, 0, 0, 0.8, 0.9, 0, 0, 0, 0, 0, 0, 3],

    [0, 0, 0, 0, 0, 0.9, 0.9, 0, 0, 0, 0, 0, 4],
    [0, 0, 0, 0, 0, 0.9, 0.9, 0, 0, 0, 0, 0, 4],
    [0, 0, 0, 0, 0, 0.9, 0.9, 0, 0, 0, 0, 0, 4],
    [0, 0, 0, 0, 0, 0.7, 0.9, 0, 0, 0, 0, 0, 4],
    [0, 0, 0, 0, 0, 0.9, 0.9, 0, 0, 0, 0, 0, 4],
    [0, 0, 0, 0, 0, 0.9, 0.9, 0, 0, 0, 0, 0, 4],
    [0, 0, 0, 0, 0, 0.9, 0.9, 0, 0, 0, 0, 0, 4],
    [0, 0, 0, 0, 0, 0.9, 0.9, 0, 0, 0, 0, 0, 4],
    [0, 0, 0, 0, 0, 0.8, 0.9, 0, 0, 0, 0, 0, 4],
    [0, 0, 0, 0, 0, 0.9, 0.9, 0, 0, 0, 0, 0, 4],

    [0, 0, 0, 0, 0, 0, 0.9, 0.9, 0, 0, 0, 0, 5],
    [0, 0, 0, 0, 0, 0, 0.9, 0.9, 0, 0, 0, 0, 5],
    [0, 0, 0, 0, 0, 0, 0.9, 0.9, 0, 0, 0, 0, 5],
    [0, 0, 0, 0, 0, 0, 0.9, 0.9, 0, 0, 0, 0, 5],
    [0, 0, 0, 0, 0, 0, 0.8, 0.9, 0, 0, 0, 0, 5],
    [0, 0, 0, 0, 0, 0, 0.9, 0.9, 0, 0, 0, 0, 5],
    [0, 0, 0, 0, 0, 0, 0.9, 0.9, 0, 0, 0, 0, 5],
    [0, 0, 0, 0, 0, 0, 0.9, 0.9, 0, 0, 0, 0, 5],
    [0, 0, 0, 0, 0, 0, 0.9, 0.9, 0, 0, 0, 0, 5],
    [0, 0, 0, 0, 0, 0, 0.9, 0.9, 0, 0, 0, 0, 5],

    [0, 0, 0, 0, 0, 0, 0, 0.9, 0.9, 0, 0, 0, 6],
    [0, 0, 0, 0, 0, 0, 0, 0.9, 0.9, 0, 0, 0, 6],
    [0, 0, 0, 0, 0, 0, 0, 0.9, 0.9, 0, 0, 0, 6],
    [0, 0, 0, 0, 0, 0, 0, 0.9, 0.9, 0, 0, 0, 6],
    [0, 0, 0, 0, 0, 0, 0, 0.8, 0.9, 0, 0, 0, 6],
    [0, 0, 0, 0, 0, 0, 0, 0.9, 0.9, 0, 0, 0, 6],
    [0, 0, 0, 0, 0, 0, 0, 0.9, 0.9, 0, 0, 0, 6],
    [0, 0, 0, 0, 0, 0, 0, 0.7, 0.9, 0, 0, 0, 6],
    [0, 0, 0, 0, 0, 0, 0, 0.9, 0.9, 0, 0, 0, 6],
    [0, 0, 0, 0, 0, 0, 0, 0.8, 0.9, 0, 0, 0, 6],

    [0, 0, 0, 0, 0, 0, 0, 0, 0.9, 0.9, 0, 0, 7],
    [0, 0, 0, 0, 0, 0, 0, 0, 0.9, 0.9, 0, 0, 7],
    [0, 0, 0, 0, 0, 0, 0, 0, 0.9, 0.9, 0, 0, 7],
    [0, 0, 0, 0, 0, 0, 0, 0, 0.9, 0.9, 0, 0, 7],
    [0, 0, 0, 0, 0, 0, 0, 0, 0.9, 0.9, 0, 0, 7],
    [0, 0, 0, 0, 0, 0, 0, 0, 0.9, 0.9, 0, 0, 7],
    [0, 0, 0, 0, 0, 0, 0, 0, 0.9, 0.9, 0, 0, 7],
    [0, 0, 0, 0, 0, 0, 0, 0, 0.9, 0.9, 0, 0, 7],
    [0, 0, 0, 0, 0, 0, 0, 0, 0.8, 0.9, 0, 0, 7],
    [0, 0, 0, 0, 0, 0, 0, 0, 0.9, 0.9, 0, 0, 7],

    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6],
    
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6]
];

/**
 * Convertir los Estilos data a 'tf.tensor's
 * 
 * @param 
 */

function getEstilosData(testDividir) {
    return tf.tidy(() => {
        const datosPorClase = [];
        const resultadoPorClase = [];

        for (let i = 0; i < ESTILOS.length; i++) {
            datosPorClase.push([]);
            resultadoPorClase.push([]);
        }

        for (const fila of ESTILOS_DATA) {
            const prediccion = fila[fila.length - 1];
            const data = fila.slice(0, fila.length - 1); //
            datosPorClase[prediccion].push(data); //
            resultadoPorClase[prediccion].push(prediccion); //
        }

        const xTrains = [];
        const yTrains = [];
        const xTests = [];
        const yTests = [];

        for (let i = 0; i < ESTILOS.length; i++) {
            const [xTrain, yTrain, xTest, yTest] = 
                convertToTensors(datosPorClase[i], resultadoPorClase[i], testDividir);

            xTrains.push(xTrain);
            yTrains.push(yTrain);
            xTests.push(xTest);
            yTests.push(yTest);
        }

        const concatAxis = 0;
        const test1 = xTrains;
        const test2 = tf.concat(xTrains, concatAxis);
        console.log('test1 concat', test1);
        console.log('test2 concat', test2);
        return [
            tf.concat(xTrains, concatAxis), tf.concat(yTrains, concatAxis),
            tf.concat(xTests, concatAxis), tf.concat(yTests, concatAxis)
        ];

    });
}

/**
 * 
 */
function convertToTensors (data, resultado, testDividir) {
    // console.log('data', data);
    // console.log('resultado', resultado);
    // console.log('testDividir', testDividir);
    const numEjemplos = data.length;
    if (numEjemplos !== resultado.length) {
        throw new Error('data y split tienen distintos numeros de ejemplos');
    }
    const numTestEjemplos = Math.round(numEjemplos * testDividir);
    const numTrainEjemplos = numEjemplos - numTestEjemplos;

    const nro_recursos = data[0].length;

    // Creamos un tensor 2d para las entradas (recursos)
    const xs = tf.tensor2d(data, [numEjemplos, nro_recursos]);
    // Creamos un tensor 1D 
    const ys = tf.oneHot(tf.tensor1d(resultado).toInt(), ESTILOS_NRO);
    // Dividimos la data en sets de Entrenamiento y Test usando 'slice'
    const xTrain = xs.slice([0, 0], [numTrainEjemplos, nro_recursos]);
    const xTest = xs.slice([numTrainEjemplos, 0], [numTestEjemplos, nro_recursos]);
    const yTrain = ys.slice([0, 0], [numTrainEjemplos, ESTILOS_NRO]);
    const yTest = ys.slice([0, 0], [numTestEjemplos, ESTILOS_NRO]);

    return [xTrain, yTrain, xTest, yTest];
}

// console.log(ESTILOS_DATA);


