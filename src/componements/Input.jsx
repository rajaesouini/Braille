const Input = ({ setText }) => {

   //gestionnaire d'evenement

   const handleChange = (e) => {
      //modifier l'etat contenu dans App avec la valeur de ma saisie.
    setText(e.currentTarget.value);
   }

   return <input type ="text" onChange={handleChange} />;
};

export default Input;