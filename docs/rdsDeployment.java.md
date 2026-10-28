# `rdsDeployment` Submodule <a name="`rdsDeployment` Submodule" id="@cdktn/provider-awscc.rdsDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RdsDeployment <a name="RdsDeployment" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/rds_deployment awscc_rds_deployment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.Initializer"></a>

```java
import io.cdktn.providers.awscc.rds_deployment.RdsDeployment;

RdsDeployment.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .blueGreenDeploymentName(java.lang.String)
    .source(java.lang.String)
//  .tags(IResolvable|java.util.List<RdsDeploymentTags>)
//  .targetAllocatedStorage(java.lang.Number)
//  .targetDbClusterParameterGroupName(java.lang.String)
//  .targetDbInstanceClass(java.lang.String)
//  .targetDbParameterGroupName(java.lang.String)
//  .targetEngineVersion(java.lang.String)
//  .targetIops(java.lang.Number)
//  .targetStorageThroughput(java.lang.Number)
//  .targetStorageType(java.lang.String)
//  .upgradeTargetStorageConfig(java.lang.Boolean|IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.Initializer.parameter.blueGreenDeploymentName">blueGreenDeploymentName</a></code> | <code>java.lang.String</code> | The name of the Blue/Green Deployment. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.Initializer.parameter.source">source</a></code> | <code>java.lang.String</code> | The ARN of the source production database. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTags">RdsDeploymentTags</a>></code> | The tags assigned to the Blue/Green Deployment. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.Initializer.parameter.targetAllocatedStorage">targetAllocatedStorage</a></code> | <code>java.lang.Number</code> | The allocated storage size in GiB for the target DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.Initializer.parameter.targetDbClusterParameterGroupName">targetDbClusterParameterGroupName</a></code> | <code>java.lang.String</code> | The DB cluster parameter group for the target Aurora DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.Initializer.parameter.targetDbInstanceClass">targetDbInstanceClass</a></code> | <code>java.lang.String</code> | The DB instance class for target RDS DB instances. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.Initializer.parameter.targetDbParameterGroupName">targetDbParameterGroupName</a></code> | <code>java.lang.String</code> | The DB parameter group for the target DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.Initializer.parameter.targetEngineVersion">targetEngineVersion</a></code> | <code>java.lang.String</code> | The DB engine version for the target database. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.Initializer.parameter.targetIops">targetIops</a></code> | <code>java.lang.Number</code> | The Provisioned IOPS value for the target DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.Initializer.parameter.targetStorageThroughput">targetStorageThroughput</a></code> | <code>java.lang.Number</code> | The storage throughput value for the target DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.Initializer.parameter.targetStorageType">targetStorageType</a></code> | <code>java.lang.String</code> | The storage type for the target DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.Initializer.parameter.upgradeTargetStorageConfig">upgradeTargetStorageConfig</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to upgrade the storage file system configuration on the target database. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `blueGreenDeploymentName`<sup>Required</sup> <a name="blueGreenDeploymentName" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.Initializer.parameter.blueGreenDeploymentName"></a>

- *Type:* java.lang.String

The name of the Blue/Green Deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/rds_deployment#blue_green_deployment_name RdsDeployment#blue_green_deployment_name}

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.Initializer.parameter.source"></a>

- *Type:* java.lang.String

The ARN of the source production database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/rds_deployment#source RdsDeployment#source}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTags">RdsDeploymentTags</a>>

The tags assigned to the Blue/Green Deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/rds_deployment#tags RdsDeployment#tags}

---

##### `targetAllocatedStorage`<sup>Optional</sup> <a name="targetAllocatedStorage" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.Initializer.parameter.targetAllocatedStorage"></a>

- *Type:* java.lang.Number

The allocated storage size in GiB for the target DB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/rds_deployment#target_allocated_storage RdsDeployment#target_allocated_storage}

---

##### `targetDbClusterParameterGroupName`<sup>Optional</sup> <a name="targetDbClusterParameterGroupName" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.Initializer.parameter.targetDbClusterParameterGroupName"></a>

- *Type:* java.lang.String

The DB cluster parameter group for the target Aurora DB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/rds_deployment#target_db_cluster_parameter_group_name RdsDeployment#target_db_cluster_parameter_group_name}

---

##### `targetDbInstanceClass`<sup>Optional</sup> <a name="targetDbInstanceClass" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.Initializer.parameter.targetDbInstanceClass"></a>

- *Type:* java.lang.String

The DB instance class for target RDS DB instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/rds_deployment#target_db_instance_class RdsDeployment#target_db_instance_class}

---

##### `targetDbParameterGroupName`<sup>Optional</sup> <a name="targetDbParameterGroupName" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.Initializer.parameter.targetDbParameterGroupName"></a>

- *Type:* java.lang.String

The DB parameter group for the target DB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/rds_deployment#target_db_parameter_group_name RdsDeployment#target_db_parameter_group_name}

---

##### `targetEngineVersion`<sup>Optional</sup> <a name="targetEngineVersion" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.Initializer.parameter.targetEngineVersion"></a>

- *Type:* java.lang.String

The DB engine version for the target database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/rds_deployment#target_engine_version RdsDeployment#target_engine_version}

---

##### `targetIops`<sup>Optional</sup> <a name="targetIops" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.Initializer.parameter.targetIops"></a>

- *Type:* java.lang.Number

The Provisioned IOPS value for the target DB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/rds_deployment#target_iops RdsDeployment#target_iops}

---

##### `targetStorageThroughput`<sup>Optional</sup> <a name="targetStorageThroughput" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.Initializer.parameter.targetStorageThroughput"></a>

- *Type:* java.lang.Number

The storage throughput value for the target DB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/rds_deployment#target_storage_throughput RdsDeployment#target_storage_throughput}

---

##### `targetStorageType`<sup>Optional</sup> <a name="targetStorageType" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.Initializer.parameter.targetStorageType"></a>

- *Type:* java.lang.String

The storage type for the target DB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/rds_deployment#target_storage_type RdsDeployment#target_storage_type}

---

##### `upgradeTargetStorageConfig`<sup>Optional</sup> <a name="upgradeTargetStorageConfig" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.Initializer.parameter.upgradeTargetStorageConfig"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to upgrade the storage file system configuration on the target database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/rds_deployment#upgrade_target_storage_config RdsDeployment#upgrade_target_storage_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.resetTargetAllocatedStorage">resetTargetAllocatedStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.resetTargetDbClusterParameterGroupName">resetTargetDbClusterParameterGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.resetTargetDbInstanceClass">resetTargetDbInstanceClass</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.resetTargetDbParameterGroupName">resetTargetDbParameterGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.resetTargetEngineVersion">resetTargetEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.resetTargetIops">resetTargetIops</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.resetTargetStorageThroughput">resetTargetStorageThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.resetTargetStorageType">resetTargetStorageType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.resetUpgradeTargetStorageConfig">resetUpgradeTargetStorageConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<RdsDeploymentTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTags">RdsDeploymentTags</a>>

---

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.resetTags"></a>

```java
public void resetTags()
```

##### `resetTargetAllocatedStorage` <a name="resetTargetAllocatedStorage" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.resetTargetAllocatedStorage"></a>

```java
public void resetTargetAllocatedStorage()
```

##### `resetTargetDbClusterParameterGroupName` <a name="resetTargetDbClusterParameterGroupName" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.resetTargetDbClusterParameterGroupName"></a>

```java
public void resetTargetDbClusterParameterGroupName()
```

##### `resetTargetDbInstanceClass` <a name="resetTargetDbInstanceClass" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.resetTargetDbInstanceClass"></a>

```java
public void resetTargetDbInstanceClass()
```

##### `resetTargetDbParameterGroupName` <a name="resetTargetDbParameterGroupName" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.resetTargetDbParameterGroupName"></a>

```java
public void resetTargetDbParameterGroupName()
```

##### `resetTargetEngineVersion` <a name="resetTargetEngineVersion" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.resetTargetEngineVersion"></a>

```java
public void resetTargetEngineVersion()
```

##### `resetTargetIops` <a name="resetTargetIops" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.resetTargetIops"></a>

```java
public void resetTargetIops()
```

##### `resetTargetStorageThroughput` <a name="resetTargetStorageThroughput" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.resetTargetStorageThroughput"></a>

```java
public void resetTargetStorageThroughput()
```

##### `resetTargetStorageType` <a name="resetTargetStorageType" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.resetTargetStorageType"></a>

```java
public void resetTargetStorageType()
```

##### `resetUpgradeTargetStorageConfig` <a name="resetUpgradeTargetStorageConfig" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.resetUpgradeTargetStorageConfig"></a>

```java
public void resetUpgradeTargetStorageConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a RdsDeployment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.isConstruct"></a>

