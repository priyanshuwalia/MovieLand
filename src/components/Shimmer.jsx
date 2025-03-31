const Shimmer = () => {
  return (
    <div>
      <div className="app">
        <h1></h1>
        <div className="search">
          <input
            placeholder="Search For movies"
            value="Superman"
            onChange={() => {}}
          />
          <img src={SearchIcon} alt="Search" onClick={() => {}} />
        </div>

        <div className="container"></div>
      </div>
    </div>
  );
};
