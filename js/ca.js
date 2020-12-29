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

  -Model-
  var: generation size
    CreateArr() -> creates and returns a 2d array with nElements = size*size
    RebaseGen() -> matches generation value to its corresponding cell background value

  var: rule
    CycleGen(steps) -> applies/calculates rule on generation for selected amount of steps before stoping.

    Sim() -> renders when active stops rendering when stoped

  -View- 
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

/*Globals*/
var generation = [];
var rule = 3; //rule 3 default
var nstate = { alive: 0, dead: 1 };
var worldSize = 15; //15x15 default
var delay = 1; //in seconds

/*model*/
function CreateArr(size) {
  let row = [];
  for (rowlen = 0; rowlen < size; rowlen++) {
    row.push(0);
  }
  return row;
}

function Create2dArr(size) {
  let col = [];
  for (len = 0; len < size; len++) {
    col.push(CreateArr(size));
  }
  return col;
}

generation = Create2dArr(worldSize);

/*view*/
function AddCells(world, worldSize) {
  for (row = 0; row < worldSize; row++) {
    for (col = 0; col < worldSize; col++) {
      let cell = document.createElement("div");
      cell.id = `${row}${col}`;
      cell.style.borderStyle = "solid";
      cell.style.borderColor = "#D3D3D3";
      cell.onclick = function () {
        if (this.style.backgroundColor == "black") {
          this.style.backgroundColor = "white";
        } else {
          this.style.backgroundColor = "black";
        }
      };
      cell.style.height = world.appendChild(cell);
    }
  }
}

function MakeWorld(worldSize, id) {
  let world = document.createElement("div");
  world.id = id;
  world.style.display = "grid";
  world.style.gridTemplateColumns = `repeat(${worldSize}, 1fr)`;
  world.style.gridTemplateRows = `repeat(${worldSize}, 1fr)`;
  world.style.height = "inherit";
  world.style.width = "inherit";
  document.getElementById("A").appendChild(world);
  AddCells(world, worldSize);
}

MakeWorld(worldSize, "world");
