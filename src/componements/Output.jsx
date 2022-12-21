// text est une props envoyé par App
 import transcription from "./service/braille";
const Output = ({ text }) => {
   return <h1>{transcription(text)}</h1>;
};

export default Output;