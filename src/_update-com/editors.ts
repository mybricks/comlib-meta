export default {
  ':root': [
    {
      title: '选择组件',
      type: 'sceneComSelector',
      value: {
        get({ data }) {
          return data.comDef
        },
        set({ data }, comDef) {
          console.log("comDef: ", comDef)
          data.comDef = comDef
        }
      }
    }
  ]
}