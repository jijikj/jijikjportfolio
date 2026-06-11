import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function Contact() {
  // Chargement de l'ID Formspree depuis les variables d'environnement de Vite
  const [state, handleSubmit] = useForm(import.meta.env.VITE_FORMSPREE_ID);

  if (state.succeeded) {
    return (
      <section id="contact" className="py-20 px-4 max-w-xl mx-auto text-center relative z-10">
        <div className="bg-slate-900/90 backdrop-blur-lg border border-emerald-500/30 p-8 rounded-3xl shadow-2xl space-y-4">
          <div className="flex justify-center text-emerald-400">
            <CheckCircle size={48} />
          </div>
          <h3 className="text-2xl font-black text-white">Message envoyé !</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Merci pour votre message. Il a bien été transmis. Vous recevrez une réponse très rapidement.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 px-4 max-w-xl mx-auto text-center relative z-10">
      <div className="bg-slate-900/80 backdrop-blur-lg border border-slate-800 p-8 rounded-3xl shadow-2xl">
        <h3 className="text-3xl font-black text-white mb-2">Travaillons ensemble</h3>
        <p className="text-gray-400 text-sm mb-6">Laissez-moi un message pour discuter de vos futurs projets.</p>
        
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <div>
            <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
              Votre adresse Email
            </label>
            <input 
              id="email"
              type="email" 
              name="email"
              required
              className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-indigo-500 transition-colors placeholder-gray-700 text-sm"
              placeholder="votre.email@exemple.com"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} className="text-xs text-red-400 mt-1 block" />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
              Votre Message
            </label>
            <textarea 
              id="message"
              name="message"
              required
              rows="4"
              className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-indigo-500 transition-colors resize-none placeholder-gray-700 text-sm"
              placeholder="Décrivez votre projet ou votre besoin..."
            ></textarea>
            <ValidationError prefix="Message" field="message" errors={state.errors} className="text-xs text-red-400 mt-1 block" />
          </div>
          
          <button 
            type="submit" 
            disabled={state.submitting}
            className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-800/50 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-all shadow-lg shadow-indigo-600/20 flex items-center justify-center gap-2"
          >
            <Send size={16} /> 
            {state.submitting ? "Envoi en cours..." : "Envoyer le message"}
          </button>

          {state.errors && state.errors.length > 0 && (
            <div className="flex items-center gap-2 text-xs text-red-400 mt-3 font-medium justify-center bg-red-500/10 py-2 px-3 rounded-lg border border-red-500/20">
              <AlertCircle size={14} /> Une erreur est survenue lors de l'envoi. Veuillez réessayer.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}