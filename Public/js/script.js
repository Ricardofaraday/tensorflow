console.log('Redes neuronales');

tf.tensor([1,2,3,4], [2,2]).print();

// Creamos el modelo
const model = tf.sequential();
// Capa oculta
const hidden = tf.layers.dense({
    units: 4,
    inputShape: [6],
    activation: "sigmoid"
});
// Agregamos la capa oculta al modelo
model.add(hidden);
// Capa de salida
const output = tf.layers.dense({
    units: 3,
    activation: "sigmoid"
});
// Agregamos la capa de salida al modelo
model.add(output);

// Otimizador 
// mientras mayor el nro mayor el costo para el equipo
const sgdOptions = tf.train.sgd(0.1);
// Compilamos el modelo
// model.compiler({
//     optimizer: sgdOptions,
//     loss: tf.losses.meanSquaredError /*Asignamos la forma de reducir la perdida*/
// });
// meanSquaredError: evita que las perdidas sean negativas
// elevando todas las perdidas al cuadrado asi volverlas +

// Datos:
const xArray = [
    [0,0,0,0,1,1],
    [0,0,0,1,1,0],
    [1,1,0,0,0,0],
    [0,1,1,0,0,0],
    [0,0,1,1,0,0],
    [0,0,1,1,1,0],
  ];
const yArray = [
    [0,0,1],
    [0,0,1],
    [1,0,0],
    [1,0,0],
    [0,1,0],
    [0,1,1],
];
// Create a dataset from the JavaScript array
const xDataset = tf.data.array(xArray);
const yDataset = tf.data.array(yArray);

const xyDataset = tf.data.zip({xs: xDataset, ys: yDataset})
                .batch(4)
                .shuffle(4);

async function intento() {
    model.compile({optimizer: sgdOptions, loss: 'meanSquaredError'});    
    const history = await model.fitDataset(xyDataset, {
                        epochs: 10,
                        callbacks: {onEpochEnd: (epoch, logs) => console.log(logs.loss)}
                    });
    console.log('history', history.history.loss[0]);

    // const xs = tf.tensor([0,0,0,0,1,1]);
    // let pred = model.predict(tf.tensor1d([0, 0, 0, 0, 1, 0])).print();
    // var readable_output = pred.dataSync();
    // console.log(readable_output);
    const result = await model.evaluate([0, 0, 0, 0, 1, 0], outputs, {batchSize: 64});
    console.log('Accuracy is:')
    result[1].print()
}

intento();


