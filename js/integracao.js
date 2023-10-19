(function () {

    const tbody = document.querySelector('.tbody');
    tbody.innerHTML = '';
    organizations = [
        { nome: 'Hospital São Luiz', local: 'Cotia, São Paulo', fundador: 'Dr. Marcos Campos' },
        { nome: 'Clínica Albert Hei', local: 'Nova Esperança, Paraná', fundador: 'Dra. Leila Lins' },
        { nome: 'Clínica Saúde Total', local: 'Salvador, Bahia', fundador: 'Dr. Rafael Montenegro' },
        { nome: 'Hospital Vida Nova', local: 'Porto Alegre, Rio Grande do Sul', fundador: 'Valeria Mendes' },
        { nome: 'Clínica Bem-Estar', local: 'Santos, São Paulo', fundador: 'Dr. Alexandre Ferreira' },
        { nome: 'Hospital Esperança', local: 'Ribeirão Preto, São Paulo', fundador: 'Dra. Antonella Costa' },
        { nome: 'Hospital Central', local: 'Sorocaba, São Paulo	', fundador: 'Valentina Siqueira' },
        { nome: 'Clínica Harmonia Saúde', local: 'São Bernardo do Campo, São Paulo	', fundador: 'Henrique Barros' },
        { nome: 'Clínica Médica', local: 'São José dos Campos, São Paulo', fundador: 'Dra. Carolina Albuquerque' }
    ]

    organizations.forEach(element => {
        tbody.innerHTML += montarTabelaOrganization(element.nome, element.local, element.fundador);
    });



    function montarTabelaOrganization(nome, local, fundador) {
        return `
        <tr>
                <td class="td-bold-class">${nome}</td><td class="hide-on-mobile-hour">${local}</td><td class="hide-on-mobile">${fundador}</td></tr>
         <tr>
        `;
    }

    fetch('https://fhirback.azurewebsites.net/organization')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            // faça algo com os dados retornados
            const newOrganization = { nome: 'Null', local: 'Null', fundador: 'Null' };
            tbody.innerHTML = '';

            data.forEach(organization => {
                console.log(organization.id.toLowerCase())

                fetch(`https://fhirback.azurewebsites.net/organization/${organization.id.toLowerCase()}`)
                    .then(response => response.json())
                    .then(data => {
                        // faça algo com os dados retornados
                        console.log(data);
                        console.log(tbody)
                        tbody.innerHTML += montarTabelaOrganization(data.name, data.address[0].city, 'null');
                       

                    })
                    .catch(error => {
                        // trate erros de requisição
                    });
            });

        })
        .catch(error => {
            // trate erros de requisição
        });
})();