```java
import io.cdktn.providers.awscc.rds_deployment.RdsDeployment;

RdsDeployment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.rds_deployment.RdsDeployment;

RdsDeployment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.rds_deployment.RdsDeployment;

RdsDeployment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.rds_deployment.RdsDeployment;

RdsDeployment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),RdsDeployment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a RdsDeployment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the RdsDeployment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing RdsDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/rds_deployment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the RdsDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.blueGreenDeploymentIdentifier">blueGreenDeploymentIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.switchoverDetails">switchoverDetails</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsList">RdsDeploymentSwitchoverDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsList">RdsDeploymentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.target">target</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.tasks">tasks</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksList">RdsDeploymentTasksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.blueGreenDeploymentNameInput">blueGreenDeploymentNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.sourceInput">sourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTags">RdsDeploymentTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.targetAllocatedStorageInput">targetAllocatedStorageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.targetDbClusterParameterGroupNameInput">targetDbClusterParameterGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.targetDbInstanceClassInput">targetDbInstanceClassInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.targetDbParameterGroupNameInput">targetDbParameterGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.targetEngineVersionInput">targetEngineVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.targetIopsInput">targetIopsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.targetStorageThroughputInput">targetStorageThroughputInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.targetStorageTypeInput">targetStorageTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.upgradeTargetStorageConfigInput">upgradeTargetStorageConfigInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.blueGreenDeploymentName">blueGreenDeploymentName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.source">source</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.targetAllocatedStorage">targetAllocatedStorage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.targetDbClusterParameterGroupName">targetDbClusterParameterGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.targetDbInstanceClass">targetDbInstanceClass</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.targetDbParameterGroupName">targetDbParameterGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.targetEngineVersion">targetEngineVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.targetIops">targetIops</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.targetStorageThroughput">targetStorageThroughput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.targetStorageType">targetStorageType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.upgradeTargetStorageConfig">upgradeTargetStorageConfig</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `blueGreenDeploymentIdentifier`<sup>Required</sup> <a name="blueGreenDeploymentIdentifier" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.blueGreenDeploymentIdentifier"></a>

```java
public java.lang.String getBlueGreenDeploymentIdentifier();
```

- *Type:* java.lang.String

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `switchoverDetails`<sup>Required</sup> <a name="switchoverDetails" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.switchoverDetails"></a>

```java
public RdsDeploymentSwitchoverDetailsList getSwitchoverDetails();
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsList">RdsDeploymentSwitchoverDetailsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.tags"></a>

