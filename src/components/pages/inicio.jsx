import React from 'react'

const Inicio = () => {
    return (
        <div>
            <form class="row g-3">
                <div class="col-md-6">
                    <label for="inputEmail4" class="form-label">Email</label>
                    <input type="email" class="form-control" id="inputEmail4" />
                </div>
                <div class="col-md-6">
                    <label for="inputPassword4" class="form-label">Contraseña</label>
                    <input type="password" class="form-control" id="inputPassword4" />
                </div>
                <div class="col-12">
                    <label for="inputAddress" class="form-label">Dirreccion</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
                </div>
                <div class="col-12">
                    <label for="inputAddress2" class="form-label">Direccion 2</label>
                    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                </div>
                <div class="col-md-6">
                    <label for="inputCity" class="form-label">Ciudad</label>
                    <input type="text" class="form-control" id="inputCity" />
                </div>
                
                <div class="col-md-2">
                    <label for="inputZip" class="form-label">Edad</label>
                    <input type="text" class="form-control" id="inputZip" />
                </div>
                <div class="col-12">
                    
                </div>
                <div class="col-12">
                    <button type="submit" class="btn btn-primary">Enter</button>
                </div>
            </form>

        </div>
    )
}

export default Inicio