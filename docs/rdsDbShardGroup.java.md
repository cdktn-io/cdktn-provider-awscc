# `rdsDbShardGroup` Submodule <a name="`rdsDbShardGroup` Submodule" id="@cdktn/provider-awscc.rdsDbShardGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RdsDbShardGroup <a name="RdsDbShardGroup" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_db_shard_group awscc_rds_db_shard_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.Initializer"></a>

```java
import io.cdktn.providers.awscc.rds_db_shard_group.RdsDbShardGroup;

RdsDbShardGroup.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .dbClusterIdentifier(java.lang.String)
    .maxAcu(java.lang.Number)
//  .computeRedundancy(java.lang.Number)
//  .dbShardGroupIdentifier(java.lang.String)
//  .minAcu(java.lang.Number)
//  .publiclyAccessible(java.lang.Boolean|IResolvable)
//  .tags(IResolvable|java.util.List<RdsDbShardGroupTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.Initializer.parameter.dbClusterIdentifier">dbClusterIdentifier</a></code> | <code>java.lang.String</code> | The name of the primary DB cluster for the DB shard group. |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.Initializer.parameter.maxAcu">maxAcu</a></code> | <code>java.lang.Number</code> | The maximum capacity of the DB shard group in Aurora capacity units (ACUs). |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.Initializer.parameter.computeRedundancy">computeRedundancy</a></code> | <code>java.lang.Number</code> | Specifies whether to create standby standby DB data access shard for the DB shard group. |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.Initializer.parameter.dbShardGroupIdentifier">dbShardGroupIdentifier</a></code> | <code>java.lang.String</code> | The name of the DB shard group. |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.Initializer.parameter.minAcu">minAcu</a></code> | <code>java.lang.Number</code> | The minimum capacity of the DB shard group in Aurora capacity units (ACUs). |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.Initializer.parameter.publiclyAccessible">publiclyAccessible</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether the DB shard group is publicly accessible. |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTags">RdsDbShardGroupTags</a>></code> | An optional set of key-value pairs to associate arbitrary data of your choosing with the DB shard group. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `dbClusterIdentifier`<sup>Required</sup> <a name="dbClusterIdentifier" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.Initializer.parameter.dbClusterIdentifier"></a>

- *Type:* java.lang.String

The name of the primary DB cluster for the DB shard group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_db_shard_group#db_cluster_identifier RdsDbShardGroup#db_cluster_identifier}

---

##### `maxAcu`<sup>Required</sup> <a name="maxAcu" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.Initializer.parameter.maxAcu"></a>

- *Type:* java.lang.Number

The maximum capacity of the DB shard group in Aurora capacity units (ACUs).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_db_shard_group#max_acu RdsDbShardGroup#max_acu}

---

##### `computeRedundancy`<sup>Optional</sup> <a name="computeRedundancy" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.Initializer.parameter.computeRedundancy"></a>

- *Type:* java.lang.Number

Specifies whether to create standby standby DB data access shard for the DB shard group.

Valid values are the following:

* 0 - Creates a DB shard group without a standby DB data access shard. This is the default value.
* 1 - Creates a DB shard group with a standby DB data access shard in a different Availability Zone (AZ).
* 2 - Creates a DB shard group with two standby DB data access shard in two different AZs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_db_shard_group#compute_redundancy RdsDbShardGroup#compute_redundancy}

---

##### `dbShardGroupIdentifier`<sup>Optional</sup> <a name="dbShardGroupIdentifier" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.Initializer.parameter.dbShardGroupIdentifier"></a>

- *Type:* java.lang.String

The name of the DB shard group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_db_shard_group#db_shard_group_identifier RdsDbShardGroup#db_shard_group_identifier}

---

##### `minAcu`<sup>Optional</sup> <a name="minAcu" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.Initializer.parameter.minAcu"></a>

- *Type:* java.lang.Number

The minimum capacity of the DB shard group in Aurora capacity units (ACUs).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_db_shard_group#min_acu RdsDbShardGroup#min_acu}

---

##### `publiclyAccessible`<sup>Optional</sup> <a name="publiclyAccessible" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.Initializer.parameter.publiclyAccessible"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether the DB shard group is publicly accessible.

When the DB shard group is publicly accessible, its Domain Name System (DNS) endpoint resolves to the private IP address from within the DB shard group's virtual private cloud (VPC). It resolves to the public IP address from outside of the DB shard group's VPC. Access to the DB shard group is ultimately controlled by the security group it uses. That public access is not permitted if the security group assigned to the DB shard group doesn't permit it.
When the DB shard group isn't publicly accessible, it is an internal DB shard group with a DNS name that resolves to a private IP address.
Default: The default behavior varies depending on whether `DBSubnetGroupName` is specified.
If `DBSubnetGroupName` isn't specified, and `PubliclyAccessible` isn't specified, the following applies:

* If the default VPC in the target Region doesn?t have an internet gateway attached to it, the DB shard group is private.
* If the default VPC in the target Region has an internet gateway attached to it, the DB shard group is public.

If `DBSubnetGroupName` is specified, and `PubliclyAccessible` isn't specified, the following applies:

* If the subnets are part of a VPC that doesn?t have an internet gateway attached to it, the DB shard group is private.
* If the subnets are part of a VPC that has an internet gateway attached to it, the DB shard group is public.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_db_shard_group#publicly_accessible RdsDbShardGroup#publicly_accessible}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTags">RdsDbShardGroupTags</a>>

An optional set of key-value pairs to associate arbitrary data of your choosing with the DB shard group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_db_shard_group#tags RdsDbShardGroup#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.resetComputeRedundancy">resetComputeRedundancy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.resetDbShardGroupIdentifier">resetDbShardGroupIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.resetMinAcu">resetMinAcu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.resetPubliclyAccessible">resetPubliclyAccessible</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<RdsDbShardGroupTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTags">RdsDbShardGroupTags</a>>

---

##### `resetComputeRedundancy` <a name="resetComputeRedundancy" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.resetComputeRedundancy"></a>

```java
public void resetComputeRedundancy()
```

##### `resetDbShardGroupIdentifier` <a name="resetDbShardGroupIdentifier" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.resetDbShardGroupIdentifier"></a>

```java
public void resetDbShardGroupIdentifier()
```

##### `resetMinAcu` <a name="resetMinAcu" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.resetMinAcu"></a>

```java
public void resetMinAcu()
```

##### `resetPubliclyAccessible` <a name="resetPubliclyAccessible" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.resetPubliclyAccessible"></a>

```java
public void resetPubliclyAccessible()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a RdsDbShardGroup resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.isConstruct"></a>

