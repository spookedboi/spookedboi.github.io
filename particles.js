window.addEventListener("load", async () => {
    await loadAll(tsParticles);
    await tsParticles
    .load({
        id: "tsparticles",
        url: "particles.json",
    })
    .then(container => {
        console.log("callback - tsparticles config loaded");
        console.log(container);
    })
    .catch(error => {
        console.error(error);
    });
})