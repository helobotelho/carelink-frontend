(function () {

    const tbody = document.querySelector('.tbody');
    tbody.innerHTML = '';
    pacientes = [

        { nome: 'Joana Campos', data: '16/06/23', hora: '10:40AM', document: '***-434-***-**', plano: 'Sim' },
        { nome: 'Marcos Reinaldo', data: '16/06/23', hora: '15:30PM', document: '***-321-***-**', plano: 'Sim' },
        { nome: 'Bruno Fagundes', data: '15/06/23', hora: '13:40PM', document: '***-431-***-**', plano: 'Não' },
        { nome: 'Heloisa Botelho', data: '15/06/23', hora: '09:40AM', document: '***-755-***-**', plano: 'Não' },
        { nome: 'Allan Albuquerque', data: '15/06/23', hora: '11:50AM', document: '***-897-***-**', plano: 'Sim' },
        { nome: 'Luiza Carrion', data: '14/06/23', hora: '14:00PM', document: '***-233-***-**', plano: 'Sim' },
        { nome: 'Caio Myra', data: '14/06/23', hora: '12:45PM', document: '***-169-***-**', plano: 'Sim' }
    ]

    pacientes.forEach(element => {
        tbody.innerHTML += montarTabelaPanciente(element.nome, element.data, element.hora, element.document, element.plano);
    });


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
            tbody.innerHTML = '';

            data.forEach((paciente) => {
                console.log('pacinete')
                console.log(paciente);


                fetch(`https://fhirback.azurewebsites.net/patient/${paciente.id.toLowerCase()}`)
                    .then(response => response.json())
                    .then(data => {
                        const newPaciente = { nome: paciente.name, data: 'Null', hora: 'Null', document: '***-***-***-**', plano: 'NÃO' };
                        // faça algo com os dados retornados
                        console.log('dsfsf')
                        console.log(data);
                        var date = new Date(data.meta.lastUpdated);
                        newPaciente.data = date.getDay() + '/' + date.getMonth() + '/' + date.getFullYear();
                        newPaciente.hora = date.toLocaleTimeString('en-US');

                        console.log(date)

                        console.log(data.meta.lastUpdated)
                        pacientes.push(newPaciente);

                        console.log(pacientes)
                        tbody.innerHTML += montarTabelaPanciente(newPaciente.nome, newPaciente.data, newPaciente.hora, newPaciente.document, newPaciente.plano);

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