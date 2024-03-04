import React from "react";
//Import mui components
import Alert from "@mui/material/Alert";
import TextField from "@mui/material/TextField";
import LoadingButton from "@mui/lab/LoadingButton";
const CalculoFigura = ({
  value,
  result,
  calculate,
  autenticate,
  alertCalculate,
  onChangeTriangulo,
  onSubmitCalculate,
}) => {
  return (
    <>
      {value && calculate && autenticate.autenticateSearch && (
        <form onSubmit={onSubmitCalculate}>
          <div className="row mt-4">
            <div className="col-12 mb-4">
              <h3>Ingresa tus valores para realizar el calculo de {value}</h3>
            </div>
          </div>
          <div className="row">
            {value == "Triangulo" && calculate === 10 && (
              <div className="col-9">
                <div className="row">
                  <div className="col-4">
                    <TextField
                      name="a"
                      className="w-100"
                      type="number"
                      label="a"
                      variant="outlined"
                      onChange={(e) => {
                        onChangeTriangulo(e);
                      }}
                    />
                  </div>
                  <div className="col-4">
                    <TextField
                      name="b"
                      className="w-100"
                      type="number"
                      label="b"
                      variant="outlined"
                      onChange={(e) => {
                        onChangeTriangulo(e);
                      }}
                    />
                  </div>
                  <div className="col-4">
                    <TextField
                      name="c"
                      className="w-100"
                      type="number"
                      label="c"
                      variant="outlined"
                      onChange={(e) => {
                        onChangeTriangulo(e);
                      }}
                    />
                  </div>
                </div>
              </div>
            )}
            {value == "Triangulo" && calculate === 20 && (
              <div className="col-9">
                <div className="row">
                  <div className="col-6">
                    <TextField
                      name="b"
                      className="w-100"
                      type="number"
                      label="b"
                      variant="outlined"
                      onChange={(e) => {
                        onChangeTriangulo(e);
                      }}
                    />
                  </div>
                  <div className="col-6">
                    <TextField
                      name="c"
                      className="w-100"
                      type="number"
                      label="h"
                      variant="outlined"
                      onChange={(e) => {
                        onChangeTriangulo(e);
                      }}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* apartado rectangulo */}
            {value == "Rectangulo" && calculate === 10 && (
              <div className="col-9">
                <div className="row">
                  <div className="col-6">
                    <TextField
                      name="a"
                      className="w-100"
                      type="number"
                      label="a"
                      variant="outlined"
                      onChange={(e) => {
                        onChangeTriangulo(e);
                      }}
                    />
                  </div>
                  <div className="col-6">
                    <TextField
                      name="b"
                      className="w-100"
                      type="number"
                      label="b"
                      variant="outlined"
                      onChange={(e) => {
                        onChangeTriangulo(e);
                      }}
                    />
                  </div>
                </div>
              </div>
            )}

            {value == "Rectangulo" && calculate === 20 && (
              <div className="col-9">
                <div className="row">
                  <div className="col-6">
                    <TextField
                      name="a"
                      className="w-100"
                      type="number"
                      label="a"
                      variant="outlined"
                      onChange={(e) => {
                        onChangeTriangulo(e);
                      }}
                    />
                  </div>
                  <div className="col-6">
                    <TextField
                      name="b"
                      className="w-100"
                      type="number"
                      label="b"
                      variant="outlined"
                      onChange={(e) => {
                        onChangeTriangulo(e);
                      }}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* apartado cuadrado */}
            {value == "Cuadrado" && calculate === 10 && (
              <div className="col-9">
                <div className="row">
                  <div className="col-12">
                    <TextField
                      name="a"
                      className="w-100"
                      type="number"
                      label="a"
                      variant="outlined"
                      onChange={(e) => {
                        onChangeTriangulo(e);
                      }}
                    />
                  </div>
                </div>
              </div>
            )}

            {value == "Cuadrado" && calculate === 20 && (
              <div className="col-9">
                <div className="row">
                  <div className="col-12">
                    <TextField
                      name="a"
                      className="w-100"
                      type="number"
                      label="a"
                      variant="outlined"
                      onChange={(e) => {
                        onChangeTriangulo(e);
                      }}
                    />
                  </div>
                </div>
              </div>
            )}

             {/* apartado circulo */}
             {value == "Circulo" && calculate === 10 && (
              <div className="col-9">
                <div className="row">
                  <div className="col-12">
                    <TextField
                      name="a"
                      className="w-100"
                      type="number"
                      label="r"
                      variant="outlined"
                      onChange={(e) => {
                        onChangeTriangulo(e);
                      }}
                    />
                  </div>
                </div>
              </div>
            )}

            <div className="col-3">
              <LoadingButton
                type="submit"
                color="primary"
                onSubmit={onSubmitCalculate}
                loadingPosition="center"
                sx={{height: "100%", width: "100%"}}
                variant="contained">
                Calcular
              </LoadingButton>
            </div>
            {alertCalculate && (
              <div className="col-12 my-3">
                <Alert severity={`${alertCalculate.category}`}>
                  {alertCalculate.msg}{" "}
                </Alert>
              </div>
            )}
          </div>
        </form>
      )}

      {result && (
        <div className="row mt-4">
          <div className="col-12 mb-4">
            <h3>Resultado: {result}</h3>
          </div>
        </div>
      )}
    </>
  );
};

export default CalculoFigura;
