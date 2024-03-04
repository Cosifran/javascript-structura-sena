//Import mui components
import Alert from "@mui/material/Alert";
import TextField from "@mui/material/TextField";
import LoadingButton from "@mui/lab/LoadingButton";
import * as React from "react";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";
//Import fuction react
import {useState, useEffect} from "react";
export default function Enunciado4() {
  const [alert, setAlert] = useState(null);
  const [persona, setPersona] = useState({
    nombre: "",
    cedula: "",
    ciudadResidencia: "",
    ciudadOrigen: "",
    cancionesFav: [],
  });
  const [listPersona, setListPersona] = useState([]);
  const [currentPerson, setCurrentPerson] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const top100Films = [];

  const {nombre, cedula, ciudadResidencia, ciudadOrigen} = persona;

  useEffect(() => {
    console.log("selectedOptions:", selectedOptions);
    console.log("Lista de persona:", listPersona);
  }, [selectedOptions, listPersona]);

  const handleOnChange = (e) => {
    setPersona({...persona, [e.target.name]: e.target.value});
  };

  const handleOnChangeSelect = (event, values) => {
    if (values.length > 3) {
      alert(
        "Solo puedes seleccionar un máximo de 3 opciones la opción después de la tercera no se tomará en cuenta"
      );
      return;
    }

    setSelectedOptions(values);
    //guardo las opciones de las canciones
    setPersona({...persona, cancionesFav: values});
  };

  const onChangeEdit = (datos) => {
    setCurrentPerson(datos);
    setPersona({
      nombre: datos.nombre,
      cedula: datos.cedula,
      ciudadResidencia: datos.ciudadResidencia,
      ciudadOrigen: datos.ciudadOrigen,
      cancionesFav: datos.cancionesFav,
    });
    setSelectedOptions(datos.cancionesFav);
  };

  const onChangeDelete = (datos) => {
    setListPersona(
      listPersona.filter((persona) => persona.cedula !== datos.cedula)
    );
  };

  const onChangeSubmit = (e) => {
    e.preventDefault();
    //valido si los campos no están vacios
    if (
      (nombre == "" ||
        cedula == "" ||
        ciudadResidencia == "" ||
        ciudadOrigen == "",
      selectedOptions.length < 3)
    ) {
      getAlertFn("Todos los campos son obligatorios", "error");
      return;
    }

    //guardo la persona en la lista
    if (currentPerson != null) {
      const index = listPersona.findIndex(
        (persona) => persona.cedula === currentPerson.cedula
      );
      setListPersona([
        ...listPersona.slice(0, index),
        {...persona, cedula: currentPerson.cedula},
        ...listPersona.slice(index + 1),
      ]);
    } else {
      setListPersona([...listPersona, persona]);
    }

    //reset formulario
    setPersona({
      nombre: "",
      cedula: "",
      ciudadResidencia: "",
      ciudadOrigen: "",
      cancionesFav: [],
    });
    setSelectedOptions([]);
    setCurrentPerson(null);
  };

  //funcion para mostrar alerta
  const getAlertFn = (msg, category) => {
    setAlert({
      msg,
      category,
    });

    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  return (
    <form onSubmit={onChangeSubmit}>
      <div className="row g-3 mt-3">
        <div className="col-12">
          <h1 className="my-3">Enunciado 4</h1>
          <p>
            Una emisora con presencia en diferentes ciudades desea conocer el
            rating de canciones y cantantes más escuchados (sonados) en este
            semestre del año. Por lo tanto, se ha pedido a estudiantes del SENA
            del programa de tecnólogo en análisis y desarrollo de software
            desarrollar una solución que permita conocer la respuesta de 6
            personas con relación a sus gustos musicales. Con fines
            administrativos y realizar una rifa entre las personas encuestadas,
            la emisora desea poder registrar de las personas entrevistadas su
            nombre, número de identificación (cédula), fecha de nacimiento,
            correo electrónico, ciudad de residencia, ciudad de origen. Además,
            se deberá poder almacenar el artista y título de hasta 3 canciones
            favoritas encada una de las personas que se ingrese, teniendo en
            cuenta lo anterior, se sugiere que la solución deberá mostrar un
            menú que permite las siguientes opciones:
          </p>
        </div>
        <div className="col-12 mb-2">
          <h2>Formulario </h2>
        </div>
        <div className="col-6">
          <TextField
            name="nombre"
            value={nombre}
            className="w-100"
            onChange={(e) => handleOnChange(e)}
            label="Nombre"
            variant="outlined"
          />
        </div>
        <div className="col-6">
          <TextField
            name="cedula"
            value={cedula}
            className="w-100"
            onChange={(e) => handleOnChange(e)}
            type="number"
            label="Cedula"
            variant="outlined"
          />
        </div>
        <div className="col-6">
          <TextField
            name="ciudadResidencia"
            value={ciudadResidencia}
            className="w-100"
            onChange={(e) => handleOnChange(e)}
            label="Ciudad de residencia"
            variant="outlined"
          />
        </div>
        <div className="col-6">
          <TextField
            name="ciudadOrigen"
            value={ciudadOrigen}
            className="w-100"
            onChange={(e) => handleOnChange(e)}
            label="Ciudad de origen"
            variant="outlined"
          />
        </div>
        <div className="col-12">
          <Autocomplete
            multiple
            id="tags-filled"
            options={top100Films}
            value={selectedOptions}
            freeSolo
            limitTags={3}
            onChange={handleOnChangeSelect}
            renderTags={(value, getTagProps) =>
              value.map((option, index) => (
                <Chip
                  variant="outlined"
                  label={option}
                  {...getTagProps({index})}
                />
              ))
            }
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                label="Ingresa 3 canciones favoritas"
                placeholder="Canciones favoritas"
              />
            )}
          />
        </div>
        <div className="col-12">
          <LoadingButton
            type="submit"
            color="primary"
            loadingPosition="center"
            sx={{height: "100%", width: "100%"}}
            variant="contained"
            onSubmit={onChangeSubmit}>
            {currentPerson ? "Editar" : "Guardar"}
          </LoadingButton>
        </div>
        {alert && (
          <div className="col-12 my-3">
            <Alert severity={`${alert.category}`}>{alert.msg} </Alert>
          </div>
        )}
      </div>
      {listPersona.length > 0 && (
        <div className="row mt-3">
          <div className="col-12 my-3">
            <h3>Personas</h3>
          </div>
          {listPersona?.map((datos, index) => (
            <div className="col-4" key={index}>
              <div className="card w-100">
                <div className="card-body">
                  <h5 className="card-title">{datos.nombre}</h5>
                  <p className="card-text">{datos.cedula}</p>
                  <p className="card-text">{datos.ciudadResidencia}</p>
                  <p className="card-text">{datos.ciudadOrigen}</p>
                  <ul>
                    {datos.cancionesFav.map((canciones, index) => (
                      <li key={index}>{canciones}</li>
                    ))}
                  </ul>
                  <div className="row g-2">
                    <div className="col-6">
                      <LoadingButton
                        color="primary"
                        className="w-100"
                        loadingPosition="center"
                        variant="contained"
                        onClick={() => {
                          onChangeEdit(datos);
                        }}>
                        Editar
                      </LoadingButton>
                    </div>
                    <div className="col-6">
                      <LoadingButton
                        className="w-100"
                        color="error"
                        loadingPosition="center"
                        variant="contained"
                        onClick={() => {
                          onChangeDelete(datos);
                        }}>
                        Eliminar
                      </LoadingButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </form>
  );
}
