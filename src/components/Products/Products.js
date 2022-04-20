import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { getProducts, deleteProduct, createProduct, updateProducts } from '../../services/Products';
import { Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';

function Products() {
    const [data, setData] = useState([]);
    const getData = async () => {
        const response = await getProducts()
        if (response) {
        let data1 = [];
        response.data.map((item) => {
            return data1.push({ id: item[0], title: item[1], price: item[2], description: item[3] });
        })
        setData(data1)
        }
    }
    useEffect(() => {
        getData()
    }, [])

    const [modalEditar, setModalEditar] = useState(false);
    const [modalDelete, setModalDelete] = useState(false);
    const [modalInsert, setModalInsert] = useState(false);
    const [edit, setEdit] = useState({
        id: '',
        title: '',
        price: '',
        description: ''
    });
    const selectItem = (item, type) => {
        setEdit(item);
        (type === 'edit') ? setModalEditar(true) : setModalDelete(true)
    }
    const handleChange = e => {
        const { name, value } = e.target;
        setEdit((prevState) => ({
        ...prevState,
        [name]: value
        }));
    }

    const editOk = async () => {
        const response = await updateProducts({ title: edit.title, price: edit.price, description: edit.description, id: edit.id });
        setModalEditar(false);
        if (response) {
        getData();
        }
    }

    const deleteOk = async () => {
        const response = await deleteProduct({ id: edit.id });
        setModalDelete(false)
        if (response) {
        getData();
        }
    }

    const openModalInsert = () => {
        setEdit(null);
        setModalInsert(true);
    }

    const insertOk = async () => {
        const response = await createProduct({ title: edit.title, price: edit.price, description: edit.description });
        setModalInsert(false);
        if (response) {
        getData();
        }
    }

    return (
        <div className='Products'>
        <div className="row">
            <div className="col-2"></div>
            <div className="col-7">
            <div className="row">
                <div className="col-4"></div>
                <div className="col-4">
                <h2>Products List</h2>
                <br />
                </div>
            </div>
            <button className="btn btn-success" onClick={() => openModalInsert()}>Insertar</button>
            <br /><br />
            <table className="table table-bordered">
                <thead>
                <tr>
                    {/* <th>ID</th> */}
                    <th>TITLE</th>
                    <th>PRICE</th>
                    <th>description</th>
                    <th>ACTIONS</th>
                </tr>
                </thead>
                <tbody>
                {data.map((item, key) => {
                    return (
                    <tr key={key}>
                        {/* <td>{item.id}</td> */}
                        <td>{item.title}</td>
                        <td>{item.price}</td>
                        <td>{item.description}</td>
                        <td><button className="btn btn-primary" onClick={() => selectItem(item, 'edit')}>Edit</button> {"  "}
                        <button className="btn btn-danger" onClick={() => selectItem(item, 'delete')}>Delete</button></td>
                    </tr>
                    )
                })}
                </tbody>
            </table>

            <Modal isOpen={modalEditar}>
                <ModalHeader>
                <div>
                    <h3>Editar Usuario</h3>
                </div>
                </ModalHeader>
                <ModalBody>
                <div className="form-group">
                    <label>ID</label>
                    <input className="form-control" readOnly type="text" name="id" value={edit && edit.id} />
                    <br />

                    <label>NAME</label>
                    <input className="form-control" type="text" name="title" value={edit && edit.title} onChange={handleChange} />
                    <br />

                    <label>PRICE</label>
                    <input className="form-control" type="text" value={edit && edit.price} onChange={handleChange} />
                    <br />

                    <label>description</label>
                    <input className="form-control" type="text" name="description" value={edit && edit.description} onChange={handleChange} />
                    <br />
                </div>
                </ModalBody>
                <ModalFooter>
                <button className="btn btn-primary" onClick={() => editOk()}> Actualizar </button>
                <button className="btn btn-danger" onClick={() => setModalEditar(false)}> Cancelar </button>
                </ModalFooter>
            </Modal>

            <Modal isOpen={modalDelete}>
                <ModalBody>
                Estás Seguro que deseas eliminar a {edit && edit.price}
                </ModalBody>
                <ModalFooter>
                <button className="btn btn-danger" onClick={() => deleteOk()}> Sí </button>
                <button className="btn btn-secondary" onClick={() => setModalDelete(false)}> No </button>
                </ModalFooter>
            </Modal>

            <Modal isOpen={modalInsert}>
                <ModalHeader>
                <div>
                    <h3>Insertar nuevo Usuario</h3>
                </div>
                </ModalHeader>
                <ModalBody>
                <div className="form-group">
                    <label>TITLE</label>
                    <input className="form-control" type="text" name="title" value={edit ? edit.title : ''} onChange={handleChange}/>
                    <br />

                    <label>PRICE</label>
                    <input className="form-control" type="text" name="price" value={edit ? edit.price : ''} onChange={handleChange}/>
                    <br />

                    <label>description</label>
                    <input className="form-control" type="text" name="description" value={edit ? edit.description : ''} onChange={handleChange}/>
                    <br />
                </div>
                </ModalBody>
                <ModalFooter>
                <button className="btn btn-primary" onClick={() => insertOk()}> Insertar </button>
                <button className="btn btn-danger" onClick={() => setModalInsert(false)}> Cancelar </button>
                </ModalFooter>
            </Modal>
            </div>
        </div>
        </div>
    );
}

export default Products;
