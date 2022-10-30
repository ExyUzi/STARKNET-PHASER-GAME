import Phaser from 'phaser'

export default class LoginScene extends Phaser.Scene

{   
	constructor(){ 
		super('scenetest')
	}
    loadData = async () => { // Create our async function loadData()
        await this.baseplugin.connectWallet(); // Call our connectWallet function 
        if (this.baseplugin.playerInfo.address) { // if the playerInfo.address exist
            this.connectButton.destroy(); // We remove the connectButton
            this.add.text(200, 370, `Hello ${this.baseplugin.playerInfo.address}`) // We can render the address 
        }
    }

	preload(){
        this.load.image("carbg","assets/carbg.png"); // Import our background
        this.load.image("buttonconnect","assets/buttonconnect.png"); // Import our connectbutton
    }

    create(){   

        this.add.image(500, 320, "carbg").setScale(0.9) // Add our background on our canvas

        this.connectButton = this.add.sprite(500, 380, "buttonconnect").setScale(0.1).setInteractive(); // Set our buttonconnect interactive

        this.connectButton.on('pointerover', () => { // Zoom animation when pointerOver (setScale(0.12) )
            this.connectButton.setScale(0.12);
        });

        this.connectButton.on('pointerout', () => {
            this.connectButton.setScale(0.10); // Zoom return to normal when pointerOut (setScale(0.10))
        });
        this.connectButton.on('pointerdown', async () => {
            if (!this.baseplugin.playerInfo.address) { // If we are not connected, we can call the load data function
                this.loadData(); // Au debut on charge les data on click
            }
        });
    }
    update(){  
    }
}

