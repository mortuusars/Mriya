const disabled_item_tooltip = '[Disabled]';

const jei = {
    items: { hidden: [], disabled: [], added: [] },
    fluids: { hidden: [] },
    categories: { hidden: [] },
    recipes: { hidden: [] }
};

jei.items.disabled = [
    'immersive_aircraft:gyrodyne',

    /salt:.*/,

    'supplementaries:altimeter',
    'toms_storage:ts.wireless_terminal',

    'spelunkery:flint_hammer_and_chisel',
    'spelunkery:obsidian_hammer_and_chisel'
];

jei.items.hidden = [
    'create:dough',
    'createteleporters:incomplete_advanced_part',
    'createteleporters:incomplete_q_mechanism',

    /create_connected:copycat_\w+/,

    'spelunkery:raw_zinc_nugget',
    'spelunkery:diamond_grindstone',
    /spelunkery:rough_\w+_shard/,
    'spelunkery:rough_cinnabar',
    'spelunkery:rough_lazurite',
    'spelunkery:rough_emerald',
    'spelunkery:rough_diamond',

    'quark:potato_crate',
    'quark:carrot_crate',
    'quark:beetroot_crate',
    'miners_delight:insect_wrap',
    'quark:berry_sack',
    'quark:glowberry_sack',
    'quark:polished_tuff',
    'quark:polished_tuff_slab',
    'quark:polished_tuff_stairs',
    'quark:tuff_slab',
    'quark:tuff_wall',
    'quark:tuff_stairs',
    'spelunkery:lapis_lazuli_shard',
];

jei.fluids.hidden = [
];

jei.recipes.hidden = [
    {
        category: 'minecraft:crafting',
        recipes_by_id: [
            // 'supplementaries:soap_clean_upgrade_aquatic_bedroll'
        ]
    }
];