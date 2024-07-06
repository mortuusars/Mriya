JEIEvents.addItems((event) => {
    jei.items.added.forEach((item) => {
        if (item.nbt == null) {
            event.add(Item.of(item.id));
        } else {
            event.add(Item.of(item.id, item.nbt));
        }
    });
});
