const lists = document.querySelectorAll('li')

lists.forEach( lists => {
    console.log(lists);
})

const images = document.querySelectorAll('.gallery img')
const urls = []
const alts = []

const list = document.querySelector('.list-of-photos__list');

images.forEach( image => {
    urls.push(image.getAttribute('src'))
    alts.push(image.getAttribute('alt'))
})

alts.forEach(alts => {
    list.innerHTML += '<li>' + alts + '</li>';
})
const firstThreeUrls = urls.slice(0, 3)
const lastThreeUrls = urls.slice(-3)
console.log(lastThreeUrls);
console.log(firstThreeUrls);
console.log(urls);
console.log(alts);
console.log(images.length);
images.forEach( image => {
    const src = image.getAttribute('src')
    const alt = image.getAttribute('alt')
    console.log(src);
    console.log(alt);
})

const first = []
const last = []

for (let i = 0; i < urls.length; i++) {
    first.push(urls[i])
    if (first.length === 3) {
        break;
    }
}

for (let j = 0; j < urls.length; j++) {
    if (j < urls.length -3) {
        continue;
    }
    last.push(urls[j])
}
console.log(last);
console.log(first);

const filterCat = alts.filter(alt => {
    return !alt.match(/cat/i)
})
console.log(filterCat);

