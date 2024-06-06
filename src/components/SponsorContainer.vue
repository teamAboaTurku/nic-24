<template>
    <div class="sponsor-container">
        <h3>We would like to thank our sponsors:</h3>
        <div class="sponsor-list">
            <div class="sponsor">
                <img src="https://teamaboaturku.github.io/nic24_photos/images/a-logo.png" alt="Åbo Akademi logo">
            </div>
            <div class="sponsor">
                <img src="https://teamaboaturku.github.io/nic24_photos/images/loimu-logo.png" alt="Loimu logo">
            </div>
            <div class="sponsor">
                <img src="https://teamaboaturku.github.io/nic24_photos/images/elovena-logo.png" alt="Elovena logo">
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
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 10px;
}

.sponsor-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 10px;
    width: 100%;
    justify-items: center;
    align-items: center;
}

.sponsor {
    display: flex;
    justify-content: center;
    align-items: center;
}

.sponsor img {
    max-height: 50px;
    max-width: 100%;
}

@media only screen and (max-width: 425px) {
    .sponsor-list {
        grid-template-columns: repeat(2, 1fr);
    }
}
</style>
