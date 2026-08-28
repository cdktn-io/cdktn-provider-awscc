/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ecs_daemon_task_definition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccEcsDaemonTaskDefinitionConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ecs_daemon_task_definition#id DataAwsccEcsDaemonTaskDefinition#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOn {
}

export function dataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnToTerraform(struct?: DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOn): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnToHclTerraform(struct?: DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOn): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // condition - computed: true, optional: false, required: false
  public get condition() {
    return this.getStringAttribute('condition');
  }

  // container_name - computed: true, optional: false, required: false
  public get containerName() {
    return this.getStringAttribute('container_name');
  }
}

export class DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference {
    return new DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironment {
}

export function dataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentToTerraform(struct?: DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironment): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentToHclTerraform(struct?: DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironment): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference {
    return new DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFiles {
}

export function dataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesToTerraform(struct?: DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFiles): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesToHclTerraform(struct?: DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFiles): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFiles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFiles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference {
    return new DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfiguration {
}

export function dataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationToTerraform(struct?: DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationToHclTerraform(struct?: DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // options - computed: true, optional: false, required: false
  private _options = new cdktn.StringMap(this, "options");
  public get options() {
    return this._options;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheck {
}

export function dataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckToTerraform(struct?: DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheck): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckToHclTerraform(struct?: DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheck): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // command - computed: true, optional: false, required: false
  public get command() {
    return this.getListAttribute('command');
  }

  // interval - computed: true, optional: false, required: false
  public get interval() {
    return this.getNumberAttribute('interval');
  }

  // retries - computed: true, optional: false, required: false
  public get retries() {
    return this.getNumberAttribute('retries');
  }

  // start_period - computed: true, optional: false, required: false
  public get startPeriod() {
    return this.getNumberAttribute('start_period');
  }

  // timeout - computed: true, optional: false, required: false
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
}
export interface DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilities {
}

export function dataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesToTerraform(struct?: DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilities): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesToHclTerraform(struct?: DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilities): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // add - computed: true, optional: false, required: false
  public get add() {
    return this.getListAttribute('add');
  }

  // drop - computed: true, optional: false, required: false
  public get drop() {
    return this.getListAttribute('drop');
  }
}
export interface DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevices {
}

export function dataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesToTerraform(struct?: DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevices): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesToHclTerraform(struct?: DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevices): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // container_path - computed: true, optional: false, required: false
  public get containerPath() {
    return this.getStringAttribute('container_path');
  }

  // host_path - computed: true, optional: false, required: false
  public get hostPath() {
    return this.getStringAttribute('host_path');
  }

  // permissions - computed: true, optional: false, required: false
  public get permissions() {
    return this.getListAttribute('permissions');
  }
}

export class DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference {
    return new DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfs {
}

export function dataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsToTerraform(struct?: DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsToHclTerraform(struct?: DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // container_path - computed: true, optional: false, required: false
  public get containerPath() {
    return this.getStringAttribute('container_path');
  }

  // mount_options - computed: true, optional: false, required: false
  public get mountOptions() {
    return this.getListAttribute('mount_options');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }
}

export class DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference {
    return new DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParameters {
}

export function dataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersToTerraform(struct?: DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersToHclTerraform(struct?: DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // capabilities - computed: true, optional: false, required: false
  private _capabilities = new DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference(this, "capabilities");
  public get capabilities() {
    return this._capabilities;
  }

  // devices - computed: true, optional: false, required: false
  private _devices = new DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesList(this, "devices", false);
  public get devices() {
    return this._devices;
  }

  // init_process_enabled - computed: true, optional: false, required: false
  public get initProcessEnabled() {
    return this.getBooleanAttribute('init_process_enabled');
  }

  // tmpfs - computed: true, optional: false, required: false
  private _tmpfs = new DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList(this, "tmpfs", false);
  public get tmpfs() {
    return this._tmpfs;
  }
}
export interface DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptions {
}

export function dataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsToTerraform(struct?: DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsToHclTerraform(struct?: DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value_from - computed: true, optional: false, required: false
  public get valueFrom() {
    return this.getStringAttribute('value_from');
  }
}

export class DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference {
    return new DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfiguration {
}

export function dataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationToTerraform(struct?: DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationToHclTerraform(struct?: DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // log_driver - computed: true, optional: false, required: false
  public get logDriver() {
    return this.getStringAttribute('log_driver');
  }

  // options - computed: true, optional: false, required: false
  private _options = new cdktn.StringMap(this, "options");
  public get options() {
    return this._options;
  }

  // secret_options - computed: true, optional: false, required: false
  private _secretOptions = new DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList(this, "secret_options", false);
  public get secretOptions() {
    return this._secretOptions;
  }
}
export interface DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPoints {
}

export function dataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsToTerraform(struct?: DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPoints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsToHclTerraform(struct?: DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPoints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPoints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // container_path - computed: true, optional: false, required: false
  public get containerPath() {
    return this.getStringAttribute('container_path');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // source_volume - computed: true, optional: false, required: false
  public get sourceVolume() {
    return this.getStringAttribute('source_volume');
  }
}

export class DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference {
    return new DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentials {
}

export function dataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsToTerraform(struct?: DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentials): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsToHclTerraform(struct?: DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentials): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // credentials_parameter - computed: true, optional: false, required: false
  public get credentialsParameter() {
    return this.getStringAttribute('credentials_parameter');
  }
}
export interface DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicy {
}

export function dataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyToTerraform(struct?: DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyToHclTerraform(struct?: DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // ignored_exit_codes - computed: true, optional: false, required: false
  public get ignoredExitCodes() {
    return this.getNumberListAttribute('ignored_exit_codes');
  }

  // restart_attempt_period - computed: true, optional: false, required: false
  public get restartAttemptPeriod() {
    return this.getNumberAttribute('restart_attempt_period');
  }
}
export interface DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecrets {
}

export function dataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsToTerraform(struct?: DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecrets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsToHclTerraform(struct?: DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecrets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecrets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecrets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value_from - computed: true, optional: false, required: false
  public get valueFrom() {
    return this.getStringAttribute('value_from');
  }
}

export class DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference {
    return new DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControls {
}

export function dataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsToTerraform(struct?: DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControls): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsToHclTerraform(struct?: DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControls): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference {
    return new DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimits {
}

export function dataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsToTerraform(struct?: DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimits): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsToHclTerraform(struct?: DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimits): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimits | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimits | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hard_limit - computed: true, optional: false, required: false
  public get hardLimit() {
    return this.getNumberAttribute('hard_limit');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // soft_limit - computed: true, optional: false, required: false
  public get softLimit() {
    return this.getNumberAttribute('soft_limit');
  }
}

export class DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference {
    return new DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEcsDaemonTaskDefinitionContainerDefinitions {
}

export function dataAwsccEcsDaemonTaskDefinitionContainerDefinitionsToTerraform(struct?: DataAwsccEcsDaemonTaskDefinitionContainerDefinitions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEcsDaemonTaskDefinitionContainerDefinitionsToHclTerraform(struct?: DataAwsccEcsDaemonTaskDefinitionContainerDefinitions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsccEcsDaemonTaskDefinitionContainerDefinitions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEcsDaemonTaskDefinitionContainerDefinitions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // command - computed: true, optional: false, required: false
  public get command() {
    return this.getListAttribute('command');
  }

  // cpu - computed: true, optional: false, required: false
  public get cpu() {
    return this.getNumberAttribute('cpu');
  }

  // depends_on - computed: true, optional: false, required: false
  private _dependsOn = new DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsDependsOnList(this, "depends_on", false);
  public get dependsOn() {
    return this._dependsOn;
  }

  // entry_point - computed: true, optional: false, required: false
  public get entryPoint() {
    return this.getListAttribute('entry_point');
  }

  // environment - computed: true, optional: false, required: false
  private _environment = new DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentList(this, "environment", false);
  public get environment() {
    return this._environment;
  }

  // environment_files - computed: true, optional: false, required: false
  private _environmentFiles = new DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesList(this, "environment_files", false);
  public get environmentFiles() {
    return this._environmentFiles;
  }

  // essential - computed: true, optional: false, required: false
  public get essential() {
    return this.getBooleanAttribute('essential');
  }

  // firelens_configuration - computed: true, optional: false, required: false
  private _firelensConfiguration = new DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference(this, "firelens_configuration");
  public get firelensConfiguration() {
    return this._firelensConfiguration;
  }

  // health_check - computed: true, optional: false, required: false
  private _healthCheck = new DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference(this, "health_check");
  public get healthCheck() {
    return this._healthCheck;
  }

  // image - computed: true, optional: false, required: false
  public get image() {
    return this.getStringAttribute('image');
  }

  // interactive - computed: true, optional: false, required: false
  public get interactive() {
    return this.getBooleanAttribute('interactive');
  }

  // linux_parameters - computed: true, optional: false, required: false
  private _linuxParameters = new DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference(this, "linux_parameters");
  public get linuxParameters() {
    return this._linuxParameters;
  }

  // log_configuration - computed: true, optional: false, required: false
  private _logConfiguration = new DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference(this, "log_configuration");
  public get logConfiguration() {
    return this._logConfiguration;
  }

  // memory - computed: true, optional: false, required: false
  public get memory() {
    return this.getNumberAttribute('memory');
  }

  // memory_reservation - computed: true, optional: false, required: false
  public get memoryReservation() {
    return this.getNumberAttribute('memory_reservation');
  }

  // mount_points - computed: true, optional: false, required: false
  private _mountPoints = new DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsMountPointsList(this, "mount_points", false);
  public get mountPoints() {
    return this._mountPoints;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // privileged - computed: true, optional: false, required: false
  public get privileged() {
    return this.getBooleanAttribute('privileged');
  }

  // pseudo_terminal - computed: true, optional: false, required: false
  public get pseudoTerminal() {
    return this.getBooleanAttribute('pseudo_terminal');
  }

  // readonly_root_filesystem - computed: true, optional: false, required: false
  public get readonlyRootFilesystem() {
    return this.getBooleanAttribute('readonly_root_filesystem');
  }

  // repository_credentials - computed: true, optional: false, required: false
  private _repositoryCredentials = new DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference(this, "repository_credentials");
  public get repositoryCredentials() {
    return this._repositoryCredentials;
  }

  // restart_policy - computed: true, optional: false, required: false
  private _restartPolicy = new DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference(this, "restart_policy");
  public get restartPolicy() {
    return this._restartPolicy;
  }

  // secrets - computed: true, optional: false, required: false
  private _secrets = new DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSecretsList(this, "secrets", false);
  public get secrets() {
    return this._secrets;
  }

  // start_timeout - computed: true, optional: false, required: false
  public get startTimeout() {
    return this.getNumberAttribute('start_timeout');
  }

  // stop_timeout - computed: true, optional: false, required: false
  public get stopTimeout() {
    return this.getNumberAttribute('stop_timeout');
  }

  // system_controls - computed: true, optional: false, required: false
  private _systemControls = new DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsSystemControlsList(this, "system_controls", false);
  public get systemControls() {
    return this._systemControls;
  }

  // ulimits - computed: true, optional: false, required: false
  private _ulimits = new DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsUlimitsList(this, "ulimits", false);
  public get ulimits() {
    return this._ulimits;
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getStringAttribute('user');
  }

  // working_directory - computed: true, optional: false, required: false
  public get workingDirectory() {
    return this.getStringAttribute('working_directory');
  }
}

export class DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference {
    return new DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEcsDaemonTaskDefinitionTags {
}

export function dataAwsccEcsDaemonTaskDefinitionTagsToTerraform(struct?: DataAwsccEcsDaemonTaskDefinitionTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEcsDaemonTaskDefinitionTagsToHclTerraform(struct?: DataAwsccEcsDaemonTaskDefinitionTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEcsDaemonTaskDefinitionTagsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsccEcsDaemonTaskDefinitionTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEcsDaemonTaskDefinitionTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsccEcsDaemonTaskDefinitionTagsList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsccEcsDaemonTaskDefinitionTagsOutputReference {
    return new DataAwsccEcsDaemonTaskDefinitionTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEcsDaemonTaskDefinitionVolumesHost {
}

export function dataAwsccEcsDaemonTaskDefinitionVolumesHostToTerraform(struct?: DataAwsccEcsDaemonTaskDefinitionVolumesHost): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEcsDaemonTaskDefinitionVolumesHostToHclTerraform(struct?: DataAwsccEcsDaemonTaskDefinitionVolumesHost): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEcsDaemonTaskDefinitionVolumesHost | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEcsDaemonTaskDefinitionVolumesHost | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // source_path - computed: true, optional: false, required: false
  public get sourcePath() {
    return this.getStringAttribute('source_path');
  }
}
export interface DataAwsccEcsDaemonTaskDefinitionVolumes {
}

export function dataAwsccEcsDaemonTaskDefinitionVolumesToTerraform(struct?: DataAwsccEcsDaemonTaskDefinitionVolumes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEcsDaemonTaskDefinitionVolumesToHclTerraform(struct?: DataAwsccEcsDaemonTaskDefinitionVolumes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsccEcsDaemonTaskDefinitionVolumes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEcsDaemonTaskDefinitionVolumes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // host - computed: true, optional: false, required: false
  private _host = new DataAwsccEcsDaemonTaskDefinitionVolumesHostOutputReference(this, "host");
  public get host() {
    return this._host;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataAwsccEcsDaemonTaskDefinitionVolumesList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference {
    return new DataAwsccEcsDaemonTaskDefinitionVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ecs_daemon_task_definition awscc_ecs_daemon_task_definition}
*/
export class DataAwsccEcsDaemonTaskDefinition extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_ecs_daemon_task_definition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccEcsDaemonTaskDefinition resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccEcsDaemonTaskDefinition to import
  * @param importFromId The id of the existing DataAwsccEcsDaemonTaskDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ecs_daemon_task_definition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccEcsDaemonTaskDefinition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ecs_daemon_task_definition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ecs_daemon_task_definition awscc_ecs_daemon_task_definition} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccEcsDaemonTaskDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccEcsDaemonTaskDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_ecs_daemon_task_definition',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.99.0',
        providerVersionConstraint: '~> 1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // container_definitions - computed: true, optional: false, required: false
  private _containerDefinitions = new DataAwsccEcsDaemonTaskDefinitionContainerDefinitionsList(this, "container_definitions", true);
  public get containerDefinitions() {
    return this._containerDefinitions;
  }

  // cpu - computed: true, optional: false, required: false
  public get cpu() {
    return this.getStringAttribute('cpu');
  }

  // daemon_task_definition_arn - computed: true, optional: false, required: false
  public get daemonTaskDefinitionArn() {
    return this.getStringAttribute('daemon_task_definition_arn');
  }

  // execution_role_arn - computed: true, optional: false, required: false
  public get executionRoleArn() {
    return this.getStringAttribute('execution_role_arn');
  }

  // family - computed: true, optional: false, required: false
  public get family() {
    return this.getStringAttribute('family');
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ipc_mode - computed: true, optional: false, required: false
  public get ipcMode() {
    return this.getStringAttribute('ipc_mode');
  }

  // memory - computed: true, optional: false, required: false
  public get memory() {
    return this.getStringAttribute('memory');
  }

  // pid_mode - computed: true, optional: false, required: false
  public get pidMode() {
    return this.getStringAttribute('pid_mode');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccEcsDaemonTaskDefinitionTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // task_role_arn - computed: true, optional: false, required: false
  public get taskRoleArn() {
    return this.getStringAttribute('task_role_arn');
  }

  // volumes - computed: true, optional: false, required: false
  private _volumes = new DataAwsccEcsDaemonTaskDefinitionVolumesList(this, "volumes", true);
  public get volumes() {
    return this._volumes;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktn.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
