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
          data.comDef = comDef
        }
      }
    }
  ]
}