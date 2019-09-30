//Question array with answers and explanation
var questionArray = {
	questions: [
		{
			text:
				'Johnny Cash married his second wife in 1968. She was part of one of the most well known musical groups in country music history. What was her name?',
			choices: [ 'Dolly Parton', 'June Carter', 'May Carter', 'Olivia Newton John' ],
			answer: 1,
			explanation:
				'TRUTH: Johnny Cash was married to June Carter (after they married she was known as June Carter Cash). She was part of the famous Carter Family, who are quite often referred to as the first family of country music.'
		},

		//Question 2
		{
			text: 'Singer George Jones went by this animal nickname?',
			choices: [ 'Possum', 'Panda Bear', 'Wombat', 'Honey Badger' ],
			answer: 0,
			explanation:
				'TRUTH: George Jones was nicknamed Possum because of his eyes which were very close together and made people say he resemled a possum.'
		},

		//Question 3
		{
			text: 'Which of these singers was NOT a member of The Highwaymen?',
			choices: [ 'Willie Nelson', 'Kris Kristofferson', 'Merle Haggard', 'Waylon Jennings' ],
			answer: 2,
			explanation:
				'TRUTH: Merle Haggard, while a contemporary and good friend of the other four singers, was not a member of the Highwaymen. His music is part of what is referred to as the Bakersfield Sound.'
		},

		//Question 4
		{
			text:
				'This singer was supposed to be on the same plane that crashed and killed Buddy Holly, but he gave his seat up to the Big Bopper who also died in the crash.',
			choices: [ 'George Jones', 'Waylon Jennings', 'Porter Wagoner', 'Johnny Cash' ],
			answer: 1,
			explanation:
				'TRUTH: Waylon Jennings and Buddy Holly were good friends back in Texas. It is said that Waylon never fully got over the loss of his good friend.'
		},

		//Question 5
		{
			text: "What is Johnny Paycheck's real name?",
			choices: [ 'Henry Deutschendorf Jr.', 'Hiram Williams', 'Donald Lytle', 'Ira Loudermilk' ],
			answer: 2,
			explanation: 'TRUTH: Johnny Paycheck was born Donald Eugene Lytle on May 31, 1938, in Greenfield, Ohio.'
		},

		//Question 6
		{
			text: "Who wrote Johnny Paycheck's 1977 number one hit song, Take This Job and Shove It?",
			choices: [ 'Tom T. Hall', 'David Allan Coe', 'Guy Clark', 'Swamp Dogg' ],
			answer: 1,
			explanation: 'TRUTH: David Allan Coe is a talented songwriter who was born in Akron, Ohio.'
		},

		//Question 7
		{
			text: 'At which prison did Johnny Cash NOT record a live album?',
			choices: [
				'Tennessee State Prison',
				'Folsom State Prison',
				'San Quentin State Prison',
				'Leavenworth Federal Penitentiary'
			],
			answer: 0,
			explanation:
				'TRUTH: While Johnny cash recorded more than a few live albums at prisions, Tennessee State Prison was not one of them. Johnny Cash wanted to bring prisioners hope and for them to feel seen. This is what inspired him to give concerts in prision.'
		},

		//Question 8
		{
			text:
				'After his wife hid all of his car keys, what mode of transportation did George Jones famously use to get to the liquor store 8 miles away?',
			choices: [ 'A horse', 'A jet ski', 'A riding lawnmower', 'Roller skates' ],
			answer: 2,
			explanation:
				'TRUTH: A riding lawnmower. This story has become legend among outlaw country music aficionados.'
		},

		//Question 9
		{
			text:
				'Singer and songwriter Gram Parsons overdosed on morphine in 1973 during a trip to visit which national park?',
			choices: [ 'Big Bear', 'Grand Canyon', 'Joshua Tree', 'White Sands' ],
			answer: 2,
			explanation:
				'TRUTH: Gram Parsons overdosed while at Joshua Tree national park. Gram Parsons was first known for his work with the Byrds and he had a great influence on the Rolling Stones which can be heard on their iconic Exile on Main Street record.'
		},

		//Question 10
		{
			text: 'In 1975, Hank Williams Jr. almost died accidentally while doing what activity?',
			choices: [ 'Motorcycle stunts', 'Rock climbing', 'Fleeing the police to avoid a DUI', 'Shaving' ],
			answer: 1,
			explanation:
				'TRUTH: Rock climbing. Hank Williams Jr. was lucky not to have died during his accident. He had multiple skull fractures and had to have multiple surgeries to repair them.'
		},

		//Question 11
		{
			text:
				'In 1981 Johnny Cash was hospitalized after being attacked by an animal from his own personal zoo. What kind of animal was it?',
			choices: [ 'Alligator', 'Ostrich', 'Chimpanzee', 'Wolverine' ],
			answer: 1,
			explanation:
				"TRUTH: An ostrich. Johnny Cash's encounter with the ostrich caused him to have five broken ribs which may have contributed to his relapse into a downward spiral with painkillers."
		},

		//Question 12
		{
			text: "Name the first track off of Willie Nelson's 1975 album“Red Headed Stranger.",
			choices: [ 'Red Headed Stranger', 'Blue Eyes Crying in the Rain', 'Time of the Preacher', 'Whiskey River' ],
			answer: 2,
			explanation:
				'TRUTH: Time of the Preacher is the first song on Red Headed Stranger. It is a classic country album! If you have not heard it you need to stop right now and remedy that!'
		}
	],

	good: [ 'You done did good Hoss!' ],

	bad: [ 'Try again Hoss!' ],

	//Track the score
	score: 0,
	//Track the current question
	currentQuestionIndex: 0,
	//Advance from page to page
	path: 'start',
	//Used in the function to answer questions in function
	lastAnswerCorrect: false,
	//Feedback from previous attempt
	feedbackRandom: 0
};

