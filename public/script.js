const
    $hamburguer = document.getElementsByClassName('hamburguer'),
    $sidebarGroup = document.getElementById('sidebar-group'),
    $modal = document.getElementById('modal'),
    $modalForm = document.getElementById('modal-form'),
    $modalClose = document.getElementById('modal-close');

let exibirSidebar = false;

$modalForm.addEventListener('click', event => event.stopPropagation());
$modal.addEventListener('click', () => $modalClose.click());

for (let $button of $hamburguer) {
    $button.addEventListener('click', () => {
        exibirSidebar = !exibirSidebar;
    
        $sidebarGroup.classList.toggle('visible', exibirSidebar);
    });
}