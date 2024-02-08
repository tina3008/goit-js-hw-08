const positionLis = document.querySelectorAll('.item');
console.log('Number of categories:', positionLis.length);


positionLis.forEach(elem => {
  const titl = elem.firstElementChild;
  console.log('Category:',titl.innerHTML)

  const list = elem.lastElementChild.children;
  console.log('Elements:',list.length)
})
