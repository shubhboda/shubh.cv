// Minimal site script: replace these sample values with your real data
const data = {
  name: 'Boda Shubh',
  title: 'B.Tech (IT) — 3rd year, 5th semester',
  location: 'Baroda, Gujarat',
  email: 'shubhboda@gmail.com',
  phone: '',
  about: 'I am a 3rd-year B.Tech (IT) student at Parul University. I enjoy building web applications with a focus on frontend development and modern JavaScript frameworks. I also know C++ and Java and practice Data Structures & Algorithms (DSA).',
  skills: [
    // Frontend
    'HTML5','CSS3','JavaScript (ES6+)','TypeScript','React.js','Next.js',
    // Backend
    'Node.js','Express.js','Python (APIs - basics)',
    // Database / Cloud
    'MongoDB','AWS (basic)',
    // Languages & DSA
    'C++','Java','Data Structures & Algorithms (DSA)'
  ],
  projects: [
    {title:'Portfolio Website',tech:'React • HTML • CSS',desc:'Personal portfolio site showcasing projects and contact info. Deployed on GitHub Pages.',link:'https://github.com/shubhboda'},
    {title:'Simple REST API',tech:'Node.js • Express • MongoDB',desc:'REST API for managing sample data; includes CRUD routes and basic auth.',link:'https://github.com/shubhboda'}
  ],
  resume: '', // set to a relative path like 'assets/Resume.pdf' if you add one
  github: 'https://github.com/shubhboda',
  linkedin: 'https://www.linkedin.com/in/shubh-boda-9292822b',
  twitter: ''
}

document.addEventListener('DOMContentLoaded', ()=>{
  document.getElementById('name').textContent = data.name
  document.getElementById('title').textContent = data.title
  document.getElementById('location').textContent = `${data.location} • ${data.email} ${data.phone? '• '+data.phone : ''}`
  const metaEl = document.getElementById('meta')
  if(metaEl) metaEl.textContent = 'DOB: 10/11/2005 • University: Parul University'
  document.getElementById('aboutText').textContent = data.about
  document.getElementById('emailLink').href = `mailto:${data.email}`

  // Group skills into categories
  const frontend = ['HTML5','CSS3','JavaScript (ES6+)','TypeScript','React.js','Next.js']
  const backend = ['Node.js','Express.js','Python (APIs - basics)']
  const infra = ['MongoDB','AWS (basic)']
  const langs = ['C++','Java','Data Structures & Algorithms (DSA)']

  function renderList(id, arr){
    const el = document.getElementById(id)
    if(!el) return
    arr.forEach(s=>{
      const chip = document.createElement('div')
      chip.className = 'chip'
      chip.textContent = s
      el.appendChild(chip)
    })
  }

  renderList('skillsFrontend', frontend)
  renderList('skillsBackend', backend)
  renderList('skillsLang', langs)
  renderList('skillsInfra', infra)

  const projectsList = document.getElementById('projectsList')
  data.projects.forEach(p=>{
    const card = document.createElement('article')
    card.className = 'card'
    card.innerHTML = `
      <h3>${p.title}</h3>
      <p class="meta">${p.tech || ''}</p>
      <p>${p.desc}</p>
      ${p.link?`<p><a href="${p.link}" target="_blank" rel="noopener" class="btn ghost">View Project</a></p>`:''}
    `
    projectsList.appendChild(card)
  })

  // Social links
  const github = document.getElementById('githubLink')
  if(github) github.href = data.github || '#'
  const linkedin = document.getElementById('linkedinLink')
  if(linkedin) linkedin.href = data.linkedin || '#'
  const twitter = document.getElementById('twitterLink')
  if(twitter) twitter.href = data.twitter || '#'

  const resumeLink = document.getElementById('resumeLink')
  if(data.resume){
    resumeLink.href = data.resume
  } else {
    resumeLink.style.display = 'none'
  }
})
