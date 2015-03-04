# superbowl
This is a node.js server that serves up any team's super bowls if you go to the /team/ and type in the team you're looking for in CapitalizeByWord!

THIS WILL NOT WORK ON YOUR TEST SERVER WITHOUT NODE INSTALLED.

if you'd like to use this in the session, please hit the server that the test is running from, it's always running!

see the example below for how you can retrieve json based on any team.

You first need to make sure that Node is installed on your computer, as well as NPM. 

you can see a working model of this here:

http://ec2-54-69-26-195.us-west-2.compute.amazonaws.com:3000/

for example: http://ec2-54-69-26-195.us-west-2.compute.amazonaws.com:3000/team/GreenBayPackers

will return :

{
  "sb": [
    {
      "date": "January 15, 1967",
      "teams": [
        "Green Bay Packers",
        "Kansas City Chiefs"
      ],
      "location": "Los Angeles Memorial Coliseum",
      "score": "35-10",
      "winner": "Green Bay Packers",
      "attendance": "61,946",
      "sbYear": "I"
    },
    {
      "date": "January 14, 1968",
      "teams": [
        "Green Bay Packers",
        "Oakland Raiders"
      ],
      "location": "Orange Bowl",
      "score": "33-14",
      "winner": "Green Bay Packers",
      "attendance": "75,546",
      "sbYear": "II"
    },
    {
      "date": "January 26, 1997",
      "teams": [
        "Green Bay Packers",
        "New England Patriots"
      ],
      "location": "Louisiana Superdome",
      "score": "35-21",
      "winner": "Green Bay Packers",
      "attendance": "72,301",
      "sbYear": "XXXI"
    },
    {
      "date": "January 25, 1998",
      "teams": [
        "Green Bay Packers",
        "Denver Broncos"
      ],
      "location": "Qualcomm Stadium",
      "score": "31–24",
      "winner": "Denver Broncos",
      "attendance": "68,912",
      "sbYear": "XXXII"
    },
    {
      "date": "February 6, 2011",
      "teams": [
        "Green Bay Packers",
        "Pittsburgh Steelers"
      ],
      "location": "Cowboys Stadium",
      "score": "31–25",
      "winner": "Green Bay Packers",
      "attendance": "103,219",
      "sbYear": "XLV"
    }
  ]
}

As you can see, you can get the information for each Super Bowl as the date of the super bowl, the teams that played, the location(stadium),
the final score, the winner, the attendance, and the name of the Super Bowl(ex. "I", "XLV")
