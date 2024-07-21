// priority: 0

ItemEvents.rightClicked(event => {
    const player = event.player;

    if (event.item.getId() === ('minecraft:debug_stick')) {
        test(event);
        return;
    }

    if (event.item.getId() === ('ecologics:seashell')) {
        openSeashell(event);
        event.success()
        return;
    }
})

BlockEvents.rightClicked(event => {
    const p = event.player;
    const item = p.getItemInHand(event.hand);

    if (event.block.id == 'minecraft:crying_obsidian' && item.id == "minecraft:dragon_breath") {
        event.block.set('minecraft:obsidian')

        if (item.count == 1) {
            p.setItemInHand(event.hand, 'spelunkery:portal_fluid_bottle');
        }
        else {
            item.shrink(1);
            if (!p.addItem('spelunkery:portal_fluid_bottle')) {
                p.drop('spelunkery:portal_fluid_bottle');
            }
        }

        event.level.runCommandSilent(`playsound spelunkery:portal_fluid_bottle_fill block @a ${p.x} ${p.y} ${p.z}`)
        return;
    }
})

/**
 * @param {Internal.ItemClickedEventJS} event
 */
function test(event) {
    const player = event.getPlayer();
    const data = player.getPersistentData();
    let applesEaten = data.getInt('mriya_apples_eaten');
    let lastDayAppleWasEatenAt = data.contains('mriya_apple_eaten_at_day')
        ? data.getInt('mriya_apple_eaten_at_day')
        : -1;

    player.displayClientMessage(Component.of('Apples: ' + applesEaten + ", LastDay: " + lastDayAppleWasEatenAt), false)
}

/**
 * @param {Internal.ItemClickedEventJS} event
 */
function openSeashell(event) {
    const p = event.getPlayer();
    event.getItem().shrink(1);
    p.runCommandSilent(`loot spawn ${p.x} ${p.y + 0.8} ${p.z} loot mriya:seashell`)
    p.getLevel().playSound(null, p.x, p.y, p.z,
        'ecologics:thin_ice_crack', "PLAYERS", 1, p.getLevel().random.nextFloat() * 0.2 + 0.9);
}