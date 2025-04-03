import { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target as HTMLFormElement;

    emailjs
      .sendForm(
        "service_zfeam8c",
        "template_rzj5wgh",
        form,
        "Kwnt2UMPCjTtiS3yE"
      ) // Remplace par tes identifiants
      .then(
        () => {
          setStatus("Message envoyé avec succès !");
          // Réinitialiser les champs du formulaire
          setName("");
          setEmail("");
          setMessage("");
          setLoading(false);
        },
        () => {
          setStatus("Erreur lors de l'envoi du message.");
          setLoading(false);
        }
      );
  };

  return (
    <section className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-4xl font-extrabold mb-6 text-center text-gray-800">
          Contactez-moi
        </h2>
        <p className="text-lg text-gray-700 mb-4 text-center">
          N'hésitez pas à me contacter pour toute question ou projet potentiel.
        </p>
        <p className="text-lg text-gray-700 mb-4 text-center">
          Je suis impatient de vous lire !
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="mb-5">
            <label
              htmlFor="name"
              className="block text-gray-700 font-semibold mb-2"
            >
              Nom
            </label>
            <input
              id="name"
              name="name" // Ajoute l'attribut 'name' pour EmailJS
              type="text"
              placeholder="Votre nom"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-2"
            >
              Email
            </label>
            <input
              id="email"
              name="email" // Ajoute l'attribut 'name' pour EmailJS
              type="email"
              placeholder="Votre adresse email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="message"
              className="block text-gray-700 font-semibold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message" // Ajoute l'attribut 'name' pour EmailJS
              placeholder="Écrivez votre message ici"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-900 transition duration-300"
            disabled={loading}
          >
            {loading ? "Envoi en cours..." : "Envoyer"}
          </button>
        </form>
        {/* Affichage du statut après l'envoi */}
        {status && (
          <div
            className={`mt-4 text-center text-sm ${
              status.includes("succès") ? "text-green-500" : "text-red-500"
            }`}
          >
            {status}
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
