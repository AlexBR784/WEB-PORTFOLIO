// JavaScript Document

var btn_flotante = document.querySelector('.boton-flotante');
const panel_flotante_contenedor = document.querySelector('.panel-flotante-contenedor');
var icono_sol = document.getElementById("sol");
var icono_vol = document.getElementById("volumen");
var navbar = document.getElementById("navbar");
var audio = document.getElementById("audio");
var headerTareaAni = document.getElementById("header-tarea");
var headerTareaSim = document.getElementById("header-sim");
var videoTareaAni = document.getElementById("video-tarea");
var videoTareaSim = document.getElementById("video-sim");
var videoTareaSim1 = document.getElementById("video-sim1");
var pTareaSim = document.getElementById("p-tareaS");
var ej = 1;


btn_flotante.addEventListener('click', () => {
    panel_flotante_contenedor.classList.toggle('visible');
    let abierto = panel_flotante_contenedor.classList.contains('visible');
    if (abierto) {
        btn_flotante.innerHTML = "Cerrar Panel";
    } else {
        btn_flotante.innerHTML = "Abrir Panel";
    }
});

icono_sol.addEventListener('click', () => {
    navbar.classList.toggle('modo');
    icono_sol.classList.toggle('fa-sun');
    icono_sol.classList.toggle('fa-moon');


});

icono_vol.addEventListener('click', () => {
    icono_vol.classList.toggle('fa-volume-up');
    audio.muted = !audio.muted;
    icono_vol.classList.toggle('fa-volume-mute');


});

function nextEj(t) {
    if (ej == 4) {
        ej = 1;
    } else
        ej = parseInt(ej) + 1;
    changeContent(t);
}

function antEj(t) {
    if (ej == 1) {
        ej = 4;
    } else
        ej = parseInt(ej) - 1;
    changeContent(t);
}

