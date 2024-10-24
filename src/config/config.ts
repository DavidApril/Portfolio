import logoCommunity from '@/images/logos/planetaria.svg'
import logoDevZeros from '@/images/logos/airbnb.svg'

const data = {
  main_layout: {
    metadata: {
      title: {
        template: '%s - David Agámez',
        default: 'David Agámez - Software engineering student & CEO',
      },
      description:
        'I’m David, a software engineering student and entrepreneur based in Valledupar, Colombia. I’m the founder and CEO of Community, where we develop technologies that empower people to explore the web on their own terms.',
      alternates: {
        types: {
          'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
        },
      },
    },
  },

  home: {
    title: 'David Agámez',
    role: 'Software Engineering Student & CEO of Community',
    description:
      'I’m David, a software engineering student and entrepreneur based in Valledupar, Colombia. I lead Community, where we empower individuals through web technologies.',
    newsletter: {
      title: 'Subscribe',
      description:
        'I write about software design, company building, and the aerospace industry.',
      btn_label: 'Join',
      placeholder: 'Email address',
    },

    testimonials: {
      featuredTestimonial: {
        body: 'Integer id nunc sit semper purus. Bibendum at lacus ut arcu blandit montes vitae auctor libero. Hac condimentum dignissim nibh vulputate ut nunc. Amet nibh orci mi venenatis blandit vel et proin. Non hendrerit in vel ac diam.',
        author: {
          name: 'Brenna Goyette',
          handle: 'brennagoyette',
          imageUrl:
            'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80',
          logoUrl:
            'https://tailwindui.com/img/logos/savvycal-logo-gray-900.svg',
        },
      },
      getAllTestimonials: () => [
        [
          [
            {
              body: 'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.',
              author: {
                name: 'Leslie Alexander',
                handle: 'lesliealexander',
                imageUrl:
                  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
              },
            },
          ],
        ],
      ],
    },

    resumes: {
      title: 'Work experience',
      download_label: 'Download CV',
      getAllResumes: () => [
        {
          company: 'Community Software Solution',
          title: 'CEO & Founder',
          logo: logoCommunity,
          start: '2019',
          end: {
            label: 'Present',
            dateTime: new Date().getFullYear().toString(),
          },
        },
        {
          company: 'DevZeros S.A.S',
          title: 'Software Engineer',
          logo: logoDevZeros,
          start: 'January 2023',
          end: 'October 2024',
        },
      ],
    },
  },

  social: {
    email: 'david404ac@gmail.com',
    github: 'https://github.com/DavidApril',
    linkedin: 'https://www.linkedin.com/in/david-agamez',
  },

  about: {
    metadata: {
      title: 'About David Agámez',
      description:
        'I’m David, a software engineering student and entrepreneur based in Valledupar, Colombia. Founder of Community, where we empower people to explore the web.',
    },

    title:
      'I’m David Agámez. I live in Valledupar, where I create the future of web technologies.',
    description: `I’m a software engineer and entrepreneur based in Valledupar, Colombia. I’m the founder and CEO of Community, 
    where we develop technologies that empower regular people to explore the web on their own terms. I’m 
    also a software engineering student at the University of Valledupar, where I’m deepening my expertise in web development and entrepreneurship.`,
  },

  articles: {
    metadata: {
      title: 'Articles',
      description:
        'All of my long-form thoughts on software design, leadership, company building, and the aerospace industry.',
    },

    title:
      'Writing on software design, company building, and the aerospace industry.',
    intro:
      'All of my long-form thoughts on software design, leadership, company building, and the aerospace industry, collected in chronological order.',
  },

  projects: {
    metadata: {
      title: 'Projects',
      description: 'Things I’ve built while making my mark on the world.',
    },

    title: 'Things I’ve built while making my mark on the world.',
    intro:
      'I’ve worked on many projects over the years, but here are the ones I’m most proud of. Some of them are open-source, so feel free to check out the code and contribute if you have ideas for improvement.',

    getAllProjects: () => [
      {
        status: 'In progress',
        name: 'Typezt',
        description:
          'Platform for improving typing skills with a focus on fun and competition.',
        link: {
          href: 'https://github.com/DavidApril/Typezt',
          label: 'typezt.com',
        },
        logo: logoCommunity,
      },
      {
        status: 'In progress',
        name: 'Alerón Producciones',
        description:
          'Building a platform that empowers audiovisual creators with cutting-edge production tools.',
        link: {
          href: 'http://aleronproducciones.com',
          label: 'aleronproducciones.com',
        },
        logo: logoCommunity,
      },
    ],
  },

  speaking: {
    metadata: {
      title: 'Speaking',
      description:
        'I’ve spoken at events all around the world and been interviewed for many podcasts.',
    },

    title:
      'I’ve spoken at events all around the world and been interviewed for podcasts.',
    intro:
      'One of my favorite ways to share my ideas is live on stage, where there’s so much more communication bandwidth than in writing. Podcast interviews are another way for me to engage in conversation and provide insight.',

    sections: [
      {
        title: 'Conferences',
        appearances: [
          {
            title: 'Empowering web exploration with Community',
            description:
              'An in-depth look at how Community is changing the way people interact with the web.',
            event: 'TechConf 2023',
            cta: 'Watch video',
            href: '#',
          },
        ],
      },
      {
        title: 'Podcasts',
        appearances: [
          {
            title: 'Building a company with a people-first mindset',
            description:
              'Discussing how Community empowers users and grows with a mission-driven approach.',
            event: 'Indie Hackers, July 2023',
            cta: 'Listen to podcast',
            href: '#',
          },
        ],
      },
    ],
  },

  uses: {
    metadata: {
      title: 'Uses',
      description:
        'Tools I rely on to get my work done as a software engineer and entrepreneur.',
    },

    title: 'What I use to get my work done.',
    intro:
      'I’m a software engineer and entrepreneur based in Valledupar, Colombia. I’m the founder and CEO of Community, where we develop technologies that empower people to explore the web.',

    sections: [
      {
        title: 'Development',
        items: [
          {
            title: 'IDLE',
            description: 'JetBrains suite & Visual Studio Code',
          },
          {
            title: 'Control Version',
            description: 'Github, Gitlab & Bitbucket',
          },
          {
            title: 'Postman',
            description: 'API development environment',
          },
          {
            title: 'Docker',
            description: 'Containerization tool',
          },
          {
            title: 'Storybook',
            description: 'Development environment for UI components',
          },
        ],
      },
      {
        title: 'Desk setup',
        items: [
          {
            title: 'Laptop',
            description:
              'Victus Intel Core i5 12450H 32 RAM Upgraded GB 512 GB SSD',
          },
          {
            title: 'Mouse',
            description: 'Logitech G203 Lightsync',
          },
          {
            title: 'Keyboard',
            description: 'Keychron K3',
          },
          {
            title: 'Extra Monitor',
            description: 'Viotek GFV22CB',
          },
        ],
      },
    ],
  },

  thank_you: {
    metadata: {
      title: 'Thank you',
      description: 'Thanks for subscribing to my newsletter.',
    },

    title: 'Thanks for subscribing.',
    intro:
      'I’ll send you an email any time I publish a new blog post, release a new project, or have something exciting to share.',
  },

  not_found: {
    error_code: '404',
    title: 'Page not found',
    description: 'Sorry, we couldn’t find the page you’re looking for.',
    btn_label: 'Go back home',
  },

  copyright: '© 2024 David Agámez. All rights reserved.',
}

export const {
  main_layout,
  home,
  social,
  about,
  articles,
  projects,
  speaking,
  uses,
  thank_you,
  not_found,
  copyright,
} = data