export const CellType = {
  STANDARD: "grid-cell",
  START: "start-cell",
  GOAL: "goal-cell",
  BARRIER: "wall-cell",
  WEIGHTED: "weighted-cell",
  VISITED: "visited",
  ADDED_TO_ROUTE: "route",
  NUM_CELLTYPES: "7",
};

export class CellData {
  constructor(
    row,
    col,
    type = CellType.STANDARD,
    isSelected = false,
    weight = 0.0
  ) {
    this.row = row;
    this.col = col;
    this.id = `cell_${row}_${col}`;
    this.type = type;
    this.isSelected = isSelected;
    this.visited =
      type === (CellType.VISITED || CellType.ADDED_TO_ROUTE) ? true : false;
    this.weight =
      type === CellType.WEIGHTED
        ? weight
        : type === CellType.BARRIER
        ? Infinity
        : 0;
  }

  asType(newType) {
    return new CellData(this.row, this.col, newType, this.isSelected);
  }
}
