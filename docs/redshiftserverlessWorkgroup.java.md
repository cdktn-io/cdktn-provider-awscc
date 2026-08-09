# `redshiftserverlessWorkgroup` Submodule <a name="`redshiftserverlessWorkgroup` Submodule" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedshiftserverlessWorkgroup <a name="RedshiftserverlessWorkgroup" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshiftserverless_workgroup awscc_redshiftserverless_workgroup}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer"></a>

```java
import io.cdktn.providers.awscc.redshiftserverless_workgroup.RedshiftserverlessWorkgroup;

RedshiftserverlessWorkgroup.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .workgroupName(java.lang.String)
//  .baseCapacity(java.lang.Number)
//  .configParameters(IResolvable|java.util.List<RedshiftserverlessWorkgroupConfigParameters>)
//  .enhancedVpcRouting(java.lang.Boolean|IResolvable)
//  .maxCapacity(java.lang.Number)
//  .namespaceName(java.lang.String)
//  .port(java.lang.Number)
//  .pricePerformanceTarget(RedshiftserverlessWorkgroupPricePerformanceTarget)
//  .publiclyAccessible(java.lang.Boolean|IResolvable)
//  .recoveryPointId(java.lang.String)
//  .securityGroupIds(java.util.List<java.lang.String>)
//  .snapshotArn(java.lang.String)
//  .snapshotName(java.lang.String)
//  .snapshotOwnerAccount(java.lang.String)
//  .subnetIds(java.util.List<java.lang.String>)
//  .tags(IResolvable|java.util.List<RedshiftserverlessWorkgroupTags>)
//  .trackName(java.lang.String)
//  .workgroup(RedshiftserverlessWorkgroupWorkgroup)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.workgroupName">workgroupName</a></code> | <code>java.lang.String</code> | The name of the workgroup. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.baseCapacity">baseCapacity</a></code> | <code>java.lang.Number</code> | The base compute capacity of the workgroup in Redshift Processing Units (RPUs). |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.configParameters">configParameters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameters">RedshiftserverlessWorkgroupConfigParameters</a>></code> | A list of parameters to set for finer control over a database. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.enhancedVpcRouting">enhancedVpcRouting</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | The value that specifies whether to enable enhanced virtual private cloud (VPC) routing, which forces Amazon Redshift Serverless to route traffic through your VPC. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.maxCapacity">maxCapacity</a></code> | <code>java.lang.Number</code> | The max compute capacity of the workgroup in Redshift Processing Units (RPUs). |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.namespaceName">namespaceName</a></code> | <code>java.lang.String</code> | The namespace the workgroup is associated with. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.port">port</a></code> | <code>java.lang.Number</code> | The custom port to use when connecting to a workgroup. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.pricePerformanceTarget">pricePerformanceTarget</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTarget">RedshiftserverlessWorkgroupPricePerformanceTarget</a></code> | A property that represents the price performance target settings for the workgroup. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.publiclyAccessible">publiclyAccessible</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | A value that specifies whether the workgroup can be accessible from a public network. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.recoveryPointId">recoveryPointId</a></code> | <code>java.lang.String</code> | The identifier of the recovery point to restore the namespace from. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | A list of security group IDs to associate with the workgroup. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.snapshotArn">snapshotArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the snapshot to restore the namespace from. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.snapshotName">snapshotName</a></code> | <code>java.lang.String</code> | The name of the snapshot to restore the namespace from. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.snapshotOwnerAccount">snapshotOwnerAccount</a></code> | <code>java.lang.String</code> | The AWS account ID that owns the snapshot. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | A list of subnet IDs the workgroup is associated with. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTags">RedshiftserverlessWorkgroupTags</a>></code> | The map of the key-value pairs used to tag the workgroup. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.trackName">trackName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshiftserverless_workgroup#track_name RedshiftserverlessWorkgroup#track_name}. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.workgroup">workgroup</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroup">RedshiftserverlessWorkgroupWorkgroup</a></code> | Definition for workgroup resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `workgroupName`<sup>Required</sup> <a name="workgroupName" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.workgroupName"></a>

- *Type:* java.lang.String

The name of the workgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshiftserverless_workgroup#workgroup_name RedshiftserverlessWorkgroup#workgroup_name}

---

##### `baseCapacity`<sup>Optional</sup> <a name="baseCapacity" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.baseCapacity"></a>

- *Type:* java.lang.Number

The base compute capacity of the workgroup in Redshift Processing Units (RPUs).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshiftserverless_workgroup#base_capacity RedshiftserverlessWorkgroup#base_capacity}

---

##### `configParameters`<sup>Optional</sup> <a name="configParameters" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.configParameters"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameters">RedshiftserverlessWorkgroupConfigParameters</a>>

A list of parameters to set for finer control over a database.

Available options are datestyle, enable_user_activity_logging, query_group, search_path, max_query_execution_time, and require_ssl.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshiftserverless_workgroup#config_parameters RedshiftserverlessWorkgroup#config_parameters}

---

##### `enhancedVpcRouting`<sup>Optional</sup> <a name="enhancedVpcRouting" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.enhancedVpcRouting"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

The value that specifies whether to enable enhanced virtual private cloud (VPC) routing, which forces Amazon Redshift Serverless to route traffic through your VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshiftserverless_workgroup#enhanced_vpc_routing RedshiftserverlessWorkgroup#enhanced_vpc_routing}

---

##### `maxCapacity`<sup>Optional</sup> <a name="maxCapacity" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.maxCapacity"></a>

- *Type:* java.lang.Number

The max compute capacity of the workgroup in Redshift Processing Units (RPUs).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshiftserverless_workgroup#max_capacity RedshiftserverlessWorkgroup#max_capacity}

---

##### `namespaceName`<sup>Optional</sup> <a name="namespaceName" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.namespaceName"></a>

- *Type:* java.lang.String

The namespace the workgroup is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshiftserverless_workgroup#namespace_name RedshiftserverlessWorkgroup#namespace_name}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.port"></a>

- *Type:* java.lang.Number

The custom port to use when connecting to a workgroup.

Valid port ranges are 5431-5455 and 8191-8215. The default is 5439.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshiftserverless_workgroup#port RedshiftserverlessWorkgroup#port}

---

##### `pricePerformanceTarget`<sup>Optional</sup> <a name="pricePerformanceTarget" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.pricePerformanceTarget"></a>

- *Type:* <a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTarget">RedshiftserverlessWorkgroupPricePerformanceTarget</a>

A property that represents the price performance target settings for the workgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshiftserverless_workgroup#price_performance_target RedshiftserverlessWorkgroup#price_performance_target}

---

##### `publiclyAccessible`<sup>Optional</sup> <a name="publiclyAccessible" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.publiclyAccessible"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

A value that specifies whether the workgroup can be accessible from a public network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshiftserverless_workgroup#publicly_accessible RedshiftserverlessWorkgroup#publicly_accessible}

---

##### `recoveryPointId`<sup>Optional</sup> <a name="recoveryPointId" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.recoveryPointId"></a>

- *Type:* java.lang.String

The identifier of the recovery point to restore the namespace from.

When this resource is first created, the namespace is restored from this recovery point. On subsequent updates, a restore occurs only when RecoveryPointId changes from its previous value. If the value is unchanged or removed, no restore takes place and existing data is preserved.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshiftserverless_workgroup#recovery_point_id RedshiftserverlessWorkgroup#recovery_point_id}

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.securityGroupIds"></a>

- *Type:* java.util.List<java.lang.String>

A list of security group IDs to associate with the workgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshiftserverless_workgroup#security_group_ids RedshiftserverlessWorkgroup#security_group_ids}

---

##### `snapshotArn`<sup>Optional</sup> <a name="snapshotArn" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.snapshotArn"></a>

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the snapshot to restore the namespace from.

Specify either SnapshotArn or SnapshotName, but not both. When this resource is first created, the namespace is restored from this snapshot. On subsequent updates, a restore occurs only when SnapshotArn changes from its previous value. If the value is unchanged or removed, no restore takes place and existing data is preserved.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshiftserverless_workgroup#snapshot_arn RedshiftserverlessWorkgroup#snapshot_arn}

---

##### `snapshotName`<sup>Optional</sup> <a name="snapshotName" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.snapshotName"></a>

- *Type:* java.lang.String

The name of the snapshot to restore the namespace from.

Because snapshot names are unique only within an account, also specify SnapshotOwnerAccount when restoring from a snapshot owned by a different account. Specify either SnapshotName or SnapshotArn, but not both. When this resource is first created, the namespace is restored from this snapshot. On subsequent updates, a restore occurs only when SnapshotName or SnapshotOwnerAccount changes from its previous value. If both values are unchanged or SnapshotName is removed, no restore takes place and existing data is preserved.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshiftserverless_workgroup#snapshot_name RedshiftserverlessWorkgroup#snapshot_name}

---

##### `snapshotOwnerAccount`<sup>Optional</sup> <a name="snapshotOwnerAccount" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.snapshotOwnerAccount"></a>

- *Type:* java.lang.String

The AWS account ID that owns the snapshot.

Required when restoring from a snapshot shared by another account. Used in combination with SnapshotName. On updates, changing this value while SnapshotName is set triggers a restore from the newly referenced snapshot. If the value is unchanged, no restore takes place and existing data is preserved.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshiftserverless_workgroup#snapshot_owner_account RedshiftserverlessWorkgroup#snapshot_owner_account}

---

##### `subnetIds`<sup>Optional</sup> <a name="subnetIds" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.subnetIds"></a>

- *Type:* java.util.List<java.lang.String>

A list of subnet IDs the workgroup is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshiftserverless_workgroup#subnet_ids RedshiftserverlessWorkgroup#subnet_ids}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTags">RedshiftserverlessWorkgroupTags</a>>

The map of the key-value pairs used to tag the workgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshiftserverless_workgroup#tags RedshiftserverlessWorkgroup#tags}

---

##### `trackName`<sup>Optional</sup> <a name="trackName" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.trackName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshiftserverless_workgroup#track_name RedshiftserverlessWorkgroup#track_name}.

---

##### `workgroup`<sup>Optional</sup> <a name="workgroup" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.workgroup"></a>

- *Type:* <a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroup">RedshiftserverlessWorkgroupWorkgroup</a>

Definition for workgroup resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshiftserverless_workgroup#workgroup RedshiftserverlessWorkgroup#workgroup}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.putConfigParameters">putConfigParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.putPricePerformanceTarget">putPricePerformanceTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.putWorkgroup">putWorkgroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetBaseCapacity">resetBaseCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetConfigParameters">resetConfigParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetEnhancedVpcRouting">resetEnhancedVpcRouting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetMaxCapacity">resetMaxCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetNamespaceName">resetNamespaceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetPricePerformanceTarget">resetPricePerformanceTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetPubliclyAccessible">resetPubliclyAccessible</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetRecoveryPointId">resetRecoveryPointId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetSnapshotArn">resetSnapshotArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetSnapshotName">resetSnapshotName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetSnapshotOwnerAccount">resetSnapshotOwnerAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetSubnetIds">resetSubnetIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetTrackName">resetTrackName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetWorkgroup">resetWorkgroup</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConfigParameters` <a name="putConfigParameters" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.putConfigParameters"></a>

