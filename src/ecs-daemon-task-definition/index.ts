/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon_task_definition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface EcsDaemonTaskDefinitionConfig extends cdktn.TerraformMetaArguments {
  /**
  * A list of container definitions in JSON format that describe the containers that make up the daemon task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon_task_definition#container_definitions EcsDaemonTaskDefinition#container_definitions}
  */
  readonly containerDefinitions?: EcsDaemonTaskDefinitionContainerDefinitions[] | cdktn.IResolvable;
  /**
  * The number of CPU units used by the daemon task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon_task_definition#cpu EcsDaemonTaskDefinition#cpu}
  */
  readonly cpu?: string;
  /**
  * The Amazon Resource Name (ARN) of the task execution role that grants the Amazon ECS container agent permission to make Amazon Web Services API calls on your behalf.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon_task_definition#execution_role_arn EcsDaemonTaskDefinition#execution_role_arn}
  */
  readonly executionRoleArn?: string;
  /**
  * The name of a family that this daemon task definition is registered to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon_task_definition#family EcsDaemonTaskDefinition#family}
  */
  readonly family?: string;
  /**
  * The IPC namespace mode for the daemon. The valid values are ``none`` and ``shared``. The default is ``none``.
  *  If ``none`` is specified or no value is provided, the daemon runs with its own IPC namespace, isolated from other tasks. If ``shared`` is specified, the daemon joins the host IPC namespace, making it accessible to non-daemon tasks that use ``ipcMode: "host"`` or other daemons that use ``ipcMode: "shared"``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon_task_definition#ipc_mode EcsDaemonTaskDefinition#ipc_mode}
  */
  readonly ipcMode?: string;
  /**
  * The amount of memory (in MiB) used by the daemon task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon_task_definition#memory EcsDaemonTaskDefinition#memory}
  */
  readonly memory?: string;
  /**
  * The PID namespace mode for the daemon. The valid values are ``none`` and ``shared``. The default is ``none``.
  *  If ``none`` is specified or no value is provided, the daemon runs with its own PID namespace, isolated from other tasks. If ``shared`` is specified, the daemon joins the host PID namespace, making it accessible to non-daemon tasks that use ``pidMode: "host"`` or other daemons that use ``pidMode: "shared"``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon_task_definition#pid_mode EcsDaemonTaskDefinition#pid_mode}
  */
  readonly pidMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon_task_definition#tags EcsDaemonTaskDefinition#tags}
  */
  readonly tags?: EcsDaemonTaskDefinitionTags[] | cdktn.IResolvable;
  /**
  * The short name or full Amazon Resource Name (ARN) of the IAM role that grants containers in the daemon task permission to call Amazon Web Services APIs on your behalf.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon_task_definition#task_role_arn EcsDaemonTaskDefinition#task_role_arn}
  */
  readonly taskRoleArn?: string;
  /**
  * The list of data volume definitions for the daemon task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon_task_definition#volumes EcsDaemonTaskDefinition#volumes}
  */
  readonly volumes?: EcsDaemonTaskDefinitionVolumes[] | cdktn.IResolvable;
}
export interface EcsDaemonTaskDefinitionContainerDefinitionsDependsOn {
  /**
  * The dependency condition of the container. The following are the available conditions and their behavior:
  *   +  ``START`` - This condition emulates the behavior of links and volumes today. It validates that a dependent container is started before permitting other containers to start.
  *   +  ``COMPLETE`` - This condition validates that a dependent container runs to completion (exits) before permitting other containers to start. This can be useful for nonessential containers that run a script and then exit. This condition can't be set on an essential container.
  *   +  ``SUCCESS`` - This condition is the same as ``COMPLETE``, but it also requires that the container exits with a ``zero`` status. This condition can't be set on an essential container.
  *   +  ``HEALTHY`` - This condition validates that the dependent container passes its Docker health check before permitting other containers to start. This requires that the dependent container has health checks configured. This condition is confirmed only at task startup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon_task_definition#condition EcsDaemonTaskDefinition#condition}
  */
  readonly condition?: string;
  /**
  * The name of a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon_task_definition#container_name EcsDaemonTaskDefinition#container_name}
  */
  readonly containerName?: string;
}

export function ecsDaemonTaskDefinitionContainerDefinitionsDependsOnToTerraform(struct?: EcsDaemonTaskDefinitionContainerDefinitionsDependsOn | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    condition: cdktn.stringToTerraform(struct!.condition),
    container_name: cdktn.stringToTerraform(struct!.containerName),
  }
}


