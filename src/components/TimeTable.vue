<template>
    <h3 style="text-align: center;">Note that these times are in local time.</h3>
    <table>
        <tr>
            <th id="time">Time</th>
            <th>Friday</th>
            <th>Saturday</th>
            <th>Sunday</th>
        </tr>
        <tr>
            <td id="time">10.00</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td id="time">11.00</td>
            <td></td>
            <td>Teams preparing for their presentation</td>
            <td>Presentation</td>
        </tr>
        <tr>
            <td id="time">12.00</td>
            <td>Welcoming ceremony</td>
            <td>Lunch</td>
            <td>Lunch</td>
        </tr>
        <tr>
            <td id="time">13.00 </td>
            <td>Trade show / lunch</td>
            <td>Team presentations</td>
            <td>Award ceremony</td>
        </tr>
        <tr>
            <td id="time">14.00</td>
            <td>Trade show / lunch</td>
            <td>Team presentations</td>
            <td>Award ceremony</td>
        </tr>
        <tr>
            <td id="time">15.00</td>
            <td>Trade show / workshop</td>
            <td>Team presentations</td>
            <td>Saying goodbye</td>
        </tr>
        <tr>
            <td id="time">16.00</td>
            <td>Presentation by Synbio Powerhouse</td>
            <td>Preparing for the evening</td>
            <td></td>
        </tr>
        <tr>
            <td id="time">17.00</td>
            <td>Preparing for the evening</td>
            <td>Preparing for the evening</td>
            <td></td>
        </tr>
        <tr>
            <td id="time">18.00</td>
            <td>Dinner</td>
            <td>Academic dinner party</td>
            <td></td>
        </tr>
        <tr>
            <td id="time">19.00</td>
            <td>City tour</td>
            <td>Academic dinner party</td>
            <td></td>
        </tr>
        <tr>
            <td id="time">20.00</td>
            <td>City tour</td>
            <td>Academic dinner party</td>
            <td></td>
        </tr>
    </table>
</template>

<script>
export default {
    name: 'TimeTable'
};
</script>

<style>
table {
    background-color: rgba(255, 255, 255, 0.5);
    border: 1px solid var(--green);
    border-radius: 10px;
    margin: auto;
    margin-bottom: 50px;
    min-width: 300px;
    max-width: 600px;
}

td,
th {
    border: 1px solid var(--green);
    padding: 5px;
    width: 30%;
}

#time {
    width: 10%;
    text-align: center;
}

@media only screen and (max-width: 500px) {

    table, th, td {
        border-collapse: collapse;
    }

    td, th {
        padding: 1px;
        padding-top: 5px;
        padding-bottom: 5px;
    }
}
</style>