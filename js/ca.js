/*program challenge: Create a program that simulates cellular automata*/
/*
   [Data Definition]
   
   cell: a single member of an object that holds a state (div) 
   
   state: alive - 0, dead - 1 (Number)

   rule: describes when a cell should be on or off (Number)

   worldState: represent the rules of the current world (Number)

   world: a grid holding all cells and their state (div)

   Time: delay time in seconds between render refresh

   generation: represents of the current state of the world and its members
               ([][])

   buttons (html): - adjusting rules
            - setting initial cell states
            - run program
            - Zoom
            - Minimize
            - freeze?
*/

/*
  [Wish List] Functions

  -back end-
  var: generation size
    CreateArr() -> creates and returns a 2d array with nElements = size*size
    IntitalizeArrState() -> matches array values to cell counterpart

  var: rule
    CycleGen(steps) -> applies/calculates rule on generation for selected amount of steps before stoping.

    sim()-> renders when active stops rendering when stoped

  -front end- 
  var: size
    MakeWorld() -> initializes a html grid with size columns and rows
    PopulateWorld() -> fills each grid cell with a memeber(cell)
    CreateButton(txt,function) -> makes a button
      -Rule() -> to be determined 
      -zoom() ->reduces # of grid colums and rows inturn tot # cells
      -minimize() -> Increases # of grid colums and rows inturn tot # cells
      -Start/Stop() -> starts sim stop sim
      -Refresh() -> clears world and generation array

  var: generation
    render() -> matches cell background color with generation array
*/
