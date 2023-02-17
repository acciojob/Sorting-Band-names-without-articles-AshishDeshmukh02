//your code here
let bandNames = ['The Beatles', 'Led Zeppelin', 'Pink Floyd', 'The Who', 'Aerosmith', 'The Rolling Stones'];

const articles = ['a', 'an', 'the'];

// Remove articles from the beginning of band names
bandNames = bandNames.map((name) => {
  let words = name.split(' ');
  if (articles.includes(words[0].toLowerCase())) {
    words.shift();
  }
  return words.join(' ');
});

// Sort the band names in lexicographic order
bandNames.sort();

// Add the sorted band names to the list in the HTML document
const bandList = document.getElementById('band');
bandNames.forEach((name) => {
  const listItem = document.createElement('li');
  listItem.textContent = name;
  bandList.appendChild(listItem);
});

