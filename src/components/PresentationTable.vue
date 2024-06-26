<template>
    <table>
        <tr>
            <th id="time">Time</th>
            <th>Teams</th>
        </tr>
        <tr>
            <td id="time">10.15</td>
            <td>
                <ol>
                    <li>Vilnius-Lithuania iGEM</li>
                    <li>BKEA</li>
                    <li>ABOA</li>
                    <li>iGEM Lund</li>
                </ol>
            </td>
        </tr>
        <tr>
            <td id="time">11.15</td>
            <td style="padding-inline-start: 30px;">Short break</td>
        </tr>
        <tr>
            <td id="time">11.30</td>
            <td>
                <ol start="5">
                    <li>Latvia-Riga</li>
                    <li>LiU iGEM</li>
                    <li>Aalto-Helsinki</li>
                    <li>iGEM Copenhagen</li>
                </ol>
            </td>
        </tr>
        <tr>
            <td id="time">12.30</td>
            <td style="padding-inline-start: 30px;">Lunch</td>
        </tr>
        <tr>
            <td id="time">13.30</td>
            <td>
                <ol start="9">
                    <li>SDU-Denmark</li>
                    <li>Chalmers-Gothenburg</li>
                    <li>iGEM Stockholm </li>
                    <li>DTU BioBuilders</li>
                </ol>
            </td>
        </tr>
    </table>
</template>

<script>
export default {
    name: 'PresentationTable'
}
</script>

<style scoped>
table {
    max-width: 300px;
}

ol {
    margin: 0px;
}
</style>