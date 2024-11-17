export default function Container({ children, id, classNames }) {
  return (
    <div id={id} className={`mx-auto max-w-screen-2xl px-4 ${classNames}`}>
      {children}
    </div>
  )
}
