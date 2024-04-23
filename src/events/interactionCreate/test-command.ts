import {ChatInputCommandInteraction} from "discord.js";

export default function (interaction: ChatInputCommandInteraction) {
    console.log(interaction.user) // logs interaction user
    console.log(interaction.id) // logs interaction id

    console.log(interaction); // crashes?
}
