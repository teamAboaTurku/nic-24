<template>
    <div :class="['banner', bannerClass]"></div>
</template>

<script>
export default {
    name: 'PageBanner',
    props: {
        bannerClass: {
            type: String,
            default: ''
        }
    }
}
</script>

<style>
.banner {
    height: 200px;
    width: 100%;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
}

.home-banner {
    background-image: url('@/assets/photos/turku.png');
    background-color: var(--lightBlue);
}

.contacts-banner {
    background-image: url('@/assets/photos/contact.png');
    background-color: var(--lightBlue);
}

.map-banner {
    background-image: url('@/assets/photos/map.png');
    background-color: var(--lightBlue);
}

.timetable-banner {
    background-image: url('@/assets/photos/timetable.png');
    background-color: var(--lightBlue);
}
</style>