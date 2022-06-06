$(document).ready(function () {
    $('.articleContent').each(function () {
        //Inicio do script para o componente
        var containerCollapsible = $('.container_collapsible');
        containerCollapsible.on('click', function () {
            console.log('02');
            var randomId = Math.floor(Math.random() * 100000) + 1;

            if ($(this).find('input').attr('id').length == "0") {
                console.log('ID alterado');
                $(this).find('input').attr('id', randomId);
            } else {
                console.log('Ja contem ID');
            }

            if ($(this).find('label').attr('for').length == "0") {
                console.log('FOR alterado');
                $(this).find('label').attr('for', randomId);
            } else {
                console.log('Ja contem FOR');
            }
        });
        //Fim do script para o componente

        //Inicio do script para o componente
        var containerVoceE = $('.container_collapsible_voce_e');
        containerVoceE.on('click', function () {
            console.log('02');
            var randomId = Math.floor(Math.random() * 100000) + 1;

            if ($(this).find('input').attr('id').length == "0") {
                console.log('ID alterado');
                $(this).find('input').attr('id', randomId);
            } else {
                console.log('Ja contem ID');
            }

            if ($(this).find('label').attr('for').length == "0") {
                console.log('FOR alterado');
                $(this).find('label').attr('for', randomId);
            } else {
                console.log('Ja contem FOR');
            }
        });
        //Fim do script para o componente
    });
});
