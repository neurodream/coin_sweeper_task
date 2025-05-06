/************************** 
 * Demo_Changes_Lutz *
 **************************/

import * as visual from 'https://pavlovia.org/lib/psychojs/visual-2023.2.js';
import * as sound from 'https://pavlovia.org/lib/psychojs/sound-2023.2.js';
import * as util from 'https://pavlovia.org/lib/psychojs/util-2023.2.js';
import * as data from 'https://pavlovia.org/lib/psychojs/data-2023.2.js';

const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'demo_changes_lutz';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([-0.25,-0.25,-0.25]),
  units: 'deg',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(general_instructionRoutineBegin());
flowScheduler.add(general_instructionRoutineEachFrame());
flowScheduler.add(general_instructionRoutineEnd());
const breaksLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(breaksLoopBegin(breaksLoopScheduler));
flowScheduler.add(breaksLoopScheduler);
flowScheduler.add(breaksLoopEnd);









flowScheduler.add(goodbye_screenRoutineBegin());
flowScheduler.add(goodbye_screenRoutineEachFrame());
flowScheduler.add(goodbye_screenRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': '2_cent.png', 'path': '2_cent.png'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2023.2.3';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var general_instructionClock;
var general_instruction_text;
var continue_to_resting_T1;
var baselineClock;
var fix_cross_baseline;
var trialClock;
var DEBUG;
var give_response;
var post_response_holdClock;
var blank_post_response;
var reward_prepClock;
var blank;
var reward_revealClock;
var current_score_text;
var current_win_text;
var coin_reveal;
var break_restClock;
var break_text;
var break_counter;
var goodbye_screenClock;
var money_reveal_text;
var quit_exp;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "general_instruction"
  general_instructionClock = new util.Clock();
  general_instruction_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'general_instruction_text',
    text: 'The experimenter will now provide you with further instructions.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: letter_height,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  continue_to_resting_T1 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "baseline"
  baselineClock = new util.Clock();
  fix_cross_baseline = new visual.ShapeStim ({
    win: psychoJS.window, name: 'fix_cross_baseline', 
    vertices: 'cross', size:[(disk_r / 2), (disk_r / 2)],
    ori: 0.0, pos: [0, 0],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color(undefined),
    fillColor: new util.Color(element_color),
    opacity: 0.0, depth: -2, interpolate: true,
  });
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  DEBUG = new visual.TextStim({
    win: psychoJS.window,
    name: 'DEBUG',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  give_response = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "post_response_hold"
  post_response_holdClock = new util.Clock();
  blank_post_response = new visual.TextStim({
    win: psychoJS.window,
    name: 'blank_post_response',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "reward_prep"
  reward_prepClock = new util.Clock();
  blank = new visual.TextStim({
    win: psychoJS.window,
    name: 'blank',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "reward_reveal"
  reward_revealClock = new util.Clock();
  current_score_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'current_score_text',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 1)], height: letter_height,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color(element_color),  opacity: undefined,
    depth: 0.0 
  });
  
  current_win_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'current_win_text',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 1], height: letter_height,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color(element_color),  opacity: 1.0,
    depth: -1.0 
  });
  
  coin_reveal = new visual.ImageStim({
    win : psychoJS.window,
    name : 'coin_reveal', units : undefined, 
    image : '2_cent.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [0.75, 0.75],
    color : new util.Color([1,1,1]), opacity : 0.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : false, depth : -5.0 
  });
  // Initialize components for Routine "break_rest"
  break_restClock = new util.Clock();
  break_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'break_text',
    text: 'Short break!\n\nPlease take a moment to actively relax, before we continue in...\n\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: letter_height,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('element_color'),  opacity: undefined,
    depth: 0.0 
  });
  
  break_counter = new visual.TextStim({
    win: psychoJS.window,
    name: 'break_counter',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: letter_height,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('element_color'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "goodbye_screen"
  goodbye_screenClock = new util.Clock();
  money_reveal_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'money_reveal_text',
    text: 'The task is over.\nIn this session, you have made a total of ...€. Congratulations!\n\nThe experimenter will approach you shortly.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: letter_height,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('element_color'),  opacity: undefined,
    depth: 0.0 
  });
  
  quit_exp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var _continue_to_resting_T1_allKeys;
var global_clock;
var task_time_limit;
var general_instructionComponents;
function general_instructionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'general_instruction' ---
    t = 0;
    general_instructionClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('general_instruction.started', globalClock.getTime());
    continue_to_resting_T1.keys = undefined;
    continue_to_resting_T1.rt = undefined;
    _continue_to_resting_T1_allKeys = [];
    global_clock = new util.Clock();
    task_time_limit = (task_time_minutes * 60);
    
    // keep track of which components have finished
    general_instructionComponents = [];
    general_instructionComponents.push(general_instruction_text);
    general_instructionComponents.push(continue_to_resting_T1);
    
    for (const thisComponent of general_instructionComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function general_instructionRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'general_instruction' ---
    // get current time
    t = general_instructionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *general_instruction_text* updates
    if (t >= 0.0 && general_instruction_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      general_instruction_text.tStart = t;  // (not accounting for frame time here)
      general_instruction_text.frameNStart = frameN;  // exact frame index
      
      general_instruction_text.setAutoDraw(true);
    }
    
    
    // *continue_to_resting_T1* updates
    if (t >= 0 && continue_to_resting_T1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continue_to_resting_T1.tStart = t;  // (not accounting for frame time here)
      continue_to_resting_T1.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { continue_to_resting_T1.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { continue_to_resting_T1.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { continue_to_resting_T1.clearEvents(); });
    }
    
    if (continue_to_resting_T1.status === PsychoJS.Status.STARTED) {
      let theseKeys = continue_to_resting_T1.getKeys({keyList: ['e'], waitRelease: false});
      _continue_to_resting_T1_allKeys = _continue_to_resting_T1_allKeys.concat(theseKeys);
      if (_continue_to_resting_T1_allKeys.length > 0) {
        continue_to_resting_T1.keys = _continue_to_resting_T1_allKeys[_continue_to_resting_T1_allKeys.length - 1].name;  // just the last key pressed
        continue_to_resting_T1.rt = _continue_to_resting_T1_allKeys[_continue_to_resting_T1_allKeys.length - 1].rt;
        continue_to_resting_T1.duration = _continue_to_resting_T1_allKeys[_continue_to_resting_T1_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of general_instructionComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function general_instructionRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'general_instruction' ---
    for (const thisComponent of general_instructionComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('general_instruction.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(continue_to_resting_T1.corr, level);
    }
    psychoJS.experiment.addData('continue_to_resting_T1.keys', continue_to_resting_T1.keys);
    if (typeof continue_to_resting_T1.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('continue_to_resting_T1.rt', continue_to_resting_T1.rt);
        psychoJS.experiment.addData('continue_to_resting_T1.duration', continue_to_resting_T1.duration);
        routineTimer.reset();
        }
    
    continue_to_resting_T1.stop();
    // the Routine "general_instruction" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var breaks;
function breaksLoopBegin(breaksLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    breaks = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 4, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'breaks'
    });
    psychoJS.experiment.addLoop(breaks); // add the loop to the experiment
    currentLoop = breaks;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisBreak of breaks) {
      snapshot = breaks.getSnapshot();
      breaksLoopScheduler.add(importConditions(snapshot));
      const trialsLoopScheduler = new Scheduler(psychoJS);
      breaksLoopScheduler.add(trialsLoopBegin(trialsLoopScheduler, snapshot));
      breaksLoopScheduler.add(trialsLoopScheduler);
      breaksLoopScheduler.add(trialsLoopEnd);
      breaksLoopScheduler.add(break_restRoutineBegin(snapshot));
      breaksLoopScheduler.add(break_restRoutineEachFrame());
      breaksLoopScheduler.add(break_restRoutineEnd(snapshot));
      breaksLoopScheduler.add(breaksLoopEndIteration(breaksLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 10000, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
      snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(baselineRoutineBegin(snapshot));
      trialsLoopScheduler.add(baselineRoutineEachFrame());
      trialsLoopScheduler.add(baselineRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialRoutineBegin(snapshot));
      trialsLoopScheduler.add(trialRoutineEachFrame());
      trialsLoopScheduler.add(trialRoutineEnd(snapshot));
      trialsLoopScheduler.add(post_response_holdRoutineBegin(snapshot));
      trialsLoopScheduler.add(post_response_holdRoutineEachFrame());
      trialsLoopScheduler.add(post_response_holdRoutineEnd(snapshot));
      trialsLoopScheduler.add(reward_prepRoutineBegin(snapshot));
      trialsLoopScheduler.add(reward_prepRoutineEachFrame());
      trialsLoopScheduler.add(reward_prepRoutineEnd(snapshot));
      trialsLoopScheduler.add(reward_revealRoutineBegin(snapshot));
      trialsLoopScheduler.add(reward_revealRoutineEachFrame());
      trialsLoopScheduler.add(reward_revealRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function breaksLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(breaks);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function breaksLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var baselineComponents;
function baselineRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'baseline' ---
    t = 0;
    baselineClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('baseline.started', globalClock.getTime());
    // keep track of which components have finished
    baselineComponents = [];
    baselineComponents.push(fix_cross_baseline);
    
    for (const thisComponent of baselineComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function baselineRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'baseline' ---
    // get current time
    t = baselineClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fix_cross_baseline* updates
    if (t >= 0.0 && fix_cross_baseline.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fix_cross_baseline.tStart = t;  // (not accounting for frame time here)
      fix_cross_baseline.frameNStart = frameN;  // exact frame index
      
      fix_cross_baseline.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of baselineComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function baselineRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'baseline' ---
    for (const thisComponent of baselineComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('baseline.stopped', globalClock.getTime());
    // the Routine "baseline" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _give_response_allKeys;
var trialComponents;
function trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial' ---
    t = 0;
    trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('trial.started', globalClock.getTime());
    give_response.keys = undefined;
    give_response.rt = undefined;
    _give_response_allKeys = [];
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(DEBUG);
    trialComponents.push(give_response);
    
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial' ---
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *DEBUG* updates
    if (t >= 0.0 && DEBUG.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      DEBUG.tStart = t;  // (not accounting for frame time here)
      DEBUG.frameNStart = frameN;  // exact frame index
      
      DEBUG.setAutoDraw(true);
    }
    
    
    // *give_response* updates
    if (t >= 0.0 && give_response.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      give_response.tStart = t;  // (not accounting for frame time here)
      give_response.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { give_response.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { give_response.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { give_response.clearEvents(); });
    }
    
    if (give_response.status === PsychoJS.Status.STARTED) {
      let theseKeys = give_response.getKeys({keyList: ['space'], waitRelease: false});
      _give_response_allKeys = _give_response_allKeys.concat(theseKeys);
      if (_give_response_allKeys.length > 0) {
        give_response.keys = _give_response_allKeys[_give_response_allKeys.length - 1].name;  // just the last key pressed
        give_response.rt = _give_response_allKeys[_give_response_allKeys.length - 1].rt;
        give_response.duration = _give_response_allKeys[_give_response_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial' ---
    for (const thisComponent of trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial.stopped', globalClock.getTime());
    give_response.stop();
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var post_response_holdComponents;
function post_response_holdRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'post_response_hold' ---
    t = 0;
    post_response_holdClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.300000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('post_response_hold.started', globalClock.getTime());
    // keep track of which components have finished
    post_response_holdComponents = [];
    post_response_holdComponents.push(blank_post_response);
    
    for (const thisComponent of post_response_holdComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function post_response_holdRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'post_response_hold' ---
    // get current time
    t = post_response_holdClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *blank_post_response* updates
    if (t >= 0.0 && blank_post_response.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blank_post_response.tStart = t;  // (not accounting for frame time here)
      blank_post_response.frameNStart = frameN;  // exact frame index
      
      blank_post_response.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (blank_post_response.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      blank_post_response.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of post_response_holdComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function post_response_holdRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'post_response_hold' ---
    for (const thisComponent of post_response_holdComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('post_response_hold.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var reward_prepComponents;
function reward_prepRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'reward_prep' ---
    t = 0;
    reward_prepClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('reward_prep.started', globalClock.getTime());
    // keep track of which components have finished
    reward_prepComponents = [];
    reward_prepComponents.push(blank);
    
    for (const thisComponent of reward_prepComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function reward_prepRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'reward_prep' ---
    // get current time
    t = reward_prepClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *blank* updates
    if (t >= 0.0 && blank.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blank.tStart = t;  // (not accounting for frame time here)
      blank.frameNStart = frameN;  // exact frame index
      
      blank.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of reward_prepComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function reward_prepRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'reward_prep' ---
    for (const thisComponent of reward_prepComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('reward_prep.stopped', globalClock.getTime());
    // the Routine "reward_prep" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var reward_revealComponents;
function reward_revealRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'reward_reveal' ---
    t = 0;
    reward_revealClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('reward_reveal.started', globalClock.getTime());
    // keep track of which components have finished
    reward_revealComponents = [];
    reward_revealComponents.push(current_score_text);
    reward_revealComponents.push(current_win_text);
    reward_revealComponents.push(coin_reveal);
    
    for (const thisComponent of reward_revealComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function reward_revealRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'reward_reveal' ---
    // get current time
    t = reward_revealClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *current_score_text* updates
    if (t >= 0.0 && current_score_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      current_score_text.tStart = t;  // (not accounting for frame time here)
      current_score_text.frameNStart = frameN;  // exact frame index
      
      current_score_text.setAutoDraw(true);
    }
    
    
    // *current_win_text* updates
    if (t >= 0.0 && current_win_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      current_win_text.tStart = t;  // (not accounting for frame time here)
      current_win_text.frameNStart = frameN;  // exact frame index
      
      current_win_text.setAutoDraw(true);
    }
    
    
    // *coin_reveal* updates
    if (t >= 0.0 && coin_reveal.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      coin_reveal.tStart = t;  // (not accounting for frame time here)
      coin_reveal.frameNStart = frameN;  // exact frame index
      
      coin_reveal.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of reward_revealComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function reward_revealRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'reward_reveal' ---
    for (const thisComponent of reward_revealComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('reward_reveal.stopped', globalClock.getTime());
    // the Routine "reward_reveal" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var break_restComponents;
function break_restRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'break_rest' ---
    t = 0;
    break_restClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('break_rest.started', globalClock.getTime());
    // keep track of which components have finished
    break_restComponents = [];
    break_restComponents.push(break_text);
    break_restComponents.push(break_counter);
    
    for (const thisComponent of break_restComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function break_restRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'break_rest' ---
    // get current time
    t = break_restClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *break_text* updates
    if (t >= 0.0 && break_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      break_text.tStart = t;  // (not accounting for frame time here)
      break_text.frameNStart = frameN;  // exact frame index
      
      break_text.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + resting_dur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (break_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      break_text.setAutoDraw(false);
    }
    
    // *break_counter* updates
    if (t >= 0.0 && break_counter.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      break_counter.tStart = t;  // (not accounting for frame time here)
      break_counter.frameNStart = frameN;  // exact frame index
      
      break_counter.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + resting_dur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (break_counter.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      break_counter.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of break_restComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function break_restRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'break_rest' ---
    for (const thisComponent of break_restComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('break_rest.stopped', globalClock.getTime());
    // the Routine "break_rest" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _quit_exp_allKeys;
var goodbye_screenComponents;
function goodbye_screenRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'goodbye_screen' ---
    t = 0;
    goodbye_screenClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('goodbye_screen.started', globalClock.getTime());
    quit_exp.keys = undefined;
    quit_exp.rt = undefined;
    _quit_exp_allKeys = [];
    // keep track of which components have finished
    goodbye_screenComponents = [];
    goodbye_screenComponents.push(money_reveal_text);
    goodbye_screenComponents.push(quit_exp);
    
    for (const thisComponent of goodbye_screenComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function goodbye_screenRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'goodbye_screen' ---
    // get current time
    t = goodbye_screenClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *money_reveal_text* updates
    if (t >= 0 && money_reveal_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      money_reveal_text.tStart = t;  // (not accounting for frame time here)
      money_reveal_text.frameNStart = frameN;  // exact frame index
      
      money_reveal_text.setAutoDraw(true);
    }
    
    
    // *quit_exp* updates
    if (t >= 1.0 && quit_exp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      quit_exp.tStart = t;  // (not accounting for frame time here)
      quit_exp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { quit_exp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { quit_exp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { quit_exp.clearEvents(); });
    }
    
    if (quit_exp.status === PsychoJS.Status.STARTED) {
      let theseKeys = quit_exp.getKeys({keyList: ['e'], waitRelease: false});
      _quit_exp_allKeys = _quit_exp_allKeys.concat(theseKeys);
      if (_quit_exp_allKeys.length > 0) {
        quit_exp.keys = _quit_exp_allKeys[_quit_exp_allKeys.length - 1].name;  // just the last key pressed
        quit_exp.rt = _quit_exp_allKeys[_quit_exp_allKeys.length - 1].rt;
        quit_exp.duration = _quit_exp_allKeys[_quit_exp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of goodbye_screenComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function goodbye_screenRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'goodbye_screen' ---
    for (const thisComponent of goodbye_screenComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('goodbye_screen.stopped', globalClock.getTime());
    quit_exp.stop();
    // the Routine "goodbye_screen" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
