// priority: 1001

const Disabled = {
    Items: [],
    Fluids: [],
    Tags: {Biome: []}
}

Disabled.Items = [
    /salt:.*/,
    /spelunkery:rough_/,
    /upgrade_aquatic:.+bedroll/,
    /create_aquatic_ambitions:/,
    'miners_delight:insect_wrap',
    'quark:berry_sack',
    'quark:glowberry_sack',
    'quark:polished_tuff',
    'quark:polished_tuff_slab',
    'quark:polished_tuff_stairs',
    'quark:tuff_slab',
    'quark:tuff_wall',
    'quark:tuff_stairs',
    'spelunkery:lapis_lazuli_shard'
]

Disabled.Fluids = [
]

Disabled.Tags.Biome = [
    'salt:has_rock_salt_deposits'
]