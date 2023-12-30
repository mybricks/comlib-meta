export default function ({env, data, inputs, outputs, logger, onError}) {
  inputs['create']((val) => {
    const comDef = {
      namespace: 'mybricks.normal-pc.custom-button',
      data: {
        text: '按钮',
        useIcon: true
      }
    }
    
    env.canvas.appendCom(comDef)
    
    outputs['finish'](true)
  })
}
