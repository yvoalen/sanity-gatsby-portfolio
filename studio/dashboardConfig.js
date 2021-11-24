export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '619e529d337b64652134df22',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-8u228htk',
                  apiId: 'f403bca3-4b1f-484f-99e9-da4bf74a4a6c'
                },
                {
                  buildHookId: '619e529d38e1535aac7281bb',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-kisbjxzy',
                  apiId: 'a62ad27d-5a62-4d86-b158-3bbb9542324e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/yvoalen/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-kisbjxzy.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
