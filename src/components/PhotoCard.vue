<template>
    <div class="card">
        <img :src="imageUrl" alt="Photo" />
        <h2>{{ name }}</h2>
        <h3>Aboa {{ year }}</h3>
        <p>{{ favorite }}</p>
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
        },
        favorite: {
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
    box-shadow: 4px 4px var(--blue);
    border: 1px solid var(--darkBlue);
    width: 200px;
    height: 300px;
    margin: auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    background-color: var(--lightBlue);
}

.card img {
    height: 150px;
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
    margin: 10px;
    margin-bottom: 0px;
}

.card p {
    font-size: 16px;
    margin: 10px;
    margin-bottom: 0px;
}
</style>
