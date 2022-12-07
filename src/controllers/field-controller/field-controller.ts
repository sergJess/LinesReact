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
  getFieldSheme(): Array<Array<number>> {
    return this.feildSheme;
  }
  setBallToCell(coordX: number, coordY: number): void {
    this.feildSheme[coordX][coordY] = 1;
  }
  setFieldCellFree(coordX: number, coordY: number): void {
    this.feildSheme[coordX][coordY] = 0;
  }
  isFieldCellFree(coordX: number, coordY: number): boolean {
    return this.feildSheme[coordX][coordY] === 1 ? true : false;
  }
  private createFieldSheme(size: number): Array<Array<number>> {
    const fieldSheme: Array<Array<number>> = [];
    for (let i = 0; i < size; i++) {
      const fieldLine = [];
      for (let j = 0; j < size; j++) {
        fieldLine.push(0);
      }
      fieldSheme.push(fieldLine);
    }
    return fieldSheme;
  }
}
