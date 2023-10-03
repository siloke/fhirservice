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
        
        document.querySelector("table").innerHTML += `<tr>
        <td data-cell="Paciente"> 
            <img src="/assets/profileicon.svg" alt="">
            <div class="td-profile">
                <div class="profile-name">${paciente.nomepaciente}</div>
                <div class="profile-role">Paciente ${paciente.status}</div>
            </div>
        </td>
        <td data-cell="Profissional">
            <img src="/assets/profileicon.svg" alt="">
            <div class="td-profile">
                <div class="profile-name">${paciente.nomeprofissional}</div>
                <div class="profile-role">Profissional Ativo</div>
            </div>
        </td>
        <td data-cell="Telefone">
            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.65 3.125H4.15002C3.80485 3.125 3.52502 3.40482 3.52502 3.75V16.25C3.52502 16.5952 3.80485 16.875 4.15002 16.875H16.65C16.9952 16.875 17.275 16.5952 17.275 16.25V3.75C17.275 3.40482 16.9952 3.125 16.65 3.125Z" stroke="#8C99A6" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M14.15 1.875V4.375" stroke="#8C99A6" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6.65002 1.875V4.375" stroke="#8C99A6" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3.52502 6.875H17.275" stroke="#8C99A6" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>                            
            ${paciente.telefone}
        </td>
        <td data-cell="Data de Nascimento">
            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.65 3.125H4.15002C3.80485 3.125 3.52502 3.40482 3.52502 3.75V16.25C3.52502 16.5952 3.80485 16.875 4.15002 16.875H16.65C16.9952 16.875 17.275 16.5952 17.275 16.25V3.75C17.275 3.40482 16.9952 3.125 16.65 3.125Z" stroke="#8C99A6" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M14.15 1.875V4.375" stroke="#8C99A6" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6.65002 1.875V4.375" stroke="#8C99A6" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3.52502 6.875H17.275" stroke="#8C99A6" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>                            
            ${paciente.data_nascimento}
        </td>
        <td data-cell="E-mail">
            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.30005 4.375H18.3V15C18.3 15.1658 18.2342 15.3247 18.117 15.4419C17.9998 15.5592 17.8408 15.625 17.675 15.625H3.92505C3.75929 15.625 3.60032 15.5592 3.48311 15.4419C3.3659 15.3247 3.30005 15.1658 3.30005 15V4.375Z" stroke="#8C99A6" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M18.3 4.375L10.8 11.25L3.30005 4.375" stroke="#8C99A6" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>                          
            ${paciente.email}
        </td>
        <td data-cell="Ações" class="td-action">
            <span class="td-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.25 3.125H3.75C3.40482 3.125 3.125 3.40482 3.125 3.75V16.25C3.125 16.5952 3.40482 16.875 3.75 16.875H16.25C16.5952 16.875 16.875 16.5952 16.875 16.25V3.75C16.875 3.40482 16.5952 3.125 16.25 3.125Z" stroke="#007FFF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M13.75 1.875V4.375" stroke="#007FFF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6.25 1.875V4.375" stroke="#007FFF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M3.125 6.875H16.875" stroke="#007FFF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </span>
            <span class="td-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 4.375C3.75 4.375 1.25 10 1.25 10C1.25 10 3.75 15.625 10 15.625C16.25 15.625 18.75 10 18.75 10C18.75 10 16.25 4.375 10 4.375Z" stroke="#007FFF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10 13.125C11.7259 13.125 13.125 11.7259 13.125 10C13.125 8.27411 11.7259 6.875 10 6.875C8.27411 6.875 6.875 8.27411 6.875 10C6.875 11.7259 8.27411 13.125 10 13.125Z" stroke="#007FFF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>                                
            </span>
            <span class="td-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 16.875H3.75C3.58424 16.875 3.42527 16.8092 3.30806 16.6919C3.19085 16.5747 3.125 16.4158 3.125 16.25V12.7578C3.12472 12.6767 3.14044 12.5962 3.17128 12.5212C3.20211 12.4461 3.24745 12.3778 3.30469 12.3203L12.6797 2.94532C12.7378 2.88627 12.8072 2.83937 12.8836 2.80736C12.9601 2.77535 13.0421 2.75887 13.125 2.75887C13.2079 2.75887 13.2899 2.77535 13.3664 2.80736C13.4428 2.83937 13.5122 2.88627 13.5703 2.94532L17.0547 6.4297C17.1137 6.48785 17.1606 6.55717 17.1927 6.63362C17.2247 6.71007 17.2411 6.79213 17.2411 6.87501C17.2411 6.95789 17.2247 7.03994 17.1927 7.11639C17.1606 7.19284 17.1137 7.26216 17.0547 7.32032L7.5 16.875Z" stroke="#007FFF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10.625 5L15 9.375" stroke="#007FFF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16.875 16.875H7.5L3.16406 12.5391" stroke="#007FFF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12.8125 7.1875L5.3125 14.6875" stroke="#007FFF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>                                
            </span>
            <span class="td-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M18.125 5H1.875C1.52982 5 1.25 5.27982 1.25 5.625V14.375C1.25 14.7202 1.52982 15 1.875 15H18.125C18.4702 15 18.75 14.7202 18.75 14.375V5.625C18.75 5.27982 18.4702 5 18.125 5Z" stroke="#007FFF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z" stroke="#007FFF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M13.75 5L18.75 9.375" stroke="#007FFF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M13.75 15L18.75 10.625" stroke="#007FFF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6.25 5L1.25 9.375" stroke="#007FFF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6.25 15L1.25 10.625" stroke="#007FFF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>                                
            </span>
            <span class="td-icon icon-phone">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.54684 13.8281C2.61628 12.2581 2.29079 10.4025 2.63146 8.60949C2.97213 6.81652 3.95553 5.20954 5.39706 4.09025C6.83859 2.97096 8.6391 2.41633 10.4606 2.53049C12.2821 2.64464 13.9992 3.41972 15.2897 4.71023C16.5802 6.00073 17.3553 7.71791 17.4695 9.53939C17.5836 11.3609 17.029 13.1614 15.9097 14.6029C14.7904 16.0444 13.1834 17.0278 11.3905 17.3685C9.5975 17.7092 7.74183 17.3837 6.17184 16.4531V16.4531L3.57809 17.1875C3.47182 17.2186 3.35915 17.2205 3.25189 17.1931C3.14462 17.1656 3.04671 17.1098 2.96842 17.0315C2.89013 16.9533 2.83434 16.8553 2.8069 16.7481C2.77946 16.6408 2.78139 16.5281 2.81247 16.4219L3.54684 13.8281Z" stroke="#00CD89" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M11.8828 14.375C11.0605 14.3771 10.2458 14.2166 9.48563 13.9029C8.72547 13.5891 8.0348 13.1282 7.45329 12.5467C6.87179 11.9652 6.41092 11.2745 6.09717 10.5144C5.78341 9.75422 5.62296 8.93956 5.62502 8.11719C5.62709 7.53838 5.85847 6.98399 6.26848 6.57544C6.67849 6.16689 7.23371 5.9375 7.81252 5.9375V5.9375C7.90802 5.93674 8.00195 5.96173 8.08444 6.00985C8.16693 6.05797 8.23493 6.12744 8.28127 6.21094L9.19533 7.80469C9.24969 7.90157 9.27759 8.01106 9.27621 8.12214C9.27484 8.23323 9.24425 8.34199 9.18752 8.4375L8.45314 9.66406C8.8293 10.5009 9.49917 11.1707 10.336 11.5469L11.5625 10.8125C11.658 10.7558 11.7668 10.7252 11.8779 10.7238C11.989 10.7224 12.0984 10.7503 12.1953 10.8047L13.7891 11.7188C13.8726 11.7651 13.942 11.8331 13.9902 11.9156C14.0383 11.9981 14.0633 12.092 14.0625 12.1875C14.0605 12.7657 13.8304 13.3197 13.4223 13.7293C13.0142 14.1389 12.461 14.3709 11.8828 14.375V14.375Z" stroke="#00CD89" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>                                
            </span>
        </td>
    </tr>`
    });

})