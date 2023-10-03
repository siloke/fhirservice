const
    $modal = document.getElementById('modal'),
    $modalForm = document.getElementById('modal-form'),
    $modalClose = document.getElementById('modal-close');

$modalForm.addEventListener('click', event => event.stopPropagation());
$modal.addEventListener('click', () => $modalClose.click());