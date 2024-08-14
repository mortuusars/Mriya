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
    Item.of('spelunkery:cinnabar_shard').withChance(0.4),Item.of('spelunkery:cinnabar').withChance(0.05)], '#create:stone_types/crimsite')
        .processingTime(250)
        .id('create:crushing/crimsite');

    event.recipes.create.crushing(['20x minecraft:redstone', Item.of('4x spelunkery:cinnabar').withChance(0.5), Item.of('6x spelunkery:cinnabar_shard').withChance(0.5)], 'spelunkery:rough_cinnabar_block')
        .processingTime(250)
        .id('create:crushing/rough_cinnabar');

    event.recipes.create.crushing(['16x minecraft:lapis_lazuli', Item.of('8x minecraft:lapis_lazuli').withChance(0.5)], 'spelunkery:rough_lazurite_block')
        .processingTime(250)
        .id('create:crushing/rough_lazurite');

    event.recipes.create.crushing(['16x minecraft:quartz', Item.of('8x minecraft:quartz').withChance(0.5)], 'spelunkery:rough_quartz_block')
        .processingTime(250)
        .id('create:crushing/rough_quartz');
    
    event.recipes.create.crushing(['9x minecraft:emerald', Item.of('2x minecraft:emerald').withChance(0.5), Item.of('6x spelunkery:emerald_shard').withChance(0.5)], 'spelunkery:rough_emerald_block')
        .processingTime(250)
        .id('create:crushing/rough_emerald');
        
    event.recipes.create.crushing(['9x minecraft:diamond', Item.of('2x minecraft:diamond').withChance(0.5), Item.of('6x spelunkery:diamond_shard').withChance(0.5)], 'spelunkery:rough_diamond_block')
        .processingTime(250)
        .id('create:crushing/rough_diamond');


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

    // event.recipes.create.mixing(['spelunkery:rock_salt'], ['2x spelunkery:salt', Fluid.of('minecraft:water', 500)])
    //     .id('spelunkery:mixing/rock_salt')
    // event.recipes.create.mixing(['spelunkery:salt'], ['minecraft:pointed_dripstone', Fluid.of('minecraft:water', 500)])
    //     .heated()
    //     .id('spelunkery:mixing/salt')

    event.recipes.create.milling(['spelunkery:cinnabar', Item.of('minecraft:redstone').withChance(0.5)], ['#forge:ores/redstone'])
})