/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53_health_check_source
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface Route53HealthCheckSourceConfig extends cdktn.TerraformMetaArguments {
  /**
  * <p>The VPC, subnets, and security groups for the health check source.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53_health_check_source#health_check_source_config Route53HealthCheckSource#health_check_source_config}
  */
  readonly healthCheckSourceConfig: Route53HealthCheckSourceHealthCheckSourceConfig;
  /**
  * An array of key-value pairs to apply to this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53_health_check_source#tags Route53HealthCheckSource#tags}
  */
  readonly tags?: Route53HealthCheckSourceTags[] | cdktn.IResolvable;
}
export interface Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct {
  /**
  * <p>The ID of the Availability Zone that contains the subnet, for example <code>use1-az1</code>. Specify the Availability Zone ID, not the Availability Zone name. Each subnet in a health check source must be in a different Availability Zone.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53_health_check_source#availability_zone_id Route53HealthCheckSource#availability_zone_id}
  */
  readonly availabilityZoneId: string;
  /**
  * <p>The IDs of one to ten security groups in the same VPC to associate with the network interfaces that Route 53 creates in this subnet. The security groups must allow outbound traffic to the endpoints that the health checks monitor.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53_health_check_source#security_group_id_list Route53HealthCheckSource#security_group_id_list}
  */
  readonly securityGroupIdList: string[];
  /**
  * <p>The ID of the subnet. The subnet must have free IP addresses for the network interfaces that Route 53 creates.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53_health_check_source#subnet_id Route53HealthCheckSource#subnet_id}
  */
  readonly subnetId: string;
}

export function route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructToTerraform(struct?: Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    availability_zone_id: cdktn.stringToTerraform(struct!.availabilityZoneId),
    security_group_id_list: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIdList),
    subnet_id: cdktn.stringToTerraform(struct!.subnetId),
  }
}


