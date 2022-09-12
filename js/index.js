//card arrays

var challenges = [
  'faceTheCookie',
  'thisBlows',
  'sharpShooter',
  'aBitDicey',
  'tiltACup',
  'readySpaghetti', // two player
  'junkInTheTrunk',
  'floatacious',
  'stayOnKey',  
  'walrus',
  'officeTennis', // two player
  'tearItUp',
  'goTheDistance',
  'noodlingAround',
  'chandelier', // two player
  'flipYourLid',
  'giveItAWhirl',
  'fieldGoal' // two player
];

var currentChallenge = 0;
var teamScore={
  1: 0,
  2: 0,
  3: 0,
  4: 0
}

$('.fullscreen-fg').hide();
$('.video-buttons').hide();

var direction=['+=50%','-=50%'];//direction switches with each shuffle
function newChallenge (){ 
    //swap out the video source
  playVideo(challenges[currentChallenge]);  
  $('.blueprint-buttons').show();
  $('.timer-buttons').hide();
}

var replayVideo = function(){
  playVideo(challenges[currentChallenge]);
};
function startTimer() {
  playVideo('timer');
  $('.blueprint-buttons').hide();  
  $('.timer-buttons').show();
}
function playVideo(name) {
  $('.fullscreen-fg').html('<video autoplay class="fullscreen-fg__video"><source src="video/'+name+'.mp4" type="video/mp4"></video>')
  $('.fullscreen-fg').show();
  $('.video-buttons').show();
}
function closeVideo(){
  $('.fullscreen-fg').html('');
  $('.video-buttons').hide();
  $('.fullscreen-fg').hide();
  currentChallenge += 1;
  if (currentChallenge >= challenges.length) {
    gameOver();
  }
}
function changeScore(team, amount){
  console.log('changing score');
  teamScore[team] += amount;
  renderScore(team);
}
function gameOver() {
  console.log('gameOver');
  //finish game
  currentChallenge = 0;
  teamScore = {
    1: 0,
    2: 0,
    3: 0,
    4: 0
  };
  renderScore(1);
  renderScore(2);
  renderScore(3);
  renderScore(4);
}
function renderScore(team){
  $('#team' + team + 'score .score').html(teamScore[team]);
  
}