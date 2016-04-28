Fork this repository for your final project. For week 3, you will be adding your project proposal to this README. The proposal just needs to be a description of what your project will be. The following elements are required in your project:

1. An Express server running on Node.
2. At least one module you have written `require`'d in and used on this server. This one may not be an Express router module.
3. At least one Express router module (this is in addition to the module required in #2.
4. A single page Backbone application to run in the browser. This application must include the following (4 modules total as a minimum):
   1. At least one Backbone model or collection module. If you're using a collection, define a separate model module for that collection.
   2. At least least 3 total Backbone view modules.
   3. At least one Backbone router module that supports at least 2 separate routes.
5. A **package.json** file that includes all your project dependencies and dev dependencies (basically everything necessary for me to npm install and run your application.)
6. An **.eslintrc** linting file. All of your code must be completely linted.

**I strongly recommend you keep your project simple**. There is a lot to do here, and any complexity will blow up the amount of time and effort required to complete it. Remember to build the simplest thing possible to achieve the task your application is meant to accomplish and avoid feature creep. You can always iterate on what you've built *after* you've completed the minimum viable product.

*include your proposal in this README after this line:*

# Final_Project: Proposal (Katja Borchert)

Topic: Data Representation Tool for a Memory Experiment

Server Side:

(1) express Node server that reports back:
* memoryData Module: with
- 'private' data from several participants that participated in a memory experiment (it's pretend data for now); similar to the foodTrucks (see below for example data)
=> if possible this data base should be 'dynamic' and have a way to accept and add data of new participants
-  methods to retrieve data to make them accessible for client/browser manipulations
* express router module: no specific idea yet what to do here. Problem: I will need to learn what the express router module is and what it is best used for.

Browser/Client Side (Backbone Application):
- tabular and graph data in different ways for individual participants and across participants
(graphing probably only possible if I figure out a javascript graphing library)
- I am not familiar with Backbone, so I am not sure yet what I could use it for

Example Data:

var memoryData = [
  {//first object: data of participant 1
    date: "4/26/16",
    time: "20:46:00",
    subjectid: 1,
    groupid: 1,
    duration: 14048,
    platform: "win",
    completed: true,
	
	listWords : ["dog", "fox", "horse", "buffalo", "lion", "rhino", "elephant", "antelope", "bear", "lamb", "rat", "raccoon"],
	distractorWords: []
	presentationOrder: "sequence",
	
	SRT: {
		trialData: [//array of 12 trial objects
			{
				Recall: 5,
				LTS: 4,
				LTR: 4,
				CLTR: 3,
				randCLTR: 1,
				STR: 1
			},		
			{
				Recall: 7,
				LTS: 6,
				LTR: 6,
				CLTR: 4,
				randCLTR: 2,
				STR: 1
			},
			{
				Recall: 10,
				LTS: 10,
				LTR: 10,
				CLTR: 6,
				randCLTR: 4,
				STR: 0
			},
			{
				Recall: 12,
				LTS: 12,
				LTR: 12,
				CLTR: 8,
				randCLTR: 4,
				STR: 0
			},
			
			{
				Recall: 10,
				LTS: 12,
				LTR: 10,
				CLTR: 8,
				randCLTR: 2,
				STR: 0
			},		

			{
				Recall: 11,
				LTS: 12,
				LTR: 11,
				CLTR: 10,
				randCLTR: 1,
				STR: 0
			},
		
			{
				Recall: 12,
				LTS: 12,
				LTR: 12,
				CLTR: 11,
				randCLTR: 1,
				STR: 0
			},
		
			{
				Recall: 11,
				LTS: 12,
				LTR: 11,
				CLTR: 11,
				randCLTR: 0,
				STR: 0
			},
		
			{
				Recall: 12,
				LTS: 12,
				LTR: 12,
				CLTR: 11,
				randCLTR: 1,
				STR: 0
			},
		
			{
				Recall: 12,
				LTS: 12,
				LTR: 12,
				CLTR: 11,
				randCLTR: 1,
				STR: 0
			},
		
			{
				Recall: 12,
				LTS: 12,
				LTR: 12,
				CLTR: 11,
				randCLTR: 1,
				STR: 0
			},
			{
				Recall: 11,
				LTS: 12,
				LTR: 11,
				CLTR: 11,
				randCLTR: 0,
				STR: 0
			},	
		],
		extraResponses: 4,	
		
		presentedWords: [//array of 12 arrays: each representing the words presented during trial1-12
			["dog","fox","horse","buffalo", "lion", "rhino", "elephant", "antelope", "bear", "lamb", "rat", "raccoon"],
			["horse", "buffalo", "lion"antelope"bear"lamb"raccoon"],
			["buffalo", "lion"antelope"bear"rat","],
			["lion", "lamb","]
			[],
			["fox", "bear"],
			["raccoon"],
			[],
			["buffalo","],
			[],
			[],
			[]
		],

		recalledWord: [//array of 12 arrays: the words that were recalled in trial 1-12
			["dog", "fox", "rhino", "elephant", "rat", "flag"],
			["dog", "fox", "horse" "rhino", "elephant", "lamb", "raccoon", "flag"],
			["dog", "fox", "horse" "buffalo", "rhino", "elephant", "antelope", "bear", "rat", "raccoon", "flag"],
			["dog", "fox", "horse" "buffalo", "lion", "rhino", "elephant", "antelope", "bear", "lamb", "rat", "raccoon", "flag"],
			["dog", "horse" "buffalo", "lion", "rhino", "elephant", "antelope", "lamb", "rat", "raccoon"],
			["dog", "fox", "horse" "buffalo", "lion", "rhino", "elephant", "antelope", "bear", "lamb", "rat"],
			["dog", "fox", "horse" "buffalo", "lion", "rhino", "elephant", "antelope", "bear", "lamb", "rat", "raccoon"],
			["dog", "fox", "horse" "lion", "rhino", "elephant", "antelope", "bear", "lamb", "rat", "raccoon"],
			["dog", "fox", "horse" "buffalo", "lion", "rhino", "elephant", "antelope", "bear", "lamb", "rat", "raccoon"],
			["dog", "fox", "horse" "buffalo", "lion", "rhino", "elephant", "antelope", "bear", "lamb", "rat", "raccoon"],
			["dog", "fox", "horse" "buffalo", "lion", "rhino", "elephant", "antelope", "bear", "lamb", "rat", "raccoon"],
			["dog", "fox", "horse" "lion", "rhino", "elephant", "antelope", "bear", "lamb", "rat", "raccoon"]
		],	
	
		recallPositions: [//array of 12 arrays: the positions each of the 12 words was recalled in the 12 trials
			[1,1,1,1,1,1,1,1,1,1,1,1],
			[2,2,2,2,0,2,2,2,2,2,2,2],
			[0,3,3,3,2,3,3,3,3,3,3,3],
			[0,0,4,4,3,4,4,0,4,4,4,0],
			[0,0,0,5,4,5,5,4,5,5,5,4],
			[3,4,5,6,5,6,6,5,6,6,6,5],
			[4,5,6,7,6,7,7,6,7,7,7,6],
			[0,0,7,8,7,8,8,7,8,8,8,7],
			[0,0,8,9,0,9,9,8,9,9,9,8],
			[0,6,0,10,8,10,10,9,10,10,10,9],
			[5,0,9,11,9,11,11,10,11,11,11,10],
			[0,7,10,12,10,0,12,11,12,12,12,11]
		]	
	},//end of SRT (task) property
	"DR": {
		Recall: 5,
		"extraResponses": 1,
		"recalledWords": ["dog", "fox", "rhino", "elephant", "rat", "flag"]
	},//end of DR (task) property
	"MCR": {
		"hits": 3,
		"FAs": 6,
		"selectedWords": ["horse","lamb"rat",,wolf,pig,mouse,sheep,donkey,turtle"]
	}//end of MR (task) property	   
  },//end of participant 1 data
  {participant2 data comes here}
]