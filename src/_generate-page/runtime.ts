export default function ({ env, inputs }) {
  const next = !env.runtime.debug
  inputs['generate'](() => {
    if (next) {
      console.log("获取页面数据，结束运行")
      env.canvas.generatePage()
    }
  })
}
