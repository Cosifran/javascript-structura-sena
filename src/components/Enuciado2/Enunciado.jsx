//Import mui components
import Alert from "@mui/material/Alert";
import TextField from "@mui/material/TextField";
import LoadingButton from "@mui/lab/LoadingButton";
//Import fuction react
import {useState} from "react";
export default function Enunciado2() {
  const [alert, setAlert] = useState(null);
  const [edad, setEdad] = useState("");
  const [edades, setEdades] = useState([]);
  const [loading, setLoading] = useState(false);
  const [adultosMayores, setAdultosMayores] = useState(0);
  const [edadGrande, setEdadGrande] = useState(0);
  const [edadPequeña, setEdadPequeña] = useState(121);
  const [promedioEdad, setPromedioEdad] = useState(0);
  const [resultado, setResultado] = useState(false);

  const onChange = (e) => {
    setEdad(parseInt(e.target.value));
  };

  const guardarEdad = () => {
    //validar resultado
    if (resultado) {
      setResultado(false);
    }
    //validar edad
    setLoading(true);
    if (edad === null) {
      getAlertFn("El campo es obligatorio", "error");
      return;
    }

    if (edad < 0 || edad > 120) {
      getAlertFn("La edad debe estar en un rango de 0 y 120", "error");
      return;
    }

    //hallando la edad menor
    if (edad < edadPequeña) {
      setEdadPequeña(edad);
    }

    //hallando la edad mayor
    if (edad > edadGrande) {
      setEdadGrande(edad);
    }

    //conteo de adultos mayores
    if (edad >= 60) {
      setAdultosMayores(adultosMayores + 1);
    }

    setEdades([...edades, edad]);
    setEdad("");
  };

  const getResultado = () => {
    setLoading(true);
    let promedioEdad = 0;

    edades.forEach((data) => {
      promedioEdad += data;
    });

    setPromedioEdad(Math.round(promedioEdad / 10));
    setEdades([]);
    setEdad("");
    setResultado(true);

    setTimeout(() => {
      setLoading(true);
    }, 3000);
  };

  //funcion para mostrar alerta
  const getAlertFn = (msg, category) => {
    setAlert({
      msg,
      category,
    });

    setTimeout(() => {
      setAlert(null);
      setLoading(false);
    }, 3000);
  };

  return (
    <>
      <div className="row">
        <div className="col-12">
          <h1 className="my-3">Enunciado 2</h1>
          <p>
            Desarrollar un programa que permita almacenar las edades de un grupo
            de 10 personas en un vector de enteros y luego determine la cantidad
            de personas que son menores de edad, mayores de edad, cuántos
            adultos mayores, la edad más baja, la edad más alta y el promedio de
            edades ingresadas. Para el ejercicio anterior suponga que un adulto
            mayor debe tener una edad igual o superior a 60. Debe validar para
            cada ingreso que los valores estén en un rango entre 1 y 120 años.
            En caso de error deberá notificar y solicitar un nuevo valor.
          </p>
        </div>
        <div className="col-12 mb-2">
          <h2>Almacena tu edad</h2>
        </div>
        <div className="col-10">
          <TextField
            value={edad}
            type="number"
            placeholder="Tu edad debe estar en un rango de 1 y 120"
            label="Ingresa tu edad"
            sx={{width: "100%"}}
            onChange={(e) => {
              onChange(e);
            }}
          />
        </div>
        <div className="col-2">
          {edades.length < 10 ? (
            <LoadingButton
              type="submit"
              color="primary"
              loadingPosition="center"
              sx={{height: "100%", width: "100%"}}
              variant="contained"
              onClick={guardarEdad}>
              Añadir
            </LoadingButton>
          ) : (
            <LoadingButton
              type="submit"
              color="primary"
              loadingPosition="center"
              sx={{height: "100%", width: "100%"}}
              variant="contained"
              onClick={getResultado}>
              Resultados
            </LoadingButton>
          )}
        </div>
        {alert && (
          <div className="col-12 my-3">
            <Alert severity={`${alert.category}`}>{alert.msg} </Alert>
          </div>
        )}
        {resultado && (
          <div className="col-12 mt-3">
            <h2>Resultados</h2>
            <p>Edad menor: {edadPequeña}</p>
            <p>Edad mayor: {edadGrande}</p>
            <p>Adultos mayores: {adultosMayores}</p>
            <p>Promedio de edades: {promedioEdad}</p>
          </div>
        )}
      </div>
    </>
  );
}
