import React, { Component } from "react";
import "./index.css";
import "./App.css";

import Tile from "./Tile.js";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: [
        {
          number: 1,
          url: "https://i.redd.it/cafy9cjeen931.jpg",
          clicked: false
        },
        {
          number: 2,
          url: "https://junkee.com/wp-content/uploads/2018/11/singingcat1.jpg",
          clicked: false
        },
        {
          number: 3,
          url: "https://i.ytimg.com/vi/Cw3cZiyeJOA/hqdefault.jpg",
          clicked: false
        },
        {
          number: 4,
          url:
            "https://www.sunnyskyz.com/uploads/2018/12/65zli-cat-meme-1a.jpg",
          clicked: false
        },
        {
          number: 5,
          url:
            "https://pbs.twimg.com/profile_images/1048766615297380353/HKJd2upR_400x400.jpg",
          clicked: false
        },
        {
          number: 6,
          url: "https://i.ytimg.com/vi/2fb-g_V-UT4/hqdefault.jpg",
          clicked: false
        },
        {
          number: 7,
          url:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrP4ZHroweO78KGJHWIEUzspcHZB9uVJ577R0rDQ5FejTD-j09&s",
          clicked: false
        },
        {
          number: 8,
          url:
            "https://static.parade.com/wp-content/uploads/2019/05/grumpy-cat-ftr.jpg",
          clicked: false
        },
        {
          number: 9,
          url:
            "https://66.media.tumblr.com/e1698a6675c619cd671a10d53326283d/tumblr_pnswfjHMWn1tvyjy1_1280.jpg",
          clicked: false
        },
        {
          number: 10,
          url:
            "https://i.pinimg.com/236x/e5/03/30/e5033078e9b30665977f2ccf7c156ac0.jpg",
          clicked: false
        },
        {
          number: 11,
          url:
            "https://i.pinimg.com/474x/c8/ce/ec/c8ceec4e93b568cf9d2b5e5d831d0956.jpg",
          clicked: false
        },
        {
          number: 12,
          url:
            "https://i.kym-cdn.com/photos/images/newsfeed/001/514/162/8f1.jpg",
          clicked: false
        },
        {
          number: 13,
          url: "https://cdn130.picsart.com/288723451030211.png?r1024x1024",
          clicked: false
        },
        {
          number: 14,
          url:
            "https://img.buzzfeed.com/buzzfeed-static/static/2016-12/5/9/asset/buzzfeed-prod-fastlane02/sub-buzz-18095-1480948224-6.png?downsize=700%3A%2A&output-quality=auto&output-format=auto&output-quality=auto&output-format=auto&downsize=360:*",
          clicked: false
        },
        {
          number: 15,
          url: "https://static2.stuff.co.nz/1328143363/324/6355324.jpg",
          clicked: false
        },
        {
          number: 16,
          url:
            "https://66.media.tumblr.com/fe5f1966547a5079eb98ebcd67f654c7/2ff7123bea877640-64/s640x960/02c07cb9f79c3477e0a621a460448f178edd295e.jpg",
          clicked: false
        }
      ],
      wins: 0,
      games: 0,
      clicked: 0
    };
  }

  //switch up the squares after one has been clicked
  scramble = () => {
    let i;
    for (i = 0; i < 20; i++) {
      let v;
      let temp;
      v = Math.floor(Math.random() * 16);
      temp = this.state.boxes[0];
      this.state.boxes.shift();
      this.state.boxes.splice(v, 0, temp);
    }
  };

  // logic for determining whether if a box has already been clicked. calls scramble and updates DOM as necessary
  setClicked = boxnum => {
    if (this.state.boxes[boxnum].clicked === false) {
      this.state.boxes[boxnum].clicked = true;
      this.state.clicked++;
    } else {
      alert("already clicked!");
    }
    this.scramble();
    this.forceUpdate();
  };
  restart = () => {
    this.setClicked();
    this.state.clicked = 0;
    this.state.games++;
  };

  // Game UI
  render() {
    return (
      <div className="board">
        <div className="board-row">
          <Tile
            className="tile"
            state={this.state.boxes[0]}
            setClicked={() => this.setClicked(0)}
          />
          <Tile
            className="tile"
            state={this.state.boxes[1]}
            setClicked={() => this.setClicked(1)}
          />
          <Tile
            className="tile"
            state={this.state.boxes[2]}
            setClicked={() => this.setClicked(2)}
          />
          <Tile
            className="tile"
            state={this.state.boxes[3]}
            setClicked={() => this.setClicked(3)}
          />
        </div>
        <div className="board-row">
          <Tile
            className="tile"
            state={this.state.boxes[4]}
            setClicked={() => this.setClicked(4)}
          />
          <Tile
            className="tile"
            state={this.state.boxes[5]}
            setClicked={() => this.setClicked(5)}
          />
          <Tile
            className="tile"
            state={this.state.boxes[6]}
            setClicked={() => this.setClicked(6)}
          />
          <Tile
            className="tile"
            state={this.state.boxes[7]}
            setClicked={() => this.setClicked(7)}
          />
        </div>
        <div className="board-row">
          <Tile
            className="tile"
            state={this.state.boxes[8]}
            setClicked={() => this.setClicked(8)}
          />
          <Tile
            className="tile"
            state={this.state.boxes[9]}
            setClicked={() => this.setClicked(9)}
          />
          <Tile
            className="tile"
            state={this.state.boxes[10]}
            setClicked={() => this.setClicked(10)}
          />
          <Tile
            className="tile"
            state={this.state.boxes[11]}
            setClicked={() => this.setClicked(11)}
          />
        </div>
        <div className="board-row">
          <Tile
            className="tile"
            state={this.state.boxes[12]}
            setClicked={() => this.setClicked(12)}
          />
          <Tile
            className="tile"
            state={this.state.boxes[13]}
            setClicked={() => this.setClicked(13)}
          />
          <Tile
            className="tile"
            state={this.state.boxes[14]}
            setClicked={() => this.setClicked(14)}
          />
          <Tile
            className="tile"
            state={this.state.boxes[15]}
            setClicked={() => this.setClicked(15)}
          />
        </div>
        <div>
          Clicked: {this.state.clicked};
          <br />
          <br />
          Rounds Won: {this.state.wins};
          <br />
          <br />
          Total Rounds: {this.state.games}
        </div>
      </div>
    );
  }

  // Counting logic for how many of the 16 squares has been clicked, and how many games have been won.
  componentDidMount() {
    if (this.state.clicked > 16) {
      this.state.games++;
      this.state.wins++;
      this.restart();
    } else {
      console.log("hello");
      // complete the logic checks for winning/losing games and adding to score, as well as restarting the game upon loss
    }
  }
}

export default Game;
