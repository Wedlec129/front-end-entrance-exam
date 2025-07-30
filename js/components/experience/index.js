import './styles.css';

const experienceSection = {
    title: "Experience",
    jobs: [
        {
            date: 'Jun. 2023 - Present',
            jobTitle: 'Marketing Manager',
            tag:'most recent',
            jobFormat: ['Pankayam', 'Full-time'],
            activities: [
                `Strategy development and planning of campaigns that promote the business and generate genuine traffic`,
                'SEO Content Creation for Blogs, Website, Social media'
            ]
        },
        {
            date: '2017 - Present',
            jobTitle: 'Graphic / Web designer',
            jobFormat: ['Freelance'],
            activities: [
                `Development of internal projects from scratch, product design of brands `,
                'Landing page, webapps and hybrid apps',
                'Coordinating with outside agencies, art services, web designer, marketing, printers, and colleagues as necessary.',
            ]
        },
        {
            date: 'Sep. 2021 - Jun. 2023',
            jobTitle: 'Legal Assistant',
            jobFormat: ['Law Firm', 'Intern'],
            activities: [
                'Provide administrative support to lawyer and enhance office effectiveness',
                'Handle communication with clients, witnesses etc.',
                'repare case briefs and summarize depositions, interrogatories and testimony'
            ]
        }
    ]
}
export function createExperienceSection() {
    const jobEls = experienceSection.jobs.map((job, index) => item(job, index)).join('');

    return `
<div class="exps__block island bg-second">
    <h2 contenteditable data-key="experience.title">${experienceSection.title}</h2>
    ${jobEls}
</div>
`
}


function item({date, jobTitle, jobFormat,tag, activities}, index) {
    const activitiesEls = activities.map((ac, y) => `<li class="sbt-3" contenteditable data-key="experience.item.${index}.activity.${y}">${ac}</li>`).join('');

    return `        
        <div class="exps__item">
            <div class="exps__item__topbar">
                <h4 contenteditable data-key="experience.item.${index}.date">${date}</h4>
               <div class="most_recent" style="${index === 0 ? '' : 'display:none'}">${tag}</div>
            </div>
            <div class="exps__item__content">
                <div>
                    <h3 contenteditable data-key="experience.item.${index}.jobTitle">${jobTitle}</h3>
                    <p class="content__description sbt-3">${jobFormat.join(' | ')}</p>
                </div>
                <ul class="exps__item__content__activities">
                    ${activitiesEls}
                </ul>
            </div>
        </div>
`
}