function changeContent(numTarea) {
    let wip = true;
    if (numTarea == 0) {
        if (ej == 1) {

            headerTareaAni.innerHTML = "Tarea 1 de animación: Interpoladores de trayectorias";
            videoTareaAni.src = "https://www.youtube.com/embed/hC-p13IHgEE";

            let texto1 = document.getElementById("p-tarea1").innerHTML = "En esta tarea se nos encomendó que a partir de una trayectoria que se nos da, interpolar una trayectoria resultado con la capacidadde tener unas pequeñas oscilaciones o movimiento aleatorios";
            let texto2 = document.getElementById("p-tarea2").innerHTML = "Para ello utilizaremos 3 interpoladores: <br><ol><li>Lineal: El tipo de interpolación lineal describe lo que su nombre indica, una línea entre 2 puntos. Es decir generaremos trayectorias rectilíneas entre los frames insertados por el usuario.<br><img class='img-thumbnail' src='imagenes/lin.png' width='400' height='200'></li><li>Camull-rom: se utiliza la misma fórmula que en Hermite pero en este no es necesario que se den las velocidades si no <b> Tau </b> (Que describirá cuan de suave se tomarán las curvas). El cálculo de las velocidades es el siguiente: <img class='img-thumbnail' src='imagenes/cat.png' width='400' height='200'></li><li>Hermite: para este método será necesario que el usuario introduzca la <b> velocidad</b>. (Para ello nosotros hemos diseñado en Blender una interfaz gráfica mediante la cual indicar la velocidad en los puntos o frames). La fórmula a utilizar es la siguiente:<img class='img-thumbnail' src='imagenes/her.png' width='400' height='200'></li></ol>";
            let texto3 = document.getElementById("p-tarea3").innerHTML = "Oscilación aleatoria: para hacer que la trayectoria realice pequeñas variaciones respecto a la original, haremos que el usuario introduzca la amplitud de dicha oscilación. Entonces a cada frame calcularemos esa pequeña variación con números aleatorios, normalizando dicho vector aleatorio y luego multiplicandolo por Amplitud";

        } else if (ej == 2) {

            headerTareaAni.innerHTML = "Tarea 2 de animación: Curvas parametrizadas";
            videoTareaAni.src = "https://www.youtube.com/embed/kHdre6RB-wk";
            let texto1 = document.getElementById("p-tarea1").innerHTML = "En esta tarea se nos encomendó que mediante curvas parametrizadas puediésemos controlar la velocidad, permitiendo que esta sea constante o no (marcando cuanta distancia ha recorrido en qué frame)";
            let texto2 = document.getElementById("p-tarea2").innerHTML = "Para ello hemos requerido formar una tabla con cuanta distancia se ha recorrido en que frame. <img class='img-thumbnail' src='imagenes/curv1.png' width='400' height='200'> <br>Por lo tanto con esta tabla podremos buscar que distancia queremos y nos dará en que frame aproximado se encuentra";
            let texto3 = document.getElementById("p-tarea3").innerHTML = "Para el cálculo de las velocidades. Utilizaremos un cambio de variable. De esta manera, si queremos obtener una velocidad constante calcularemos nuestra distancia como velocidad por tiempo y si queremos una velocidad que varíe en función de la distancia reparametrizaremos la curva. Que consistirá en obtener una nueva curva (s(t) = c(r(t))) de forma que se modifican los frames y la velocidad, pero las distancias serán iguales que las de la curva original. Para ello buscaremos a qué distancia se encuentra el objeto en el frame actual y luego obtendremos el frame que corresponde a esa distancia en nuestra tabla";

        } else if (ej == 3) {
            headerTareaAni.innerHTML = "Tarea 3 de animación: Orientación en función de trayectoria y alabeo";
            videoTareaAni.src = "https://www.youtube.com/embed/2MMTkeVHovg";
            let texto1 = document.getElementById("p-tarea1").innerHTML = "En esta tarea se nos pide que orientemos el objeto a la trayectoria mediante cuaterniones";
            let texto2 = document.getElementById("p-tarea2").innerHTML = "Para esta tarea se utilizarán hasta 3 cuaterniones distintos (2 de ellos obligatorios) <ul><li>Primer cuaternión: permitirá que el eje principal del objeto siga la trayectoria. Para ello tendremos que: <ol><li>Calcular la tangente de la curva, la sacamos restando la posición siguiente a la actual.</li><li>Con estos dos vectores obtenemos el vector perpendicular (mediante el producto vectorial) a ambos que será el eje del cuaternión. </li><li>Para sacar el ángulo, entre eje del objeto y la tangente realizaremos el producto escalar y el arcocoseno de esto nos dará el ángulo.</li><li>Con el eje calculado en el apartado 2 y el ángulo en el 3 formamos el primer cuaternión.</li></ol></li><li>Este segundo cuarternión nos permitirá que el eje lateral del objeto se alinee con el plano-suelo. Para ello debemos: <ol><li>Sacar el eje perpendicular a [0,0,1] y la tangente. Este eje perpendicular es al que queremos llevar nuestro eje lateral.</li><li>Este eje lateral que nos da el usuario no es del todo correcto. Ya que hemos realizado una rotación con el primer cuaternión debemos rotar este eje lateral con el cuaternión anterior.</li><li>Una vez tenemos el eje lateral y el perpendicular al eje z y tangente, obtenemos el ángulo que lo forman con el vector escalar y el arcocoseno.</li><li>Una vez tenemos, tanto el ángulo como el eje (en este caso es la tangente), formamos el cuaternión y rotamos.</li></ol></li><li>Finalmente, si decidimos inclinar nuestro objeto calcularemos un tercer cuaternión, donde indicaremos cuantos grados queremos aplicarle al objeto. Este tercer cuaternión se calcula de manera muy sencilla pues el usuario da los grados y el eje de giro será siempre la tangente. Por lo tanto con estos dos formamos el último ángulo.</li></ul>";
            let texto3 = document.getElementById("p-tarea3").innerHTML = "Muy importante, recordar que para que los cuaterniones representen la orientación que nosotros queremos se utilizará . Siendo u el eje y theta el ángulo.<img class='img-thumbnail' src='imagenes/cuat.png' width='400' height='200'><br> Finalmente tenemos la composición de los 3 cuaterniones siendo p el cuaternión que representa donde nos encontramos: q3 * q2 * q1 * p * q1-1* q2-1 * q3-1";
        } else if (ej == 4) {
            headerTareaAni.innerHTML = "Tarea 4 de animación: poner en práctica lo aprendido y aplicarlo a PEA";
            videoTareaAni.src = "https://www.youtube.com/embed/2MMTkeVHovg";
            let texto1 = document.getElementById("p-tarea1").innerHTML = "Para esta última entrega se nos pidió que aplicasemos nuestra herramienta a casos reales y en concreto al trabajo de PEA (<a href='Tarea_PEA.html'> ver tarea pea</a>)";
            let texto2 = document.getElementById("p-tarea2").innerHTML = "Para completar los objetivos desarrollamos 3 trayectorias: <ol><li>Obtener una trayectoria orientada con velocidad controlada</li><li>Obtener una trayectoria con oscilaciones aleatorias (efecto glitch)</li><li>Animación con cinemática inversa + Motion track</li></ol>";
            let texto3 = document.getElementById("p-tarea3").innerHTML = "(Los comentarios e indicaciones se encuentran en el propio vídeo) <br><br> Bibliografía para el curso de animación: <ul><li>Computer animation algorithms and techniques - Rick parent</li><li>Physics for flash Games, Animation and Simulations - Dev Ramtal & Adrian Dobre</li><li>Mathematics for 3D programming and Computer Graphics - Eric Lengyel</li><li>Lighting for Animation - Katatikarn, Jasmine & Tanzillo Michael</li></ul>";
        }
    } else if (numTarea == 1) {

        if (ej == 1) {
            videoTareaSim1.style.display = "inline-block";
            headerTareaSim.innerHTML = "Tarea 1 de simulacion: Métodos de Integración numérica en simulación ";
            pTareaSim.innerHTML = "<br>Esta practica esta dividida en dos tareas, la primera, un pendulo y la segunda, un sistema planetario. Para la primera (el péndulo), vamos a simularlo haciendo uso de los integradores Euler Explicito, Euler Simplectico, Heun, Runge-Kutta 2 y Runge-Kutta 4. Este pendulo, tendra propiedades de muelle, por lo que este tambien se tendrán en cuenta conceptos como la constante elastica Ke. Tambien calculamos las fuerzas, como la elastica Fe, el peso Fw, causada por la gravedad g y una fuerza de fricción Fd, con un factor de proporcionalidad Kd.";
            pTareaSim.innerHTML += "<br>La segunda tarea de esta práctica consistia en hacer un sistema planetario. Esta vez se trata de un planeta que orbita alrededor de una estrella. En este problema se hace uso de la Ley de Gravitación Universal, asi como la masa de la Tierra, del sol y la distancia entre ellos. Como se puede intuir, en este problema hay que tener en cuenta que los valores de los datos son muy grandes, por lo que, hay que operar con ellos y tratarlos de tal forma que se adapten a nuestro caso, como ejemplo claro tenemos el tiempo que tarda la Tierra en dar una vuelta completa, ya que no podemos esperar 365 dias a que se complete, debemos 'escalar' ese tiempo a uno mas apropiado, en nuestro caso, 6 segundos. Como funcionalidad a comentar, si hacemos click en la ventana del sistema, se relanzaria el planeta desde ese punto.<br><br> <img class='img-thumbnail' src='./imagenes/pendulo.png' alt='img_uni' width='600' height='600'>"

            pTareaSim.innerHTML += "<br><br><i>*La primera imagen es en relacion con la primera tarea (péndulo). La segunda imagen se relaciona con la segunda tarea (Sistema planetario)</i> "
            videoTareaSim1.src = "./imagenes/planetas.png";
        } else if (ej == 2) {
            videoTareaSim1.style.display = "none";
            headerTareaSim.innerHTML = "Tarea 2 de simulación: Sistemas de Partículas";
            pTareaSim.innerHTML = "Se pretende simular un castillo de fuegos artificiales para recrear en 2 dimensiones la Nit del Foc de las Fallas de Valencia. Para el desarrollo del problema a parte del programa principal, utilizamos las clases Fireworks, que contiene la clase Rockets que esta a su vez tiene muchas clases Particle, la cual una de cada Rocket es una Carcasa.<br>";
            pTareaSim.innerHTML += "El programa principal capta cada vez que hacemos click en la pantalla creando un Rocket a partir de Fireworks con la posición y velocidad dependientes de dónde hayamos clicado. Este rocket a su vez crea una Particle que hará de carcasa (con su velocidad, tamaño, posición...) y a su vez un vector de Particles (que serán las partículas de la explosión) que dependiendo de la velocidad de estas dibujarán una forma u otra en la simulación.<br>";
            pTareaSim.innerHTML += "En este problema habrá dos fuerzas: la fuerza del viento y la del peso. La fuerza del peso, se calculará como siempre, multiplicando la gravedad por la masa. La fuerza del viento se calculará de manera parecida a la fuerza de rozamiento, vector por constante del viento. Pero lo que la diferencia es que calculamos previamente el vector como viento aparente en vez de emplear la velocidad del viento sin más.<br><br>";
            pTareaSim.innerHTML += "Hemos realizado 3 tipos de palmeras: Circular, Espiral y Corazón. <br><br>Para el viento, hemos implementado que, mediante las flechas del teclado se pueda aumentar o disminuir la velocidad de este. Además de que el usuario podra modificar la dirección del viento mediante una interfaz grafica (se puede observar en la imagen).<br><br> <img class='img-thumbnail' src='./imagenes/fuegos.png' alt='img_uni' width='600' height='600'>";
            //videoTareaSim.src = "./imagenes/fuegos.png";


        } else if (ej == 3) {
            videoTareaSim1.style.display = "none";
            headerTareaSim.innerHTML = "Tarea 3 de simulación";
            pTareaSim.innerHTML = "Estamos trabajando en esta práctica, cuando se complete, estará disponible.<br><br> <img class='img-thumbnail' src='./imagenes/wip.png' alt='img_uni' width='400' height='600'>";

        } else if (ej == 4) {
            videoTareaSim1.style.display = "none";
            headerTareaSim.innerHTML = "Tarea 4 de simulación";
            pTareaSim.innerHTML = "Estamos trabajando en esta práctica, cuando se complete, estará disponible.<br><br> <img class='img-thumbnail' src='./imagenes/wip.png' alt='img_uni' width='400' height='600'>";


        }
    } else if (numTarea == 1) {
        if (ej == 1) {
            headerTareaSim.innerHTML = "Tarea 1 de simulacion";
            videoTareaSim.src = "./imagenes/pea_banner.png";
        } else if (ej == 2) {
            headerTareaSim.innerHTML = "Tarea 2 de simulación";
            videoTareaSim.src = "./imagenes/pea_banner.png";
        } else if (ej == 3) {
            headerTareaSim.innerHTML = "Tarea 3 de simulación";
            videoTareaSim.src = "./imagenes/pea_banner.png";
        } else if (ej == 4) {
            headerTareaSim.innerHTML = "Tarea 4 de simulación";
            videoTareaSim.src = "./imagenes/pea_banner.png";
        }
    }

}

function navEj(num) {
    ej = num;
    localStorage.setItem("ejercicio", ej);

}