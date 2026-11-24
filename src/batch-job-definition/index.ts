/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// generated from terraform resource schema

import { BatchJobDefinitionConsumableResourceProperties, 
batchJobDefinitionConsumableResourcePropertiesToTerraform, 
batchJobDefinitionConsumableResourcePropertiesToHclTerraform, 
BatchJobDefinitionConsumableResourcePropertiesOutputReference, 
BatchJobDefinitionContainerProperties, 
batchJobDefinitionContainerPropertiesToTerraform, 
batchJobDefinitionContainerPropertiesToHclTerraform, 
BatchJobDefinitionContainerPropertiesOutputReference, 
BatchJobDefinitionEcsProperties, 
batchJobDefinitionEcsPropertiesToTerraform, 
batchJobDefinitionEcsPropertiesToHclTerraform, 
BatchJobDefinitionEcsPropertiesOutputReference, 
BatchJobDefinitionEksProperties, 
batchJobDefinitionEksPropertiesToTerraform, 
batchJobDefinitionEksPropertiesToHclTerraform, 
BatchJobDefinitionEksPropertiesOutputReference, 
BatchJobDefinitionNodeProperties, 
batchJobDefinitionNodePropertiesToTerraform, 
batchJobDefinitionNodePropertiesToHclTerraform, 
BatchJobDefinitionNodePropertiesOutputReference, 
BatchJobDefinitionResourceRetentionPolicy, 
batchJobDefinitionResourceRetentionPolicyToTerraform, 
batchJobDefinitionResourceRetentionPolicyToHclTerraform, 
BatchJobDefinitionResourceRetentionPolicyOutputReference, 
BatchJobDefinitionRetryStrategy, 
batchJobDefinitionRetryStrategyToTerraform, 
batchJobDefinitionRetryStrategyToHclTerraform, 
BatchJobDefinitionRetryStrategyOutputReference, 
BatchJobDefinitionTimeout, 
batchJobDefinitionTimeoutToTerraform, 
batchJobDefinitionTimeoutToHclTerraform, 
BatchJobDefinitionTimeoutOutputReference} from './index-structs/index';
export * from './index-structs/index';
import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface BatchJobDefinitionConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/batch_job_definition#consumable_resource_properties BatchJobDefinition#consumable_resource_properties}
  */
  readonly consumableResourceProperties?: BatchJobDefinitionConsumableResourceProperties;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/batch_job_definition#container_properties BatchJobDefinition#container_properties}
  */
  readonly containerProperties?: BatchJobDefinitionContainerProperties;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/batch_job_definition#ecs_properties BatchJobDefinition#ecs_properties}
  */
  readonly ecsProperties?: BatchJobDefinitionEcsProperties;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/batch_job_definition#eks_properties BatchJobDefinition#eks_properties}
  */
  readonly eksProperties?: BatchJobDefinitionEksProperties;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/batch_job_definition#job_definition_name BatchJobDefinition#job_definition_name}
  */
  readonly jobDefinitionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/batch_job_definition#node_properties BatchJobDefinition#node_properties}
  */
  readonly nodeProperties?: BatchJobDefinitionNodeProperties;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/batch_job_definition#parameters BatchJobDefinition#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/batch_job_definition#platform_capabilities BatchJobDefinition#platform_capabilities}
  */
  readonly platformCapabilities?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/batch_job_definition#propagate_tags BatchJobDefinition#propagate_tags}
  */
  readonly propagateTags?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/batch_job_definition#resource_retention_policy BatchJobDefinition#resource_retention_policy}
  */
  readonly resourceRetentionPolicy?: BatchJobDefinitionResourceRetentionPolicy;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/batch_job_definition#retry_strategy BatchJobDefinition#retry_strategy}
  */
  readonly retryStrategy?: BatchJobDefinitionRetryStrategy;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/batch_job_definition#scheduling_priority BatchJobDefinition#scheduling_priority}
  */
  readonly schedulingPriority?: number;
  /**
  * A key-value pair to associate with a resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/batch_job_definition#tags BatchJobDefinition#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/batch_job_definition#timeout BatchJobDefinition#timeout}
  */
  readonly timeout?: BatchJobDefinitionTimeout;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/batch_job_definition#type BatchJobDefinition#type}
  */
  readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/batch_job_definition awscc_batch_job_definition}
