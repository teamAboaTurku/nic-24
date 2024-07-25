<template>
    <div class="contactsBox">
        <h3>via email:</h3>
        <p>nic@aboaturku.fi</p>
        <h3>or via social media:</h3>
        <SomeBox />
        <hr style="background-color: var(--blue); height: 5px;">
        <h1>During event</h1>
        <p style="font-weight: bold;">Main contact person</p>
        <p>Elsa Lehtilä
            <br>Phone number: +358 400375909
            <br>Telegram: @Metsittynyt
        </p>
        <p style="font-weight: bold;">Safety officer</p>
        <p>Ofelia Sarlund
            <br>Phone number: +358 456567922
        </p>
        <p>In case of an emergency, the local emergency number is <span style="font-weight: bold;">112</span>.</p>
        <p>The local medical help line is <span style="font-weight: bold;">116117</span>.
            Emergency services are open 24/7 and their contact info and instructions can be read <a
                href="https://www.tyks.fi/en/patients-and-visitors/hospitals-and-units/tyks-t-hospital/emergency-services-turku-tyks-t-hospital">here</a>.
        </p>
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
    max-width: 600px;
    text-align: center;
}

.contactsBox .someBox a.some_icon {
    color: var(--green);
}
</style>