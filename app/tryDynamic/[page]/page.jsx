const { default: CustomLayout } = require("../layout");

const Parametrizado = ({params}) => {
    console.log(params);
    return (
        <div>
           Parámetro: {params.page}
        </div>
    );
}

export default Parametrizado;
