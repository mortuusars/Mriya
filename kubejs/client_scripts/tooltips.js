ItemEvents.tooltip(event => {
    for (const item of jei.items.disabled) {
        event.add(item, Component.red(disabled_item_tooltip));
    }

    event.addAdvanced(['#minecraft:hoes'], 
        (item, advanced, text) => {
            text.add(1, Component.darkGray('[').append(Component.gray('Use')).append(Component.darkGray('] on crops to harvest and replant wide area')));
    })

    event.addAdvanced(['#forge:tools/axes'], 
        (item, advanced, text) => {
            text.add(1, Component.darkGray('Hold [').append(Component.gray('Sneak')).append(Component.darkGray('] to fell a tree')));
    })

    event.addAdvanced('#forge:armors/leggings', 
        (item, advanced, text) => {
            if (!event.shift) {
                text.add(1, Component.darkGray('Hold [').append(Component.gray('Shift')).append(Component.darkGray('] for Details')));
            }
            else {
                text.add(1, Component.darkGray('Hold [').append(Component.gray('Sneak')).append(Component.darkGray('] while jumping towards a wall to cling on it.')));
                text.add(2, Component.darkGray('Release [').append(Component.gray('Sneak')).append(Component.darkGray('] at the right moment to jump off of it.')));
                text.add(3, Component.darkGray('If timed correctly, allows climbing 2-block high walls.'));
            }
    })

    // Misc:
    event.addAdvanced('ecologics:seashell', 
        (item, advanced, text) => {
            text.add(1, Component.darkGray('[').append(Component.gray('Use')).append(Component.darkGray('] to break open')));
    });

    event.addAdvanced('spelunkery:salt', (item, advanced, text) => {
        text.remove(1);
    });

    event.addAdvanced('spelunkery:portal_fluid_bottle', (item, advanced, text) => {
        text.remove(1);
    });
    event.addAdvanced('minecraft:respawn_anchor', (item, advanced, text) => {
        text.remove(1);
    });
    event.addAdvanced('minecraft:redstone', (item, advanced, text) => {
        text.remove(1);
    });
    event.addAdvanced(/comforts:sleeping_bag_/, (item, advanced, text) => {
        text.remove(1);
    })
})