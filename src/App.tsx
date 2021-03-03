import React from 'react';
import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
  };

  const watchEstadoCivil = watch('estado_civil')

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="nome" ref={register({ required:true })} placeholder="Nome"/>
        {errors.nome && " *Nome obrigatório"}
        <br/>
        <input name="cidade" ref={register} placeholder="Cidade"/>
        <br/>
        <input name="email" ref={register({ required:true, pattern: /^\S+@\S+$/i })} placeholder="E-mail" />
        {errors.email && " *Informe um e-mail válido"}
        <br/>
        <input name="idade" type="number" ref={register({ required:true, min: 18, max: 200})} placeholder="Idade"/>
        {errors.idade && " *Idade mínima: 18 anos"}
        <br/>
        <label>Estado Civil:</label><br></br>
        <label>Solteiro</label>
        <input name="estado_civil" type="radio" ref={register({ required:true })} value="solteiro"/>

        <label>Casado</label>
        <input name="estado_civil" type="radio" ref={register({ required:true })} value="casado"/>
        {watchEstadoCivil === "casado" && (
          <div>
            <label>Nome do conjuge:</label>
            <input name="conjuge" type="text" ref={register({ required:true })}/>
            {errors.conjuge && " *Informe o nome do seu conjuge"}
          </div>
        )}
        {errors.estado_civil && " *Informe seu estado civil"}
        <br></br>        

        <button>Enviar</button>

      </form>
      
    </div>
  );
}

export default App;