export function route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructToHclTerraform(struct?: Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    availability_zone_id: {
      value: cdktn.stringToHclTerraform(struct!.availabilityZoneId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_group_id_list: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroupIdList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    subnet_id: {
      value: cdktn.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityZoneId !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityZoneId = this._availabilityZoneId;
    }
    if (this._securityGroupIdList !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIdList = this._securityGroupIdList;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._availabilityZoneId = undefined;
      this._securityGroupIdList = undefined;
      this._subnetId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._availabilityZoneId = value.availabilityZoneId;
      this._securityGroupIdList = value.securityGroupIdList;
      this._subnetId = value.subnetId;
    }
  }

  // availability_zone_id - computed: false, optional: false, required: true
  private _availabilityZoneId?: string; 
  public get availabilityZoneId() {
    return this.getStringAttribute('availability_zone_id');
  }
  public set availabilityZoneId(value: string) {
    this._availabilityZoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneIdInput() {
    return this._availabilityZoneId;
  }

  // security_group_id_list - computed: false, optional: false, required: true
  private _securityGroupIdList?: string[]; 
  public get securityGroupIdList() {
    return this.getListAttribute('security_group_id_list');
  }
  public set securityGroupIdList(value: string[]) {
    this._securityGroupIdList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdListInput() {
    return this._securityGroupIdList;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }
}

export class Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList extends cdktn.ComplexList {
  public internalValue? : Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct[] | cdktn.IResolvable

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
  public get(index: number): Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference {
    return new Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Route53HealthCheckSourceHealthCheckSourceConfig {
  /**
  * <p>A complex type that contains one <code>SubnetConfiguration</code> element for each Availability Zone that Route 53 uses for private endpoint health checks in the Amazon Web Services Region. Each element must be in a different Availability Zone. Most Regions require three elements. Regions that have only two such Availability Zones, such as US West (N. California), require two elements. Route 53 creates network interfaces in each subnet and sends health check requests from all of them.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53_health_check_source#subnet_configuration_list Route53HealthCheckSource#subnet_configuration_list}
  */
  readonly subnetConfigurationList: Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct[] | cdktn.IResolvable;
  /**
  * <p>The ID of the VPC that contains the subnets for the health check source. All subnets in <code>SubnetConfigurationList</code> must belong to this VPC.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53_health_check_source#vpc_id Route53HealthCheckSource#vpc_id}
  */
  readonly vpcId: string;
}

export function route53HealthCheckSourceHealthCheckSourceConfigToTerraform(struct?: Route53HealthCheckSourceHealthCheckSourceConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    subnet_configuration_list: cdktn.listMapper(route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructToTerraform, false)(struct!.subnetConfigurationList),
    vpc_id: cdktn.stringToTerraform(struct!.vpcId),
  }
}


export function route53HealthCheckSourceHealthCheckSourceConfigToHclTerraform(struct?: Route53HealthCheckSourceHealthCheckSourceConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    subnet_configuration_list: {
      value: cdktn.listMapperHcl(route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructToHclTerraform, false)(struct!.subnetConfigurationList),
      isBlock: true,
      type: "list",
      storageClassType: "Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList",
    },
    vpc_id: {
      value: cdktn.stringToHclTerraform(struct!.vpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Route53HealthCheckSourceHealthCheckSourceConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Route53HealthCheckSourceHealthCheckSourceConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subnetConfigurationList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetConfigurationList = this._subnetConfigurationList?.internalValue;
    }
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Route53HealthCheckSourceHealthCheckSourceConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._subnetConfigurationList.internalValue = undefined;
      this._vpcId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._subnetConfigurationList.internalValue = value.subnetConfigurationList;
      this._vpcId = value.vpcId;
    }
  }

  // subnet_configuration_list - computed: false, optional: false, required: true
  private _subnetConfigurationList = new Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList(this, "subnet_configuration_list", false);
  public get subnetConfigurationList() {
    return this._subnetConfigurationList;
  }
  public putSubnetConfigurationList(value: Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct[] | cdktn.IResolvable) {
    this._subnetConfigurationList.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetConfigurationListInput() {
    return this._subnetConfigurationList.internalValue;
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }
}
export interface Route53HealthCheckSourceTags {
  /**
  * The key name of the tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53_health_check_source#key Route53HealthCheckSource#key}
  */
  readonly key?: string;
  /**
  * The value for the tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53_health_check_source#value Route53HealthCheckSource#value}
  */
  readonly value?: string;
}

export function route53HealthCheckSourceTagsToTerraform(struct?: Route53HealthCheckSourceTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function route53HealthCheckSourceTagsToHclTerraform(struct?: Route53HealthCheckSourceTags | cdktn.IResolvable): any {
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

export class Route53HealthCheckSourceTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Route53HealthCheckSourceTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Route53HealthCheckSourceTags | cdktn.IResolvable | undefined) {
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

export class Route53HealthCheckSourceTagsList extends cdktn.ComplexList {
  public internalValue? : Route53HealthCheckSourceTags[] | cdktn.IResolvable

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
  public get(index: number): Route53HealthCheckSourceTagsOutputReference {
    return new Route53HealthCheckSourceTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53_health_check_source awscc_route53_health_check_source}
*/
export class Route53HealthCheckSource extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_route53_health_check_source";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a Route53HealthCheckSource resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Route53HealthCheckSource to import
  * @param importFromId The id of the existing Route53HealthCheckSource that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53_health_check_source#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Route53HealthCheckSource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_route53_health_check_source", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53_health_check_source awscc_route53_health_check_source} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Route53HealthCheckSourceConfig
  */
  public constructor(scope: Construct, id: string, config: Route53HealthCheckSourceConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_route53_health_check_source',
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
    this._healthCheckSourceConfig.internalValue = config.healthCheckSourceConfig;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // health_check_source_config - computed: false, optional: false, required: true
  private _healthCheckSourceConfig = new Route53HealthCheckSourceHealthCheckSourceConfigOutputReference(this, "health_check_source_config");
  public get healthCheckSourceConfig() {
    return this._healthCheckSourceConfig;
  }
  public putHealthCheckSourceConfig(value: Route53HealthCheckSourceHealthCheckSourceConfig) {
    this._healthCheckSourceConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckSourceConfigInput() {
    return this._healthCheckSourceConfig.internalValue;
  }

  // health_check_source_id - computed: true, optional: false, required: false
  public get healthCheckSourceId() {
    return this.getStringAttribute('health_check_source_id');
  }

  // health_check_source_status - computed: true, optional: false, required: false
  public get healthCheckSourceStatus() {
    return this.getStringAttribute('health_check_source_status');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new Route53HealthCheckSourceTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: Route53HealthCheckSourceTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      health_check_source_config: route53HealthCheckSourceHealthCheckSourceConfigToTerraform(this._healthCheckSourceConfig.internalValue),
      tags: cdktn.listMapper(route53HealthCheckSourceTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      health_check_source_config: {
        value: route53HealthCheckSourceHealthCheckSourceConfigToHclTerraform(this._healthCheckSourceConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "Route53HealthCheckSourceHealthCheckSourceConfig",
      },
      tags: {
        value: cdktn.listMapperHcl(route53HealthCheckSourceTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "Route53HealthCheckSourceTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
