import React from "react";
import PropTypes from "prop-types";

const ItemLista = ({ marca, ano_lancamento }) => {
  return (
    <>
      <li>
        {marca} - {ano_lancamento}
      </li>
    </>
  );
};

ItemLista.propTypes = {
  marca: PropTypes.string.isRequired,
  ano_lancamento: PropTypes.number,
};

ItemLista.defaultProps = {
  marca: "Uma marca ai",
  ano_lancamento: 0,
};

export default ItemLista;
