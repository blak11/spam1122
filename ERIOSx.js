const Discord = require("discord.js");////////////byERIOSx
const myid = ["id xot dane"];////////////byERIOSx
const prefix = ["#"];////////////byERIOSx
const cmd = require("node-cmd");////////////byERIOSx
const ERIOSx = new Discord.Client();////////////byERIOSx
const ERIOSx2 = new Discord.Client();////////////byERIOSx
const ERIOSx3 = new Discord.Client();////////////byERIOSx
const ERIOSx4 = new Discord.Client();////////////byERIOSx
const ERIOSx5 = new Discord.Client();////////////byERIOSx
const ERIOSx6 = new Discord.Client();////////////byERIOSx

//✠▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ☢❦۞❦☢ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬✠//POULAZ

ERIOSx.login("ODIyNjU1NTYxMzI5Mjc5MDA5.YFVdPQ.mp44MthjPb62X2wG62y7asabo5Q");////////////byERIOSx
ERIOSx2.login("ODIyNjU4MDc5ODIzNzU3MzYy.YFVfCg.i115hh6eW473wOM2mdNlqZ_NNBc");////////////byERIOSx
ERIOSx3.login("By ERIOSx");////////////byERIOSx
ERIOSx4.login("By ERIOSx");////////////byERIOSx
ERIOSx5.login("By ERIOSx");////////////byERIOSx
ERIOSx6.login("By ERIOSx");////////////byERIOSx

//✠▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ☢❦۞❦☢ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬✠//POULAZ

ERIOSx.on("message", message => {
  if (message.content === prefix + "d1") {////////////byERIOSx
    message.channel.send("#daily");
  }
  if (message.content === prefix + "c1") {
    message.channel.send("#credits");
  }
  if (message.content === prefix + "p1") {////////////byERIOSx
    message.channel.send("#profile");
  }
  if (message.content === prefix + "r1") {
    message.channel.send("#rep " + "<@" + myid + ">");
  }
  if (message.content.startsWith(prefix + "s1")) {
    var text = message.content
      .split("ninja up")
      .slice(1)
      .join("ninja up");
    message.channel.send(text);
  }
});

ERIOSx2.on("message", message => {
  if (message.content === prefix + "d2") {
    message.channel.send("#daily");
  }
  if (message.content === prefix + "c2") {
    message.channel.send("#credits");
  }
  if (message.content === prefix + "p2") {
    message.channel.send("#profile");
  }
  if (message.content === prefix + "r2") {
    message.channel.send("#rep " + "<@" + myid + ">");
  }
  if (message.content.startsWith(prefix + "s2")) {
    var text = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    message.channel.send(text);
  }
});

ERIOSx3.on("message", message => {
  if (message.content === prefix + "d3") {
    message.channel.send("#daily");
  }
  if (message.content === prefix + "c3") {
    message.channel.send("#credits");
  }
  if (message.content === prefix + "p3") {
    message.channel.send("#profile");
  }
  if (message.content === prefix + "r3") {
    message.channel.send("#rep " + "<@" + myid + ">");
  }
  if (message.content.startsWith(prefix + "s3")) {
    var text = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    message.channel.send(text);
  }
});

ERIOSx4.on("message", message => {
  if (message.content === prefix + "d4") {
    message.channel.send("#daily");
  }
  if (message.content === prefix + "c4") {
    message.channel.send("#credits");
  }
  if (message.content === prefix + "p4") {
    message.channel.send("#profile");
  }
  if (message.content === prefix + "r4") {
    message.channel.send("#rep " + "<@" + myid + ">");
  }
  if (message.content.startsWith(prefix + "s4")) {
    var text = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    message.channel.send(text);
  }
});

ERIOSx5.on("message", message => {
  if (message.content === prefix + "d5") {
    message.channel.send("#daily");
  }
  if (message.content === prefix + "c5") {
    message.channel.send("#credits");
  }
  if (message.content === prefix + "p5") {
    message.channel.send("#profile");
  }
  if (message.content === prefix + "r5") {
    message.channel.send("#rep " + "<@" + myid + ">");
  }
  if (message.content.startsWith(prefix + "s5")) {
    var text = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    message.channel.send(text);
  }
});

ERIOSx6.on("message", message => {
  if (message.content === prefix + "d6") {
    message.channel.send("#daily");
  }
  if (message.content === prefix + "c6") {
    message.channel.send("#credits");
  }
  if (message.content === prefix + "p6") {
    message.channel.send("#profile");
  }
  if (message.content === prefix + "r6") {
    message.channel.send("#rep " + "<@" + myid + ">");
  }
  if (message.content.startsWith(prefix + "s6")) {
    var text = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    message.channel.send(text);
  }
});

