const button = document.getElementById('submit_button')


button.addEventListener('click', (e)=>{
    e.preventDefault();

    const productoSeleccionado = $("#select_product").val();
    const superficie = $("#superficie").val();   

    if(productoSeleccionado == '' || superficie==0){
        alert('Ingrese datos válidos')
        $("#select_product").val("");
        $("#superficie").val("");   
    }else{

        const productos = [
            {nombre:'Látex Exterior', rendimiento:6},
            {nombre:'Látex Interior', rendimiento:6},
            {nombre:'Látex Picasso', rendimiento:5},
            {nombre:'Revestimiento Texturado', litros:0.5},
            {nombre:'Membrana Líquida', rendimiento:1.5},
            {nombre:'Piletas y Piscinas', rendimiento:5},
            {nombre:'Látex Satinado', rendimiento:6},
            {nombre:'Sellador Fijador', rendimiento:10},
            {nombre:'Enduido', rendimiento:3},
        ]


        const obj = productos.find(producto => producto.nombre === productoSeleccionado)

        let result = Math.round(superficie / obj.rendimiento)

        const nameDOM = `
        <b>${productoSeleccionado}</b> en <b>${superficie}</b> (m2)
         `

        const resultDOM = `
            <p>${result} lts</p>
        `
        const litros = document.getElementById('litros_result');
        litros.innerHTML = resultDOM;
        const name = document.getElementById('product_name');
        name.innerHTML = nameDOM;

        $("#select_product").val("");
        $("#superficie").val("");   

    }
});
