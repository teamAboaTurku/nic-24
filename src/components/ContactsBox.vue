<template>
    <div class="contactsBox">
        <h3>via email:</h3>
        <p>team@aboaturku.fi</p>
        <h3>or via social media:</h3>
        <SomeBox />
        <h3>Details of the main contact person for the event will be posted here closer to the event date.</h3>
    </div>
</template>

<script>
import SomeBox from './SomeBox.vue'

export default {
    name: 'ContactsBox',
    components: {
        SomeBox
    }
}
</script>

<style>
.contactsBox {
    margin: auto;
    width: 90%;
    min-width: 200px;
    max-width: 400px;
    text-align: center;
}
.contactsBox .someBox a.some_icon{
    color: var(--green);
}
</style>