//✠▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ☢❦۞❦☢ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬✠//ERIOSx

ERIOSx.on("message", message => {
  if (message.content === prefix + "fast 1k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 1000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 2k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 2000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 3k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 3000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 4k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 4000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 5k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 5000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 6k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 6000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 7k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 7000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 8k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 8000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 9k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 9000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 10k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 10000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
});

//???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????//ERIOSx

ERIOSx2.on("message", message => {
  if (message.content === prefix + "fast 1k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 1000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 2k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 2000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 3k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 3000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 4k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 4000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 5k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 5000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 6k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 6000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 7k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 7000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 8k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 8000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 9k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 9000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 10k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 10000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
});

//???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????//ERIOSX

ERIOSx3.on("message", message => {
  if (message.content === prefix + "fast 1k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 1000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 2k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 2000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 3k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 3000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 4k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 4000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 5k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 5000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 6k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 6000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 7k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 7000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 8k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 8000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 9k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 9000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 10k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 10000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
});

//??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????//ERIOSx

ERIOSx4.on("message", message => {
  if (message.content === prefix + "fast 1k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 1000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 2k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 2000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 3k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 3000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 4k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 4000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 5k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 5000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 6k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 6000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 7k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 7000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 8k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 8000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 9k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 9000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 10k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 10000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
});

//????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????//ERIOSx

ERIOSx5.on("message", message => {
  if (message.content === prefix + "fast 1k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 1000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 2k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 2000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 3k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 3000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 4k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 4000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 5k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 5000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 6k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 6000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 7k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 7000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 8k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 8000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 9k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 9000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 10k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 10000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
});

//??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????//ERIOSx

ERIOSx6.on("message", message => {
  if (message.content === prefix + "fast 1k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 1000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 2k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 2000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 3k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 3000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 4k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 4000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 5k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 5000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 6k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 6000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 7k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 7000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 8k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 8000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 9k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 9000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 10k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 10000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
});

//✠▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ☢❦۞❦☢ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬✠//ERIOSx

ERIOSx.on("message", message => {
  if (message.content === prefix + "slow") {
    let letters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789".split(
      ""
    );
    let spaces = " ".repeat(10);
    let last = "";
    let messages = 0;

    setInterval(() => {
      let str = "";
      let num = Math.floor(Math.random() * 10);
      for (let i = 0; i < num; i++) {
        str += letters[Math.floor(Math.random() * letters.length)];

        if (i === num - 1) {
          if (last === "") {
            messages += 1;
            last = `${str} ${spaces.slice(str.length + 1)}`;
            return message.channel.send(
              `${str} ${spaces.slice(str.length + 1)}${messages}`
            );
          } else {
            messages += 1;
            let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
            last = spaced;
            return message.channel.send(spaced);
          }
        }
      }
    }, 6000);
  }
});

ERIOSx2.on("message", message => {
  if (message.content === prefix + "slow") {
    let letters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789".split(
      ""
    );
    let spaces = " ".repeat(10);
    let last = "";
    let messages = 0;

    setInterval(() => {
      let str = "";
      let num = Math.floor(Math.random() * 10);
      for (let i = 0; i < num; i++) {
        str += letters[Math.floor(Math.random() * letters.length)];

        if (i === num - 1) {
          if (last === "") {
            messages += 1;
            last = `${str} ${spaces.slice(str.length + 1)}`;
            return message.channel.send(
              `${str} ${spaces.slice(str.length + 1)}${messages}`
            );
          } else {
            messages += 1;
            let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
            last = spaced;
            return message.channel.send(spaced);
          }
        }
      }
    }, 6000);
  }
});

ERIOSx3.on("message", message => {
  if (message.content === prefix + "slow") {
    let letters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789".split(
      ""
    );
    let spaces = " ".repeat(10);
    let last = "";
    let messages = 0;

    setInterval(() => {
      let str = "";
      let num = Math.floor(Math.random() * 10);
      for (let i = 0; i < num; i++) {
        str += letters[Math.floor(Math.random() * letters.length)];

        if (i === num - 1) {
          if (last === "") {
            messages += 1;
            last = `${str} ${spaces.slice(str.length + 1)}`;
            return message.channel.send(
              `${str} ${spaces.slice(str.length + 1)}${messages}`
            );
          } else {
            messages += 1;
            let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
            last = spaced;
            return message.channel.send(spaced);
          }
        }
      }
    }, 6000);
  }
});

ERIOSx4.on("message", message => {
  if (message.content === prefix + "slow") {
    let letters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789".split(
      ""
    );
    let spaces = " ".repeat(10);
    let last = "";
    let messages = 0;

    setInterval(() => {
      let str = "";
      let num = Math.floor(Math.random() * 10);
      for (let i = 0; i < num; i++) {
        str += letters[Math.floor(Math.random() * letters.length)];

        if (i === num - 1) {
          if (last === "") {
            messages += 1;
            last = `${str} ${spaces.slice(str.length + 1)}`;
            return message.channel.send(
              `${str} ${spaces.slice(str.length + 1)}${messages}`
            );
          } else {
            messages += 1;
            let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
            last = spaced;
            return message.channel.send(spaced);
          }
        }
      }
    }, 6000);
  }
});

ERIOSx5.on("message", message => {
  if (message.content === prefix + "slow") {
    let letters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789".split(
      ""
    );
    let spaces = " ".repeat(10);
    let last = "";
    let messages = 0;

    setInterval(() => {
      let str = "";
      let num = Math.floor(Math.random() * 10);
      for (let i = 0; i < num; i++) {
        str += letters[Math.floor(Math.random() * letters.length)];

        if (i === num - 1) {
          if (last === "") {
            messages += 1;
            last = `${str} ${spaces.slice(str.length + 1)}`;
            return message.channel.send(
              `${str} ${spaces.slice(str.length + 1)}${messages}`
            );
          } else {
            messages += 1;
            let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
            last = spaced;
            return message.channel.send(spaced);
          }
        }
      }
    }, 6000);
  }
});

ERIOSx6.on("message", message => {
  if (message.content === prefix + "slow") {
    let letters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789".split(
      ""
    );
    let spaces = " ".repeat(10);
    let last = "";
    let messages = 0;

    setInterval(() => {
      let str = "";
      let num = Math.floor(Math.random() * 10);
      for (let i = 0; i < num; i++) {
        str += letters[Math.floor(Math.random() * letters.length)];

        if (i === num - 1) {
          if (last === "") {
            messages += 1;
            last = `${str} ${spaces.slice(str.length + 1)}`;
            return message.channel.send(
              `${str} ${spaces.slice(str.length + 1)}${messages}`
            );
          } else {
            messages += 1;
            let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
            last = spaced;
            return message.channel.send(spaced);
          }
        }
      }
    }, 6000);
  }
});

