export default function PreviewType({ componentId, handleSetCodeType }) {
  return (
    <div className={`cursor-pointer`}>
      <label htmlFor={`CodeType${componentId}`} className="sr-only">
        Code Type
      </label>

      <select
        id={`CodeType${componentId}`}
        onInput={(e) => handleSetCodeType(e.target.value)}
        className="rounded-l-md border-2 cursor-pointer border-gray-900 text-black py-1.5 pl-3 text-sm font-medium"
      >
        <option className={`cursor-pointer`} value="html">HTML</option>
        <option className={`cursor-pointer`} value="jsx">JSX</option>
        <option className={`cursor-pointer`} value="vue">Vue</option>
      </select>
    </div>
  )
}
