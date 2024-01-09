export default function ({ env, data, inputs, outputs }) {
  const next = !env.runtime.debug
  inputs['get']((nextValue) => {
    const { sceneId, store } = nextValue
    let com

    if (next) { 
      com = env.canvas.getCom({sceneId, comId: data.comDef.id})
    }
    
    outputs['finish'](com)
  })
}