```java
public RdsDeploymentTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsList">RdsDeploymentTagsList</a>

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.tasks"></a>

```java
public RdsDeploymentTasksList getTasks();
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksList">RdsDeploymentTasksList</a>

---

##### `blueGreenDeploymentNameInput`<sup>Optional</sup> <a name="blueGreenDeploymentNameInput" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.blueGreenDeploymentNameInput"></a>

```java
public java.lang.String getBlueGreenDeploymentNameInput();
```

- *Type:* java.lang.String

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.sourceInput"></a>

```java
public java.lang.String getSourceInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.tagsInput"></a>

```java
public IResolvable|java.util.List<RdsDeploymentTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTags">RdsDeploymentTags</a>>

---

##### `targetAllocatedStorageInput`<sup>Optional</sup> <a name="targetAllocatedStorageInput" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.targetAllocatedStorageInput"></a>

```java
public java.lang.Number getTargetAllocatedStorageInput();
```

- *Type:* java.lang.Number

---

##### `targetDbClusterParameterGroupNameInput`<sup>Optional</sup> <a name="targetDbClusterParameterGroupNameInput" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.targetDbClusterParameterGroupNameInput"></a>

```java
public java.lang.String getTargetDbClusterParameterGroupNameInput();
```

- *Type:* java.lang.String

