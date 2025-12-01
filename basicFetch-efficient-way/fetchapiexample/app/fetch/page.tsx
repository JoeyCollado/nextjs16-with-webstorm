async function Fetch() {
    const response = await fetch("https://jsonplaceholder.typicode.com/albums"); //fetch request
    if (!response.ok) throw new Error("failed to load data"); // response validation, throw error if response is successful
    //if it don't fail
    const albums = await response.json(); // declaration, set response json to the album variable
  
    return (
      <div>
        {" "}
        {/* mapping over the json response */}
        {albums.map((album: { id: number; title: string }) => (
          <div
            key={album.id}
            className="bg-black shadow-md rounded-lg p-4 transition t..."
          >
            <h3 className="text-lg font-bold mb-2">{album.title}</h3>
            <p className="text-gray-100">Album ID: {album.id}</p>
          </div>
        ))}
      </div>
    );
  }
  
  export default Fetch;