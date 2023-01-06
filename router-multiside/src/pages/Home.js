import {Link} from 'react-router-dom'
import {useFetch} from '../hooks/useFetch'
import './Home.css'

export default function Home(){
const {data: articles, isPendig: isPending1, error: error1} = useFetch('http://localhost:5550/articles')



return (
  <div className="home">
  <h2>Articles</h2>
   <p>Hompage</p>
   {isPending1 && <div>Loading...</div>}
   {error1 && <div>Error</div>}
   {articles && articles.map((article)=>(
   
        <div key={article.id} className="card">
         <p>{article.id}</p>
          <p>{article.title}</p>
          <p>{article.author}</p>
          {/*<Link to={`/articles/${article.id}`}>Read more</Link>*/}
          <Link to={`/article/${article.id}`}>Read more</Link>
        </div>
   ))}
  </div>

)
}
