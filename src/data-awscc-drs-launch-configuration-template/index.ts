/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/drs_launch_configuration_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccDrsLaunchConfigurationTemplateConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/drs_launch_configuration_template#id DataAwsccDrsLaunchConfigurationTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccDrsLaunchConfigurationTemplateLicensing {
}

export function dataAwsccDrsLaunchConfigurationTemplateLicensingToTerraform(struct?: DataAwsccDrsLaunchConfigurationTemplateLicensing): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDrsLaunchConfigurationTemplateLicensingToHclTerraform(struct?: DataAwsccDrsLaunchConfigurationTemplateLicensing): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDrsLaunchConfigurationTemplateLicensing | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDrsLaunchConfigurationTemplateLicensing | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // os_byol - computed: true, optional: false, required: false
  public get osByol() {
    return this.getBooleanAttribute('os_byol');
  }
}
export interface DataAwsccDrsLaunchConfigurationTemplateTags {
}

export function dataAwsccDrsLaunchConfigurationTemplateTagsToTerraform(struct?: DataAwsccDrsLaunchConfigurationTemplateTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDrsLaunchConfigurationTemplateTagsToHclTerraform(struct?: DataAwsccDrsLaunchConfigurationTemplateTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccDrsLaunchConfigurationTemplateTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDrsLaunchConfigurationTemplateTags | undefined) {
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

export class DataAwsccDrsLaunchConfigurationTemplateTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference {
    return new DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/drs_launch_configuration_template awscc_drs_launch_configuration_template}
*/
export class DataAwsccDrsLaunchConfigurationTemplate extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_drs_launch_configuration_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccDrsLaunchConfigurationTemplate resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccDrsLaunchConfigurationTemplate to import
  * @param importFromId The id of the existing DataAwsccDrsLaunchConfigurationTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/drs_launch_configuration_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccDrsLaunchConfigurationTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_drs_launch_configuration_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/drs_launch_configuration_template awscc_drs_launch_configuration_template} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccDrsLaunchConfigurationTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccDrsLaunchConfigurationTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_drs_launch_configuration_template',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.103.0',
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

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // copy_private_ip - computed: true, optional: false, required: false
  public get copyPrivateIp() {
    return this.getBooleanAttribute('copy_private_ip');
  }

  // copy_tags - computed: true, optional: false, required: false
  public get copyTags() {
    return this.getBooleanAttribute('copy_tags');
  }

  // export_bucket_arn - computed: true, optional: false, required: false
  public get exportBucketArn() {
    return this.getStringAttribute('export_bucket_arn');
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

  // launch_configuration_template_id - computed: true, optional: false, required: false
  public get launchConfigurationTemplateId() {
    return this.getStringAttribute('launch_configuration_template_id');
  }

  // launch_disposition - computed: true, optional: false, required: false
  public get launchDisposition() {
    return this.getStringAttribute('launch_disposition');
  }

  // launch_into_source_instance - computed: true, optional: false, required: false
  public get launchIntoSourceInstance() {
    return this.getBooleanAttribute('launch_into_source_instance');
  }

  // licensing - computed: true, optional: false, required: false
  private _licensing = new DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference(this, "licensing");
  public get licensing() {
    return this._licensing;
  }

  // post_launch_enabled - computed: true, optional: false, required: false
  public get postLaunchEnabled() {
    return this.getBooleanAttribute('post_launch_enabled');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccDrsLaunchConfigurationTemplateTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // target_instance_type_right_sizing_method - computed: true, optional: false, required: false
  public get targetInstanceTypeRightSizingMethod() {
    return this.getStringAttribute('target_instance_type_right_sizing_method');
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
