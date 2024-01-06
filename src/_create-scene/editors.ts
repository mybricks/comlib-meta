export default {
  '@toJSON'({ data, scenes }){
    const { scene } = data
    console.log("@toJSON: ", data)
    return {
      data: {
        scene,
        dump: scene.empty ? {
          id: scene.id,
          title: scene.title
        } : JSON.stringify(scenes.dump(scene.id))
      }
    }
  },
  ':root': [
    {
      title: '选择场景',
      type: 'sceneSelector',
      value: {
        get({ data }) {
          return data.scene
        },
        set({ data }, scene) {
          data.scene = scene
        }
      }
    }
  ]
}