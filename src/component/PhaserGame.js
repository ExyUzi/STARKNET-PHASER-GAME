import React from 'react';
import Phaser from 'phaser';
import LoginScene from '../scenes/LoginScene'; // Import our first scene
import BasePlugin from '../plugin/BasePlugin'; // Import our BasePlugin

function PhaserGame() {
        new Phaser.Game({ 
            width: 980,
            height: 620,
            type: Phaser.AUTO,
            scale: {
                autoCenter: Phaser.Scale.CENTER_HORIZONTALLY // We can set horrizontally our canvas
            },
            scene: [
                LoginScene // Define our Scenes here, the first scene is the Login Scene
            ],
            plugins: {
                global: [
                    { key: 'BasePlugin', plugin: BasePlugin, mapping: 'baseplugin'}, // Pass our plugin with a key and a mapping (for calling our functions)
                ],
            },
            parent: 'game-content',
        });
        return  <div id="game-content" /> // Our canvas will be rendered here (parent = game-content)
};

export default PhaserGame;
