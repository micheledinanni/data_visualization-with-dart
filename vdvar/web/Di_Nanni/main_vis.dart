library DV2020;

import 'dart:html';
import 'dart:math';
import 'package:csv/csv.dart';

CanvasElement cartesianPlane = document.querySelector('#cartesianPlane');
CanvasRenderingContext2D context = cartesianPlane.getContext('2d');

CanvasElement cartesianSeries = document.querySelector('#TimeSeries');
CanvasRenderingContext2D contextTime = cartesianSeries.getContext('2d');

CanvasElement legend = document.querySelector('#legend');
CanvasRenderingContext2D contextLegend = cartesianSeries.getContext('2d');

Element title = document.querySelector("#title");
Element dati = document.querySelector("#dati");
Element description = document.querySelector("#description");
Element descriptionSeries = document.querySelector("#descriptionSeries");

const width = 60;
const height = 400;
const numLines = 6;
List<List<dynamic>> covidData;

/// generate random numbers
int randRange(int min, int max) {
  var random = new Random();
  return min + random.nextInt(max - min);
}

var step = 120;

/// partition for the histogram
int returnStepHist(List<int> dati) {
  var valore = 0;
  while ((valore * numLines) < dati.reduce(max)) {
    valore = valore + 10;
  }
  return valore;
}

/// build an histogram
void histogram(List<int> data) {
  var stepLines = returnStepHist(data);

  /// disegno le rette parallele
  for (int i = 0; i < numLines; i++) {
    context
      ..beginPath()
      ..moveTo(0, i * cartesianPlane.height / numLines)
      ..lineTo(
          step * data.length + step / 2, i * cartesianPlane.height / numLines)
      ..stroke()
      ..closePath();
  }

  /// etichette sulle rette parallele
  for (int i = 0; i <= numLines; i++) {
    context
      ..beginPath()
      ..fillText((stepLines * i).toString(), 10,
          cartesianPlane.height - i * (cartesianPlane.height / numLines))
      ..closePath();
  }

  /// disegna un rettangolo, date le coordinate
  void rectangle(var x, var y, var width, var height) {
    context
      ..beginPath()
      ..rect(x, y, width, height)
      ..fillStyle = "#001fd2"
      ..fill()
      ..closePath();
  }

  ///disegno l'asse x
  context
    ..beginPath()
    ..moveTo(0, cartesianPlane.height)
    ..lineTo(step * data.length + step / 2, cartesianPlane.height)
    ..stroke()
    ..closePath();

  /// disegno l'istogramma
  for (var i = 0; i < data.length; i++) {
    rectangle(
        i * step + step / 3,
        cartesianPlane.height -
            (data[i] * (cartesianPlane.height / numLines) / stepLines),
        width,
        cartesianPlane.height);
  }
}

/// plane cartesian for the time series
void constructPlane(List<int> data, List<String> months) {
  var stepSize = (cartesianSeries.width - 10) / data.length;

  /// disegno le rette parallele
  for (int i = 0; i <= numLines; i++) {
    contextTime
      ..strokeStyle = "grey"
      ..beginPath()
      ..moveTo(0, i * cartesianSeries.height / numLines)
      ..lineTo(
          step * data.length + step / 2, i * cartesianSeries.height / numLines)
      ..stroke()
      ..closePath();
  }

  ///disegno l'asse x
  contextTime
    ..beginPath()
    ..moveTo(0, cartesianSeries.height)
    ..lineTo(step * data.length + step / 2, cartesianSeries.height)
    ..stroke()
    ..closePath();

  /// etichette sull'asse delle x
  for (int i = 0; i <= months.length - 1; i++) {
    contextTime
      ..fillStyle = "black"
      ..beginPath()
      ..fillText((months[i]).toString(), i * stepSize + stepSize / 3 + 10,
          cartesianSeries.height - 2)
      ..closePath();
  }
}

