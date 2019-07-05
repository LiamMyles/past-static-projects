var answers1 = [false, true, false, false];
var answers2 = [false, false, true, false];
var answers3 = [true, false, false, false];
var answers4 = [false, false, false, true];
var answers5 = [false, false, true, false];
var answers6 = [false, false, false, true];

var questions = ["What was Ivan Pavlov originally researching with his dogs?",
		"What action did Thorndike’s puzzle box required the animal to do to get out?",
		"What is John Broadus Watson’s relationship with behaviourism?",
		"Which one of this stimuli was used to induce a phobia in Little Albert?",
		"What served as negative reinforcement in the Skinner box?",
		"Which one of these are children NOT mentioned doing to the toys in Bandura’s Bobo doll experiment?"];

var textAnswers1 = ["Saliva contents",
			"Digestion",
			"Dog breeding",
			"Aggressiveness"];
var textAnswers2 = ["Salivate",
			"Eat the food",
			"Use a lever",
			"Open the door"];
var textAnswers3 = ["He introduced and defined it",
			"He laid down the foundation for its inception",
			"He studied the speed at which cats got out of cages",
			"He studied if social behaviours could be transmitted by observation"];
var textAnswers4 = ["a rabbit",
			"various masks",
			"a monkey",
			"white rat"];
var textAnswers5 = ["Food",
			"Turned on lights",
			"An electric current",
			"Little Albert"];
var textAnswers6 = ["punching Bobo",
			"being verbally agrassive",
			"being physically agressive",
			"sticking a knife into it"];


var questionNum = 0;
var answerSelected = 0;
var score = 0;
var choiceMade = false;

function selected(choice)
{
	answerSelected = choice;
	choiceMade = true;
//	window.alert(answerSelected);
}

function nextQuestion() {
	var x = 0;
	if(choiceMade === true || questionNum == 0)
	{
		if(questionNum == 0)
		{
			document.getElementById("quizIntro").style.display = "none";
			document.getElementById("quiz").style.display = "Block";

			document.getElementById("quizHeader").innerHTML = questions[0];

			for (i = 0; i < 4; i++)
			{
				x++;
				var s = x.toString();
				var num = "answer" + s;
				document.getElementById(num).innerHTML = textAnswers1[i];
			}
		}
		else if (questionNum == 1) 
		{
			document.getElementById("quizHeader").innerHTML = questions[1];

			for (i = 0; i < 4; i++)
			{
				x++;
				var s = x.toString();
				var num = "answer" + s;
				document.getElementById(num).innerHTML = textAnswers2[i];
			}
			if(answers1[answerSelected] === true)
			{
				score++;
				window.alert("correct");			
			}
			else
			{
				for (i = 0; i < 4; i++)
				{
					if(answers1[i] === true)
					{
						var a = i + 1;
						alert("Wrong, the correct answer was number "+ a);
					}
				}
			}
		}
		else if(questionNum == 2)
		{
			document.getElementById("quizHeader").innerHTML = questions[2];

			for (i = 0; i < 4; i++)
			{
				x++;
				var s = x.toString();
				var num = "answer" + s;
				document.getElementById(num).innerHTML = textAnswers3[i];
			}
			if(answers2[answerSelected] === true)
			{
				score++;
				window.alert("correct");			
			}
			else
			{
				for (i = 0; i < 4; i++)
				{
					if(answers2[i] === true)
					{
						var a = i + 1;
						alert("Wrong, the correct answer was number "+ a);
					}
				}
			}
		}
		else if(questionNum == 3)
		{
			document.getElementById("quizHeader").innerHTML = questions[3];

			for (i = 0; i < 4; i++)
			{
				x++;
				var s = x.toString();
				var num = "answer" + s;
				document.getElementById(num).innerHTML = textAnswers4[i];
			}
			if(answers3[answerSelected] === true)
			{
				score++;
				window.alert("correct");			
			}
			else
			{
				for (i = 0; i < 4; i++)
				{
					if(answers3[i] === true)
					{
						var a = i + 1;
						alert("Wrong, the correct answer was number "+ a);
					}
				}
			}
		}
		else if(questionNum == 4)
		{
			document.getElementById("quizHeader").innerHTML = questions[4];

			for (i = 0; i < 4; i++)
			{
				x++;
				var s = x.toString();
				var num = "answer" + s;
				document.getElementById(num).innerHTML = textAnswers5[i];
			}
			if(answers4[answerSelected] === true)
			{
				score++;
				window.alert("correct");			
			}
			else
			{
				for (i = 0; i < 4; i++)
				{
					if(answers4[i] === true)
					{
						var a = i + 1;
						alert("Wrong, the correct answer was number "+ a);
					}
				}
			}
		}
		else if(questionNum == 5)
		{
			document.getElementById("quizHeader").innerHTML = questions[5];

			for (i = 0; i < 4; i++)
			{
				x++;
				var s = x.toString();
				var num = "answer" + s;
				document.getElementById(num).innerHTML = textAnswers6[i];
			}
			if(answers5[answerSelected] === true)
			{
				score++;
				window.alert("correct");			
			}
			else
			{
				for (i = 0; i < 4; i++)
				{
					if(answers5[i] === true)
					{
						var a = i + 1;
						alert("Wrong, the correct answer was number "+ a);
					}
				}
			}
		}
		else if(questionNum == 6)
		{
			if(answers6[answerSelected] === true)
			{
				score++;
				window.alert("correct");			
			}
			else
			{
				for (i = 0; i < 4; i++)
				{
					if(answers6[i] === true)
					{
						var a = i + 1;
						alert("Wrong, the correct answer was number "+ a);
					}
				}
			}
			document.getElementById("scoreScreen").style.display = "Block";
			document.getElementById("quiz").style.display = "none";
			document.getElementById("score").innerHTML = score;	
		}
//		else if(questionNum == 7)
//		{
//			document.getElementById("quizHeader").innerHTML = questions[7];
//
//			for (i = 0; i < 4; i++)
//			{
//				x++;
//				var s = x.toString();
//				var num = "answer" + s;
//				document.getElementById(num).innerHTML = textAnswers8[i];
//			}
//			if(answers7[answerSelected] === true)
//			{
//				score++;
//				window.alert("correct");			
//			}
//			else
//			{
//				for (i = 0; i < 4; i++)
//				{
//					if(answers7[i] === true)
//					{
//						var a = i + 1;
//						alert("Wrong, the correct answer was number "+ a);
//					}
//				}
//			}
//		}
//		else if(questionNum == 8)
//		{
//			if(answers8[answerSelected] === true)
//			{
//				score++;
//				window.alert("correct");			
//			}
//			else
//			{
//				for (i = 0; i < 4; i++)
//				{
//					if(answers8[i] === true)
//					{
//						var a = i + 1;
//						alert("Wrong, the correct answer was number "+ a);
//					}
//				}
//			}
//			document.getElementById("scoreScreen").style.display = "Block";
//			document.getElementById("quiz").style.display = "none";
//			document.getElementById("score").innerHTML = score;	
//		}
//	}
	else
	{
		window.alert("You must make a choice first");
	}
	
	
	document.getElementById("form").reset();
	
	questionNum++;
	choiceMade = false;
}
}