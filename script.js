let bandNames = ['The Beatles', 'Led Zeppelin', 'Pink Floyd', 'The Who', 'Aerosmith'];

function removeArticle(bandName) {
  // Regular expression to match articles at the beginning of the band name
  let re = /^(?:The|An|A)\s+/i;
  return bandName.replace(re, '');
}

// Sort the band names in lexicographic order without articles
bandNames.sort((a, b) => removeArticle(a).localeCompare(removeArticle(b)));

// Get a reference to the "band" unordered list element
let bandList = document.getElementById('bands');

// Add the sorted band names as list items to the "band" unordered list element
for (let name of bandNames) {
  let listItem = document.createElement('li');
  listItem.textContent = name;
  bandList.appendChild(listItem);
}
