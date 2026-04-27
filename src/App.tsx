import { useState } from 'react';
import { 
  Heart, 
  Clock, 
  FileText, 
  Phone, 
  MessageCircle, 
  ShieldCheck, 
  UserPlus, 
  Activity, 
  Stethoscope,
  ChevronDown,
  Info,
  CheckCircle2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Constante para facilitar a alteração do número do WhatsApp
const WHATSAPP_NUMBER = "5581900000000"; // Exemplo, deve ser substituído pelo real
const WHATSAPP_MESSAGE = encodeURIComponent("Olá! Gostaria de mais informações sobre os serviços de cuidadores em Recife e orçamento.");
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

function FloatingWhatsApp() {
  return (
    <a 
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center p-4 bg-amparo-whatsapp hover:bg-amparo-whatsapp-hover text-white rounded-full shadow-[0_8px_30px_rgb(37,211,102,0.4)] transition-all transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-amparo-whatsapp/50"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle size={32} />
    </a>
  );
}

function NavBar() {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-amparo-blue-dark rounded-full flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-2xl font-bold text-amparo-blue-dark tracking-tight">Amparo<span className="text-amparo-teal">Vital</span></span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#servicos" className="text-slate-600 hover:text-amparo-blue font-medium transition-colors">Serviços</a>
            <a href="#diferenciais" className="text-slate-600 hover:text-amparo-blue font-medium transition-colors">Diferenciais</a>
            <a href="#faq" className="text-slate-600 hover:text-amparo-blue font-medium transition-colors">Dúvidas</a>
            <a 
              href={WHATSAPP_URL}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amparo-teal hover:bg-amparo-teal/90 text-white font-bold transition-all shadow-md hover:shadow-lg"
            >
              <Phone size={18} />
              Falar com Especialista
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-slate-50 border-b border-slate-200 pt-16 pb-20 md:pt-24 md:pb-32 text-slate-800">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 -m-32 w-96 h-96 bg-amparo-teal/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -m-32 w-96 h-96 bg-amparo-blue/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-sm font-semibold tracking-wide mb-8 shadow-sm"
            >
              <ShieldCheck size={16} className="text-amparo-teal" />
              Atendimento Exclusivo em Recife e Região Metropolitana
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-amparo-blue-dark leading-tight tracking-tight mb-6"
            >
              Cuidadores Domiciliares em Recife: <span className="text-amparo-teal">Segurança e Carinho</span> em todos os momentos
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed"
            >
              Sua família merece o melhor amparo. Nossa equipe 100% qualificada foca no em bem-estar físico e emocional, trazendo tranquilidade e paz de espírito para quem você mais ama.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a 
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 px-8 py-5 text-lg font-bold bg-amparo-teal hover:bg-teal-600 text-white rounded-2xl transition-all shadow-lg shadow-teal-500/30 transform hover:-translate-y-1"
              >
                <MessageCircle size={24} className="group-hover:scale-110 transition-transform" />
                Solicitar Orçamento no WhatsApp
              </a>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 0.4 }}
               className="mt-12 flex flex-wrap items-center gap-6 border-t border-slate-200 pt-8"
            >
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-amparo-blue-dark italic">+500</span>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Famílias Atendidas</span>
              </div>
              <div className="h-10 w-px bg-slate-200 hidden sm:block"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-amparo-blue-dark italic">24/7</span>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Prontidão Total</span>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative hidden lg:block"
          >
             <div className="absolute inset-0 bg-amparo-teal rounded-[3rem] transform rotate-3 scale-105 opacity-10"></div>
             <img 
               src="https://images.unsplash.com/photo-1583947581924-860bda6a5c83?auto=format&fit=crop&q=80&w=1200" 
               alt="Cuidadora oferecendo companhia e segurando a mão da paciente, transmitindo carinho e apoio humano." 
               referrerPolicy="no-referrer"
               className="relative z-10 rounded-[3rem] shadow-2xl object-cover w-full h-[600px] border border-white/50"
             />
             
             {/* Floating Trust Badge */}
             <div className="absolute -bottom-6 -left-6 z-20 bg-white p-6 rounded-3xl shadow-2xl flex items-center gap-4 border border-slate-100 transform hover:scale-105 transition-transform cursor-default">
               <div className="w-14 h-14 bg-amparo-teal-light rounded-2xl flex items-center justify-center text-amparo-teal border border-amparo-teal/20">
                 <ShieldCheck size={28} />
               </div>
               <div>
                  <div className="text-base font-bold text-amparo-blue-dark">Profissionais de Confiança</div>
                  <div className="text-sm text-slate-500 mt-1">Seleção rigorosa e qualificada</div>
               </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function DifferentiatorsSection() {
  return (
    <section id="diferenciais" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-amparo-blue-dark mb-4">Por que escolher a Amparo Vital?</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Nossos profissionais possuem curso de formação completo e passam por rigorosa seleção. Oferecemos flexibilidade de plantões e relatórios precisos da rotina diária.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-3xl bg-amparo-blue-dark text-white shadow-xl group border border-amparo-blue-dark flex flex-col"
          >
            <div className="mb-4">
              <h3 className="text-amparo-teal font-bold uppercase tracking-widest text-xs mb-3 flex items-center gap-2">
                <UserPlus size={16} /> Profissionais Capacitados
              </h3>
            </div>
            <p className="text-blue-100 text-sm leading-relaxed mb-4">
               Avaliamos não apenas técnica, mas inteligência emocional. Nossa equipe conta com cuidadores com formação comprovada.
            </p>
            <div className="grid grid-cols-1 gap-2 mt-auto text-xs font-medium bg-amparo-blue/50 p-3 rounded-xl border border-white/5">
               <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-amparo-teal" /> Rigoroso processo seletivo</span>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm group flex flex-col"
          >
             <div className="mb-4 text-amparo-blue-dark">
                <h3 className="font-bold text-lg mb-2 flex items-center gap-2"><Clock size={20} className="text-amparo-teal" /> Plantões Flexíveis</h3>
             </div>
             <p className="text-slate-600 text-sm leading-relaxed mb-4">
               Coberturas de 12 horas (diurnas ou noturnas) ou 24 horas. Ajustamos as escalas para não haver descontinuidade no suporte.
             </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm group flex flex-col"
          >
             <div className="mb-4 text-amparo-blue-dark">
                <h3 className="font-bold text-lg mb-2 flex items-center gap-2"><FileText size={20} className="text-amparo-teal" /> Relatórios de Rotina</h3>
             </div>
             <p className="text-slate-600 text-sm leading-relaxed mb-4">
               Acompanhamento documentado. A família recebe registros detalhados de medicações, alimentação e estado geral diário.
             </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const services = [
    {
      title: "Cuidado com Idosos",
      desc: "Companhia afetuosa, encorajamento na mobilidade e auxílio completo nas necessidades da vida diária, resguardando sempre a autonomia no próprio lar.",
      icon: <Heart size={20} className="text-white" />,
      image: "https://images.unsplash.com/photo-1586936893354-362ad6ae47ba?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Acompanhamento Hospitalar",
      desc: "Presença contínua e dedicada durante as internações, servindo como elo fiel da família com o paciente para reduzir a angústia durante a estadia.",
      icon: <Activity size={20} className="text-white" />,
      image: "https://images.unsplash.com/photo-1493836512294-502baa1986e2?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Assistência Pós-Cirúrgica",
      desc: "Um porto seguro na hora de voltar para casa. Acompanhamos a recuperação garantindo conforto e prevenindo esforço excessivo no restabelecimento.",
      icon: <Stethoscope size={20} className="text-white" />,
      image: "https://images.unsplash.com/photo-1434494878577-8282bd2afc8d?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Gestão de Rotinas",
      desc: "Total responsabilidade na organização do dia do paciente, incluindo controle assertivo das doses de medicamentos recomendados nas horas exatas.",
      icon: <Info size={20} className="text-white" />,
      image: "https://images.unsplash.com/photo-1506126613632-4a0b411dcae8?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section id="servicos" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-amparo-blue-dark mb-4">Portfólio de Cuidados</h2>
          <p className="text-lg text-slate-600">
            Nós estruturamos serviços desenhados especialmente para garantir que nenhum detalhe seja deixado para trás, unindo conhecimento clínico com sensibilidade incomparável.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-2xl transition-all group flex flex-col overflow-hidden"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amparo-blue-dark/90 via-amparo-blue-dark/20 to-transparent"></div>
                <div className="absolute bottom-5 left-5 right-5 flex items-end gap-3 z-10">
                   <div className="w-10 h-10 bg-amparo-teal rounded-xl flex flex-shrink-0 items-center justify-center text-white shadow-lg border border-white/20">
                     {service.icon}
                   </div>
                   <h3 className="font-bold text-lg text-white leading-tight drop-shadow-md pb-1">{service.title}</h3>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-sm text-slate-600 leading-relaxed flex-1">{service.desc}</p>
                <div className="mt-6 pt-6 border-t border-slate-100">
                   <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-amparo-blue-dark group-hover:text-amparo-teal transition-colors flex items-center justify-between w-full">
                     Mais detalhes
                     <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-amparo-teal-light group-hover:text-amparo-teal transition-colors">
                       <ChevronDown size={16} className="-rotate-90" />
                     </div>
                   </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AuthoritySection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-amparo-blue-dark rounded-[3rem] border border-slate-200 grid lg:grid-cols-2 overflow-hidden shadow-2xl">
          <div className="relative h-full min-h-[400px] hidden lg:block overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-r from-amparo-blue-dark via-amparo-blue-dark/50 to-transparent z-10"></div>
             <img 
               src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&q=80&w=1200" 
               alt="Liderança ética e atendimento humanizado nos cuidados familiares" 
               referrerPolicy="no-referrer"
               className="absolute inset-0 w-full h-full object-cover transform scale-105"
             />
          </div>

          <div className="p-10 md:p-16 relative z-20 bg-amparo-blue-dark lg:bg-transparent">
            <h3 className="text-amparo-teal font-bold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
              <ShieldCheck size={20} />
               Autoridade e Ética
            </h3>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 leading-tight">
              O mais elevado padrão de <span className="text-amparo-teal">Cuidado Humanizado</span>
            </h2>
            <p className="text-base text-blue-100 mb-8 leading-relaxed">
              Entendemos que confiar o cuidado de quem você ama a outra pessoa exige enorme segurança. Na Amparo Vital, compromisso ético e respeito absoluto são a base de todas as nossas dinâmicas operacionais diárias. 
            </p>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl mt-8">
              <p className="text-lg font-medium leading-relaxed italic text-white mb-6">
                "Nosso objetivo real não é só acompanhar o paciente, mas sim devolver noites de sono serenas e dias calmos para toda família, que sabe que deixaram seu parente em excelentes mãos compassivas e capazes."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-amparo-teal rounded-full flex items-center justify-center text-amparo-blue-dark font-bold text-lg">
                  AV
                </div>
                <div>
                  <div className="font-bold text-sm text-white">Direção Clínica</div>
                  <div className="text-amparo-teal font-medium text-xs">Amparo Vital - Recife - PE</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FaqItem({ question, answer }: { question: string, answer: string, key?: number | string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-slate-200 rounded-xl mb-4 overflow-hidden bg-white hover:border-amparo-teal/50 transition-colors">
      <button 
        className="w-full flex items-center justify-between p-6 bg-white focus:outline-none focus:bg-slate-50"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="text-left font-semibold text-lg text-amparo-blue-dark pr-8">{question}</span>
        <ChevronDown 
          className={`shrink-0 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-amparo-teal' : ''}`} 
          size={24} 
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 pb-6 pt-2 text-slate-600 leading-relaxed border-t border-slate-100">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function FaqSection() {
  const faqs = [
    {
      q: "Como contratar acompanhante para hospital no Recife?",
      a: "O processo é muito simples e rápido. Basta entrar em contato pelo nosso botão de WhatsApp. Nossa coordenação avalia brevemente a complexidade do caso clínico do paciente e envia rapidamente um profissional com perfil adequado (sexo, experiência específica) diretamente ao hospital indicado em Recife ou RMR."
    },
    {
      q: "Como funciona o plantão domiciliar de cuidador?",
      a: "Trabalhamos com escalas que se adequam à sua rotina. Realizamos plantões domiciliares de 12h (diurnos ou noturnos) ou 24h contínuas (com revezamento de profissionais para garantir o descanso e a qualidade do serviço). Em todos os casos, a família recebe acesso ao relatório de evolução diária."
    },
    {
      q: "Vocês atendem urgências, como altas hospitalares de última hora?",
      a: "Sim! Entendemos que imprevistos na saúde acontecem frequentemente. Temos equipes de prontidão e flexibilidade para iniciar plantões hospitalares ou domiciliares em curto prazo na Região Metropolitana do Recife. Fale no WhatsApp para verificarmos a disponibilidade imediata."
    },
    {
      q: "Qual a diferença entre o cuidador e a enfermagem (Home Care)?",
      a: "O cuidador é focado nas atividades da vida diária do paciente (auxílio ao banho, alimentação, locomoção, companhia, e administração de medicamentos orais prescritos). Procedimentos invasivos (como injeções, curativos complexos ou sondas) são responsabilidades exclusivas da enfermagem técnica ou superior."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <h2 className="text-3xl md:text-4xl font-extrabold text-amparo-blue-dark mb-6">Dúvidas Frequentes</h2>
            <p className="text-lg text-slate-600 mb-8">
              Encontre respostas rápidas para as principais perguntas sobre a contração de acompanhantes e cuidadores na Região Metropolitana do Recife.
            </p>
            <div className="p-6 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col items-start">
               <p className="text-slate-600 font-medium mb-4">Ainda tem dúvidas ou seu caso é muito específico?</p>
               <a 
                 href={WHATSAPP_URL}
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-amparo-blue-dark text-white font-bold hover:bg-amparo-blue transition-colors shadow-md w-full sm:w-auto"
               >
                 <MessageCircle size={20} className="text-amparo-teal" />
                 Fale com a Diretoria
               </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            {faqs.map((faq, index) => (
              <FaqItem key={index} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-100 py-12 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-4">
              <Heart className="text-amparo-teal" size={24} />
              <span className="text-xl font-bold text-amparo-blue-dark tracking-tight">Amparo<span className="text-amparo-teal">Vital</span></span>
            </div>
            <p className="text-sm text-slate-500 max-w-xs mb-6">
              Especialistas em cuidar de quem você ama, com segurança a cada batimento.
            </p>
          </div>
          
          <div className="text-left md:text-right">
             <h4 className="text-xs font-bold text-slate-400 uppercase mb-3 tracking-widest">Contato & Localização</h4>
             <p className="text-sm font-bold text-amparo-blue-dark mb-1">Amparo Vital Serviços de Saúde LTDA</p>
             <p className="text-xs text-slate-500 uppercase mt-1">contato@amparovital.com.br</p>
             <p className="text-xs text-slate-500 mt-1">Boa Viagem, Recife-PE</p>
          </div>
        </div>
        
        <div className="pt-6 mt-6 border-t border-slate-200 text-xs text-slate-500 flex justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Amparo Vital. Todos os direitos reservados.</p>
          <a href={WHATSAPP_URL} className="flex gap-1 items-center text-amparo-teal font-medium hover:underline border border-slate-200 px-3 py-1.5 rounded-full"><MessageCircle size={14}/> WhatsApp</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen font-sans flex flex-col">
      <NavBar />
      <main className="flex-grow">
        <HeroSection />
        <DifferentiatorsSection />
        <ServicesSection />
        <AuthoritySection />
        <FaqSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

