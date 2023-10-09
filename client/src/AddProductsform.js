import React, { useState } from 'react'
import  "./All.css"
const AddProductsform = () => {
  const [ productdata,setproductdata] =useState({

  })
  return (
    <>
  <div className="content">
    <section>
      <div className="register-wrapper">
        <div className="register-block">
          <h3 className="register-title">Create an Product</h3>
          <p>Create an Product using the form below.</p>
          <form>
            <input type="text" name ="pname" placeholder="Product name..." />
            <input type="text" name ="pContent" placeholder="Product Content..." />
            <input type="text" name ="pShortContent" placeholder="Product Short Name..." />
            <input type="number" name ="pPrice" placeholder="Product Price..." />
            
            <button>Add Product</button>  </form>
        </div>
      </div>
    </section>
  </div>
 
 </>
  )
}

export default AddProductsform