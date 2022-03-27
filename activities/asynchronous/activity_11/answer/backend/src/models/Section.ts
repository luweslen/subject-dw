import { SectionItemType, SectionsItemsMock } from './mocks/SectionItems';
import { SectionType, SectionsMock } from './mocks/Sections';

export type SectionTypeWithItems = SectionType & {
  items: SectionItemType[]
}

class SectionModel {
  private mock = SectionsMock;

  private mockItems = SectionsItemsMock;

  public create(body: SectionType) {
    const createdSection = this.mock.push(body);

    return createdSection;
  }

  public get({ id, hasItems }: { id: string, hasItems?: boolean }) {
    let sections: SectionType[] | SectionTypeWithItems[] = this.mock.filter((item) => item.id === id);

    if (hasItems && sections.length > 0) {
      sections = sections.map((section) => {
        const items = this.mockItems.filter((item) => item.sectionId === section.id);

        return {
          ...section,
          items,
        };
      });
    }

    return sections.length > 0 ? sections[0] : {};
  }

  public getAll(params?: { hasItems: boolean }) {
    let sections: SectionTypeWithItems[] | SectionType[] = this.mock;

    if (params.hasItems) {
      sections = sections.map((section) => {
        const items = this.mockItems.filter((item) => item.sectionId === section.id);

        return {
          ...section,
          items,
        };
      });
    }

    return sections;
  }
}

export { SectionModel };
