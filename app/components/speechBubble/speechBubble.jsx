import './spechBubble.css';
import '../tradePetitionComponent/tradePetitionComponent.css'

const SpeechBubble = (description) => {
    return (
        <div className='speech-bubble
                        trade-petition-description
                        trade-petition-top-element
                        color-900'>
            {description.description}
        </div>
    );
}

export default SpeechBubble;
