require("dotenv").config();

const { Client } = require('discord.js');
const client = new Client({intents:["GUILDS","GUILD_MESSAGES"]});

const PREFIX = "$";

client.on('ready', () => {
    console.log(`${client.user.tag} has logged in.`);
  });
client.on('message', (message) => {
    console.log(`[${message.author.tag}]: ${message.content}`);
    /*if(message.content!='\0'){
      message.channel.send("Heyy!! Welcome.");
    }*/
    if(message.content === "Hello"){
        message.channel.send("Heyy!! Welcome user. \n\nChoose the one you want to know about:\n1. Distribution of water resources.\n2. Why do we need to conserve water? \n3. Guide to conserve water. \n4.Advantages of water conservation. \n5.Irrigation methods to conserve water.");
    }
    if(message.content === "hello"){
      message.channel.send("Heyy!! Welcome user. \n\nChoose the one you want to know about:\n1. Distribution of water resources.\n2. Why do we need to conserve water? \n3. Guide to conserve water. \n4.Advantages of water conservation. \n5.Irrigation methods to conserve water.");
    }
    if(message.content === "Hi"){
      message.channel.send("Heyy!! Welcome user. \n\nChoose the one you want to know about:\n1. Distribution of water resources.\n2. Why do we need to conserve water? \n3. Guide to conserve water. \n4.Advantages of water conservation. \n5.Irrigation methods to conserve water.");
    }
    if(message.content === "hi"){
      message.channel.send("Heyy!! Welcome user. \n\nChoose the one you want to know about:\n1. Distribution of water resources.\n2. Why do we need to conserve water? \n3. Guide to conserve water. \n4.Advantages of water conservation. \n5.Irrigation methods to conserve water.");
    }
    if(message.content === "hii"){
      message.channel.send("Heyy!! Welcome user. \n\nChoose the one you want to know about:\n1. Distribution of water resources.\n2. Why do we need to conserve water? \n3. Guide to conserve water. \n4.Advantages of water conservation. \n5.Irrigation methods to conserve water.");
    }
    if(message.content === "Hey"){
      message.channel.send("Heyy!! Welcome user. \n\nChoose the one you want to know about:\n1. Distribution of water resources.\n2. Why do we need to conserve water? \n3. Guide to conserve water. \n4.Advantages of water conservation. \n5.Irrigation methods to conserve water.");
    }
    if(message.content === "Heyy"){
      message.channel.send("Heyy!! Welcome user. \n\nChoose the one you want to know about:\n1. Distribution of water resources.\n2. Why do we need to conserve water? \n3. Guide to conserve water. \n4.Advantages of water conservation. \n5.Irrigation methods to conserve water.");
    }
    if(message.content === "hey"){
      message.channel.send("Heyy!! Welcome user. \n\nChoose the one you want to know about:\n1. Distribution of water resources.\n2. Why do we need to conserve water? \n3. Guide to conserve water. \n4.Advantages of water conservation. \n5.Irrigation methods to conserve water.");
    }
    if(message.content === "heyy"){
      message.channel.send("Heyy!! Welcome user. \n\nChoose the one you want to know about:\n1. Distribution of water resources.\n2. Why do we need to conserve water? \n3. Guide to conserve water. \n4.Advantages of water conservation. \n5.Irrigation methods to conserve water.");
    }
    if(message.content === "1"){
      message.channel.send("About 71 percent of the Earth's surface is water-covered, and the oceans hold about 96.5 percent of all Earth's water. Water also exists in the air as water vapor, in rivers and lakes, in icecaps and glaciers, in the ground as soil moisture and in aquifers.\nonly 2.5% of Earth's water is freshwater - the amount needed for life to survive. Only a little more than 1.2% of all freshwater is surface water, which serves most of life's needs.  Most of this water is locked up in ice, and another 20.9% is found in lakes. Rivers make up 0.49% of surface freshwater. Although rivers account for only a small amount of freshwater, this is where humans get a large portion of their water from.");
    }
    if(message.content === "2"){
      message.channel.send("Fresh water which can be used is a limited resource. With all the severe droughts happening in the world, the limited supply of fresh water is becoming one of our most precious resources. The reasons why saving water is important:\nA. Water grows food i.e, fruits and vegetables require water to grow. \nB. It protects our ecosystem and wildlife. \nC. Less water usage means more savings. \nD. Water supply is already limited. \nE. Conserving water saves energy. \nF. Water conservation minimizes the effects of drought and water shortages.");  
    }
    if(message.content === "3"){
      message.channel.send("Reducing water use reduces the energy required to process and deliver it to homes, businesses, farms, and communities, Which in turn helps to reduce pollution and conserve fuel resources. Some ways to conserve water are: \nA) Close the tap while not in use. \nB) Install water-efficient fixtures. \nC) Check water connections for the leak. \nD) Water your lawn only when it needs it. \nE) Deep-soak your lawn. \nF) Check for leaks in pipes, hoses faucets and couplings.");
    }
    if(message.content === "4"){
      message.channel.send("Some advantages of water conservation are:\n i. It minimizes the effects of drought and water shortages. \nii. It guards against rising costs and political conflict. Failing to conserve water will lead to rising costs, reduced food supplies, health hazards, and political conflict.. \niii. It helps to preserve our environment. \niv. It makes water available for recreational purposes. \nv. It builds safe and beautiful communities. Reducing our usage of water now means that these services can continue to be provided. ");
    }
    if(message.content === "5"){
      message.channel.send("Some irrigation practices which will help to conserve water are:\ni) Drip irrigation systems. \nii) Water Flow Meters. \niii) Soil Sensors. \niv) Irrigation Management Mobile Apps. \nv) Drones can be used to detect leaks and determine if crops are getting too much or too little water.");
    } 
});

//client.login(process.env.DISCORD_BOT_TOKEN); this is done to hide the security Token
