<template>
    <div class="flagLine">
        <div class="flag" id="lat"></div>
        <div class="flag" id="lit"></div>
        <div class="flag" id="fin"></div>
        <div class="flag" id="den"></div>
        <div class="flag" id="est"></div>
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
    background: linear-gradient(to right, white 0%, white 40%, blue 40%, blue 60%, white 60%, white 100%);
}

#est {
    background: linear-gradient(to right, blue 0%, blue 33.33%, black 33.33%, black 66.67%, white 66.67%, white 100%);
}

#lat {
    background: linear-gradient(to right, rgb(187, 8, 8) 0%, rgb(187, 8, 8) 40%, white 40%, white 60%, rgb(187, 8, 8) 60%, rgb(187, 8, 8) 100%);
}

#lit {
    background: linear-gradient(to right, yellow 0%, yellow 33.33%, green 33.33%, green 66.67%, rgb(187, 8, 8) 66.67%, rgb(187, 8, 8) 100%);
}
#den {
    background: linear-gradient(to right, red 0%, red 40%, white 40%, white 60%, red 60%, red 100%);
}

#swe {
    background: linear-gradient(to right, blue 0%, blue 40%, yellow 40%, yellow 60%, blue 60%, blue 100%);
}

#nor {
    background: linear-gradient(to right, red 0%, red 30%,white 30%, white 40%, blue 40%, blue 60%, white 60%, white 70%, red 70%, red 100%);
}

</style>