//Traverse the various pages
function setPath(questionArray, path) {
	questionArray.path = path;
}

function resetGame(questionArray) {
	questionArray.score = 0;
	questionArray.currentQuestionIndex = 0;
	setPath(questionArray, 'start');
}

//Gives good or bad feedback after answers
function answerQuestion(questionArray, answer) {
	var currentQuestion = questionArray.questions[questionArray.currentQuestionIndex];
	questionArray.lastAnswerCorrect = currentQuestion.answer === answer;
	if (questionArray.lastAnswerCorrect) {
		questionArray.score++;
	}
	selectFeedback(questionArray);
	setPath(questionArray, 'answer-feedback');
}

function selectFeedback(questionArray) {
	questionArray.feedbackRandom = Math.random();
}

//if quiz is not over, it will continue
function advance(questionArray) {
	questionArray.currentQuestionIndex++;
	if (questionArray.currentQuestionIndex === questionArray.questions.length) {
		setPath(questionArray, 'final-feedback');
	} else {
		setPath(questionArray, 'question');
	}
}

//---RENDER FUNCTIONS--->//

//Function that will display quiz
//Hide all pages, then displays current page using the path. If / Else function
function renderQuiz(questionArray, elements) {
	Object.keys(elements).forEach(function(path) {
		elements[path].hide();
	});

	elements[questionArray.path].show();

	if (questionArray.path === 'start') {
		renderStartPage(questionArray, elements[questionArray.path]);
	} else if (questionArray.path === 'question') {
		//Set path to question page
		renderQuestionPage(questionArray, elements[questionArray.path]);
	} else if (questionArray.path === 'answer-feedback') {
		//Set path to feedback page
		renderAnswerFeedbackPage(questionArray, elements[questionArray.path]);
	} else if (questionArray.path === 'final-feedback') {
		//Set path to final feedback page
		renderFinalFeedbackPage(questionArray, elements[questionArray.path]);
	}
}

//This displays question page
function renderQuestionPage(questionArray, element) {
	renderQuestionCount(questionArray, element.find('.question-count'));
	renderQuestionText(questionArray, element.find('.question-text'));
	renderChoices(questionArray, element.find('.choices'));
}

