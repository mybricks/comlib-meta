export default {
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
        set({ data }, comDef) {
          if (comDef) {
            data.comDef = {
              namespace: comDef.namespace
            }
          } else {
            data.comDef = null
          }
        }
      }
    }
  ]
}