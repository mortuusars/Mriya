ItemEvents.tooltip(event => {
    for (const item of jei.items.disabled) {
        event.add(item, Component.red(disabled_item_tooltip));
    }

    event.addAdvanced(['minecraft:wooden_hoe', 'minecraft:stone_hoe', 'minecraft:iron_hoe', 
        'minecraft:golden_hoe', 'minecraft:diamond_hoe', 'minecraft:netherite_hoe'], 
        (item, advanced, text) => {
            text.add(1, Component.gray('Use on crops to harvest and replant a wide area'));
    })

    event.addAdvanced(['minecraft:wooden_axe', 'minecraft:stone_axe', 'minecraft:iron_axe', 
        'minecraft:golden_axe', 'minecraft:diamond_axe', 'minecraft:netherite_axe'], 
        (item, advanced, text) => {
            text.add(1, Component.gray('Hold ').append(Component.white('[Sneak]')).append(Component.gray(' to fell a tree')));
    })

    // Misc:
    event.addAdvanced('ecologics:seashell', (item, advanced, text) => {
        text.add(1, Component.white('[Use]').append(Component.gray(' to break open')));
    });

    event.addAdvanced('spelunkery:salt', (item, advanced, text) => {
        text.remove(1);
    });

    event.addAdvanced('spelunkery:portal_fluid_bottle', (item, advanced, text) => {
        text.remove(1);
    });

    event.addAdvanced('minecraft:crying_obsidian', (item, advanced, text) => {
        text.remove(0);
    });
    event.addAdvanced('minecraft:respawn_anchor', (item, advanced, text) => {
        text.remove(0);
    });
    event.addAdvanced('minecraft:redstone', (item, advanced, text) => {
        text.remove(0);
    });
    event.addAdvanced(/comforts:sleeping_bag_/, (item, advanced, text) => {
        text.remove(1);
    })

})