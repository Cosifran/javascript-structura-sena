//Import react fuctions
import {useState, useContext} from "react";
//Import mui components
import Alert from "@mui/material/Alert";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import LoadingButton from "@mui/lab/LoadingButton";
import FormControl from "@mui/material/FormControl";
import Autocomplete from "@mui/material/Autocomplete";
//Import components own
import CalculoFigura from "./CalculoFigura/CalculoFigura";
//Import img
import tabla from "../../../../assets/tabla.PNG";
const options = ["Triangulo", "Rectangulo", "Cuadrado", "Circulo"];

export default function Enunciado1() {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState(null);
  const [calculate, setCalculate] = useState("");
  const [autenticate, setAutenticate] = useState({
    autenticateSearch: false,
    autenticateCalculate: false,
    autenticateResult: false,
  });
  const [result, setResult] = useState(null);
  const [alert, setAlert] = useState(null);
  const [alertCalculate, setAlertCalculate] = useState(null);
  const [triangulo, setTriangulo] = useState({
    a: NaN,
    b: NaN,
    c: NaN,
  });

  const {a, b, c} = triangulo;

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

  const getAlertCalculateFn = (msg, category) => {
    setAlertCalculate({
      msg,
      category,
    });

    setTimeout(() => {
      setAlertCalculate(null);
      setAlert(false);
    }, 3000);
  };

  const handleChange = (event) => {
    setCalculate(event.target.value);
  };

  const onChangeTriangulo = (e) => {
    setTriangulo({...triangulo, [e.target.name]: parseInt(e.target.value)});
  };

  const onChangeSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    //Activa el formulario
    if (value === null || calculate === "") {
      getAlertFn("Todos los campos son obligatorios", "error");
      return;
    }
    setAutenticate({...autenticate, autenticateSearch: true});
    setLoading(false);
    console.log(autenticate.autenticateSearch);
  };

  const onSubmitCalculate = (e) => {
    e.preventDefault();
    const PI = 3.1416;
    //Calculo triangulo perimetro
    if (value === "Triangulo" && calculate === 10) {
      if (isNaN(a) || isNaN(b) || isNaN(c)) {
        getAlertCalculateFn("Todos los campos son obligatorios", "error");
        setResult(null);
        return;
      }

      const resultCal = a + b + c;
      setResult(resultCal);
      return;
    }

    if (value === "Triangulo" && calculate === 20) {
      if (isNaN(b) || isNaN(c)) {
        getAlertCalculateFn("Todos los campos son obligatorios", "error");
        setResult(null);
        return;
      }

      const resultCal = (b * c) / 2;
      setResult(resultCal);
      return;
    }

    if (value === "Rectangulo" && calculate === 10) {
      if (isNaN(a) || isNaN(b)) {
        getAlertCalculateFn("Todos los campos son obligatorios", "error");
        setResult(null);
        return;
      }

      const resultCal = 2 * (b + a);
      setResult(resultCal);
      return;
    }

    if (value === "Rectangulo" && calculate === 20) {
      if (isNaN(a) || isNaN(b)) {
        getAlertCalculateFn("Todos los campos son obligatorios", "error");
        setResult(null);
        return;
      }

      const resultCal = b * a;
      setResult(resultCal);
      return;
    }

    if (value === "Cuadrado" && calculate === 10) {
      if (isNaN(a)) {
        getAlertCalculateFn("Todos los campos son obligatorios", "error");
        setResult(null);
        return;
      }

      const resultCal = 4 * a;
      setResult(resultCal);
      return;
    }

    if (value === "Cuadrado" && calculate === 20) {
      if (isNaN(a)) {
        getAlertCalculateFn("Todos los campos son obligatorios", "error");
        setResult(null);
        return;
      }

      const resultCal = a ** 2;
      setResult(resultCal);
      return;
    }

    if (value === "Circulo" && calculate === 10) {
      if (isNaN(a)) {
        getAlertCalculateFn("Todos los campos son obligatorios", "error");
        setResult(null);
        return;
      }

      const resultCal = 2 * PI * (a ** 2);
      setResult(resultCal);
      return;
    }
  };

  return (
    <>
      <div className="col-12">
        <h1 className="my-3">Enunciado 1</h1>
        <p>
          Desarrollar un programa que permita calcular el área o perímetro de
          algunas figuras planas según la siguiente tabla:
        </p>
      </div>
      <div className="col-12 text-center mb-2">
        <img src={tabla} alt="Figuras" />
      </div>
      {/* Inputs */}
      <form onSubmit={onChangeSubmit}>
        <div className="row">
          <div className="col-5">
            <Autocomplete
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              isOptionEqualToValue={(option, value) => option === value}
              id="controllable-states-demo"
              options={options}
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="Elige una figura"
                  label="Elige una figura"
                />
              )}
            />
          </div>
          <div className="col-5">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label text-center">
                Seleccione un calculo
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={calculate}
                label="Seleccione un calculo"
                onChange={handleChange}>
                <MenuItem value={10}>Perímetro</MenuItem>
                <MenuItem value={20}>Área</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="col-2">
            <LoadingButton
              type="submit"
              color="primary"
              onSubmit={onChangeSubmit}
              loading={loading}
              loadingPosition="center"
              sx={{height: "100%", width: "100%"}}
              variant="contained">
              Guardar
            </LoadingButton>
          </div>
          {alert && (
            <div className="col-12 my-3">
              <Alert severity={`${alert.category}`}>{alert.msg} </Alert>
            </div>
          )}
        </div>
      </form>

      <CalculoFigura
        value={value}
        result={result}
        calculate={calculate}
        autenticate={autenticate}
        alertCalculate={alertCalculate}
        onChangeTriangulo={onChangeTriangulo}
        onSubmitCalculate={onSubmitCalculate}
      />
    </>
  );
}
