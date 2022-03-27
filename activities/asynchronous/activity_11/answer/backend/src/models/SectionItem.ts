import { SectionItemType, SectionsItemsMock } from './mocks/SectionItems';

class SectionItemModel {
  private mock = SectionsItemsMock;

  public create(body: SectionItemType) {
    const createdSectionItem = this.mock.push(body);

    return createdSectionItem;
  }

  public get(id: string) {
    const items: SectionItemType[] = this.mock.filter((item) => item.id === id);

    return items.length > 0 ? items[0] : {};
  }

  public getAll({ sectionId }: { sectionId?: string }) {
    let items: SectionItemType[] = this.mock;

    if (sectionId) {
      items = items.filter((item) => item.sectionId === sectionId);
    }

    return items;
  }
}

export { SectionItemModel };
