type TfieldController = {
  size: number;
};

export class FieldController {
  private feildSheme: Array<Array<number>>;
  private props: TfieldController;
  constructor(props: TfieldController) {
    this.props = props;
    this.feildSheme = this.createFieldSheme(this.props.size);
  }
  setBallPlace(coordX: number, coordY: number): void {
    this.feildSheme[coordX][coordY] = 1;
  }
  setFieldCellEmpty(coordX: number, coordY: number): void {
    this.feildSheme[coordX][coordY] = 0;
  }
  private createFieldSheme(size: number): Array<Array<number>> {
    const fieldSheme: Array<Array<number>> = [];
    for (let i = 0; i < size; i++) {
      const fieldLine = [];
      for (let j = 0; j < size; j++) {
        fieldLine.push(0);
      }
    }
    return fieldSheme;
  }
}
