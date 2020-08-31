export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5f4c45383025491591748634',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-v1fib5yv',
                  apiId: '675e5265-9fb3-47c3-b8a9-04c464fe95c7'
                },
                {
                  buildHookId: '5f4c4538cff5d0115d7c654e',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-rce9svvc',
                  apiId: '2a927cc9-3d39-4dee-bc7f-ec2c9c38739c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/andrealemonroy/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-rce9svvc.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
