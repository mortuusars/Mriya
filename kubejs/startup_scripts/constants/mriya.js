// priority: 10000

var mriyaStartup = new function () {
    this.ID = 'mriya';

    this.CustomItems = {
        WINE_BOTTLE: { id: 'mriya:wine_bottle', name: 'Wine Bottle' },

        /**
         * @param {Registry.Item} event
         */
        register: function (event) {

            event.create(this.WINE_BOTTLE.id)
                .displayName(this.WINE_BOTTLE.name)
                .useAnimation('drink')
                .maxStackSize(16)
                .food(food => {
                    food
                        .hunger(1)
                        .saturation(1)
                        .alwaysEdible()                        
                        .effect('strength', 400, 0, 1)
                        .eaten(ctx => ctx.player.giveInHand('minecraft:glass_bottle'))
                })
        }
    }

    this.CustomBlocks = {
        WINE_BOTTLE_CRATE: { id: 'mriya:wine_bottle_crate' },

        /**
         * @param {Registry.Block} event
         */
        register: function (event) {
            event.create(this.WINE_BOTTLE_CRATE.id)
                .displayName("Wine Bottle Crate")
                .soundType(SoundType.WOOD)
                .mapColor('color_brown')
                .hardness(1.2)
                .resistance(1.2)
                .tagBlock('mineable/axe')
        }
    }
}