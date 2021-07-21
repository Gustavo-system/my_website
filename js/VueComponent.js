Vue.component('about-card', {
    props: ['img', 'tittle', 'info', 'page_details'],
    template: `
    <div class="col-4 col-md-3 col-lg-3 mt-3 animacion card">
        <div class="text-center">
            <a :href="page_details" ><img :src="img" :alt="tittle" class="img-fluid images_habilidades"/></a>
            <div class="">
                <h5> {{ tittle }}</h5>
            </div>
        </div>
    </div>
    `,
});

new Vue({
    el: '#Component-conocimientos',
    data: {
        conocimientos: [
            {
                nombre: 'JavaScript',
                img: 'public/img/java-script.png',
                info: 'Programacion con nuevos estandares JavaScript ES+',
                // page_details: 'javascript.html',
            },
            {
                nombre: 'Angular',
                img: 'public/img/angular.png',
                info: 'Creacion de Aplicaciones Web implementando Angular CLI',
            },
            {
                nombre: 'Ionic',
                img: 'public/img/ionic.png',
                info: 'Implementacion de PHP como BackEnd en paginas web',
            },
            {
                nombre: 'Node Js',
                img: 'public/img/node.png',
                info: 'Manejo de Base de datos por comando CRUD',
            },
            {
                nombre: 'Python',
                img: 'public/img/python.png',
                info: 'Conocimientos en python, conexion a base de datos',
            },
            {
                nombre: 'Django Rest',
                img: 'public/img/django.png',
                info: 'Conocimientos en java',
            },
        ],
    },
});

new Vue({
    el: '#Componente-aprendiendo',
    data: {
        aprendiendo: [
            {
                nombre: 'React Js',
                img: 'public/img/reactjs.png',
                info: 'Estoy aprendiendo a desarrollar aplicaciones nativas para Android, utilizando Java o Kotlin.',
            },
            {
                nombre: 'PHP',
                img: 'public/img/php.png',
                info: 'Estoy aprendiendo a desarrollar aplicaciones para IOS y Android con React Native ya que el codigo se puede reutilizar y ahorrar tiempos de elavoracion',
            },
            {
                nombre: 'Bases de datos',
                img: 'public/img/dato.png',
                info: 'Creacion de Aplicaciones Web implementando Angular CLI',
            },
            {
                nombre: 'CSS',
                img: 'public/img/css.png',
                info: 'Creacion de Aplicaciones Web implementando Vue',
            },
        ],
    },
});
