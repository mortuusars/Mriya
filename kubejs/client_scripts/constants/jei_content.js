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

    'supplementaries:altimeter'
];

jei.items.hidden = [
    'create:dough',
    'createteleporters:incomplete_advanced_part',
    'createteleporters:incomplete_q_mechanism',

    /spelunkery:rough_/,
    'spelunkery:raw_zinc_nugget',
    'spelunkery:saltpeter_block',
    'spelunkery:saltpeter',

    /upgrade_aquatic:.+bedroll/,
    'upgrade_aquatic:bedroll'
];

jei.fluids.hidden = [
];

jei.recipes.hidden = [
    {
            category: 'minecraft:crafting',
            recipes_by_id: [
                'supplementaries:soap_clean_upgrade_aquatic_bedroll'
            ]
    },
    // {
    //     category: 'minecraft:crafting',
    //     recipes_by_id: ['mriya:health_stew']
    // },
    // {
    //     category: 'minecraft:crafting',
    //     recipes_by_id: ['mriya:potent_heart_from_crafting']
    // },
    // {
    //     category: 'create:sequenced_assembly',
    //     recipes_by_id: ['mriya:potent_heart_from_sequence']
    // }
];