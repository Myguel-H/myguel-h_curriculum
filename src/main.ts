import './style.css';
import { personalData, certificates, educations, experiences, futuproj, proj } from './data';
import { renderCertificates, renderExperiences, renderEducations, renderFutureProjects } from './render';

function getEl(id: string): HTMLElement {
  const el = document.getElementById(id);
  if(!el) throw new Error(`Elemento #${id} não encontrado no HTML.`);
  return el;
}

getEl ("name").textContent = personalData.name;
getEl ("location").textContent = personalData.location;

const contactItems: { label: string; value: string }[] = [];
if (personalData.email) contactItems.push({ label: "", value: personalData.email });
const contactEl = getEl ("contact");
contactEl.innerHTML = contactItems
  .map((item) =>
    `<span class="contact-item"><span class="contact-label">${item.label}</span><span class="contact-value">${item.value}</span></span>`
  )
  .join ("");

renderExperiences(getEl("experiences"), experiences);
renderEducations(getEl("educations"), educations);
renderCertificates(getEl("certificates"), certificates);
renderFutureProjects(getEl("proj"), proj);
renderFutureProjects(getEl("futuproj"), futuproj);
