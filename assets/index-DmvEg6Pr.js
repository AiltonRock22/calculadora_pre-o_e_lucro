(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();const w=new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL",minimumFractionDigits:2}),F=new Intl.NumberFormat("pt-BR",{minimumFractionDigits:1,maximumFractionDigits:1}),N=document.querySelector("#app");N.innerHTML=`
  <div class="app-shell">
    <aside class="sidebar" aria-label="Navegação principal">
      <div class="brand-lockup">
        <div class="brand-mark" aria-hidden="true">E</div>
        <span class="brand-name">ESTEFANI FERREIRA</span>
      </div>

      <div class="sidebar-intro">
        <span class="eyebrow">ESTÉTICA COM INTENÇÃO</span>
        <p>Cuidado, técnica e resultado em cada atendimento.</p>
      </div>

      <nav class="sidebar-nav">
        <a class="nav-item" href="#inicio" data-nav="inicio">
          <span class="nav-icon">⌂</span>
          <span>Visão geral</span>
        </a>
        <a class="nav-item active" href="#calculadora" data-nav="calculadora">
          <span class="nav-icon">＋</span>
          <span>Preço &amp; lucro</span>
        </a>
        <a class="nav-item" href="#tabela" data-nav="tabela">
          <span class="nav-icon">▤</span>
          <span>Minha tabela</span>
        </a>
      </nav>

      <div class="sidebar-footer">
        <div class="footer-line"></div>
        <span>CUIDE. VALORIZE. ENCANTE.</span>
      </div>
    </aside>

    <main class="main-content">
      <header class="topbar">
        <div>
          <span class="breadcrumb">ESTEFANI FERREIRA / PRECIFICAÇÃO</span>
          <p class="topbar-title">Calculadora de preço &amp; lucro</p>
        </div>
        <button class="help-button" type="button" id="help-button" aria-label="Abrir ajuda">
          <span>?</span>
          <span class="help-label">Como usar</span>
        </button>
      </header>

      <section class="hero-copy" id="calculadora">
        <div>
          <span class="eyebrow">MAIS CLAREZA SOBRE SEUS NÚMEROS</span>
          <h1>Precifique com <em>intenção.</em></h1>
          <p>Preencha os custos do seu produto ou serviço e descubra um preço que respeita o seu trabalho.</p>
        </div>
        <div class="hero-stamp" aria-hidden="true">
          <span>VALOR</span>
          <strong>+</strong>
          <span>CLAREZA</span>
        </div>
      </section>

      <section class="calculator-layout" aria-label="Calculadora de preço e lucro">
        <form class="panel inputs-panel" id="calculator-form" novalidate>
          <div class="panel-heading">
            <div>
              <span class="section-number">01</span>
              <h2>Seus números</h2>
            </div>
            <span class="small-note">Edite os campos abaixo</span>
          </div>

          <div class="field-group">
            <label for="cost">Custo do produto ou serviço <span class="required">*</span></label>
            <div class="input-wrap currency-wrap">
              <span class="input-prefix">R$</span>
              <input id="cost" name="cost" inputmode="decimal" autocomplete="off" value="120,00" aria-describedby="cost-hint" />
            </div>
            <span class="field-hint" id="cost-hint">Quanto você gasta para entregar o que vende.</span>
          </div>

          <div class="field-group">
            <label for="extras">Custos extras <span class="optional">opcional</span></label>
            <div class="input-wrap currency-wrap">
              <span class="input-prefix">R$</span>
              <input id="extras" name="extras" inputmode="decimal" autocomplete="off" value="0,00" />
            </div>
            <span class="field-hint">Embalagem, deslocamento, materiais ou outros custos.</span>
          </div>

          <div class="fields-row">
            <div class="field-group">
              <label for="fees">Taxas</label>
              <div class="input-wrap percentage-wrap">
                <input id="fees" name="fees" inputmode="decimal" autocomplete="off" value="10,00" />
                <span class="input-suffix">%</span>
              </div>
              <span class="field-hint">Cartão, plataforma ou impostos.</span>
            </div>
            <div class="field-group">
              <label for="margin">Margem desejada</label>
              <div class="input-wrap percentage-wrap">
                <input id="margin" name="margin" inputmode="decimal" autocomplete="off" value="20,00" />
                <span class="input-suffix">%</span>
              </div>
              <span class="field-hint">Quanto deseja que sobre para você.</span>
            </div>
          </div>

          <div class="divider"></div>

          <div class="field-group sale-field">
            <div class="label-with-badge">
              <label for="sale">Preço de venda praticado</label>
              <span class="optional">opcional</span>
            </div>
            <div class="input-wrap currency-wrap emphasized-input">
              <span class="input-prefix">R$</span>
              <input id="sale" name="sale" inputmode="decimal" autocomplete="off" placeholder="Deixe vazio para usar o recomendado" />
            </div>
            <span class="field-hint">Compare um preço que você já pratica com a sugestão.</span>
          </div>

          <div class="form-actions">
            <button class="text-button" type="button" id="clear-button">Limpar campos</button>
            <span class="live-indicator"><span></span> Atualização automática</span>
          </div>
          <div class="form-error" id="form-error" role="alert" aria-live="polite"></div>
        </form>

        <div class="results-column">
          <section class="panel recommendation-panel">
            <div class="panel-heading compact-heading">
              <div>
                <span class="section-number">02</span>
                <h2>Preço recomendado</h2>
              </div>
              <span class="sparkle" aria-hidden="true">✦</span>
            </div>
            <div class="recommendation-value" id="recommended-price">R$ 0,00</div>
            <p class="result-caption">Esse é o valor mínimo sugerido para alcançar a margem que você deseja, depois das taxas.</p>
            <div class="recommendation-meta">
              <div><span>Custo total</span><strong id="total-cost">R$ 0,00</strong></div>
              <div><span>Taxas estimadas</span><strong id="estimated-fees">R$ 0,00</strong></div>
            </div>
          </section>

          <section class="panel profit-panel">
            <div class="panel-heading compact-heading">
              <div>
                <span class="section-number">03</span>
                <h2>Seu resultado</h2>
              </div>
              <span class="result-status" id="result-status">Aguardando dados</span>
            </div>
            <div class="metrics-grid">
              <div class="metric-card primary-metric">
                <span>Lucro estimado</span>
                <strong id="profit-value">R$ 0,00</strong>
                <small>por venda</small>
              </div>
              <div class="metric-card">
                <span>Margem efetiva</span>
                <strong id="margin-value">0,0%</strong>
                <small>sobre o preço</small>
              </div>
            </div>
            <div class="margin-track" aria-label="Progresso da margem">
              <div class="track-labels"><span>Margem atual</span><span id="track-label">0%</span></div>
              <div class="track"><div class="track-fill" id="track-fill"></div></div>
            </div>
          </section>

          <section class="insight-card" id="insight-card">
            <span class="insight-icon">✦</span>
            <div>
              <strong>Uma escolha consciente muda tudo.</strong>
              <p id="insight-text">Ajuste os números ao lado para ver como pequenas mudanças impactam seu resultado.</p>
            </div>
          </section>
        </div>
      </section>

      <section class="table-section" id="tabela">
        <div class="table-heading">
          <div>
            <span class="eyebrow">PARA CONSULTAR DEPOIS</span>
            <h2>Resumo da sua formação de preço</h2>
          </div>
          <button class="outline-button" type="button" id="copy-button">Copiar resumo <span>↗</span></button>
        </div>
        <div class="summary-table" role="table" aria-label="Resumo dos cálculos">
          <div class="summary-row summary-header" role="row">
            <span>Item</span><span>Valor</span><span>O que significa</span>
          </div>
          <div class="summary-row" role="row">
            <span>Preço recomendado</span><strong id="table-recommended">R$ 0,00</strong><span>Preço para atingir a margem desejada</span>
          </div>
          <div class="summary-row" role="row">
            <span>Preço analisado</span><strong id="table-sale">R$ 0,00</strong><span>Preço praticado ou recomendado</span>
          </div>
          <div class="summary-row" role="row">
            <span>Lucro por venda</span><strong id="table-profit">R$ 0,00</strong><span>Depois do custo e das taxas</span>
          </div>
        </div>
      </section>

      <footer class="page-footer">
        <span>ESTEFANI FERREIRA · FERRAMENTA DE PRECIFICAÇÃO</span>
        <span>Feito para valorizar o seu trabalho.</span>
      </footer>
    </main>
  </div>

  <div class="modal-backdrop" id="help-modal" hidden>
    <div class="help-modal" role="dialog" aria-modal="true" aria-labelledby="help-title">
      <button class="modal-close" type="button" id="modal-close" aria-label="Fechar ajuda">×</button>
      <span class="eyebrow">COMO USAR</span>
      <h2 id="help-title">Comece pelo custo.</h2>
      <p>Informe quanto custa entregar seu produto ou serviço. Depois, escolha a margem que gostaria de ter e acrescente as taxas que reduzem o valor recebido.</p>
      <p>O preço recomendado considera tudo isso. Se quiser comparar com um preço que já pratica, preencha o campo “Preço de venda praticado”.</p>
    </div>
  </div>

  <div class="toast" id="toast" role="status" aria-live="polite"></div>
`;const n={cost:document.querySelector("#cost"),extras:document.querySelector("#extras"),fees:document.querySelector("#fees"),margin:document.querySelector("#margin"),sale:document.querySelector("#sale")},e={recommended:document.querySelector("#recommended-price"),totalCost:document.querySelector("#total-cost"),estimatedFees:document.querySelector("#estimated-fees"),profit:document.querySelector("#profit-value"),margin:document.querySelector("#margin-value"),status:document.querySelector("#result-status"),trackLabel:document.querySelector("#track-label"),trackFill:document.querySelector("#track-fill"),insight:document.querySelector("#insight-text"),tableRecommended:document.querySelector("#table-recommended"),tableSale:document.querySelector("#table-sale"),tableProfit:document.querySelector("#table-profit"),error:document.querySelector("#form-error")},u=a=>{const s=String(a??"").trim().replace(/R\$\s?/gi,"").replace(/\s/g,"");if(!s)return Number.NaN;const r=s.includes(",")?s.replace(/\./g,"").replace(",","."):s,l=Number(r.replace(/[^\d.-]/g,""));return Number.isFinite(l)?l:Number.NaN},c=a=>Number.isFinite(a)?w.format(a):"—",y=a=>Number.isFinite(a)?`${F.format(a)}%`:"—",L=(a,s,r)=>Math.min(Math.max(a,s),r);function A(a){const{cost:s,extras:r,fees:l,margin:t,sale:o}=a,i=[];if((!Number.isFinite(s)||s<=0)&&i.push("Informe um custo maior que zero."),(!Number.isFinite(r)||r<0)&&i.push("Os custos extras precisam ser zero ou maiores."),(!Number.isFinite(l)||l<0||l>=100)&&i.push("As taxas devem ficar entre 0% e 99,9%."),(!Number.isFinite(t)||t<0||t>=100)&&i.push("A margem deve ficar entre 0% e 99,9%."),Number.isFinite(l)&&Number.isFinite(t)&&l+t>=100&&i.push("Taxas + margem precisam somar menos de 100%."),Number.isFinite(o)&&o<0&&i.push("O preço praticado não pode ser negativo."),i.length){e.error.textContent=i[0],e.error.classList.add("visible"),e.status.textContent="Revise os dados",e.status.className="result-status warning",e.recommended.textContent="—",e.totalCost.textContent=Number.isFinite(s)&&Number.isFinite(r)?c(s+r):"—",e.estimatedFees.textContent="—",e.profit.textContent="—",e.margin.textContent="—",e.trackLabel.textContent="—",e.trackFill.style.width="0%",e.tableRecommended.textContent="—",e.tableSale.textContent="—",e.tableProfit.textContent="—",e.insight.textContent=i[0];return}e.error.textContent="",e.error.classList.remove("visible");const g=s+r,S=l/100,R=t/100,q=1-S-R,p=g/q,d=Number.isFinite(o)&&o>0?o:p,E=d*S,m=d-g-E,v=d>0?m/d*100:0,h=d>=p-.005;e.recommended.textContent=c(p),e.totalCost.textContent=c(g),e.estimatedFees.textContent=c(E),e.profit.textContent=c(m),e.profit.classList.toggle("negative",m<0),e.margin.textContent=y(v),e.status.textContent=h?"Preço saudável":"Abaixo da meta",e.status.className=`result-status ${h?"positive":"warning"}`,e.trackLabel.textContent=y(v),e.trackFill.style.width=`${L(v,0,100)}%`,e.trackFill.classList.toggle("low",v<t),e.tableRecommended.textContent=c(p),e.tableSale.textContent=c(d),e.tableProfit.textContent=c(m),m<0?e.insight.textContent="Este preço ainda não cobre todos os custos. Experimente aumentar o valor de venda ou reduzir as taxas.":h?v>t+5?e.insight.textContent="Você está acima da margem desejada. Esse espaço pode ser uma boa proteção para imprevistos.":e.insight.textContent="Seu preço cobre os custos e deixa uma margem coerente com o objetivo informado.":e.insight.textContent=`Para alcançar ${y(t)} de margem, o preço precisa subir ${c(p-d)}.`}function x(){A({cost:u(n.cost.value),extras:u(n.extras.value||"0"),fees:u(n.fees.value||"0"),margin:u(n.margin.value||"0"),sale:u(n.sale.value)})}Object.values(n).forEach(a=>a.addEventListener("input",x));n.sale.addEventListener("blur",()=>{n.sale.value&&Number.isFinite(u(n.sale.value))&&(n.sale.value=u(n.sale.value).toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2}))});document.querySelector("#clear-button").addEventListener("click",()=>{n.cost.value="",n.extras.value="0,00",n.fees.value="0,00",n.margin.value="0,00",n.sale.value="",x(),n.cost.focus()});document.querySelector("#copy-button").addEventListener("click",async()=>{const a=`Resumo de precificação\\nPreço recomendado: ${e.tableRecommended.textContent}\\nPreço analisado: ${e.tableSale.textContent}\\nLucro por venda: ${e.tableProfit.textContent}`;try{await navigator.clipboard.writeText(a),f("Resumo copiado.")}catch{f("Selecione e copie o resumo manualmente.")}});const b=document.querySelector("#help-modal"),P=()=>{b.hidden=!1,document.querySelector("#modal-close").focus()},C=()=>{b.hidden=!0};document.querySelector("#help-button").addEventListener("click",P);document.querySelector("#modal-close").addEventListener("click",C);b.addEventListener("click",a=>{a.target===b&&C()});document.addEventListener("keydown",a=>{a.key==="Escape"&&!b.hidden&&C()});document.querySelectorAll("[data-nav]").forEach(a=>a.addEventListener("click",s=>{s.preventDefault();const r=document.querySelector(`#${a.dataset.nav==="tabela"?"tabela":"calculadora"}`);r==null||r.scrollIntoView({behavior:"smooth",block:"start"})}));function f(a){const s=document.querySelector("#toast");s.textContent=a,s.classList.add("show"),window.clearTimeout(f.timer),f.timer=window.setTimeout(()=>s.classList.remove("show"),2600)}x();
