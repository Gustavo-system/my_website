Vue.component('about-card', {
    props: ['img', 'tittle', 'info'],
    template: `
    <div class="col col-lg-3 mt-3 animacion">
        <div class="">
            <img :src="img" :alt="tittle" class="img-fluid img-css"/>
            <div class="">
                <h5 class="text-center"> {{ tittle }}</h5>
            </div>
        </div>
    </div>
    `,
});
