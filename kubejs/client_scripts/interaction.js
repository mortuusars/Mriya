BlockEvents.rightClicked(event => {
    const p = event.player;
    const item = p.getItemInHand(event.hand);

    // Allow quick harvesting only with hoes:
    if (event.block.hasTag('minecraft:crops') && !item.hasTag('minecraft:hoes')) {
        event.cancel()
        return
    }
})