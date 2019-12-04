const vINPUTS = 12;
const vHIDDEN = 16;
const vOUTPUTS = 8;

async function run() {
  // const data = await getDataFunction();
  console.log('RUN DATA:', recursos);
  //displayDataFunction(recursos);
	const model = createModelFunction();  
	tfvis.show.modelSummary({name: 'Modelo de Clasificacion'}, model);

  const tensorData = prepareDataFunction(recursos);
  console.log('tensorData:', tensorData);
	const {inputs, outputs} = tensorData;
		
	await trainModelFunction(model, inputs, outputs, 100);
  console.log('Done Training');
  
  // const shape = [4, 1];
  // const testTensor = tf.tensor2d([0.95, 0.9, 0, 0], [1, 4]);
  // model.predict(testTensor).print();
  const testTensor = prediccion(model, [0.96, 0.9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  console.log('Prediccion:', testTensor);

  //await evaluateModelFunction(model, inputs, outputs);
}

function prediccion(model, input_array) {
  return tf.tidy(() => {
    let xs = tf.tensor([input_array]);
    let ys = model.predict(xs);
    let y_values = ys.dataSync();
    return y_values;
  });
}

/**
  * @desc creates tensorflow graph
  * @return model
*/
function createModelFunction() {
  const model = tf.sequential(); 
  console.log('entradas', vINPUTS);
  console.log('ocultas', vHIDDEN);
  console.log('salidas', vOUTPUTS);
  model.add(tf.layers.dense({
    inputShape: [vINPUTS], 
    units: vHIDDEN, 
    activation: 'sigmoid'
  }));

  model.add(tf.layers.dense({
    units: vOUTPUTS, 
    activation: 'softmax'
  }));
  // model.add(tf.layers.dense({units: 20, useBias: true, activation: 'sigmoid'}));
  return model;
}


/**
  * @desc creates array of input data for every sample
  * @param json data - complete json that contains wine quality data 
  * @return array of input data
*/
function extractInputs(data)
{
  let inputs = [];
  inputs = data.map(d => [d.recurso1, d.recurso2, d.recurso3, d.recurso4, d.recurso5, d.recurso6, d.recurso7, d.recurso8, d.recurso9, d.recurso10, d.recurso11, d.recurso12]);
	return inputs;
}

/**
  * @desc converts data from json format to tensors
  * @param json data - complete json that contains wine quality data 
  * @return tuple of converted data that can be used for training model
*/
function prepareDataFunction(data) {
  
  return tf.tidy(() => {
    tf.util.shuffle(data);
    
    const inputs = extractInputs(data);
    const outputs = data.map(d => d.estilo);
    console.log('preparando DATA outputs:', inputs);
    console.log('preparando DATA outputs:', outputs);
    const inputTensor = tf.tensor2d(inputs, [inputs.length, inputs[0].length]);
    const outputTensor = tf.oneHot(tf.tensor1d(outputs, 'int32'), 8);

    const inputMax = inputTensor.max();
    const inputMin = inputTensor.min();  
    const outputMax = outputTensor.max();
    const outputMin = outputTensor.min();

    const normalizedInputs = inputTensor
      .sub(inputMin)
      .div(inputMax.sub(inputMin));

    const normalizedoutputs = outputTensor
      .sub(outputMin)
      .div(outputMax.sub(outputMin));

    return {
      inputs: normalizedInputs,
      outputs: normalizedoutputs,
      inputMax,
      inputMin,
      outputMax,
      outputMin,
    }
  });  
}

/**
  * @desc trains model
  * @return trained model
*/
async function trainModelFunction(model, inputs, outputs, epochs) {
  model.compile({
    optimizer: tf.train.sgd(0.1),
    loss: tf.losses.meanSquaredError
  });
  
  const batchSize = 64;
  
  return await model.fit(inputs, outputs, {
    batchSize,
    epochs,
    shuffle: true,
    callbacks: tfvis.show.fitCallbacks(
      { name: 'Training Performance' },
      ['loss', 'meanSquaredError'], 
      { height: 200, callbacks: ['onEpochEnd'] }
    )
  });
}

/******************************************************************/
/******************************************************************/
/******************************************************************/
/******************************************************************/
/******************************************************************/

/**@desc recuperar datos de un json de un archivo local 
 * @return null
*/
function loadJSON(path, callback) {   
  var xobj = new XMLHttpRequest();
      xobj.overrideMimeType("application/json");
  xobj.open('GET', path, true);
  xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {          
          callback(xobj.responseText);
        }
  };
  xobj.send(null);  
}
/**
  * @desc retrieves data from defined location
  * @return wine data as json
*/
async function getDataFunction() {
  
  loadJSON("recursos.json", (response) => {
    const recursos = JSON.parse(response)
    // const data = await recursos.json();
    // console.log('response', data);
    return data;
  });

  // const wineDataReq = await fetch('https://raw.githubusercontent.com/NMZivkovic/file_hosting/master/wine_quality.json');  
  // const wineDataReq = await fetch('http://localhost:8080/alumno/promRecursos');  
  // const wineDataReq = JSON.parse(recursos);
  // console.log('getData', wineDataReq);
  // const wineData = await wineDataReq.json();  
  // return wineData;
}


/**
  * @desc plots one 
  * @param array values - array of values
  * @param string name - name of the plot
  * @param string xoutput - x name 
  * @param string youtput - y name
*/
function singlePlot(values, name, xoutput, youtput)
{
  tfvis.render.scatterplot(
    {name: name},
    {values}, 
    {
      xoutput: xoutput,
      youtput: youtput,
      height: 300,
      xLabel: "Recurso Utilizado",
      yLabel: "Estilo de Aprendizaje"
    }
  );
}

function histograma(values, name, xoutput, youtput) {
  // tfvis.render.barchart(
  //   {name: name}, 
  //   {values},
  //   {
  //    width: 400,
  //    yLabel: 'My value',
  //   }
  // );
  const data = [
    { index: 0, value: 50 },
    { index: 1, value: 100 },
    { index: 2, value: 150 },
   ];
  
  // Render to visor
  const surface = { name: 'Recursos Utilizados', tab: 'Visor' };
  tfvis.render.barchart(surface, values);
}

/**
  * @desc plots one 
  * @param json data - complete json that contains wine quality data 
*/
function displayDataFunction(data){

  
  // const data = [
  //   {index: 'foo', value: 1},{index: 'bar', value: 7}, {index: 3, value: 3},
  //   {index: 5, value: 6}];
  // tfvis.render.barchart(document.getElementById('plot5'), data, {
  //   yLabel: 'My value',
  //   width: 400
  // });
  
  // histograma(1, 1, 1, 1);
  

  let displayData = data.map(d => ({
    x: d.recurso1,
    y: d.estilo
  }));

  singlePlot(displayData, 'Recurso 1 v Estilo', 'Recursos', 'Estilo')

  displayData = data.map(d => ({
    x: d.recurso2,
    y: d.quality
  }));

  singlePlot(displayData, 'Recurso 2 v Estilo', 'Recursos', 'Estilo')

  displayData = data.map(d => ({
    x: d.recurso3,
    y: d.estilo
  }));

  singlePlot(displayData, 'Recurso 3 v Estilo', 'Recursos', 'Estilo')
}

/**
  * @desc evaluates the model
*/
async function evaluateModelFunction(model, inputs, outputs)
{
  const result = await model.evaluate(inputs, outputs, {batchSize: 64});
  console.log('Accuracy is:')
  result[1].print();
}

document.addEventListener('DOMContentLoaded', run);

const recursos = [];
recursos.push({
		"recurso1": 0.91,
		"recurso2": 0.85,		
		"recurso3": 0,
    "recurso4": 0,
    "recurso5": 0,
		"recurso6": 0,		
		"recurso7": 0,
    "recurso8": 0,
    "recurso9": 0,
		"recurso10": 0,		
		"recurso11": 0,
    "recurso12": 0,
    "estilo": 1
	}, {
		"recurso1": 0.9,
		"recurso2": 0.95,		
		"recurso3": 0,
    "recurso4": 0,
    "recurso5": 0,
		"recurso6": 0,		
		"recurso7": 0,
    "recurso8": 0,
    "recurso9": 0,
		"recurso10": 0,		
		"recurso11": 0,
    "recurso12": 0,
    "estilo": 1
	}, {
		"recurso1": 0.94,
		"recurso2": 0.95,		
		"recurso3": 0,
    "recurso4": 0,
    "recurso5": 0,
		"recurso6": 0,		
		"recurso7": 0,
    "recurso8": 0,
    "recurso9": 0,
		"recurso10": 0,		
		"recurso11": 0,
    "recurso12": 0,
    "estilo": 1
	}, {
		"recurso1": 0.8,
		"recurso2": 0.7,		
		"recurso3": 0,
    "recurso4": 0,
    "recurso5": 0,
		"recurso6": 0,		
		"recurso7": 0,
    "recurso8": 0,
    "recurso9": 0,
		"recurso10": 0,		
		"recurso11": 0,
    "recurso12": 0,
    "estilo": 1
	}, {
		"recurso1": 0.7,
		"recurso2": 0.65,		
		"recurso3": 0,
    "recurso4": 0,
    "recurso5": 0,
		"recurso6": 0,		
		"recurso7": 0,
    "recurso8": 0,
    "recurso9": 0,
		"recurso10": 0,		
		"recurso11": 0,
    "recurso12": 0,
    "estilo": 1
	}, {
		"recurso1": 0.86,
		"recurso2": 0.96,		
		"recurso3": 0,
    "recurso4": 0,
    "recurso5": 0,
		"recurso6": 0,		
		"recurso7": 0,
    "recurso8": 0,
    "recurso9": 0,
		"recurso10": 0,		
		"recurso11": 0,
    "recurso12": 0,
    "estilo": 1
	}, {
		"recurso1": 0.91,
		"recurso2": 0.81,		
		"recurso3": 0,
    "recurso4": 0,
    "recurso5": 0,
		"recurso6": 0,		
		"recurso7": 0,
    "recurso8": 0,
    "recurso9": 0,
		"recurso10": 0,		
		"recurso11": 0,
    "recurso12": 0,
    "estilo": 1
	}, {
		"recurso1": 0.75,
		"recurso2": 0.76,		
		"recurso3": 0,
    "recurso4": 0,
    "recurso5": 0,
		"recurso6": 0,		
		"recurso7": 0,
    "recurso8": 0,
    "recurso9": 0,
		"recurso10": 0,		
		"recurso11": 0,
    "recurso12": 0,
    "estilo": 1
	}, {
		"recurso1": 0.85,
		"recurso2": 0.84,		
		"recurso3": 0,
    "recurso4": 0,
    "recurso5": 0,
		"recurso6": 0,		
		"recurso7": 0,
    "recurso8": 0,
    "recurso9": 0,
		"recurso10": 0,		
		"recurso11": 0,
    "recurso12": 0,
    "estilo": 1
	},{
		"recurso1": 0.92,
		"recurso2": 0.82,		
		"recurso3": 0,
    "recurso4": 0,
    "recurso5": 0,
		"recurso6": 0,		
		"recurso7": 0,
    "recurso8": 0,
    "recurso9": 0,
		"recurso10": 0,		
		"recurso11": 0,
    "recurso12": 0,
    "estilo": 1
	},{
		"recurso1": 0,
		"recurso2": 0,		
		"recurso3": 0,
    "recurso4": 0,
    "recurso5": 0,
		"recurso6": 0,		
		"recurso7": 0,
    "recurso8": 0,
    "recurso9": 0,
		"recurso10": 0,		
		"recurso11": 0.92,
    "recurso12": 0.9,
    "estilo": 2
  },
  {
		"recurso1": 0,
		"recurso2": 0,		
		"recurso3": 0,
    "recurso4": 0,
    "recurso5": 0,
		"recurso6": 0,		
		"recurso7": 0,
    "recurso8": 0,
    "recurso9": 0.90,
		"recurso10": 0.88,		
		"recurso11": 0,
    "recurso12": 0,
    "estilo": 3
	});
