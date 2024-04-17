export default function Guitar({guitar,addToCart}) {  //desestructuramos el props en guitarras!!!!!!


  
    const {id,name,image,descripition,price } = guitar
    // const handleClick = (guitar) => {
    //     console.log("click de "+guitar.id);
    //     setCart([...cart,guitar])
    // }

  return (
    <div className="col-md-6 col-lg-4 my-4 row align-items-center">
      <div className="col-4">
        <img
          className="img-fluid"
          src={`./img/${image}.jpg`}
          alt="imagen guitarra"
        />
      </div>
      <div className="col-8">
        <h3 className="text-black fs-4 fw-bold text-uppercase">{name}</h3>
        <p>
            {descripition}
        </p>
        <p className="fw-black text-primary fs-3">{price}</p>
        <button 
        type="button" 
        className="btn btn-dark w-100"
        // onClick={()=> handleClick(guitar)}
        onClick={()=> addToCart(guitar)}
            //la funcion set, conoce el state que usa, con la funcion de flecha tomamos 
            //el valor previo y a eso le añadimos la guitarra
        >
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
}
 