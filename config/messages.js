'use strict'

module.exports = (data) => [
  `Kunne du hjulpet meg litt? Det har seg slik at jeg har funnet ${data.numberOfFiles} filer i mappen ${data.directoryPath}`,
  `Har du noe tid til overs? Jeg har oppdaget ${data.numberOfFiles} filer i mappen ${data.directoryPath}`,
  `Vil du leke en lek? Det er ${data.numberOfFiles} filer i mappen ${data.directoryPath} kan du gjette hvorfor?`,
  `Er det mandag? Kan virke slik. Det er nemlig ${data.numberOfFiles} filer i mappen ${data.directoryPath}`,
  `Unnskyld meg? Kan du kikke på de ${data.numberOfFiles} filene i mappen ${data.directoryPath}?`
]
