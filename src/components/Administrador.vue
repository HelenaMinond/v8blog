<template>
    <div>
        <header class="masthead" style="background-image: url('/assets/img/chevrolet-blazer.jpg');">
            <div class="overlay"></div>
            <div class="container">
                <div class="row">
                    <div class="col-md-10 col-lg-8 mx-auto">
                        <div class="post-heading">
                            <h2><strong>{{mensaje()}}</strong></h2>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </div>
</template>

<script>
export default {
    name: "Administrador",
    data() {
        return {
            simple: "simple",
            avanzado: "avanzado",
        }
    },
    methods: {
        mensaje() {
            if(this.tipo == this.simple){
                return "Bienvenido a la página de Administración";
            }
            else if(this.tipo == this.avanzado){
                return "Esta página de administración está en construcción. Intente como administrador simple";
            }
        }
    },
    props: ["tipo"],
}
</script>

<style>

</style>