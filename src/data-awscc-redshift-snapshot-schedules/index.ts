/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/redshift_snapshot_schedules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccRedshiftSnapshotSchedulesConfig extends cdktn.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/redshift_snapshot_schedules awscc_redshift_snapshot_schedules}
*/
export class DataAwsccRedshiftSnapshotSchedules extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_redshift_snapshot_schedules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccRedshiftSnapshotSchedules resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccRedshiftSnapshotSchedules to import
  * @param importFromId The id of the existing DataAwsccRedshiftSnapshotSchedules that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/redshift_snapshot_schedules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccRedshiftSnapshotSchedules to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_redshift_snapshot_schedules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/redshift_snapshot_schedules awscc_redshift_snapshot_schedules} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccRedshiftSnapshotSchedulesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsccRedshiftSnapshotSchedulesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'awscc_redshift_snapshot_schedules',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.97.0',
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ids - computed: true, optional: false, required: false
  public get ids() {
    return cdktn.Fn.tolist(this.getListAttribute('ids'));
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
