export type MeType = {
  id?: string
  name: string
  birthday: Date
  currentWork: string
  careerObjective: {
    name: string,
    estimatedTimeInYears: number
  }
}

export const MeMock: MeType = {
  id: '1',
  name: 'Luciano Weslen da Silva',
  birthday: new Date('31/12/2000'),
  currentWork: 'Desenvolvedor FullStack',
  careerObjective: {
    name: 'Tech Lead',
    estimatedTimeInYears: 10,
  },
};
