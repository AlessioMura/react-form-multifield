import { useState } from 'react'
import './App.css'

const blogsTitlesList = []


function App() {

  const [blogsTitles, setBlogsTitles] = useState(blogsTitlesList)
  const [newBlogTitle, setNewBlogTitle] = useState('')


  function addBlogTitle(e) {
    e.preventDefault()
    console.log(blogsTitles);

    setBlogsTitles([
      ...blogsTitles,
      newBlogTitle
    ])

    setNewBlogTitle('')
  }


  return (
    <>
      <div className="container">
        <h1 className='py-4'>Blog posts</h1>

        <form onSubmit={addBlogTitle}>

          <div>
            <label htmlFor="task" className="form-label">Submit your own blog!</label>
            <div className="input-group mb-3">

              <input type="text" className="form-control" placeholder="Blog Title" aria-label="Blog Title" aria-describedby="button-addon2" value={newBlogTitle} onChange={e => setNewBlogTitle(e.target.value)} />
              <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Submit</button>

            </div>



            <div>
              <div className='d-flex justify-content-between'>
                <div className="mb-3 col-3">
                  <label htmlFor="title" className="form-label">Title</label>
                  <input
                    type="text"
                    name='title'
                    className="form-control"
                    id="title"
                    placeholder="Type the title"
                    aria-describedby="titlehelper"
                  />
                </div>
                <div className="mb-3 col-3">
                  <label htmlFor="img" className="form-label">Image</label>
                  <input
                    type="text"
                    className="form-control"
                    id="img "
                    placeholder="Type the image path"
                    aria-describedby="imghelper"
                  />
                </div>
                <div className="mb-3 col-3">
                  <label htmlFor="category" className="form-label">Category</label>
                  <select className="form-select" aria-label="Default select example">
                    <option selected>Choose the category</option>
                    <option value="1">Lifestyle e Benessere</option>
                    <option value="2">Tecnologia e Innovazione</option>
                    <option value="3">Educazione e Cultura</option>
                  </select>
                </div>
              </div>


              <div className='d-flex justify-content-between my-4'>
                <div className="form-check col-2">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    Lifestyle
                  </label>
                </div>
                <div className="form-check col-2">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    SelfCare
                  </label>
                </div>
                <div className="form-check col-2">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    TechTrends
                  </label>
                </div>
                <div className="form-check col-2">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    DigitalNomad
                  </label>
                </div>
                <div className="form-check col-2">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    Mindfulness
                  </label>
                </div>
                <div className="form-check col-2">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    CreativeLiving
                  </label>
                </div>


              </div>


              <div>
                <label htmlFor="content" className="form-label">Content</label>
                <div className="form-floating">
                  <textarea className="form-control" placeholder="type the blog content" id="content"></textarea>
                </div>
              </div>

            </div>


          </div>
          <div className='d-flex justify-content-center'>
            <button className="btn btn-outline-secondary my-3" type="submit" id="button-addon2">Submit</button>
          </div>

        </form>
        <hr />
        <ul className="list-group">
          {blogsTitles.map((blogTitle, index) => <li key={index} className="list-group-item">{blogTitle}</li>)}

        </ul>

      </div>
    </>
  )
}

export default App
