/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface Route53GlobalresolverCoreNetworkEndpointConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#client_token Route53GlobalresolverCoreNetworkEndpoint#client_token}
  */
  readonly clientToken?: string;
  /**
  * The ARN of the AWS Cloud WAN core network to connect. The core network must be in the same account and AVAILABLE. A core network can have one core network endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#core_network_arn Route53GlobalresolverCoreNetworkEndpoint#core_network_arn}
  */
  readonly coreNetworkArn: string;
  /**
  * The ID of the Global Resolver to connect. A Global Resolver can have one core network endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#global_resolver_id Route53GlobalresolverCoreNetworkEndpoint#global_resolver_id}
  */
  readonly globalResolverId: string;
  /**
  * The private DNS IP addresses of the endpoint (1 to 5). Each IP address can appear once.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#ip_addresses Route53GlobalresolverCoreNetworkEndpoint#ip_addresses}
  */
  readonly ipAddresses: Route53GlobalresolverCoreNetworkEndpointIpAddresses[] | cdktn.IResolvable;
  /**
  * A name for the core network endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#name Route53GlobalresolverCoreNetworkEndpoint#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#tags Route53GlobalresolverCoreNetworkEndpoint#tags}
  */
  readonly tags?: Route53GlobalresolverCoreNetworkEndpointTags[] | cdktn.IResolvable;
}
export interface Route53GlobalresolverCoreNetworkEndpointIpAddresses {
  /**
  * Lowercase DNS label for the IP address. The service appends the endpoint ID to build the DNS name. The label of an existing IP address cannot be changed; to use a new label, change the IP address too.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#dns_label Route53GlobalresolverCoreNetworkEndpoint#dns_label}
  */
  readonly dnsLabel: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#ipv_4_address Route53GlobalresolverCoreNetworkEndpoint#ipv_4_address}
  */
  readonly ipv4Address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#ipv_6_address Route53GlobalresolverCoreNetworkEndpoint#ipv_6_address}
  */
  readonly ipv6Address?: string;
  /**
  * ALL to serve the IP address in every available region of the endpoint, or REGIONAL to serve it only in Regions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#region_scope Route53GlobalresolverCoreNetworkEndpoint#region_scope}
  */
  readonly regionScope: string;
  /**
  * Regions that serve the IP address. Required when RegionScope is REGIONAL and not allowed when it is ALL. Must be a subset of AvailableRegions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#regions Route53GlobalresolverCoreNetworkEndpoint#regions}
  */
  readonly regions?: string[];
}

export function route53GlobalresolverCoreNetworkEndpointIpAddressesToTerraform(struct?: Route53GlobalresolverCoreNetworkEndpointIpAddresses | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dns_label: cdktn.stringToTerraform(struct!.dnsLabel),
    ipv_4_address: cdktn.stringToTerraform(struct!.ipv4Address),
    ipv_6_address: cdktn.stringToTerraform(struct!.ipv6Address),
    region_scope: cdktn.stringToTerraform(struct!.regionScope),
    regions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.regions),
  }
}


