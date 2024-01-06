export default function ({ env, inputs }) {
  const next = !env.runtime.debug
  inputs['generate'](() => {
    if (next) {
      env.canvas.generatePage()
      console.log("这里调最终的输出, 然后结束执行")
    }
  })
}
