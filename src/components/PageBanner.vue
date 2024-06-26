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
    background-color: var(--blue);
}

.home-banner {
    background-image: url('https://teamaboaturku.github.io/nic24_photos/images/turku.png');
}

.contacts-banner {
    background-image: url('https://teamaboaturku.github.io/nic24_photos/images/contacts.png');
}

.map-banner {
    background-image: url('https://teamaboaturku.github.io/nic24_photos/images/map.png');
}

.timetable-banner {
    background-image: url('https://teamaboaturku.github.io/nic24_photos/images/timetable.png');
}

.conference-banner {
    background-image: url('https://teamaboaturku.github.io/nic24_photos/images/conference.png');
}

.committee-banner {
    background-image: url('https://teamaboaturku.github.io/nic24_photos/images/committee.png');
}
</style>