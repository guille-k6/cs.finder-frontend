import css from './crateComponent.css';

function CrateComponent(crate) {
    const {id, name, image} = crate.crate;
    return (<div className='crate-container'>
                <p>{id}</p>
                <p>{name}</p>
                <p>{image}</p>
            </div>)
}

export default CrateComponent