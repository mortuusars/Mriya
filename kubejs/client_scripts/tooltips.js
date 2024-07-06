ItemEvents.tooltip(event => {
    for (const item of jei.items.disabled) {
        event.add(item, Component.red(disabled_item_tooltip));
    }

    event.addAdvanced(['minecraft:wooden_hoe', 'minecraft:stone_hoe', 'minecraft:iron_hoe', 
        'minecraft:golden_hoe', 'minecraft:diamond_hoe', 'minecraft:netherite_hoe', 
        'additionaladditions:gilded_netherite_hoe'], (item, advanced, text) => {
            text.add(1, Component.gray('Can harvest and replant wide area of crops'));
        })

    

    // Misc:
    event.addAdvanced('ecologics:seashell', (item, advanced, text) => {
        text.add(1, Component.gray('[Use]').append(Component.darkGray(' to break open.')));
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