```java
import io.cdktn.providers.awscc.rds_db_shard_group.RdsDbShardGroup;

RdsDbShardGroup.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.rds_db_shard_group.RdsDbShardGroup;

RdsDbShardGroup.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.rds_db_shard_group.RdsDbShardGroup;

RdsDbShardGroup.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.rds_db_shard_group.RdsDbShardGroup;

RdsDbShardGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),RdsDbShardGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a RdsDbShardGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the RdsDbShardGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing RdsDbShardGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_db_shard_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the RdsDbShardGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.dbShardGroupResourceId">dbShardGroupResourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsList">RdsDbShardGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.computeRedundancyInput">computeRedundancyInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.dbClusterIdentifierInput">dbClusterIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.dbShardGroupIdentifierInput">dbShardGroupIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.maxAcuInput">maxAcuInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.minAcuInput">minAcuInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.publiclyAccessibleInput">publiclyAccessibleInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTags">RdsDbShardGroupTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.computeRedundancy">computeRedundancy</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.dbClusterIdentifier">dbClusterIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.dbShardGroupIdentifier">dbShardGroupIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.maxAcu">maxAcu</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.minAcu">minAcu</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.publiclyAccessible">publiclyAccessible</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `dbShardGroupResourceId`<sup>Required</sup> <a name="dbShardGroupResourceId" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.dbShardGroupResourceId"></a>

```java
public java.lang.String getDbShardGroupResourceId();
```

- *Type:* java.lang.String

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.tags"></a>

```java
public RdsDbShardGroupTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsList">RdsDbShardGroupTagsList</a>

---

##### `computeRedundancyInput`<sup>Optional</sup> <a name="computeRedundancyInput" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.computeRedundancyInput"></a>

```java
public java.lang.Number getComputeRedundancyInput();
```

- *Type:* java.lang.Number

---

##### `dbClusterIdentifierInput`<sup>Optional</sup> <a name="dbClusterIdentifierInput" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.dbClusterIdentifierInput"></a>

```java
public java.lang.String getDbClusterIdentifierInput();
```

- *Type:* java.lang.String

---

##### `dbShardGroupIdentifierInput`<sup>Optional</sup> <a name="dbShardGroupIdentifierInput" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.dbShardGroupIdentifierInput"></a>

```java
public java.lang.String getDbShardGroupIdentifierInput();
```

- *Type:* java.lang.String

---

##### `maxAcuInput`<sup>Optional</sup> <a name="maxAcuInput" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.maxAcuInput"></a>

```java
public java.lang.Number getMaxAcuInput();
```

- *Type:* java.lang.Number

---

##### `minAcuInput`<sup>Optional</sup> <a name="minAcuInput" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.minAcuInput"></a>

```java
public java.lang.Number getMinAcuInput();
```

