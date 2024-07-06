JEIEvents.removeCategories((event) => {
    //console.log(event.getCategoryIds()); //log a list of all category ids to logs/kubejs/client.txt
    event.remove(jei.categories.hidden);
});

// JEIAddedEvents.registerRecipes((event) => {
//     for (const agreement of SellAgreements) {
//         event.custom("mriya:proposed_agreements").add(agreement)
//     }
// });

// JEIAddedEvents.registerRecipeCatalysts(event => {
//     event.data.addRecipeCatalyst(Item.of('mriya:agreement_scroll_and_quill'), event.getCustomRecipeType('mriya:proposed_agreements'))
// })

// JEIAddedEvents.registerCategories(event => {
//     event.custom('mriya:proposed_agreements', (category) => {
//         const gui = category.jeiHelpers.getGuiHelper()
//         category.title('Proposed Agreements')
//             .background(gui.createDrawable('mriya:textures/gui/jei/proposed_agreements.png', 0, 0, 132, 40))
//             .icon(gui.createDrawableItemStack('mriya:agreement_scroll_and_quill'))
//             .isRecipeHandled((recipe) => {
//                 return global["verifyRecipe"](category.jeiHelpers, recipe);
//             })
//             // Set the callback function that will allow JEI to index this recipe and determine
//             // what the inputs and outputs of each recipe are.
//             .handleLookup((builder, recipe, focuses) => {
//                 global["handleLookup"](category.jeiHelpers, builder, recipe, focuses);
//             })
//             // Set the callback function for rendering additional detials to the screen.
//             .setDrawHandler((recipe, recipeSlotsView, guiGraphics, mouseX, mouseY) => {
//                 global["renderItems"](category.jeiHelpers, recipe, recipeSlotsView, guiGraphics, mouseX, mouseY);
//             })
//     })
// })

// /**
//  * 
//  * @param {Internal.IJeiHelpers} jeiHelpers 
//  * @param {Internal.CustomJSRecipe} recipe 
//  * @returns 
//  */
// global["verifyRecipe"] = (jeiHelpers, recipe) => {
//     // The data we give later on in the recipes will be stored in the `data` field.
//     // Whatever you pass in, is whatever you'll get out.
//     // The possibilities are endless, as you are only restricted to what you can store on
//     // the KubeJS client side.

//     // IMPORTANT: Always return true or false. If you do not, it could crash the game or cause
//     // JEI to not work properly.
//     if (!recipe) return false;
//     if (!recipe.data) return false;
//     if (!recipe.data.HeldItem) return false;
//     if (!recipe.data.Requested) return false;
//     return !!recipe.data.Payment;
// }

// /**
//  * 
//  * @param {Internal.IJeiHelpers} jeiHelpers 
//  * @param {Internal.IRecipeLayoutBuilder} builder 
//  * @param {Internal.CustomJSRecipe} recipe 
//  * @param {Internal.IFocusGroup} focuses 
//  */
// global["handleLookup"] = (jeiHelpers, builder, recipe, focuses) => {
//     // builder.addIngredient(recipe.data.HeldItem)
//     builder.addInvisibleIngredients('input')
//         .addItemStacks([Item.of('mriya:proposed_agreement')])

//     builder.addInvisibleIngredients('output')
//         .addItemStacks([Item.of('wares:delivery_agreement')])

//     builder.addSlot('input', 22, 12).addIngredients(recipe.data.HeldItem).setSlotName('requested')
//     builder.addSlot('output', 94, 12).addItemStack(recipe.data.Payment.Item).setSlotName('payment')
// }


// /**
//  * 
//  * @param {Internal.IJeiHelpers} jeiHelpers 
//  * @param {Internal.CustomJSRecipe} recipe 
//  * @param {Internal.IRecipeSlotView} recipeSlotsView 
//  * @param {Internal.GuiGraphics} guiGraphics 
//  * @param {Number} mouseX 
//  * @param {Number} mouseY 
//  */
// global["renderItems"] = (jeiHelpers, recipe, recipeSlotsView, guiGraphics, mouseX, mouseY) => {
//     guiGraphics.pose().pushPose()
//     guiGraphics.pose().translate(0, 0, 200)
//     const agreement = recipe.data;

//     let requestedCount = agreement.Requested.Count[0] == agreement.Requested.Count[1].toFixed() ?
//         agreement.Requested.Count[0] : `${agreement.Requested.Count[0]}-${agreement.Requested.Count[1]}`

//     drawTextShadow(guiGraphics, Component.of(requestedCount), 33, 21)

//     let paymentCount = agreement.Payment.Count[0] == agreement.Payment.Count[1].toFixed() ?
//         agreement.Payment.Count[0] : `${agreement.Payment.Count[0]}-${agreement.Payment.Count[1]}`

//     drawTextShadow(guiGraphics, Component.of(paymentCount), 105, 21)


//     if ("Ordered" in agreement) {
//         let orderedCount = agreement.Ordered[0] == agreement.Ordered[1] ? 
//             agreement.Ordered[0].toFixed() : `${agreement.Ordered[0]}-${agreement.Ordered[1]}`

//         drawTextShadow(guiGraphics, Component.of(orderedCount), 66 - Client.font.width(orderedCount) / 2, 32)
//     }

//     guiGraphics.pose().popPose()

//     // guiGraphics.drawWordWrap(Client.font, Component.black(`${agreement.Requested.Count[0]}-${agreement.Requested.Count[1]}`), 35, 35, 999, 0)
//     // guiGraphics.drawWordWrap(Client.font, Component.white(`${agreement.Requested.Count[0]}-${agreement.Requested.Count[1]}`), 34, 34, 999, 0)
//     // guiGraphics.drawWordWrap(Client.font, Component.black(`${agreement.Payment.Count[0]}-${agreement.Payment.Count[1]}`), 95, 35, 999, 0)
//     // guiGraphics.drawWordWrap(Client.font, Component.white(`${agreement.Payment.Count[0]}-${agreement.Payment.Count[1]}`), 94, 34, 999, 0)
// }

// /**
//  * 
//  * @param {Internal.GuiGraphics} guiGraphics 
//  * @param {String} text 
//  * @param {Number} x 
//  * @param {Number} y 
//  */
// function drawTextShadow(guiGraphics, text, x, y) {
//     guiGraphics.drawWordWrap(Client.font, Component.darkGray(text), x+1, y+1, 999, 0)
//     guiGraphics.drawWordWrap(Client.font, Component.white(text), x, y, 999, 0)
// }