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

        //RENDIMIENTOS de LITROS
        const litrosLE = 1;
        const litrosLI = 2;
        const litrosLP = 3;
        const litrosRT = 4;
        const litrosML = 5;
        const litrosPP = 34;
        const litrosLS = 34;
        const litrosSF = 34;
        const litrosEO = 34;
        const litrosTP = 34;
        const litrosTC = 34;


        if(product == 'Látex Exterior'){
            var result = litrosLE * surface 
        }
        else if(product == 'Látex Interior'){
            var result = litrosLI * surface 
        }
        else if(product == 'Látex Picasso'){
            var result = litrosLP * surface 
        }
        else if(product == 'Revestimiento Texturado'){
            var result = litrosRT * surface 
        }
        else if(product == 'Membrana Líquida'){
            var result = litrosML * surface 
        }
        else if(product == 'Piletas y Piscinas'){
            var result = litrosPP * surface 
        }
        else if(product == 'Látex Satinado'){
            var result = litrosLS * surface 
        }
        else if(product == 'Sellador Fijador'){
            var result = litrosSF * surface 
        }
        else if(product == 'Enduido'){
            var result = litrosEO * surface 
        }
        else if(product == 'Tropic Porcelanato'){
            var result = litrosTP * surface 
        }
        else if(product == 'Tropic Cerámica'){
            var result = litrosTC * surface 
        }


        const finalResult = Math.round(result)

        const nameDOM = `
        <b>${product}</b> en <b>${surface}</b> (m2)
         `

        const resultDOM = `
            <p>${finalResult} lts</p>
        `
        const litros = document.getElementById('litros_result');
        litros.innerHTML = resultDOM;
        const name = document.getElementById('product_name');
        name.innerHTML = nameDOM;

        $("#select_product").val("");
        $("#superficie").val("");   

    
        
    }
});


