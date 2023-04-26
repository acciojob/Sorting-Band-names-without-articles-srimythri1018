//your code here
// the array of band names
let bandNames = ['The Beatles', 'Led Zeppelin', 'The Rolling Stones', 'Pink Floyd', 'AC/DC'];

// a function to remove articles from a band name
function removeArticle(name) {
  let articles = ['a', 'an', 'the'];
  let words = name.split(' ');
  if (articles.includes(words[0].toLowerCase())) {
    words.shift();
  }
  return words.join(' ');
}

// sort the band names in lexicographic order
bandNames.sort(function(a, b) {
  return removeArticle(a) > removeArticle(b) ? 1 : -1;
});

// add the sorted band names to the ul element
let bandList = document.getElementById('band');
for (let name of bandNames) {
  let li = document.createElement('li');
  li.textContent = name;
  bandList.appendChild(li);
}

