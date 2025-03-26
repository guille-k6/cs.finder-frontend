import Image from "next/image";

const AkComponent = ({imgWidth, imgHeight, color}) => {
    return (
        <Image src={'/images/ak47.png'} width={imgWidth} height={imgHeight} sizes="100vw" alt='Logo de un ak47'/>
    );
}

export default AkComponent;
