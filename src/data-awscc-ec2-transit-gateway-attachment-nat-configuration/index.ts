/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/data-sources/ec2_transit_gateway_attachment_nat_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccEc2TransitGatewayAttachmentNatConfigurationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/data-sources/ec2_transit_gateway_attachment_nat_configuration#id DataAwsccEc2TransitGatewayAttachmentNatConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRules {
}

export function dataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRulesToTerraform(struct?: DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRules): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRulesToHclTerraform(struct?: DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRules): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // match_source_cidr - computed: true, optional: false, required: false
  public get matchSourceCidr() {
    return this.getStringAttribute('match_source_cidr');
  }

  // nat_cidr - computed: true, optional: false, required: false
  public get natCidr() {
    return this.getStringAttribute('nat_cidr');
  }

  // rule_number - computed: true, optional: false, required: false
  public get ruleNumber() {
    return this.getNumberAttribute('rule_number');
  }
}

export class DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference {
    return new DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/data-sources/ec2_transit_gateway_attachment_nat_configuration awscc_ec2_transit_gateway_attachment_nat_configuration}
*/
export class DataAwsccEc2TransitGatewayAttachmentNatConfiguration extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_ec2_transit_gateway_attachment_nat_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccEc2TransitGatewayAttachmentNatConfiguration resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccEc2TransitGatewayAttachmentNatConfiguration to import
  * @param importFromId The id of the existing DataAwsccEc2TransitGatewayAttachmentNatConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/data-sources/ec2_transit_gateway_attachment_nat_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccEc2TransitGatewayAttachmentNatConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_transit_gateway_attachment_nat_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/data-sources/ec2_transit_gateway_attachment_nat_configuration awscc_ec2_transit_gateway_attachment_nat_configuration} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccEc2TransitGatewayAttachmentNatConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccEc2TransitGatewayAttachmentNatConfigurationConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // nat_gateway_rules - computed: true, optional: false, required: false
  private _natGatewayRules = new DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList(this, "nat_gateway_rules", true);
  public get natGatewayRules() {
    return this._natGatewayRules;
  }

  // nat_gateway_support - computed: true, optional: false, required: false
  public get natGatewaySupport() {
    return this.getStringAttribute('nat_gateway_support');
  }

  // nat_system_route_support - computed: true, optional: false, required: false
  public get natSystemRouteSupport() {
    return this.getStringAttribute('nat_system_route_support');
  }

  // transit_gateway_attachment_id - computed: true, optional: false, required: false
  public get transitGatewayAttachmentId() {
    return this.getStringAttribute('transit_gateway_attachment_id');
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
