export default {
  '@init'({ setDesc }) {
    setDesc("未选择组件")
  },
  ':root': [
    {
      title: '选择组件',
      type: 'comSelector',
      options: {
        rtType: 'ui'
      },
      value: {
        get({ data }) {
          return data.comDef
        },
        set({ data, setDesc }, comDef) {
          if (comDef) {
            data.comDef = {
              namespace: comDef.namespace
            }
            setDesc(comDef.title)
          } else {
            data.comDef = null
            setDesc("未选择组件")
          }
        }
      }
    }
  ]
}