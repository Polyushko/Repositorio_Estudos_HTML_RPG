const classes = [
 {nome:'Bárbaro',tipo:'Combate',icone:'⚒',dado:12,atributo:'Força',armadura:'Sem armadura',caBase:10,equip:['Machado grande','Dois machados de mão','Mochila de explorador','4 azagaias'],descricao:'Resistência e fúria para enfrentar o perigo na linha de frente.',detalhe:'A Fúria fortalece ataques corpo a corpo baseados em Força e ajuda a resistir a dano. A Defesa sem Armadura usa Destreza e Constituição na CA. Ideal para quem quer proteger o grupo na dianteira.'},
 {nome:'Bardo',tipo:'Versátil',icone:'♫',dado:8,atributo:'Carisma',armadura:'Couro',caBase:11,equip:['Rapieira','Alaúde','Armadura de couro','Adaga','Mochila de diplomata'],descricao:'Arte, inspiração e magia para mudar o rumo da aventura.',detalhe:'Inspiração de Bardo concede dados de apoio aos aliados. O personagem usa Carisma para suas magias e combina perícias, suporte e interação social.'},
 {nome:'Clérigo',tipo:'Magia',icone:'✦',dado:8,atributo:'Sabedoria',armadura:'Cota de escamas e escudo',caBase:14,equip:['Maça','Cota de escamas','Escudo','Símbolo sagrado','Mochila de sacerdote'],descricao:'Poder divino, proteção e cura para sustentar o grupo.',detalhe:'O Domínio Divino molda seus poderes já no nível 1. Prepara magias com Sabedoria, podendo curar, apoiar aliados ou lutar junto deles.'},
 {nome:'Druida',tipo:'Magia',icone:'❧',dado:8,atributo:'Sabedoria',armadura:'Couro e escudo',caBase:11,equip:['Cimitarra','Armadura de couro','Escudo de madeira','Foco druídico','Mochila de explorador'],descricao:'Magia da natureza e formas animais para se adaptar a qualquer cenário.',detalhe:'Conjura magias ligadas à natureza com Sabedoria. Aprende Forma Selvagem no nível 2; no nível 1 já dispõe de truques e magias preparadas.'},
 {nome:'Guerreiro',tipo:'Combate',icone:'⚔',dado:10,atributo:'Força ou Destreza',armadura:'Cota de malha e escudo',caBase:16,equip:['Espada longa','Cota de malha','Escudo','Besta leve e 20 virotes','Mochila de explorador'],descricao:'Técnica e disciplina com armas, armaduras e táticas de batalha.',detalhe:'Escolhe um Estilo de Luta e pode usar Retomar o Fôlego para recuperar PV. É flexível no combate com armas e armaduras.'},
 {nome:'Monge',tipo:'Combate',icone:'☯',dado:8,atributo:'Destreza e Sabedoria',armadura:'Sem armadura',caBase:10,equip:['Bastão','10 dardos','Mochila de explorador'],descricao:'Mobilidade e disciplina, com golpes desarmados e armas simples.',detalhe:'As Artes Marciais permitem ataques desarmados e uso de Destreza com armas de monge. A Defesa sem Armadura usa Destreza e Sabedoria. Ki começa no nível 2.'},
 {nome:'Paladino',tipo:'Combate',icone:'♜',dado:10,atributo:'Força e Carisma',armadura:'Cota de malha e escudo',caBase:16,equip:['Espada longa','Cota de malha','Escudo','5 azagaias','Símbolo sagrado'],descricao:'Um juramento que une coragem marcial e poder sagrado.',detalhe:'Sentido Divino e Cura pelas Mãos aparecem no nível 1. Magias e Destruição Divina entram no nível 2; o Juramento Sagrado é escolhido no nível 3.'},
 {nome:'Patrulheiro',tipo:'Versátil',icone:'➶',dado:10,atributo:'Destreza e Sabedoria',armadura:'Couro',caBase:11,equip:['Arco longo e 20 flechas','Duas espadas curtas','Armadura de couro','Mochila de explorador'],descricao:'Exploração, rastreamento e combate em terras selvagens.',detalhe:'No nível 1, Inimigo Favorito e Explorador Natural representam sua experiência de sobrevivência. Conjuração e Estilo de Luta chegam no nível 2.'},
 {nome:'Ladino',tipo:'Versátil',icone:'◇',dado:8,atributo:'Destreza',armadura:'Couro',caBase:11,equip:['Rapieira','Arco curto e 20 flechas','Armadura de couro','Ferramentas de ladrão','Mochila de assaltante'],descricao:'Furtividade, perícia e precisão para agir no momento certo.',detalhe:'Ataque Furtivo acrescenta dano em condições apropriadas; Especialização reforça duas proficiências. Excelente para exploração, infiltração e combate oportuno.'},
 {nome:'Feiticeiro',tipo:'Magia',icone:'✹',dado:6,atributo:'Carisma',armadura:'Sem armadura',caBase:10,equip:['Besta leve e 20 virotes','Foco arcano','Duas adagas','Mochila de explorador'],descricao:'Magia inata que nasce de uma linhagem ou evento extraordinário.',detalhe:'A Origem Feiticeira define como seus poderes surgiram. Usa Carisma para conjurar; Pontos de Feitiçaria e Metamagia aparecem em níveis posteriores.'},
 {nome:'Bruxo',tipo:'Magia',icone:'☽',dado:8,atributo:'Carisma',armadura:'Couro',caBase:11,equip:['Besta leve e 20 virotes','Foco arcano','Armadura de couro','Duas adagas','Mochila de estudioso'],descricao:'Poderes arcanos obtidos por meio de um pacto com uma entidade.',detalhe:'O Patrono Sobrenatural concede características no nível 1. A Magia de Pacto usa Carisma e seus espaços de magia se renovam em descanso curto.'},
 {nome:'Mago',tipo:'Magia',icone:'✧',dado:6,atributo:'Inteligência',armadura:'Sem armadura',caBase:10,equip:['Bastão','Livro de magias','Bolsa de componentes','Mochila de estudioso'],descricao:'Estudo arcano e um vasto repertório de feitiços.',detalhe:'Seu livro registra magias; ele prepara uma seleção diária usando Inteligência. Recuperação Arcana ajuda a recuperar espaços após descanso curto.'}
];
const racas = [
 {nome:'Humano',icone:'✦',resumo:'Adaptável e presente em muitos lugares.',traco:'Na versão padrão de 2014, cada atributo aumenta em 1; deslocamento de 9 m.'},
 {nome:'Elfo',icone:'☽',resumo:'Ágil, atento e ligado a tradições antigas.',traco:'Destreza +2, visão no escuro, sentidos aguçados e Transe; a sub-raça acrescenta traços.'},
 {nome:'Anão',icone:'⚒',resumo:'Resiliente, com forte tradição artesanal.',traco:'Constituição +2, visão no escuro, resistência a veneno e deslocamento de 7,5 m; a sub-raça acrescenta traços.'},
 {nome:'Halfling',icone:'❧',resumo:'Pequeno, corajoso e surpreendentemente sortudo.',traco:'Destreza +2, Sorte, Bravura, Agilidade Halfling e deslocamento de 7,5 m.'},
 {nome:'Draconato',icone:'♢',resumo:'Herança dracônica e presença marcante.',traco:'Força +2, Carisma +1, arma de sopro e resistência conforme a ancestralidade dracônica.'},
 {nome:'Gnomo',icone:'✧',resumo:'Curioso, engenhoso e afeito à magia.',traco:'Inteligência +2, visão no escuro, Astúcia Gnômica e deslocamento de 7,5 m.'},
 {nome:'Meio-elfo',icone:'◇',resumo:'Versátil entre diferentes culturas.',traco:'Carisma +2, outros dois atributos +1, visão no escuro e duas proficiências em perícias.'},
 {nome:'Meio-orc',icone:'⚔',resumo:'Resistente e capaz de golpes ferozes.',traco:'Força +2, Constituição +1, Resistência Implacável e Ataques Selvagens.'},
 {nome:'Tiefling',icone:'✹',resumo:'Herança infernal e magia inata.',traco:'Carisma +2, Inteligência +1, visão no escuro, resistência a fogo e Legado Infernal.'}
];
const nomesAtributos=['Força','Destreza','Constituição','Inteligência','Sabedoria','Carisma'];
const abrev=['FOR','DES','CON','INT','SAB','CAR'];
const atributoPericia={'Acrobacia':1,'Adestrar Animais':4,'Arcanismo':3,'Atletismo':0,'Atuação':5,'Enganação':5,'Furtividade':1,'História':3,'Intimidação':5,'Intuição':4,'Investigação':3,'Medicina':4,'Natureza':3,'Percepção':4,'Persuasão':5,'Prestidigitação':1,'Religião':3,'Sobrevivência':4};
const $=seletor=>document.querySelector(seletor);
function modificador(valor){return Math.floor((Number(valor)-10)/2);}
function sinal(valor){return valor>=0?`+${valor}`:String(valor);}
function elemento(tag,classe,texto){const el=document.createElement(tag);if(classe)el.className=classe;if(texto!==undefined)el.textContent=texto;return el;}
function detalhar(item,alvo,tipo){
 const painel=$(alvo);painel.replaceChildren();
 const fechar=elemento('button','detalhe-fechar','Fechar');fechar.type='button';fechar.addEventListener('click',()=>{painel.hidden=true;});
 painel.append(fechar,elemento('span','sobretitulo',tipo),elemento('h3','',item.nome),elemento('p','',item.detalhe||item.resumo));
 if(item.traco)painel.append(elemento('p','',item.traco));
 if(tipo==='RAÇA DE PERSONAGEM'){const r=detalhesRaca[item.nome];if(r){painel.append(elemento('p','detalhe-meta',`Tamanho: ${r.tamanho} · Deslocamento: ${r.deslocamento} · Idiomas: ${r.idiomas}`));const ul=elemento('ul');r.tracos.forEach(v=>ul.append(elemento('li','',v)));painel.append(ul,elemento('p','ficha-ressalva',r.nota));}}
 if(item.equip){const r=regrasClasse[item.nome];painel.append(elemento('p','detalhe-meta',`Dado de vida: d${item.dado} · Atributo principal: ${item.atributo}`),elemento('h4','','Proficiências'));for(const [titulo,valor] of [['Armaduras',r.armaduras],['Armas',r.armas],['Ferramentas',r.ferramentas],['Testes de resistência',r.resistencias.join(', ')],['Perícias',`Escolha ${r.quantidade}: ${r.pericias.join(', ')}`]])painel.append(linhaValor(titulo,valor));painel.append(elemento('h4','','Equipamento inicial: escolha em cada linha'));const lista=elemento('ul');r.grupos.forEach(grupo=>lista.append(elemento('li','',grupo.map((v,i)=>`${String.fromCharCode(65+i)}: ${v}`).join(' · '))));r.fixos.forEach(v=>lista.append(elemento('li','',`Fixo: ${v}`)));painel.append(lista);const botao=elemento('button','botao primario','Usar na ficha');botao.type='button';botao.addEventListener('click',()=>{$('#classeSelect').value=item.nome;montarEscolhas();$('#personagem').scrollIntoView({behavior:'smooth'});});painel.append(botao);}
 painel.hidden=false;painel.scrollIntoView({behavior:'smooth',block:'center'});painel.focus({preventScroll:true});
}
let filtroAtual='Todas';
function mostrarClasses(){
 const termo=$('#busca').value.trim().toLocaleLowerCase('pt-BR');const grade=$('#gradeClasses');grade.replaceChildren();
 const lista=classes.filter(c=>(filtroAtual==='Todas'||c.tipo===filtroAtual)&&c.nome.toLocaleLowerCase('pt-BR').includes(termo));
 for(const item of lista){const card=elemento('article','classe-card');card.append(elemento('div','classe-icone',item.icone),elemento('span','tag',item.tipo),elemento('h3','',item.nome),elemento('p','',item.descricao));const botao=elemento('button','','Conhecer classe');botao.type='button';botao.addEventListener('click',()=>detalhar(item,'#detalheClasse','CLASSE DE PERSONAGEM'));card.append(botao);grade.append(card);}
 $('#semResultados').hidden=lista.length>0;
}
classes.forEach(c=>$('#classeSelect').add(new Option(c.nome,c.nome)));
$('#classeSelect').add(new Option('Selecione','',true,true),0);
$('#classeSelect').addEventListener('change',()=>montarEscolhas());
document.querySelectorAll('.filtro').forEach(b=>b.addEventListener('click',()=>{filtroAtual=b.dataset.filtro;document.querySelectorAll('.filtro').forEach(x=>x.classList.toggle('ativo',x===b));mostrarClasses();}));
$('#busca').addEventListener('input',mostrarClasses);mostrarClasses();
for(const raca of racas){const card=elemento('article','raca-card');card.append(elemento('span','raca-icone',raca.icone),elemento('h3','',raca.nome),elemento('p','',raca.resumo));const botao=elemento('button','','Conhecer raça');botao.type='button';botao.addEventListener('click',()=>detalhar(raca,'#detalheRaca','RAÇA DE PERSONAGEM'));card.append(botao);$('#gradeRacas').append(card);}
// O formulário é reconstruído quando a classe muda, sem reaproveitar escolhas incompatíveis.
function montarEscolhas(salvas={}){
 const area=$('#escolhasClasse');area.replaceChildren();const r=regrasClasse[$('#classeSelect').value];if(!r)return;
 area.append(elemento('h4','','Proficiências da classe'));
 for(const [titulo,valor] of [['Armaduras',r.armaduras],['Armas',r.armas],['Ferramentas',r.ferramentas],['Resistências',r.resistencias.join(' e ')]])area.append(linhaValor(titulo,valor));
 area.append(elemento('h4','','Perícias · escolha '+r.quantidade));
 const grade=elemento('div','grade-pericias');
 for(const nome of r.pericias){const label=elemento('label','pericia-opcao');const input=elemento('input');input.type='checkbox';input.value=nome;input.name='periciaClasse';input.checked=(salvas.pericias||[]).includes(nome);label.append(input,document.createTextNode(' '+nome));grade.append(label);}
 grade.addEventListener('change',e=>{if(grade.querySelectorAll('input:checked').length>r.quantidade)e.target.checked=false;$('#contadorPericias').textContent=`${grade.querySelectorAll('input:checked').length} de ${r.quantidade} escolhidas`;});
 area.append(grade,elemento('p','contador-pericias',`${grade.querySelectorAll('input:checked').length} de ${r.quantidade} escolhidas`));area.lastElementChild.id='contadorPericias';
 area.append(elemento('h4','','Equipamento inicial'));
 r.grupos.forEach((grupo,i)=>{const label=elemento('label','escolha-item',`Escolha ${i+1}`);const select=elemento('select');select.name=`equip${i}`;grupo.forEach((texto,j)=>select.add(new Option(`${String.fromCharCode(65+j)} · ${texto}`,texto)));if(salvas.equipChosen?.[i]&&grupo.includes(salvas.equipChosen[i]))select.value=salvas.equipChosen[i];label.append(select);area.append(label);});
 area.append(elemento('p','itens-fixos','Itens fixos: '+(r.fixos.length?r.fixos.join(' · '):'nenhum')));
}
// Atribuições finais inseridas pelo jogador. Não somamos bônus raciais automaticamente.
for(let i=0;i<6;i++){const bloco=elemento('div','atributo');const label=elemento('label','',nomesAtributos[i]);const input=elemento('input');input.type='number';input.min='3';input.max='18';input.value='10';input.required=true;input.setAttribute('aria-label',nomesAtributos[i]);const out=elemento('output','','+0');input.addEventListener('input',()=>out.textContent=input.value?sinal(modificador(input.value)):'—');label.append(input);bloco.append(label,out);$('#atributos').append(bloco);}
const chave='grimorio-personagem-v2';
// Mantém fichas criadas na primeira versão ao abrir a nova página.
if(!localStorage.getItem(chave)){const anterior=localStorage.getItem('grimorio-personagem-v1');if(anterior)localStorage.setItem(chave,anterior);}
function linhaValor(rotulo,valor){const div=elemento('div','ficha-info');div.append(elemento('span','',rotulo),elemento('strong','',String(valor)));return div;}
function exibirFicha(p){
 const area=$('#fichaConteudo');area.replaceChildren();const c=classes.find(x=>x.nome===p.classe);if(!c)return;const r=regrasClasse[p.classe];
 const m=p.atributos.map(modificador);const inventario=[...r.fixos,...(p.equipChosen?.length?p.equipChosen:r.grupos.map(g=>g[0]))];
 let ca=10+m[1];const itens=inventario.join(' ').toLocaleLowerCase('pt-BR');
 if(c.nome==='Bárbaro')ca=10+m[1]+m[2];
 else if(c.nome==='Monge')ca=10+m[1]+m[4];
 else if(itens.includes('cota de malha'))ca=16;
 else if(itens.includes('cota de escamas'))ca=14+Math.min(2,m[1]);
 else if(itens.includes('armadura de couro'))ca=11+m[1];
 if(c.nome!=='Monge'&&itens.includes('escudo'))ca+=2;
 const pv=Math.max(1,c.dado+m[2]);area.append(elemento('h3','ficha-nome',p.nome),elemento('p','ficha-sub',`${p.raca} · ${p.classe} · Nível 1`));
 const principais=elemento('div','ficha-principais');[['PV',pv],['CA',ca],['Iniciativa',sinal(m[1])],['Proficiência','+2']].forEach(([n,v])=>{const d=elemento('div','ficha-principal');d.append(elemento('strong','',String(v)),elemento('span','',n));principais.append(d);});area.append(principais);
 const stats=elemento('div','ficha-stats');p.atributos.forEach((v,i)=>{const d=elemento('div','ficha-stat');d.append(elemento('strong','',sinal(m[i])),elemento('span','',`${abrev[i]} · ${v}`));stats.append(d);});area.append(stats);
 area.append(elemento('h4','ficha-bloco-titulo','Detalhes'),linhaValor('Dado de vida',`d${c.dado}`),linhaValor('Percepção passiva',10+m[4]+(p.pericias?.includes('Percepção')||p.raca==='Elfo'?2:0)),linhaValor('Armaduras',r.armaduras),linhaValor('Armas',r.armas),linhaValor('Ferramentas',r.ferramentas),linhaValor('Resistências',r.resistencias.map(nome=>`${nome} ${sinal(m[nomesAtributos.indexOf(nome)]+2)}`).join(' · ')));if(p.pericias?.length){area.append(elemento('h4','ficha-bloco-titulo','Perícias escolhidas'));for(const nome of p.pericias)area.append(linhaValor(nome,sinal(m[atributoPericia[nome]]+2)));} 
 if(p.antecedente)area.append(linhaValor('Antecedente',p.antecedente));if(p.alinhamento)area.append(linhaValor('Alinhamento',p.alinhamento));if(p.jogador)area.append(linhaValor('Jogador',p.jogador));
 area.append(elemento('h4','ficha-bloco-titulo','Equipamento inicial sugerido'));const ul=elemento('ul','lista-itens');inventario.forEach(item=>ul.append(elemento('li','',item)));if(p.extras)ul.append(elemento('li','',p.extras));area.append(ul);
 area.append(elemento('p','ficha-ressalva','CA calculada com armadura e escudo escolhidos, sem efeitos de magias, subclasse ou estilo de luta. Confira com o mestre.'));
 $('#totalFichas').textContent='Ficha salva neste dispositivo';$('#limparFicha').hidden=false;
}
$('#formPersonagem').addEventListener('submit',evento=>{
 evento.preventDefault();const form=evento.currentTarget;const d=new FormData(form);const valores=[...$('#atributos').querySelectorAll('input')].map(x=>Number(x.value));const aviso=$('#avisoPersonagem');aviso.classList.remove('erro');
 const nome=String(d.get('nome')).trim();if(nome.length<2||!d.get('classe')||!d.get('raca')||valores.some(v=>!Number.isInteger(v)||v<3||v>18)){aviso.textContent='Confira nome, classe, raça e valores finais de 3 a 18.';aviso.classList.add('erro');return;}
 const r=regrasClasse[d.get('classe')];const pericias=[...$('#escolhasClasse').querySelectorAll('input[name=periciaClasse]:checked')].map(x=>x.value);if(pericias.length!==r.quantidade){aviso.textContent=`Escolha ${r.quantidade} perícias de classe.`;aviso.classList.add('erro');return;}const equipChosen=r.grupos.map((_,i)=>String(d.get(`equip${i}`)));const p={nome,classe:d.get('classe'),raca:d.get('raca'),pericias,equipChosen,antecedente:String(d.get('antecedente')).trim(),alinhamento:String(d.get('alinhamento')).trim(),jogador:String(d.get('jogador')).trim(),extras:String(d.get('extras')).trim(),atributos:valores};
 localStorage.setItem(chave,JSON.stringify(p));exibirFicha(p);aviso.textContent='Ficha salva. Você pode alterar os campos e salvar novamente.';
});
try{const salvo=JSON.parse(localStorage.getItem(chave));if(salvo&&Array.isArray(salvo.atributos)&&salvo.atributos.length===6&&classes.some(c=>c.nome===salvo.classe)){const form=$('#formPersonagem');for(const campo of ['nome','classe','raca','antecedente','alinhamento','jogador','extras'])if(form.elements[campo])form.elements[campo].value=salvo[campo]||'';montarEscolhas(salvo);[...$('#atributos').querySelectorAll('input')].forEach((x,i)=>{x.value=salvo.atributos[i];x.dispatchEvent(new Event('input'));});exibirFicha(salvo);}}catch{localStorage.removeItem(chave);}
$('#limparFicha').addEventListener('click',()=>{localStorage.removeItem(chave);$('#fichaConteudo').innerHTML='<div class="ficha-vazia"><span class="ficha-icone">◇</span><h3>Seu destino aguarda</h3><p>Preencha os campos ao lado para registrar seu herói.</p></div>';$('#totalFichas').textContent='Nenhuma ficha salva neste dispositivo';$('#limparFicha').hidden=true;$('#avisoPersonagem').textContent='Ficha excluída.';});
// O chat simula apenas uma tentativa de contato: não transmite mensagens.
function mensagem(texto,autor){const div=elemento('div',`mensagem ${autor}`);div.append(elemento('span','',autor==='npc'?'Sistema':'Você'),elemento('p','',texto));$('#mensagens').append(div);$('#mensagens').scrollTop=$('#mensagens').scrollHeight;}
const ausencia='Não há uma partida em andamento nesse instante. Para contatar o mestre, adicione ele no Discord: Monochrome9090.';
mensagem('Iniciando chat. Averigue se há uma partida em andamento para se comunicar por esse chat.','npc');
$('#formChat').addEventListener('submit',e=>{e.preventDefault();const input=e.currentTarget.elements.mensagem;const texto=input.value.trim();if(!texto)return;mensagem(texto,'jogador');input.value='';window.setTimeout(()=>mensagem(ausencia,'npc'),350);});
const menuBtn=$('#menuBtn'),menu=$('#menu');menuBtn.addEventListener('click',()=>{const aberto=menu.classList.toggle('aberto');menuBtn.setAttribute('aria-expanded',String(aberto));menuBtn.setAttribute('aria-label',aberto?'Fechar menu':'Abrir menu');});menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.classList.remove('aberto');menuBtn.setAttribute('aria-expanded','false');}));
