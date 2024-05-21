<template>
    <div class="sponsor-container">
        <h3>We would like to thank our sponsors:</h3>
        <div class="sponsor-list">
            <div class="sponsor">
                <img src="https://static.igem.wiki/teams/4831/wiki/logos/utu-logo.jpg" alt="University of Turku logo">
            </div>
            <div class="sponsor">
                <img src="https://static.igem.wiki/teams/4831/wiki/logos/turku-amk-eng-logo.png" alt="Turku AMK logo">
            </div>
            <div class="sponsor">
                <img src="https://static.igem.wiki/teams/4831/wiki/logos/a-logo.png" alt="Åbo Akademi logo">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SponsorContainer'
}
</script>

<style scoped>
.sponsor-container {
    padding: 10px;
    margin: auto;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 10px;
}

.sponsor-list {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
}

.sponsor {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}

.sponsor img {
    max-height: 50px;
    max-width: 100%;
}
</style>