---

##### `targetDbInstanceClassInput`<sup>Optional</sup> <a name="targetDbInstanceClassInput" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.targetDbInstanceClassInput"></a>

```java
public java.lang.String getTargetDbInstanceClassInput();
```

- *Type:* java.lang.String

---

##### `targetDbParameterGroupNameInput`<sup>Optional</sup> <a name="targetDbParameterGroupNameInput" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.targetDbParameterGroupNameInput"></a>

```java
public java.lang.String getTargetDbParameterGroupNameInput();
```

- *Type:* java.lang.String

---

##### `targetEngineVersionInput`<sup>Optional</sup> <a name="targetEngineVersionInput" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.targetEngineVersionInput"></a>

```java
public java.lang.String getTargetEngineVersionInput();
```

- *Type:* java.lang.String

---

##### `targetIopsInput`<sup>Optional</sup> <a name="targetIopsInput" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.targetIopsInput"></a>

```java
public java.lang.Number getTargetIopsInput();
```

- *Type:* java.lang.Number

---

##### `targetStorageThroughputInput`<sup>Optional</sup> <a name="targetStorageThroughputInput" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.targetStorageThroughputInput"></a>

```java
public java.lang.Number getTargetStorageThroughputInput();
```

- *Type:* java.lang.Number

---

##### `targetStorageTypeInput`<sup>Optional</sup> <a name="targetStorageTypeInput" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.targetStorageTypeInput"></a>

```java
public java.lang.String getTargetStorageTypeInput();
```

- *Type:* java.lang.String

---

##### `upgradeTargetStorageConfigInput`<sup>Optional</sup> <a name="upgradeTargetStorageConfigInput" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.upgradeTargetStorageConfigInput"></a>