//This displays feedback after each question and has 'next' button
function renderAnswerFeedbackPage(questionArray, element) {
	renderAnswerFeedbackHeader(questionArray, element.find('.feedback-header'));
	renderAnswerFeedbackText(questionArray, element.find('.feedback-text'));
	renderExplanation(questionArray, element.find('.explanation'));
	renderNextButtonText(questionArray, element.find('.see-next'));
	renderCurrentScore(questionArray, element.find('.current-score'));
}

//Display final feedback after the quiz
function renderFinalFeedbackPage(questionArray, element) {
	renderFinalFeedbackText(questionArray, element.find('.results-text'));
}

function renderQuestionCount(questionArray, element) {
	var text = questionArray.currentQuestionIndex + 1 + '/' + questionArray.questions.length;

	element.text(text);
}

//Render the question
function renderQuestionText(questionArray, element) {
	var currentQuestion = questionArray.questions[questionArray.currentQuestionIndex];
	element.text(currentQuestion.text);
}

//Render the explanation
function renderExplanation(questionArray, element) {
	var currentQuestion = questionArray.questions[questionArray.currentQuestionIndex];
	element.text(currentQuestion.explanation);
}

//Render the current score
function renderCurrentScore(questionArray, element) {
	var score = questionArray.score;
	var currentQuestionIndex = questionArray.currentQuestionIndex;
	/*var scoreElement = $('.current-score'); 
  scoreElement.text("Your score is " + score + "/" + currentQuestionIndex);*/
}

//Render the choices
function renderChoices(questionArray, element) {
	var currentQuestion = questionArray.questions[questionArray.currentQuestionIndex];
	var choices = currentQuestion.choices.map(function(choice, index) {
		return (
			'<input type="radio" name="user-answer" value="' +
			index +
			'" required>' +
			'<label>' +
			choice +
			'</label><br/>'
		);
	});

	element.html(choices);
}

function renderAnswerFeedbackHeader(questionArray, element) {
	var html = questionArray.lastAnswerCorrect
		? "<h4 class='user-was-correct'>Correct</h4>"
		: "<h4 class='user-was-incorrect'>Wrong!</>";

	element.html(html);
}

function renderAnswerFeedbackText(questionArray, element) {
	var choices = questionArray.lastAnswerCorrect ? questionArray.good : questionArray.bad;
	var text = choices[Math.floor(questionArray.feedbackRandom * choices.length)];

	element.text(text);
}

function renderNextButtonText(questionArray, element) {
	var text =
		questionArray.currentQuestionIndex < questionArray.questions.length - 1
			? 'Keep it Going!'
			: "What's the score?";

	element.text(text);
}

//What will be displayed when quiz is completed
function renderFinalFeedbackText(questionArray, element) {
	var text = 'You got ' + questionArray.score + ' out of ' + questionArray.questions.length + ' questions right.';

	element.text(text);
}

//Page elements
var PAGE_ELEMENTS = {
	start: $('.start-page'),
	question: $('.questions-page'),
	'answer-feedback': $('.answer-feedback-page'),
	'final-feedback': $('.final-feedback-page')
};

//Event to start quiz and go to first question
$('.game-start').submit(function(event) {
	event.preventDefault();
	setPath(questionArray, 'question');
	renderQuiz(questionArray, PAGE_ELEMENTS);
});

//Event to restart quiz
$('.restart-game').click(function(event) {
	event.preventDefault();
	resetGame(questionArray);
	renderQuiz(questionArray, PAGE_ELEMENTS);
});

//Receive choice from user
$("form[name='current-question']").submit(function(event) {
	event.preventDefault();
	var answer = $("input[name='user-answer']:checked").val();
	answer = parseInt(answer, 6);
	answerQuestion(questionArray, answer);
	renderQuiz(questionArray, PAGE_ELEMENTS);
});

$('.see-next').click(function(event) {
	advance(questionArray);
	renderQuiz(questionArray, PAGE_ELEMENTS);
});

$(function() {
	renderQuiz(questionArray, PAGE_ELEMENTS);
});
