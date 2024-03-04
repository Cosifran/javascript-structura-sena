//Import mui components
import Alert from "@mui/material/Alert";
import TextField from "@mui/material/TextField";
import LoadingButton from "@mui/lab/LoadingButton";
//Import fuction react
import {useState} from "react";
export default function Enunciado3() {
  const [dato, setDato] = useState("");
  const [alert, setAlert] = useState(null);
  const [arreglo1, setArreglo1] = useState([]);
  const [arreglo2, setArreglo2] = useState([]);
  const [arregloOrdenado, setArregloOrdenado] = useState([]);
  const [ordenado, setOrdenado] = useState(false);

  const onChange = (e) => {
    setDato(e.target.value);
  };

  const guardarDato = () => {
    //valida si el campo fue rellenado
    if (dato === "") {
      getAlertFn("El campo es obligatorio", "error");
      return;
    }
    //valida que el arreglo aún no se halla llenado y ingresa el dato
    if (arreglo1.length < 5) {
      setArreglo1([...arreglo1, parseInt(dato)]);
      setDato("");
      return;
    }
    if (arreglo2.length < 5) {
      setArreglo2([...arreglo2, parseInt(dato)]);
      setDato("");
      return;
    }
  };

  const mostrarResultado = () => {
    //reset al formulario 
    if(arregloOrdenado.length > 0){
      setArreglo1([])
      setArreglo2([])
      setArregloOrdenado([])
      setOrdenado(false)
      setDato('')
      return
    }
    //Ordenar y combina arreglo
    const combinarArreglos = arreglo1.concat(arreglo2).sort((a, b) => a - b);
    console.log(combinarArreglos);
    //valida que los arreglos estén ordenados
    if (isSortedAscending(arreglo1) && isSortedAscending(arreglo2)) {
      setOrdenado(true);
      setArregloOrdenado(combinarArreglos);
      return;
    }
    //Guarda arreglo no ordenado y lo ordena 
    setArregloOrdenado(combinarArreglos);
  };

    //Verificar array
    const isSortedAscending = (arr) => {
      return arr.every((x, i) => i === 0 || x >= arr[i - 1]);
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
    <div className="row">
      <div className="col-12">
        <h1 className="my-3">Enunciado 3</h1>
        <p>
          Escriba un programa que lea dos vectores de números enteros ordenados
          ascendentemente y luego produzca la lista ordenada de la mezcla de los
          dos, por ejemplo, si los dos arreglos tienen los números 1 3 6 9 17 y
          2 4 10 17, respectivamente, la lista de números en la pantalla debe
          ser 1 2 3 4 6 9 10 17 17. Limite los vectores a un tamaño de 5 y debe
          validar en cada ingreso que realmente se estén ingresando los datos de
          forma ascendente.
        </p>
      </div>
      <div className="col-12 mb-2">
        <h2>Almacena los datos del primer vector </h2>
      </div>
      <div className="col-12">
        Arreglo 1: [
        {arreglo1?.map((dato, index) => (
          <>
            <span key={index}>{dato},</span>
          </>
        ))}
        ] - Arreglo 2: [
        {arreglo2?.map((dato, index) => (
          <>
            <span key={index}>{dato},</span>
          </>
        ))}
        ]
      </div>
      <div className="col-10 my-2">
        <TextField
          value={dato}
          type="number"
          placeholder="Almacena tus datos"
          label={
            arreglo1.length - 1 < 5
              ? "Ingresa datos al primer vector"
              : "Ingresa datos al segundo vector"
          }
          sx={{width: "100%"}}
          onChange={(e) => {
            onChange(e);
          }}
        />
      </div>
      <div className="col-2 my-2">
        {arreglo1.length < 5 || arreglo2.length < 5 ? (
          <LoadingButton
            type="submit"
            color="primary"
            loadingPosition="center"
            sx={{height: "100%", width: "100%"}}
            variant="contained"
            onClick={guardarDato}>
            Añadir
          </LoadingButton>
        ) : (
          <LoadingButton
            type="submit"
            color="primary"
            loadingPosition="center"
            sx={{height: "100%", width: "100%"}}
            variant="contained"
            onClick={mostrarResultado}>
            {arregloOrdenado.length > 0 ? "Recetear" : "Resultado"}
          </LoadingButton>
        )}
      </div>
      {arregloOrdenado.length > 0 && (
        <div className="col-12">
          <p className="fw-bold">
            {ordenado
              ? "Los arreglos están ordenados"
              : "Los arreglos no están ordenados"}{" "}
          </p>
          <h3>
            [
            {arregloOrdenado?.map((dato, index) => (
              <>
                <span key={index}>{dato},</span>
              </>
            ))}
            ]
          </h3>
        </div>
      )}
      {alert && (
        <div className="col-12 my-3">
          <Alert severity={`${alert.category}`}>{alert.msg} </Alert>
        </div>
      )}
    </div>
  );
}