//✠▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ☢❦۞❦☢ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬✠//ERIOSXx

ERIOSx.on("message", async message => {
  if (message.content === prefix + "stop") {
    await cmd.run("refresh");
    await message.channel.send("Bot Stoped");
  }
});

ERIOSx2.on("message", async message => {
  if (message.content === prefix + "stop") {
    await cmd.run("refresh");
    await message.channel.send("Bot Stoped");
  }
});

ERIOSx3.on("message", async message => {
  if (message.content === prefix + "stop") {
    await cmd.run("refresh");
    await message.channel.send("Bot Stoped");
  }
});

ERIOSx4.on("message", async message => {
  if (message.content === prefix + "stop") {
    await cmd.run("refresh");
    await message.channel.send("Bot Stoped");
  }
});

ERIOSx5.on("message", async message => {
  if (message.content === prefix + "stop") {
    await cmd.run("refresh");
    await message.channel.send("Bot Stoped");
  }
});

ERIOSx6.on("message", async message => {
  if (message.content === prefix + "stop") {
    await cmd.run("refresh");
    await message.channel.send("Bot Stoped");
  }
});

//✠▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ☢❦۞❦☢ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬✠//ERIOSx

ERIOSx.on("message", message => {
  if (message.content === prefix + "number") {
    message.channel.send(" My Token Is ``1`` ");
  }
});

ERIOSx2.on("message", message => {
  if (message.content === prefix + "number") {
    message.channel.send(" My Token Is ``2`` ");
  }
});

ERIOSx3.on("message", message => {
  if (message.content === prefix + "number") {
    message.channel.send(" My Token Is ``3`` ");
  }
});

ERIOSx4.on("message", message => {
  if (message.content === prefix + "number") {
    message.channel.send(" My Token Is ``4`` ");
  }
});

ERIOSx5.on("message", message => {
  if (message.content === prefix + "number") {
    message.channel.send(" My Token Is ``5`` ");
  }
});

ERIOSx6.on("message", message => {
  if (message.content === prefix + "number") {
    message.channel.send(" My Token Is ``6`` ");
  }
});
///All Code By ERIOSx
//✠▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ☢❦۞❦☢ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬✠//ERIOSx
