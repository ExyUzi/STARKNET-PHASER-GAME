import Phaser from 'phaser';
import { connect } from "@argent/get-starknet" // Import @argent/get-starknet connect

class BasePlugin extends Phaser.Plugins.BasePlugin { // declare our plugin
    constructor(pluginManager) {
        super(pluginManager);

        //Global States
        this.playerInfo = {
            address: null,
        }
    }

    async connectWallet(){ // Create our connectWallet function
        try {
            const windowStarknet = await connect(); 
            await windowStarknet?.enable({ starknetVersion: "v4" });

            if (windowStarknet.selectedAddress) {
                if (windowStarknet.chainId === "SN_GOERLI") { // Check the chanID = Goerli
                    this.playerInfo.address = windowStarknet.selectedAddress; // Here we set our address to our playerInfo state and we can use it in all our phaser game :)
                    console.log(windowStarknet.selectedAddress);
                } else {
                    alert("Invalid network, switch to Goerli and try again");
                }
            }
        } catch (e) {
            console.log(e.message);
            window.alert('Unable to connect to your Argent X wallet. Please try again later');
        }
    }

}

export default BasePlugin; // export our BasePlugin