import styled from "styled-components";

export default function SeatsForm({
  buyerInfo,
  handleSubmit,
  name,
}) {
  return (
    <div>
      <label>
        Nome do Comprador {name}:
        <input
          id="name"
          name={"nome"}
          required
          data-test="client-name"
          type="text"
          value={buyerInfo.name}
          onChange={handleSubmit}
          placeholder="Digite seu nome..."
        />
      </label>
        <label>
          CPF do Comprador {name}:
          <input
            id="cpf"
            name={"cpf"}
            required
            data-test="client-cpf"
            pattern="[0-9]+$"
            maxLength={11}
            minLength={11}
            value={buyerInfo.cpf}
            onChange={handleSubmit}
            placeholder="Digite seu CPF..."
          />
        </label>
    </div>
  );
}