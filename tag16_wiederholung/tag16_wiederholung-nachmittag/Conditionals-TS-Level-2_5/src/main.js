function check() {
  const value = document.getElementById("bundeslandInfo").value
  const result = document.getElementById("bundeslandInfoErgebnis")

  switch (value) {
    case "Baden-Württemberg":
      result.textContent = "Baden-Württemberg hat 10,880 Mio Einwohner und Stuttgart ist die Hauptstadt"
      break
    case "Bayern":
      result.textContent = "Bayern hat 12,844 Mio Einwohner und München ist die Hauptstadt"
      break
    case "Berlin":
      result.textContent = "Berlin hat 3,520 Mio Einwohner und Berlin ist die Hauptstadt"
      break
    case "Brandenburg":
      result.textContent = "Brandenburg hat 2,485 Mio Einwohner und Potsdam ist die Hauptstadt"
      break
    case "Bremen":
      result.textContent = "Bremen hat 0,671 Mio Einwohner und Bremen ist die Hauptstadt"
      break
    case "Hamburg":
      result.textContent = "Hamburg hat 1,787 Mio Einwohner und Hamburg ist die Hauptstadt"
      break
    case "Hessen":
      result.textContent = "Hessen hat 6,176 Mio Einwohner und Wiesbaden ist die Hauptstadt"
      break
    case "Mecklenburg-Vorpommern":
      result.textContent = "Mecklenburg-Vorpommern hat 1,612 Mio Einwohner und Schwerin ist die Hauptstadt"
      break
    case "Niedersachsen":
      result.textContent = "Niedersachsen hat 7,927 Mio Einwohner und Hannover ist die Hauptstadt"
      break
    case "Nordrhein-Westfalen":
      result.textContent = "Nordrhein-Westfalen hat 17,865 Mio Einwohner und Düsseldorf ist die Hauptstadt"
      break
    case "Rheinland-Pfalz":
      result.textContent = "Rheinland-Pfalz hat 4,053 Mio Einwohner und Mainz ist die Hauptstadt"
      break
    case "Saarland":
      result.textContent = "Saarland hat 0,996 Mio Einwohner und Saarbrücken ist die Hauptstadt"
      break
    case "Sachsen":
      result.textContent = "Sachsen hat 4,085 Mio Einwohner und Dresden ist die Hauptstadt"
      break
    case "Sachsen-Anhalt":
      result.textContent = "Sachsen-Anhalt hat 2,245 Mio Einwohner und Magdeburg ist die Hauptstadt"
      break
    case "Schleswig-Holstein":
      result.textContent = "Schleswig-Holstein hat 2,859 Mio Einwohner und Kiel ist die Hauptstadt"
      break
    case "Thüringen":
      result.textContent = "Thüringen hat 2,171 Mio Einwohner und Erfurt ist die Hauptstadt"
      break
    default:
      result.textContent = "Ein solches Bundesland gibt es in Deutschland nicht."
  }
}