/// build a time series
void timeSeries(
    List<int> data, CanvasElement timeSeries, String color, String state) {
  var stepLines = 4000;
  var stepSize = (cartesianSeries.width - 10) / data.length;

  /// disegno la linea
  for (var i = 0; i <= data.length - 2; i++) {
    contextTime
      ..strokeStyle = color
      ..beginPath()
      ..moveTo(
          stepSize / 2 + i * stepSize,
          timeSeries.height -
              (data[i] * timeSeries.height / numLines / stepLines) -
              20)
      ..lineTo(
          stepSize / 2 + i * stepSize + stepSize,
          timeSeries.height -
              (data[i + 1] * timeSeries.height / numLines / stepLines) -
              20)
      ..lineWidth = 2
      ..stroke()
      ..closePath();
  }

  /// pallini per la serie temporale
  for (var i = -1; i <= data.length - 2; i++) {
    contextTime
      ..strokeStyle = "grey"
      ..beginPath()
      ..arc(
          stepSize / 2 + i * stepSize + stepSize,
          timeSeries.height -
              (data[i + 1] * timeSeries.height / numLines / stepLines) -
              20,
          2 * pi / 2,
          0,
          2 * pi)
      ..lineWidth = 2
      ..fillStyle = color
      ..fill()
      ..closePath();
  }

  /// etichetta a inizio linea
  contextTime
    ..fillStyle = "black"
    ..beginPath()
    ..fillText(
        state,
        10,
        timeSeries.height -
            (data[0] * timeSeries.height / numLines / stepLines) -
            20)
    ..closePath();

  /// etichetta a fine linea
  for (int i = 0; i < data.length; i++) {
    if (i == data.length - 1) {
      contextTime
        ..fillStyle = "black"
        ..beginPath()
        ..fillText(
            state,
            stepSize / 2 + i * stepSize,
            timeSeries.height -
                (data[i] * timeSeries.height / numLines / stepLines) -
                20)
        ..closePath();
    }
  }
}

void readCsvSleepFile(String file) {
  covidData = const CsvToListConverter().convert(file, fieldDelimiter: ';');
  drawData();
}

void drawData() {
  List<String> months = new List<String>.from(covidData[0].sublist(1));
  List<int> italy = new List<int>.from(covidData[1].sublist(1));
  List<int> spain = new List<int>.from(covidData[2].sublist(1));
  List<int> france = new List<int>.from(covidData[3].sublist(1));
  List<int> netherlands = new List<int>.from(covidData[4].sublist(1));
  List<int> germany = new List<int>.from(covidData[5].sublist(1));
  List<int> belgium = new List<int>.from(covidData[6].sublist(1));

  constructPlane(italy, months);

  timeSeries(italy, cartesianSeries, "#BD0026", "Italy");
  timeSeries(spain, cartesianSeries, "#F03B20", "Spain");
  timeSeries(france, cartesianSeries, "#FD8D3C", "France");
  timeSeries(netherlands, cartesianSeries, "#FEB24C", "Netherlands");
  timeSeries(germany, cartesianSeries, "#FED24C", "Germany");
  timeSeries(belgium, cartesianSeries, "#FFFFB2", "Belgium");
}


/// entry point
void main() {
  var data = new List.generate(10, (_) => randRange(10, 1000));
  var stepLinesHist = returnStepHist(data);
  String file = "./data/datiCovid.csv";
  var request = HttpRequest.getString(file).then(readCsvSleepFile);
  cartesianPlane.height = height + 100;
  title.firstChild.text =
      "Time Series (COVID-19 data) and Histogram (random data)";
  dati.text = "I dati visualizzati sono: " + data.toString();
  description.text = "I dati mostrati sono stati generati in "
          "maniera aleatoria nel range [10, 1000]."
          " È stato deciso di suddividere lo spazio in 6 intervalli "
          "di egual lunghezza (" +
      stepLinesHist.toString() +
      ") in modo da poter leggere "
          "le informazioni circa la altezza delle barre.";
  descriptionSeries.text =
      "I dati sono relativi al numero di decessi mensili legati"
      " al COVID-19. I dati non sono cumulativi, cioè per ogni mese è mostrato"
      " il numero di nuovi deceduti. ";

  histogram(data);

}
