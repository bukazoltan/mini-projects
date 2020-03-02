const content = document.getElementById('content');
const preview = document.getElementById('preview-content');

const updatePreview = (e) => {
  preview.innerHTML = marked(e.target.value);
}

content.addEventListener('input', updatePreview);