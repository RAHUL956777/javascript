/*
Use javascript program to create a game of snake water and gun. The game should ask you to entered S, W or G.
declare loose or win ushing alert use confirm and prompt wwhere required
*/
let user = prompt("Enter S, W, or G");
let cpuI = Math.floor(Math.random() * 2);

let cpu = ["S","W","G"][cpuI];


const match = (cpu, user) =>{
    if(cpu === user){
        return "Nobody";
    }
    else if(cpu === "S" && user === "W"){
        return "cpu";
    }
    else if(cpu === "S" && user === "G"){
        return "user";
    }
    else if(cpu === "G" && user === "W"){
        return "user";
    }
    else if(cpu === "G" && user === "S"){
        return "cpu";
    }
    else if(cpu === "W" && user === "S"){
        return "user";
    }
    else if(cpu === "W" && user === "G"){
        return "cpu";
    }
}

let result = match(cpu,user);
console.log(`CPU ${cpu} and USER ${user} \nThe winner is: ${result}`);