ServerEvents.recipes(event => {
    event.remove({ id: 'create:crushing/asurine_recycling' })
    event.remove({ id: 'create:crushing/crimsite_recycling' })

    event.recipes.create.crushing([Item.of('create:crushed_raw_zinc').withChance(0.4),
    Item.of('create:zinc_nugget').withChance(0.4),
    Item.of('spelunkery:lapis_lazuli_shard').withChance(0.4),], '#create:stone_types/asurine')
        .processingTime(250)
        .id('create:crushing/asurine');

    event.recipes.create.crushing([Item.of('create:crushed_raw_iron').withChance(0.4),
    Item.of('minecraft:iron_nugget').withChance(0.4),
    Item.of('spelunkery:cinnabar_shard').withChance(0.4),], '#create:stone_types/crimsite')
        .processingTime(250)
        .id('create:crushing/crimsite');


    event.shapeless('farmersdelight:wheat_dough', ['create:wheat_flour', 'miners_delight:water_cup'])
        .id('create:crafting/appliances/dough_from_cup')

    event.custom({
        type: "createdieselgenerators:basin_fermenting",
        ingredients: [
            {
                item: "minecraft:sweet_berries"
            },
            {
                item: "minecraft:sweet_berries"
            },
            {
                item: "minecraft:sweet_berries"
            },
            {
                item: "minecraft:sweet_berries"
            },
            {
                item: "minecraft:sugar"
            },
            {
                fluid: "createdieselgenerators:ethanol",
                amount: 100
            }
        ],
        processingTime: 200,
        results: [
            {
                fluid: "mriya:wine",
                amount: 250
            }
        ]
    }).id ('mriya:fermenting/wine')

    event.recipes.create.filling(['mriya:wine_bottle'], [Fluid.of('mriya:wine', 250), 'minecraft:glass_bottle'])
        .id('mriya:filling/wine_bottle')
    event.recipes.createEmptying(['minecraft:glass_bottle', Fluid.of('mriya:wine', 250)], 'mriya:wine_bottle')
        .id('mriya:emptying/wine_bottle')
})