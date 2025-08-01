import './styles.css'

const sections = [
    {
        title: 'design',
        icons: [
            'logoFigma.svg',
            'adobe photoshop_.svg',
            'adobe illustrator_.svg',
            'adobe premiere_.svg',
            'logoNotion.svg',
            'logoMeet.svg'
        ]
    },
    {
        title: 'no-code',
        icons: [
            'logoZapier1.svg',
            'logoWebflow.svg',
            'logoFramer.svg',
            'logoWordpress.svg',
        ]
    },
    {
        title: 'artificial intelligence',
        icons: [
            'logoGpt.png',
            'logoCopilot.png',
            'mitgerney.png'
            
        ]
    }
]

const sectionEls = sections.map(section => {
    const icons = section.icons.map(icon => `<img class="tools__item__logo" src="${icon}">`);

    return `<div class="tools__item bg-primary" data-title="${section.title}">${icons.join('')}</div>`
});
export function createToolsSection() {
    return `
<div class="tools island bg-second">
    <h2 contenteditable data-key="tools.title">Tools</h2>
    <div class="tools__list">${sectionEls.join('')}</div>
</div>`
}
