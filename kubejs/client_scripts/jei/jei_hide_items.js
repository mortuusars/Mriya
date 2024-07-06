JEIEvents.hideItems((event) => {
    jei.items.hidden.forEach((hiddenItem) => {
        event.hide(hiddenItem);
        console.log(`Hiding [${hiddenItem}] from JEI.`);
    });

    jei.items.disabled.forEach((disabledItem) => {
        event.hide(disabledItem);
        console.log(`Hiding disabled [${disabledItem}] from JEI.`);
    });
});