export function route53GlobalresolverCoreNetworkEndpointIpAddressesToHclTerraform(struct?: Route53GlobalresolverCoreNetworkEndpointIpAddresses | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dns_label: {
      value: cdktn.stringToHclTerraform(struct!.dnsLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv_4_address: {
      value: cdktn.stringToHclTerraform(struct!.ipv4Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv_6_address: {
      value: cdktn.stringToHclTerraform(struct!.ipv6Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region_scope: {
      value: cdktn.stringToHclTerraform(struct!.regionScope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regions: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.regions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Route53GlobalresolverCoreNetworkEndpointIpAddresses | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsLabel = this._dnsLabel;
    }
    if (this._ipv4Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Address = this._ipv4Address;
    }
    if (this._ipv6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Address = this._ipv6Address;
    }
    if (this._regionScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionScope = this._regionScope;
    }
    if (this._regions !== undefined) {
      hasAnyValues = true;
      internalValueResult.regions = this._regions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Route53GlobalresolverCoreNetworkEndpointIpAddresses | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dnsLabel = undefined;
      this._ipv4Address = undefined;
      this._ipv6Address = undefined;
      this._regionScope = undefined;
      this._regions = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dnsLabel = value.dnsLabel;
      this._ipv4Address = value.ipv4Address;
      this._ipv6Address = value.ipv6Address;
      this._regionScope = value.regionScope;
      this._regions = value.regions;
    }
  }

  // dns_label - computed: false, optional: false, required: true
  private _dnsLabel?: string; 
  public get dnsLabel() {
    return this.getStringAttribute('dns_label');
  }
  public set dnsLabel(value: string) {
    this._dnsLabel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsLabelInput() {
    return this._dnsLabel;
  }

  // ipv_4_address - computed: true, optional: true, required: false
  private _ipv4Address?: string; 
  public get ipv4Address() {
    return this.getStringAttribute('ipv_4_address');
  }
  public set ipv4Address(value: string) {
    this._ipv4Address = value;
  }
  public resetIpv4Address() {
    this._ipv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddressInput() {
    return this._ipv4Address;
  }

  // ipv_6_address - computed: true, optional: true, required: false
  private _ipv6Address?: string; 
  public get ipv6Address() {
    return this.getStringAttribute('ipv_6_address');
  }
  public set ipv6Address(value: string) {
    this._ipv6Address = value;
  }
  public resetIpv6Address() {
    this._ipv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressInput() {
    return this._ipv6Address;
  }

  // region_scope - computed: false, optional: false, required: true
  private _regionScope?: string; 
  public get regionScope() {
    return this.getStringAttribute('region_scope');
  }
  public set regionScope(value: string) {
    this._regionScope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionScopeInput() {
    return this._regionScope;
  }

  // regions - computed: true, optional: true, required: false
  private _regions?: string[]; 
  public get regions() {
    return cdktn.Fn.tolist(this.getListAttribute('regions'));
  }
  public set regions(value: string[]) {
    this._regions = value;
  }
  public resetRegions() {
    this._regions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions;
  }
}

export class Route53GlobalresolverCoreNetworkEndpointIpAddressesList extends cdktn.ComplexList {
  public internalValue? : Route53GlobalresolverCoreNetworkEndpointIpAddresses[] | cdktn.IResolvable

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
  public get(index: number): Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference {
    return new Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Route53GlobalresolverCoreNetworkEndpointTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#key Route53GlobalresolverCoreNetworkEndpoint#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#value Route53GlobalresolverCoreNetworkEndpoint#value}
  */
  readonly value?: string;
}

export function route53GlobalresolverCoreNetworkEndpointTagsToTerraform(struct?: Route53GlobalresolverCoreNetworkEndpointTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function route53GlobalresolverCoreNetworkEndpointTagsToHclTerraform(struct?: Route53GlobalresolverCoreNetworkEndpointTags | cdktn.IResolvable): any {
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

export class Route53GlobalresolverCoreNetworkEndpointTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Route53GlobalresolverCoreNetworkEndpointTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Route53GlobalresolverCoreNetworkEndpointTags | cdktn.IResolvable | undefined) {
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

export class Route53GlobalresolverCoreNetworkEndpointTagsList extends cdktn.ComplexList {
  public internalValue? : Route53GlobalresolverCoreNetworkEndpointTags[] | cdktn.IResolvable

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
  public get(index: number): Route53GlobalresolverCoreNetworkEndpointTagsOutputReference {
    return new Route53GlobalresolverCoreNetworkEndpointTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint awscc_route53globalresolver_core_network_endpoint}
*/
export class Route53GlobalresolverCoreNetworkEndpoint extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_route53globalresolver_core_network_endpoint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a Route53GlobalresolverCoreNetworkEndpoint resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Route53GlobalresolverCoreNetworkEndpoint to import
  * @param importFromId The id of the existing Route53GlobalresolverCoreNetworkEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Route53GlobalresolverCoreNetworkEndpoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_route53globalresolver_core_network_endpoint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint awscc_route53globalresolver_core_network_endpoint} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Route53GlobalresolverCoreNetworkEndpointConfig
  */
  public constructor(scope: Construct, id: string, config: Route53GlobalresolverCoreNetworkEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_route53globalresolver_core_network_endpoint',
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
    this._clientToken = config.clientToken;
    this._coreNetworkArn = config.coreNetworkArn;
    this._globalResolverId = config.globalResolverId;
    this._ipAddresses.internalValue = config.ipAddresses;
    this._name = config.name;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // available_regions - computed: true, optional: false, required: false
  public get availableRegions() {
    return this.getListAttribute('available_regions');
  }

  // client_token - computed: true, optional: true, required: false
  private _clientToken?: string; 
  public get clientToken() {
    return this.getStringAttribute('client_token');
  }
  public set clientToken(value: string) {
    this._clientToken = value;
  }
  public resetClientToken() {
    this._clientToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientTokenInput() {
    return this._clientToken;
  }

  // core_network_arn - computed: false, optional: false, required: true
  private _coreNetworkArn?: string; 
  public get coreNetworkArn() {
    return this.getStringAttribute('core_network_arn');
  }
  public set coreNetworkArn(value: string) {
    this._coreNetworkArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get coreNetworkArnInput() {
    return this._coreNetworkArn;
  }

  // core_network_endpoint_id - computed: true, optional: false, required: false
  public get coreNetworkEndpointId() {
    return this.getStringAttribute('core_network_endpoint_id');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // global_resolver_id - computed: false, optional: false, required: true
  private _globalResolverId?: string; 
  public get globalResolverId() {
    return this.getStringAttribute('global_resolver_id');
  }
  public set globalResolverId(value: string) {
    this._globalResolverId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get globalResolverIdInput() {
    return this._globalResolverId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_addresses - computed: false, optional: false, required: true
  private _ipAddresses = new Route53GlobalresolverCoreNetworkEndpointIpAddressesList(this, "ip_addresses", false);
  public get ipAddresses() {
    return this._ipAddresses;
  }
  public putIpAddresses(value: Route53GlobalresolverCoreNetworkEndpointIpAddresses[] | cdktn.IResolvable) {
    this._ipAddresses.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressesInput() {
    return this._ipAddresses.internalValue;
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new Route53GlobalresolverCoreNetworkEndpointTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: Route53GlobalresolverCoreNetworkEndpointTags[] | cdktn.IResolvable) {
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
      client_token: cdktn.stringToTerraform(this._clientToken),
      core_network_arn: cdktn.stringToTerraform(this._coreNetworkArn),
      global_resolver_id: cdktn.stringToTerraform(this._globalResolverId),
      ip_addresses: cdktn.listMapper(route53GlobalresolverCoreNetworkEndpointIpAddressesToTerraform, false)(this._ipAddresses.internalValue),
      name: cdktn.stringToTerraform(this._name),
      tags: cdktn.listMapper(route53GlobalresolverCoreNetworkEndpointTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      client_token: {
        value: cdktn.stringToHclTerraform(this._clientToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      core_network_arn: {
        value: cdktn.stringToHclTerraform(this._coreNetworkArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      global_resolver_id: {
        value: cdktn.stringToHclTerraform(this._globalResolverId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_addresses: {
        value: cdktn.listMapperHcl(route53GlobalresolverCoreNetworkEndpointIpAddressesToHclTerraform, false)(this._ipAddresses.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Route53GlobalresolverCoreNetworkEndpointIpAddressesList",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(route53GlobalresolverCoreNetworkEndpointTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Route53GlobalresolverCoreNetworkEndpointTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
