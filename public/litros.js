const button = document.getElementById('submit_button')


button.addEventListener('click', (e)=>{
    e.preventDefault();

    const product = $("#select_product").val();
    const surface = $("#superficie").val();   

    if(product == '' || surface==0){
        alert('Ingrese datos válidos')
        $("#select_product").val("");
        $("#superficie").val("");   
    }else{

        const litrosProd = [
            {nombre:'Látex Exterior', litros:1},
            {nombre:'Látex Interior', litros:2},
            {nombre:'Látex Picasso', litros:3},
            {nombre:'Revestimiento Texturado', litros:4},
            {nombre:'Membrana Líquida', litros:1},
            {nombre:'Piletas y Piscinas', litros:1},
            {nombre:'Látex Satinado', litros:1},
            {nombre:'Sellador Fijador', litros:1},
            {nombre:'Enduido', litros:1},
            {nombre:'Tropic Porcelanato', litros:1},
            {nombre:'Tropic Cerámica', litros:1},
        ]


        const obj = litrosProd.find(litros => litros.nombre === product)

        let result = Math.round(obj.litros * surface)

        const nameDOM = `
        <b>${product}</b> en <b>${surface}</b> (m2)
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
