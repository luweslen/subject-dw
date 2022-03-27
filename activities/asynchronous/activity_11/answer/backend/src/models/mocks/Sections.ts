export type SectionType = {
  id?: string
  name: string
  title: string
  description: string
}

export const SectionsMock: SectionType[] = [
  {
    id: '1',
    name: 'about',
    title: 'Sobre mim',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum amet quasi doloremque autem veritatis! Architecto beatae assumenda illo impedit perferendis odit corrupti laudantium! Officiis debitis tempore facere isterecusandae.Voluptatum.',
  },
  {
    id: '2',
    name: 'academic',
    title: 'Formação',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum amet quasi doloremque autem veritatis! Architecto beatae assumenda illo impedit perferendis odit corrupti laudantium! Officiis debitis tempore facere isterecusandae.Voluptatum.',
  },
  {
    id: '3',
    name: 'work',
    title: 'Experiências',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum amet quasi doloremque autem veritatis! Architecto beatae assumenda illo impedit perferendis odit corrupti laudantium! Officiis debitis tempore facere isterecusandae.Voluptatum.',
  },
];
