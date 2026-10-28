(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))p(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&p(r)}).observe(document,{childList:!0,subtree:!0});function d(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function p(t){if(t.ep)return;t.ep=!0;const o=d(t);fetch(t.href,o)}})();const $=new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}),T=document.querySelector("#app"),q=[["Aluguel / espaço",1200],["Luz, água e internet",250],["Celular e aplicativos",90],["MEI / contador",80],["Marketing e anúncios",150],["Manutenção e lavanderia",100],["Seu pró-labore (salário)",3e3]];T.innerHTML=`
  <div class="app-shell">
    <aside class="sidebar" aria-label="Navegação principal">
      <div class="brand-lockup"><div class="brand-mark">E</div><span class="brand-name">ESTEFANI FERREIRA</span></div>
      <div class="sidebar-intro"><span class="eyebrow">ESTÉTICA COM INTENÇÃO</span><p>Uma forma mais clara de valorizar cada atendimento.</p></div>
      <nav class="sidebar-nav"><a href="#calculadora" class="nav-item active">＋ <span>Calculadora</span></a><a href="#tabela" class="nav-item">▤ <span>Minha tabela</span></a></nav>
      <div class="sidebar-footer"><div class="footer-line"></div><span>CUIDE. VALORIZE. ENCANTE.</span></div>
    </aside>

    <main class="main-content">
      <header class="topbar"><div><span class="breadcrumb">ESTEFANI FERREIRA / PRECIFICAÇÃO</span><p class="topbar-title">Calculadora de Preço &amp; Lucro</p></div><button class="help-button" id="help-button" type="button">?<span>Como usar</span></button></header>
      <section class="hero-copy" id="calculadora"><div><span class="eyebrow">MAIS CLAREZA SOBRE SEUS NÚMEROS</span><h1>Seu preço precisa<br>pagar <em>tudo.</em></h1><p>Inclua os custos do seu espaço, o seu tempo e o lucro que deseja ter em cada procedimento.</p></div><div class="hero-stamp"><span>VALOR</span><strong>+</strong><span>CLAREZA</span></div></section>

      <section class="calculator-layout" aria-label="Calculadora de preço e lucro">
        <div class="left-column">
          <section class="panel form-panel">
            <div class="section-heading"><div><span class="section-number">01</span><h2>Seus custos do mês</h2></div><span class="small-note">mesmo sem cliente</span></div>
            <p class="section-lead">Tudo o que você paga todo mês para manter o atendimento, mesmo sem cliente.</p>
            <div id="cost-list"></div>
            <button class="add-button" id="add-cost" type="button">＋ Adicionar custo</button>
            <div class="monthly-total"><span>Total por mês</span><strong id="monthly-total">R$ 0,00</strong></div>
          </section>

          <section class="panel form-panel">
            <div class="section-heading"><div><span class="section-number">02</span><h2>Seu tempo de trabalho</h2></div></div>
            <div class="fields-row three-fields">
              <label>Dias por semana<input id="days" type="number" min="1" step="1" value="5"><small>dias de atendimento</small></label>
              <label>Horas por dia<input id="hours" type="number" min="1" step="0.5" value="8"><small>horas atendendo</small></label>
              <label>Agenda ocupada<input id="occupancy" type="number" min="1" max="100" step="1" value="65"><small>média realista (%)</small></label>
            </div>
            <div class="hour-cost"><span>Seu custo por hora atendendo</span><strong id="hourly-cost">R$ 0,00</strong></div>
          </section>

          <section class="panel form-panel">
            <div class="section-heading"><div><span class="section-number">03</span><h2>O procedimento</h2></div></div>
            <label class="wide-label">Nome do procedimento<input id="procedure-name" type="text" placeholder="Ex.: Limpeza de pele profunda"></label>
            <div class="fields-row two-fields">
              <label>Duração com preparo<input id="minutes" type="number" min="1" step="5" value="60"><small>minutos</small></label>
              <label>Materiais e descartáveis<input id="materials" type="number" min="0" step="0.01" value="20"><small>gasto por atendimento</small></label>
              <label>Taxa da maquininha / comissão<input id="card-fee" type="number" min="0" max="99" step="0.5" value="4"><small>percentual</small></label>
              <label>Impostos (MEI / Simples)<input id="taxes" type="number" min="0" max="99" step="0.5" value="6"><small>percentual</small></label>
            </div>
            <label class="wide-label">Lucro que você quer ter <span class="label-help">Além do seu salário, para reinvestir e crescer.</span><input id="profit-goal" type="number" min="0" max="90" step="1" value="30"><small>percentual desejado por atendimento</small></label>
            <label class="wide-label">Quanto você cobra hoje <span class="optional">opcional</span><input id="current-price" type="number" min="0" step="0.01" placeholder="0,00"><small>compare com o preço ideal.</small></label>
            <button class="save-button" id="save-procedure" type="button">＋ Salvar na minha tabela de preços</button>
          </section>
        </div>

        <div class="results-column">
          <section class="panel ideal-panel"><span class="result-kicker">PREÇO IDEAL</span><strong id="ideal-price">R$ 0,00</strong><p>Cobre todos os custos, as taxas, os impostos e ainda deixa o lucro que você escolheu.</p></section>
          <section class="panel breakdown-panel"><div class="breakdown-row"><span>Preço mínimo (sem lucro)</span><strong id="minimum-price">R$ 0,00</strong></div><div class="breakdown-row"><span>Custo do seu tempo</span><strong id="time-cost">R$ 0,00</strong></div><div class="breakdown-row"><span>Materiais</span><strong id="materials-result">R$ 0,00</strong></div><div class="breakdown-row"><span>Taxas + impostos</span><strong id="tax-result">R$ 0,00</strong></div><div class="breakdown-row"><span>Seu lucro por atendimento</span><strong id="profit-result">R$ 0,00</strong></div><div class="bar-chart"><i></i><i></i><i></i><i></i></div><div class="chart-legend"><span>Tempo</span><span>Materiais</span><span>Taxas</span><span>Lucro</span></div><div class="appointments-note">Atendimentos por mês para pagar os custos <strong id="appointments-needed">0 atendimentos</strong></div><div class="comparison" id="comparison"></div></section>
          <section class="insight-card"><span class="insight-icon">✦</span><div><strong>Uma escolha consciente muda tudo.</strong><p id="insight">Ajuste seus números para descobrir um preço que respeita o seu trabalho.</p></div></section>
        </div>
      </section>

      <section class="table-section" id="tabela"><div class="table-heading"><div><span class="eyebrow">PARA CONSULTAR DEPOIS</span><h2>Minha tabela de preços</h2></div><button class="outline-button" id="clear-saved" type="button">Limpar tabela</button></div><div id="saved-table" class="saved-table"><p class="empty-table">Salve um procedimento para começar sua tabela.</p></div></section>
      <footer class="page-footer"><span>ESTEFANI FERREIRA · FERRAMENTA DE PRECIFICAÇÃO</span><span>Feito para valorizar o seu trabalho.</span></footer>
    </main>
  </div>
  <div class="modal-backdrop" id="help-modal" hidden><div class="help-modal"><button class="modal-close" id="modal-close" type="button">×</button><span class="eyebrow">COMO USAR</span><h2>Comece pelos custos.</h2><p>Cadastre tudo o que sai do seu caixa todos os meses. Depois informe seus dias, horas e ocupação média, porque nem toda hora disponível vira atendimento.</p><p>Por fim, preencha o procedimento. O preço ideal considera o custo do seu tempo, materiais, taxas, impostos e o lucro que você deseja ter.</p></div></div>
  <div class="toast" id="toast"></div>
`;const a=e=>document.querySelector(e),n=e=>Number.isFinite(e)?$.format(e):"—",l=e=>{const s=Number(String(e??"").replace(",","."));return Number.isFinite(s)?s:0};["days","hours","occupancy","minutes","materials","card-fee","taxes","profit-goal","current-price"].map(e=>a(`#${e}`));function C(e=q){a("#cost-list").innerHTML=e.map(([s,d],p)=>`<div class="cost-row" data-index="${p}"><input class="cost-name" aria-label="Nome do custo" placeholder="Nome do custo" value="${s}"><div class="money-input"><span>R$</span><input class="cost-value" aria-label="Valor mensal" type="number" min="0" step="0.01" value="${d}"></div><button class="remove-cost" type="button" aria-label="Remover custo">×</button></div>`).join("")}function R(){return[...document.querySelectorAll(".cost-row")].map(e=>[e.querySelector(".cost-name").value,l(e.querySelector(".cost-value").value)])}function h(){const s=R().reduce((m,[,v])=>m+v,0),d=Math.max(l(a("#days").value),1),p=Math.max(l(a("#hours").value),1),t=Math.min(Math.max(l(a("#occupancy").value),1),100),o=d*4.33*p*(t/100),r=s/o,x=Math.max(l(a("#minutes").value),1),f=Math.max(l(a("#materials").value),0),u=Math.max(l(a("#card-fee").value),0)+Math.max(l(a("#taxes").value),0),A=Math.max(l(a("#profit-goal").value),0),E=r*(x/60)+f,L=u<100?E/(1-u/100):0,i=u+A<100?E/(1-(u+A)/100):0,S=i*u/100,g=i-E-S,I=i>0?Math.ceil(s/i):0,c=l(a("#current-price").value);a("#monthly-total").textContent=n(s),a("#hourly-cost").textContent=n(r),a("#minimum-price").textContent=n(L),a("#ideal-price").textContent=n(i),a("#time-cost").textContent=n(r*(x/60)),a("#materials-result").textContent=n(f),a("#tax-result").textContent=n(S),a("#profit-result").textContent=n(g),a("#appointments-needed").textContent=`${I} atendimentos`,a("#comparison").textContent=c>0?c>=i?`Seu preço atual está ${n(c-i)} acima do ideal.`:`Para chegar ao ideal, faltam ${n(i-c)} no preço atual.`:"";const N=document.querySelectorAll(".bar-chart i"),M=[r*(x/60),f,S,Math.max(g,0)],O=M.reduce((m,v)=>m+v,0)||1;return N.forEach((m,v)=>{m.style.flex=`${Math.max(M[v]/O,.04)}`}),a("#insight").textContent=c>0&&c<i?`Seu preço atual está abaixo do ideal. Reavalie pelo menos ${n(i-c)} para cobrir tudo.`:`Com ${n(g)} de lucro por atendimento, seu preço respeita os custos e o objetivo informado.`,{monthlyTotal:s,hourlyCost:r,minimum:L,ideal:i,materials:f,fees:u,profit:g,current:c,procedure:a("#procedure-name").value||"Procedimento"}}function y(){const e=JSON.parse(localStorage.getItem("estefani-prices")||"[]");a("#saved-table").innerHTML=e.length?e.map((s,d)=>`<div class="saved-row"><div><strong>${s.procedure}</strong><span>${s.minutes} min · ${s.fees}% taxas</span></div><b>${n(s.ideal)}</b><button type="button" data-remove="${d}" aria-label="Remover procedimento">×</button></div>`).join(""):'<p class="empty-table">Salve um procedimento para começar sua tabela.</p>'}C();h();y();document.addEventListener("input",e=>{e.target.matches("input")&&h()});a("#add-cost").addEventListener("click",()=>{const e=R();e.push(["Novo custo",0]),C(e),h()});a("#cost-list").addEventListener("click",e=>{if(e.target.matches(".remove-cost")){const s=R();s.splice(Number(e.target.closest(".cost-row").dataset.index),1),C(s),h()}});a("#save-procedure").addEventListener("click",()=>{const e=h(),s=JSON.parse(localStorage.getItem("estefani-prices")||"[]");s.push({...e,minutes:l(a("#minutes").value),fees:e.fees}),localStorage.setItem("estefani-prices",JSON.stringify(s)),y(),w("Procedimento salvo na sua tabela.")});a("#saved-table").addEventListener("click",e=>{if(e.target.dataset.remove!==void 0){const s=JSON.parse(localStorage.getItem("estefani-prices")||"[]");s.splice(Number(e.target.dataset.remove),1),localStorage.setItem("estefani-prices",JSON.stringify(s)),y()}});a("#clear-saved").addEventListener("click",()=>{localStorage.removeItem("estefani-prices"),y(),w("Tabela limpa.")});const b=a("#help-modal");a("#help-button").addEventListener("click",()=>{b.hidden=!1});a("#modal-close").addEventListener("click",()=>{b.hidden=!0});b.addEventListener("click",e=>{e.target===b&&(b.hidden=!0)});function w(e){const s=a("#toast");s.textContent=e,s.classList.add("show"),setTimeout(()=>s.classList.remove("show"),2500)}
