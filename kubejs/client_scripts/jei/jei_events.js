JEIAddedEvents.onRuntimeAvailable(e => {
    const { recipeManager, jeiHelpers } = e.data
    const recipesToHide = recipeManager.createRecipeLookup('minecraft:anvil')
      .get()
      .filter(recipe => {
        for (let output of recipe.outputs()) {
            if (output.id === 'spelunkery:flint_hammer_and_chisel' || output.id === 'spelunkery:obsidian_hammer_and_chisel') {
              return true
            }
        }
        return false
      })
      .toList()

    console.log('Hiding minecraft:anvil recipes from JEI:')
    for (let recipe of recipesToHide) {
        console.log(recipe.uid())
    }

    recipeManager.hideRecipes('minecraft:anvil', recipesToHide)
  })