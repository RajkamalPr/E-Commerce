type CreateDynamicElementType = {
  htmlFormElement: Array<{
    type: string
    title?: string
    name?: string
    placeholder?: string
    value?: any
    onChange?: any
    options?: any
    innerClassname?: string
    outerClassname?: string
  }>
}

const FormElement = (CreateDynamicElement: CreateDynamicElementType) => {
  const { htmlFormElement } = CreateDynamicElement
  return (
    <>
      {htmlFormElement.map((data: any) => {
        return (
          <>
            {data.type === "text" ? (
              <div className={data.outerClassname}>
                <input
                  type={data.type}
                  name={data.name}
                  placeholder={data.placeholder}
                  onChange={data.onChange}
                  className={data.innerClassname}
                />
              </div>
            ) : data.type === "select" ? (
              <div className={data.outerClassname}>
                <select
                  name={data.name}
                  className={data.innerClassname}
                  onChange={data.onChange}
                >
                  {data.options.map((opt: any) => {
                    return <option value={opt.value}>{opt.key}</option>
                  })}
                </select>
              </div>
            ) : (
              data.type === "button" && (
                <div style={{ display: "flex", alignItems: "center" }}>
                  <button type={data.type} className={data.innerClassname}>
                    {data.title}
                  </button>
                </div>
              )
            )}
          </>
        )
      })}
    </>
  )
}

export default FormElement
