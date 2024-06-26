<template>
    <h1>NiC 2024 Committee</h1>
    <h3>The powerhouse team of the NiC committee, orchestrating every detail for the upcoming Nordic iGEM Conference.
    </h3>
    <div class="grid-container">
        <PhotoCard v-for="(item, index) in items" :key="index" :name="item.name" :year="item.year" :imgUrl="item.imgUrl"
            :favorite="item.favorite" :class="`grid-item`" />
    </div>
</template>

<script>
import PhotoCard from '../components/PhotoCard.vue';

export default {
    components: {
        PhotoCard
    },
    data() {
        return {
            items: [
                { name: 'Mariel', year: '2023', imgUrl: 'mariel.png', favorite: 'My favourite colour is lavender.' },
                { name: 'Sara', year: '2023', imgUrl: 'sara.jpg', favorite: 'My favourite snack is the proper old finnish nakki.' },
                { name: 'Minttu', year: '2023', imgUrl: 'minttu.jpg', favorite: '' },
                { name: 'Ville', year: '2023', imgUrl: 'ville.jpeg', favorite: 'I like sheep, they are soft :)' },
                { name: 'Ofelia', year: '2024', imgUrl: 'ofelia.jpg', favorite: 'I love house plants even though I don’t have a green thumb at all.' },
                { name: 'Elsa', year: '2023', imgUrl: 'elsa.jpg', favorite: 'I like the sound that comes when animals eat hay.' },
                { name: 'Jesse', year: '2023', imgUrl: 'jesse.jpeg', favorite: 'I like collecting rocks.' }
            ]
        };
    }
}
</script>

<style>
.grid-container {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 10px;
    margin: 50px 0 50px 0;
}

.grid-item:nth-child(1),
.grid-item:nth-child(2) {
    grid-column: span 3;
}

.grid-item:nth-child(3),
.grid-item:nth-child(4),
.grid-item:nth-child(5) {
    grid-column: span 2;
}

.grid-item:nth-child(6),
.grid-item:nth-child(7) {
    grid-column: span 3;
}

.grid-item:nth-child(1),
.grid-item:nth-child(6) {
    grid-column: 2 / span 2;
}

.grid-item:nth-child(2),
.grid-item:nth-child(7) {
    grid-column: 4 / span 2;
}

.grid-item {
    display: flex;
    justify-content: center;
    align-items: center;
}

@media only screen and (min-width: 425px) and (max-width: 700px) {
    .grid-container {
        grid-template-columns: repeat(2, 1fr);
    }

    .grid-item:nth-child(1),
    .grid-item:nth-child(2),
    .grid-item:nth-child(3),
    .grid-item:nth-child(4),
    .grid-item:nth-child(5),
    .grid-item:nth-child(6) {
        grid-column: span 1;
    }

    .grid-item:nth-child(7) {
        grid-column: span 2;
    }
}

@media only screen and (max-width: 425px) {
    .grid-container {
        grid-template-columns: repeat(1, 1fr);
    }

    .grid-item:nth-child(1),
    .grid-item:nth-child(2),
    .grid-item:nth-child(3),
    .grid-item:nth-child(4),
    .grid-item:nth-child(5),
    .grid-item:nth-child(6),
    .grid-item:nth-child(7) {
        grid-column: span 1;
    }
}
</style>