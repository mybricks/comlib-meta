export default function ({ env, data, inputs, outputs }) {
  const next = !env.runtime.debug
  inputs['create']((nextValue) => {
    const { sceneId, store } = nextValue

    if (next) { 
      console.log("修改: ", data.comDef, nextValue)
      console.log("sceneId: ", sceneId)
      sceneId.updateCom({...data.comDef, ...store})
    }
    
    outputs['finish'](sceneId)
  })
}
