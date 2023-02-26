const App= () => {

  return (
    <div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80")` }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there, welcome to <br></br><span className="font-extrabold">D-Ender!</span></h1>
          <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere doloremque soluta vitae enim quibusdam doloribus, et aperiam. Eius facere possimus reprehenderit dolorum id. Vitae, commodi. Eum non aperiam nihil nobis.</p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default App
