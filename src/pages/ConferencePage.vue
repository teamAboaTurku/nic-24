<template>
    <h2>Here you can get more info on all the events!</h2>
    <div class="text-box">
        <h3>Poster session</h3>
        <p>
            <span style="font-weight: bold;">Date and Time</span>
            <br>
            The NiC 2024 poster session will be held on Friday, July 26th, from 13:45 to 15:45 in the Argentum lobby,
            right next to the Argentum auditorium, in the Aurum Building.
            <br><br>
            <span style="font-weight: bold;">Poster Submission</span>
            <br>
            All posters must be submitted to the organizers at the start of the event. The organizers will handle the
            placement of the posters in the designated areas.
            <br><br>
            <span style="font-weight: bold;">Welcoming Ceremony and Keynote</span>
            <br>
            Following the welcoming ceremony, Kelly Raita will deliver a talk on scientific communication, providing
            valuable insights and tips for effectively conveying scientific ideas.
            <br><br>
            <span style="font-weight: bold;">Poster Display and Presentation</span>
            <br>
            In the lobby area, each team will have a designated poster stand where they can present their projects to
            other teams and visitors. This setup encourages interaction and knowledge sharing among participants.
            <br><br>
            <span style="font-weight: bold;">Expert Guidance</span>
            <br>
            During the poster session, Kelly Raita will circulate among the teams, offering tips and assistance to help
            enhance their presentations. Take advantage of this opportunity to gain expert advice on improving your
            scientific communication skills.
            <br><br>
            We look forward to an engaging and informative poster session where innovative ideas and projects can be
            shared and discussed.
        </p>

        <h3>Project presentations</h3>
        <p>
            <span style="font-weight: bold;">Date and Time</span>
            <br>
            The project presentations will be held on Saturday, July 27th, from 10:00 to 14:45 in the Argentum
            Auditorium in the Aurum Building.
            <br><br>
            <span style="font-weight: bold;">Presentation Guidelines</span>
            <br>
            Each team is allocated a maximum of 10 minutes to present their project. Following the presentation, there
            will be a 5-minute session dedicated to answering questions from the judges and the audience.
            <br><br>
            <span style="font-weight: bold;">Submission Deadline</span>
            <br>
            Presentation slides must be submitted to the organizers via email by July 20th. This ensures that all
            technical preparations can be completed in time for the event.
            <br><br>
            <span style="font-weight: bold;">Judging and Awards</span>
            <br>
            A panel of judges will evaluate each presentation. The team with the highest score will be awarded the
            prestigious Golden Pipette. Additionally, the winning team will have the honor of hosting next year’s Nordic
            iGEM Conference.
            <br><br>
            Prepare your presentations thoughtfully and make sure to adhere to the guidelines to showcase your hard work
            effectively. Good luck to all teams!
        </p>
        <PresentationTable />

        <h3>Academic dinner party</h3>
        <p>
            <span style="font-weight: bold;">Date and Time</span>
            <br>
            The Academic Dinner Party will commence at 18:00 in Scandic Hamburger Börs. Guests are encouraged to arrive
            at
            least 30 minutes earlier to find their seats and ensure a smooth transition into the event space.
            <br><br>
            <span style="font-weight: bold;">Arrival and Lounge Area</span>
            <br>
            Upon arrival, guests can relax in the lounge area located on the ground floor, to the right of the main
            entrance. This area is furnished with comfortable chairs and couches, providing a welcoming space to wait
            before
            being directed to the dinner venue. Cloakroom can be found in the lounge area and is free to use for
            participants.
            <br><br>
            <span style="font-weight: bold;">Dinner Details</span>
            <br>
            The dinner will feature a delightful three-course meal, starting with a starter drink at 18:15.
            Non-alcoholic
            starter drink and still and sparkling water, will be provided. For those who prefer other beverages, a bar
            will
            be available for purchasing additional drinks.
            <br><br>
            <span style="font-weight: bold;">Seating and Socializing</span>
            <br>
            To facilitate an enjoyable dining experience and to help the staff manage dietary preferences and allergies,
            there will be a designated seating arrangement. This also encourages guests to network and engage with
            individuals outside of their usual teams.
            <br><br>
            <span style="font-weight: bold;">Dress Code</span>
            <br>
            The dress code for the evening is smart casual, allowing guests to dress comfortably while maintaining a
            polished appearance.
            <br><br>
            <span style="font-weight: bold;">Menu</span>
            <br>
            Appetizer: Creamy Forest Mushroom Soup<br>
            Main Course: Lightly Smoked Salmon with Hollandaise Sauce and Dill Potatoes<br>
            Dessert: Curd Pannacotta with Berries
            <br><br>
            <span style="font-weight: bold;">After party at Dynamo</span>
            <br>
            The festivities don't end with the dinner. Starting at 22:00, the after party will take place at Dynamo,
            located at Linnankatu 7, 20100. From 22:00 to 24:00, guests can take advantage of happy hour, featuring a
            variety of discounted drinks. Entrance to the after party is free, though there might be a small fee for the
            cloakroom service. Dynamo provides a lively atmosphere with a mix of indie and electronic music, making it
            the perfect place to continue the evening's celebrations.
            <br><br>
            We look forward to welcoming you to an evening of fine dining and engaging conversation!
        </p>
    </div>
</template>

<script>
import PresentationTable from '../components/PresentationTable.vue'

export default {
    name: 'ConferencePage',
    components: {
        PresentationTable
    }
}
</script>

<style scoped>
.text-box {
    margin: 10px auto 50px auto;
    min-width: 250px;
    max-width: 600px;
}

.text-box p {
    text-align: justify;
}

h3 {
    margin-top: 50px;
}
</style>