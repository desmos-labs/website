export default function CenteredContentLayout({ children }) {
  return (
    <div className="grid grid-cols-1 w-full h-full place-content-center">
      {children}
    </div>
  )
}
