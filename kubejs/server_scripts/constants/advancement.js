removeAdvancement([
    'salt:adventure/crystal_garden',
]);

/**
 * Removes advancement at given file-path and adds it to a hidden parent advancement
 * @param {String | Array} advancement - Advancement id (ie. lootr:100loot)
 */
function removeAdvancement(advancement) {
    let arr = []
    if (typeof (advancement) == 'string') arr = [advancement]
    else if (typeof (advancement) == 'object') arr = advancement
    else console.error(`Invalid type for removeAdvancement(${advancement})`)

    ServerEvents.highPriorityData(e => {
        e.addJson('mriya:advancements/removed', {
            display: { hidden: true },
        })
        arr.forEach(advancement => {
            let advSplit = advancement.split(':')
            let advModId = advSplit[0]
            let advName = advSplit[1]

            e.addJson(`${advModId}:advancements/${advName}.json`, {
                parent: 'mriya:advancements/removed',
                display: { hidden: true },
                criteria: {
                    impossible: {
                        trigger: 'minecraft:impossible'
                    }
                },
                requirements: [['impossible']]
            })
        })
    })
}