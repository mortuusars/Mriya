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
    // 'supplementaries:altimeter'
]

Disabled.Fluids = [
]

Disabled.Tags.Biome = [
    'salt:has_rock_salt_deposits'
]