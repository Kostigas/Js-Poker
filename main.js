//Array with all names
const NAMES = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
//Array with all Suits
const SUITS = ["♠", "♥", "♦", "♣"];

var finished = false;

var counter = 0;

var hand = [];

var nameIndex;

//Draw cards untill you have 5 in hand
while(counter != 5)
{
	var drawName = Math.floor((Math.random() * 13));
	var drawSuit = Math.floor((Math.random() * 5));
	var card = NAMES[drawName] + " " + SUITS[drawSuit];
	isValidHand(card);
	
}
console.log('The initial hand is: ' + hand);

sortHand(hand);

console.log('The sorted hand is: ' + hand);

var allNames = NAMES.join();

isFlush(hand);
isStraight(hand);


function isValidHand(x)
{
	if (isValidCard(x))
	{
		//Check for duplicated cards
		if (!hand.includes(x))
		{
			hand.push(x);
		}
		else
		{
			counter--;
		}
	}
}

function isValidCard(x)
{
	if (toName(x) && toSuit(x))
	{
		counter++;	
		return true;
	}
}


function toName(x)
{
	var splited = x.split(" ");
	if (NAMES.includes(splited[0]))
	{
		return true;
	}
}

function toSuit(x)
{
	var splited = x.split(" ");
	if (SUITS.includes(splited[1]))
	{
		return true;
	}
}

function sortHand(unsortedHand)
{
	var i = 0;
	var tempPlace;
	var isSorted = false;
	var renewed;
	
	while(isSorted == false)
	{
	
		var unsortedSplitedFirst = unsortedHand[i].split(" ");
		var unsortedSplitedSecond = unsortedHand[i+1].split(" ");
		var unsortedSplitedLast = unsortedHand[unsortedHand.length - 1].split(" ");
		var firstIndex = NAMES.indexOf(unsortedSplitedFirst[0]);
		var secondIndex = NAMES.indexOf(unsortedSplitedSecond[0]);
		var lastIndex = NAMES.indexOf(unsortedSplitedLast[0]);
		
		if (firstIndex > secondIndex)
		{
			
			tempPlace = unsortedSplitedSecond;
			unsortedSplitedSecond = unsortedSplitedFirst;
			unsortedSplitedFirst = tempPlace;
			
			renewed = unsortedSplitedFirst[0] +" "+unsortedSplitedFirst[1];
			unsortedHand[i] = renewed;
			renewed = unsortedSplitedSecond[0] +" "+unsortedSplitedSecond[1];
			unsortedHand[i+1] = renewed;
			
			i = 0;
			
		}
		else
		{
			i++
		}

		if ( i==4 )
		{
			isSorted = true;
		}
	}
}

function isStraight(sortedHand)
{
	var testFlush = [];
	for (var i = 0; i < sortedHand.length; i++)
	{
		var sortedNum = sortedHand[i].split(" ");
		testFlush.push(sortedNum[0]);
	}

	if (allNames.includes(testFlush.join()))
	{
		var joinedStraight = testFlush.join();
		joinedStraight = joinedStraight.split(",");
		console.log("STRAIGHT")
		if(isFlush(sortedHand))
		{
			if (joinedStraight[0] == "10")
			{
				console.log("ROYAL FLUSH");
			}
			else
			{
				console.log("STRAIGHT Flush")
			}
			
		}
	}
	
}


function isFlush(sortedHand)
{
	var testFlush = [];
	for (var i = 0; i < sortedHand.length; i++)
	{
		var sortedFace = sortedHand[i].split(" ");
		testFlush.push(sortedFace[1]);
	}
	if (testFlush[0] == testFlush[1] && testFlush[0] == testFlush[2] && testFlush[0] == testFlush[3] && testFlush[0] == testFlush[4])
	{
		console.log("FLUSH");
		return true;
	}
	
}

