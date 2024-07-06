
ServerEvents.tags('item', event => {
    event.remove('forge:dough', 'create:dough')

    event.add('forge:salts')
        .remove('salt:salt')
        .add('spelunkery:salt');

    event.add('mriya:hanging_roots', ['minecraft:hanging_roots', 'spelunkery:tangle_roots']);

    event.add('create:upright_on_belt')
        .add('spelunkery:portal_fluid_bottle');

    // Disable slime feeding
    event.removeAll('spelunkery:slime_food');
})

ServerEvents.tags('fluid', event => {
    for (const fluid of Disabled.Fluids) {
        event.removeAllTagsFrom(fluid)
    }
});

ServerEvents.tags('worldgen/biome', event => {
    for (const tag of Disabled.Tags.Biome) {
        event.removeAll(tag)
    }
})