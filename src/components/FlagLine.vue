<template>
    <div class="flagLine">
        <div class="flag" id="fin"></div>
        <div class="flag" id="est"></div>
        <div class="flag" id="lat"></div>
        <div class="flag" id="lit"></div>
        <div class="flag" id="den"></div>
        <div class="flag" id="swe"></div>
        <div class="flag" id="nor"></div>
    </div>
</template>

<script>
export default {
    name: 'FlagLine'
}
</script>

<style>
.flagLine {
    display: flex;
    width: 100%;
    height: 5px;
}

.flag {
    flex: 1;
    height: 100%;
}

#fin {
    background: linear-gradient(to right, blue 0%, blue 33.33%, white 33.33%, white 66.67%, blue 66.67%, blue 100%);
}

#est {
    background: linear-gradient(to right, black 0%, black 33.33%, blue 33.33%, blue 66.67%, white 66.67%, white 100%);
}

#lat {
    background: linear-gradient(to right, var(--red) 0%, var(--red) 33.33%, white 33.33%, white 66.67%, var(--red) 66.67%, var(--red) 100%);
}

#lit {
    background: linear-gradient(to right, yellow 0%, yellow 33.33%, green 33.33%, green 66.67%, var(--red) 66.67%, var(--red) 100%);
}
#den {
    background: linear-gradient(to right, red 0%, red 33.33%, white 33.33%, white 66.67%, red 66.67%, red 100%);
}

#swe {
    background: linear-gradient(to right, blue 0%, blue 33.33%, yellow 33.33%, yellow 66.67%, blue 66.67%, blue 100%);
}

#nor {
    background: linear-gradient(to right, red 0%, red 20%,white 20%, white 40%, blue 40%, blue 60%, white 60%, white 80%, red 80%, red 100%);
}

</style>