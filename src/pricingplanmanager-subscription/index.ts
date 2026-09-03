/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pricingplanmanager_subscription
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface PricingplanmanagerSubscriptionConfig extends cdktn.TerraformMetaArguments {
  /**
  * The name of the pricing plan family.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pricingplanmanager_subscription#plan_family PricingplanmanagerSubscription#plan_family}
  */
  readonly planFamily: string;
  /**
  * The tier of the pricing plan. Upgrades take effect immediately. However, rolling back an upgrade does not revert billing instantly; it schedules a downgrade to the end of the current billing period, and the higher-tier charge applies for the remainder of that month. While a downgrade is scheduled, the CurrentPlanTier property reports the tier currently being billed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pricingplanmanager_subscription#plan_tier PricingplanmanagerSubscription#plan_tier}
  */
  readonly planTier: string;
  /**
  * The ARNs of resources associated with the subscription.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pricingplanmanager_subscription#resource_arns PricingplanmanagerSubscription#resource_arns}
  */
  readonly resourceArns: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pricingplanmanager_subscription#usage_level PricingplanmanagerSubscription#usage_level}
  */
  readonly usageLevel?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pricingplanmanager_subscription awscc_pricingplanmanager_subscription}
*/
export class PricingplanmanagerSubscription extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_pricingplanmanager_subscription";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a PricingplanmanagerSubscription resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PricingplanmanagerSubscription to import
  * @param importFromId The id of the existing PricingplanmanagerSubscription that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pricingplanmanager_subscription#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PricingplanmanagerSubscription to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_pricingplanmanager_subscription", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pricingplanmanager_subscription awscc_pricingplanmanager_subscription} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PricingplanmanagerSubscriptionConfig
  */
  public constructor(scope: Construct, id: string, config: PricingplanmanagerSubscriptionConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_pricingplanmanager_subscription',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.100.0',
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
    this._planFamily = config.planFamily;
    this._planTier = config.planTier;
    this._resourceArns = config.resourceArns;
    this._usageLevel = config.usageLevel;
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

  // current_plan_tier - computed: true, optional: false, required: false
  public get currentPlanTier() {
    return this.getStringAttribute('current_plan_tier');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // plan_family - computed: false, optional: false, required: true
  private _planFamily?: string; 
  public get planFamily() {
    return this.getStringAttribute('plan_family');
  }
  public set planFamily(value: string) {
    this._planFamily = value;
  }
  // Temporarily expose input value. Use with caution.
  public get planFamilyInput() {
    return this._planFamily;
  }

  // plan_tier - computed: false, optional: false, required: true
  private _planTier?: string; 
  public get planTier() {
    return this.getStringAttribute('plan_tier');
  }
  public set planTier(value: string) {
    this._planTier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get planTierInput() {
    return this._planTier;
  }

  // resource_arns - computed: false, optional: false, required: true
  private _resourceArns?: string[]; 
  public get resourceArns() {
    return this.getListAttribute('resource_arns');
  }
  public set resourceArns(value: string[]) {
    this._resourceArns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceArnsInput() {
    return this._resourceArns;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_reason - computed: true, optional: false, required: false
  public get statusReason() {
    return this.getStringAttribute('status_reason');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // usage_level - computed: true, optional: true, required: false
  private _usageLevel?: string; 
  public get usageLevel() {
    return this.getStringAttribute('usage_level');
  }
  public set usageLevel(value: string) {
    this._usageLevel = value;
  }
  public resetUsageLevel() {
    this._usageLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usageLevelInput() {
    return this._usageLevel;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      plan_family: cdktn.stringToTerraform(this._planFamily),
      plan_tier: cdktn.stringToTerraform(this._planTier),
      resource_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(this._resourceArns),
      usage_level: cdktn.stringToTerraform(this._usageLevel),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      plan_family: {
        value: cdktn.stringToHclTerraform(this._planFamily),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plan_tier: {
        value: cdktn.stringToHclTerraform(this._planTier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_arns: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._resourceArns),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      usage_level: {
        value: cdktn.stringToHclTerraform(this._usageLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
