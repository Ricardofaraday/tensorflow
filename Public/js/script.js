console.log('Redes neuronales');

tf.tensor([1,2,3,4], [2,2]).print();

// // Creamos el modelo
// const model = tf.sequential();
// // Capa oculta
// const hidden = tf.layers.dense({
//     units: 4,
//     inputShape: [6],
//     activation: "sigmoid"
// });
// // Agregamos la capa oculta al modelo
// model.add(hidden);
// // Capa de salida
// const output = tf.layers.dense({
//     units: 3,
//     activation: "sigmoid"
// });
// // Agregamos la capa de salida al modelo
// model.add(output);

// // Otimizador 
// // mientras mayor el nro mayor el costo para el equipo
// const sgdOptions = tf.train.sgd(0.1)
// // Compilamos el modelo
// model.compiler({
//     optimizer: sgdOptions,
//     loss: tf.losses.meanSquaredError /*Asignamos la forma de reducir la perdida*/
// });
// // meanSquaredError: evita que las perdidas sean negativas
// // elevando todas las perdidas al cuadrado asi volverlas +

// // Datos:
// const x = tf.tensor3d({

// })

