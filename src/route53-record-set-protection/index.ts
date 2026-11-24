/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53_record_set_protection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface Route53RecordSetProtectionConfig extends cdktn.TerraformMetaArguments {
  /**
  * A comment that describes the protection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53_record_set_protection#comment Route53RecordSetProtection#comment}
  */
  readonly comment?: string;
  /**
  * The ID of the hosted zone that contains the record set to protect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53_record_set_protection#hosted_zone_id Route53RecordSetProtection#hosted_zone_id}
  */
  readonly hostedZoneId: string;
  /**
  * The name of the record set to protect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53_record_set_protection#record_name Route53RecordSetProtection#record_name}
  */
  readonly recordName: string;
  /**
  * The DNS record type of the record set to protect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53_record_set_protection#record_type Route53RecordSetProtection#record_type}
  */
  readonly recordType: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53_record_set_protection awscc_route53_record_set_protection}
*/
export class Route53RecordSetProtection extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_route53_record_set_protection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a Route53RecordSetProtection resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Route53RecordSetProtection to import
  * @param importFromId The id of the existing Route53RecordSetProtection that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53_record_set_protection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Route53RecordSetProtection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_route53_record_set_protection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53_record_set_protection awscc_route53_record_set_protection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Route53RecordSetProtectionConfig
  */
  public constructor(scope: Construct, id: string, config: Route53RecordSetProtectionConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_route53_record_set_protection',
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
    this._comment = config.comment;
    this._hostedZoneId = config.hostedZoneId;
    this._recordName = config.recordName;
    this._recordType = config.recordType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // comment - computed: true, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // hosted_zone_id - computed: false, optional: false, required: true
  private _hostedZoneId?: string; 
  public get hostedZoneId() {
    return this.getStringAttribute('hosted_zone_id');
  }
  public set hostedZoneId(value: string) {
    this._hostedZoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostedZoneIdInput() {
    return this._hostedZoneId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // record_name - computed: false, optional: false, required: true
  private _recordName?: string; 
  public get recordName() {
    return this.getStringAttribute('record_name');
  }
  public set recordName(value: string) {
    this._recordName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recordNameInput() {
    return this._recordName;
  }

  // record_type - computed: false, optional: false, required: true
  private _recordType?: string; 
  public get recordType() {
    return this.getStringAttribute('record_type');
  }
  public set recordType(value: string) {
    this._recordType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recordTypeInput() {
    return this._recordType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktn.stringToTerraform(this._comment),
      hosted_zone_id: cdktn.stringToTerraform(this._hostedZoneId),
      record_name: cdktn.stringToTerraform(this._recordName),
      record_type: cdktn.stringToTerraform(this._recordType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comment: {
        value: cdktn.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hosted_zone_id: {
        value: cdktn.stringToHclTerraform(this._hostedZoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      record_name: {
        value: cdktn.stringToHclTerraform(this._recordName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      record_type: {
        value: cdktn.stringToHclTerraform(this._recordType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
