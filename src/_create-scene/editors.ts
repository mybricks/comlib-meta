export default {
  '@toJSON'({env,data}){
  
  },
  ':root': [
    {
      title: '选择组件定义',
      type: 'comSelector',
      options({data}) {
        return [
          {
            label: '数字',
            value: 'number'
          }
        ]
      },
      value: {
        get({data, inputs}, val) {
          return data.valueType
        },
        set({data, inputs}, val) {
          data.valueType = val
        }
      }
    }
  ]
}