export function ecsDaemonTaskDefinitionContainerDefinitionsDependsOnToHclTerraform(struct?: EcsDaemonTaskDefinitionContainerDefinitionsDependsOn | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    condition: {
      value: cdktn.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    container_name: {
      value: cdktn.stringToHclTerraform(struct!.containerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): EcsDaemonTaskDefinitionContainerDefinitionsDependsOn | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._containerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerName = this._containerName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsDaemonTaskDefinitionContainerDefinitionsDependsOn | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._condition = undefined;
      this._containerName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._condition = value.condition;
      this._containerName = value.containerName;
    }
  }

  // condition - computed: true, optional: true, required: false
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  public resetCondition() {
    this._condition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // container_name - computed: true, optional: true, required: false
  private _containerName?: string; 
  public get containerName() {
    return this.getStringAttribute('container_name');
  }
  public set containerName(value: string) {
    this._containerName = value;
  }
  public resetContainerName() {
    this._containerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerNameInput() {
    return this._containerName;
  }
}

export class EcsDaemonTaskDefinitionContainerDefinitionsDependsOnList extends cdktn.ComplexList {
  public internalValue? : EcsDaemonTaskDefinitionContainerDefinitionsDependsOn[] | cdktn.IResolvable

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
  public get(index: number): EcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference {
    return new EcsDaemonTaskDefinitionContainerDefinitionsDependsOnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EcsDaemonTaskDefinitionContainerDefinitionsEnvironment {
  /**
  * The name of the key-value pair. For environment variables, this is the name of the environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon_task_definition#name EcsDaemonTaskDefinition#name}
  */
  readonly name?: string;
  /**
  * The value of the key-value pair. For environment variables, this is the value of the environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon_task_definition#value EcsDaemonTaskDefinition#value}
  */
  readonly value?: string;
}

export function ecsDaemonTaskDefinitionContainerDefinitionsEnvironmentToTerraform(struct?: EcsDaemonTaskDefinitionContainerDefinitionsEnvironment | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function ecsDaemonTaskDefinitionContainerDefinitionsEnvironmentToHclTerraform(struct?: EcsDaemonTaskDefinitionContainerDefinitionsEnvironment | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): EcsDaemonTaskDefinitionContainerDefinitionsEnvironment | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsDaemonTaskDefinitionContainerDefinitionsEnvironment | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class EcsDaemonTaskDefinitionContainerDefinitionsEnvironmentList extends cdktn.ComplexList {
  public internalValue? : EcsDaemonTaskDefinitionContainerDefinitionsEnvironment[] | cdktn.IResolvable

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
  public get(index: number): EcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference {
    return new EcsDaemonTaskDefinitionContainerDefinitionsEnvironmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFiles {
  /**
  * The file type to use. Environment files are objects in Amazon S3. The only supported value is ``s3``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon_task_definition#type EcsDaemonTaskDefinition#type}
  */
  readonly type?: string;
  /**
  * The Amazon Resource Name (ARN) of the Amazon S3 object containing the environment variable file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon_task_definition#value EcsDaemonTaskDefinition#value}
  */
  readonly value?: string;
}

export function ecsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesToTerraform(struct?: EcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFiles | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function ecsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesToHclTerraform(struct?: EcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFiles | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): EcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFiles | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFiles | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class EcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesList extends cdktn.ComplexList {
  public internalValue? : EcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFiles[] | cdktn.IResolvable

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
  public get(index: number): EcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference {
    return new EcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EcsDaemonTaskDefinitionContainerDefinitionsFirelensConfiguration {
  /**
  * The options to use when configuring the log router. This field is optional and can be used to specify a custom configuration file or to add additional metadata, such as the task, task definition, cluster, and container instance details to the log event. If specified, the syntax to use is ``"options":{"enable-ecs-log-metadata":"true|false","config-file-type:"s3|file","config-file-value":"arn:aws:s3:::mybucket/fluent.conf|filepath"}``. For more information, see [Creating a task definition that uses a FireLens configuration](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using_firelens.html#firelens-taskdef) in the *Amazon Elastic Container Service Developer Guide*.
  *   Tasks hosted on FARGATElong only support the ``file`` configuration file type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon_task_definition#options EcsDaemonTaskDefinition#options}
  */
  readonly options?: { [key: string]: string };
  /**
  * The log router to use. The valid values are ``fluentd`` or ``fluentbit``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon_task_definition#type EcsDaemonTaskDefinition#type}
  */
  readonly type?: string;
}

export function ecsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationToTerraform(struct?: EcsDaemonTaskDefinitionContainerDefinitionsFirelensConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    options: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.options),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function ecsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationToHclTerraform(struct?: EcsDaemonTaskDefinitionContainerDefinitionsFirelensConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    options: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.options),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EcsDaemonTaskDefinitionContainerDefinitionsFirelensConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._options !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsDaemonTaskDefinitionContainerDefinitionsFirelensConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._options = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._options = value.options;
      this._type = value.type;
    }
  }

  // options - computed: true, optional: true, required: false
  private _options?: { [key: string]: string }; 
  public get options() {
    return this.getStringMapAttribute('options');
  }
  public set options(value: { [key: string]: string }) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface EcsDaemonTaskDefinitionContainerDefinitionsHealthCheck {
  /**
  * A string array representing the command that the container runs to determine if it is healthy. The string array must start with ``CMD`` to run the command arguments directly, or ``CMD-SHELL`` to run the command with the container's default shell. 
  *   When you use the AWS Management Console JSON panel, the CLIlong, or the APIs, enclose the list of commands in double quotes and brackets.
  *   ``[ "CMD-SHELL", "curl -f http://localhost/ || exit 1" ]`` 
  *  You don't include the double quotes and brackets when you use the AWS Management Console.
  *   ``CMD-SHELL, curl -f http://localhost/ || exit 1`` 
  *  An exit code of 0 indicates success, and non-zero exit code indicates failure. For more information, see ``HealthCheck`` in the docker container create command.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon_task_definition#command EcsDaemonTaskDefinition#command}
  */
  readonly command?: string[];
  /**
  * The time period in seconds between each health check execution. You may specify between 5 and 300 seconds. The default value is 30 seconds. This value applies only when you specify a ``command``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon_task_definition#interval EcsDaemonTaskDefinition#interval}
  */
  readonly interval?: number;
  /**
  * The number of times to retry a failed health check before the container is considered unhealthy. You may specify between 1 and 10 retries. The default value is 3. This value applies only when you specify a ``command``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon_task_definition#retries EcsDaemonTaskDefinition#retries}
  */
  readonly retries?: number;
  /**
  * The optional grace period to provide containers time to bootstrap before failed health checks count towards the maximum number of retries. You can specify between 0 and 300 seconds. By default, the ``startPeriod`` is off. This value applies only when you specify a ``command``. 
  *   If a health check succeeds within the ``startPeriod``, then the container is considered healthy and any subsequent failures count toward the maximum number of retries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon_task_definition#start_period EcsDaemonTaskDefinition#start_period}
  */
  readonly startPeriod?: number;
  /**
  * The time period in seconds to wait for a health check to succeed before it is considered a failure. You may specify between 2 and 60 seconds. The default value is 5. This value applies only when you specify a ``command``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon_task_definition#timeout EcsDaemonTaskDefinition#timeout}
  */
  readonly timeout?: number;
}

export function ecsDaemonTaskDefinitionContainerDefinitionsHealthCheckToTerraform(struct?: EcsDaemonTaskDefinitionContainerDefinitionsHealthCheck | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    command: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.command),
    interval: cdktn.numberToTerraform(struct!.interval),
    retries: cdktn.numberToTerraform(struct!.retries),
    start_period: cdktn.numberToTerraform(struct!.startPeriod),
    timeout: cdktn.numberToTerraform(struct!.timeout),
  }
}


export function ecsDaemonTaskDefinitionContainerDefinitionsHealthCheckToHclTerraform(struct?: EcsDaemonTaskDefinitionContainerDefinitionsHealthCheck | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    command: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    interval: {
      value: cdktn.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retries: {
      value: cdktn.numberToHclTerraform(struct!.retries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_period: {
      value: cdktn.numberToHclTerraform(struct!.startPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout: {
      value: cdktn.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EcsDaemonTaskDefinitionContainerDefinitionsHealthCheck | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._retries !== undefined) {
      hasAnyValues = true;
      internalValueResult.retries = this._retries;
    }
    if (this._startPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.startPeriod = this._startPeriod;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsDaemonTaskDefinitionContainerDefinitionsHealthCheck | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._command = undefined;
      this._interval = undefined;
      this._retries = undefined;
      this._startPeriod = undefined;
      this._timeout = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._command = value.command;
      this._interval = value.interval;
      this._retries = value.retries;
      this._startPeriod = value.startPeriod;
      this._timeout = value.timeout;
    }
  }

  // command - computed: true, optional: true, required: false
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // interval - computed: true, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // retries - computed: true, optional: true, required: false
  private _retries?: number; 
  public get retries() {
    return this.getNumberAttribute('retries');
  }
  public set retries(value: number) {
    this._retries = value;
  }
  public resetRetries() {
    this._retries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retriesInput() {
    return this._retries;
  }

  // start_period - computed: true, optional: true, required: false
  private _startPeriod?: number; 
  public get startPeriod() {
    return this.getNumberAttribute('start_period');
  }
  public set startPeriod(value: number) {
    this._startPeriod = value;
  }
  public resetStartPeriod() {
    this._startPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startPeriodInput() {
    return this._startPeriod;
  }

  // timeout - computed: true, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }
}
export interface EcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilities {
  /**
  * The Linux capabilities for the container that have been added to the default configuration provided by Docker. This parameter maps to ``CapAdd`` in the docker container create command and the ``--cap-add`` option to docker run.
  *   Tasks launched on FARGATElong only support adding the ``SYS_PTRACE`` kernel capability.
  *   Valid values: ``"ALL" | "AUDIT_CONTROL" | "AUDIT_WRITE" | "BLOCK_SUSPEND" | "CHOWN" | "DAC_OVERRIDE" | "DAC_READ_SEARCH" | "FOWNER" | "FSETID" | "IPC_LOCK" | "IPC_OWNER" | "KILL" | "LEASE" | "LINUX_IMMUTABLE" | "MAC_ADMIN" | "MAC_OVERRIDE" | "MKNOD" | "NET_ADMIN" | "NET_BIND_SERVICE" | "NET_BROADCAST" | "NET_RAW" | "SETFCAP" | "SETGID" | "SETPCAP" | "SETUID" | "SYS_ADMIN" | "SYS_BOOT" | "SYS_CHROOT" | "SYS_MODULE" | "SYS_NICE" | "SYS_PACCT" | "SYS_PTRACE" | "SYS_RAWIO" | "SYS_RESOURCE" | "SYS_TIME" | "SYS_TTY_CONFIG" | "SYSLOG" | "WAKE_ALARM"``
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon_task_definition#add EcsDaemonTaskDefinition#add}
  */
  readonly add?: string[];
  /**
  * The Linux capabilities for the container that have been removed from the default configuration provided by Docker. This parameter maps to ``CapDrop`` in the docker container create command and the ``--cap-drop`` option to docker run.
  *  Valid values: ``"ALL" | "AUDIT_CONTROL" | "AUDIT_WRITE" | "BLOCK_SUSPEND" | "CHOWN" | "DAC_OVERRIDE" | "DAC_READ_SEARCH" | "FOWNER" | "FSETID" | "IPC_LOCK" | "IPC_OWNER" | "KILL" | "LEASE" | "LINUX_IMMUTABLE" | "MAC_ADMIN" | "MAC_OVERRIDE" | "MKNOD" | "NET_ADMIN" | "NET_BIND_SERVICE" | "NET_BROADCAST" | "NET_RAW" | "SETFCAP" | "SETGID" | "SETPCAP" | "SETUID" | "SYS_ADMIN" | "SYS_BOOT" | "SYS_CHROOT" | "SYS_MODULE" | "SYS_NICE" | "SYS_PACCT" | "SYS_PTRACE" | "SYS_RAWIO" | "SYS_RESOURCE" | "SYS_TIME" | "SYS_TTY_CONFIG" | "SYSLOG" | "WAKE_ALARM"``
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon_task_definition#drop EcsDaemonTaskDefinition#drop}
  */
  readonly drop?: string[];
}

export function ecsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesToTerraform(struct?: EcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilities | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    add: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.add),
    drop: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.drop),
  }
}


export function ecsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesToHclTerraform(struct?: EcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilities | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    add: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.add),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    drop: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.drop),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilities | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._add !== undefined) {
      hasAnyValues = true;
      internalValueResult.add = this._add;
    }
    if (this._drop !== undefined) {
      hasAnyValues = true;
      internalValueResult.drop = this._drop;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilities | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._add = undefined;
      this._drop = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._add = value.add;
      this._drop = value.drop;
    }
  }

  // add - computed: true, optional: true, required: false
  private _add?: string[]; 
  public get add() {
    return this.getListAttribute('add');
  }
  public set add(value: string[]) {
    this._add = value;
  }
  public resetAdd() {
    this._add = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addInput() {
    return this._add;
  }

  // drop - computed: true, optional: true, required: false
  private _drop?: string[]; 
  public get drop() {
    return this.getListAttribute('drop');
  }
  public set drop(value: string[]) {
    this._drop = value;
  }
  public resetDrop() {
    this._drop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropInput() {
    return this._drop;
  }
}
export interface EcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevices {
  /**
  * The path inside the container at which to expose the host device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon_task_definition#container_path EcsDaemonTaskDefinition#container_path}
  */
  readonly containerPath?: string;
  /**
  * The path for the device on the host container instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon_task_definition#host_path EcsDaemonTaskDefinition#host_path}
  */
  readonly hostPath?: string;
  /**
  * The explicit permissions to provide to the container for the device. By default, the container has permissions for ``read``, ``write``, and ``mknod`` for the device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon_task_definition#permissions EcsDaemonTaskDefinition#permissions}
  */
  readonly permissions?: string[];
}

export function ecsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesToTerraform(struct?: EcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevices | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    container_path: cdktn.stringToTerraform(struct!.containerPath),
    host_path: cdktn.stringToTerraform(struct!.hostPath),
    permissions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.permissions),
  }
}


export function ecsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesToHclTerraform(struct?: EcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevices | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    container_path: {
      value: cdktn.stringToHclTerraform(struct!.containerPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_path: {
      value: cdktn.stringToHclTerraform(struct!.hostPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permissions: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.permissions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): EcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevices | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerPath = this._containerPath;
    }
    if (this._hostPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostPath = this._hostPath;
    }
    if (this._permissions !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissions = this._permissions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevices | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerPath = undefined;
      this._hostPath = undefined;
      this._permissions = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerPath = value.containerPath;
      this._hostPath = value.hostPath;
      this._permissions = value.permissions;
    }
  }

  // container_path - computed: true, optional: true, required: false
  private _containerPath?: string; 
  public get containerPath() {
    return this.getStringAttribute('container_path');
  }
  public set containerPath(value: string) {
    this._containerPath = value;
  }
  public resetContainerPath() {
    this._containerPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerPathInput() {
    return this._containerPath;
  }

  // host_path - computed: true, optional: true, required: false
  private _hostPath?: string; 
  public get hostPath() {
    return this.getStringAttribute('host_path');
  }
  public set hostPath(value: string) {
    this._hostPath = value;
  }
  public resetHostPath() {
    this._hostPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostPathInput() {
    return this._hostPath;
  }

  // permissions - computed: true, optional: true, required: false
  private _permissions?: string[]; 
  public get permissions() {
    return this.getListAttribute('permissions');
  }
  public set permissions(value: string[]) {
    this._permissions = value;
  }
  public resetPermissions() {
    this._permissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions;
  }
}

export class EcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesList extends cdktn.ComplexList {
  public internalValue? : EcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevices[] | cdktn.IResolvable

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
  public get(index: number): EcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference {
    return new EcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfs {
  /**
  * The absolute file path where the tmpfs volume is to be mounted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon_task_definition#container_path EcsDaemonTaskDefinition#container_path}
  */
  readonly containerPath?: string;
  /**
  * The list of tmpfs volume mount options.
  *  Valid values: ``"defaults" | "ro" | "rw" | "suid" | "nosuid" | "dev" | "nodev" | "exec" | "noexec" | "sync" | "async" | "dirsync" | "remount" | "mand" | "nomand" | "atime" | "noatime" | "diratime" | "nodiratime" | "bind" | "rbind" | "unbindable" | "runbindable" | "private" | "rprivate" | "shared" | "rshared" | "slave" | "rslave" | "relatime" | "norelatime" | "strictatime" | "nostrictatime" | "mode" | "uid" | "gid" | "nr_inodes" | "nr_blocks" | "mpol"``
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon_task_definition#mount_options EcsDaemonTaskDefinition#mount_options}
  */
  readonly mountOptions?: string[];
  /**
  * The maximum size (in MiB) of the tmpfs volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon_task_definition#size EcsDaemonTaskDefinition#size}
  */
  readonly size?: number;
}

export function ecsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsToTerraform(struct?: EcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    container_path: cdktn.stringToTerraform(struct!.containerPath),
    mount_options: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.mountOptions),
    size: cdktn.numberToTerraform(struct!.size),
  }
}


export function ecsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsToHclTerraform(struct?: EcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    container_path: {
      value: cdktn.stringToHclTerraform(struct!.containerPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount_options: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.mountOptions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    size: {
      value: cdktn.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): EcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerPath = this._containerPath;
    }
    if (this._mountOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountOptions = this._mountOptions;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerPath = undefined;
      this._mountOptions = undefined;
      this._size = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerPath = value.containerPath;
      this._mountOptions = value.mountOptions;
      this._size = value.size;
    }
  }

  // container_path - computed: true, optional: true, required: false
  private _containerPath?: string; 
  public get containerPath() {
    return this.getStringAttribute('container_path');
  }
  public set containerPath(value: string) {
    this._containerPath = value;
  }
  public resetContainerPath() {
    this._containerPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerPathInput() {
    return this._containerPath;
  }

  // mount_options - computed: true, optional: true, required: false
  private _mountOptions?: string[]; 
  public get mountOptions() {
    return this.getListAttribute('mount_options');
  }
  public set mountOptions(value: string[]) {
    this._mountOptions = value;
  }
  public resetMountOptions() {
    this._mountOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountOptionsInput() {
    return this._mountOptions;
  }

  // size - computed: true, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }
}

export class EcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList extends cdktn.ComplexList {
  public internalValue? : EcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfs[] | cdktn.IResolvable

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
  public get(index: number): EcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference {
    return new EcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EcsDaemonTaskDefinitionContainerDefinitionsLinuxParameters {
  /**
  * The Linux capabilities for the container that are added to or dropped from the default configuration provided by Docker.
  *   For tasks that use the Fargate launch type, ``capabilities`` is supported for all platform versions but the ``add`` parameter is only supported if using platform version 1.4.0 or later.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon_task_definition#capabilities EcsDaemonTaskDefinition#capabilities}
  */
  readonly capabilities?: EcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilities;
  /**
  * Any host devices to expose to the container. This parameter maps to ``Devices`` in the docker container create command and the ``--device`` option to docker run.
  *   If you're using tasks that use the Fargate launch type, the ``devices`` parameter isn't supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon_task_definition#devices EcsDaemonTaskDefinition#devices}
  */
  readonly devices?: EcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevices[] | cdktn.IResolvable;
  /**
  * Run an ``init`` process inside the container that forwards signals and reaps processes. This parameter maps to the ``--init`` option to docker run. This parameter requires version 1.25 of the Docker Remote API or greater on your container instance. To check the Docker Remote API version on your container instance, log in to your container instance and run the following command: ``sudo docker version --format '{{.Server.APIVersion}}'``
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon_task_definition#init_process_enabled EcsDaemonTaskDefinition#init_process_enabled}
  */
  readonly initProcessEnabled?: boolean | cdktn.IResolvable;
  /**
  * The container path, mount options, and size (in MiB) of the tmpfs mount. This parameter maps to the ``--tmpfs`` option to docker run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon_task_definition#tmpfs EcsDaemonTaskDefinition#tmpfs}
  */
  readonly tmpfs?: EcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfs[] | cdktn.IResolvable;
}

export function ecsDaemonTaskDefinitionContainerDefinitionsLinuxParametersToTerraform(struct?: EcsDaemonTaskDefinitionContainerDefinitionsLinuxParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    capabilities: ecsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesToTerraform(struct!.capabilities),
    devices: cdktn.listMapper(ecsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesToTerraform, false)(struct!.devices),
    init_process_enabled: cdktn.booleanToTerraform(struct!.initProcessEnabled),
    tmpfs: cdktn.listMapper(ecsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsToTerraform, false)(struct!.tmpfs),
  }
}


export function ecsDaemonTaskDefinitionContainerDefinitionsLinuxParametersToHclTerraform(struct?: EcsDaemonTaskDefinitionContainerDefinitionsLinuxParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    capabilities: {
      value: ecsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesToHclTerraform(struct!.capabilities),
      isBlock: true,
      type: "struct",
      storageClassType: "EcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilities",
    },
    devices: {
      value: cdktn.listMapperHcl(ecsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesToHclTerraform, false)(struct!.devices),
      isBlock: true,
      type: "list",
      storageClassType: "EcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesList",
    },
    init_process_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.initProcessEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tmpfs: {
      value: cdktn.listMapperHcl(ecsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsToHclTerraform, false)(struct!.tmpfs),
      isBlock: true,
      type: "list",
      storageClassType: "EcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EcsDaemonTaskDefinitionContainerDefinitionsLinuxParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capabilities?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.capabilities = this._capabilities?.internalValue;
    }
    if (this._devices?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.devices = this._devices?.internalValue;
    }
    if (this._initProcessEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.initProcessEnabled = this._initProcessEnabled;
    }
    if (this._tmpfs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tmpfs = this._tmpfs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsDaemonTaskDefinitionContainerDefinitionsLinuxParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._capabilities.internalValue = undefined;
      this._devices.internalValue = undefined;
      this._initProcessEnabled = undefined;
      this._tmpfs.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._capabilities.internalValue = value.capabilities;
      this._devices.internalValue = value.devices;
      this._initProcessEnabled = value.initProcessEnabled;
      this._tmpfs.internalValue = value.tmpfs;
    }
  }

  // capabilities - computed: true, optional: true, required: false
  private _capabilities = new EcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference(this, "capabilities");
  public get capabilities() {
    return this._capabilities;
  }
  public putCapabilities(value: EcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersCapabilities) {
    this._capabilities.internalValue = value;
  }
  public resetCapabilities() {
    this._capabilities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilitiesInput() {
    return this._capabilities.internalValue;
  }

  // devices - computed: true, optional: true, required: false
  private _devices = new EcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevicesList(this, "devices", false);
  public get devices() {
    return this._devices;
  }
  public putDevices(value: EcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersDevices[] | cdktn.IResolvable) {
    this._devices.internalValue = value;
  }
  public resetDevices() {
    this._devices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devicesInput() {
    return this._devices.internalValue;
  }

  // init_process_enabled - computed: true, optional: true, required: false
  private _initProcessEnabled?: boolean | cdktn.IResolvable; 
  public get initProcessEnabled() {
    return this.getBooleanAttribute('init_process_enabled');
  }
  public set initProcessEnabled(value: boolean | cdktn.IResolvable) {
    this._initProcessEnabled = value;
  }
  public resetInitProcessEnabled() {
    this._initProcessEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initProcessEnabledInput() {
    return this._initProcessEnabled;
  }

  // tmpfs - computed: true, optional: true, required: false
  private _tmpfs = new EcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList(this, "tmpfs", false);
  public get tmpfs() {
    return this._tmpfs;
  }
  public putTmpfs(value: EcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersTmpfs[] | cdktn.IResolvable) {
    this._tmpfs.internalValue = value;
  }
  public resetTmpfs() {
    this._tmpfs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tmpfsInput() {
    return this._tmpfs.internalValue;
  }
}
export interface EcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptions {
  /**
  * The name of the secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon_task_definition#name EcsDaemonTaskDefinition#name}
  */
  readonly name?: string;
  /**
  * The secret to expose to the container. The supported values are either the full ARN of the ASMlong secret or the full ARN of the parameter in the SSM Parameter Store.
  *  For information about the require IAMlong permissions, see [Required IAM permissions for Amazon ECS secrets](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/specifying-sensitive-data-secrets.html#secrets-iam) (for Secrets Manager) or [Required IAM permissions for Amazon ECS secrets](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/specifying-sensitive-data-parameters.html) (for Systems Manager Parameter store) in the *Amazon Elastic Container Service Developer Guide*.
  *   If the SSM Parameter Store parameter exists in the same Region as the task you're launching, then you can use either the full ARN or name of the parameter. If the parameter exists in a different Region, then the full ARN must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon_task_definition#value_from EcsDaemonTaskDefinition#value_from}
  */
  readonly valueFrom?: string;
}

export function ecsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsToTerraform(struct?: EcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value_from: cdktn.stringToTerraform(struct!.valueFrom),
  }
}


export function ecsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsToHclTerraform(struct?: EcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_from: {
      value: cdktn.stringToHclTerraform(struct!.valueFrom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): EcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._valueFrom !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFrom = this._valueFrom;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._valueFrom = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._valueFrom = value.valueFrom;
    }
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // value_from - computed: true, optional: true, required: false
  private _valueFrom?: string; 
  public get valueFrom() {
    return this.getStringAttribute('value_from');
  }
  public set valueFrom(value: string) {
    this._valueFrom = value;
  }
  public resetValueFrom() {
    this._valueFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFromInput() {
    return this._valueFrom;
  }
}

export class EcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList extends cdktn.ComplexList {
  public internalValue? : EcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptions[] | cdktn.IResolvable

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
  public get(index: number): EcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference {
    return new EcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EcsDaemonTaskDefinitionContainerDefinitionsLogConfiguration {
  /**
  * The log driver to use for the container.
  *  For tasks on FARGATElong, the supported log drivers are ``awslogs``, ``splunk``, and ``awsfirelens``.
  *  For tasks hosted on Amazon EC2 instances, the supported log drivers are ``awslogs``, ``fluentd``, ``gelf``, ``json-file``, ``journald``, ``syslog``, ``splunk``, and ``awsfirelens``.
  *  For more information about using the ``awslogs`` log driver, see [Send Amazon ECS logs to CloudWatch](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using_awslogs.html) in the *Amazon Elastic Container Service Developer Guide*.
  *  For more information about using the ``awsfirelens`` log driver, see [Send Amazon ECS logs to an service or Partner](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using_firelens.html).
  *   If you have a custom driver that isn't listed, you can fork the Amazon ECS container agent project that's [available on GitHub](https://docs.aws.amazon.com/https://github.com/aws/amazon-ecs-agent) and customize it to work with that driver. We encourage you to submit pull requests for changes that you would like to have included. However, we don't currently provide support for running modified copies of this software.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon_task_definition#log_driver EcsDaemonTaskDefinition#log_driver}
  */
  readonly logDriver?: string;
  /**
  * The configuration options to send to the log driver.
  *  The options you can specify depend on the log driver. Some of the options you can specify when you use the ``awslogs`` log driver to route logs to Amazon CloudWatch include the following:
  *   + awslogs-create-group Required: No Specify whether you want the log group to be created automatically. If this option isn't specified, it defaults to false. Your IAM policy must include the logs:CreateLogGroup permission before you attempt to use awslogs-create-group. + awslogs-region Required: Yes Specify the Region that the awslogs log driver is to send your Docker logs to. You can choose to send all of your logs from clusters in different Regions to a single region in CloudWatch Logs. This is so that they're all visible in one location. Otherwise, you can separate them by Region for more granularity. Make sure that the specified log group exists in the Region that you specify with this option. + awslogs-group Required: Yes Make sure to specify a log group that the awslogs log driver sends its log streams to. + awslogs-stream-prefix Required: Yes, when using Fargate.Optional when using EC2. Use the awslogs-stream-prefix option to associate a log stream with the specified prefix, the container name, and the ID of the Amazon ECS task that the container belongs to. If you specify a prefix with this option, then the log stream takes the format prefix-name/container-name/ecs-task-id. If you don't specify a prefix with this option, then the log stream is named after the container ID that's assigned by the Docker daemon on the container instance. Because it's difficult to trace logs back to the container that sent them with just the Docker container ID (which is only available on the container instance), we recommend that you specify a prefix with this option. For Amazon ECS services, you can use the service name as the prefix. Doing so, you can trace log streams to the service that the container belongs to, the name of the container that sent them, and the ID of the task that the container belongs to. You must specify a stream-prefix for your logs to have your logs appear in the Log pane when using the Amazon ECS console. + awslogs-datetime-format Required: No This option defines a multiline start pattern in Python strftime format. A log message consists of a line that matches the pattern and any following lines that don’t match the pattern. The matched line is the delimiter between log messages. One example of a use case for using this format is for parsing output such as a stack dump, which might otherwise be logged in multiple entries. The correct pattern allows it to be captured in a single entry. For more information, see awslogs-datetime-format. You cannot configure both the awslogs-datetime-format and awslogs-multiline-pattern options. Multiline logging performs regular expression parsing and matching of all log messages. This might have a negative impact on logging performance. + awslogs-multiline-pattern Required: No This option defines a multiline start pattern that uses a regular expression. A log message consists of a line that matches the pattern and any following lines that don’t match the pattern. The matched line is the delimiter between log messages. For more information, see awslogs-multiline-pattern. This option is ignored if awslogs-datetime-format is also configured. You cannot configure both the awslogs-datetime-format and awslogs-multiline-pattern options. Multiline logging performs regular expression parsing and matching of all log messages. This might have a negative impact on logging performance. 
  *  The following options apply to all supported log drivers.
  *   + mode Required: No Valid values: non-blocking | blocking This option defines the delivery mode of log messages from the container to the log driver specified using logDriver. The delivery mode you choose affects application availability when the flow of logs from container is interrupted. If you use the blocking mode and the flow of logs is interrupted, calls from container code to write to the stdout and stderr streams will block. The logging thread of the application will block as a result. This may cause the application to become unresponsive and lead to container healthcheck failure. If you use the non-blocking mode, the container's logs are instead stored in an in-memory intermediate buffer configured with the max-buffer-size option. This prevents the application from becoming unresponsive when logs cannot be sent. We recommend using this mode if you want to ensure service availability and are okay with some log loss. For more information, see Preventing log loss with non-blocking mode in the awslogs container log driver. You can set a default mode for all containers in a specific Region by using the defaultLogDriverMode account setting. If you don't specify the mode option or configure the account setting, Amazon ECS will default to the non-blocking mode. For more information about the account setting, see Default log driver mode in the Amazon Elastic Container Service Developer Guide. On June 25, 2025, Amazon ECS changed the default log driver mode from blocking to non-blocking to prioritize task availability over logging. To continue using the blocking mode after this change, do one of the following: Set the mode option in your container definition's logConfiguration as blocking. Set the defaultLogDriverMode account setting to blocking. + max-buffer-size Required: No Default value: 10m When non-blocking mode is used, the max-buffer-size log option controls the size of the buffer that's used for intermediate message storage. Make sure to specify an adequate buffer size based on your application. When the buffer fills up, further logs cannot be stored. Logs that cannot be stored are lost. 
  *  To route logs using the ``splunk`` log router, you need to specify a ``splunk-token`` and a ``splunk-url``.
  *  When you use the ``awsfirelens`` log router to route logs to an AWS Service or AWS Partner Network destination for log storage and analytics, you can set the ``log-driver-buffer-limit`` option to limit the number of events that are buffered in memory, before being sent to the log router container. It can help to resolve potential log loss issue because high throughput might result in memory running out for the buffer inside of Docker.
  *  Other options you can specify when using ``awsfirelens`` to route logs depend on the destination. When you export logs to Amazon Data Firehose, you can specify the AWS Region with ``region`` and a name for the log stream with ``delivery_stream``.
  *  When you export logs to Amazon Kinesis Data Streams, you can specify an AWS Region with ``region`` and a data stream name with ``stream``.
  *   When you export logs to Amazon OpenSearch Service, you can specify options like ``Name``, ``Host`` (OpenSearch Service endpoint without protocol), ``Port``, ``Index``, ``Type``, ``Aws_auth``, ``Aws_region``, ``Suppress_Type_Name``, and ``tls``. For more information, see [Under the hood: FireLens for Amazon ECS Tasks](https://docs.aws.amazon.com/containers/under-the-hood-firelens-for-amazon-ecs-tasks/).
  *  When you export logs to Amazon S3, you can specify the bucket using the ``bucket`` option. You can also specify ``region``, ``total_file_size``, ``upload_timeout``, and ``use_put_object`` as options.
  *  This parameter requires version 1.19 of the Docker Remote API or greater on your container instance. To check the Docker Remote API version on your container instance, log in to your container instance and run the following command: ``sudo docker version --format '{{.Server.APIVersion}}'``
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon_task_definition#options EcsDaemonTaskDefinition#options}
  */
  readonly options?: { [key: string]: string };
  /**
  * The secrets to pass to the log configuration. For more information, see [Specifying sensitive data](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/specifying-sensitive-data.html) in the *Amazon Elastic Container Service Developer Guide*.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon_task_definition#secret_options EcsDaemonTaskDefinition#secret_options}
  */
  readonly secretOptions?: EcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptions[] | cdktn.IResolvable;
}

export function ecsDaemonTaskDefinitionContainerDefinitionsLogConfigurationToTerraform(struct?: EcsDaemonTaskDefinitionContainerDefinitionsLogConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    log_driver: cdktn.stringToTerraform(struct!.logDriver),
    options: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.options),
    secret_options: cdktn.listMapper(ecsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsToTerraform, false)(struct!.secretOptions),
  }
}


export function ecsDaemonTaskDefinitionContainerDefinitionsLogConfigurationToHclTerraform(struct?: EcsDaemonTaskDefinitionContainerDefinitionsLogConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    log_driver: {
      value: cdktn.stringToHclTerraform(struct!.logDriver),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    options: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.options),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    secret_options: {
      value: cdktn.listMapperHcl(ecsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsToHclTerraform, false)(struct!.secretOptions),
      isBlock: true,
      type: "list",
      storageClassType: "EcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EcsDaemonTaskDefinitionContainerDefinitionsLogConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logDriver !== undefined) {
      hasAnyValues = true;
      internalValueResult.logDriver = this._logDriver;
    }
    if (this._options !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options;
    }
    if (this._secretOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretOptions = this._secretOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsDaemonTaskDefinitionContainerDefinitionsLogConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._logDriver = undefined;
      this._options = undefined;
      this._secretOptions.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._logDriver = value.logDriver;
      this._options = value.options;
      this._secretOptions.internalValue = value.secretOptions;
    }
  }

  // log_driver - computed: true, optional: true, required: false
  private _logDriver?: string; 
  public get logDriver() {
    return this.getStringAttribute('log_driver');
  }
  public set logDriver(value: string) {
    this._logDriver = value;
  }
  public resetLogDriver() {
    this._logDriver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logDriverInput() {
    return this._logDriver;
  }

  // options - computed: true, optional: true, required: false
  private _options?: { [key: string]: string }; 
  public get options() {
    return this.getStringMapAttribute('options');
  }
  public set options(value: { [key: string]: string }) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }

  // secret_options - computed: true, optional: true, required: false
  private _secretOptions = new EcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList(this, "secret_options", false);
  public get secretOptions() {
    return this._secretOptions;
  }
  public putSecretOptions(value: EcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationSecretOptions[] | cdktn.IResolvable) {
    this._secretOptions.internalValue = value;
  }
  public resetSecretOptions() {
    this._secretOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretOptionsInput() {
    return this._secretOptions.internalValue;
  }
}
export interface EcsDaemonTaskDefinitionContainerDefinitionsMountPoints {
  /**
  * The path on the container to mount the host volume at.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon_task_definition#container_path EcsDaemonTaskDefinition#container_path}
  */
  readonly containerPath?: string;
  /**
  * If this value is ``true``, the container has read-only access to the volume. If this value is ``false``, then the container can write to the volume. The default value is ``false``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon_task_definition#read_only EcsDaemonTaskDefinition#read_only}
  */
  readonly readOnly?: boolean | cdktn.IResolvable;
  /**
  * The name of the volume to mount. Must be a volume name referenced in the ``name`` parameter of task definition ``volume``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon_task_definition#source_volume EcsDaemonTaskDefinition#source_volume}
  */
  readonly sourceVolume?: string;
}

export function ecsDaemonTaskDefinitionContainerDefinitionsMountPointsToTerraform(struct?: EcsDaemonTaskDefinitionContainerDefinitionsMountPoints | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    container_path: cdktn.stringToTerraform(struct!.containerPath),
    read_only: cdktn.booleanToTerraform(struct!.readOnly),
    source_volume: cdktn.stringToTerraform(struct!.sourceVolume),
  }
}


export function ecsDaemonTaskDefinitionContainerDefinitionsMountPointsToHclTerraform(struct?: EcsDaemonTaskDefinitionContainerDefinitionsMountPoints | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    container_path: {
      value: cdktn.stringToHclTerraform(struct!.containerPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_only: {
      value: cdktn.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    source_volume: {
      value: cdktn.stringToHclTerraform(struct!.sourceVolume),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): EcsDaemonTaskDefinitionContainerDefinitionsMountPoints | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerPath = this._containerPath;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._sourceVolume !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceVolume = this._sourceVolume;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsDaemonTaskDefinitionContainerDefinitionsMountPoints | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerPath = undefined;
      this._readOnly = undefined;
      this._sourceVolume = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerPath = value.containerPath;
      this._readOnly = value.readOnly;
      this._sourceVolume = value.sourceVolume;
    }
  }

  // container_path - computed: true, optional: true, required: false
  private _containerPath?: string; 
  public get containerPath() {
    return this.getStringAttribute('container_path');
  }
  public set containerPath(value: string) {
    this._containerPath = value;
  }
  public resetContainerPath() {
    this._containerPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerPathInput() {
    return this._containerPath;
  }

  // read_only - computed: true, optional: true, required: false
  private _readOnly?: boolean | cdktn.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktn.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // source_volume - computed: true, optional: true, required: false
  private _sourceVolume?: string; 
  public get sourceVolume() {
    return this.getStringAttribute('source_volume');
  }
  public set sourceVolume(value: string) {
    this._sourceVolume = value;
  }
  public resetSourceVolume() {
    this._sourceVolume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceVolumeInput() {
    return this._sourceVolume;
  }
}

export class EcsDaemonTaskDefinitionContainerDefinitionsMountPointsList extends cdktn.ComplexList {
  public internalValue? : EcsDaemonTaskDefinitionContainerDefinitionsMountPoints[] | cdktn.IResolvable

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
  public get(index: number): EcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference {
    return new EcsDaemonTaskDefinitionContainerDefinitionsMountPointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentials {
  /**
  * The Amazon Resource Name (ARN) of the secret containing the private repository credentials.
  *   When you use the Amazon ECS API, CLI, or AWS SDK, if the secret exists in the same Region as the task that you're launching then you can use either the full ARN or the name of the secret. When you use the AWS Management Console, you must specify the full ARN of the secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon_task_definition#credentials_parameter EcsDaemonTaskDefinition#credentials_parameter}
  */
  readonly credentialsParameter?: string;
}

export function ecsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsToTerraform(struct?: EcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentials | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    credentials_parameter: cdktn.stringToTerraform(struct!.credentialsParameter),
  }
}


export function ecsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsToHclTerraform(struct?: EcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentials | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    credentials_parameter: {
      value: cdktn.stringToHclTerraform(struct!.credentialsParameter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentials | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credentialsParameter !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialsParameter = this._credentialsParameter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentials | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._credentialsParameter = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._credentialsParameter = value.credentialsParameter;
    }
  }

  // credentials_parameter - computed: true, optional: true, required: false
  private _credentialsParameter?: string; 
  public get credentialsParameter() {
    return this.getStringAttribute('credentials_parameter');
  }
  public set credentialsParameter(value: string) {
    this._credentialsParameter = value;
  }
  public resetCredentialsParameter() {
    this._credentialsParameter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsParameterInput() {
    return this._credentialsParameter;
  }
}
export interface EcsDaemonTaskDefinitionContainerDefinitionsRestartPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon_task_definition#enabled EcsDaemonTaskDefinition#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon_task_definition#ignored_exit_codes EcsDaemonTaskDefinition#ignored_exit_codes}
  */
  readonly ignoredExitCodes?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon_task_definition#restart_attempt_period EcsDaemonTaskDefinition#restart_attempt_period}
  */
  readonly restartAttemptPeriod?: number;
}

export function ecsDaemonTaskDefinitionContainerDefinitionsRestartPolicyToTerraform(struct?: EcsDaemonTaskDefinitionContainerDefinitionsRestartPolicy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    ignored_exit_codes: cdktn.listMapper(cdktn.numberToTerraform, false)(struct!.ignoredExitCodes),
    restart_attempt_period: cdktn.numberToTerraform(struct!.restartAttemptPeriod),
  }
}


export function ecsDaemonTaskDefinitionContainerDefinitionsRestartPolicyToHclTerraform(struct?: EcsDaemonTaskDefinitionContainerDefinitionsRestartPolicy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignored_exit_codes: {
      value: cdktn.listMapperHcl(cdktn.numberToHclTerraform, false)(struct!.ignoredExitCodes),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    restart_attempt_period: {
      value: cdktn.numberToHclTerraform(struct!.restartAttemptPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EcsDaemonTaskDefinitionContainerDefinitionsRestartPolicy | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._ignoredExitCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoredExitCodes = this._ignoredExitCodes;
    }
    if (this._restartAttemptPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.restartAttemptPeriod = this._restartAttemptPeriod;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsDaemonTaskDefinitionContainerDefinitionsRestartPolicy | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._ignoredExitCodes = undefined;
      this._restartAttemptPeriod = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._ignoredExitCodes = value.ignoredExitCodes;
      this._restartAttemptPeriod = value.restartAttemptPeriod;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // ignored_exit_codes - computed: true, optional: true, required: false
  private _ignoredExitCodes?: number[]; 
  public get ignoredExitCodes() {
    return this.getNumberListAttribute('ignored_exit_codes');
  }
  public set ignoredExitCodes(value: number[]) {
    this._ignoredExitCodes = value;
  }
  public resetIgnoredExitCodes() {
    this._ignoredExitCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoredExitCodesInput() {
    return this._ignoredExitCodes;
  }

  // restart_attempt_period - computed: true, optional: true, required: false
  private _restartAttemptPeriod?: number; 
  public get restartAttemptPeriod() {
    return this.getNumberAttribute('restart_attempt_period');
  }
  public set restartAttemptPeriod(value: number) {
    this._restartAttemptPeriod = value;
  }
  public resetRestartAttemptPeriod() {
    this._restartAttemptPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restartAttemptPeriodInput() {
    return this._restartAttemptPeriod;
  }
}
export interface EcsDaemonTaskDefinitionContainerDefinitionsSecrets {
  /**
  * The name of the secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon_task_definition#name EcsDaemonTaskDefinition#name}
  */
  readonly name?: string;
  /**
  * The secret to expose to the container. The supported values are either the full ARN of the ASMlong secret or the full ARN of the parameter in the SSM Parameter Store.
  *  For information about the require IAMlong permissions, see [Required IAM permissions for Amazon ECS secrets](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/specifying-sensitive-data-secrets.html#secrets-iam) (for Secrets Manager) or [Required IAM permissions for Amazon ECS secrets](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/specifying-sensitive-data-parameters.html) (for Systems Manager Parameter store) in the *Amazon Elastic Container Service Developer Guide*.
  *   If the SSM Parameter Store parameter exists in the same Region as the task you're launching, then you can use either the full ARN or name of the parameter. If the parameter exists in a different Region, then the full ARN must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon_task_definition#value_from EcsDaemonTaskDefinition#value_from}
  */
  readonly valueFrom?: string;
}

export function ecsDaemonTaskDefinitionContainerDefinitionsSecretsToTerraform(struct?: EcsDaemonTaskDefinitionContainerDefinitionsSecrets | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value_from: cdktn.stringToTerraform(struct!.valueFrom),
  }
}


export function ecsDaemonTaskDefinitionContainerDefinitionsSecretsToHclTerraform(struct?: EcsDaemonTaskDefinitionContainerDefinitionsSecrets | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_from: {
      value: cdktn.stringToHclTerraform(struct!.valueFrom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): EcsDaemonTaskDefinitionContainerDefinitionsSecrets | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._valueFrom !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFrom = this._valueFrom;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsDaemonTaskDefinitionContainerDefinitionsSecrets | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._valueFrom = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._valueFrom = value.valueFrom;
    }
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // value_from - computed: true, optional: true, required: false
  private _valueFrom?: string; 
  public get valueFrom() {
    return this.getStringAttribute('value_from');
  }
  public set valueFrom(value: string) {
    this._valueFrom = value;
  }
  public resetValueFrom() {
    this._valueFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFromInput() {
    return this._valueFrom;
  }
}

export class EcsDaemonTaskDefinitionContainerDefinitionsSecretsList extends cdktn.ComplexList {
  public internalValue? : EcsDaemonTaskDefinitionContainerDefinitionsSecrets[] | cdktn.IResolvable

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
  public get(index: number): EcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference {
    return new EcsDaemonTaskDefinitionContainerDefinitionsSecretsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EcsDaemonTaskDefinitionContainerDefinitionsSystemControls {
  /**
  * The namespaced kernel parameter to set a ``value`` for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon_task_definition#namespace EcsDaemonTaskDefinition#namespace}
  */
  readonly namespace?: string;
  /**
  * The namespaced kernel parameter to set a ``value`` for.
  *  Valid IPC namespace values: ``"kernel.msgmax" | "kernel.msgmnb" | "kernel.msgmni" | "kernel.sem" | "kernel.shmall" | "kernel.shmmax" | "kernel.shmmni" | "kernel.shm_rmid_forced"``, and ``Sysctls`` that start with ``"fs.mqueue.*"``
  *  Valid network namespace values: ``Sysctls`` that start with ``"net.*"``. Only namespaced ``Sysctls`` that exist within the container starting with "net.* are accepted.
  *  All of these values are supported by Fargate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon_task_definition#value EcsDaemonTaskDefinition#value}
  */
  readonly value?: string;
}

export function ecsDaemonTaskDefinitionContainerDefinitionsSystemControlsToTerraform(struct?: EcsDaemonTaskDefinitionContainerDefinitionsSystemControls | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    namespace: cdktn.stringToTerraform(struct!.namespace),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function ecsDaemonTaskDefinitionContainerDefinitionsSystemControlsToHclTerraform(struct?: EcsDaemonTaskDefinitionContainerDefinitionsSystemControls | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    namespace: {
      value: cdktn.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): EcsDaemonTaskDefinitionContainerDefinitionsSystemControls | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsDaemonTaskDefinitionContainerDefinitionsSystemControls | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._namespace = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._namespace = value.namespace;
      this._value = value.value;
    }
  }

  // namespace - computed: true, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class EcsDaemonTaskDefinitionContainerDefinitionsSystemControlsList extends cdktn.ComplexList {
  public internalValue? : EcsDaemonTaskDefinitionContainerDefinitionsSystemControls[] | cdktn.IResolvable

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
  public get(index: number): EcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference {
    return new EcsDaemonTaskDefinitionContainerDefinitionsSystemControlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EcsDaemonTaskDefinitionContainerDefinitionsUlimits {
  /**
  * The hard limit for the ``ulimit`` type. The value can be specified in bytes, seconds, or as a count, depending on the ``type`` of the ``ulimit``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon_task_definition#hard_limit EcsDaemonTaskDefinition#hard_limit}
  */
  readonly hardLimit?: number;
  /**
  * The ``type`` of the ``ulimit``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon_task_definition#name EcsDaemonTaskDefinition#name}
  */
  readonly name?: string;
  /**
  * The soft limit for the ``ulimit`` type. The value can be specified in bytes, seconds, or as a count, depending on the ``type`` of the ``ulimit``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon_task_definition#soft_limit EcsDaemonTaskDefinition#soft_limit}
  */
  readonly softLimit?: number;
}

export function ecsDaemonTaskDefinitionContainerDefinitionsUlimitsToTerraform(struct?: EcsDaemonTaskDefinitionContainerDefinitionsUlimits | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    hard_limit: cdktn.numberToTerraform(struct!.hardLimit),
    name: cdktn.stringToTerraform(struct!.name),
    soft_limit: cdktn.numberToTerraform(struct!.softLimit),
  }
}


export function ecsDaemonTaskDefinitionContainerDefinitionsUlimitsToHclTerraform(struct?: EcsDaemonTaskDefinitionContainerDefinitionsUlimits | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    hard_limit: {
      value: cdktn.numberToHclTerraform(struct!.hardLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    soft_limit: {
      value: cdktn.numberToHclTerraform(struct!.softLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): EcsDaemonTaskDefinitionContainerDefinitionsUlimits | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hardLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.hardLimit = this._hardLimit;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._softLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.softLimit = this._softLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsDaemonTaskDefinitionContainerDefinitionsUlimits | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hardLimit = undefined;
      this._name = undefined;
      this._softLimit = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hardLimit = value.hardLimit;
      this._name = value.name;
      this._softLimit = value.softLimit;
    }
  }

  // hard_limit - computed: true, optional: true, required: false
  private _hardLimit?: number; 
  public get hardLimit() {
    return this.getNumberAttribute('hard_limit');
  }
  public set hardLimit(value: number) {
    this._hardLimit = value;
  }
  public resetHardLimit() {
    this._hardLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hardLimitInput() {
    return this._hardLimit;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // soft_limit - computed: true, optional: true, required: false
  private _softLimit?: number; 
  public get softLimit() {
    return this.getNumberAttribute('soft_limit');
  }
  public set softLimit(value: number) {
    this._softLimit = value;
  }
  public resetSoftLimit() {
    this._softLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softLimitInput() {
    return this._softLimit;
  }
}

export class EcsDaemonTaskDefinitionContainerDefinitionsUlimitsList extends cdktn.ComplexList {
  public internalValue? : EcsDaemonTaskDefinitionContainerDefinitionsUlimits[] | cdktn.IResolvable

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
  public get(index: number): EcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference {
    return new EcsDaemonTaskDefinitionContainerDefinitionsUlimitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EcsDaemonTaskDefinitionContainerDefinitions {
  /**
  * The command that's passed to the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon_task_definition#command EcsDaemonTaskDefinition#command}
  */
  readonly command?: string[];
  /**
  * The number of ``cpu`` units reserved for the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon_task_definition#cpu EcsDaemonTaskDefinition#cpu}
  */
  readonly cpu?: number;
  /**
  * The dependencies defined for container startup and shutdown. A container can contain multiple dependencies on other containers in a task definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon_task_definition#depends_on EcsDaemonTaskDefinition#depends_on}
  */
  readonly dependsOn?: EcsDaemonTaskDefinitionContainerDefinitionsDependsOn[] | cdktn.IResolvable;
  /**
  * The entry point that's passed to the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon_task_definition#entry_point EcsDaemonTaskDefinition#entry_point}
  */
  readonly entryPoint?: string[];
  /**
  * The environment variables to pass to a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon_task_definition#environment EcsDaemonTaskDefinition#environment}
  */
  readonly environment?: EcsDaemonTaskDefinitionContainerDefinitionsEnvironment[] | cdktn.IResolvable;
  /**
  * A list of files containing the environment variables to pass to a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon_task_definition#environment_files EcsDaemonTaskDefinition#environment_files}
  */
  readonly environmentFiles?: EcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFiles[] | cdktn.IResolvable;
  /**
  * If the ``essential`` parameter of a container is marked as ``true``, and that container fails or stops for any reason, all other containers that are part of the task are stopped.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon_task_definition#essential EcsDaemonTaskDefinition#essential}
  */
  readonly essential?: boolean | cdktn.IResolvable;
  /**
  * The FireLens configuration for the container. This is used to specify and configure a log router for container logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon_task_definition#firelens_configuration EcsDaemonTaskDefinition#firelens_configuration}
  */
  readonly firelensConfiguration?: EcsDaemonTaskDefinitionContainerDefinitionsFirelensConfiguration;
  /**
  * The container health check command and associated configuration parameters for the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon_task_definition#health_check EcsDaemonTaskDefinition#health_check}
  */
  readonly healthCheck?: EcsDaemonTaskDefinitionContainerDefinitionsHealthCheck;
  /**
  * The image used to start the container. This string is passed directly to the Docker daemon. Images in the Docker Hub registry are available by default. Other repositories are specified with either ``repository-url/image:tag`` or ``repository-url/image@digest``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon_task_definition#image EcsDaemonTaskDefinition#image}
  */
  readonly image?: string;
  /**
  * When this parameter is ``true``, you can deploy containerized applications that require ``stdin`` or a ``tty`` to be allocated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon_task_definition#interactive EcsDaemonTaskDefinition#interactive}
  */
  readonly interactive?: boolean | cdktn.IResolvable;
  /**
  * Linux-specific modifications that are applied to the container configuration, such as Linux kernel capabilities.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon_task_definition#linux_parameters EcsDaemonTaskDefinition#linux_parameters}
  */
  readonly linuxParameters?: EcsDaemonTaskDefinitionContainerDefinitionsLinuxParameters;
  /**
  * The log configuration specification for the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon_task_definition#log_configuration EcsDaemonTaskDefinition#log_configuration}
  */
  readonly logConfiguration?: EcsDaemonTaskDefinitionContainerDefinitionsLogConfiguration;
  /**
  * The amount (in MiB) of memory to present to the container. If the container attempts to exceed the memory specified here, the container is killed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon_task_definition#memory EcsDaemonTaskDefinition#memory}
  */
  readonly memory?: number;
  /**
  * The soft limit (in MiB) of memory to reserve for the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon_task_definition#memory_reservation EcsDaemonTaskDefinition#memory_reservation}
  */
  readonly memoryReservation?: number;
  /**
  * The mount points for data volumes in your container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon_task_definition#mount_points EcsDaemonTaskDefinition#mount_points}
  */
  readonly mountPoints?: EcsDaemonTaskDefinitionContainerDefinitionsMountPoints[] | cdktn.IResolvable;
  /**
  * The name of the container. Up to 255 letters (uppercase and lowercase), numbers, underscores, and hyphens are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon_task_definition#name EcsDaemonTaskDefinition#name}
  */
  readonly name?: string;
  /**
  * When this parameter is true, the container is given elevated privileges on the host container instance (similar to the ``root`` user).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon_task_definition#privileged EcsDaemonTaskDefinition#privileged}
  */
  readonly privileged?: boolean | cdktn.IResolvable;
  /**
  * When this parameter is ``true``, a TTY is allocated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon_task_definition#pseudo_terminal EcsDaemonTaskDefinition#pseudo_terminal}
  */
  readonly pseudoTerminal?: boolean | cdktn.IResolvable;
  /**
  * When this parameter is true, the container is given read-only access to its root file system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon_task_definition#readonly_root_filesystem EcsDaemonTaskDefinition#readonly_root_filesystem}
  */
  readonly readonlyRootFilesystem?: boolean | cdktn.IResolvable;
  /**
  * The private repository authentication credentials to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon_task_definition#repository_credentials EcsDaemonTaskDefinition#repository_credentials}
  */
  readonly repositoryCredentials?: EcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentials;
  /**
  * The restart policy for the container. When you set up a restart policy, Amazon ECS can restart the container without needing to replace the task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon_task_definition#restart_policy EcsDaemonTaskDefinition#restart_policy}
  */
  readonly restartPolicy?: EcsDaemonTaskDefinitionContainerDefinitionsRestartPolicy;
  /**
  * The secrets to pass to the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon_task_definition#secrets EcsDaemonTaskDefinition#secrets}
  */
  readonly secrets?: EcsDaemonTaskDefinitionContainerDefinitionsSecrets[] | cdktn.IResolvable;
  /**
  * Time duration (in seconds) to wait before giving up on resolving dependencies for a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon_task_definition#start_timeout EcsDaemonTaskDefinition#start_timeout}
  */
  readonly startTimeout?: number;
  /**
  * Time duration (in seconds) to wait before the container is forcefully killed if it doesn't exit normally on its own.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon_task_definition#stop_timeout EcsDaemonTaskDefinition#stop_timeout}
  */
  readonly stopTimeout?: number;
  /**
  * A list of namespaced kernel parameters to set in the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon_task_definition#system_controls EcsDaemonTaskDefinition#system_controls}
  */
  readonly systemControls?: EcsDaemonTaskDefinitionContainerDefinitionsSystemControls[] | cdktn.IResolvable;
  /**
  * A list of ``ulimits`` to set in the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon_task_definition#ulimits EcsDaemonTaskDefinition#ulimits}
  */
  readonly ulimits?: EcsDaemonTaskDefinitionContainerDefinitionsUlimits[] | cdktn.IResolvable;
  /**
  * The user to use inside the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon_task_definition#user EcsDaemonTaskDefinition#user}
  */
  readonly user?: string;
  /**
  * The working directory to run commands inside the container in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon_task_definition#working_directory EcsDaemonTaskDefinition#working_directory}
  */
  readonly workingDirectory?: string;
}

export function ecsDaemonTaskDefinitionContainerDefinitionsToTerraform(struct?: EcsDaemonTaskDefinitionContainerDefinitions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    command: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.command),
    cpu: cdktn.numberToTerraform(struct!.cpu),
    depends_on: cdktn.listMapper(ecsDaemonTaskDefinitionContainerDefinitionsDependsOnToTerraform, false)(struct!.dependsOn),
    entry_point: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.entryPoint),
    environment: cdktn.listMapper(ecsDaemonTaskDefinitionContainerDefinitionsEnvironmentToTerraform, false)(struct!.environment),
    environment_files: cdktn.listMapper(ecsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesToTerraform, false)(struct!.environmentFiles),
    essential: cdktn.booleanToTerraform(struct!.essential),
    firelens_configuration: ecsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationToTerraform(struct!.firelensConfiguration),
    health_check: ecsDaemonTaskDefinitionContainerDefinitionsHealthCheckToTerraform(struct!.healthCheck),
    image: cdktn.stringToTerraform(struct!.image),
    interactive: cdktn.booleanToTerraform(struct!.interactive),
    linux_parameters: ecsDaemonTaskDefinitionContainerDefinitionsLinuxParametersToTerraform(struct!.linuxParameters),
    log_configuration: ecsDaemonTaskDefinitionContainerDefinitionsLogConfigurationToTerraform(struct!.logConfiguration),
    memory: cdktn.numberToTerraform(struct!.memory),
    memory_reservation: cdktn.numberToTerraform(struct!.memoryReservation),
    mount_points: cdktn.listMapper(ecsDaemonTaskDefinitionContainerDefinitionsMountPointsToTerraform, false)(struct!.mountPoints),
    name: cdktn.stringToTerraform(struct!.name),
    privileged: cdktn.booleanToTerraform(struct!.privileged),
    pseudo_terminal: cdktn.booleanToTerraform(struct!.pseudoTerminal),
    readonly_root_filesystem: cdktn.booleanToTerraform(struct!.readonlyRootFilesystem),
    repository_credentials: ecsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsToTerraform(struct!.repositoryCredentials),
    restart_policy: ecsDaemonTaskDefinitionContainerDefinitionsRestartPolicyToTerraform(struct!.restartPolicy),
    secrets: cdktn.listMapper(ecsDaemonTaskDefinitionContainerDefinitionsSecretsToTerraform, false)(struct!.secrets),
    start_timeout: cdktn.numberToTerraform(struct!.startTimeout),
    stop_timeout: cdktn.numberToTerraform(struct!.stopTimeout),
    system_controls: cdktn.listMapper(ecsDaemonTaskDefinitionContainerDefinitionsSystemControlsToTerraform, false)(struct!.systemControls),
    ulimits: cdktn.listMapper(ecsDaemonTaskDefinitionContainerDefinitionsUlimitsToTerraform, false)(struct!.ulimits),
    user: cdktn.stringToTerraform(struct!.user),
    working_directory: cdktn.stringToTerraform(struct!.workingDirectory),
  }
}


export function ecsDaemonTaskDefinitionContainerDefinitionsToHclTerraform(struct?: EcsDaemonTaskDefinitionContainerDefinitions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    command: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    cpu: {
      value: cdktn.numberToHclTerraform(struct!.cpu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    depends_on: {
      value: cdktn.listMapperHcl(ecsDaemonTaskDefinitionContainerDefinitionsDependsOnToHclTerraform, false)(struct!.dependsOn),
      isBlock: true,
      type: "list",
      storageClassType: "EcsDaemonTaskDefinitionContainerDefinitionsDependsOnList",
    },
    entry_point: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.entryPoint),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    environment: {
      value: cdktn.listMapperHcl(ecsDaemonTaskDefinitionContainerDefinitionsEnvironmentToHclTerraform, false)(struct!.environment),
      isBlock: true,
      type: "list",
      storageClassType: "EcsDaemonTaskDefinitionContainerDefinitionsEnvironmentList",
    },
    environment_files: {
      value: cdktn.listMapperHcl(ecsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesToHclTerraform, false)(struct!.environmentFiles),
      isBlock: true,
      type: "list",
      storageClassType: "EcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesList",
    },
    essential: {
      value: cdktn.booleanToHclTerraform(struct!.essential),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    firelens_configuration: {
      value: ecsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationToHclTerraform(struct!.firelensConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "EcsDaemonTaskDefinitionContainerDefinitionsFirelensConfiguration",
    },
    health_check: {
      value: ecsDaemonTaskDefinitionContainerDefinitionsHealthCheckToHclTerraform(struct!.healthCheck),
      isBlock: true,
      type: "struct",
      storageClassType: "EcsDaemonTaskDefinitionContainerDefinitionsHealthCheck",
    },
    image: {
      value: cdktn.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interactive: {
      value: cdktn.booleanToHclTerraform(struct!.interactive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    linux_parameters: {
      value: ecsDaemonTaskDefinitionContainerDefinitionsLinuxParametersToHclTerraform(struct!.linuxParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "EcsDaemonTaskDefinitionContainerDefinitionsLinuxParameters",
    },
    log_configuration: {
      value: ecsDaemonTaskDefinitionContainerDefinitionsLogConfigurationToHclTerraform(struct!.logConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "EcsDaemonTaskDefinitionContainerDefinitionsLogConfiguration",
    },
    memory: {
      value: cdktn.numberToHclTerraform(struct!.memory),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    memory_reservation: {
      value: cdktn.numberToHclTerraform(struct!.memoryReservation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mount_points: {
      value: cdktn.listMapperHcl(ecsDaemonTaskDefinitionContainerDefinitionsMountPointsToHclTerraform, false)(struct!.mountPoints),
      isBlock: true,
      type: "list",
      storageClassType: "EcsDaemonTaskDefinitionContainerDefinitionsMountPointsList",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    privileged: {
      value: cdktn.booleanToHclTerraform(struct!.privileged),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pseudo_terminal: {
      value: cdktn.booleanToHclTerraform(struct!.pseudoTerminal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    readonly_root_filesystem: {
      value: cdktn.booleanToHclTerraform(struct!.readonlyRootFilesystem),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    repository_credentials: {
      value: ecsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsToHclTerraform(struct!.repositoryCredentials),
      isBlock: true,
      type: "struct",
      storageClassType: "EcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentials",
    },
    restart_policy: {
      value: ecsDaemonTaskDefinitionContainerDefinitionsRestartPolicyToHclTerraform(struct!.restartPolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "EcsDaemonTaskDefinitionContainerDefinitionsRestartPolicy",
    },
    secrets: {
      value: cdktn.listMapperHcl(ecsDaemonTaskDefinitionContainerDefinitionsSecretsToHclTerraform, false)(struct!.secrets),
      isBlock: true,
      type: "list",
      storageClassType: "EcsDaemonTaskDefinitionContainerDefinitionsSecretsList",
    },
    start_timeout: {
      value: cdktn.numberToHclTerraform(struct!.startTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stop_timeout: {
      value: cdktn.numberToHclTerraform(struct!.stopTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    system_controls: {
      value: cdktn.listMapperHcl(ecsDaemonTaskDefinitionContainerDefinitionsSystemControlsToHclTerraform, false)(struct!.systemControls),
      isBlock: true,
      type: "list",
      storageClassType: "EcsDaemonTaskDefinitionContainerDefinitionsSystemControlsList",
    },
    ulimits: {
      value: cdktn.listMapperHcl(ecsDaemonTaskDefinitionContainerDefinitionsUlimitsToHclTerraform, false)(struct!.ulimits),
      isBlock: true,
      type: "list",
      storageClassType: "EcsDaemonTaskDefinitionContainerDefinitionsUlimitsList",
    },
    user: {
      value: cdktn.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    working_directory: {
      value: cdktn.stringToHclTerraform(struct!.workingDirectory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsDaemonTaskDefinitionContainerDefinitionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): EcsDaemonTaskDefinitionContainerDefinitions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._dependsOn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dependsOn = this._dependsOn?.internalValue;
    }
    if (this._entryPoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryPoint = this._entryPoint;
    }
    if (this._environment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment?.internalValue;
    }
    if (this._environmentFiles?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentFiles = this._environmentFiles?.internalValue;
    }
    if (this._essential !== undefined) {
      hasAnyValues = true;
      internalValueResult.essential = this._essential;
    }
    if (this._firelensConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.firelensConfiguration = this._firelensConfiguration?.internalValue;
    }
    if (this._healthCheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheck = this._healthCheck?.internalValue;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._interactive !== undefined) {
      hasAnyValues = true;
      internalValueResult.interactive = this._interactive;
    }
    if (this._linuxParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.linuxParameters = this._linuxParameters?.internalValue;
    }
    if (this._logConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logConfiguration = this._logConfiguration?.internalValue;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    if (this._memoryReservation !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryReservation = this._memoryReservation;
    }
    if (this._mountPoints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPoints = this._mountPoints?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._privileged !== undefined) {
      hasAnyValues = true;
      internalValueResult.privileged = this._privileged;
    }
    if (this._pseudoTerminal !== undefined) {
      hasAnyValues = true;
      internalValueResult.pseudoTerminal = this._pseudoTerminal;
    }
    if (this._readonlyRootFilesystem !== undefined) {
      hasAnyValues = true;
      internalValueResult.readonlyRootFilesystem = this._readonlyRootFilesystem;
    }
    if (this._repositoryCredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryCredentials = this._repositoryCredentials?.internalValue;
    }
    if (this._restartPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.restartPolicy = this._restartPolicy?.internalValue;
    }
    if (this._secrets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secrets = this._secrets?.internalValue;
    }
    if (this._startTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTimeout = this._startTimeout;
    }
    if (this._stopTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.stopTimeout = this._stopTimeout;
    }
    if (this._systemControls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemControls = this._systemControls?.internalValue;
    }
    if (this._ulimits?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ulimits = this._ulimits?.internalValue;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    if (this._workingDirectory !== undefined) {
      hasAnyValues = true;
      internalValueResult.workingDirectory = this._workingDirectory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsDaemonTaskDefinitionContainerDefinitions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._command = undefined;
      this._cpu = undefined;
      this._dependsOn.internalValue = undefined;
      this._entryPoint = undefined;
      this._environment.internalValue = undefined;
      this._environmentFiles.internalValue = undefined;
      this._essential = undefined;
      this._firelensConfiguration.internalValue = undefined;
      this._healthCheck.internalValue = undefined;
      this._image = undefined;
      this._interactive = undefined;
      this._linuxParameters.internalValue = undefined;
      this._logConfiguration.internalValue = undefined;
      this._memory = undefined;
      this._memoryReservation = undefined;
      this._mountPoints.internalValue = undefined;
      this._name = undefined;
      this._privileged = undefined;
      this._pseudoTerminal = undefined;
      this._readonlyRootFilesystem = undefined;
      this._repositoryCredentials.internalValue = undefined;
      this._restartPolicy.internalValue = undefined;
      this._secrets.internalValue = undefined;
      this._startTimeout = undefined;
      this._stopTimeout = undefined;
      this._systemControls.internalValue = undefined;
      this._ulimits.internalValue = undefined;
      this._user = undefined;
      this._workingDirectory = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._command = value.command;
      this._cpu = value.cpu;
      this._dependsOn.internalValue = value.dependsOn;
      this._entryPoint = value.entryPoint;
      this._environment.internalValue = value.environment;
      this._environmentFiles.internalValue = value.environmentFiles;
      this._essential = value.essential;
      this._firelensConfiguration.internalValue = value.firelensConfiguration;
      this._healthCheck.internalValue = value.healthCheck;
      this._image = value.image;
      this._interactive = value.interactive;
      this._linuxParameters.internalValue = value.linuxParameters;
      this._logConfiguration.internalValue = value.logConfiguration;
      this._memory = value.memory;
      this._memoryReservation = value.memoryReservation;
      this._mountPoints.internalValue = value.mountPoints;
      this._name = value.name;
      this._privileged = value.privileged;
      this._pseudoTerminal = value.pseudoTerminal;
      this._readonlyRootFilesystem = value.readonlyRootFilesystem;
      this._repositoryCredentials.internalValue = value.repositoryCredentials;
      this._restartPolicy.internalValue = value.restartPolicy;
      this._secrets.internalValue = value.secrets;
      this._startTimeout = value.startTimeout;
      this._stopTimeout = value.stopTimeout;
      this._systemControls.internalValue = value.systemControls;
      this._ulimits.internalValue = value.ulimits;
      this._user = value.user;
      this._workingDirectory = value.workingDirectory;
    }
  }

  // command - computed: true, optional: true, required: false
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // cpu - computed: true, optional: true, required: false
  private _cpu?: number; 
  public get cpu() {
    return this.getNumberAttribute('cpu');
  }
  public set cpu(value: number) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // depends_on - computed: true, optional: true, required: false
  private _dependsOn = new EcsDaemonTaskDefinitionContainerDefinitionsDependsOnList(this, "depends_on", false);
  public get dependsOn() {
    return this._dependsOn;
  }
  public putDependsOn(value: EcsDaemonTaskDefinitionContainerDefinitionsDependsOn[] | cdktn.IResolvable) {
    this._dependsOn.internalValue = value;
  }
  public resetDependsOn() {
    this._dependsOn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dependsOnInput() {
    return this._dependsOn.internalValue;
  }

  // entry_point - computed: true, optional: true, required: false
  private _entryPoint?: string[]; 
  public get entryPoint() {
    return this.getListAttribute('entry_point');
  }
  public set entryPoint(value: string[]) {
    this._entryPoint = value;
  }
  public resetEntryPoint() {
    this._entryPoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryPointInput() {
    return this._entryPoint;
  }

  // environment - computed: true, optional: true, required: false
  private _environment = new EcsDaemonTaskDefinitionContainerDefinitionsEnvironmentList(this, "environment", false);
  public get environment() {
    return this._environment;
  }
  public putEnvironment(value: EcsDaemonTaskDefinitionContainerDefinitionsEnvironment[] | cdktn.IResolvable) {
    this._environment.internalValue = value;
  }
  public resetEnvironment() {
    this._environment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment.internalValue;
  }

  // environment_files - computed: true, optional: true, required: false
  private _environmentFiles = new EcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFilesList(this, "environment_files", false);
  public get environmentFiles() {
    return this._environmentFiles;
  }
  public putEnvironmentFiles(value: EcsDaemonTaskDefinitionContainerDefinitionsEnvironmentFiles[] | cdktn.IResolvable) {
    this._environmentFiles.internalValue = value;
  }
  public resetEnvironmentFiles() {
    this._environmentFiles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentFilesInput() {
    return this._environmentFiles.internalValue;
  }

  // essential - computed: true, optional: true, required: false
  private _essential?: boolean | cdktn.IResolvable; 
  public get essential() {
    return this.getBooleanAttribute('essential');
  }
  public set essential(value: boolean | cdktn.IResolvable) {
    this._essential = value;
  }
  public resetEssential() {
    this._essential = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get essentialInput() {
    return this._essential;
  }

  // firelens_configuration - computed: true, optional: true, required: false
  private _firelensConfiguration = new EcsDaemonTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference(this, "firelens_configuration");
  public get firelensConfiguration() {
    return this._firelensConfiguration;
  }
  public putFirelensConfiguration(value: EcsDaemonTaskDefinitionContainerDefinitionsFirelensConfiguration) {
    this._firelensConfiguration.internalValue = value;
  }
  public resetFirelensConfiguration() {
    this._firelensConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firelensConfigurationInput() {
    return this._firelensConfiguration.internalValue;
  }

  // health_check - computed: true, optional: true, required: false
  private _healthCheck = new EcsDaemonTaskDefinitionContainerDefinitionsHealthCheckOutputReference(this, "health_check");
  public get healthCheck() {
    return this._healthCheck;
  }
  public putHealthCheck(value: EcsDaemonTaskDefinitionContainerDefinitionsHealthCheck) {
    this._healthCheck.internalValue = value;
  }
  public resetHealthCheck() {
    this._healthCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckInput() {
    return this._healthCheck.internalValue;
  }

  // image - computed: true, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // interactive - computed: true, optional: true, required: false
  private _interactive?: boolean | cdktn.IResolvable; 
  public get interactive() {
    return this.getBooleanAttribute('interactive');
  }
  public set interactive(value: boolean | cdktn.IResolvable) {
    this._interactive = value;
  }
  public resetInteractive() {
    this._interactive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interactiveInput() {
    return this._interactive;
  }

  // linux_parameters - computed: true, optional: true, required: false
  private _linuxParameters = new EcsDaemonTaskDefinitionContainerDefinitionsLinuxParametersOutputReference(this, "linux_parameters");
  public get linuxParameters() {
    return this._linuxParameters;
  }
  public putLinuxParameters(value: EcsDaemonTaskDefinitionContainerDefinitionsLinuxParameters) {
    this._linuxParameters.internalValue = value;
  }
  public resetLinuxParameters() {
    this._linuxParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linuxParametersInput() {
    return this._linuxParameters.internalValue;
  }

  // log_configuration - computed: true, optional: true, required: false
  private _logConfiguration = new EcsDaemonTaskDefinitionContainerDefinitionsLogConfigurationOutputReference(this, "log_configuration");
  public get logConfiguration() {
    return this._logConfiguration;
  }
  public putLogConfiguration(value: EcsDaemonTaskDefinitionContainerDefinitionsLogConfiguration) {
    this._logConfiguration.internalValue = value;
  }
  public resetLogConfiguration() {
    this._logConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logConfigurationInput() {
    return this._logConfiguration.internalValue;
  }

  // memory - computed: true, optional: true, required: false
  private _memory?: number; 
  public get memory() {
    return this.getNumberAttribute('memory');
  }
  public set memory(value: number) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }

  // memory_reservation - computed: true, optional: true, required: false
  private _memoryReservation?: number; 
  public get memoryReservation() {
    return this.getNumberAttribute('memory_reservation');
  }
  public set memoryReservation(value: number) {
    this._memoryReservation = value;
  }
  public resetMemoryReservation() {
    this._memoryReservation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryReservationInput() {
    return this._memoryReservation;
  }

  // mount_points - computed: true, optional: true, required: false
  private _mountPoints = new EcsDaemonTaskDefinitionContainerDefinitionsMountPointsList(this, "mount_points", false);
  public get mountPoints() {
    return this._mountPoints;
  }
  public putMountPoints(value: EcsDaemonTaskDefinitionContainerDefinitionsMountPoints[] | cdktn.IResolvable) {
    this._mountPoints.internalValue = value;
  }
  public resetMountPoints() {
    this._mountPoints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPointsInput() {
    return this._mountPoints.internalValue;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // privileged - computed: true, optional: true, required: false
  private _privileged?: boolean | cdktn.IResolvable; 
  public get privileged() {
    return this.getBooleanAttribute('privileged');
  }
  public set privileged(value: boolean | cdktn.IResolvable) {
    this._privileged = value;
  }
  public resetPrivileged() {
    this._privileged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegedInput() {
    return this._privileged;
  }

  // pseudo_terminal - computed: true, optional: true, required: false
  private _pseudoTerminal?: boolean | cdktn.IResolvable; 
  public get pseudoTerminal() {
    return this.getBooleanAttribute('pseudo_terminal');
  }
  public set pseudoTerminal(value: boolean | cdktn.IResolvable) {
    this._pseudoTerminal = value;
  }
  public resetPseudoTerminal() {
    this._pseudoTerminal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pseudoTerminalInput() {
    return this._pseudoTerminal;
  }

  // readonly_root_filesystem - computed: true, optional: true, required: false
  private _readonlyRootFilesystem?: boolean | cdktn.IResolvable; 
  public get readonlyRootFilesystem() {
    return this.getBooleanAttribute('readonly_root_filesystem');
  }
  public set readonlyRootFilesystem(value: boolean | cdktn.IResolvable) {
    this._readonlyRootFilesystem = value;
  }
  public resetReadonlyRootFilesystem() {
    this._readonlyRootFilesystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readonlyRootFilesystemInput() {
    return this._readonlyRootFilesystem;
  }

  // repository_credentials - computed: true, optional: true, required: false
  private _repositoryCredentials = new EcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference(this, "repository_credentials");
  public get repositoryCredentials() {
    return this._repositoryCredentials;
  }
  public putRepositoryCredentials(value: EcsDaemonTaskDefinitionContainerDefinitionsRepositoryCredentials) {
    this._repositoryCredentials.internalValue = value;
  }
  public resetRepositoryCredentials() {
    this._repositoryCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryCredentialsInput() {
    return this._repositoryCredentials.internalValue;
  }

  // restart_policy - computed: true, optional: true, required: false
  private _restartPolicy = new EcsDaemonTaskDefinitionContainerDefinitionsRestartPolicyOutputReference(this, "restart_policy");
  public get restartPolicy() {
    return this._restartPolicy;
  }
  public putRestartPolicy(value: EcsDaemonTaskDefinitionContainerDefinitionsRestartPolicy) {
    this._restartPolicy.internalValue = value;
  }
  public resetRestartPolicy() {
    this._restartPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restartPolicyInput() {
    return this._restartPolicy.internalValue;
  }

  // secrets - computed: true, optional: true, required: false
  private _secrets = new EcsDaemonTaskDefinitionContainerDefinitionsSecretsList(this, "secrets", false);
  public get secrets() {
    return this._secrets;
  }
  public putSecrets(value: EcsDaemonTaskDefinitionContainerDefinitionsSecrets[] | cdktn.IResolvable) {
    this._secrets.internalValue = value;
  }
  public resetSecrets() {
    this._secrets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsInput() {
    return this._secrets.internalValue;
  }

  // start_timeout - computed: true, optional: true, required: false
  private _startTimeout?: number; 
  public get startTimeout() {
    return this.getNumberAttribute('start_timeout');
  }
  public set startTimeout(value: number) {
    this._startTimeout = value;
  }
  public resetStartTimeout() {
    this._startTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeoutInput() {
    return this._startTimeout;
  }

  // stop_timeout - computed: true, optional: true, required: false
  private _stopTimeout?: number; 
  public get stopTimeout() {
    return this.getNumberAttribute('stop_timeout');
  }
  public set stopTimeout(value: number) {
    this._stopTimeout = value;
  }
  public resetStopTimeout() {
    this._stopTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stopTimeoutInput() {
    return this._stopTimeout;
  }

  // system_controls - computed: true, optional: true, required: false
  private _systemControls = new EcsDaemonTaskDefinitionContainerDefinitionsSystemControlsList(this, "system_controls", false);
  public get systemControls() {
    return this._systemControls;
  }
  public putSystemControls(value: EcsDaemonTaskDefinitionContainerDefinitionsSystemControls[] | cdktn.IResolvable) {
    this._systemControls.internalValue = value;
  }
  public resetSystemControls() {
    this._systemControls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemControlsInput() {
    return this._systemControls.internalValue;
  }

  // ulimits - computed: true, optional: true, required: false
  private _ulimits = new EcsDaemonTaskDefinitionContainerDefinitionsUlimitsList(this, "ulimits", false);
  public get ulimits() {
    return this._ulimits;
  }
  public putUlimits(value: EcsDaemonTaskDefinitionContainerDefinitionsUlimits[] | cdktn.IResolvable) {
    this._ulimits.internalValue = value;
  }
  public resetUlimits() {
    this._ulimits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ulimitsInput() {
    return this._ulimits.internalValue;
  }

  // user - computed: true, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // working_directory - computed: true, optional: true, required: false
  private _workingDirectory?: string; 
  public get workingDirectory() {
    return this.getStringAttribute('working_directory');
  }
  public set workingDirectory(value: string) {
    this._workingDirectory = value;
  }
  public resetWorkingDirectory() {
    this._workingDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workingDirectoryInput() {
    return this._workingDirectory;
  }
}

export class EcsDaemonTaskDefinitionContainerDefinitionsList extends cdktn.ComplexList {
  public internalValue? : EcsDaemonTaskDefinitionContainerDefinitions[] | cdktn.IResolvable

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
  public get(index: number): EcsDaemonTaskDefinitionContainerDefinitionsOutputReference {
    return new EcsDaemonTaskDefinitionContainerDefinitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EcsDaemonTaskDefinitionTags {
  /**
  * One part of a key-value pair that make up a tag. A ``key`` is a general label that acts like a category for more specific tag values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon_task_definition#key EcsDaemonTaskDefinition#key}
  */
  readonly key?: string;
  /**
  * The optional part of a key-value pair that make up a tag. A ``value`` acts as a descriptor within a tag category (key).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon_task_definition#value EcsDaemonTaskDefinition#value}
  */
  readonly value?: string;
}

export function ecsDaemonTaskDefinitionTagsToTerraform(struct?: EcsDaemonTaskDefinitionTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function ecsDaemonTaskDefinitionTagsToHclTerraform(struct?: EcsDaemonTaskDefinitionTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsDaemonTaskDefinitionTagsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): EcsDaemonTaskDefinitionTags | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsDaemonTaskDefinitionTags | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class EcsDaemonTaskDefinitionTagsList extends cdktn.ComplexList {
  public internalValue? : EcsDaemonTaskDefinitionTags[] | cdktn.IResolvable

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
  public get(index: number): EcsDaemonTaskDefinitionTagsOutputReference {
    return new EcsDaemonTaskDefinitionTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EcsDaemonTaskDefinitionVolumesHost {
  /**
  * When the ``host`` parameter is used, specify a ``sourcePath`` to declare the path on the host container instance that's presented to the container. If this parameter is empty, then the Docker daemon has assigned a host path for you. If the ``host`` parameter contains a ``sourcePath`` file location, then the data volume persists at the specified location on the host container instance until you delete it manually. If the ``sourcePath`` value doesn't exist on the host container instance, the Docker daemon creates it. If the location does exist, the contents of the source path folder are exported.
  *  If you're using the Fargate launch type, the ``sourcePath`` parameter is not supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon_task_definition#source_path EcsDaemonTaskDefinition#source_path}
  */
  readonly sourcePath?: string;
}

export function ecsDaemonTaskDefinitionVolumesHostToTerraform(struct?: EcsDaemonTaskDefinitionVolumesHost | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    source_path: cdktn.stringToTerraform(struct!.sourcePath),
  }
}


export function ecsDaemonTaskDefinitionVolumesHostToHclTerraform(struct?: EcsDaemonTaskDefinitionVolumesHost | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    source_path: {
      value: cdktn.stringToHclTerraform(struct!.sourcePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsDaemonTaskDefinitionVolumesHostOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EcsDaemonTaskDefinitionVolumesHost | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourcePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePath = this._sourcePath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsDaemonTaskDefinitionVolumesHost | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sourcePath = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sourcePath = value.sourcePath;
    }
  }

  // source_path - computed: true, optional: true, required: false
  private _sourcePath?: string; 
  public get sourcePath() {
    return this.getStringAttribute('source_path');
  }
  public set sourcePath(value: string) {
    this._sourcePath = value;
  }
  public resetSourcePath() {
    this._sourcePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePathInput() {
    return this._sourcePath;
  }
}
export interface EcsDaemonTaskDefinitionVolumes {
  /**
  * This parameter is specified when you use bind mount host volumes. The contents of the ``host`` parameter determine whether your bind mount host volume persists on the host container instance and where it's stored. If the ``host`` parameter is empty, then the Docker daemon assigns a host path for your data volume. However, the data isn't guaranteed to persist after the containers that are associated with it stop running.
  *  Windows containers can mount whole directories on the same drive as ``$env:ProgramData``. Windows containers can't mount directories on a different drive, and mount point can't be across drives. For example, you can mount ``C:\my\path:C:\my\path`` and ``D:\:D:\``, but not ``D:\my\path:C:\my\path`` or ``D:\:C:\my\path``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon_task_definition#host EcsDaemonTaskDefinition#host}
  */
  readonly host?: EcsDaemonTaskDefinitionVolumesHost;
  /**
  * The name of the volume. Up to 255 letters (uppercase and lowercase), numbers, underscores, and hyphens are allowed.
  *  When using a volume configured at launch, the ``name`` is required and must also be specified as the volume name in the ``ServiceVolumeConfiguration`` or ``TaskVolumeConfiguration`` parameter when creating your service or standalone task.
  *  For all other types of volumes, this name is referenced in the ``sourceVolume`` parameter of the ``mountPoints`` object in the container definition.
  *  When a volume is using the ``efsVolumeConfiguration``, the name is required.
  *  When a volume is using the ``s3filesVolumeConfiguration``, the name is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon_task_definition#name EcsDaemonTaskDefinition#name}
  */
  readonly name?: string;
}

export function ecsDaemonTaskDefinitionVolumesToTerraform(struct?: EcsDaemonTaskDefinitionVolumes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    host: ecsDaemonTaskDefinitionVolumesHostToTerraform(struct!.host),
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function ecsDaemonTaskDefinitionVolumesToHclTerraform(struct?: EcsDaemonTaskDefinitionVolumes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    host: {
      value: ecsDaemonTaskDefinitionVolumesHostToHclTerraform(struct!.host),
      isBlock: true,
      type: "struct",
      storageClassType: "EcsDaemonTaskDefinitionVolumesHost",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsDaemonTaskDefinitionVolumesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): EcsDaemonTaskDefinitionVolumes | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsDaemonTaskDefinitionVolumes | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host.internalValue = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host.internalValue = value.host;
      this._name = value.name;
    }
  }

  // host - computed: true, optional: true, required: false
  private _host = new EcsDaemonTaskDefinitionVolumesHostOutputReference(this, "host");
  public get host() {
    return this._host;
  }
  public putHost(value: EcsDaemonTaskDefinitionVolumesHost) {
    this._host.internalValue = value;
  }
  public resetHost() {
    this._host.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host.internalValue;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class EcsDaemonTaskDefinitionVolumesList extends cdktn.ComplexList {
  public internalValue? : EcsDaemonTaskDefinitionVolumes[] | cdktn.IResolvable

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
  public get(index: number): EcsDaemonTaskDefinitionVolumesOutputReference {
    return new EcsDaemonTaskDefinitionVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon_task_definition awscc_ecs_daemon_task_definition}
*/
export class EcsDaemonTaskDefinition extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_ecs_daemon_task_definition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a EcsDaemonTaskDefinition resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EcsDaemonTaskDefinition to import
  * @param importFromId The id of the existing EcsDaemonTaskDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon_task_definition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EcsDaemonTaskDefinition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ecs_daemon_task_definition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon_task_definition awscc_ecs_daemon_task_definition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EcsDaemonTaskDefinitionConfig = {}
  */
  public constructor(scope: Construct, id: string, config: EcsDaemonTaskDefinitionConfig = {}) {
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
    this._containerDefinitions.internalValue = config.containerDefinitions;
    this._cpu = config.cpu;
    this._executionRoleArn = config.executionRoleArn;
    this._family = config.family;
    this._ipcMode = config.ipcMode;
    this._memory = config.memory;
    this._pidMode = config.pidMode;
    this._tags.internalValue = config.tags;
    this._taskRoleArn = config.taskRoleArn;
    this._volumes.internalValue = config.volumes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // container_definitions - computed: true, optional: true, required: false
  private _containerDefinitions = new EcsDaemonTaskDefinitionContainerDefinitionsList(this, "container_definitions", true);
  public get containerDefinitions() {
    return this._containerDefinitions;
  }
  public putContainerDefinitions(value: EcsDaemonTaskDefinitionContainerDefinitions[] | cdktn.IResolvable) {
    this._containerDefinitions.internalValue = value;
  }
  public resetContainerDefinitions() {
    this._containerDefinitions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerDefinitionsInput() {
    return this._containerDefinitions.internalValue;
  }

  // cpu - computed: true, optional: true, required: false
  private _cpu?: string; 
  public get cpu() {
    return this.getStringAttribute('cpu');
  }
  public set cpu(value: string) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // daemon_task_definition_arn - computed: true, optional: false, required: false
  public get daemonTaskDefinitionArn() {
    return this.getStringAttribute('daemon_task_definition_arn');
  }

  // execution_role_arn - computed: true, optional: true, required: false
  private _executionRoleArn?: string; 
  public get executionRoleArn() {
    return this.getStringAttribute('execution_role_arn');
  }
  public set executionRoleArn(value: string) {
    this._executionRoleArn = value;
  }
  public resetExecutionRoleArn() {
    this._executionRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionRoleArnInput() {
    return this._executionRoleArn;
  }

  // family - computed: true, optional: true, required: false
  private _family?: string; 
  public get family() {
    return this.getStringAttribute('family');
  }
  public set family(value: string) {
    this._family = value;
  }
  public resetFamily() {
    this._family = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get familyInput() {
    return this._family;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ipc_mode - computed: true, optional: true, required: false
  private _ipcMode?: string; 
  public get ipcMode() {
    return this.getStringAttribute('ipc_mode');
  }
  public set ipcMode(value: string) {
    this._ipcMode = value;
  }
  public resetIpcMode() {
    this._ipcMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipcModeInput() {
    return this._ipcMode;
  }

  // memory - computed: true, optional: true, required: false
  private _memory?: string; 
  public get memory() {
    return this.getStringAttribute('memory');
  }
  public set memory(value: string) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }

  // pid_mode - computed: true, optional: true, required: false
  private _pidMode?: string; 
  public get pidMode() {
    return this.getStringAttribute('pid_mode');
  }
  public set pidMode(value: string) {
    this._pidMode = value;
  }
  public resetPidMode() {
    this._pidMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pidModeInput() {
    return this._pidMode;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new EcsDaemonTaskDefinitionTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: EcsDaemonTaskDefinitionTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // task_role_arn - computed: true, optional: true, required: false
  private _taskRoleArn?: string; 
  public get taskRoleArn() {
    return this.getStringAttribute('task_role_arn');
  }
  public set taskRoleArn(value: string) {
    this._taskRoleArn = value;
  }
  public resetTaskRoleArn() {
    this._taskRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskRoleArnInput() {
    return this._taskRoleArn;
  }

  // volumes - computed: true, optional: true, required: false
  private _volumes = new EcsDaemonTaskDefinitionVolumesList(this, "volumes", true);
  public get volumes() {
    return this._volumes;
  }
  public putVolumes(value: EcsDaemonTaskDefinitionVolumes[] | cdktn.IResolvable) {
    this._volumes.internalValue = value;
  }
  public resetVolumes() {
    this._volumes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumesInput() {
    return this._volumes.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      container_definitions: cdktn.listMapper(ecsDaemonTaskDefinitionContainerDefinitionsToTerraform, false)(this._containerDefinitions.internalValue),
      cpu: cdktn.stringToTerraform(this._cpu),
      execution_role_arn: cdktn.stringToTerraform(this._executionRoleArn),
      family: cdktn.stringToTerraform(this._family),
      ipc_mode: cdktn.stringToTerraform(this._ipcMode),
      memory: cdktn.stringToTerraform(this._memory),
      pid_mode: cdktn.stringToTerraform(this._pidMode),
      tags: cdktn.listMapper(ecsDaemonTaskDefinitionTagsToTerraform, false)(this._tags.internalValue),
      task_role_arn: cdktn.stringToTerraform(this._taskRoleArn),
      volumes: cdktn.listMapper(ecsDaemonTaskDefinitionVolumesToTerraform, false)(this._volumes.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      container_definitions: {
        value: cdktn.listMapperHcl(ecsDaemonTaskDefinitionContainerDefinitionsToHclTerraform, false)(this._containerDefinitions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "EcsDaemonTaskDefinitionContainerDefinitionsList",
      },
      cpu: {
        value: cdktn.stringToHclTerraform(this._cpu),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      execution_role_arn: {
        value: cdktn.stringToHclTerraform(this._executionRoleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      family: {
        value: cdktn.stringToHclTerraform(this._family),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipc_mode: {
        value: cdktn.stringToHclTerraform(this._ipcMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      memory: {
        value: cdktn.stringToHclTerraform(this._memory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pid_mode: {
        value: cdktn.stringToHclTerraform(this._pidMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(ecsDaemonTaskDefinitionTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EcsDaemonTaskDefinitionTagsList",
      },
      task_role_arn: {
        value: cdktn.stringToHclTerraform(this._taskRoleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      volumes: {
        value: cdktn.listMapperHcl(ecsDaemonTaskDefinitionVolumesToHclTerraform, false)(this._volumes.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "EcsDaemonTaskDefinitionVolumesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