```java
public java.lang.Boolean|IResolvable getUpgradeTargetStorageConfigInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `blueGreenDeploymentName`<sup>Required</sup> <a name="blueGreenDeploymentName" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.blueGreenDeploymentName"></a>

```java
public java.lang.String getBlueGreenDeploymentName();
```

- *Type:* java.lang.String

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

---

##### `targetAllocatedStorage`<sup>Required</sup> <a name="targetAllocatedStorage" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.targetAllocatedStorage"></a>

```java
public java.lang.Number getTargetAllocatedStorage();
```

- *Type:* java.lang.Number

---

##### `targetDbClusterParameterGroupName`<sup>Required</sup> <a name="targetDbClusterParameterGroupName" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.targetDbClusterParameterGroupName"></a>

```java
public java.lang.String getTargetDbClusterParameterGroupName();
```

- *Type:* java.lang.String

---

##### `targetDbInstanceClass`<sup>Required</sup> <a name="targetDbInstanceClass" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.targetDbInstanceClass"></a>

```java
public java.lang.String getTargetDbInstanceClass();
```

- *Type:* java.lang.String

---

##### `targetDbParameterGroupName`<sup>Required</sup> <a name="targetDbParameterGroupName" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.targetDbParameterGroupName"></a>

```java
public java.lang.String getTargetDbParameterGroupName();
```

- *Type:* java.lang.String

---

##### `targetEngineVersion`<sup>Required</sup> <a name="targetEngineVersion" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.targetEngineVersion"></a>

```java
public java.lang.String getTargetEngineVersion();
```

- *Type:* java.lang.String

---

##### `targetIops`<sup>Required</sup> <a name="targetIops" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.targetIops"></a>

```java
public java.lang.Number getTargetIops();
```

- *Type:* java.lang.Number

---

##### `targetStorageThroughput`<sup>Required</sup> <a name="targetStorageThroughput" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.targetStorageThroughput"></a>

```java
public java.lang.Number getTargetStorageThroughput();
```

- *Type:* java.lang.Number

---

##### `targetStorageType`<sup>Required</sup> <a name="targetStorageType" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.targetStorageType"></a>

```java
public java.lang.String getTargetStorageType();
```

- *Type:* java.lang.String

---

##### `upgradeTargetStorageConfig`<sup>Required</sup> <a name="upgradeTargetStorageConfig" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.upgradeTargetStorageConfig"></a>

```java
public java.lang.Boolean|IResolvable getUpgradeTargetStorageConfig();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.rdsDeployment.RdsDeployment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### RdsDeploymentConfig <a name="RdsDeploymentConfig" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.rds_deployment.RdsDeploymentConfig;

RdsDeploymentConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .blueGreenDeploymentName(java.lang.String)
    .source(java.lang.String)
//  .tags(IResolvable|java.util.List<RdsDeploymentTags>)
//  .targetAllocatedStorage(java.lang.Number)
//  .targetDbClusterParameterGroupName(java.lang.String)
//  .targetDbInstanceClass(java.lang.String)
//  .targetDbParameterGroupName(java.lang.String)
//  .targetEngineVersion(java.lang.String)
//  .targetIops(java.lang.Number)
//  .targetStorageThroughput(java.lang.Number)
//  .targetStorageType(java.lang.String)
//  .upgradeTargetStorageConfig(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.blueGreenDeploymentName">blueGreenDeploymentName</a></code> | <code>java.lang.String</code> | The name of the Blue/Green Deployment. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.source">source</a></code> | <code>java.lang.String</code> | The ARN of the source production database. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTags">RdsDeploymentTags</a>></code> | The tags assigned to the Blue/Green Deployment. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.targetAllocatedStorage">targetAllocatedStorage</a></code> | <code>java.lang.Number</code> | The allocated storage size in GiB for the target DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.targetDbClusterParameterGroupName">targetDbClusterParameterGroupName</a></code> | <code>java.lang.String</code> | The DB cluster parameter group for the target Aurora DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.targetDbInstanceClass">targetDbInstanceClass</a></code> | <code>java.lang.String</code> | The DB instance class for target RDS DB instances. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.targetDbParameterGroupName">targetDbParameterGroupName</a></code> | <code>java.lang.String</code> | The DB parameter group for the target DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.targetEngineVersion">targetEngineVersion</a></code> | <code>java.lang.String</code> | The DB engine version for the target database. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.targetIops">targetIops</a></code> | <code>java.lang.Number</code> | The Provisioned IOPS value for the target DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.targetStorageThroughput">targetStorageThroughput</a></code> | <code>java.lang.Number</code> | The storage throughput value for the target DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.targetStorageType">targetStorageType</a></code> | <code>java.lang.String</code> | The storage type for the target DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.upgradeTargetStorageConfig">upgradeTargetStorageConfig</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to upgrade the storage file system configuration on the target database. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `blueGreenDeploymentName`<sup>Required</sup> <a name="blueGreenDeploymentName" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.blueGreenDeploymentName"></a>

```java
public java.lang.String getBlueGreenDeploymentName();
```

- *Type:* java.lang.String

The name of the Blue/Green Deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/rds_deployment#blue_green_deployment_name RdsDeployment#blue_green_deployment_name}

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