*/
export class BatchJobDefinition extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_batch_job_definition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a BatchJobDefinition resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BatchJobDefinition to import
  * @param importFromId The id of the existing BatchJobDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/batch_job_definition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BatchJobDefinition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_batch_job_definition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/batch_job_definition awscc_batch_job_definition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BatchJobDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: BatchJobDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_batch_job_definition',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.111.0',
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
    this._consumableResourceProperties.internalValue = config.consumableResourceProperties;
    this._containerProperties.internalValue = config.containerProperties;
    this._ecsProperties.internalValue = config.ecsProperties;
    this._eksProperties.internalValue = config.eksProperties;
    this._jobDefinitionName = config.jobDefinitionName;
    this._nodeProperties.internalValue = config.nodeProperties;
    this._parameters = config.parameters;
    this._platformCapabilities = config.platformCapabilities;
    this._propagateTags = config.propagateTags;
    this._resourceRetentionPolicy.internalValue = config.resourceRetentionPolicy;
    this._retryStrategy.internalValue = config.retryStrategy;
    this._schedulingPriority = config.schedulingPriority;
    this._tags = config.tags;
    this._timeout.internalValue = config.timeout;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // consumable_resource_properties - computed: true, optional: true, required: false
  private _consumableResourceProperties = new BatchJobDefinitionConsumableResourcePropertiesOutputReference(this, "consumable_resource_properties");
  public get consumableResourceProperties() {
    return this._consumableResourceProperties;
  }
  public putConsumableResourceProperties(value: BatchJobDefinitionConsumableResourceProperties) {
    this._consumableResourceProperties.internalValue = value;
  }
  public resetConsumableResourceProperties() {
    this._consumableResourceProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumableResourcePropertiesInput() {
    return this._consumableResourceProperties.internalValue;
  }

  // container_properties - computed: true, optional: true, required: false
  private _containerProperties = new BatchJobDefinitionContainerPropertiesOutputReference(this, "container_properties");
  public get containerProperties() {
    return this._containerProperties;
  }
  public putContainerProperties(value: BatchJobDefinitionContainerProperties) {
    this._containerProperties.internalValue = value;
  }
  public resetContainerProperties() {
    this._containerProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerPropertiesInput() {
    return this._containerProperties.internalValue;
  }

  // ecs_properties - computed: true, optional: true, required: false
  private _ecsProperties = new BatchJobDefinitionEcsPropertiesOutputReference(this, "ecs_properties");
  public get ecsProperties() {
    return this._ecsProperties;
  }
  public putEcsProperties(value: BatchJobDefinitionEcsProperties) {
    this._ecsProperties.internalValue = value;
  }
  public resetEcsProperties() {
    this._ecsProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecsPropertiesInput() {
    return this._ecsProperties.internalValue;
  }

  // eks_properties - computed: true, optional: true, required: false
  private _eksProperties = new BatchJobDefinitionEksPropertiesOutputReference(this, "eks_properties");
  public get eksProperties() {
    return this._eksProperties;
  }
  public putEksProperties(value: BatchJobDefinitionEksProperties) {
    this._eksProperties.internalValue = value;
  }
  public resetEksProperties() {
    this._eksProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eksPropertiesInput() {
    return this._eksProperties.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // job_definition_arn - computed: true, optional: false, required: false
  public get jobDefinitionArn() {
    return this.getStringAttribute('job_definition_arn');
  }

  // job_definition_name - computed: true, optional: true, required: false
  private _jobDefinitionName?: string; 
  public get jobDefinitionName() {
    return this.getStringAttribute('job_definition_name');
  }
  public set jobDefinitionName(value: string) {
    this._jobDefinitionName = value;
  }
  public resetJobDefinitionName() {
    this._jobDefinitionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobDefinitionNameInput() {
    return this._jobDefinitionName;
  }

  // node_properties - computed: true, optional: true, required: false
  private _nodeProperties = new BatchJobDefinitionNodePropertiesOutputReference(this, "node_properties");
  public get nodeProperties() {
    return this._nodeProperties;
  }
  public putNodeProperties(value: BatchJobDefinitionNodeProperties) {
    this._nodeProperties.internalValue = value;
  }
  public resetNodeProperties() {
    this._nodeProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePropertiesInput() {
    return this._nodeProperties.internalValue;
  }

  // parameters - computed: true, optional: true, required: false
  private _parameters?: { [key: string]: string }; 
  public get parameters() {
    return this.getStringMapAttribute('parameters');
  }
  public set parameters(value: { [key: string]: string }) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // platform_capabilities - computed: true, optional: true, required: false
  private _platformCapabilities?: string[]; 
  public get platformCapabilities() {
    return this.getListAttribute('platform_capabilities');
  }
  public set platformCapabilities(value: string[]) {
    this._platformCapabilities = value;
  }
  public resetPlatformCapabilities() {
    this._platformCapabilities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformCapabilitiesInput() {
    return this._platformCapabilities;
  }

  // propagate_tags - computed: true, optional: true, required: false
  private _propagateTags?: boolean | cdktn.IResolvable; 
  public get propagateTags() {
    return this.getBooleanAttribute('propagate_tags');
  }
  public set propagateTags(value: boolean | cdktn.IResolvable) {
    this._propagateTags = value;
  }
  public resetPropagateTags() {
    this._propagateTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propagateTagsInput() {
    return this._propagateTags;
  }

  // resource_retention_policy - computed: true, optional: true, required: false
  private _resourceRetentionPolicy = new BatchJobDefinitionResourceRetentionPolicyOutputReference(this, "resource_retention_policy");
  public get resourceRetentionPolicy() {
    return this._resourceRetentionPolicy;
  }
  public putResourceRetentionPolicy(value: BatchJobDefinitionResourceRetentionPolicy) {
    this._resourceRetentionPolicy.internalValue = value;
  }
  public resetResourceRetentionPolicy() {
    this._resourceRetentionPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceRetentionPolicyInput() {
    return this._resourceRetentionPolicy.internalValue;
  }

  // retry_strategy - computed: true, optional: true, required: false
  private _retryStrategy = new BatchJobDefinitionRetryStrategyOutputReference(this, "retry_strategy");
  public get retryStrategy() {
    return this._retryStrategy;
  }
  public putRetryStrategy(value: BatchJobDefinitionRetryStrategy) {
    this._retryStrategy.internalValue = value;
  }
  public resetRetryStrategy() {
    this._retryStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryStrategyInput() {
    return this._retryStrategy.internalValue;
  }

  // scheduling_priority - computed: true, optional: true, required: false
  private _schedulingPriority?: number; 
  public get schedulingPriority() {
    return this.getNumberAttribute('scheduling_priority');
  }
  public set schedulingPriority(value: number) {
    this._schedulingPriority = value;
  }
  public resetSchedulingPriority() {
    this._schedulingPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulingPriorityInput() {
    return this._schedulingPriority;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // timeout - computed: true, optional: true, required: false
  private _timeout = new BatchJobDefinitionTimeoutOutputReference(this, "timeout");
  public get timeout() {
    return this._timeout;
  }
  public putTimeout(value: BatchJobDefinitionTimeout) {
    this._timeout.internalValue = value;
  }
  public resetTimeout() {
    this._timeout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout.internalValue;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      consumable_resource_properties: batchJobDefinitionConsumableResourcePropertiesToTerraform(this._consumableResourceProperties.internalValue),
      container_properties: batchJobDefinitionContainerPropertiesToTerraform(this._containerProperties.internalValue),
      ecs_properties: batchJobDefinitionEcsPropertiesToTerraform(this._ecsProperties.internalValue),
      eks_properties: batchJobDefinitionEksPropertiesToTerraform(this._eksProperties.internalValue),
      job_definition_name: cdktn.stringToTerraform(this._jobDefinitionName),
      node_properties: batchJobDefinitionNodePropertiesToTerraform(this._nodeProperties.internalValue),
      parameters: cdktn.hashMapper(cdktn.stringToTerraform)(this._parameters),
      platform_capabilities: cdktn.listMapper(cdktn.stringToTerraform, false)(this._platformCapabilities),
      propagate_tags: cdktn.booleanToTerraform(this._propagateTags),
      resource_retention_policy: batchJobDefinitionResourceRetentionPolicyToTerraform(this._resourceRetentionPolicy.internalValue),
      retry_strategy: batchJobDefinitionRetryStrategyToTerraform(this._retryStrategy.internalValue),
      scheduling_priority: cdktn.numberToTerraform(this._schedulingPriority),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      timeout: batchJobDefinitionTimeoutToTerraform(this._timeout.internalValue),
      type: cdktn.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      consumable_resource_properties: {
        value: batchJobDefinitionConsumableResourcePropertiesToHclTerraform(this._consumableResourceProperties.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BatchJobDefinitionConsumableResourceProperties",
      },
      container_properties: {
        value: batchJobDefinitionContainerPropertiesToHclTerraform(this._containerProperties.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BatchJobDefinitionContainerProperties",
      },
      ecs_properties: {
        value: batchJobDefinitionEcsPropertiesToHclTerraform(this._ecsProperties.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BatchJobDefinitionEcsProperties",
      },
      eks_properties: {
        value: batchJobDefinitionEksPropertiesToHclTerraform(this._eksProperties.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BatchJobDefinitionEksProperties",
      },
      job_definition_name: {
        value: cdktn.stringToHclTerraform(this._jobDefinitionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_properties: {
        value: batchJobDefinitionNodePropertiesToHclTerraform(this._nodeProperties.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BatchJobDefinitionNodeProperties",
      },
      parameters: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._parameters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      platform_capabilities: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._platformCapabilities),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      propagate_tags: {
        value: cdktn.booleanToHclTerraform(this._propagateTags),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      resource_retention_policy: {
        value: batchJobDefinitionResourceRetentionPolicyToHclTerraform(this._resourceRetentionPolicy.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BatchJobDefinitionResourceRetentionPolicy",
      },
      retry_strategy: {
        value: batchJobDefinitionRetryStrategyToHclTerraform(this._retryStrategy.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BatchJobDefinitionRetryStrategy",
      },
      scheduling_priority: {
        value: cdktn.numberToHclTerraform(this._schedulingPriority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tags: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      timeout: {
        value: batchJobDefinitionTimeoutToHclTerraform(this._timeout.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BatchJobDefinitionTimeout",
      },
      type: {
        value: cdktn.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
