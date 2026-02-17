/*
 * programTypes.ts
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT license.
 *
 * Various interfaces/types used in
 */
import { DiagnosticRuleSet } from '../common/configOptions';
import { ConsoleInterface } from '../common/console';
import { LogTracker } from '../common/logTracker';
import { ServiceProvider } from '../common/serviceProvider';
import { Uri } from '../common/uri/uri';
import { IPythonMode, SourceFile, SourceFileEditMode } from './sourceFile';

export interface ISourceFileFactory {
    createSourceFile(
        serviceProvider: ServiceProvider,
        fileUri: Uri,
        moduleNameGetter: (file: Uri) => string,
        isThirdPartyImport: boolean,
        isThirdPartyPyTypedPresent: boolean,
        editMode: SourceFileEditMode,
        console?: ConsoleInterface,
        logTracker?: LogTracker,
        ipythonMode?: IPythonMode,
        initialDiagnosticRuleSet?: DiagnosticRuleSet
    ): SourceFile;
}

export namespace ISourceFileFactory {
    export function is(obj: any): obj is ISourceFileFactory {
        return obj.createSourceFile !== undefined;
    }
}