The ARN of the source production database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/rds_deployment#source RdsDeployment#source}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.tags"></a>

```java
public IResolvable|java.util.List<RdsDeploymentTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTags">RdsDeploymentTags</a>>

The tags assigned to the Blue/Green Deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/rds_deployment#tags RdsDeployment#tags}

---

##### `targetAllocatedStorage`<sup>Optional</sup> <a name="targetAllocatedStorage" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.targetAllocatedStorage"></a>

```java
public java.lang.Number getTargetAllocatedStorage();
```

- *Type:* java.lang.Number

The allocated storage size in GiB for the target DB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/rds_deployment#target_allocated_storage RdsDeployment#target_allocated_storage}

---

##### `targetDbClusterParameterGroupName`<sup>Optional</sup> <a name="targetDbClusterParameterGroupName" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.targetDbClusterParameterGroupName"></a>

```java
public java.lang.String getTargetDbClusterParameterGroupName();
```

- *Type:* java.lang.String

The DB cluster parameter group for the target Aurora DB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/rds_deployment#target_db_cluster_parameter_group_name RdsDeployment#target_db_cluster_parameter_group_name}

---

##### `targetDbInstanceClass`<sup>Optional</sup> <a name="targetDbInstanceClass" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.targetDbInstanceClass"></a>

```java
public java.lang.String getTargetDbInstanceClass();
```

- *Type:* java.lang.String

The DB instance class for target RDS DB instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/rds_deployment#target_db_instance_class RdsDeployment#target_db_instance_class}

---

##### `targetDbParameterGroupName`<sup>Optional</sup> <a name="targetDbParameterGroupName" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.targetDbParameterGroupName"></a>

```java
public java.lang.String getTargetDbParameterGroupName();
```

- *Type:* java.lang.String

The DB parameter group for the target DB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/rds_deployment#target_db_parameter_group_name RdsDeployment#target_db_parameter_group_name}

---

##### `targetEngineVersion`<sup>Optional</sup> <a name="targetEngineVersion" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.targetEngineVersion"></a>

```java
public java.lang.String getTargetEngineVersion();
```

- *Type:* java.lang.String

The DB engine version for the target database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/rds_deployment#target_engine_version RdsDeployment#target_engine_version}

---

##### `targetIops`<sup>Optional</sup> <a name="targetIops" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.targetIops"></a>

```java
public java.lang.Number getTargetIops();
```

- *Type:* java.lang.Number

The Provisioned IOPS value for the target DB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/rds_deployment#target_iops RdsDeployment#target_iops}

---

##### `targetStorageThroughput`<sup>Optional</sup> <a name="targetStorageThroughput" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.targetStorageThroughput"></a>

```java
public java.lang.Number getTargetStorageThroughput();
```

- *Type:* java.lang.Number

The storage throughput value for the target DB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/rds_deployment#target_storage_throughput RdsDeployment#target_storage_throughput}

---

##### `targetStorageType`<sup>Optional</sup> <a name="targetStorageType" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.targetStorageType"></a>

```java
public java.lang.String getTargetStorageType();
```

- *Type:* java.lang.String

The storage type for the target DB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/rds_deployment#target_storage_type RdsDeployment#target_storage_type}

---

##### `upgradeTargetStorageConfig`<sup>Optional</sup> <a name="upgradeTargetStorageConfig" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentConfig.property.upgradeTargetStorageConfig"></a>

```java
public java.lang.Boolean|IResolvable getUpgradeTargetStorageConfig();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to upgrade the storage file system configuration on the target database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/rds_deployment#upgrade_target_storage_config RdsDeployment#upgrade_target_storage_config}

---

### RdsDeploymentSwitchoverDetails <a name="RdsDeploymentSwitchoverDetails" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetails.Initializer"></a>

```java
import io.cdktn.providers.awscc.rds_deployment.RdsDeploymentSwitchoverDetails;

RdsDeploymentSwitchoverDetails.builder()
    .build();
```


