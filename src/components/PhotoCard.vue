<template>
    <div class="card">
        <img :src="imageUrl" alt="Photo" />
        <h2>{{ name }}</h2>
        <h3>Aboa {{ year }}</h3>
    </div>
</template>


<script>
export default {
    name: 'PhotoCard',
    props: {
        name: {
            type: String,
            required: true
        },
        year: {
            type: String,
            required: true
        },
        imgUrl: {
            type: String,
            required: true
        }
    },
    computed: {
        imageUrl() {
            const baseAddress = 'https://teamaboaturku.github.io/nic24_photos/images/';
            return `${baseAddress}${this.imgUrl}`;
        }
    }
}
</script>


<style>
.card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    border: 1px solid var(--green);
    width: 200px;
    height: 300px;
    margin: auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    background-color: white;
}

.card img {
    width: 100%;
    height: auto;
    border-bottom: 1px solid var(--green);
    background-color: var(--lightBlue);
}

.card-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    padding-top: 10px;
}

.card h2,
.card h3 {
    margin: 10px 0;
}
</style>
