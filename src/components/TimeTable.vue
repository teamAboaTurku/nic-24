<template>
    <h3 style="text-align: center;">These times are in local time.</h3>
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
            <td>Welcoming words + Presentations</td>
            <td></td>
        </tr>
        <tr>
            <td id="time">11.00</td>
            <td></td>
            <td>Presentations + short break</td>
            <td>Presentation by Brinter AM Technologies Ltd</td>
        </tr>
        <tr>
            <td id="time">12.00</td>
            <td>Welcoming ceremony</td>
            <td>Presentations + lunch at 12.30</td>
            <td>Lunch</td>
        </tr>
        <tr>
            <td id="time">13.00 </td>
            <td>Kelly’s small introduction + Postersession</td>
            <td>Lunch ends 13.30 + presentations</td>
            <td>Presentation by Euro-BioImaging</td>
        </tr>
        <tr>
            <td id="time">14.00</td>
            <td>Postersession / Kelly’s workshop</td>
            <td>Team presentations</td>
            <td>Award ceremony</td>
        </tr>
        <tr>
            <td id="time">15.00</td>
            <td>Postersession / Kelly’s workshop</td>
            <td>Preparing for the evening</td>
            <td>Saying goodbye</td>
        </tr>
        <tr>
            <td id="time">16.00</td>
            <td>Presentation by Synbio Powerhouse</td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td id="time">17.00</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td id="time">18.00</td>
            <td></td>
            <td>Academic dinner party at Scandic Börs</td>
            <td></td>
        </tr>
        <tr>
            <td id="time">19.00</td>
            <td>City tour</td>
            <td>Academic dinner party at Scandic Börs</td>
            <td></td>
        </tr>
        <tr>
            <td id="time">20.00</td>
            <td>City tour / hangout</td>
            <td>Academic dinner party at Scandic Börs</td>
            <td></td>
        </tr>
        <tr>
            <td id="time">22.00</td>
            <td></td>
            <td>After party at Dynamo</td>
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
    background-color: var(--blue);
    border: 1px solid var(--darkBlue);
    border-radius: 10px;
    margin: auto;
    margin-bottom: 50px;
    min-width: 300px;
    max-width: 600px;
}

td,
th {
    border: 1px solid var(--darkBlue);
    background-color: var(--lightBlue);
    padding: 5px;
    width: 30%;
}

#time {
    width: 10%;
    text-align: center;
}

@media only screen and (max-width: 500px) {

    table,
    th,
    td {
        border-collapse: collapse;
    }

    td,
    th {
        padding: 1px;
        padding-top: 5px;
        padding-bottom: 5px;
    }
}
</style>