LootJS.modifiers(event => {
    event.addLootTableModifier('minecraft:chests/ruined_portal')
        .removeLoot(Item.of('spelunkery:portal_fluid_bottle'))

    event.addLootTableModifier('minecraft:chests/underwater_ruin_big')
        .pool(pool => {
            pool.rolls([2, 6])
            pool.randomChance(0.5).addLoot('ecologics:seashell')
        })

    event.addLootTableModifier('minecraft:chests/underwater_ruin_small')
        .pool(pool => {
            pool.rolls([1, 4])
            pool.randomChance(0.25).addLoot('ecologics:seashell')
        })

    event.addLootTableModifier('minecraft:entities/drowned')
        .pool(pool => {
            pool.rolls([1, 4])
            pool.randomChance(0.1).addLoot('ecologics:seashell')
        })
        .pool(pool => {
            pool.rolls([1, 2])
                .randomChance(0.1)
                .addLoot('minecraft:cod')
        })

    mobLoot(event);
    wares(event);

    // event.addLootTableModifier('minecraft:blocks/bookshelf')
    //     .anyStructure(['minecraft:mansion'], true)
    //     .modifyLoot(Ingredient.of('minecraft:book'), stack => {
    //         console.log(stack.getCount());
    //         if (Math.random() < 0.2) {
    //             return Item.of('minecraft:emerald_block')
    //         }
    //         return stack;
    //     })
        // .pool(pool => {
            // pool.anyStructure(['minecraft:mansion'], true)
            // pool.rolls([1, 4])
            // pool.addLoot('ecologics:seashell')
        // })
})

/**
 * @param {Internal.LootModificationEventJS} event 
 */
function mobLoot(event) {
//     event.addEntityLootModifier('minecraft:zombie')
//         .matchMainHand(Ingredient.of('#forge:tools/knives'))
//         .killedByPlayer()
//         .matchEntity(entity => {
//             entity.nbt('{IsBaby:false}')
//         })
//         .randomChance(0.1)
//         .addLoot(LootEntry.of('mriya:rotten_heart'))
}

/**
 * @param {Internal.LootModificationEventJS} event 
 */
function wares(event) {
    event.addEntityLootModifier('minecraft:pillager')
            .addAlternativesLoot(
                // Move Zinc ingots and similar stuff to "We can resell it" agreement.
                LootEntry.of(Item.of('wares:sealed_delivery_agreement', 
                    '{message:\'{"text":"Low supplies. Need to restock. Payment guaranteed."}\', requested:"mriya:wares/pillager/requested_goods", payment:"mriya:wares/pillager/payment_emeralds"}'))
                    .when((c) => c.randomChance(0.05)),
                LootEntry.of(Item.of('wares:sealed_delivery_agreement', 
                    '{message:\'{"text":"Took this from stupid ones. Give us money?."}\', requested:"mriya:wares/pillager/requested_emeralds", payment:"mriya:wares/pillager/payment_goods"}'))
                    .when((c) => c.randomChance(0.05)))
}