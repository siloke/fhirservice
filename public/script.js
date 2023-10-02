window.addEventListener('DOMContentLoaded', (e) => {
    fetch("/listarPacientes")
    .then((response) => response.json())
    .then((result) => console.log(result))
})

const
    $modal = document.getElementById('modal'),
    $modalForm = document.getElementById('modal-form'),
    $modalClose = document.getElementById('modal-close');

$modalForm.addEventListener('click', event => event.stopPropagation());
$modal.addEventListener('click', () => $modalClose.click());