- *Type:* java.lang.Number

---

##### `publiclyAccessibleInput`<sup>Optional</sup> <a name="publiclyAccessibleInput" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.publiclyAccessibleInput"></a>

```java
public java.lang.Boolean|IResolvable getPubliclyAccessibleInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.tagsInput"></a>

```java
public IResolvable|java.util.List<RdsDbShardGroupTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTags">RdsDbShardGroupTags</a>>

---

##### `computeRedundancy`<sup>Required</sup> <a name="computeRedundancy" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.computeRedundancy"></a>

```java
public java.lang.Number getComputeRedundancy();
```

- *Type:* java.lang.Number

---

##### `dbClusterIdentifier`<sup>Required</sup> <a name="dbClusterIdentifier" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.dbClusterIdentifier"></a>

```java
public java.lang.String getDbClusterIdentifier();
```

- *Type:* java.lang.String

---

##### `dbShardGroupIdentifier`<sup>Required</sup> <a name="dbShardGroupIdentifier" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.dbShardGroupIdentifier"></a>

```java
public java.lang.String getDbShardGroupIdentifier();
```

- *Type:* java.lang.String

---

##### `maxAcu`<sup>Required</sup> <a name="maxAcu" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.maxAcu"></a>

```java
public java.lang.Number getMaxAcu();
```

- *Type:* java.lang.Number

---

##### `minAcu`<sup>Required</sup> <a name="minAcu" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.minAcu"></a>

```java
public java.lang.Number getMinAcu();
```

- *Type:* java.lang.Number

---

##### `publiclyAccessible`<sup>Required</sup> <a name="publiclyAccessible" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.publiclyAccessible"></a>

```java
public java.lang.Boolean|IResolvable getPubliclyAccessible();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### RdsDbShardGroupConfig <a name="RdsDbShardGroupConfig" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.rds_db_shard_group.RdsDbShardGroupConfig;

RdsDbShardGroupConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .dbClusterIdentifier(java.lang.String)
    .maxAcu(java.lang.Number)
//  .computeRedundancy(java.lang.Number)
//  .dbShardGroupIdentifier(java.lang.String)
//  .minAcu(java.lang.Number)
//  .publiclyAccessible(java.lang.Boolean|IResolvable)
//  .tags(IResolvable|java.util.List<RdsDbShardGroupTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupConfig.property.dbClusterIdentifier">dbClusterIdentifier</a></code> | <code>java.lang.String</code> | The name of the primary DB cluster for the DB shard group. |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupConfig.property.maxAcu">maxAcu</a></code> | <code>java.lang.Number</code> | The maximum capacity of the DB shard group in Aurora capacity units (ACUs). |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupConfig.property.computeRedundancy">computeRedundancy</a></code> | <code>java.lang.Number</code> | Specifies whether to create standby standby DB data access shard for the DB shard group. |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupConfig.property.dbShardGroupIdentifier">dbShardGroupIdentifier</a></code> | <code>java.lang.String</code> | The name of the DB shard group. |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupConfig.property.minAcu">minAcu</a></code> | <code>java.lang.Number</code> | The minimum capacity of the DB shard group in Aurora capacity units (ACUs). |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupConfig.property.publiclyAccessible">publiclyAccessible</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether the DB shard group is publicly accessible. |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTags">RdsDbShardGroupTags</a>></code> | An optional set of key-value pairs to associate arbitrary data of your choosing with the DB shard group. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `dbClusterIdentifier`<sup>Required</sup> <a name="dbClusterIdentifier" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupConfig.property.dbClusterIdentifier"></a>

```java
public java.lang.String getDbClusterIdentifier();
```

- *Type:* java.lang.String

The name of the primary DB cluster for the DB shard group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_db_shard_group#db_cluster_identifier RdsDbShardGroup#db_cluster_identifier}

---

##### `maxAcu`<sup>Required</sup> <a name="maxAcu" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupConfig.property.maxAcu"></a>

```java
public java.lang.Number getMaxAcu();
```

- *Type:* java.lang.Number

The maximum capacity of the DB shard group in Aurora capacity units (ACUs).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_db_shard_group#max_acu RdsDbShardGroup#max_acu}

---

##### `computeRedundancy`<sup>Optional</sup> <a name="computeRedundancy" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupConfig.property.computeRedundancy"></a>

```java
public java.lang.Number getComputeRedundancy();
```

- *Type:* java.lang.Number

Specifies whether to create standby standby DB data access shard for the DB shard group.

Valid values are the following:

* 0 - Creates a DB shard group without a standby DB data access shard. This is the default value.
* 1 - Creates a DB shard group with a standby DB data access shard in a different Availability Zone (AZ).
* 2 - Creates a DB shard group with two standby DB data access shard in two different AZs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_db_shard_group#compute_redundancy RdsDbShardGroup#compute_redundancy}

---

##### `dbShardGroupIdentifier`<sup>Optional</sup> <a name="dbShardGroupIdentifier" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupConfig.property.dbShardGroupIdentifier"></a>

```java
public java.lang.String getDbShardGroupIdentifier();
```

- *Type:* java.lang.String

The name of the DB shard group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_db_shard_group#db_shard_group_identifier RdsDbShardGroup#db_shard_group_identifier}

---

##### `minAcu`<sup>Optional</sup> <a name="minAcu" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupConfig.property.minAcu"></a>

```java
public java.lang.Number getMinAcu();
```

- *Type:* java.lang.Number

The minimum capacity of the DB shard group in Aurora capacity units (ACUs).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_db_shard_group#min_acu RdsDbShardGroup#min_acu}

---

##### `publiclyAccessible`<sup>Optional</sup> <a name="publiclyAccessible" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupConfig.property.publiclyAccessible"></a>

```java
public java.lang.Boolean|IResolvable getPubliclyAccessible();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether the DB shard group is publicly accessible.

