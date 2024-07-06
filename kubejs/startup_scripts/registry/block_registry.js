StartupEvents.registry('block', event => {
	// for (const block of Lodes.list()) {
	// 	event.create(block.id)
	// 		.soundType(block.soundType)
	// 		.mapColor(block.color)
	// 		.hardness(block.hardness)
	// 		.resistance(block.resistance)
	// 		.tagBlock('mineable/pickaxe')
	// 		.tagBoth('mriya:lodes')
	// 		.textureAll(block.texture)
	// 		.noDrops()
	// 		.lightLevel(5)
	// }

	mriyaStartup.CustomBlocks.register(event);
})