BlockEvents.rightClicked(event => {
    const p = event.player;
    const item = p.getItemInHand(event.hand);
})

ItemEvents.rightClicked(event => {
    const player = event.player;

    if (event.item.getId() == 'spelunkery:flint_hammer_and_chisel' || event.item.getId() == 'spelunkery:obsidian_hammer_and_chisel') {
        event.success()
    }
})