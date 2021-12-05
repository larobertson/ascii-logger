import * as vscode from 'vscode';
import * as _ from 'lodash'
import {asciiLib} from './asciiLib';
import drawAscii from './drawAscii';


const isUpperCase = (str: string) => {
  if (str === str.toUpperCase()) {
    return true;
  }
  return false;
};

const formatLabels = (keyName: string) => {
  let labelName: string = '';
  for (const letter of keyName) {
    if (labelName === '') {
      labelName += letter.toUpperCase();
    } else if (isUpperCase(letter)) {
      labelName += ` ${letter}`;
    } else {
      labelName += letter;
    }
  }
  return labelName;
};


export function activate(context: vscode.ExtensionContext) {
  const asciiDrawings = _.map(asciiLib, (value:Function, key:string) => {
    return {
      label: formatLabels(key),
      fn: () => {return drawAscii(value())},
    };
  });
  console.log('asciiDrwings', asciiDrawings);

	

	let disposable = vscode.commands.registerCommand('ascii-logger.draw', async () => {
    const drawing = await vscode.window.showQuickPick(asciiDrawings, {matchOnDetail: true});
    if (!vscode.window.activeTextEditor) {
      return; // no editor
    }
    const editor = vscode.window.activeTextEditor;
    const ascii = new vscode.SnippetString(drawing?.fn());
    editor.insertSnippet(ascii);
    // console.log('methods on vscode.window.activeTextEditor', vscode.window.activeTextEditor);
    // // if (document.uri.scheme !== myScheme) {
    // //   return; // not my scheme
    // // }
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
