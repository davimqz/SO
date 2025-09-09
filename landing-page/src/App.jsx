import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Section from './components/Sections/Section';
import { FaUniversity, FaGlobe, FaTicketAlt, FaLock, FaSatelliteDish, FaSyncAlt, FaBolt, FaExclamationTriangle, FaLaptop } from 'react-icons/fa';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'o-que-e', 'desafios', 'familias', 'rmi', 'quando-usar'];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <Navbar
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />
      <Hero scrollToSection={scrollToSection} />
      <Section id="o-que-e" title="O que é Exclusão Mútua?" className="bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                A exclusão mútua é um conceito fundamental em sistemas concorrentes e distribuídos que garante que apenas um processo por vez possa acessar um recurso compartilhado crítico.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                  <p className="text-gray-300"><strong className="text-white">Sincronização:</strong> Coordena o acesso a recursos entre múltiplos processos</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                  <p className="text-gray-300"><strong className="text-white">Consistência:</strong> Mantém a integridade dos dados compartilhados</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                  <p className="text-gray-300"><strong className="text-white">Segurança:</strong> Previne condições de corrida e corrupção de dados</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-800/30 to-blue-800/30 p-8 rounded-2xl border border-purple-500/30">
              <h3 className="text-xl font-bold text-white mb-4">Propriedades Essenciais</h3>
              <ul className="space-y-3 text-gray-300">
                <li>✅ <strong>Safety:</strong> No máximo um processo na região crítica</li>
                <li>✅ <strong>Liveness:</strong> Todo processo eventualmente entra na região crítica</li>
                <li>✅ <strong>Fairness:</strong> Nenhum processo fica indefinidamente esperando</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
      <Section id="desafios" title="Desafios em Sistemas Distribuídos">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-red-800/30 to-orange-800/30 p-6 rounded-2xl border border-red-500/30">
              <div className="text-red-400 text-3xl mb-4 flex items-center justify-center">
                <FaExclamationTriangle />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Ausência de Relógio Global</h3>
              <p className="text-gray-300">Diferentes nós podem ter noções distintas de tempo, dificultando a sincronização temporal.</p>
            </div>
            <div className="bg-gradient-to-br from-yellow-800/30 to-orange-800/30 p-6 rounded-2xl border border-yellow-500/30">
              <div className="text-yellow-400 text-3xl mb-4 flex items-center justify-center">
                <FaGlobe />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Falhas de Rede</h3>
              <p className="text-gray-300">Mensagens podem ser perdidas, duplicadas ou entregues fora de ordem na rede.</p>
            </div>
            <div className="bg-gradient-to-br from-blue-800/30 to-purple-800/30 p-6 rounded-2xl border border-blue-500/30">
              <div className="text-blue-400 text-3xl mb-4 flex items-center justify-center">
                <FaLaptop />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Falhas de Nós</h3>
              <p className="text-gray-300">Processos podem falhar de forma parcial ou total, afetando a disponibilidade do sistema.</p>
            </div>
          </div>
          
          <div className="mt-12 bg-white/5 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Desafios Específicos da Exclusão Mútua</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-purple-300 mb-3">Detecção de Falhas</h4>
                <p className="text-gray-300 mb-4">Como detectar se um processo que possui o lock falhou?</p>
                <h4 className="text-lg font-semibold text-purple-300 mb-3">Ordenação de Mensagens</h4>
                <p className="text-gray-300">Como garantir que requisições sejam processadas na ordem correta?</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-purple-300 mb-3">Performance vs Consistência</h4>
                <p className="text-gray-300 mb-4">Balancear eficiência com garantias de correção.</p>
                <h4 className="text-lg font-semibold text-purple-300 mb-3">Escalabilidade</h4>
                <p className="text-gray-300">Manter performance com o aumento do número de nós.</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section id="familias" title="Famílias de Algoritmos" className="bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Algoritmos Centralizados */}
            <div className="bg-gradient-to-r from-green-800/30 to-emerald-800/30 p-8 rounded-2xl border border-green-500/30">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <FaUniversity className="mr-3" />
                Algoritmos Centralizados
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-gray-300 mb-4">Um coordenador central gerencia todas as requisições de acesso à região crítica.</p>
                  <h4 className="text-lg font-semibold text-green-300 mb-2">Vantagens:</h4>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Simples de implementar</li>
                    <li>• Garante exclusão mútua</li>
                    <li>• Baixo overhead de mensagens</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-red-300 mb-2">Desvantagens:</h4>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Ponto único de falha</li>
                    <li>• Gargalo de performance</li>
                    <li>• Dependência do coordenador</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Algoritmos Distribuídos */}
            <div className="bg-gradient-to-r from-blue-800/30 to-cyan-800/30 p-8 rounded-2xl border border-blue-500/30">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <FaGlobe className="mr-3" />
                Algoritmos Distribuídos
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-gray-300 mb-4">Todos os processos participam da decisão de quem pode acessar a região crítica.</p>
                  <h4 className="text-lg font-semibold text-blue-300 mb-2">Exemplos:</h4>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Algoritmo de Lamport</li>
                    <li>• Algoritmo de Ricart-Agrawala</li>
                    <li>• Algoritmo de Suzuki-Kasami</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-blue-300 mb-2">Características:</h4>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Sem ponto único de falha</li>
                    <li>• Maior complexidade</li>
                    <li>• Mais mensagens trocadas</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Algoritmos Baseados em Token */}
            <div className="bg-gradient-to-r from-purple-800/30 to-pink-800/30 p-8 rounded-2xl border border-purple-500/30">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <FaTicketAlt className="mr-3" />
                Algoritmos Baseados em Token
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-gray-300 mb-4">Um token único circula entre os processos, garantindo acesso exclusivo.</p>
                  <h4 className="text-lg font-semibold text-purple-300 mb-2">Variações:</h4>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Token Ring</li>
                    <li>• Token passing distribuído</li>
                    <li>• Token com prioridades</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-purple-300 mb-2">Propriedades:</h4>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Fairness garantida</li>
                    <li>• Overhead constante</li>
                    <li>• Complexidade na recuperação</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section id="rmi" title="Onde entra o RMI?">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              RMI (Remote Method Invocation) fornece a infraestrutura de comunicação necessária para implementar algoritmos de exclusão mútua em sistemas distribuídos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Como RMI Facilita a Exclusão Mútua</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-blue-400 rounded-full mt-1.5"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-blue-300">Abstração de Comunicação</h4>
                    <p className="text-gray-300">RMI encapsula a complexidade da comunicação em rede, permitindo chamadas de métodos transparentes.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full mt-1.5"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-green-300">Integração com Java</h4>
                    <p className="text-gray-300">Aproveitamento natural dos mecanismos de sincronização da JVM em ambiente distribuído.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-purple-400 rounded-full mt-1.5"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-purple-300">Gerenciamento de Exceções</h4>
                    <p className="text-gray-300">Tratamento robusto de falhas de rede e processos remotos.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-800/30 to-purple-800/30 p-8 rounded-2xl border border-indigo-500/30">
              <h3 className="text-xl font-bold text-white mb-4">Implementação Típica</h3>
              <div className="bg-black/20 p-4 rounded-lg font-mono text-sm text-gray-300">
                <div className="text-blue-300">// Interface do Coordenador</div>
                <div>public interface MutexCoordinator</div>
                <div className="ml-4">extends Remote {'{'}  </div>
                <div className="ml-4 text-green-300">boolean requestLock(String processId)</div>
                <div className="ml-8 text-gray-400">throws RemoteException;</div>
                <div className="ml-4 text-green-300">void releaseLock(String processId)</div>
                <div className="ml-8 text-gray-400">throws RemoteException;</div>
                <div>{'}'}</div>
              </div>
            </div>
          </div>

          {/* Componentes Típicos */}
          <div className="bg-white/5 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Componentes Típicos com RMI</h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaUniversity className="text-white text-2xl" />
                </div>
                <h4 className="text-lg font-bold text-white mb-3">Registry Service</h4>
                <p className="text-gray-300">Serviço de descoberta e registro de objetos remotos distribuídos.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-br from-green-600 to-green-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaLock className="text-white text-2xl" />
                </div>
                <h4 className="text-lg font-bold text-white mb-3">Lock Manager</h4>
                <p className="text-gray-300">Componente responsável pela coordenação e concessão de locks distribuídos.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-br from-purple-600 to-purple-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaSatelliteDish className="text-white text-2xl" />
                </div>
                <h4 className="text-lg font-bold text-white mb-3">Client Proxies</h4>
                <p className="text-gray-300">Interfaces locais que abstraem a comunicação com serviços remotos.</p>
              </div>
            </div>
            
            <div className="mt-8 grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-orange-800/30 to-red-800/30 p-6 rounded-xl border border-orange-500/30">
                <h4 className="text-lg font-bold text-white mb-3 flex items-center">
                  <FaSyncAlt className="mr-2" /> Callback Handlers
                </h4>
                <p className="text-gray-300">Gerenciam notificações assíncronas sobre mudanças de estado dos locks.</p>
              </div>
              
              <div className="bg-gradient-to-br from-teal-800/30 to-cyan-800/30 p-6 rounded-xl border border-teal-500/30">
                <h4 className="text-lg font-bold text-white mb-3 flex items-center">
                  <FaBolt className="mr-2" /> Failure Detectors
                </h4>
                <p className="text-gray-300">Detectam falhas em processos remotos e iniciam procedimentos de recuperação.</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section id="quando-usar" title="Quando Usar o Quê?" className="bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Decision Matrix */}
            <div className="bg-gradient-to-br from-indigo-800/30 to-purple-800/30 p-8 rounded-2xl border border-indigo-500/30">
              <h3 className="text-2xl font-bold text-white mb-6">Matriz de Decisão</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-gray-300">
                  <thead>
                    <tr className="border-b border-gray-600">
                      <th className="text-left py-3 px-2 text-white">Cenário</th>
                      <th className="text-left py-3 px-2 text-white">Abordagem Recomendada</th>
                      <th className="text-left py-3 px-2 text-white">Justificativa</th>
                    </tr>
                  </thead>
                  <tbody className="space-y-2">
                    <tr className="border-b border-gray-700">
                      <td className="py-3 px-2">Sistema pequeno (&lt;10 nós)</td>
                      <td className="py-3 px-2 text-green-300">Centralizado com RMI</td>
                      <td className="py-3 px-2">Simplicidade e baixo overhead</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="py-3 px-2">Alta disponibilidade crítica</td>
                      <td className="py-3 px-2 text-blue-300">Distribuído (Lamport)</td>
                      <td className="py-3 px-2">Sem ponto único de falha</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="py-3 px-2">Fairness é prioritária</td>
                      <td className="py-3 px-2 text-purple-300">Token Ring</td>
                      <td className="py-3 px-2">Garantia de acesso ordenado</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="py-3 px-2">Baixa frequência de acesso</td>
                      <td className="py-3 px-2 text-yellow-300">Ricart-Agrawala</td>
                      <td className="py-3 px-2">Eficiente para poucos requests</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Detailed Recommendations */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-green-800/30 to-emerald-800/30 p-6 rounded-xl border border-green-500/30">
                  <h4 className="text-xl font-bold text-white mb-3 flex items-center">
                    <span className="mr-2">✅</span>
                    Use Algoritmos Centralizados Quando:
                  </h4>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Sistema tem poucos nós (&lt;20)</li>
                    <li>• Performance é mais importante que disponibilidade</li>
                    <li>• Infraestrutura de rede é confiável</li>
                    <li>• Simplicidade de implementação é crucial</li>
                    <li>• Existe tolerância a reinicializações</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-orange-800/30 to-red-800/30 p-6 rounded-xl border border-orange-500/30">
                  <h4 className="text-xl font-bold text-white mb-3 flex items-center">
                    <span className="mr-2">⚠️</span>
                    Evite RMI Quando:
                  </h4>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Latência de rede é muito alta</li>
                    <li>• Sistema precisa ser heterogêneo</li>
                    <li>• Segurança é crítica (firewall issues)</li>
                    <li>• Escalabilidade extrema é necessária</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-br from-blue-800/30 to-cyan-800/30 p-6 rounded-xl border border-blue-500/30">
                  <h4 className="text-xl font-bold text-white mb-3 flex items-center">
                    <span className="mr-2">🌐</span>
                    Use Algoritmos Distribuídos Quando:
                  </h4>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Alta disponibilidade é crítica</li>
                    <li>• Sistema tem muitos nós (&gt;50)</li>
                    <li>• Falhas de nós são frequentes</li>
                    <li>• Não há infraestrutura centralizada</li>
                    <li>• Autonomia dos nós é importante</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-purple-800/30 to-pink-800/30 p-6 rounded-xl border border-purple-500/30">
                  <h4 className="text-xl font-bold text-white mb-3 flex items-center">
                    <span className="mr-2">🎯</span>
                    Considerações para RMI:
                  </h4>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Excelente para sistemas Java puros</li>
                    <li>• Boa integração com ferramentas Java</li>
                    <li>• Suporte nativo a callbacks</li>
                    <li>• Gerenciamento automático de referências</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Best Practices */}
            <div className="bg-gradient-to-r from-gray-800/30 to-slate-800/30 p-8 rounded-2xl border border-gray-500/30">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Melhores Práticas</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-yellow-300 mb-3">🔧 Implementação</h4>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• Sempre implemente timeouts</li>
                    <li>• Use connection pooling</li>
                    <li>• Monitore performance da rede</li>
                    <li>• Implemente retry mechanisms</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-green-300 mb-3">🛡️ Recuperação</h4>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• Detecte falhas rapidamente</li>
                    <li>• Tenha planos de fallback</li>
                    <li>• Implemente limpeza de locks órfãos</li>
                    <li>• Use heartbeat mechanisms</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-blue-300 mb-3">📊 Monitoramento</h4>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• Meça latência end-to-end</li>
                    <li>• Monitore deadlocks</li>
                    <li>• Trace requisições distribuídas</li>
                    <li>• Analise padrões de contenção</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      {/* Footer */}
      <footer className="py-12 bg-black/20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 mb-4">
            Exclusão Mútua em Sistemas Distribuídos com RMI
          </p>
          <p className="text-gray-500 text-sm">
            Grupo G6 - RMI • {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
