JEIEvents.removeRecipes((event) => {
    // console.log('JEI RECIPE CATEGORIES: ' + event.getCategoryIds());
    // console.log('Valid Keys: ' + Object.keys(event));
    jei.recipes.hidden.forEach((recipe) => {
        recipe.recipes_by_id.forEach((id) => {
            if (recipe.category == 'minecraft:crafting') {
                try {
                    event.remove('create:automatic_shaped', [id]);
                } catch (err) {
                    // do nothing
                }

                try {
                    event.remove('create:automatic_shapeless', [id]);
                } catch (err) {
                    // do nothing
                }
            }
            // console.log(`Category: ${recipe.category}, Hiding: ${id}`);
            event.remove(recipe.category, [id]);
        });
    });
});
