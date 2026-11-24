/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// generated from terraform resource schema

import { DataAwsccBatchJobDefinitionConsumableResourcePropertiesOutputReference, 
DataAwsccBatchJobDefinitionContainerPropertiesOutputReference, 
DataAwsccBatchJobDefinitionEcsPropertiesOutputReference, 
DataAwsccBatchJobDefinitionEksPropertiesOutputReference, 
DataAwsccBatchJobDefinitionNodePropertiesOutputReference, 
DataAwsccBatchJobDefinitionResourceRetentionPolicyOutputReference, 
DataAwsccBatchJobDefinitionRetryStrategyOutputReference, 
DataAwsccBatchJobDefinitionTimeoutOutputReference} from './index-structs/index';
export * from './index-structs/index';
import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface DataAwsccBatchJobDefinitionConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/batch_job_definition#id DataAwsccBatchJobDefinition#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/batch_job_definition awscc_batch_job_definition}
*/
export class DataAwsccBatchJobDefinition extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_batch_job_definition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccBatchJobDefinition resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccBatchJobDefinition to import
  * @param importFromId The id of the existing DataAwsccBatchJobDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/batch_job_definition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccBatchJobDefinition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_batch_job_definition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/batch_job_definition awscc_batch_job_definition} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccBatchJobDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccBatchJobDefinitionConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // consumable_resource_properties - computed: true, optional: false, required: false
  private _consumableResourceProperties = new DataAwsccBatchJobDefinitionConsumableResourcePropertiesOutputReference(this, "consumable_resource_properties");
  public get consumableResourceProperties() {
    return this._consumableResourceProperties;
  }

  // container_properties - computed: true, optional: false, required: false
  private _containerProperties = new DataAwsccBatchJobDefinitionContainerPropertiesOutputReference(this, "container_properties");
  public get containerProperties() {
    return this._containerProperties;
  }

  // ecs_properties - computed: true, optional: false, required: false
  private _ecsProperties = new DataAwsccBatchJobDefinitionEcsPropertiesOutputReference(this, "ecs_properties");
  public get ecsProperties() {
    return this._ecsProperties;
  }

  // eks_properties - computed: true, optional: false, required: false
  private _eksProperties = new DataAwsccBatchJobDefinitionEksPropertiesOutputReference(this, "eks_properties");
  public get eksProperties() {
    return this._eksProperties;
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

  // job_definition_arn - computed: true, optional: false, required: false
  public get jobDefinitionArn() {
    return this.getStringAttribute('job_definition_arn');
  }

  // job_definition_name - computed: true, optional: false, required: false
  public get jobDefinitionName() {
    return this.getStringAttribute('job_definition_name');
  }

  // node_properties - computed: true, optional: false, required: false
  private _nodeProperties = new DataAwsccBatchJobDefinitionNodePropertiesOutputReference(this, "node_properties");
  public get nodeProperties() {
    return this._nodeProperties;
  }

  // parameters - computed: true, optional: false, required: false
  private _parameters = new cdktn.StringMap(this, "parameters");
  public get parameters() {
    return this._parameters;
  }

  // platform_capabilities - computed: true, optional: false, required: false
  public get platformCapabilities() {
    return this.getListAttribute('platform_capabilities');
  }

  // propagate_tags - computed: true, optional: false, required: false
  public get propagateTags() {
    return this.getBooleanAttribute('propagate_tags');
  }

  // resource_retention_policy - computed: true, optional: false, required: false
  private _resourceRetentionPolicy = new DataAwsccBatchJobDefinitionResourceRetentionPolicyOutputReference(this, "resource_retention_policy");
  public get resourceRetentionPolicy() {
    return this._resourceRetentionPolicy;
  }

  // retry_strategy - computed: true, optional: false, required: false
  private _retryStrategy = new DataAwsccBatchJobDefinitionRetryStrategyOutputReference(this, "retry_strategy");
  public get retryStrategy() {
    return this._retryStrategy;
  }

  // scheduling_priority - computed: true, optional: false, required: false
  public get schedulingPriority() {
    return this.getNumberAttribute('scheduling_priority');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktn.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // timeout - computed: true, optional: false, required: false
  private _timeout = new DataAwsccBatchJobDefinitionTimeoutOutputReference(this, "timeout");
  public get timeout() {
    return this._timeout;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
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
