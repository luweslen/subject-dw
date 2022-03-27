import { MeType, MeMock } from './mocks/Me';

class MeModel {
  private mock = MeMock;

  public get() {
    const me: MeType = this.mock;

    return me;
  }
}

export { MeModel };
