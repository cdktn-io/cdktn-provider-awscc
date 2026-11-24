/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_discovery_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ApiportalDiscoveryConfigurationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Optional discovery capabilities to enable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_discovery_configuration#discovery_features ApiportalDiscoveryConfiguration#discovery_features}
  */
  readonly discoveryFeatures?: string[];
  /**
  * The AWS services whose resources are scanned to discover APIs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_discovery_configuration#discovery_sources ApiportalDiscoveryConfiguration#discovery_sources}
  */
  readonly discoverySources: string[];
  /**
  * ARNs of resources to exclude from discovery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_discovery_configuration#excluded_resources ApiportalDiscoveryConfiguration#excluded_resources}
  */
  readonly excludedResources?: string[];
  /**
  * The tags associated with the discovery configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_discovery_configuration#tags ApiportalDiscoveryConfiguration#tags}
  */
  readonly tags?: ApiportalDiscoveryConfigurationTags[] | cdktn.IResolvable;
}
export interface ApiportalDiscoveryConfigurationTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_discovery_configuration#key ApiportalDiscoveryConfiguration#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_discovery_configuration#value ApiportalDiscoveryConfiguration#value}
  */
  readonly value?: string;
}

export function apiportalDiscoveryConfigurationTagsToTerraform(struct?: ApiportalDiscoveryConfigurationTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function apiportalDiscoveryConfigurationTagsToHclTerraform(struct?: ApiportalDiscoveryConfigurationTags | cdktn.IResolvable): any {
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

export class ApiportalDiscoveryConfigurationTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ApiportalDiscoveryConfigurationTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ApiportalDiscoveryConfigurationTags | cdktn.IResolvable | undefined) {
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

export class ApiportalDiscoveryConfigurationTagsList extends cdktn.ComplexList {
  public internalValue? : ApiportalDiscoveryConfigurationTags[] | cdktn.IResolvable

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
  public get(index: number): ApiportalDiscoveryConfigurationTagsOutputReference {
    return new ApiportalDiscoveryConfigurationTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_discovery_configuration awscc_apiportal_discovery_configuration}
*/
export class ApiportalDiscoveryConfiguration extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_apiportal_discovery_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ApiportalDiscoveryConfiguration resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApiportalDiscoveryConfiguration to import
  * @param importFromId The id of the existing ApiportalDiscoveryConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_discovery_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApiportalDiscoveryConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_apiportal_discovery_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_discovery_configuration awscc_apiportal_discovery_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiportalDiscoveryConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: ApiportalDiscoveryConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_apiportal_discovery_configuration',
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
    this._discoveryFeatures = config.discoveryFeatures;
    this._discoverySources = config.discoverySources;
    this._excludedResources = config.excludedResources;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // discovery_configuration_status - computed: true, optional: false, required: false
  public get discoveryConfigurationStatus() {
    return this.getStringAttribute('discovery_configuration_status');
  }

  // discovery_features - computed: true, optional: true, required: false
  private _discoveryFeatures?: string[]; 
  public get discoveryFeatures() {
    return cdktn.Fn.tolist(this.getListAttribute('discovery_features'));
  }
  public set discoveryFeatures(value: string[]) {
    this._discoveryFeatures = value;
  }
  public resetDiscoveryFeatures() {
    this._discoveryFeatures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryFeaturesInput() {
    return this._discoveryFeatures;
  }

  // discovery_sources - computed: false, optional: false, required: true
  private _discoverySources?: string[]; 
  public get discoverySources() {
    return cdktn.Fn.tolist(this.getListAttribute('discovery_sources'));
  }
  public set discoverySources(value: string[]) {
    this._discoverySources = value;
  }
  // Temporarily expose input value. Use with caution.
  public get discoverySourcesInput() {
    return this._discoverySources;
  }

  // excluded_resources - computed: true, optional: true, required: false
  private _excludedResources?: string[]; 
  public get excludedResources() {
    return cdktn.Fn.tolist(this.getListAttribute('excluded_resources'));
  }
  public set excludedResources(value: string[]) {
    this._excludedResources = value;
  }
  public resetExcludedResources() {
    this._excludedResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedResourcesInput() {
    return this._excludedResources;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new ApiportalDiscoveryConfigurationTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: ApiportalDiscoveryConfigurationTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      discovery_features: cdktn.listMapper(cdktn.stringToTerraform, false)(this._discoveryFeatures),
      discovery_sources: cdktn.listMapper(cdktn.stringToTerraform, false)(this._discoverySources),
      excluded_resources: cdktn.listMapper(cdktn.stringToTerraform, false)(this._excludedResources),
      tags: cdktn.listMapper(apiportalDiscoveryConfigurationTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      discovery_features: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._discoveryFeatures),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      discovery_sources: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._discoverySources),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      excluded_resources: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._excludedResources),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tags: {
        value: cdktn.listMapperHcl(apiportalDiscoveryConfigurationTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApiportalDiscoveryConfigurationTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
