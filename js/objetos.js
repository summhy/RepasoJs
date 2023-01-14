var regiones = [{nombre: "Arica y Parinacota",
                numero: "XVI",
                capital: "Arica",
                imagen: "https://chileestuyo.cl/wp-content/uploads/2021/08/morro-de-arica.jpg"},

                {nombre: "Tarapaca",
                numero: "I",
                capital: "Iquique"},

                {nombre: "Tarapaca",
                numero: "II",
                capital: "Antofagasta"},

                {nombre: "Valparaíso",
                numero: "V",
                capital: "Valparaíso"}];

                

                regiones.forEach((elemento, indice) => { 

                    if(indice %2 ==1){

                const main =  document.getElementById("contenido");
                var div = document.createElement("div");    
                var div_body = document.createElement("div");    
                var h5 = document.createElement("h5");
                var p = document.createElement("p");
                var a = document.createElement("a");

                var img = document.createElement("img");

                    img.src=elemento.imagen;
                    img.className="card-img-top";
                    div.className = "card";
                    div.style="width: 18rem;"
                    div_body.className = "card-body";

                    h5.innerText = elemento.nombre;
                    h5.className = "card-title";
                   
                    p.innerText = elemento.capital;
                    p.className = "card-text";

                    a.innerText = "ver más";
                    a.className = "btn btn-primary";
                    a.href="#";

                    
                    div_body.appendChild(h5);
                    div_body.appendChild(p);
                    div_body.appendChild(a);
                    div.appendChild(img);
                    div.appendChild(div_body);
                    main.appendChild(div);  
                    }
                });