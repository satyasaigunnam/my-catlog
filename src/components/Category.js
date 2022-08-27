import React, { useState } from 'react'
import Categories from './Categories';

const Category = () => {
  const [data, setData] = useState(Categories);
const[searchvalue, setSearchValue] = useState("")
  
  const filterResult = (catItem) => {
    const result = Categories.filter((curData) => {
      return curData.category === catItem;
    });
    setData(result);
    console.log(result)
  
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <h4 className="navbar-brand font-size:x-large " color='black' href="#">LiBeets</h4>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
             
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  OurProducts
                </a>
                <ul className="dropdown-menu">
                  <li><button className='btn  w-77 mb-4 ' onClick={() => filterResult('headphones')} > Headphones</button></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><button className='btn  w-77 mb-4' onClick={() => filterResult('earphones')}> Earphones</button></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><button className='btn  w-77 ' onClick={() => filterResult('speakers')}> Speakers</button></li>
                </ul>
              </li>

            </ul>
            
            


            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e) =>{ e.preventDefault(); setSearchValue(e.target.value)}} />
              <button className="btn btn-outline-success" type="submit" onClick={(e) =>{e.preventDefault(); filterResult(searchvalue)}}>Search</button>
            </form>

          </div>
        </div>

      </nav>

      <h1 className='text-center text-info'>Let's Shop With LiBeets</h1>
      <div className='Container-fluid max-2'>
        <div className='row  max-2'>
          <div className='col-md-12'>
            <div className='row'>
              {data.map((values, index) => {
                const { id, title, price, image } = values;

                return (
                  <>
                    <div className='col-md-4' key={index}>
                      <div className='card' >
                        <img src={image} className="card-img-top" alt="..." />
                        <div className="card-body">
                          <h5 className="card-title">{title}</h5>
                          <p>price: {price}$</p>
                          {/* <p classNameName="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                          <button className="btn btn-primary">Buy now</button>
                        </div>
                      </div>


                    </div>

                  </>

                )


              })}



            </div>

          </div>

        </div>


      </div>
    </>


  )
}

export default Category