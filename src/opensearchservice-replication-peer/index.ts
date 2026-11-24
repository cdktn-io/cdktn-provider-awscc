/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchservice_replication_peer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface OpensearchserviceReplicationPeerConfig extends cdktn.TerraformMetaArguments {
  /**
  * The name of the domain to replicate, which becomes the primary. The domain must be in the same account and Region as the stack. After a switchover or failover this domain may no longer be the primary.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchservice_replication_peer#domain_name OpensearchserviceReplicationPeer#domain_name}
  */
  readonly domainName: string;
  /**
  * The ARN of the domain to replicate with, which becomes the secondary. The peer domain must be in the same account and can be in the same or another Region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchservice_replication_peer#peer_domain_arn OpensearchserviceReplicationPeer#peer_domain_arn}
  */
  readonly peerDomainArn: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchservice_replication_peer awscc_opensearchservice_replication_peer}
*/
export class OpensearchserviceReplicationPeer extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_opensearchservice_replication_peer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a OpensearchserviceReplicationPeer resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OpensearchserviceReplicationPeer to import
  * @param importFromId The id of the existing OpensearchserviceReplicationPeer that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchservice_replication_peer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OpensearchserviceReplicationPeer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_opensearchservice_replication_peer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchservice_replication_peer awscc_opensearchservice_replication_peer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OpensearchserviceReplicationPeerConfig
  */
  public constructor(scope: Construct, id: string, config: OpensearchserviceReplicationPeerConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_opensearchservice_replication_peer',
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
    this._domainName = config.domainName;
    this._peerDomainArn = config.peerDomainArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // domain_arn - computed: true, optional: false, required: false
  public get domainArn() {
    return this.getStringAttribute('domain_arn');
  }

  // domain_name - computed: false, optional: false, required: true
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // peer_domain_arn - computed: false, optional: false, required: true
  private _peerDomainArn?: string; 
  public get peerDomainArn() {
    return this.getStringAttribute('peer_domain_arn');
  }
  public set peerDomainArn(value: string) {
    this._peerDomainArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerDomainArnInput() {
    return this._peerDomainArn;
  }

  // peer_role - computed: true, optional: false, required: false
  public get peerRole() {
    return this.getStringAttribute('peer_role');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain_name: cdktn.stringToTerraform(this._domainName),
      peer_domain_arn: cdktn.stringToTerraform(this._peerDomainArn),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domain_name: {
        value: cdktn.stringToHclTerraform(this._domainName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peer_domain_arn: {
        value: cdktn.stringToHclTerraform(this._peerDomainArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
