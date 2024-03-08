export default function Root({ children }: { children: React.ReactNode }) {
  return (
    <Layout>{children}</Layout>
  )
}
function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header>
        <h1>My App</h1>
      </header>
      {children}
      <footer>
        <p>My App footer</p>
      </footer>
    </div>
  )
}