### RdsDeploymentTags <a name="RdsDeploymentTags" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.rds_deployment.RdsDeploymentTags;

RdsDeploymentTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTags.property.value">value</a></code> | <code>java.lang.String</code> | The value of the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/rds_deployment#key RdsDeployment#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/rds_deployment#value RdsDeployment#value}

---

### RdsDeploymentTasks <a name="RdsDeploymentTasks" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasks.Initializer"></a>

```java
import io.cdktn.providers.awscc.rds_deployment.RdsDeploymentTasks;

RdsDeploymentTasks.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### RdsDeploymentSwitchoverDetailsList <a name="RdsDeploymentSwitchoverDetailsList" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.rds_deployment.RdsDeploymentSwitchoverDetailsList;

new RdsDeploymentSwitchoverDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsList.get"></a>

```java
public RdsDeploymentSwitchoverDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### RdsDeploymentSwitchoverDetailsOutputReference <a name="RdsDeploymentSwitchoverDetailsOutputReference" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.rds_deployment.RdsDeploymentSwitchoverDetailsOutputReference;

new RdsDeploymentSwitchoverDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.property.sourceMember">sourceMember</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.property.switchoverDetailStatus">switchoverDetailStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.property.targetMember">targetMember</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetails">RdsDeploymentSwitchoverDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sourceMember`<sup>Required</sup> <a name="sourceMember" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.property.sourceMember"></a>

```java
public java.lang.String getSourceMember();
```

- *Type:* java.lang.String

---

##### `switchoverDetailStatus`<sup>Required</sup> <a name="switchoverDetailStatus" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.property.switchoverDetailStatus"></a>

```java
public java.lang.String getSwitchoverDetailStatus();
```

- *Type:* java.lang.String

---

##### `targetMember`<sup>Required</sup> <a name="targetMember" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.property.targetMember"></a>

```java
public java.lang.String getTargetMember();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetailsOutputReference.property.internalValue"></a>

```java
public RdsDeploymentSwitchoverDetails getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentSwitchoverDetails">RdsDeploymentSwitchoverDetails</a>

---


### RdsDeploymentTagsList <a name="RdsDeploymentTagsList" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.rds_deployment.RdsDeploymentTagsList;

new RdsDeploymentTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsList.get"></a>

```java
public RdsDeploymentTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTags">RdsDeploymentTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<RdsDeploymentTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTags">RdsDeploymentTags</a>>

---


### RdsDeploymentTagsOutputReference <a name="RdsDeploymentTagsOutputReference" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.rds_deployment.RdsDeploymentTagsOutputReference;

new RdsDeploymentTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTags">RdsDeploymentTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|RdsDeploymentTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTags">RdsDeploymentTags</a>

---


### RdsDeploymentTasksList <a name="RdsDeploymentTasksList" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksList.Initializer"></a>

```java
import io.cdktn.providers.awscc.rds_deployment.RdsDeploymentTasksList;

new RdsDeploymentTasksList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksList.get"></a>

```java
public RdsDeploymentTasksOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### RdsDeploymentTasksOutputReference <a name="RdsDeploymentTasksOutputReference" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.rds_deployment.RdsDeploymentTasksOutputReference;

new RdsDeploymentTasksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.property.taskName">taskName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.property.taskStatus">taskStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasks">RdsDeploymentTasks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `taskName`<sup>Required</sup> <a name="taskName" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.property.taskName"></a>

```java
public java.lang.String getTaskName();
```

- *Type:* java.lang.String

---

##### `taskStatus`<sup>Required</sup> <a name="taskStatus" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.property.taskStatus"></a>

```java
public java.lang.String getTaskStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasksOutputReference.property.internalValue"></a>

```java
public RdsDeploymentTasks getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDeployment.RdsDeploymentTasks">RdsDeploymentTasks</a>

---



