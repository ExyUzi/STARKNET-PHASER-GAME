import React from 'react';
import Phaser from 'phaser';
import LoginScene from '../scenes/LoginScene'; // Import our first scene
import BasePlugin from '../plugin/BasePlugin';

function PhaserGame() {
        new Phaser.Game({ 
            width: 980,
            height: 620,
            type: Phaser.AUTO,
            scale: {
                autoCenter: Phaser.Scale.CENTER_HORIZONTALLY // We can set horrizontally our canvas
            },
            scene: [
                LoginScene // The first scene is the Login Scene
            ],
            plugins: {
                global: [
                    { key: 'BasePlugin', plugin: BasePlugin, start: false, mapping: 'baseplugin'},
                ],
            },
            parent: 'game-content',
        });
        return  <div id="game-content" /> // Our canvas will be rendered here (parent = game-content)
};

export default PhaserGame;
