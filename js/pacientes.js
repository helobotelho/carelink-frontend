(function () {

    const tbody = document.querySelector('.tbody');
    tbody.innerHTML = '';
    pacientes = [
        /* mock...
        { nome: 'Joana Campos', data: '16/06/23', hora: '10:40AM', document: '***-434-***-**', plano: 'Sim' },
        { nome: 'Marcos Reinaldo', data: '16/06/23', hora: '15:30PM', document: '***-321-***-**', plano: 'Sim' },
        { nome: 'Bruno Fagundes', data: '15/06/23', hora: '13:40PM', document: '***-431-***-**', plano: 'Não' },
        { nome: 'Heloisa Botelho', data: '15/06/23', hora: '09:40AM', document: '***-755-***-**', plano: 'Não' },
        { nome: 'Allan Albuquerque', data: '15/06/23', hora: '11:50AM', document: '***-897-***-**', plano: 'Sim' },
        { nome: 'Luiza Carrion', data: '14/06/23', hora: '14:00PM', document: '***-233-***-**', plano: 'Sim' },
        { nome: 'Caio Myra', data: '14/06/23', hora: '12:45PM', document: '***-169-***-**', plano: 'Sim' }*/
    ]

    function montarTabelaPanciente(nome, data, horas, document, plano) {
        return `
    <tr>
            <td class="td-bold-class"><a href="./perfilpaciente.html">${nome}</a></td>
            <td>${data}</td>
            <td class="hide-on-mobile-hour">${horas}</td>
            <td class="hide-on-mobile">${document}</td>
            <td class="hide-on-mobile">${plano}</td>
            <td> <a href="./perfilpaciente.html" class="item-active"><img src="./images/file-search-two.png"
                        class="icon-paciente"></a> </td>
    </tr>`;
    }

    fetch('https://fhirback.azurewebsites.net/patient')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            // faça algo com os dados retornados
            const newPaciente = { nome: 'Null', data: 'Null', hora: 'Null', document: '***-***-***-**', plano: 'NÃO' };
            newPaciente.nome = data[0].name;
            document.querySelector('.tbody').innerHTML = '';

            console.log(data)
            console.log(newPaciente.nome);

            fetch('https://fhirback.azurewebsites.net/patient/3b1c061f-02f5-47d5-b16f-84c88db762f8')
                .then(response => response.json())
                .then(data => {
                    // faça algo com os dados retornados
                    console.log('dsfsf')
                    console.log(data);
                    var date = new Date(data.meta.lastUpdated);
                    newPaciente.data = date.getDay()+'/'+date.getMonth()+'/'+date.getFullYear();
                    newPaciente.hora = date.toLocaleTimeString('en-US');
                    
                    console.log(date)

                    console.log(data.meta.lastUpdated)
                    pacientes.push(newPaciente);

                    console.log(pacientes)

                    pacientes.forEach(element => {
                        tbody.innerHTML += montarTabelaPanciente(element.nome, element.data, element.hora, element.document, element.plano);
                    });

                })
                .catch(error => {
                    // trate erros de requisição
                });
        })
        .catch(error => {
            // trate erros de requisição
        });
})();