When the DB shard group is publicly accessible, its Domain Name System (DNS) endpoint resolves to the private IP address from within the DB shard group's virtual private cloud (VPC). It resolves to the public IP address from outside of the DB shard group's VPC. Access to the DB shard group is ultimately controlled by the security group it uses. That public access is not permitted if the security group assigned to the DB shard group doesn't permit it.
When the DB shard group isn't publicly accessible, it is an internal DB shard group with a DNS name that resolves to a private IP address.
Default: The default behavior varies depending on whether `DBSubnetGroupName` is specified.
If `DBSubnetGroupName` isn't specified, and `PubliclyAccessible` isn't specified, the following applies:

* If the default VPC in the target Region doesn?t have an internet gateway attached to it, the DB shard group is private.
* If the default VPC in the target Region has an internet gateway attached to it, the DB shard group is public.

If `DBSubnetGroupName` is specified, and `PubliclyAccessible` isn't specified, the following applies:

* If the subnets are part of a VPC that doesn?t have an internet gateway attached to it, the DB shard group is private.
* If the subnets are part of a VPC that has an internet gateway attached to it, the DB shard group is public.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_db_shard_group#publicly_accessible RdsDbShardGroup#publicly_accessible}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupConfig.property.tags"></a>

```java
public IResolvable|java.util.List<RdsDbShardGroupTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTags">RdsDbShardGroupTags</a>>

An optional set of key-value pairs to associate arbitrary data of your choosing with the DB shard group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_db_shard_group#tags RdsDbShardGroup#tags}

---

### RdsDbShardGroupTags <a name="RdsDbShardGroupTags" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.rds_db_shard_group.RdsDbShardGroupTags;

RdsDbShardGroupTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTags.property.key">key</a></code> | <code>java.lang.String</code> | A key is the required name of the tag. |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTags.property.value">value</a></code> | <code>java.lang.String</code> | A value is the optional value of the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

A key is the required name of the tag.

The string value can be from 1 to 128 Unicode characters in length and can't be prefixed with `aws:` or `rds:`. The string can only contain only the set of Unicode letters, digits, white-space, '*', '.', ':', '/', '=', '+', '-', '@' (Java regex: "^([\p{L}\p{Z}\p{N}*.:/=+\-@]*)$").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_db_shard_group#key RdsDbShardGroup#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

A value is the optional value of the tag.

The string value can be from 1 to 256 Unicode characters in length and can't be prefixed with `aws:` or `rds:`. The string can only contain only the set of Unicode letters, digits, white-space, '*', '.', ':', '/', '=', '+', '-', '@' (Java regex: "^([\p{L}\p{Z}\p{N}*.:/=+\-@]*)$").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_db_shard_group#value RdsDbShardGroup#value}

---

## Classes <a name="Classes" id="Classes"></a>

### RdsDbShardGroupTagsList <a name="RdsDbShardGroupTagsList" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.rds_db_shard_group.RdsDbShardGroupTagsList;

new RdsDbShardGroupTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsList.get"></a>

```java
public RdsDbShardGroupTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTags">RdsDbShardGroupTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<RdsDbShardGroupTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTags">RdsDbShardGroupTags</a>>

---


### RdsDbShardGroupTagsOutputReference <a name="RdsDbShardGroupTagsOutputReference" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.rds_db_shard_group.RdsDbShardGroupTagsOutputReference;

new RdsDbShardGroupTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTags">RdsDbShardGroupTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|RdsDbShardGroupTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTags">RdsDbShardGroupTags</a>

---



