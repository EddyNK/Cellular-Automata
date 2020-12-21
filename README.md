# Cellular-Automata

The game of life; Complexity exist within simplicity.

Overview:

The game of life is a mathematical model
While observing at one cell it seems trivial, a switching between on and off. When observed as a cell and its immediate neighbours it looks random and meanignless. When observed as a system it creates complex patterns the meaning of which is unknown.

foundations:

- A universe is made out of cells
  {[] [] [] [] []
  [] [] [] [] []
  [] [] [] [] []
  [] [] [] [] [] } Universe: 3D grid with each spot [] = representing a (cell)

- Cells have discrete states
  (Dead) - 0 or (Alive) - 1

- The state of a cell is dependent on the rules of that universe
  > Fundamental Rule: The state of a cell depends on its neighbours state
  > The rules applied to each cell called the "rule set"
      Rule set to be determined during programming.
