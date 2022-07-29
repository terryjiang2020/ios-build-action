module.exports=(()=>{var e={932:(e,t,s)=>{const i=s(186);const n=s(514);async function run(){try{if(!i.getInput("p12-base64")&&(!i.getInput("p12-key-base64")||!i.getInput("p12-cer-base64"))&&!i.getInput("p12-path")&&(!i.getInput("p12-key-path")||!i.getInput("p12-cer-path"))){throw new Error("P12 keys missing or in the wrong format.")}if(!i.getInput("mobileprovision-base64")&&!i.getInput("mobileprovision-path")){throw new Error("mobileprovision missing or in the wrong format.")}process.env.P12_BASE64=i.getInput("p12-base64");process.env.P12_KEY_BASE64=i.getInput("p12-key-base64");process.env.P12_CER_BASE64=i.getInput("p12-cer-base64");process.env.MOBILEPROVISION_BASE64=i.getInput("mobileprovision-base64");process.env.P12_PATH=i.getInput("p12-path");process.env.P12_KEY_PATH=i.getInput("p12-key-path");process.env.P12_CER_PATH=i.getInput("p12-cer-path");process.env.MOBILEPROVISION_PATH=i.getInput("mobileprovision-path");process.env.PROJECT_PATH=i.getInput("project-path");process.env.CODE_SIGNING_IDENTITY=i.getInput("code-signing-identity");process.env.TEAM_ID=i.getInput("team-id");process.env.WORKSPACE_PATH=i.getInput("workspace-path");process.env.EXPORT_METHOD=i.getInput("export-method");process.env.CONFIGURATION=i.getInput("configuration");process.env.CERTIFICATE_PASSWORD=i.getInput("certificate-password");process.env.OUTPUT_PATH=i.getInput("output-path");process.env.SCHEME=i.getInput("scheme");process.env.UPDATE_TARGETS=i.getInput("update-targets");process.env.DISABLE_TARGETS=i.getInput("disable-targets");process.env.EXPORT_OPTIONS=i.getInput("export-options");process.env.CLONED_SOURCE_PACKAGES_PATH=i.getInput("cloned-source-packages-path");process.env.BUILD_SDK=i.getInput("build-sdk");process.env.BUILD_DESTINATION=i.getInput("build-destination");process.env.AUTOMATIC_SIGNING=i.getInput("automatic-signing");await n.exec(`bash ${__dirname}/../build.sh`)}catch(e){i.setFailed(e.message)}}run()},351:function(e,t,s){"use strict";var i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var s in e)if(Object.hasOwnProperty.call(e,s))t[s]=e[s];t["default"]=e;return t};Object.defineProperty(t,"__esModule",{value:true});const n=i(s(87));const r=s(278);function issueCommand(e,t,s){const i=new Command(e,t,s);process.stdout.write(i.toString()+n.EOL)}t.issueCommand=issueCommand;function issue(e,t=""){issueCommand(e,{},t)}t.issue=issue;const o="::";class Command{constructor(e,t,s){if(!e){e="missing.command"}this.command=e;this.properties=t;this.message=s}toString(){let e=o+this.command;if(this.properties&&Object.keys(this.properties).length>0){e+=" ";let t=true;for(const s in this.properties){if(this.properties.hasOwnProperty(s)){const i=this.properties[s];if(i){if(t){t=false}else{e+=","}e+=`${s}=${escapeProperty(i)}`}}}}e+=`${o}${escapeData(this.message)}`;return e}}function escapeData(e){return r.toCommandValue(e).replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A")}function escapeProperty(e){return r.toCommandValue(e).replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A").replace(/:/g,"%3A").replace(/,/g,"%2C")}},186:function(e,t,s){"use strict";var i=this&&this.__awaiter||function(e,t,s,i){function adopt(e){return e instanceof s?e:new s(function(t){t(e)})}return new(s||(s=Promise))(function(s,n){function fulfilled(e){try{step(i.next(e))}catch(e){n(e)}}function rejected(e){try{step(i["throw"](e))}catch(e){n(e)}}function step(e){e.done?s(e.value):adopt(e.value).then(fulfilled,rejected)}step((i=i.apply(e,t||[])).next())})};var n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var s in e)if(Object.hasOwnProperty.call(e,s))t[s]=e[s];t["default"]=e;return t};Object.defineProperty(t,"__esModule",{value:true});const r=s(351);const o=s(717);const c=s(278);const u=n(s(87));const a=n(s(622));var l;(function(e){e[e["Success"]=0]="Success";e[e["Failure"]=1]="Failure"})(l=t.ExitCode||(t.ExitCode={}));function exportVariable(e,t){const s=c.toCommandValue(t);process.env[e]=s;const i=process.env["GITHUB_ENV"]||"";if(i){const t="_GitHubActionsFileCommandDelimeter_";const i=`${e}<<${t}${u.EOL}${s}${u.EOL}${t}`;o.issueCommand("ENV",i)}else{r.issueCommand("set-env",{name:e},s)}}t.exportVariable=exportVariable;function setSecret(e){r.issueCommand("add-mask",{},e)}t.setSecret=setSecret;function addPath(e){const t=process.env["GITHUB_PATH"]||"";if(t){o.issueCommand("PATH",e)}else{r.issueCommand("add-path",{},e)}process.env["PATH"]=`${e}${a.delimiter}${process.env["PATH"]}`}t.addPath=addPath;function getInput(e,t){const s=process.env[`INPUT_${e.replace(/ /g,"_").toUpperCase()}`]||"";if(t&&t.required&&!s){throw new Error(`Input required and not supplied: ${e}`)}return s.trim()}t.getInput=getInput;function setOutput(e,t){r.issueCommand("set-output",{name:e},t)}t.setOutput=setOutput;function setCommandEcho(e){r.issue("echo",e?"on":"off")}t.setCommandEcho=setCommandEcho;function setFailed(e){process.exitCode=l.Failure;error(e)}t.setFailed=setFailed;function isDebug(){return process.env["RUNNER_DEBUG"]==="1"}t.isDebug=isDebug;function debug(e){r.issueCommand("debug",{},e)}t.debug=debug;function error(e){r.issue("error",e instanceof Error?e.toString():e)}t.error=error;function warning(e){r.issue("warning",e instanceof Error?e.toString():e)}t.warning=warning;function info(e){process.stdout.write(e+u.EOL)}t.info=info;function startGroup(e){r.issue("group",e)}t.startGroup=startGroup;function endGroup(){r.issue("endgroup")}t.endGroup=endGroup;function group(e,t){return i(this,void 0,void 0,function*(){startGroup(e);let s;try{s=yield t()}finally{endGroup()}return s})}t.group=group;function saveState(e,t){r.issueCommand("save-state",{name:e},t)}t.saveState=saveState;function getState(e){return process.env[`STATE_${e}`]||""}t.getState=getState},717:function(e,t,s){"use strict";var i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var s in e)if(Object.hasOwnProperty.call(e,s))t[s]=e[s];t["default"]=e;return t};Object.defineProperty(t,"__esModule",{value:true});const n=i(s(747));const r=i(s(87));const o=s(278);function issueCommand(e,t){const s=process.env[`GITHUB_${e}`];if(!s){throw new Error(`Unable to find environment variable for file command ${e}`)}if(!n.existsSync(s)){throw new Error(`Missing file at path: ${s}`)}n.appendFileSync(s,`${o.toCommandValue(t)}${r.EOL}`,{encoding:"utf8"})}t.issueCommand=issueCommand},278:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});function toCommandValue(e){if(e===null||e===undefined){return""}else if(typeof e==="string"||e instanceof String){return e}return JSON.stringify(e)}t.toCommandValue=toCommandValue},514:function(e,t,s){"use strict";var i=this&&this.__awaiter||function(e,t,s,i){function adopt(e){return e instanceof s?e:new s(function(t){t(e)})}return new(s||(s=Promise))(function(s,n){function fulfilled(e){try{step(i.next(e))}catch(e){n(e)}}function rejected(e){try{step(i["throw"](e))}catch(e){n(e)}}function step(e){e.done?s(e.value):adopt(e.value).then(fulfilled,rejected)}step((i=i.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:true});const n=s(159);function exec(e,t,s){return i(this,void 0,void 0,function*(){const i=n.argStringToArray(e);if(i.length===0){throw new Error(`Parameter 'commandLine' cannot be null or empty.`)}const r=i[0];t=i.slice(1).concat(t||[]);const o=new n.ToolRunner(r,t,s);return o.exec()})}t.exec=exec},159:function(e,t,s){"use strict";var i=this&&this.__awaiter||function(e,t,s,i){function adopt(e){return e instanceof s?e:new s(function(t){t(e)})}return new(s||(s=Promise))(function(s,n){function fulfilled(e){try{step(i.next(e))}catch(e){n(e)}}function rejected(e){try{step(i["throw"](e))}catch(e){n(e)}}function step(e){e.done?s(e.value):adopt(e.value).then(fulfilled,rejected)}step((i=i.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:true});const n=s(87);const r=s(614);const o=s(129);const c=s(622);const u=s(436);const a=s(962);const l=process.platform==="win32";class ToolRunner extends r.EventEmitter{constructor(e,t,s){super();if(!e){throw new Error("Parameter 'toolPath' cannot be null or empty.")}this.toolPath=e;this.args=t||[];this.options=s||{}}_debug(e){if(this.options.listeners&&this.options.listeners.debug){this.options.listeners.debug(e)}}_getCommandString(e,t){const s=this._getSpawnFileName();const i=this._getSpawnArgs(e);let n=t?"":"[command]";if(l){if(this._isCmdFile()){n+=s;for(const e of i){n+=` ${e}`}}else if(e.windowsVerbatimArguments){n+=`"${s}"`;for(const e of i){n+=` ${e}`}}else{n+=this._windowsQuoteCmdArg(s);for(const e of i){n+=` ${this._windowsQuoteCmdArg(e)}`}}}else{n+=s;for(const e of i){n+=` ${e}`}}return n}_processLineBuffer(e,t,s){try{let i=t+e.toString();let r=i.indexOf(n.EOL);while(r>-1){const e=i.substring(0,r);s(e);i=i.substring(r+n.EOL.length);r=i.indexOf(n.EOL)}t=i}catch(e){this._debug(`error processing line. Failed with error ${e}`)}}_getSpawnFileName(){if(l){if(this._isCmdFile()){return process.env["COMSPEC"]||"cmd.exe"}}return this.toolPath}_getSpawnArgs(e){if(l){if(this._isCmdFile()){let t=`/D /S /C "${this._windowsQuoteCmdArg(this.toolPath)}`;for(const s of this.args){t+=" ";t+=e.windowsVerbatimArguments?s:this._windowsQuoteCmdArg(s)}t+='"';return[t]}}return this.args}_endsWith(e,t){return e.endsWith(t)}_isCmdFile(){const e=this.toolPath.toUpperCase();return this._endsWith(e,".CMD")||this._endsWith(e,".BAT")}_windowsQuoteCmdArg(e){if(!this._isCmdFile()){return this._uvQuoteCmdArg(e)}if(!e){return'""'}const t=[" ","\t","&","(",")","[","]","{","}","^","=",";","!","'","+",",","`","~","|","<",">",'"'];let s=false;for(const i of e){if(t.some(e=>e===i)){s=true;break}}if(!s){return e}let i='"';let n=true;for(let t=e.length;t>0;t--){i+=e[t-1];if(n&&e[t-1]==="\\"){i+="\\"}else if(e[t-1]==='"'){n=true;i+='"'}else{n=false}}i+='"';return i.split("").reverse().join("")}_uvQuoteCmdArg(e){if(!e){return'""'}if(!e.includes(" ")&&!e.includes("\t")&&!e.includes('"')){return e}if(!e.includes('"')&&!e.includes("\\")){return`"${e}"`}let t='"';let s=true;for(let i=e.length;i>0;i--){t+=e[i-1];if(s&&e[i-1]==="\\"){t+="\\"}else if(e[i-1]==='"'){s=true;t+="\\"}else{s=false}}t+='"';return t.split("").reverse().join("")}_cloneExecOptions(e){e=e||{};const t={cwd:e.cwd||process.cwd(),env:e.env||process.env,silent:e.silent||false,windowsVerbatimArguments:e.windowsVerbatimArguments||false,failOnStdErr:e.failOnStdErr||false,ignoreReturnCode:e.ignoreReturnCode||false,delay:e.delay||1e4};t.outStream=e.outStream||process.stdout;t.errStream=e.errStream||process.stderr;return t}_getSpawnOptions(e,t){e=e||{};const s={};s.cwd=e.cwd;s.env=e.env;s["windowsVerbatimArguments"]=e.windowsVerbatimArguments||this._isCmdFile();if(e.windowsVerbatimArguments){s.argv0=`"${t}"`}return s}exec(){return i(this,void 0,void 0,function*(){if(!a.isRooted(this.toolPath)&&(this.toolPath.includes("/")||l&&this.toolPath.includes("\\"))){this.toolPath=c.resolve(process.cwd(),this.options.cwd||process.cwd(),this.toolPath)}this.toolPath=yield u.which(this.toolPath,true);return new Promise((e,t)=>{this._debug(`exec tool: ${this.toolPath}`);this._debug("arguments:");for(const e of this.args){this._debug(`   ${e}`)}const s=this._cloneExecOptions(this.options);if(!s.silent&&s.outStream){s.outStream.write(this._getCommandString(s)+n.EOL)}const i=new ExecState(s,this.toolPath);i.on("debug",e=>{this._debug(e)});const r=this._getSpawnFileName();const c=o.spawn(r,this._getSpawnArgs(s),this._getSpawnOptions(this.options,r));const u="";if(c.stdout){c.stdout.on("data",e=>{if(this.options.listeners&&this.options.listeners.stdout){this.options.listeners.stdout(e)}if(!s.silent&&s.outStream){s.outStream.write(e)}this._processLineBuffer(e,u,e=>{if(this.options.listeners&&this.options.listeners.stdline){this.options.listeners.stdline(e)}})})}const a="";if(c.stderr){c.stderr.on("data",e=>{i.processStderr=true;if(this.options.listeners&&this.options.listeners.stderr){this.options.listeners.stderr(e)}if(!s.silent&&s.errStream&&s.outStream){const t=s.failOnStdErr?s.errStream:s.outStream;t.write(e)}this._processLineBuffer(e,a,e=>{if(this.options.listeners&&this.options.listeners.errline){this.options.listeners.errline(e)}})})}c.on("error",e=>{i.processError=e.message;i.processExited=true;i.processClosed=true;i.CheckComplete()});c.on("exit",e=>{i.processExitCode=e;i.processExited=true;this._debug(`Exit code ${e} received from tool '${this.toolPath}'`);i.CheckComplete()});c.on("close",e=>{i.processExitCode=e;i.processExited=true;i.processClosed=true;this._debug(`STDIO streams have closed for tool '${this.toolPath}'`);i.CheckComplete()});i.on("done",(s,i)=>{if(u.length>0){this.emit("stdline",u)}if(a.length>0){this.emit("errline",a)}c.removeAllListeners();if(s){t(s)}else{e(i)}})})})}}t.ToolRunner=ToolRunner;function argStringToArray(e){const t=[];let s=false;let i=false;let n="";function append(e){if(i&&e!=='"'){n+="\\"}n+=e;i=false}for(let r=0;r<e.length;r++){const o=e.charAt(r);if(o==='"'){if(!i){s=!s}else{append(o)}continue}if(o==="\\"&&i){append(o);continue}if(o==="\\"&&s){i=true;continue}if(o===" "&&!s){if(n.length>0){t.push(n);n=""}continue}append(o)}if(n.length>0){t.push(n.trim())}return t}t.argStringToArray=argStringToArray;class ExecState extends r.EventEmitter{constructor(e,t){super();this.processClosed=false;this.processError="";this.processExitCode=0;this.processExited=false;this.processStderr=false;this.delay=1e4;this.done=false;this.timeout=null;if(!t){throw new Error("toolPath must not be empty")}this.options=e;this.toolPath=t;if(e.delay){this.delay=e.delay}}CheckComplete(){if(this.done){return}if(this.processClosed){this._setResult()}else if(this.processExited){this.timeout=setTimeout(ExecState.HandleTimeout,this.delay,this)}}_debug(e){this.emit("debug",e)}_setResult(){let e;if(this.processExited){if(this.processError){e=new Error(`There was an error when attempting to execute the process '${this.toolPath}'. This may indicate the process failed to start. Error: ${this.processError}`)}else if(this.processExitCode!==0&&!this.options.ignoreReturnCode){e=new Error(`The process '${this.toolPath}' failed with exit code ${this.processExitCode}`)}else if(this.processStderr&&this.options.failOnStdErr){e=new Error(`The process '${this.toolPath}' failed because one or more lines were written to the STDERR stream`)}}if(this.timeout){clearTimeout(this.timeout);this.timeout=null}this.done=true;this.emit("done",e,this.processExitCode)}static HandleTimeout(e){if(e.done){return}if(!e.processClosed&&e.processExited){const t=`The STDIO streams did not close within ${e.delay/1e3} seconds of the exit event from process '${e.toolPath}'. This may indicate a child process inherited the STDIO streams and has not yet exited.`;e._debug(t)}e._setResult()}}},962:function(e,t,s){"use strict";var i=this&&this.__awaiter||function(e,t,s,i){function adopt(e){return e instanceof s?e:new s(function(t){t(e)})}return new(s||(s=Promise))(function(s,n){function fulfilled(e){try{step(i.next(e))}catch(e){n(e)}}function rejected(e){try{step(i["throw"](e))}catch(e){n(e)}}function step(e){e.done?s(e.value):adopt(e.value).then(fulfilled,rejected)}step((i=i.apply(e,t||[])).next())})};var n;Object.defineProperty(t,"__esModule",{value:true});const r=s(357);const o=s(747);const c=s(622);n=o.promises,t.chmod=n.chmod,t.copyFile=n.copyFile,t.lstat=n.lstat,t.mkdir=n.mkdir,t.readdir=n.readdir,t.readlink=n.readlink,t.rename=n.rename,t.rmdir=n.rmdir,t.stat=n.stat,t.symlink=n.symlink,t.unlink=n.unlink;t.IS_WINDOWS=process.platform==="win32";function exists(e){return i(this,void 0,void 0,function*(){try{yield t.stat(e)}catch(e){if(e.code==="ENOENT"){return false}throw e}return true})}t.exists=exists;function isDirectory(e,s=false){return i(this,void 0,void 0,function*(){const i=s?yield t.stat(e):yield t.lstat(e);return i.isDirectory()})}t.isDirectory=isDirectory;function isRooted(e){e=normalizeSeparators(e);if(!e){throw new Error('isRooted() parameter "p" cannot be empty')}if(t.IS_WINDOWS){return e.startsWith("\\")||/^[A-Z]:/i.test(e)}return e.startsWith("/")}t.isRooted=isRooted;function mkdirP(e,s=1e3,n=1){return i(this,void 0,void 0,function*(){r.ok(e,"a path argument must be provided");e=c.resolve(e);if(n>=s)return t.mkdir(e);try{yield t.mkdir(e);return}catch(i){switch(i.code){case"ENOENT":{yield mkdirP(c.dirname(e),s,n+1);yield t.mkdir(e);return}default:{let s;try{s=yield t.stat(e)}catch(e){throw i}if(!s.isDirectory())throw i}}}})}t.mkdirP=mkdirP;function tryGetExecutablePath(e,s){return i(this,void 0,void 0,function*(){let i=undefined;try{i=yield t.stat(e)}catch(t){if(t.code!=="ENOENT"){console.log(`Unexpected error attempting to determine if executable file exists '${e}': ${t}`)}}if(i&&i.isFile()){if(t.IS_WINDOWS){const t=c.extname(e).toUpperCase();if(s.some(e=>e.toUpperCase()===t)){return e}}else{if(isUnixExecutable(i)){return e}}}const n=e;for(const r of s){e=n+r;i=undefined;try{i=yield t.stat(e)}catch(t){if(t.code!=="ENOENT"){console.log(`Unexpected error attempting to determine if executable file exists '${e}': ${t}`)}}if(i&&i.isFile()){if(t.IS_WINDOWS){try{const s=c.dirname(e);const i=c.basename(e).toUpperCase();for(const n of yield t.readdir(s)){if(i===n.toUpperCase()){e=c.join(s,n);break}}}catch(t){console.log(`Unexpected error attempting to determine the actual case of the file '${e}': ${t}`)}return e}else{if(isUnixExecutable(i)){return e}}}}return""})}t.tryGetExecutablePath=tryGetExecutablePath;function normalizeSeparators(e){e=e||"";if(t.IS_WINDOWS){e=e.replace(/\//g,"\\");return e.replace(/\\\\+/g,"\\")}return e.replace(/\/\/+/g,"/")}function isUnixExecutable(e){return(e.mode&1)>0||(e.mode&8)>0&&e.gid===process.getgid()||(e.mode&64)>0&&e.uid===process.getuid()}},436:function(e,t,s){"use strict";var i=this&&this.__awaiter||function(e,t,s,i){function adopt(e){return e instanceof s?e:new s(function(t){t(e)})}return new(s||(s=Promise))(function(s,n){function fulfilled(e){try{step(i.next(e))}catch(e){n(e)}}function rejected(e){try{step(i["throw"](e))}catch(e){n(e)}}function step(e){e.done?s(e.value):adopt(e.value).then(fulfilled,rejected)}step((i=i.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:true});const n=s(129);const r=s(622);const o=s(669);const c=s(962);const u=o.promisify(n.exec);function cp(e,t,s={}){return i(this,void 0,void 0,function*(){const{force:i,recursive:n}=readCopyOptions(s);const o=(yield c.exists(t))?yield c.stat(t):null;if(o&&o.isFile()&&!i){return}const u=o&&o.isDirectory()?r.join(t,r.basename(e)):t;if(!(yield c.exists(e))){throw new Error(`no such file or directory: ${e}`)}const a=yield c.stat(e);if(a.isDirectory()){if(!n){throw new Error(`Failed to copy. ${e} is a directory, but tried to copy without recursive flag.`)}else{yield cpDirRecursive(e,u,0,i)}}else{if(r.relative(e,u)===""){throw new Error(`'${u}' and '${e}' are the same file`)}yield copyFile(e,u,i)}})}t.cp=cp;function mv(e,t,s={}){return i(this,void 0,void 0,function*(){if(yield c.exists(t)){let i=true;if(yield c.isDirectory(t)){t=r.join(t,r.basename(e));i=yield c.exists(t)}if(i){if(s.force==null||s.force){yield rmRF(t)}else{throw new Error("Destination already exists")}}}yield mkdirP(r.dirname(t));yield c.rename(e,t)})}t.mv=mv;function rmRF(e){return i(this,void 0,void 0,function*(){if(c.IS_WINDOWS){try{if(yield c.isDirectory(e,true)){yield u(`rd /s /q "${e}"`)}else{yield u(`del /f /a "${e}"`)}}catch(e){if(e.code!=="ENOENT")throw e}try{yield c.unlink(e)}catch(e){if(e.code!=="ENOENT")throw e}}else{let t=false;try{t=yield c.isDirectory(e)}catch(e){if(e.code!=="ENOENT")throw e;return}if(t){yield u(`rm -rf "${e}"`)}else{yield c.unlink(e)}}})}t.rmRF=rmRF;function mkdirP(e){return i(this,void 0,void 0,function*(){yield c.mkdirP(e)})}t.mkdirP=mkdirP;function which(e,t){return i(this,void 0,void 0,function*(){if(!e){throw new Error("parameter 'tool' is required")}if(t){const t=yield which(e,false);if(!t){if(c.IS_WINDOWS){throw new Error(`Unable to locate executable file: ${e}. Please verify either the file path exists or the file can be found within a directory specified by the PATH environment variable. Also verify the file has a valid extension for an executable file.`)}else{throw new Error(`Unable to locate executable file: ${e}. Please verify either the file path exists or the file can be found within a directory specified by the PATH environment variable. Also check the file mode to verify the file is executable.`)}}}try{const t=[];if(c.IS_WINDOWS&&process.env.PATHEXT){for(const e of process.env.PATHEXT.split(r.delimiter)){if(e){t.push(e)}}}if(c.isRooted(e)){const s=yield c.tryGetExecutablePath(e,t);if(s){return s}return""}if(e.includes("/")||c.IS_WINDOWS&&e.includes("\\")){return""}const s=[];if(process.env.PATH){for(const e of process.env.PATH.split(r.delimiter)){if(e){s.push(e)}}}for(const i of s){const s=yield c.tryGetExecutablePath(i+r.sep+e,t);if(s){return s}}return""}catch(e){throw new Error(`which failed with message ${e.message}`)}})}t.which=which;function readCopyOptions(e){const t=e.force==null?true:e.force;const s=Boolean(e.recursive);return{force:t,recursive:s}}function cpDirRecursive(e,t,s,n){return i(this,void 0,void 0,function*(){if(s>=255)return;s++;yield mkdirP(t);const i=yield c.readdir(e);for(const r of i){const i=`${e}/${r}`;const o=`${t}/${r}`;const u=yield c.lstat(i);if(u.isDirectory()){yield cpDirRecursive(i,o,s,n)}else{yield copyFile(i,o,n)}}yield c.chmod(t,(yield c.stat(e)).mode)})}function copyFile(e,t,s){return i(this,void 0,void 0,function*(){if((yield c.lstat(e)).isSymbolicLink()){try{yield c.lstat(t);yield c.unlink(t)}catch(e){if(e.code==="EPERM"){yield c.chmod(t,"0666");yield c.unlink(t)}}const s=yield c.readlink(e);yield c.symlink(s,t,c.IS_WINDOWS?"junction":null)}else if(!(yield c.exists(t))||s){yield c.copyFile(e,t)}})}},357:e=>{"use strict";e.exports=require("assert")},129:e=>{"use strict";e.exports=require("child_process")},614:e=>{"use strict";e.exports=require("events")},747:e=>{"use strict";e.exports=require("fs")},87:e=>{"use strict";e.exports=require("os")},622:e=>{"use strict";e.exports=require("path")},669:e=>{"use strict";e.exports=require("util")}};var t={};function __webpack_require__(s){if(t[s]){return t[s].exports}var i=t[s]={exports:{}};var n=true;try{e[s].call(i.exports,i,i.exports,__webpack_require__);n=false}finally{if(n)delete t[s]}return i.exports}__webpack_require__.ab=__dirname+"/";return __webpack_require__(932)})();