
//async and await method
let getMovie=async()=>{
  let apires=await fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1')

 let {results}=await apires.json()//object
  let movieItems=''
  results.forEach((obj)=>{//20
   movieItems+=` <div class="movies">
    <!-- 20 Movie Thumbnails -->
    <div class="movie-card"><img src="https://picsum.photos/id/100/300/400" /><div class="movie-title">Avengers</div></div>
    <div class="movie-card"><img src="https://picsum.photos/id/101/300/400" /><div class="movie-title">Batman</div></div>
    <div class="movie-card"><img src="https://picsum.photos/id/102/300/400" /><div class="movie-title">Joker</div></div>
    <div class="movie-card"><img src="https://picsum.photos/id/103/300/400" /><div class="movie-title">Spiderman</div></div>
    <div class="movie-card"><img src="https://picsum.photos/id/104/300/400" /><div class="movie-title">Thor</div></div>
    <div class="movie-card"><img src="https://picsum.photos/id/105/300/400" /><div class="movie-title">Iron Man</div></div>
    <div class="movie-card"><img src="https://picsum.photos/id/106/300/400" /><div class="movie-title">Hulk</div></div>
    <div class="movie-card"><img src="https://picsum.photos/id/107/300/400" /><div class="movie-title">Black Panther</div></div>
    <div class="movie-card"><img src="https://picsum.photos/id/108/300/400" /><div class="movie-title">Doctor Strange</div></div>
    <div class="movie-card"><img src="https://picsum.photos/id/109/300/400" /><div class="movie-title">Captain America</div></div>
    <div class="movie-card"><img src="https://picsum.photos/id/110/300/400" /><div class="movie-title">Fast & Furious</div></div>
    <div class="movie-card"><img src="https://picsum.photos/id/111/300/400" /><div class="movie-title">John Wick</div></div>
    <div class="movie-card"><img src="https://picsum.photos/id/112/300/400" /><div class="movie-title">Inception</div></div>
    <div class="movie-card"><img src="https://picsum.photos/id/113/300/400" /><div class="movie-title">Interstellar</div></div>
    <div class="movie-card"><img src="https://picsum.photos/id/114/300/400" /><div class="movie-title">Titanic</div></div>
    <div class="movie-card"><img src="https://picsum.photos/id/115/300/400" /><div class="movie-title">Avatar</div></div>
    <div class="movie-card"><img src="https://picsum.photos/id/116/300/400" /><div class="movie-title">Gladiator</div></div>
    <div class="movie-card"><img src="https://picsum.photos/id/117/300/400" /><div class="movie-title">Rocky</div></div>
    <div class="movie-card"><img src="https://picsum.photos/id/118/300/400" /><div class="movie-title">Harry Potter</div></div>
    <div class="movie-card"><img src="https://picsum.photos/id/119/300/400" /><div class="movie-title">Transformers</div></div>
  </div>
   `
  })

  //  let data=await apires.json()//object
  // console.log(data.results)
  // console.log(data['.results'])

  //2
  // let {results}=await apires.json()//object
  // console.log(results)
}

getMovie()



// let getMovie=()=>{
//   fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1')
//   .then((res)=>res.json())
//   .then((fialres)=>{
//     console.log(fialres.results)
//   })
// }

// getMovie()


let movie_container=document.querySelector(".mo")
