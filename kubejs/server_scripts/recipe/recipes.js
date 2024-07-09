ServerEvents.recipes(event => {
    for (const recipeId of RemovedRecipes.ById) {
        event.remove({ id: recipeId })
    }

    for (const item of Disabled.Items) {
        event.remove({ output: item });
        event.remove({ input: item });
        // console.log(`Removed recipes that have [${item}] as input or output.`);
    }

    for (const fluid of Disabled.Fluids) {
        event.remove({ output: Fluid.of(fluid) });
        event.remove({ input: Fluid.of(fluid) });
        event.remove({ output: fluid });
        event.remove({ input: fluid });
        // console.log(`Removed recipes that have [${fluid}] fluid as input or output.`);
    }

    miscRecipes(event);
});


/**
 * @param {Internal.RecipesEventJS} event 
 */
function miscRecipes(event) {
    event.shapeless(Item.of('minecraft:suspicious_stew', 1, { Effects: [{ EffectDuration: 1, EffectId: 6, "forge:effect_id": "minecraft:instant_health" }], HealthIncreasing: true }), [
        'minecraft:brown_mushroom', 'minecraft:red_mushroom', 'minecraft:bowl',
        'minecraft:oxeye_daisy', 'minecraft:pink_petals', 'minecraft:sunflower', '#mriya:hanging_roots'])
        .id('mriya:health_stew');

    event.remove({ id: 'createdieselgenerators:basin_fermenting/dough' })
    event.remove({ id: 'farmersdelight:wheat_dough_from_eggs' })
    event.remove({ id: 'farmersdelight:wheat_dough_from_water' })
    event.remove({ id: 'create:splashing/wheat_flour' })
    event.remove({ id: 'create:smelting/bread' })
    event.remove({ id: 'create:smoking/bread' })
    event.replaceInput({ input: 'create:dough' }, 'create:dough', 'farmersdelight:wheat_dough')
    event.replaceOutput({ output: 'create:dough' }, 'create:dough', 'farmersdelight:wheat_dough')
    event.remove({ id: 'create:mixing/dough_by_mixing' })
    event.recipes.create.mixing(['farmersdelight:wheat_dough'], ['create:wheat_flour', Fluid.water(250)]).id('create:mixing/dough')

    event.remove({ id: 'backpacked:backpack' })
    event.shaped('backpacked:backpack',
        ['HLH',
         'SIS',
         'HLH'],
        {
            H: 'minecraft:rabbit_hide',
            L: 'minecraft:leather',
            S: 'minecraft:string',
            I: 'minecraft:iron_ingot'
        }).id('mriya:backpack');


    event.recipes.create.filling([Item.of('spelunkery:portal_fluid_bottle')],
        [Item.of('minecraft:glass_bottle'), Fluid.of('spelunkery:portal_fluid', 250)], 100)
        .id('spelunkery:filling/portal_fluid')
    event.recipes.create.emptying([Item.of('minecraft:bucket'), Fluid.of('spelunkery:portal_fluid', 1000)],
        Item.of('spelunkery:portal_fluid_bucket'))
        .id('spelunkery:emptying/portal_fluid_bucket')
    event.recipes.create.emptying([Item.of('minecraft:glass_bottle'), Fluid.of('spelunkery:portal_fluid', 250)],
        Item.of('spelunkery:portal_fluid_bottle'))
        .id('spelunkery:emptying/portal_fluid_bottle')

    event.recipes.create.item_application(['minecraft:obsidian', 'spelunkery:portal_fluid_bottle'],
        ['minecraft:crying_obsidian', 'minecraft:dragon_breath'])


    event.shaped(Item.of('exposure:black_and_white_film', '{FrameSize:56}'),
        ['NCC',
         'IGG',
         'IKK'],
        {
            N: '#forge:nuggets/iron',
            I: '#forge:ingots/iron',
            C: '#forge:nuggets/copper',
            G: 'minecraft:gunpowder',
            K: 'minecraft:dried_kelp'
        }).id('mriya:bw_film_from_copper');

    event.shaped(Item.of('exposure:color_film', '{FrameSize:56}'),
        ['NCC',
         'IGG',
         'IKK'],
        {
            N: '#forge:nuggets/gold',
            I: '#forge:ingots/gold',
            C: '#forge:nuggets/copper',
            G: 'minecraft:gunpowder',
            K: 'minecraft:dried_kelp'
        }).id('mriya:color_film_from_copper');

    event.shaped(Item.of('exposure:black_and_white_film', '{FrameSize:192}'),
        ['NZZ',
         'IGG',
         'IKK'],
        {
            N: '#forge:nuggets/iron',
            I: '#forge:ingots/iron',
            Z: '#forge:nuggets/zinc',
            G: 'minecraft:gunpowder',
            K: 'minecraft:dried_kelp'
        }).id('mriya:bw_film_from_zinc');

    event.shaped(Item.of('exposure:color_film', '{FrameSize:192}'),
        ['NZZ',
         'IGG',
         'IKK'],
        {
            N: '#forge:nuggets/gold',
            I: '#forge:ingots/gold',
            Z: '#forge:nuggets/zinc',
            G: 'minecraft:gunpowder',
            K: 'minecraft:dried_kelp'
        }).id('mriya:color_film_from_zinc');

    event.recipes.create.milling([Item.of('farmersdelight:straw').withChance(0.2)], ['minecraft:grass'])
    event.recipes.create.crushing([Item.of('farmersdelight:straw').withChance(0.4)], ['minecraft:grass'])
    event.custom(
        {
            type: "farmersdelight:cutting",
            ingredients: [
              {
                item: "minecraft:grass"
              }
            ],
            result: [
              {
                chance: 0.3,
                item: "farmersdelight:straw"
              }
            ],
            tool: {
              tag: "forge:tools/knives"
            }
          }
    ).id('mriya:straw_from_grass')


    // event.recipes.create.splashing([Item.of('upgrade_aquatic:driftwood_log').withChance(0.9)], ['minecraft:oak_log'])
    // event.recipes.create.splashing([Item.of('upgrade_aquatic:driftwood').withChance(0.9)], ['minecraft:oak_wood'])


    Color.DYE.keySet().forEach(color => {
        event.shaped(`comforts:sleeping_bag_${color}`, 
        ['SLS',
         'WWW',
         'SLS'],
       {
           S: '#forge:string',
           L: '#forge:leather',
           W: `minecraft:${color}_wool`
       }).id(`comforts:sleeping_bag_${color}`);
    })

    event.shaped('mriya:wine_bottle_crate', [
        'BBB',
        'BBB',
        'BBB'
      ], {
        B: 'mriya:wine_bottle'
      }).id('mriya:wine_bottle_crate')


      event.shaped('decorative_blocks:lattice', [
        ' S ',
        'SSS',
        ' S '
      ], {
        S: 'minecraft:stick'
      }).id('decorative_blocks:lattice')

      event.shaped('createdieselgenerators:oil_barrel', [
        ' N ',
        'SBS',
        ' N '
      ], {
        S: 'create:iron_sheet',
        B: 'minecraft:barrel',
        N: '#forge:nuggets/iron'
      }).id('createdieselgenerators:crafting/oil_barrel')

      event.shaped('minecraft:furnace', [
        'CCC',
        'C C',
        'CCC'
      ], {
        C: 'minecraft:cobblestone'
      }).id('quark:building/crafting/furnaces/cobblestone_furnace')

      const wood_types = ['oak', 'birch', 'spruce', 'acacia', 'jungle', 'dark_oak', 'mangrove', 'cherry', 'crimson', 'warped']
      wood_types.forEach(type => {
        event.shaped('3x decorative_blocks:' + type + '_beam', [
          ' L ',
          ' L ',
          ' L '
        ], {
          L: 'minecraft:stripped_' + type + (type === 'crimson' || type === 'warped' ? '_stem' : '_log')
        }).id('decorative_blocks:' + type + '_beam')
      })
}