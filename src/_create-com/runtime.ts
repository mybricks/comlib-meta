export default function ({env, data, inputs, outputs, logger, onError, meta}) {
  inputs['create']((val) => {
    const comDef = {
      namespace: 'mybricks.normal-pc.custom-button',
      data: {
        text: '按钮',
        useIcon: true
      }
    }
    
    meta.create(comDef)
    
    outputs['finish'](true)
  })
}
