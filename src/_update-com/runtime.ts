import { merge } from 'lodash'

export default function ({ env, data, inputs, outputs }) {
  const next = !env.runtime.debug
  inputs['create']((nextValue) => {
    const { sceneId, store } = nextValue

    if (next) { 
      console.log("创建组件: ", data.comDef, nextValue)

      /**
       * comData 数据源
       * delete 删除组件
       *  - slotId 从该插槽内删除
       *  - comId 被删除组件的id
       * append 添加组件
       *  - slotId 向该插槽添加组件
       *  - namesapce 组件命名空间
       *  - data 组件数据源
       */
      const { data: comData, delete: delStore, append } = store

      const com = env.canvas.getCom({sceneId, comId: data.comDef.id})
      com.data = merge(com.data, comData)

      const { slots } = com
      if (slots) {
        const slotMap = {}
        delStore?.forEach(({ slotId, comId }) => {
          let slot = slotMap[slotId]
          if (typeof slot === 'undefined') {
            slot = slots.find((slot => slot.id === slotId))
            if (slot) {
              slotMap[slotId] = slot
            }
            slotMap[slotId] = slot || false
          }

          slot && slot.deleteChild({ comId })
        })
  
        append?.forEach(({ slotId, namespace, data }) => {
          let slot = slotMap[slotId]
          if (typeof slot === 'undefined') {
            slot = slots.find((slot => slot.id === slotId))
            if (slot) {
              slotMap[slotId] = slot
            }
            slotMap[slotId] = slot || false
          }

          slot && slot.appendChild({ namespace, data })
        })
      }
    }
    
    outputs['finish'](sceneId)
  })
}
