// ServerEvents.loaded(event => {
//     if (!event.server.persistentData.getBoolean('mriya_new_beginning')) {
//         event.server.getOverworld().setDayTime(23300);
//         console.log('Setting starting dayTime earlier (23300)');
//         event.server.persistentData.putBoolean('mriya_new_beginning', true);
//     }
// })