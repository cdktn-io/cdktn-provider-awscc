/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ec2_transit_gateway_attachment_nat_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface Ec2TransitGatewayAttachmentNatConfigurationConfig extends cdktn.TerraformMetaArguments {
  /**
  * The complete set of NAT rules for the attachment. Updating this property replaces the entire rule set: rules omitted from the new value are removed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ec2_transit_gateway_attachment_nat_configuration#nat_gateway_rules Ec2TransitGatewayAttachmentNatConfiguration#nat_gateway_rules}
  */
  readonly natGatewayRules: Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRules[] | cdktn.IResolvable;
  /**
  * Whether NAT gateway support is enabled on the attachment. Set to disable to stage NAT rules without activating them; the rules are retained and become active when this is later set to enable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ec2_transit_gateway_attachment_nat_configuration#nat_gateway_support Ec2TransitGatewayAttachmentNatConfiguration#nat_gateway_support}
  */
  readonly natGatewaySupport: string;
  /**
  * Whether routes for the NAT CIDRs are installed into the transit gateway route tables associated with the attachment. Whether this is configurable depends on the attachment; where the value is forced, supplying the opposite value is rejected. Omitting this property leaves the setting to the service: on a new configuration the service applies the attachment's default, but on an attachment where the value is configurable it keeps the value already in effect rather than reverting to that default. Removing this property from a template, or deleting this resource, therefore leaves the setting at its last value rather than restoring the default, and a resource later created on the same attachment without this property inherits that value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ec2_transit_gateway_attachment_nat_configuration#nat_system_route_support Ec2TransitGatewayAttachmentNatConfiguration#nat_system_route_support}
  */
  readonly natSystemRouteSupport?: string;
  /**
  * The ID of the transit gateway attachment to configure NAT on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ec2_transit_gateway_attachment_nat_configuration#transit_gateway_attachment_id Ec2TransitGatewayAttachmentNatConfiguration#transit_gateway_attachment_id}
  */
  readonly transitGatewayAttachmentId: string;
}
export interface Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRules {
  /**
  * The source CIDR that the rule matches on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ec2_transit_gateway_attachment_nat_configuration#match_source_cidr Ec2TransitGatewayAttachmentNatConfiguration#match_source_cidr}
  */
  readonly matchSourceCidr: string;
  /**
  * The CIDR that the matched source addresses are translated to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ec2_transit_gateway_attachment_nat_configuration#nat_cidr Ec2TransitGatewayAttachmentNatConfiguration#nat_cidr}
  */
  readonly natCidr: string;
  /**
  * The rule number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ec2_transit_gateway_attachment_nat_configuration#rule_number Ec2TransitGatewayAttachmentNatConfiguration#rule_number}
  */
  readonly ruleNumber: number;
}

export function ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesToTerraform(struct?: Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    match_source_cidr: cdktn.stringToTerraform(struct!.matchSourceCidr),
    nat_cidr: cdktn.stringToTerraform(struct!.natCidr),
    rule_number: cdktn.numberToTerraform(struct!.ruleNumber),
  }
}


