JEIEvents.hideFluids((event) => {
    jei.fluids.hidden.forEach((hiddenFluid) => {
        event.hide(Fluid.of(hiddenFluid));
        event.hide(hiddenFluid);
    });
});
