<template>
    <div id="page">
        <Header/>
        <div id="content">
            <section>
                <div class="container">
                    <h1>Order Complete</h1>
                    <div class="button-group">
                        <a href="exp://192.168.0.12:19000?sucess=checkout" class="button">Close Checkoit</a>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CompletePage'
}
</script>