export function ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesToHclTerraform(struct?: Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    match_source_cidr: {
      value: cdktn.stringToHclTerraform(struct!.matchSourceCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nat_cidr: {
      value: cdktn.stringToHclTerraform(struct!.natCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_number: {
      value: cdktn.numberToHclTerraform(struct!.ruleNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRules | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchSourceCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchSourceCidr = this._matchSourceCidr;
    }
    if (this._natCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.natCidr = this._natCidr;
    }
    if (this._ruleNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleNumber = this._ruleNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRules | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchSourceCidr = undefined;
      this._natCidr = undefined;
      this._ruleNumber = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchSourceCidr = value.matchSourceCidr;
      this._natCidr = value.natCidr;
      this._ruleNumber = value.ruleNumber;
    }
  }

  // match_source_cidr - computed: false, optional: false, required: true
  private _matchSourceCidr?: string; 
  public get matchSourceCidr() {
    return this.getStringAttribute('match_source_cidr');
  }
  public set matchSourceCidr(value: string) {
    this._matchSourceCidr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchSourceCidrInput() {
    return this._matchSourceCidr;
  }

  // nat_cidr - computed: false, optional: false, required: true
  private _natCidr?: string; 
  public get natCidr() {
    return this.getStringAttribute('nat_cidr');
  }
  public set natCidr(value: string) {
    this._natCidr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get natCidrInput() {
    return this._natCidr;
  }

  // rule_number - computed: false, optional: false, required: true
  private _ruleNumber?: number; 
  public get ruleNumber() {
    return this.getNumberAttribute('rule_number');
  }
  public set ruleNumber(value: number) {
    this._ruleNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleNumberInput() {
    return this._ruleNumber;
  }
}

export class Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList extends cdktn.ComplexList {
  public internalValue? : Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRules[] | cdktn.IResolvable

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
  public get(index: number): Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference {
    return new Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ec2_transit_gateway_attachment_nat_configuration awscc_ec2_transit_gateway_attachment_nat_configuration}
*/
export class Ec2TransitGatewayAttachmentNatConfiguration extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_ec2_transit_gateway_attachment_nat_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a Ec2TransitGatewayAttachmentNatConfiguration resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ec2TransitGatewayAttachmentNatConfiguration to import
  * @param importFromId The id of the existing Ec2TransitGatewayAttachmentNatConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ec2_transit_gateway_attachment_nat_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ec2TransitGatewayAttachmentNatConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_transit_gateway_attachment_nat_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ec2_transit_gateway_attachment_nat_configuration awscc_ec2_transit_gateway_attachment_nat_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ec2TransitGatewayAttachmentNatConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: Ec2TransitGatewayAttachmentNatConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_ec2_transit_gateway_attachment_nat_configuration',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.108.0',
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
    this._natGatewayRules.internalValue = config.natGatewayRules;
    this._natGatewaySupport = config.natGatewaySupport;
    this._natSystemRouteSupport = config.natSystemRouteSupport;
    this._transitGatewayAttachmentId = config.transitGatewayAttachmentId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // nat_gateway_rules - computed: false, optional: false, required: true
  private _natGatewayRules = new Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList(this, "nat_gateway_rules", true);
  public get natGatewayRules() {
    return this._natGatewayRules;
  }
  public putNatGatewayRules(value: Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRules[] | cdktn.IResolvable) {
    this._natGatewayRules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get natGatewayRulesInput() {
    return this._natGatewayRules.internalValue;
  }

  // nat_gateway_support - computed: false, optional: false, required: true
  private _natGatewaySupport?: string; 
  public get natGatewaySupport() {
    return this.getStringAttribute('nat_gateway_support');
  }
  public set natGatewaySupport(value: string) {
    this._natGatewaySupport = value;
  }
  // Temporarily expose input value. Use with caution.
  public get natGatewaySupportInput() {
    return this._natGatewaySupport;
  }

  // nat_system_route_support - computed: true, optional: true, required: false
  private _natSystemRouteSupport?: string; 
  public get natSystemRouteSupport() {
    return this.getStringAttribute('nat_system_route_support');
  }
  public set natSystemRouteSupport(value: string) {
    this._natSystemRouteSupport = value;
  }
  public resetNatSystemRouteSupport() {
    this._natSystemRouteSupport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natSystemRouteSupportInput() {
    return this._natSystemRouteSupport;
  }

  // transit_gateway_attachment_id - computed: false, optional: false, required: true
  private _transitGatewayAttachmentId?: string; 
  public get transitGatewayAttachmentId() {
    return this.getStringAttribute('transit_gateway_attachment_id');
  }
  public set transitGatewayAttachmentId(value: string) {
    this._transitGatewayAttachmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transitGatewayAttachmentIdInput() {
    return this._transitGatewayAttachmentId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      nat_gateway_rules: cdktn.listMapper(ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesToTerraform, false)(this._natGatewayRules.internalValue),
      nat_gateway_support: cdktn.stringToTerraform(this._natGatewaySupport),
      nat_system_route_support: cdktn.stringToTerraform(this._natSystemRouteSupport),
      transit_gateway_attachment_id: cdktn.stringToTerraform(this._transitGatewayAttachmentId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      nat_gateway_rules: {
        value: cdktn.listMapperHcl(ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesToHclTerraform, false)(this._natGatewayRules.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList",
      },
      nat_gateway_support: {
        value: cdktn.stringToHclTerraform(this._natGatewaySupport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat_system_route_support: {
        value: cdktn.stringToHclTerraform(this._natSystemRouteSupport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transit_gateway_attachment_id: {
        value: cdktn.stringToHclTerraform(this._transitGatewayAttachmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
