import type { Experience, Certificate, Education, Projects, FutureProjects } from "./types";


export function renderEducations(
    container:HTMLElement,
    list: Education[] 
): void {
    container.innerHTML = list
    .map(
        (edu) => `
        <article class="item">
        <h3>${edu.institution}</h3>
        <p class="period">${edu.duration}</p>
        <p class="content">${edu.summary}</p>
    `
    )
    .join("");
}   

export function renderExperiences(
    container: HTMLElement,
    list: Experience[]
): void {
    container.innerHTML = list
        .map(
            (exp) => `
            <article class="item">
                <h3>${exp.position} - ${exp.company}</h3>
                <p class="period" style="margin-bottom: 08px;">${exp.period}</p>
                <p class="about">${exp.description}</p>
                <p class="period" style="font-weight: bold; margin-top: 10px;">Setor: ${exp.sector}</p>
            </article>
            `
        )
        .join("");
}

export function renderCertificates(
    container: HTMLElement,
    list: Certificate[]
): void {
    container.innerHTML = list
        .map(
            (cert) => `
        <article class="item">
            <h3>${cert.name}</h3>
            <p class="period">${cert.institution} - ${cert.duration}</p>
        
        `
        )
        .join("");
}

export function Projects (
    container: HTMLElement,
    list: Projects[]
): void {
    container.innerHTML = list
    .map(
        (proj) => `
        <article class="item">
        <h3>${proj.name}</h3>
        <p>${proj.description}</p>
        <p>${proj.link}</p>
        `
    )
    .join("");
}


export function  renderFutureProjects(
    container:HTMLElement,
    list: FutureProjects[]
): void {
    container.innerHTML = list
    .map(
        (futuproj) => `
        <article class="item">
        <h3>${futuproj.name}</h3>
        <p class="content" >${futuproj.description}</p>
        `
    )
    .join("");
}