```java
public void putConfigParameters(IResolvable|java.util.List<RedshiftserverlessWorkgroupConfigParameters> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.putConfigParameters.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameters">RedshiftserverlessWorkgroupConfigParameters</a>>

---

##### `putPricePerformanceTarget` <a name="putPricePerformanceTarget" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.putPricePerformanceTarget"></a>

```java
public void putPricePerformanceTarget(RedshiftserverlessWorkgroupPricePerformanceTarget value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.putPricePerformanceTarget.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTarget">RedshiftserverlessWorkgroupPricePerformanceTarget</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<RedshiftserverlessWorkgroupTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTags">RedshiftserverlessWorkgroupTags</a>>

---

##### `putWorkgroup` <a name="putWorkgroup" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.putWorkgroup"></a>

```java
public void putWorkgroup(RedshiftserverlessWorkgroupWorkgroup value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.putWorkgroup.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroup">RedshiftserverlessWorkgroupWorkgroup</a>

---

##### `resetBaseCapacity` <a name="resetBaseCapacity" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetBaseCapacity"></a>

```java
public void resetBaseCapacity()
```

##### `resetConfigParameters` <a name="resetConfigParameters" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetConfigParameters"></a>

```java
public void resetConfigParameters()
```

##### `resetEnhancedVpcRouting` <a name="resetEnhancedVpcRouting" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetEnhancedVpcRouting"></a>

```java
public void resetEnhancedVpcRouting()
```

##### `resetMaxCapacity` <a name="resetMaxCapacity" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetMaxCapacity"></a>

```java
public void resetMaxCapacity()
```

##### `resetNamespaceName` <a name="resetNamespaceName" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetNamespaceName"></a>

```java
public void resetNamespaceName()
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetPort"></a>

```java
public void resetPort()
```

##### `resetPricePerformanceTarget` <a name="resetPricePerformanceTarget" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetPricePerformanceTarget"></a>

```java
public void resetPricePerformanceTarget()
```

##### `resetPubliclyAccessible` <a name="resetPubliclyAccessible" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetPubliclyAccessible"></a>

```java
public void resetPubliclyAccessible()
```

##### `resetRecoveryPointId` <a name="resetRecoveryPointId" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetRecoveryPointId"></a>

```java
public void resetRecoveryPointId()
```

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetSecurityGroupIds"></a>

```java
public void resetSecurityGroupIds()
```

##### `resetSnapshotArn` <a name="resetSnapshotArn" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetSnapshotArn"></a>

```java
public void resetSnapshotArn()
```

##### `resetSnapshotName` <a name="resetSnapshotName" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetSnapshotName"></a>

```java
public void resetSnapshotName()
```

##### `resetSnapshotOwnerAccount` <a name="resetSnapshotOwnerAccount" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetSnapshotOwnerAccount"></a>

```java
public void resetSnapshotOwnerAccount()
```

##### `resetSubnetIds` <a name="resetSubnetIds" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetSubnetIds"></a>

```java
public void resetSubnetIds()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetTags"></a>

```java
public void resetTags()
```

##### `resetTrackName` <a name="resetTrackName" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetTrackName"></a>

```java
public void resetTrackName()
```

##### `resetWorkgroup` <a name="resetWorkgroup" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetWorkgroup"></a>

```java
public void resetWorkgroup()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a RedshiftserverlessWorkgroup resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.isConstruct"></a>

```java
import io.cdktn.providers.awscc.redshiftserverless_workgroup.RedshiftserverlessWorkgroup;

RedshiftserverlessWorkgroup.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.redshiftserverless_workgroup.RedshiftserverlessWorkgroup;

RedshiftserverlessWorkgroup.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.redshiftserverless_workgroup.RedshiftserverlessWorkgroup;

RedshiftserverlessWorkgroup.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.redshiftserverless_workgroup.RedshiftserverlessWorkgroup;

RedshiftserverlessWorkgroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),RedshiftserverlessWorkgroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a RedshiftserverlessWorkgroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the RedshiftserverlessWorkgroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing RedshiftserverlessWorkgroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshiftserverless_workgroup#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the RedshiftserverlessWorkgroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.configParameters">configParameters</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersList">RedshiftserverlessWorkgroupConfigParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.pricePerformanceTarget">pricePerformanceTarget</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference">RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsList">RedshiftserverlessWorkgroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.workgroup">workgroup</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference">RedshiftserverlessWorkgroupWorkgroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.baseCapacityInput">baseCapacityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.configParametersInput">configParametersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameters">RedshiftserverlessWorkgroupConfigParameters</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.enhancedVpcRoutingInput">enhancedVpcRoutingInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.maxCapacityInput">maxCapacityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.namespaceNameInput">namespaceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.pricePerformanceTargetInput">pricePerformanceTargetInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTarget">RedshiftserverlessWorkgroupPricePerformanceTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.publiclyAccessibleInput">publiclyAccessibleInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.recoveryPointIdInput">recoveryPointIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.snapshotArnInput">snapshotArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.snapshotNameInput">snapshotNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.snapshotOwnerAccountInput">snapshotOwnerAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.subnetIdsInput">subnetIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTags">RedshiftserverlessWorkgroupTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.trackNameInput">trackNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.workgroupInput">workgroupInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroup">RedshiftserverlessWorkgroupWorkgroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.workgroupNameInput">workgroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.baseCapacity">baseCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.enhancedVpcRouting">enhancedVpcRouting</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.maxCapacity">maxCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.namespaceName">namespaceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.publiclyAccessible">publiclyAccessible</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.recoveryPointId">recoveryPointId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.snapshotArn">snapshotArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.snapshotName">snapshotName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.snapshotOwnerAccount">snapshotOwnerAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.trackName">trackName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.workgroupName">workgroupName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `configParameters`<sup>Required</sup> <a name="configParameters" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.configParameters"></a>

```java
public RedshiftserverlessWorkgroupConfigParametersList getConfigParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersList">RedshiftserverlessWorkgroupConfigParametersList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `pricePerformanceTarget`<sup>Required</sup> <a name="pricePerformanceTarget" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.pricePerformanceTarget"></a>

```java
public RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference getPricePerformanceTarget();
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference">RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.tags"></a>

```java
public RedshiftserverlessWorkgroupTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsList">RedshiftserverlessWorkgroupTagsList</a>

---

##### `workgroup`<sup>Required</sup> <a name="workgroup" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.workgroup"></a>

```java
public RedshiftserverlessWorkgroupWorkgroupOutputReference getWorkgroup();
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference">RedshiftserverlessWorkgroupWorkgroupOutputReference</a>

---

##### `baseCapacityInput`<sup>Optional</sup> <a name="baseCapacityInput" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.baseCapacityInput"></a>

```java
public java.lang.Number getBaseCapacityInput();
```

- *Type:* java.lang.Number

---

##### `configParametersInput`<sup>Optional</sup> <a name="configParametersInput" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.configParametersInput"></a>

```java
public IResolvable|java.util.List<RedshiftserverlessWorkgroupConfigParameters> getConfigParametersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameters">RedshiftserverlessWorkgroupConfigParameters</a>>

---

##### `enhancedVpcRoutingInput`<sup>Optional</sup> <a name="enhancedVpcRoutingInput" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.enhancedVpcRoutingInput"></a>

```java
public java.lang.Boolean|IResolvable getEnhancedVpcRoutingInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `maxCapacityInput`<sup>Optional</sup> <a name="maxCapacityInput" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.maxCapacityInput"></a>

```java
public java.lang.Number getMaxCapacityInput();
```

- *Type:* java.lang.Number

---

##### `namespaceNameInput`<sup>Optional</sup> <a name="namespaceNameInput" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.namespaceNameInput"></a>

```java
public java.lang.String getNamespaceNameInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `pricePerformanceTargetInput`<sup>Optional</sup> <a name="pricePerformanceTargetInput" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.pricePerformanceTargetInput"></a>

```java
public IResolvable|RedshiftserverlessWorkgroupPricePerformanceTarget getPricePerformanceTargetInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTarget">RedshiftserverlessWorkgroupPricePerformanceTarget</a>

---

##### `publiclyAccessibleInput`<sup>Optional</sup> <a name="publiclyAccessibleInput" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.publiclyAccessibleInput"></a>

```java
public java.lang.Boolean|IResolvable getPubliclyAccessibleInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `recoveryPointIdInput`<sup>Optional</sup> <a name="recoveryPointIdInput" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.recoveryPointIdInput"></a>

```java
public java.lang.String getRecoveryPointIdInput();
```

- *Type:* java.lang.String

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.securityGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `snapshotArnInput`<sup>Optional</sup> <a name="snapshotArnInput" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.snapshotArnInput"></a>

```java
public java.lang.String getSnapshotArnInput();
```

- *Type:* java.lang.String

---

##### `snapshotNameInput`<sup>Optional</sup> <a name="snapshotNameInput" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.snapshotNameInput"></a>

```java
public java.lang.String getSnapshotNameInput();
```

- *Type:* java.lang.String

---

##### `snapshotOwnerAccountInput`<sup>Optional</sup> <a name="snapshotOwnerAccountInput" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.snapshotOwnerAccountInput"></a>

```java
public java.lang.String getSnapshotOwnerAccountInput();
```

- *Type:* java.lang.String

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.subnetIdsInput"></a>

```java
public java.util.List<java.lang.String> getSubnetIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.tagsInput"></a>

```java
public IResolvable|java.util.List<RedshiftserverlessWorkgroupTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTags">RedshiftserverlessWorkgroupTags</a>>

---

##### `trackNameInput`<sup>Optional</sup> <a name="trackNameInput" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.trackNameInput"></a>

```java
public java.lang.String getTrackNameInput();
```

- *Type:* java.lang.String

---

##### `workgroupInput`<sup>Optional</sup> <a name="workgroupInput" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.workgroupInput"></a>

```java
public IResolvable|RedshiftserverlessWorkgroupWorkgroup getWorkgroupInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroup">RedshiftserverlessWorkgroupWorkgroup</a>

---

##### `workgroupNameInput`<sup>Optional</sup> <a name="workgroupNameInput" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.workgroupNameInput"></a>

```java
public java.lang.String getWorkgroupNameInput();
```

- *Type:* java.lang.String

---

##### `baseCapacity`<sup>Required</sup> <a name="baseCapacity" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.baseCapacity"></a>

```java
public java.lang.Number getBaseCapacity();
```

- *Type:* java.lang.Number

---

##### `enhancedVpcRouting`<sup>Required</sup> <a name="enhancedVpcRouting" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.enhancedVpcRouting"></a>

```java
public java.lang.Boolean|IResolvable getEnhancedVpcRouting();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `maxCapacity`<sup>Required</sup> <a name="maxCapacity" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.maxCapacity"></a>

```java
public java.lang.Number getMaxCapacity();
```

- *Type:* java.lang.Number

---

##### `namespaceName`<sup>Required</sup> <a name="namespaceName" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.namespaceName"></a>

```java
public java.lang.String getNamespaceName();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `publiclyAccessible`<sup>Required</sup> <a name="publiclyAccessible" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.publiclyAccessible"></a>

```java
public java.lang.Boolean|IResolvable getPubliclyAccessible();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `recoveryPointId`<sup>Required</sup> <a name="recoveryPointId" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.recoveryPointId"></a>

```java
public java.lang.String getRecoveryPointId();
```

- *Type:* java.lang.String

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `snapshotArn`<sup>Required</sup> <a name="snapshotArn" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.snapshotArn"></a>

```java
public java.lang.String getSnapshotArn();
```

- *Type:* java.lang.String

---

##### `snapshotName`<sup>Required</sup> <a name="snapshotName" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.snapshotName"></a>

```java
public java.lang.String getSnapshotName();
```

- *Type:* java.lang.String

---

##### `snapshotOwnerAccount`<sup>Required</sup> <a name="snapshotOwnerAccount" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.snapshotOwnerAccount"></a>

```java
public java.lang.String getSnapshotOwnerAccount();
```

- *Type:* java.lang.String

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `trackName`<sup>Required</sup> <a name="trackName" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.trackName"></a>

```java
public java.lang.String getTrackName();
```

- *Type:* java.lang.String

---

##### `workgroupName`<sup>Required</sup> <a name="workgroupName" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.workgroupName"></a>

```java
public java.lang.String getWorkgroupName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### RedshiftserverlessWorkgroupConfig <a name="RedshiftserverlessWorkgroupConfig" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.redshiftserverless_workgroup.RedshiftserverlessWorkgroupConfig;

RedshiftserverlessWorkgroupConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .workgroupName(java.lang.String)
//  .baseCapacity(java.lang.Number)
//  .configParameters(IResolvable|java.util.List<RedshiftserverlessWorkgroupConfigParameters>)
//  .enhancedVpcRouting(java.lang.Boolean|IResolvable)
//  .maxCapacity(java.lang.Number)
//  .namespaceName(java.lang.String)
//  .port(java.lang.Number)
//  .pricePerformanceTarget(RedshiftserverlessWorkgroupPricePerformanceTarget)
//  .publiclyAccessible(java.lang.Boolean|IResolvable)
//  .recoveryPointId(java.lang.String)
//  .securityGroupIds(java.util.List<java.lang.String>)
//  .snapshotArn(java.lang.String)
//  .snapshotName(java.lang.String)
//  .snapshotOwnerAccount(java.lang.String)
//  .subnetIds(java.util.List<java.lang.String>)
//  .tags(IResolvable|java.util.List<RedshiftserverlessWorkgroupTags>)
//  .trackName(java.lang.String)
//  .workgroup(RedshiftserverlessWorkgroupWorkgroup)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.workgroupName">workgroupName</a></code> | <code>java.lang.String</code> | The name of the workgroup. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.baseCapacity">baseCapacity</a></code> | <code>java.lang.Number</code> | The base compute capacity of the workgroup in Redshift Processing Units (RPUs). |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.configParameters">configParameters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameters">RedshiftserverlessWorkgroupConfigParameters</a>></code> | A list of parameters to set for finer control over a database. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.enhancedVpcRouting">enhancedVpcRouting</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | The value that specifies whether to enable enhanced virtual private cloud (VPC) routing, which forces Amazon Redshift Serverless to route traffic through your VPC. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.maxCapacity">maxCapacity</a></code> | <code>java.lang.Number</code> | The max compute capacity of the workgroup in Redshift Processing Units (RPUs). |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.namespaceName">namespaceName</a></code> | <code>java.lang.String</code> | The namespace the workgroup is associated with. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.port">port</a></code> | <code>java.lang.Number</code> | The custom port to use when connecting to a workgroup. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.pricePerformanceTarget">pricePerformanceTarget</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTarget">RedshiftserverlessWorkgroupPricePerformanceTarget</a></code> | A property that represents the price performance target settings for the workgroup. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.publiclyAccessible">publiclyAccessible</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | A value that specifies whether the workgroup can be accessible from a public network. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.recoveryPointId">recoveryPointId</a></code> | <code>java.lang.String</code> | The identifier of the recovery point to restore the namespace from. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | A list of security group IDs to associate with the workgroup. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.snapshotArn">snapshotArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the snapshot to restore the namespace from. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.snapshotName">snapshotName</a></code> | <code>java.lang.String</code> | The name of the snapshot to restore the namespace from. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.snapshotOwnerAccount">snapshotOwnerAccount</a></code> | <code>java.lang.String</code> | The AWS account ID that owns the snapshot. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | A list of subnet IDs the workgroup is associated with. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTags">RedshiftserverlessWorkgroupTags</a>></code> | The map of the key-value pairs used to tag the workgroup. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.trackName">trackName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshiftserverless_workgroup#track_name RedshiftserverlessWorkgroup#track_name}. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.workgroup">workgroup</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroup">RedshiftserverlessWorkgroupWorkgroup</a></code> | Definition for workgroup resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `workgroupName`<sup>Required</sup> <a name="workgroupName" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.workgroupName"></a>

```java
public java.lang.String getWorkgroupName();
```

- *Type:* java.lang.String

The name of the workgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshiftserverless_workgroup#workgroup_name RedshiftserverlessWorkgroup#workgroup_name}

---

##### `baseCapacity`<sup>Optional</sup> <a name="baseCapacity" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.baseCapacity"></a>

```java
public java.lang.Number getBaseCapacity();
```

- *Type:* java.lang.Number

The base compute capacity of the workgroup in Redshift Processing Units (RPUs).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshiftserverless_workgroup#base_capacity RedshiftserverlessWorkgroup#base_capacity}

---

##### `configParameters`<sup>Optional</sup> <a name="configParameters" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.configParameters"></a>

```java
public IResolvable|java.util.List<RedshiftserverlessWorkgroupConfigParameters> getConfigParameters();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameters">RedshiftserverlessWorkgroupConfigParameters</a>>

A list of parameters to set for finer control over a database.

Available options are datestyle, enable_user_activity_logging, query_group, search_path, max_query_execution_time, and require_ssl.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshiftserverless_workgroup#config_parameters RedshiftserverlessWorkgroup#config_parameters}

---

##### `enhancedVpcRouting`<sup>Optional</sup> <a name="enhancedVpcRouting" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.enhancedVpcRouting"></a>

```java
public java.lang.Boolean|IResolvable getEnhancedVpcRouting();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

The value that specifies whether to enable enhanced virtual private cloud (VPC) routing, which forces Amazon Redshift Serverless to route traffic through your VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshiftserverless_workgroup#enhanced_vpc_routing RedshiftserverlessWorkgroup#enhanced_vpc_routing}

---

##### `maxCapacity`<sup>Optional</sup> <a name="maxCapacity" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.maxCapacity"></a>

```java
public java.lang.Number getMaxCapacity();
```

- *Type:* java.lang.Number

The max compute capacity of the workgroup in Redshift Processing Units (RPUs).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshiftserverless_workgroup#max_capacity RedshiftserverlessWorkgroup#max_capacity}

---

##### `namespaceName`<sup>Optional</sup> <a name="namespaceName" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.namespaceName"></a>

```java
public java.lang.String getNamespaceName();
```

- *Type:* java.lang.String

The namespace the workgroup is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshiftserverless_workgroup#namespace_name RedshiftserverlessWorkgroup#namespace_name}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

The custom port to use when connecting to a workgroup.

Valid port ranges are 5431-5455 and 8191-8215. The default is 5439.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshiftserverless_workgroup#port RedshiftserverlessWorkgroup#port}

---

##### `pricePerformanceTarget`<sup>Optional</sup> <a name="pricePerformanceTarget" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.pricePerformanceTarget"></a>

```java
public RedshiftserverlessWorkgroupPricePerformanceTarget getPricePerformanceTarget();
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTarget">RedshiftserverlessWorkgroupPricePerformanceTarget</a>

A property that represents the price performance target settings for the workgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshiftserverless_workgroup#price_performance_target RedshiftserverlessWorkgroup#price_performance_target}

---

##### `publiclyAccessible`<sup>Optional</sup> <a name="publiclyAccessible" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.publiclyAccessible"></a>

```java
public java.lang.Boolean|IResolvable getPubliclyAccessible();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

A value that specifies whether the workgroup can be accessible from a public network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshiftserverless_workgroup#publicly_accessible RedshiftserverlessWorkgroup#publicly_accessible}

---

##### `recoveryPointId`<sup>Optional</sup> <a name="recoveryPointId" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.recoveryPointId"></a>

```java
public java.lang.String getRecoveryPointId();
```

- *Type:* java.lang.String

The identifier of the recovery point to restore the namespace from.

When this resource is first created, the namespace is restored from this recovery point. On subsequent updates, a restore occurs only when RecoveryPointId changes from its previous value. If the value is unchanged or removed, no restore takes place and existing data is preserved.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshiftserverless_workgroup#recovery_point_id RedshiftserverlessWorkgroup#recovery_point_id}

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

A list of security group IDs to associate with the workgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshiftserverless_workgroup#security_group_ids RedshiftserverlessWorkgroup#security_group_ids}

---

##### `snapshotArn`<sup>Optional</sup> <a name="snapshotArn" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.snapshotArn"></a>

```java
public java.lang.String getSnapshotArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the snapshot to restore the namespace from.

Specify either SnapshotArn or SnapshotName, but not both. When this resource is first created, the namespace is restored from this snapshot. On subsequent updates, a restore occurs only when SnapshotArn changes from its previous value. If the value is unchanged or removed, no restore takes place and existing data is preserved.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshiftserverless_workgroup#snapshot_arn RedshiftserverlessWorkgroup#snapshot_arn}

---

##### `snapshotName`<sup>Optional</sup> <a name="snapshotName" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.snapshotName"></a>

```java
public java.lang.String getSnapshotName();
```

- *Type:* java.lang.String

The name of the snapshot to restore the namespace from.

Because snapshot names are unique only within an account, also specify SnapshotOwnerAccount when restoring from a snapshot owned by a different account. Specify either SnapshotName or SnapshotArn, but not both. When this resource is first created, the namespace is restored from this snapshot. On subsequent updates, a restore occurs only when SnapshotName or SnapshotOwnerAccount changes from its previous value. If both values are unchanged or SnapshotName is removed, no restore takes place and existing data is preserved.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshiftserverless_workgroup#snapshot_name RedshiftserverlessWorkgroup#snapshot_name}

---

##### `snapshotOwnerAccount`<sup>Optional</sup> <a name="snapshotOwnerAccount" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.snapshotOwnerAccount"></a>

```java
public java.lang.String getSnapshotOwnerAccount();
```

- *Type:* java.lang.String

The AWS account ID that owns the snapshot.

Required when restoring from a snapshot shared by another account. Used in combination with SnapshotName. On updates, changing this value while SnapshotName is set triggers a restore from the newly referenced snapshot. If the value is unchanged, no restore takes place and existing data is preserved.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshiftserverless_workgroup#snapshot_owner_account RedshiftserverlessWorkgroup#snapshot_owner_account}

---

##### `subnetIds`<sup>Optional</sup> <a name="subnetIds" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

A list of subnet IDs the workgroup is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshiftserverless_workgroup#subnet_ids RedshiftserverlessWorkgroup#subnet_ids}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.tags"></a>

```java
public IResolvable|java.util.List<RedshiftserverlessWorkgroupTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTags">RedshiftserverlessWorkgroupTags</a>>

The map of the key-value pairs used to tag the workgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshiftserverless_workgroup#tags RedshiftserverlessWorkgroup#tags}

---

##### `trackName`<sup>Optional</sup> <a name="trackName" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.trackName"></a>

```java
public java.lang.String getTrackName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshiftserverless_workgroup#track_name RedshiftserverlessWorkgroup#track_name}.

---

##### `workgroup`<sup>Optional</sup> <a name="workgroup" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.workgroup"></a>

```java
public RedshiftserverlessWorkgroupWorkgroup getWorkgroup();
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroup">RedshiftserverlessWorkgroupWorkgroup</a>

Definition for workgroup resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshiftserverless_workgroup#workgroup RedshiftserverlessWorkgroup#workgroup}

---

### RedshiftserverlessWorkgroupConfigParameters <a name="RedshiftserverlessWorkgroupConfigParameters" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameters.Initializer"></a>

```java
import io.cdktn.providers.awscc.redshiftserverless_workgroup.RedshiftserverlessWorkgroupConfigParameters;

RedshiftserverlessWorkgroupConfigParameters.builder()
//  .parameterKey(java.lang.String)
//  .parameterValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameters.property.parameterKey">parameterKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshiftserverless_workgroup#parameter_key RedshiftserverlessWorkgroup#parameter_key}. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameters.property.parameterValue">parameterValue</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshiftserverless_workgroup#parameter_value RedshiftserverlessWorkgroup#parameter_value}. |

---

##### `parameterKey`<sup>Optional</sup> <a name="parameterKey" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameters.property.parameterKey"></a>

```java
public java.lang.String getParameterKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshiftserverless_workgroup#parameter_key RedshiftserverlessWorkgroup#parameter_key}.

---

##### `parameterValue`<sup>Optional</sup> <a name="parameterValue" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameters.property.parameterValue"></a>

```java
public java.lang.String getParameterValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshiftserverless_workgroup#parameter_value RedshiftserverlessWorkgroup#parameter_value}.

---

### RedshiftserverlessWorkgroupPricePerformanceTarget <a name="RedshiftserverlessWorkgroupPricePerformanceTarget" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTarget.Initializer"></a>

```java
import io.cdktn.providers.awscc.redshiftserverless_workgroup.RedshiftserverlessWorkgroupPricePerformanceTarget;

RedshiftserverlessWorkgroupPricePerformanceTarget.builder()
//  .level(java.lang.Number)
//  .status(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTarget.property.level">level</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshiftserverless_workgroup#level RedshiftserverlessWorkgroup#level}. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTarget.property.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshiftserverless_workgroup#status RedshiftserverlessWorkgroup#status}. |

---

##### `level`<sup>Optional</sup> <a name="level" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTarget.property.level"></a>

```java
public java.lang.Number getLevel();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshiftserverless_workgroup#level RedshiftserverlessWorkgroup#level}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTarget.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshiftserverless_workgroup#status RedshiftserverlessWorkgroup#status}.

---

### RedshiftserverlessWorkgroupTags <a name="RedshiftserverlessWorkgroupTags" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.redshiftserverless_workgroup.RedshiftserverlessWorkgroupTags;

RedshiftserverlessWorkgroupTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshiftserverless_workgroup#key RedshiftserverlessWorkgroup#key}. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshiftserverless_workgroup#value RedshiftserverlessWorkgroup#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshiftserverless_workgroup#key RedshiftserverlessWorkgroup#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshiftserverless_workgroup#value RedshiftserverlessWorkgroup#value}.

---

### RedshiftserverlessWorkgroupWorkgroup <a name="RedshiftserverlessWorkgroupWorkgroup" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroup"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroup.Initializer"></a>

```java
import io.cdktn.providers.awscc.redshiftserverless_workgroup.RedshiftserverlessWorkgroupWorkgroup;

RedshiftserverlessWorkgroupWorkgroup.builder()
//  .endpoint(RedshiftserverlessWorkgroupWorkgroupEndpoint)
//  .pricePerformanceTarget(RedshiftserverlessWorkgroupWorkgroupPricePerformanceTarget)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroup.property.endpoint">endpoint</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpoint">RedshiftserverlessWorkgroupWorkgroupEndpoint</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshiftserverless_workgroup#endpoint RedshiftserverlessWorkgroup#endpoint}. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroup.property.pricePerformanceTarget">pricePerformanceTarget</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTarget">RedshiftserverlessWorkgroupWorkgroupPricePerformanceTarget</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshiftserverless_workgroup#price_performance_target RedshiftserverlessWorkgroup#price_performance_target}. |

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroup.property.endpoint"></a>

```java
public RedshiftserverlessWorkgroupWorkgroupEndpoint getEndpoint();
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpoint">RedshiftserverlessWorkgroupWorkgroupEndpoint</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshiftserverless_workgroup#endpoint RedshiftserverlessWorkgroup#endpoint}.

---

##### `pricePerformanceTarget`<sup>Optional</sup> <a name="pricePerformanceTarget" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroup.property.pricePerformanceTarget"></a>

```java
public RedshiftserverlessWorkgroupWorkgroupPricePerformanceTarget getPricePerformanceTarget();
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTarget">RedshiftserverlessWorkgroupWorkgroupPricePerformanceTarget</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshiftserverless_workgroup#price_performance_target RedshiftserverlessWorkgroup#price_performance_target}.

---

### RedshiftserverlessWorkgroupWorkgroupConfigParameters <a name="RedshiftserverlessWorkgroupWorkgroupConfigParameters" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParameters.Initializer"></a>

```java
import io.cdktn.providers.awscc.redshiftserverless_workgroup.RedshiftserverlessWorkgroupWorkgroupConfigParameters;

RedshiftserverlessWorkgroupWorkgroupConfigParameters.builder()
    .build();
```


### RedshiftserverlessWorkgroupWorkgroupEndpoint <a name="RedshiftserverlessWorkgroupWorkgroupEndpoint" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpoint.Initializer"></a>

```java
import io.cdktn.providers.awscc.redshiftserverless_workgroup.RedshiftserverlessWorkgroupWorkgroupEndpoint;

RedshiftserverlessWorkgroupWorkgroupEndpoint.builder()
//  .vpcEndpoints(IResolvable|java.util.List<RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpoints>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpoint.property.vpcEndpoints">vpcEndpoints</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpoints">RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpoints</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshiftserverless_workgroup#vpc_endpoints RedshiftserverlessWorkgroup#vpc_endpoints}. |

---

##### `vpcEndpoints`<sup>Optional</sup> <a name="vpcEndpoints" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpoint.property.vpcEndpoints"></a>

```java
public IResolvable|java.util.List<RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpoints> getVpcEndpoints();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpoints">RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpoints</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshiftserverless_workgroup#vpc_endpoints RedshiftserverlessWorkgroup#vpc_endpoints}.

---

### RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpoints <a name="RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpoints" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpoints.Initializer"></a>

```java
import io.cdktn.providers.awscc.redshiftserverless_workgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpoints;

RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpoints.builder()
//  .networkInterfaces(IResolvable|java.util.List<RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces>)
//  .vpcEndpointId(java.lang.String)
//  .vpcId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpoints.property.networkInterfaces">networkInterfaces</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces">RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshiftserverless_workgroup#network_interfaces RedshiftserverlessWorkgroup#network_interfaces}. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpoints.property.vpcEndpointId">vpcEndpointId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshiftserverless_workgroup#vpc_endpoint_id RedshiftserverlessWorkgroup#vpc_endpoint_id}. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpoints.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshiftserverless_workgroup#vpc_id RedshiftserverlessWorkgroup#vpc_id}. |

---

##### `networkInterfaces`<sup>Optional</sup> <a name="networkInterfaces" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpoints.property.networkInterfaces"></a>

```java
public IResolvable|java.util.List<RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces> getNetworkInterfaces();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces">RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshiftserverless_workgroup#network_interfaces RedshiftserverlessWorkgroup#network_interfaces}.

---

##### `vpcEndpointId`<sup>Optional</sup> <a name="vpcEndpointId" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpoints.property.vpcEndpointId"></a>

```java
public java.lang.String getVpcEndpointId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshiftserverless_workgroup#vpc_endpoint_id RedshiftserverlessWorkgroup#vpc_endpoint_id}.

---

##### `vpcId`<sup>Optional</sup> <a name="vpcId" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpoints.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshiftserverless_workgroup#vpc_id RedshiftserverlessWorkgroup#vpc_id}.

---

### RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces <a name="RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces.Initializer"></a>

```java
import io.cdktn.providers.awscc.redshiftserverless_workgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces;

RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces.builder()
//  .availabilityZone(java.lang.String)
//  .networkInterfaceId(java.lang.String)
//  .privateIpAddress(java.lang.String)
//  .subnetId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshiftserverless_workgroup#availability_zone RedshiftserverlessWorkgroup#availability_zone}. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces.property.networkInterfaceId">networkInterfaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshiftserverless_workgroup#network_interface_id RedshiftserverlessWorkgroup#network_interface_id}. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces.property.privateIpAddress">privateIpAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshiftserverless_workgroup#private_ip_address RedshiftserverlessWorkgroup#private_ip_address}. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshiftserverless_workgroup#subnet_id RedshiftserverlessWorkgroup#subnet_id}. |

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshiftserverless_workgroup#availability_zone RedshiftserverlessWorkgroup#availability_zone}.

---

##### `networkInterfaceId`<sup>Optional</sup> <a name="networkInterfaceId" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces.property.networkInterfaceId"></a>

```java
public java.lang.String getNetworkInterfaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshiftserverless_workgroup#network_interface_id RedshiftserverlessWorkgroup#network_interface_id}.

---

##### `privateIpAddress`<sup>Optional</sup> <a name="privateIpAddress" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces.property.privateIpAddress"></a>

```java
public java.lang.String getPrivateIpAddress();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshiftserverless_workgroup#private_ip_address RedshiftserverlessWorkgroup#private_ip_address}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshiftserverless_workgroup#subnet_id RedshiftserverlessWorkgroup#subnet_id}.

---

### RedshiftserverlessWorkgroupWorkgroupPricePerformanceTarget <a name="RedshiftserverlessWorkgroupWorkgroupPricePerformanceTarget" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTarget.Initializer"></a>

```java
import io.cdktn.providers.awscc.redshiftserverless_workgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTarget;

RedshiftserverlessWorkgroupWorkgroupPricePerformanceTarget.builder()
//  .level(java.lang.Number)
//  .status(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTarget.property.level">level</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshiftserverless_workgroup#level RedshiftserverlessWorkgroup#level}. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTarget.property.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshiftserverless_workgroup#status RedshiftserverlessWorkgroup#status}. |

---

##### `level`<sup>Optional</sup> <a name="level" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTarget.property.level"></a>

```java
public java.lang.Number getLevel();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshiftserverless_workgroup#level RedshiftserverlessWorkgroup#level}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTarget.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshiftserverless_workgroup#status RedshiftserverlessWorkgroup#status}.

---

## Classes <a name="Classes" id="Classes"></a>

### RedshiftserverlessWorkgroupConfigParametersList <a name="RedshiftserverlessWorkgroupConfigParametersList" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersList.Initializer"></a>

```java
import io.cdktn.providers.awscc.redshiftserverless_workgroup.RedshiftserverlessWorkgroupConfigParametersList;

new RedshiftserverlessWorkgroupConfigParametersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersList.get"></a>

```java
public RedshiftserverlessWorkgroupConfigParametersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameters">RedshiftserverlessWorkgroupConfigParameters</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<RedshiftserverlessWorkgroupConfigParameters> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameters">RedshiftserverlessWorkgroupConfigParameters</a>>

---


### RedshiftserverlessWorkgroupConfigParametersOutputReference <a name="RedshiftserverlessWorkgroupConfigParametersOutputReference" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.redshiftserverless_workgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference;

new RedshiftserverlessWorkgroupConfigParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.resetParameterKey">resetParameterKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.resetParameterValue">resetParameterValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetParameterKey` <a name="resetParameterKey" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.resetParameterKey"></a>

```java
public void resetParameterKey()
```

##### `resetParameterValue` <a name="resetParameterValue" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.resetParameterValue"></a>

```java
public void resetParameterValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.property.parameterKeyInput">parameterKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.property.parameterValueInput">parameterValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.property.parameterKey">parameterKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.property.parameterValue">parameterValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameters">RedshiftserverlessWorkgroupConfigParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `parameterKeyInput`<sup>Optional</sup> <a name="parameterKeyInput" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.property.parameterKeyInput"></a>

```java
public java.lang.String getParameterKeyInput();
```

- *Type:* java.lang.String

---

##### `parameterValueInput`<sup>Optional</sup> <a name="parameterValueInput" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.property.parameterValueInput"></a>

```java
public java.lang.String getParameterValueInput();
```

- *Type:* java.lang.String

---

##### `parameterKey`<sup>Required</sup> <a name="parameterKey" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.property.parameterKey"></a>

```java
public java.lang.String getParameterKey();
```

- *Type:* java.lang.String

---

##### `parameterValue`<sup>Required</sup> <a name="parameterValue" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.property.parameterValue"></a>

```java
public java.lang.String getParameterValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.property.internalValue"></a>

```java
public IResolvable|RedshiftserverlessWorkgroupConfigParameters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameters">RedshiftserverlessWorkgroupConfigParameters</a>

---


### RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference <a name="RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.redshiftserverless_workgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference;

new RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.resetLevel">resetLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLevel` <a name="resetLevel" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.resetLevel"></a>

```java
public void resetLevel()
```

##### `resetStatus` <a name="resetStatus" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.resetStatus"></a>

```java
public void resetStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.property.levelInput">levelInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.property.level">level</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTarget">RedshiftserverlessWorkgroupPricePerformanceTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `levelInput`<sup>Optional</sup> <a name="levelInput" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.property.levelInput"></a>

```java
public java.lang.Number getLevelInput();
```

- *Type:* java.lang.Number

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.property.level"></a>

```java
public java.lang.Number getLevel();
```

- *Type:* java.lang.Number

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.property.internalValue"></a>

```java
public IResolvable|RedshiftserverlessWorkgroupPricePerformanceTarget getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTarget">RedshiftserverlessWorkgroupPricePerformanceTarget</a>

---


### RedshiftserverlessWorkgroupTagsList <a name="RedshiftserverlessWorkgroupTagsList" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.redshiftserverless_workgroup.RedshiftserverlessWorkgroupTagsList;

new RedshiftserverlessWorkgroupTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsList.get"></a>

```java
public RedshiftserverlessWorkgroupTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTags">RedshiftserverlessWorkgroupTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<RedshiftserverlessWorkgroupTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTags">RedshiftserverlessWorkgroupTags</a>>

---


### RedshiftserverlessWorkgroupTagsOutputReference <a name="RedshiftserverlessWorkgroupTagsOutputReference" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.redshiftserverless_workgroup.RedshiftserverlessWorkgroupTagsOutputReference;

new RedshiftserverlessWorkgroupTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTags">RedshiftserverlessWorkgroupTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|RedshiftserverlessWorkgroupTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTags">RedshiftserverlessWorkgroupTags</a>

---


### RedshiftserverlessWorkgroupWorkgroupConfigParametersList <a name="RedshiftserverlessWorkgroupWorkgroupConfigParametersList" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersList.Initializer"></a>

```java
import io.cdktn.providers.awscc.redshiftserverless_workgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersList;

new RedshiftserverlessWorkgroupWorkgroupConfigParametersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersList.get"></a>

```java
public RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference <a name="RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.redshiftserverless_workgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference;

new RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.property.parameterKey">parameterKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.property.parameterValue">parameterValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParameters">RedshiftserverlessWorkgroupWorkgroupConfigParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `parameterKey`<sup>Required</sup> <a name="parameterKey" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.property.parameterKey"></a>

```java
public java.lang.String getParameterKey();
```

- *Type:* java.lang.String

---

##### `parameterValue`<sup>Required</sup> <a name="parameterValue" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.property.parameterValue"></a>

```java
public java.lang.String getParameterValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.property.internalValue"></a>

```java
public RedshiftserverlessWorkgroupWorkgroupConfigParameters getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParameters">RedshiftserverlessWorkgroupWorkgroupConfigParameters</a>

---


### RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference <a name="RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.redshiftserverless_workgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference;

new RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.putVpcEndpoints">putVpcEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.resetVpcEndpoints">resetVpcEndpoints</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putVpcEndpoints` <a name="putVpcEndpoints" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.putVpcEndpoints"></a>

```java
public void putVpcEndpoints(IResolvable|java.util.List<RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpoints> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.putVpcEndpoints.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpoints">RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpoints</a>>

---

##### `resetVpcEndpoints` <a name="resetVpcEndpoints" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.resetVpcEndpoints"></a>

```java
public void resetVpcEndpoints()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.property.address">address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.property.vpcEndpoints">vpcEndpoints</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList">RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.property.vpcEndpointsInput">vpcEndpointsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpoints">RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpoints</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpoint">RedshiftserverlessWorkgroupWorkgroupEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `vpcEndpoints`<sup>Required</sup> <a name="vpcEndpoints" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.property.vpcEndpoints"></a>

```java
public RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList getVpcEndpoints();
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList">RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList</a>

---

##### `vpcEndpointsInput`<sup>Optional</sup> <a name="vpcEndpointsInput" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.property.vpcEndpointsInput"></a>

```java
public IResolvable|java.util.List<RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpoints> getVpcEndpointsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpoints">RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpoints</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.property.internalValue"></a>

```java
public IResolvable|RedshiftserverlessWorkgroupWorkgroupEndpoint getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpoint">RedshiftserverlessWorkgroupWorkgroupEndpoint</a>

---


### RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList <a name="RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.redshiftserverless_workgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList;

new RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.get"></a>

```java
public RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpoints">RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpoints</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpoints> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpoints">RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpoints</a>>

---


### RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList <a name="RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.redshiftserverless_workgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList;

new RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.get"></a>

```java
public RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces">RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces">RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces</a>>

---


### RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference <a name="RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.redshiftserverless_workgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference;

new RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.resetAvailabilityZone">resetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.resetNetworkInterfaceId">resetNetworkInterfaceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.resetPrivateIpAddress">resetPrivateIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.resetSubnetId">resetSubnetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAvailabilityZone` <a name="resetAvailabilityZone" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.resetAvailabilityZone"></a>

```java
public void resetAvailabilityZone()
```

##### `resetNetworkInterfaceId` <a name="resetNetworkInterfaceId" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.resetNetworkInterfaceId"></a>

```java
public void resetNetworkInterfaceId()
```

##### `resetPrivateIpAddress` <a name="resetPrivateIpAddress" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.resetPrivateIpAddress"></a>

```java
public void resetPrivateIpAddress()
```

##### `resetSubnetId` <a name="resetSubnetId" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.resetSubnetId"></a>

```java
public void resetSubnetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.property.availabilityZoneInput">availabilityZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.property.networkInterfaceIdInput">networkInterfaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.property.privateIpAddressInput">privateIpAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.property.networkInterfaceId">networkInterfaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.property.privateIpAddress">privateIpAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces">RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `availabilityZoneInput`<sup>Optional</sup> <a name="availabilityZoneInput" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.property.availabilityZoneInput"></a>

```java
public java.lang.String getAvailabilityZoneInput();
```

- *Type:* java.lang.String

---

##### `networkInterfaceIdInput`<sup>Optional</sup> <a name="networkInterfaceIdInput" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.property.networkInterfaceIdInput"></a>

```java
public java.lang.String getNetworkInterfaceIdInput();
```

- *Type:* java.lang.String

---

##### `privateIpAddressInput`<sup>Optional</sup> <a name="privateIpAddressInput" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.property.privateIpAddressInput"></a>

```java
public java.lang.String getPrivateIpAddressInput();
```

- *Type:* java.lang.String

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

---

##### `networkInterfaceId`<sup>Required</sup> <a name="networkInterfaceId" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.property.networkInterfaceId"></a>

```java
public java.lang.String getNetworkInterfaceId();
```

- *Type:* java.lang.String

---

##### `privateIpAddress`<sup>Required</sup> <a name="privateIpAddress" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.property.privateIpAddress"></a>

```java
public java.lang.String getPrivateIpAddress();
```

- *Type:* java.lang.String

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.property.internalValue"></a>

```java
public IResolvable|RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces">RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces</a>

---


### RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference <a name="RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.redshiftserverless_workgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference;

new RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.putNetworkInterfaces">putNetworkInterfaces</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.resetNetworkInterfaces">resetNetworkInterfaces</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.resetVpcEndpointId">resetVpcEndpointId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.resetVpcId">resetVpcId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNetworkInterfaces` <a name="putNetworkInterfaces" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.putNetworkInterfaces"></a>

```java
public void putNetworkInterfaces(IResolvable|java.util.List<RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.putNetworkInterfaces.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces">RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces</a>>

---

##### `resetNetworkInterfaces` <a name="resetNetworkInterfaces" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.resetNetworkInterfaces"></a>

```java
public void resetNetworkInterfaces()
```

##### `resetVpcEndpointId` <a name="resetVpcEndpointId" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.resetVpcEndpointId"></a>

```java
public void resetVpcEndpointId()
```

##### `resetVpcId` <a name="resetVpcId" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.resetVpcId"></a>

```java
public void resetVpcId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.property.networkInterfaces">networkInterfaces</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList">RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.property.networkInterfacesInput">networkInterfacesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces">RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.property.vpcEndpointIdInput">vpcEndpointIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.property.vpcIdInput">vpcIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.property.vpcEndpointId">vpcEndpointId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpoints">RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `networkInterfaces`<sup>Required</sup> <a name="networkInterfaces" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.property.networkInterfaces"></a>

```java
public RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList getNetworkInterfaces();
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList">RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList</a>

---

##### `networkInterfacesInput`<sup>Optional</sup> <a name="networkInterfacesInput" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.property.networkInterfacesInput"></a>

```java
public IResolvable|java.util.List<RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces> getNetworkInterfacesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces">RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces</a>>

---

##### `vpcEndpointIdInput`<sup>Optional</sup> <a name="vpcEndpointIdInput" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.property.vpcEndpointIdInput"></a>

```java
public java.lang.String getVpcEndpointIdInput();
```

- *Type:* java.lang.String

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.property.vpcIdInput"></a>

```java
public java.lang.String getVpcIdInput();
```

- *Type:* java.lang.String

---

##### `vpcEndpointId`<sup>Required</sup> <a name="vpcEndpointId" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.property.vpcEndpointId"></a>

```java
public java.lang.String getVpcEndpointId();
```

- *Type:* java.lang.String

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.property.internalValue"></a>

```java
public IResolvable|RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpoints getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpoints">RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpoints</a>

---


### RedshiftserverlessWorkgroupWorkgroupOutputReference <a name="RedshiftserverlessWorkgroupWorkgroupOutputReference" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.redshiftserverless_workgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference;

new RedshiftserverlessWorkgroupWorkgroupOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.putEndpoint">putEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.putPricePerformanceTarget">putPricePerformanceTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.resetEndpoint">resetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.resetPricePerformanceTarget">resetPricePerformanceTarget</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEndpoint` <a name="putEndpoint" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.putEndpoint"></a>

```java
public void putEndpoint(RedshiftserverlessWorkgroupWorkgroupEndpoint value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.putEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpoint">RedshiftserverlessWorkgroupWorkgroupEndpoint</a>

---

##### `putPricePerformanceTarget` <a name="putPricePerformanceTarget" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.putPricePerformanceTarget"></a>

```java
public void putPricePerformanceTarget(RedshiftserverlessWorkgroupWorkgroupPricePerformanceTarget value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.putPricePerformanceTarget.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTarget">RedshiftserverlessWorkgroupWorkgroupPricePerformanceTarget</a>

---

##### `resetEndpoint` <a name="resetEndpoint" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.resetEndpoint"></a>

```java
public void resetEndpoint()
```

##### `resetPricePerformanceTarget` <a name="resetPricePerformanceTarget" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.resetPricePerformanceTarget"></a>

```java
public void resetPricePerformanceTarget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.baseCapacity">baseCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.configParameters">configParameters</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersList">RedshiftserverlessWorkgroupWorkgroupConfigParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.creationDate">creationDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.endpoint">endpoint</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference">RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.enhancedVpcRouting">enhancedVpcRouting</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.maxCapacity">maxCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.namespaceName">namespaceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.pricePerformanceTarget">pricePerformanceTarget</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference">RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.publiclyAccessible">publiclyAccessible</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.trackName">trackName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.workgroupArn">workgroupArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.workgroupId">workgroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.workgroupName">workgroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.endpointInput">endpointInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpoint">RedshiftserverlessWorkgroupWorkgroupEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.pricePerformanceTargetInput">pricePerformanceTargetInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTarget">RedshiftserverlessWorkgroupWorkgroupPricePerformanceTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroup">RedshiftserverlessWorkgroupWorkgroup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `baseCapacity`<sup>Required</sup> <a name="baseCapacity" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.baseCapacity"></a>

```java
public java.lang.Number getBaseCapacity();
```

- *Type:* java.lang.Number

---

##### `configParameters`<sup>Required</sup> <a name="configParameters" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.configParameters"></a>

```java
public RedshiftserverlessWorkgroupWorkgroupConfigParametersList getConfigParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersList">RedshiftserverlessWorkgroupWorkgroupConfigParametersList</a>

---

##### `creationDate`<sup>Required</sup> <a name="creationDate" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.creationDate"></a>

```java
public java.lang.String getCreationDate();
```

- *Type:* java.lang.String

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.endpoint"></a>

```java
public RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference getEndpoint();
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference">RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference</a>

---

##### `enhancedVpcRouting`<sup>Required</sup> <a name="enhancedVpcRouting" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.enhancedVpcRouting"></a>

```java
public IResolvable getEnhancedVpcRouting();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `maxCapacity`<sup>Required</sup> <a name="maxCapacity" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.maxCapacity"></a>

```java
public java.lang.Number getMaxCapacity();
```

- *Type:* java.lang.Number

---

##### `namespaceName`<sup>Required</sup> <a name="namespaceName" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.namespaceName"></a>

```java
public java.lang.String getNamespaceName();
```

- *Type:* java.lang.String

---

##### `pricePerformanceTarget`<sup>Required</sup> <a name="pricePerformanceTarget" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.pricePerformanceTarget"></a>

```java
public RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference getPricePerformanceTarget();
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference">RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference</a>

---

##### `publiclyAccessible`<sup>Required</sup> <a name="publiclyAccessible" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.publiclyAccessible"></a>

```java
public IResolvable getPubliclyAccessible();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `trackName`<sup>Required</sup> <a name="trackName" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.trackName"></a>

```java
public java.lang.String getTrackName();
```

- *Type:* java.lang.String

---

##### `workgroupArn`<sup>Required</sup> <a name="workgroupArn" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.workgroupArn"></a>

```java
public java.lang.String getWorkgroupArn();
```

- *Type:* java.lang.String

---

##### `workgroupId`<sup>Required</sup> <a name="workgroupId" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.workgroupId"></a>

```java
public java.lang.String getWorkgroupId();
```

- *Type:* java.lang.String

---

##### `workgroupName`<sup>Required</sup> <a name="workgroupName" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.workgroupName"></a>

```java
public java.lang.String getWorkgroupName();
```

- *Type:* java.lang.String

---

##### `endpointInput`<sup>Optional</sup> <a name="endpointInput" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.endpointInput"></a>

```java
public IResolvable|RedshiftserverlessWorkgroupWorkgroupEndpoint getEndpointInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpoint">RedshiftserverlessWorkgroupWorkgroupEndpoint</a>

---

##### `pricePerformanceTargetInput`<sup>Optional</sup> <a name="pricePerformanceTargetInput" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.pricePerformanceTargetInput"></a>

```java
public IResolvable|RedshiftserverlessWorkgroupWorkgroupPricePerformanceTarget getPricePerformanceTargetInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTarget">RedshiftserverlessWorkgroupWorkgroupPricePerformanceTarget</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.internalValue"></a>

```java
public IResolvable|RedshiftserverlessWorkgroupWorkgroup getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroup">RedshiftserverlessWorkgroupWorkgroup</a>

---


### RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference <a name="RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.redshiftserverless_workgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference;

new RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.resetLevel">resetLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLevel` <a name="resetLevel" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.resetLevel"></a>

```java
public void resetLevel()
```

##### `resetStatus` <a name="resetStatus" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.resetStatus"></a>

```java
public void resetStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.property.levelInput">levelInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.property.level">level</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTarget">RedshiftserverlessWorkgroupWorkgroupPricePerformanceTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `levelInput`<sup>Optional</sup> <a name="levelInput" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.property.levelInput"></a>

```java
public java.lang.Number getLevelInput();
```

- *Type:* java.lang.Number

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.property.level"></a>

```java
public java.lang.Number getLevel();
```

- *Type:* java.lang.Number

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.property.internalValue"></a>

```java
public IResolvable|RedshiftserverlessWorkgroupWorkgroupPricePerformanceTarget getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTarget">RedshiftserverlessWorkgroupWorkgroupPricePerformanceTarget</a>

---



