ServerEvents.recipes((event) => {
    event.shaped(Item.of('toms_storage:ts.inventory_connector'),
        [
            'BCB',
            'QDQ',
            'BEB'
        ],
        {
            B: 'create:brass_sheet',
            D: 'minecraft:diamond',
            C: 'minecraft:comparator',
            E: 'create:electron_tube',
            Q: 'minecraft:quartz'
        })
        .id('toms_storage:inventory_connector')

    event.shaped(Item.of('toms_storage:ts.storage_terminal'),
        [
            ' L ',
            'BDB',
            ' C '
        ],
        {
            B: 'create:brass_sheet',
            D: 'supplementaries:crystal_display',
            L: 'create:display_link',
            C: 'minecraft:comparator'
        })
        .id('toms_storage:storage_terminal')

    event.shaped(Item.of('toms_storage:ts.crafting_terminal'),
        [
            ' C ',
            'ETE',
            ' H '
        ],
        {
            T: 'toms_storage:ts.storage_terminal',
            C: 'minecraft:crafting_table',
            E: 'create:electron_tube',
            H: 'create_connected:control_chip'
        })
        .id('toms_storage:crafting_terminal')

    event.remove({ id: /sawmill:toms_storage_ts.trim_.+/ })
    event.shapeless('toms_storage:ts.trim',
        ['create:andesite_casing', 'supplementaries:timber_frame'])
        .id('toms_storage:trim')

    event.shaped(Item.of('6x toms_storage:ts.inventory_cable'),
        [
            ' K ',
            'RCR',
            ' K '
        ],
        {
            R: 'minecraft:repeater',
            C: '#forge:ingots/copper',
            K: 'minecraft:dried_kelp'
        })
        .id('toms_storage:inventory_cable')

    event.shapeless('toms_storage:ts.inventory_cable_framed',
        ['toms_storage:ts.inventory_cable', 'supplementaries:timber_frame'])
        .id('toms_storage:inventory_cable_framed')

    event.shaped(Item.of('toms_storage:ts.inventory_cable_connector'),
        [
            '   ',
            'CBG',
            '   '
        ],
        {
            C: 'toms_storage:ts.inventory_cable',
            B: 'create:brass_casing',
            G: 'create:golden_sheet'
        })
        .id('toms_storage:inventory_cable_connector')

    event.shapeless('toms_storage:ts.inventory_cable_connector_framed',
        ['toms_storage:ts.inventory_cable_connector', 'supplementaries:timber_frame'])
        .id('toms_storage:inventory_cable_connector_framed')


    event.remove({ id: /sawmill:toms_storage_ts.inventory_proxy_.+/ })
    event.shapeless('toms_storage:ts.inventory_proxy',
        ['create:brass_casing', 'minecraft:observer'])
        .id('toms_storage:inventory_proxy')

    event.shaped('toms_storage:ts.inventory_hopper_basic',
        [
            '   ',
            'BCB',
            ' H '
        ],
        {
            C: 'toms_storage:ts.inventory_cable',
            B: 'create:brass_sheet',
            H: 'minecraft:hopper'
        })
        .id('toms_storage:inventory_hopper_basic')

    event.shaped('toms_storage:ts.level_emitter',
        [
            ' T ',
            'BCB',
            ' R '
        ],
        {
            C: 'toms_storage:ts.inventory_cable',
            B: 'create:brass_sheet',
            R: 'minecraft:comparator',
            T: 'minecraft:redstone_torch'
        }).id('toms_storage:level_emitter')

    event.shaped('toms_storage:ts.paint_kit',
        [
            ' SI',
            'RGS',
            'NB '
        ],
        {
            S: '#forge:slimeballs',
            I: 'create:iron_sheet',
            N: '#forge:nuggets/iron',
            R: '#forge:dyes/red',
            G: '#forge:dyes/green',
            B: '#forge:dyes/blue'
        })
        .id('toms_storage:paint_kit')

    event.remove({id: 'toms_storage:wireless_terminal'})

    event.shaped('toms_storage:ts.adv_wireless_terminal',
        [
            ' L ',
            'NDN',
            ' C '
        ],
        {
            N: 'minecraft:netherite_scrap',
            D: 'supplementaries:crystal_display',
            L: 'create:display_link',
            C: 'create:linked_controller'
        })
        .id('toms_storage:adv_wireless_terminal')
})