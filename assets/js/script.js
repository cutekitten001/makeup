let previewContainer = document.querySelector('.products-preview');
let previewBox = previewContainer.querySelectorAll('.preview');

document.querySelectorAll('.products-container .product').forEach((product) => {
  product.onclick = () => {
    previewContainer.style.display = 'flex';
    let name = product.getAttribute('data-name');
    previewBox.forEach((preview) => {
      let target = preview.getAttribute('data-target');
      if (name == target) {
        preview.classList.add('active');
      }
    });
  };
});

previewBox.forEach((close) => {
  close.querySelector('.fa-times').onclick = () => {
    close.classList.remove('active');
    previewContainer.style.display = 'none';
  };
});

// filter
const products = document.querySelectorAll('ul li');
const div = document.querySelectorAll('.items div');

console.log(div);

products.forEach((li) => {
  li.onclick = function () {
    products.forEach((li) => {
      li.className = '';
    });
    li.className = 'current';

    const value = li.textContent;
    div.forEach((div) => {
      div.style.display = 'none';
      if (
        div.getAttribute('data-filter') == value.toLowerCase() ||
        value == 'Todos'
      ) {
        div.style.display = 'block';
      }
    });
  };
});
