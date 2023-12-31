import { useForm } from "react-hook-form";
//import Button from "react-bootstrap/Button";
//import Form from 'react-bootstrap/Form';
import { Button, Form } from "react-bootstrap";
import "./Registro.css";
import { create } from "../Services/productosServices";

function ProductosAlta() {
  const { register, handleSubmit } = useForm({ mode: "onChange" });

  const onSubmit = async (data) => {
    try {
      const document = await create(data);
      console.log(
        "🚀 ~ file: productosAlta.jsx:19 ~ onSubmit ~ document:",
        //document
      );
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formBasicNombre">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese su nombre"
            {...register("title")}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicNombre">
          <Form.Label>Precio</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ingrese su precio"
            {...register("price")}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicNombre">
          <Form.Label>Imagen</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese su imagen"
            {...register("thumbnail")}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicNombre">
          <Form.Label>Detalles</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese la descripcion del producto"
            {...register("details")}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Guardar
        </Button>
      </Form>
    </div>
  );
}

export default ProductosAlta;
