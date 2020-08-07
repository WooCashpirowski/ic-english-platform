const seasonsData = [
  {
    season: "1",
    level: "A1",
    episodes: [
      {
        id: "s01e01",
        epNo: "Episode 1",
        title: "Meeting new people",
        media: [
          {
            id: "s01e01q1",
            location: "/multimedia/s01/s01e01q1/index.html",
          },
          {
            id: "s01e01q2",
            location: "/multimedia/s01/s01e01q2/index.html",
          },
        ],
      },
      {
        id: "s01e02",
        epNo: "Episode 2",
        title: "Places in town",
        media: [
          {
            id: "s01e02q1",
            location: `/multimedia/s01/s01e02q1/index.html`,
          },
          {
            id: "s01e02q2",
            location: "/multimedia/s01/s01e02q2/index.html",
          },
          {
            id: "s01e02q3",
            location: "/multimedia/s01/s01e02q3/index.html",
          },
        ],
      },
      {
        id: "s01e03",
        epNo: "Episode 3",
        title: "Asking for help",
        media: [
          {
            id: "s01e03q1",
            location: `/multimedia/s01/s01e03q1/index.html`,
          },
          {
            id: "s01e03q2",
            location: "/multimedia/s01/s01e03q2/index.html",
          },
        ],
      },
      {
        id: "s01e04",
        epNo: "Episode 4",
        title: "Finding your way around town",
        media: [
          {
            id: "s01e04q1",
            location: `/multimedia/s01/s01e04q1/index.html`,
          },
          {
            id: "s01e04q2",
            location: "/multimedia/s01/s01e04q2/index.html",
          },
        ],
      },
      {
        id: "s01e05",
        epNo: "Episode 5",
        title: "It's coffee time",
        media: [
          {
            id: "s01e05q1",
            location: `/multimedia/s01/s01e05q1/index.html`,
          },
          {
            id: "s01e05q2",
            location: "/multimedia/s01/s01e05q2/index.html",
          },
          {
            id: "s01e05q3",
            location: "/multimedia/s01/s01e05q3/index.html",
          },
        ],
      },
      {
        id: "s01e06",
        epNo: "Episode 6",
        title: "At the hotel",
        media: [
          {
            id: "s01e06q1",
            location: "/multimedia/s01/s01e06q1/index.html",
          },
          {
            id: "s01e06q2",
            location: "/multimedia/s01/s01e06q2/index.html",
          },
        ],
      },
      {
        id: "s01e07",
        epNo: "Episode 7",
        title: "Quick bite to eat",
        media: [
          {
            id: "s01e07q1",
            location: `/multimedia/s01/s01e07q1/index.html`,
          },
          {
            id: "s01e07q2",
            location: "/multimedia/s01/s01e07q2/index.html",
          },
          {
            id: "s01e07q3",
            location: "/multimedia/s01/s01e07q3/index.html",
          },
        ],
      },
      {
        id: "s01e08",
        epNo: "Episode 8",
        title: "Riding the bus",
        media: [
          {
            id: "s01e08q1",
            location: `/multimedia/s01/s01e08q1/index.html`,
          },
          {
            id: "s01e08q2",
            location: "/multimedia/s01/s01e08q2/index.html",
          },
        ],
      },
      {
        id: "s01e09",
        epNo: "Episode 9",
        title: "Going to the supermarket",
        media: [
          {
            id: "s01e09q1",
            location: `/multimedia/s01/s01e09q1/index.html`,
          },
          {
            id: "s01e09q2",
            location: "/multimedia/s01/s01e09q2/index.html",
          },
          {
            id: "s01e09q3",
            location: "/multimedia/s01/s01e09q3/index.html",
          },
        ],
      },
      {
        id: "s01e10",
        epNo: "Episode 10",
        title: "It's coffee time II",
        media: [
          {
            id: "s01e10q1",
            location: `/multimedia/s01/s01e10q1/index.html`,
          },
          {
            id: "s01e10q2",
            location: "/multimedia/s01/s01e10q2/index.html",
          },
          {
            id: "s01e10q3",
            location: "/multimedia/s01/s01e10q3/index.html",
          },
        ],
      },
      {
        id: "s01e11",
        epNo: "Episode 11",
        title: "Shopping for clothes",
        media: [
          {
            id: "s01e11q1",
            location: "/multimedia/s01/s01e11q1/index.html",
          },
          {
            id: "s01e11q2",
            location: "/multimedia/s01/s01e11q2/index.html",
          },
        ],
      },
      {
        id: "s01e12",
        epNo: "Episode 12",
        title: "In a café",
        media: [
          {
            id: "s01e12q1",
            location: `/multimedia/s01/s01e12q1/index.html`,
          },
          {
            id: "s01e12q2",
            location: "/multimedia/s01/s01e12q2/index.html",
          },
        ],
      },
      {
        id: "s01e13",
        epNo: "Episode 13",
        title: "An invitation",
        media: [
          {
            id: "s01e13q1",
            location: `/multimedia/s01/s01e13q1/index.html`,
          },
          {
            id: "s01e13q2",
            location: "/multimedia/s01/s01e13q2/index.html",
          },
        ],
      },
      {
        id: "s01e14",
        epNo: "Episode 14",
        title: "Exploring the city",
        media: [
          {
            id: "s01e14q1",
            location: `/multimedia/s01/s01e14q1/index.html`,
          },
          {
            id: "s01e14q2",
            location: "/multimedia/s01/s01e14q2/index.html",
          },
          {
            id: "s01e14q3",
            location: "/multimedia/s01/s01e14q3/index.html",
          },
        ],
      },
      {
        id: "s01e15",
        epNo: "Episode 15",
        title: "It's coffee time III",
        media: [
          {
            id: "s01e15q1",
            location: `/multimedia/s01/s01e15q1/index.html`,
          },
          {
            id: "s01e15q2",
            location: "/multimedia/s01/s01e15q2/index.html",
          },
          {
            id: "s01e15q3",
            location: "/multimedia/s01/s01e15q3/index.html",
          },
        ],
      },
      {
        id: "s01e16",
        epNo: "Episode 16",
        title: "At the pub",
        media: [
          {
            id: "s01e16q1",
            location: "/multimedia/s01/s01e16q1/index.html",
          },
          {
            id: "s01e16q2",
            location: "/multimedia/s01/s01e16q2/index.html",
          },
        ],
      },
      {
        id: "s01e17",
        epNo: "Episode 17",
        title: "Cooking together",
        media: [
          {
            id: "s01e17q1",
            location: "/multimedia/s01/s01e17q1/index.html",
          },
          {
            id: "s01e17q2",
            location: "/multimedia/s01/s01e17q2/index.html",
          },
        ],
      },
      {
        id: "s01e18",
        epNo: "Episode 14",
        title: "Visiting the museum",
        media: [
          {
            id: "s01e18q1",
            location: `/multimedia/s01/s01e18q1/index.html`,
          },
          {
            id: "s01e18q2",
            location: "/multimedia/s01/s01e18q2/index.html",
          },
          {
            id: "s01e18q3",
            location: "/multimedia/s01/s01e18q3/index.html",
          },
        ],
      },
      {
        id: "s01e19",
        epNo: "Episode 19",
        title: "Visiting new friends",
        media: [
          {
            id: "s01e19q1",
            location: `/multimedia/s01/s01e19q1/index.html`,
          },
          {
            id: "s01e19q2",
            location: "/multimedia/s01/s01e19q2/index.html",
          },
        ],
      },
      {
        id: "s01e20",
        epNo: "Episode 20",
        title: "It's coffee time IV",
        media: [
          {
            id: "s01e20q1",
            location: `/multimedia/s01/s01e20q1/index.html`,
          },
          {
            id: "s01e20q2",
            location: "/multimedia/s01/s01e20q2/index.html",
          },
          {
            id: "s01e20q3",
            location: "/multimedia/s01/s01e20q3/index.html",
          },
        ],
      },
      {
        id: "s01e21",
        epNo: "Episode 21",
        title: "At the restaurant",
        media: [
          {
            id: "s01e21q1",
            location: "/multimedia/s01/s01e21q1/index.html",
          },
          {
            id: "s01e21q2",
            location: "/multimedia/s01/s01e21q2/index.html",
          },
          {
            id: "s01e21q3",
            location: "/multimedia/s01/s01e21q3/index.html",
          },
        ],
      },
      {
        id: "s01e22",
        epNo: "Episode 22",
        title: "Stolen handbag",
        media: [
          {
            id: "s01e22q1",
            location: "/multimedia/s01/s01e22q1/index.html",
          },
          {
            id: "s01e22q2",
            location: "/multimedia/s01/s01e22q2/index.html",
          },
          {
            id: "s01e22q3",
            location: "/multimedia/s01/s01e22q3/index.html",
          },
        ],
      },
      {
        id: "s01e23",
        epNo: "Episode 23",
        title: "Stomach bug",
        media: [
          {
            id: "s01e23q1",
            location: `/multimedia/s01/s01e23q1/index.html`,
          },
          {
            id: "s01e23q2",
            location: "/multimedia/s01/s01e23q2/index.html",
          },
        ],
      },
      {
        id: "s01e24",
        epNo: "Episode 24",
        title: "Planning a trip",
        media: [
          {
            id: "s01e24q1",
            location: `/multimedia/s01/s01e24q1/index.html`,
          },
          {
            id: "s01e24q2",
            location: "/multimedia/s01/s01e24q2/index.html",
          },
          {
            id: "s01e24q3",
            location: "/multimedia/s01/s01e24q3/index.html",
          },
        ],
      },
      {
        id: "s01e25",
        epNo: "Episode 25",
        title: "It's coffee time V",
        media: [
          {
            id: "s01e25q1",
            location: `/multimedia/s01/s01e25q1/index.html`,
          },
          {
            id: "s01e25q2",
            location: "/multimedia/s01/s01e25q2/index.html",
          },
        ],
      },
      {
        id: "s01e26",
        epNo: "Episode 26",
        title: "Travelling by train & bus",
        media: [
          {
            id: "s01e26q1",
            location: "/multimedia/s01/s01e26q1/index.html",
          },
          {
            id: "s01e26q2",
            location: "/multimedia/s01/s01e26q2/index.html",
          },
          {
            id: "s01e26q3",
            location: "/multimedia/s01/s01e26q3/index.html",
          },
        ],
      },
      {
        id: "s01e27",
        epNo: "Episode 27",
        title: "Renting a car",
        media: [
          {
            id: "s01e27q1",
            location: "/multimedia/s01/s01e27q1/index.html",
          },
          {
            id: "s01e27q2",
            location: "/multimedia/s01/s01e27q2/index.html",
          },
          {
            id: "s01e27q3",
            location: "/multimedia/s01/s01e27q3/index.html",
          },
        ],
      },
      {
        id: "s01e28",
        epNo: "Episode 28",
        title: "Saying goodbye",
        media: [
          {
            id: "s01e28q1",
            location: `/multimedia/s01/s01e28q1/index.html`,
          },
          {
            id: "s01e28q2",
            location: "/multimedia/s01/s01e28q2/index.html",
          },
          {
            id: "s01e28q3",
            location: "/multimedia/s01/s01e28q3/index.html",
          },
          {
            id: "s01e28m1",
            location: `/multimedia/s01/s01e28m1/index.html`,
          },
          {
            id: "s01e28m2",
            location: "/multimedia/s01/s01e28m2/index.html",
          },
        ],
      },
      {
        id: "s01e29",
        epNo: "Episode 29",
        title: "Going home",
        media: [
          {
            id: "s01e29q1",
            location: `/multimedia/s01/s01e29q1/index.html`,
          },
          {
            id: "s01e29q2",
            location: "/multimedia/s01/s01e29q2/index.html",
          },
          {
            id: "s01e29q3",
            location: "/multimedia/s01/s01e29q3/index.html",
          },
        ],
      },
      {
        id: "s01e30",
        epNo: "Episode 30",
        title: "It's coffee time VI",
        media: [
          {
            id: "s01e30q1",
            location: `/multimedia/s01/s01e30q1/index.html`,
          },
          {
            id: "s01e30q2",
            location: "/multimedia/s01/s01e30q2/index.html",
          },
          {
            id: "s01e30q3",
            location: "/multimedia/s01/s01e30q3/index.html",
          },
        ],
      },
    ],
  },
  {
    season: "2",
    level: "A2",
    episodes: [
      {
        id: "s02e01",
        epNo: "Episode 1",
        title: "At the airport",
        media: [
          {
            id: "s02e01m1",
            location: "/multimedia/s02/s02e01m1/index.html",
          },
          {
            id: "s02e01m2",
            location: "/multimedia/s02/s02e01m2/index.html",
          },
          {
            id: "s02e01q1",
            location: "/multimedia/s02/s02e01q1/index.html",
          },
          {
            id: "s02e01q2",
            location: "/multimedia/s02/s02e01q2/index.html",
          },
        ],
      },
      {
        id: "s02e02",
        epNo: "Episode 2",
        title: "ATM",
        media: [
          {
            id: "s02e02m1",
            location: "/multimedia/s02/s02e02m1/index.html",
          },
          {
            id: "s02e02q1",
            location: `/multimedia/s02/s02e02q1/index.html`,
          },
          {
            id: "s02e02q2",
            location: "/multimedia/s02/s02e02q2/index.html",
          },
        ],
      },
      {
        id: "s02e03",
        epNo: "Episode 3",
        title: "Hotel/Hostel complaints",
        media: [
          {
            id: "s02e03q1",
            location: `/multimedia/s02/s02e03q1/index.html`,
          },
          {
            id: "s02e03q2",
            location: "/multimedia/s02/s02e03q2/index.html",
          },
          {
            id: "s02e03q3",
            location: "/multimedia/s02/s02e03q3/index.html",
          },
        ],
      },
      {
        id: "s02e04",
        epNo: "Episode 4",
        title: "A bank account search",
        media: [
          {
            id: "s02e04q1",
            location: `/multimedia/s02/s02e04q1/index.html`,
          },
          {
            id: "s02e04q2",
            location: "/multimedia/s02/s02e04q2/index.html",
          },
          {
            id: "s02e04q3",
            location: "/multimedia/s02/s02e04q3/index.html",
          },
        ],
      },
      {
        id: "s02e05",
        epNo: "Episode 5",
        title: "Pub meeting",
        media: [
          {
            id: "s02e05q1",
            location: `/multimedia/s02/s02e05q1/index.html`,
          },
          {
            id: "s02e05q2",
            location: "/multimedia/s02/s02e05q2/index.html",
          },
          {
            id: "s02e05m1",
            location: "/multimedia/s02/s02e05m1/index.html",
          },
        ],
      },
      {
        id: "s02e06",
        epNo: "Episode 6",
        title: "Job search",
        media: [
          {
            id: "s02e06q1",
            location: "/multimedia/s02/s02e06q1/index.html",
          },
          {
            id: "s02e06q2",
            location: "/multimedia/s02/s02e06q2/index.html",
          },
        ],
      },
      {
        id: "s02e07",
        epNo: "Episode 7",
        title: "Online applications",
        media: [
          {
            id: "s02e07q1",
            location: `/multimedia/s02/s02e07q1/index.html`,
          },
          {
            id: "s02e07q2",
            location: "/multimedia/s02/s02e07q2/index.html",
          },
        ],
      },
      {
        id: "s02e08",
        epNo: "Episode 8",
        title: "Job interview",
        media: [
          {
            id: "s02e08q1",
            location: `/multimedia/s02/s02e08q1/index.html`,
          },
          {
            id: "s02e08q2",
            location: "/multimedia/s02/s02e08q2/index.html",
          },
          {
            id: "s02e08q3",
            location: "/multimedia/s02/s02e08q3/index.html",
          },
        ],
      },
      {
        id: "s02e09",
        epNo: "Episode 9",
        title: "Contract signing",
        media: [
          {
            id: "s02e09q1",
            location: `/multimedia/s02/s02e09q1/index.html`,
          },
          {
            id: "s02e09q2",
            location: "/multimedia/s02/s02e09q2/index.html",
          },
          {
            id: "s02e09q3",
            location: "/multimedia/s02/s02e09q3/index.html",
          },
        ],
      },
      {
        id: "s02e10",
        epNo: "Episode 10",
        title: "Pub meeting",
        media: [
          {
            id: "s02e10q1",
            location: `/multimedia/s02/s02e10q1/index.html`,
          },
          {
            id: "s02e10q2",
            location: "/multimedia/s02/s02e10q2/index.html",
          },
        ],
      },
      {
        id: "s02e11",
        epNo: "Episode 11",
        title: "Preparation for the first day at work",
        media: [
          {
            id: "s02e11q1",
            location: "/multimedia/s02/s02e11q1/index.html",
          },
          {
            id: "s02e11q2",
            location: "/multimedia/s02/s02e11q2/index.html",
          },
          {
            id: "s02e11q3",
            location: "/multimedia/s02/s02e11q3/index.html",
          },
        ],
      },
      {
        id: "s02e12",
        epNo: "Episode 12",
        title: "First day at work",
        media: [
          {
            id: "s02e12q1",
            location: `/multimedia/s02/s02e12q1/index.html`,
          },
          {
            id: "s02e12q2",
            location: "/multimedia/s02/s02e12q2/index.html",
          },
          {
            id: "s02e12q3",
            location: `/multimedia/s02/s02e12q3/index.html`,
          },
          {
            id: "s02e12m1",
            location: "/multimedia/s02/s02e12m1/index.html",
          },
        ],
      },
      {
        id: "s02e13",
        epNo: "Episode 13",
        title: "New colleagues",
        media: [
          {
            id: "s02e13q1",
            location: `/multimedia/s02/s02e13q1/index.html`,
          },
          {
            id: "s02e13q2",
            location: "/multimedia/s02/s02e13q2/index.html",
          },
          {
            id: "s02e13q3",
            location: "/multimedia/s02/s02e13q3/index.html",
          },
        ],
      },
      {
        id: "s02e14",
        epNo: "Episode 14",
        title: "Company offsite",
        media: [
          {
            id: "s02e14q1",
            location: `/multimedia/s02/s02e14q1/index.html`,
          },
          {
            id: "s02e14q2",
            location: "/multimedia/s02/s02e14q2/index.html",
          },
          {
            id: "s02e14q3",
            location: "/multimedia/s02/s02e14q3/index.html",
          },
        ],
      },
      {
        id: "s02e15",
        epNo: "Episode 15",
        title: "Lunch break meeting",
        media: [
          {
            id: "s02e15q1",
            location: `/multimedia/s02/s02e15q1/index.html`,
          },
          {
            id: "s02e15q2",
            location: "/multimedia/s02/s02e15q2/index.html",
          },
          {
            id: "s02e15q3",
            location: "/multimedia/s02/s02e15q3/index.html",
          },
          {
            id: "s02e15m1",
            location: "/multimedia/s02/s02e15m1/index.html",
          },
        ],
      },
      {
        id: "s02e16",
        epNo: "Episode 16",
        title: "Looking for a flat",
        media: [
          {
            id: "s02e16q1",
            location: "/multimedia/s02/s02e16q1/index.html",
          },
          {
            id: "s02e16q2",
            location: "/multimedia/s02/s02e16q2/index.html",
          },
          {
            id: "s02e16m1",
            location: "/multimedia/s02/s02e16m1/index.html",
          },
        ],
      },
      {
        id: "s02e17",
        epNo: "Episode 17",
        title: "Looking for a flatmate",
        media: [
          {
            id: "s02e17q1",
            location: "/multimedia/s02/s02e17q1/index.html",
          },
          {
            id: "s02e17q2",
            location: "/multimedia/s02/s02e17q2/index.html",
          },
          {
            id: "s02e17q3",
            location: "/multimedia/s02/s02e17q3/index.html",
          },
        ],
      },
      {
        id: "s02e18",
        epNo: "Episode 14",
        title: "Lunchtime at the office",
        media: [
          {
            id: "s02e18q1",
            location: `/multimedia/s02/s02e18q1/index.html`,
          },
          {
            id: "s02e18q2",
            location: "/multimedia/s02/s02e18q2/index.html",
          },
          {
            id: "s02e18m1",
            location: "/multimedia/s02/s02e18m1/index.html",
          },
        ],
      },
      {
        id: "s02e19",
        epNo: "Episode 19",
        title: "Calling in sick and shift swapping",
        media: [
          {
            id: "s02e19q1",
            location: `/multimedia/s02/s02e19q1/index.html`,
          },
          {
            id: "s02e19q2",
            location: "/multimedia/s02/s02e19q2/index.html",
          },
          {
            id: "s02e19m1",
            location: "/multimedia/s02/s02e19m1/index.html",
          },
        ],
      },
      {
        id: "s02e20",
        epNo: "Episode 20",
        title: "Pub meeting",
        media: [
          {
            id: "s02e20q1",
            location: "/multimedia/s02/s02e20q1/index.html",
          },
          {
            id: "s02e20q2",
            location: "/multimedia/s02/s02e20q2/index.html",
          },
          {
            id: "s02e20q3",
            location: "/multimedia/s02/s02e20q3/index.html",
          },
        ],
      },
      {
        id: "s02e21",
        epNo: "Episode 21",
        title: "Returning clothes",
        media: [
          {
            id: "s02e21q1",
            location: "/multimedia/s02/s02e21q1/index.html",
          },
          {
            id: "s02e21q2",
            location: "/multimedia/s02/s02e21q2/index.html",
          },
          {
            id: "s02e21q3",
            location: "/multimedia/s02/s02e21q3/index.html",
          },
        ],
      },
      {
        id: "s02e22",
        epNo: "Episode 22",
        title: "Dinner at home",
        media: [
          {
            id: "s02e22q1",
            location: "/multimedia/s02/s02e22q1/index.html",
          },
          {
            id: "s02e22q2",
            location: "/multimedia/s02/s02e22q2/index.html",
          },
          {
            id: "s02e22q3",
            location: "/multimedia/s02/s02e22q3/index.html",
          },
        ],
      },
      {
        id: "s02e23",
        epNo: "Episode 23",
        title: "Sightseeing in the city",
        media: [
          {
            id: "s02e23q1",
            location: "/multimedia/s02/s02e23q1/index.html",
          },
          {
            id: "s02e23q2",
            location: "/multimedia/s02/s02e23q2/index.html",
          },
          {
            id: "s02e23q3",
            location: "/multimedia/s02/s02e23q3/index.html",
          },
        ],
      },
      {
        id: "s02e24",
        epNo: "Episode 24",
        title: "Cinema night",
        media: [
          {
            id: "s02e24q1",
            location: `/multimedia/s02/s02e24q1/index.html`,
          },
          {
            id: "s02e24q2",
            location: "/multimedia/s02/s02e24q2/index.html",
          },
          {
            id: "s02e24m1",
            location: "/multimedia/s02/s02e24m1/index.html",
          },
        ],
      },
      {
        id: "s02e25",
        epNo: "Episode 25",
        title: "Pub meeting",
        media: [
          {
            id: "s02e25q1",
            location: `/multimedia/s02/s02e25q1/index.html`,
          },
          {
            id: "s02e25q2",
            location: "/multimedia/s02/s02e25q2/index.html",
          },
          {
            id: "s02e25q3",
            location: "/multimedia/s02/s02e25q3/index.html",
          },
        ],
      },
      {
        id: "s02e26",
        epNo: "Episode 26",
        title: "Accidents and emergencies",
        media: [
          {
            id: "s02e26q1",
            location: "/multimedia/s02/s02e26q1/index.html",
          },
          {
            id: "s02e26q2",
            location: "/multimedia/s02/s02e26q2/index.html",
          },
        ],
      },
      {
        id: "s02e27",
        epNo: "Episode 27",
        title: "New sweetheart",
        media: [
          {
            id: "s02e27q1",
            location: "/multimedia/s02/s02e27q1/index.html",
          },
          {
            id: "s02e27q2",
            location: "/multimedia/s02/s02e27q2/index.html",
          },
          {
            id: "s02e27q3",
            location: "/multimedia/s02/s02e27q3/index.html",
          },
        ],
      },
      {
        id: "s02e28",
        epNo: "Episode 28",
        title: "Compliments",
        media: [
          {
            id: "s02e28q1",
            location: "/multimedia/s02/s02e28q1/index.html",
          },
          {
            id: "s02e28q2",
            location: "/multimedia/s02/s02e28q2/index.html",
          },
          {
            id: "s02e28q3",
            location: "/multimedia/s02/s02e28q3/index.html",
          },
        ],
      },
      {
        id: "s02e29",
        epNo: "Episode 29",
        title: "Arguments and making up",
        media: [
          {
            id: "s02e29q1",
            location: "/multimedia/s02/s02e29q1/index.html",
          },
          {
            id: "s02e29q2",
            location: "/multimedia/s02/s02e29q2/index.html",
          },
          {
            id: "s02e29q3",
            location: "/multimedia/s02/s02e29q3/index.html",
          },
        ],
      },
      {
        id: "s02e30",
        epNo: "Episode 30",
        title: "Pub meeting",
        media: [
          {
            id: "s02e30q1",
            location: "/multimedia/s02/s02e30q1/index.html",
          },
          {
            id: "s02e30q2",
            location: "/multimedia/s02/s02e30q2/index.html",
          },
          {
            id: "s02e30q3",
            location: "/multimedia/s02/s02e30q3/index.html",
          },
        ],
      },
    ],
  },
  {
    season: "3",
    level: "B1",
    episodes: [
      {
        id: "s03e01",
        epNo: "Episode 1",
        title: "Starting out in a new city",
        media: [
          {
            id: "s03e01q1",
            location: "/multimedia/s03/s03e01q01/index.html",
          },
          {
            id: "s03e01q2",
            location: "/multimedia/s03/s03e01q02/index.html",
          },
          {
            id: "s03e01m1",
            location: "/multimedia/s03/s03e01m01/index.html",
          },
        ],
      },
      {
        id: "s03e02",
        epNo: "Episode 2",
        title: "Managing the utilities",
        media: [
          {
            id: "s03e02q1",
            location: `/multimedia/s03/s03e02q01/index.html`,
          },
          {
            id: "s03e02q2",
            location: "/multimedia/s03/s03e02q02/index.html",
          },
          {
            id: "s03e02q3",
            location: "/multimedia/s03/s03e02q03/index.html",
          },
        ],
      },
      {
        id: "s03e03",
        epNo: "Episode 3",
        title: "Going places",
        media: [
          {
            id: "s03e03q1",
            location: `/multimedia/s03/s03e03q01/index.html`,
          },
          {
            id: "s03e03q2",
            location: "/multimedia/s03/s03e03q02/index.html",
          },
          {
            id: "s03e03q3",
            location: "/multimedia/s03/s03e03q03/index.html",
          },
          {
            id: "s03e03m1",
            location: "/multimedia/s03/s03e03m01/index.html",
          },
        ],
      },
      {
        id: "s03e04",
        epNo: "Episode 4",
        title: "Getting a promotion",
        media: [
          {
            id: "s03e04q1",
            location: `/multimedia/s03/s03e04q01/index.html`,
          },
          {
            id: "s03e04q2",
            location: "/multimedia/s03/s03e04q02/index.html",
          },
          {
            id: "s03e04q3",
            location: "/multimedia/s03/s03e04q03/index.html",
          },
          {
            id: "s03e04m1",
            location: "/multimedia/s03/s03e04m01/index.html",
          },
        ],
      },
      {
        id: "s03e05",
        epNo: "Episode 5",
        title: "At the pub",
        media: [
          {
            id: "s03e05q1",
            location: `/multimedia/s03/s03e05q01/index.html`,
          },
          {
            id: "s03e05q2",
            location: "/multimedia/s03/s03e05q02/index.html",
          },
          {
            id: "s03e05q3",
            location: "/multimedia/s03/s03e05q03/index.html",
          },
          {
            id: "s03e05m1",
            location: "/multimedia/s03/s03e05m01/index.html",
          },
        ],
      },
      {
        id: "s03e06",
        epNo: "Episode 6",
        title: "Getting to know the neighbourhood",
        media: [
          {
            id: "s03e06q1",
            location: "/multimedia/s03/s03e06q01/index.html",
          },
          {
            id: "s03e06q2",
            location: "/multimedia/s03/s03e06q02/index.html",
          },
          {
            id: "s03e06q3",
            location: "/multimedia/s03/s03e06q03/index.html",
          },
        ],
      },
      {
        id: "s03e07",
        epNo: "Episode 7",
        title: "Making sense of signs",
        media: [
          {
            id: "s03e07q1",
            location: `/multimedia/s03/s03e07q01/index.html`,
          },
          {
            id: "s03e07q2",
            location: "/multimedia/s03/s03e07q02/index.html",
          },
          {
            id: "s03e07q3",
            location: "/multimedia/s03/s03e07q03/index.html",
          },
        ],
      },
      {
        id: "s03e08",
        epNo: "Episode 8",
        title: "Family celebrations",
        media: [
          {
            id: "s03e08q1",
            location: `/multimedia/s03/s03e08q01/index.html`,
          },
          {
            id: "s03e08q2",
            location: "/multimedia/s03/s03e08q02/index.html",
          },
          {
            id: "s03e08q3",
            location: "/multimedia/s03/s03e08q03/index.html",
          },
        ],
      },
      {
        id: "s03e09",
        epNo: "Episode 9",
        title: "Children and games",
        media: [
          {
            id: "s03e09q1",
            location: `/multimedia/s03/s03e09q01/index.html`,
          },
          {
            id: "s03e09q2",
            location: "/multimedia/s03/s03e09q02/index.html",
          },
          {
            id: "s03e09q3",
            location: "/multimedia/s03/s03e09q03/index.html",
          },
        ],
      },
      {
        id: "s03e10",
        epNo: "Episode 10",
        title: "Family dinner",
        media: [
          {
            id: "s03e10q1",
            location: `/multimedia/s03/s03e10q01/index.html`,
          },
          {
            id: "s03e10q2",
            location: "/multimedia/s03/s03e10q02/index.html",
          },
          {
            id: "s03e10q3",
            location: "/multimedia/s03/s03e10q03/index.html",
          },
        ],
      },
      {
        id: "s03e11",
        epNo: "Episode 11",
        title: "Appliances malfunction",
        media: [
          {
            id: "s03e11q1",
            location: "/multimedia/s03/s03e11q01/index.html",
          },
          {
            id: "s03e11q2",
            location: "/multimedia/s03/s03e11q02/index.html",
          },
          {
            id: "s03e11q3",
            location: "/multimedia/s03/s03e11q03/index.html",
          },
        ],
      },
      {
        id: "s03e12",
        epNo: "Episode 12",
        title: "Work meetings - planning",
        media: [
          {
            id: "s03e12q1",
            location: `/multimedia/s03/s03e12q01/index.html`,
          },
          {
            id: "s03e12q2",
            location: "/multimedia/s03/s03e12q02/index.html",
          },
          {
            id: "s03e12m1",
            location: `/multimedia/s03/s03e12m01/index.html`,
          },
        ],
      },
      {
        id: "s03e13",
        epNo: "Episode 13",
        title: "Work meetings - chairing",
        media: [
          {
            id: "s03e13q1",
            location: `/multimedia/s03/s03e13q01/index.html`,
          },
          {
            id: "s03e13q2",
            location: "/multimedia/s03/s03e13q02/index.html",
          },
        ],
      },
      {
        id: "s03e14",
        epNo: "Episode 14",
        title: "Starting a new business",
        media: [
          {
            id: "s03e14q1",
            location: `/multimedia/s03/s03e14q01/index.html`,
          },
          {
            id: "s03e14q2",
            location: "/multimedia/s03/s03e14q02/index.html",
          },
          {
            id: "s03e14m1",
            location: "/multimedia/s03/s03e14m01/index.html",
          },
        ],
      },
      {
        id: "s03e15",
        epNo: "Episode 15",
        title: "Dinner with guests",
        media: [
          {
            id: "s03e15q1",
            location: `/multimedia/s03/s03e15q01/index.html`,
          },
          {
            id: "s03e15q2",
            location: "/multimedia/s03/s03e15q02/index.html",
          },
          {
            id: "s03e15q3",
            location: "/multimedia/s03/s03e15q03/index.html",
          },
        ],
      },
      {
        id: "s03e16",
        epNo: "Episode 16",
        title: "Asking for a loan",
        media: [
          {
            id: "s03e16q1",
            location: "/multimedia/s03/s03e16q01/index.html",
          },
          {
            id: "s03e16q2",
            location: "/multimedia/s03/s03e16q02/index.html",
          },
          {
            id: "s03e16q3",
            location: "/multimedia/s03/s03e16q03/index.html",
          },
        ],
      },
      {
        id: "s03e17",
        epNo: "Episode 17",
        title: "A visit to the hospital",
        media: [
          {
            id: "s03e17q1",
            location: "/multimedia/s03/s03e17q01/index.html",
          },
          {
            id: "s03e17q2",
            location: "/multimedia/s03/s03e17q02/index.html",
          },
          {
            id: "s03e17m1",
            location: "/multimedia/s03/s03e17m01/index.html",
          },
        ],
      },
      {
        id: "s03e18",
        epNo: "Episode 14",
        title: "Media and TV",
        media: [
          {
            id: "s03e18q1",
            location: `/multimedia/s03/s03e18q01/index.html`,
          },
          {
            id: "s03e18q2",
            location: "/multimedia/s03/s03e18q02/index.html",
          },
          {
            id: "s03e18q3",
            location: "/multimedia/s03/s03e18q03/index.html",
          },
        ],
      },
      {
        id: "s03e19",
        epNo: "Episode 19",
        title: "Spare time activities",
        media: [
          {
            id: "s03e19q1",
            location: `/multimedia/s03/s03e19q01/index.html`,
          },
          {
            id: "s03e19q2",
            location: "/multimedia/s03/s03e19q02/index.html",
          },
          {
            id: "s03e19q3",
            location: "/multimedia/s03/s03e19q03/index.html",
          },
        ],
      },
      {
        id: "s03e20",
        epNo: "Episode 20",
        title: "At the pub",
        media: [
          {
            id: "s03e20q1",
            location: "/multimedia/s03/s03e20q01/index.html",
          },
          {
            id: "s03e20q2",
            location: "/multimedia/s03/s03e20q02/index.html",
          },
          {
            id: "s03e20m1",
            location: "/multimedia/s03/s03e20m01/index.html",
          },
        ],
      },
      {
        id: "s03e21",
        epNo: "Episode 21",
        title: "Protecting the environment",
        media: [
          {
            id: "s03e21q1",
            location: "/multimedia/s03/s03e21q01/index.html",
          },
          {
            id: "s03e21q2",
            location: "/multimedia/s03/s03e21q2/index.html",
          },
          {
            id: "s03e21q3",
            location: "/multimedia/s03/s03e21q3/index.html",
          },
        ],
      },
      {
        id: "s03e22",
        epNo: "Episode 22",
        title: "Public holidays and community celebrations",
        media: [
          {
            id: "s03e22q1",
            location: "/multimedia/s03/s03e22q1/index.html",
          },
          {
            id: "s03e22q2",
            location: "/multimedia/s03/s03e22q2/index.html",
          },
          {
            id: "s03e22q3",
            location: "/multimedia/s03/s03e22q3/index.html",
          },
        ],
      },
      {
        id: "s03e23",
        epNo: "Episode 23",
        title: "A colleague's wedding",
        media: [
          {
            id: "s03e23q1",
            location: "/multimedia/s03/s03e23q1/index.html",
          },
          {
            id: "s03e23q2",
            location: "/multimedia/s03/s03e23q2/index.html",
          },
          {
            id: "s03e23q3",
            location: "/multimedia/s03/s03e23q3/index.html",
          },
        ],
      },
      {
        id: "s03e24",
        epNo: "Episode 24",
        title: "Burglars in the house",
        media: [
          {
            id: "s03e24q1",
            location: `/multimedia/s03/s03e24q1/index.html`,
          },
          {
            id: "s03e24q2",
            location: "/multimedia/s03/s03e24q2/index.html",
          },
          {
            id: "s03e24q3",
            location: "/multimedia/s03/s03e24q3/index.html",
          },
        ],
      },
      {
        id: "s03e25",
        epNo: "Episode 25",
        title: "Friends for dinner",
        media: [
          {
            id: "s03e25q1",
            location: `/multimedia/s03/s03e25q1/index.html`,
          },
          {
            id: "s03e25q2",
            location: "/multimedia/s03/s03e25q2/index.html",
          },
          {
            id: "s03e25q3",
            location: "/multimedia/s03/s03e25q3/index.html",
          },
        ],
      },
      {
        id: "s03e26",
        epNo: "Episode 26",
        title: "Citizenship matters",
        media: [
          {
            id: "s03e26q1",
            location: "/multimedia/s03/s03e26q1/index.html",
          },
          {
            id: "s03e26q2",
            location: "/multimedia/s03/s03e26q2/index.html",
          },
          {
            id: "s03e26m1",
            location: "/multimedia/s03/s03e26m1/index.html",
          },
        ],
      },
      {
        id: "s03e27",
        epNo: "Episode 27",
        title: "Preserving heritage",
        media: [
          {
            id: "s03e27q1",
            location: "/multimedia/s03/s03e27q1/index.html",
          },
          {
            id: "s03e27q2",
            location: "/multimedia/s03/s03e27q2/index.html",
          },
          {
            id: "s03e27m1",
            location: "/multimedia/s03/s03e27m1/index.html",
          },
        ],
      },
      {
        id: "s03e28",
        epNo: "Episode 28",
        title: "Taking the car to the garage",
        media: [
          {
            id: "s03e28q1",
            location: "/multimedia/s03/s03e28q1/index.html",
          },
          {
            id: "s03e28q2",
            location: "/multimedia/s03/s03e28q2/index.html",
          },
          {
            id: "s03e28m1",
            location: "/multimedia/s03/s03e28m1/index.html",
          },
        ],
      },
      {
        id: "s03e29",
        epNo: "Episode 29",
        title: "Business presentations",
        media: [
          {
            id: "s03e29q1",
            location: "/multimedia/s03/s03e29q1/index.html",
          },
          {
            id: "s03e29q2",
            location: "/multimedia/s03/s03e29q2/index.html",
          },
        ],
      },
      {
        id: "s03e30",
        epNo: "Episode 30",
        title: "Family dinner",
        media: [
          {
            id: "s03e30q1",
            location: "/multimedia/s03/s03e30q1/index.html",
          },
          {
            id: "s03e30q2",
            location: "/multimedia/s03/s03e30q2/index.html",
          },
          {
            id: "s03e30q3",
            location: "/multimedia/s03/s03e30q3/index.html",
          },
        ],
      },
    ],
  },
];

export default seasonsData;
