game.pushScene()
scene_util.captureRegisteringRoomScenes(()=>{
    chickcoop.prepareChickCoop()
    game.popScene()
})

scene_util.captureRegisteringRoomScenes(() => {
    mushroomfarm.prepare_mushroomfarm()
    game.popScene()
})

cbland.startVillage(false)