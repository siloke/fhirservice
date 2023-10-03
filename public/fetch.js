window.addEventListener('DOMContentLoaded', async (e) => {
    const fetchPatients = await fetch("/listarPacientes");
    const dataPatients = await fetchPatients.json()

    const fetchProfissionais = await fetch("/listarProfissionais");
    const dataProfissionais = await fetchProfissionais.json()

    console.log(dataPatients)
    console.log(dataProfissionais)

    dataProfissionais.forEach((profissional) => {
        document.querySelector("#profissionais").innerHTML += 
        `<option value="${profissional.profissionais_id}">${profissional.nome}</option>`
    })

    
    dataPatients.forEach((paciente) => {
        
        document.querySelector("table").innerHTML += `
        <tr>
        <td data-cell="Paciente"> 
            <img class="hide" src="/assets/profileicon.svg" alt="">
            <div class="td-profile">
                <div class="profile-name">${paciente.nomepaciente}</div>
                <div class="profile-role">Paciente ${paciente.status}</div>
            </div>
        </td>
        <td data-cell="Profissional">
            <img class="hide" src="/assets/profileicon.svg" alt="">
            <div class="td-profile">
                <div class="profile-name">${paciente.nomeprofissional}</div>
                <div class="profile-role">Profissional Ativo</div>
            </div>
        </td>
        <td data-cell="Telefone">                            
            ${paciente.telefone}
        </td>
        <td data-cell="Data de Nascimento">
            <img class="hide" src="assets/CalendarBlank.svg" alt="">
            ${paciente.data_nascimento}
        </td>
        <td data-cell="E-mail">
            <img class="hide" src="assets/EnvelopeSimple.svg" alt="">
            ${paciente.email}
        </td>
        <td data-cell="Ações" class="td-action">
            <div class="action-icons-group">
                <span class="td-icon">
                    <img src="assets/CalendarBlue.svg" alt="">
                </span>
                <span class="td-icon">
                    <img src="assets/Eye.svg" alt="">
                </span>
                <span class="td-icon">
                    <img src="assets/PencilLine.svg" alt="">
                </span>
                <span class="td-icon icon-phone">
                    <img src="assets/WhatsappLogo.svg" alt="">
                </span>
            </div>
        </td>
    </tr>`
    
    });

})