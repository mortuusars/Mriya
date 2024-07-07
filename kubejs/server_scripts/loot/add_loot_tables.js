ServerEvents.genericLootTables(event => {
    event.addGeneric('mriya:wares/pillager/requested_emeralds', table => {
        table.addPool(pool => {
            pool.addItem('emerald', 1, [4, 14])
        });
    });

    event.addGeneric('mriya:wares/pillager/payment_goods', table => {
        table.addPool(pool => {
            pool.addItem('farmersdelight:carrot_crate', 1, [1, 5])
            pool.addItem('farmersdelight:potato_crate', 1, [1, 5])
            pool.addItem('farmersdelight:beetroot_crate', 1, [1, 5])
            pool.addItem('farmersdelight:onion_crate', 1, [1, 5])
            pool.addItem('farmersdelight:cabbage_crate', 1, [1, 5])
            pool.addItem('farmersdelight:tomato_crate', 1, [1, 5])
            pool.addItem('minecraft:hay_block', 1, [1, 5])

            pool.addItem('minecraft:coal', 1, [10, 26])
            pool.addItem('minecraft:copper_ingot', 1, [10, 26])
            pool.addItem('minecraft:iron_ingot', 1, [4, 14])
            pool.addItem('minecraft:gold_ingot', 1, [3, 12])
            pool.addItem('create:zinc_ingot', 1, [4, 14])
        });
    });

    event.addGeneric('mriya:wares/pillager/requested_goods', table => {
        table.addPool(pool => {
            pool.addItem('farmersdelight:carrot_crate', 1, [1, 5])
            pool.addItem('farmersdelight:potato_crate', 1, [1, 5])
            pool.addItem('farmersdelight:beetroot_crate', 1, [1, 5])
            pool.addItem('farmersdelight:onion_crate', 1, [1, 5])
            pool.addItem('farmersdelight:cabbage_crate', 1, [1, 5])
            pool.addItem('farmersdelight:tomato_crate', 1, [1, 5])
            pool.addItem('minecraft:hay_block', 1, [1, 5])
            pool.addItem('mriya:wine_bottle_crate', 1, [1, 4])

            pool.addItem('farmersdelight:wheat_dough', 1, [8, 24])
            pool.addItem('minecraft:bread', 1, [6, 20])

            pool.addItem('minecraft:egg', 1, [12, 36])

            pool.addItem('minecraft:coal', 1, [14, 30])
            pool.addItem('minecraft:copper_ingot', 1, [14, 30])
            pool.addItem('minecraft:iron_ingot', 1, [8, 20])
            pool.addItem('minecraft:gold_ingot', 1, [6, 16])
            pool.addItem('create:zinc_ingot', 1, [10, 26])
        });
    });
    
    event.addGeneric('mriya:wares/pillager/payment_emeralds', table => {
        table.addPool(pool => {
            pool.addItem('emerald', 1, [3, 10])
        });
    });

    event.addGeneric('mriya:chests/floating_wreckage_crops_sealed', table => {
        table.addPool(pool => {
            pool.setUniformRolls(1, 2)
            pool.addItem('wheat', 1, [3, 8])
            pool.addItem('carrot', 1, [3, 6])
            pool.addItem('potato', 1, [3, 6])
            pool.addItem('beetroot', 1, [3, 6])
            pool.addItem('farmersdelight:tomato', 1, [3, 6])
            pool.addItem('farmersdelight:onion', 1, [3, 6])
            pool.addItem('farmersdelight:cabbage', 1, [3, 6])
            pool.addItem('farmersdelight:rice', 1, [3, 6])
            pool.addItem('supplementaries:flax', 1, [3, 6])
        });
        table.addPool(pool => {
            pool.addItem('cobweb', 1, [1, 2])
        })
        table.addPool(pool => {
            pool.addItem('stick', 1, [1, 2])
        })
    });

    event.addGeneric('mriya:chests/floating_wreckage_crops_exposed', table => {
        table.addPool(pool => {
            pool.setUniformRolls(1, 3)
            pool.addItem('poisonous_potato', 1, [1, 2])
            pool.addItem('farmersdelight:rotten_tomato', 1, [1, 2])
        });
        table.addPool(pool => {
            pool.setUniformRolls(1, 2)
            pool.addItem('seagrass', 1, [1, 2])
        })
        table.addPool(pool => {
            pool.setUniformRolls(1, 2)
            pool.addItem('kelp', 1, [1, 2])
        })
        table.addPool(pool => {
            pool.setUniformRolls(1, 2)
            pool.addItem('ecologics:seashell', 1, [1, 2])
        })
        table.addPool(pool => {
            pool.setUniformRolls(1, 2)
            pool.addItem('kelp', 12, [1, 1])
            pool.addItem('seagrass', 12, [1, 1])
            pool.addItem('sea_pickle', 4, [1, 1])
            pool.addItem('nautilus_shell', 1, [1, 1])
        })
    });

    event.addGeneric('mriya:chests/floating_wreckage_valuables_sealed', table => {
        table.addPool(pool => {
            pool.setUniformRolls(1, 2)
            pool.randomChance(0.2)
            pool.addItem('spyglass', 1, [1, 2])
        });
        table.addPool(pool => {
            pool.setUniformRolls(1, 2)
            pool.addItem('gold_ingot', 5, [1, 6])
            pool.addItem('iron_ingot', 5, [1, 6])
            pool.addItem('diamond', 1, [1, 1])
        });
        table.addPool(pool => {
            pool.setUniformRolls(1, 2)
            pool.addItem('cobweb', 1, [1, 2])
        })
        table.addPool(pool => {
            pool.setUniformRolls(1, 2)
            pool.addItem('stick', 1, [1, 2])
        })
    });

    event.addGeneric('mriya:chests/floating_wreckage_valuables_exposed', table => {
        table.addPool(pool => {
            pool.setUniformRolls(1, 3)
            pool.addItem('oxidized_copper', 1, [1, 5])
            pool.addItem('iron_nugget', 1, [1, 7])
        });
        table.addPool(pool => {
            pool.setUniformRolls(1, 2)
            pool.addItem('paper', 1, [1, 3])
        });
        table.addPool(pool => {
            pool.setUniformRolls(1, 2)
            pool.addItem('seagrass', 1, [1, 2])
        })
        table.addPool(pool => {
            pool.setUniformRolls(1, 2)
            pool.addItem('kelp', 1, [1, 2])
        })
        table.addPool(pool => {
            pool.setUniformRolls(1, 2)
            pool.addItem('ecologics:seashell', 1, [1, 2])
        })
        table.addPool(pool => {
            pool.setUniformRolls(1, 2)
            pool.addItem('kelp', 12, [1, 1])
            pool.addItem('seagrass', 12, [1, 1])
            pool.addItem('sea_pickle', 4, [1, 1])
            pool.addItem('nautilus_shell', 1, [1, 1])
        })
    });

    event.addGeneric('mriya:chests/floating_wreckage_archaeology_sealed', table => {
        table.addPool(pool => {
            pool.addItem(Item.of('supplementaries:cartographers_quill', "{display:{Name:'{\"translate\":\"filled_map.desert_pyramid\"}'},maxSearchRadius:50,skinKnown:0b,targetStructure:\"betterdeserttemples:desert_temple\",zoomLevel:1}"), 1, [1, 1])
        })
        table.addPool(pool => {
            pool.addItem('brush', 1, [1, 2])
            pool.damage([0.5, 1]);
        });
        table.addPool(pool => {
            pool.addItem('paper', 1, [1, 8])
        });
        table.addPool(pool => {
            pool.addItem('map', 1, [1, 3])
            
        });
        table.addPool(pool => {
            pool.addItem('iron_shovel', 1, [1, 1])
            pool.addItem('diamond_shovel', 1, [1, 1])
            pool.enchantRandomly(['minecraft:silk_touch'])
            pool.damage([0.3, 0.9]);
        })
    });

    event.addGeneric('mriya:chests/floating_wreckage_archaeology_exposed', table => {
        table.addPool(pool => {
            pool.addItem('oxidized_copper', 1, [1, 2])
            pool.addItem('create:copper_nugget', 1, [1, 2])
        });
        table.addPool(pool => {
            pool.addItem('paper', 1, [1, 4])
        });
        table.addPool(pool => {
            pool.setUniformRolls(1, 2)
            pool.addItem('seagrass', 1, [1, 4])
            pool.addItem('kelp', 1, [1, 4])
        })
        table.addPool(pool => {
            pool.addItem('ecologics:seashell', 1, [1, 3])
        })
        table.addPool(pool => {
            pool.setUniformRolls(1, 2)
            pool.addItem('kelp', 12, [1, 1])
            pool.addItem('seagrass', 12, [1, 1])
            pool.addItem('sea_pickle', 4, [1, 1])
            pool.addItem('nautilus_shell', 1, [1, 1])
        })
    });

    
    event.addGeneric('mriya:chests/floating_wreckage', table => {
        table.addPool(pool => {
            pool.addLootTable('mriya:chests/floating_wreckage_crops_sealed').weight(3)
            pool.addLootTable('mriya:chests/floating_wreckage_crops_exposed').weight(3)
            pool.addLootTable('mriya:chests/floating_wreckage_valuables_sealed').weight(1)
            pool.addLootTable('mriya:chests/floating_wreckage_valuables_exposed').weight(1)
            pool.addLootTable('mriya:chests/floating_wreckage_archaeology_sealed').weight(1)
            pool.addLootTable('mriya:chests/floating_wreckage_archaeology_exposed').weight(1)
        });
    });
})