# `rdsDbClusterParameterGroup` Submodule <a name="`rdsDbClusterParameterGroup` Submodule" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RdsDbClusterParameterGroup <a name="RdsDbClusterParameterGroup" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster_parameter_group awscc_rds_db_cluster_parameter_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.Initializer"></a>

```java
import io.cdktn.providers.awscc.rds_db_cluster_parameter_group.RdsDbClusterParameterGroup;

RdsDbClusterParameterGroup.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .description(java.lang.String)
    .family(java.lang.String)
    .parameters(java.lang.String)
//  .dbClusterParameterGroupName(java.lang.String)
//  .tags(IResolvable|java.util.List<RdsDbClusterParameterGroupTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description for the DB cluster parameter group. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.Initializer.parameter.family">family</a></code> | <code>java.lang.String</code> | The DB cluster parameter group family name. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.Initializer.parameter.parameters">parameters</a></code> | <code>java.lang.String</code> | Provides a list of parameters for the DB cluster parameter group. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.Initializer.parameter.dbClusterParameterGroupName">dbClusterParameterGroupName</a></code> | <code>java.lang.String</code> | The name of the DB cluster parameter group. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTags">RdsDbClusterParameterGroupTags</a>></code> | Tags to assign to the DB cluster parameter group. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description for the DB cluster parameter group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster_parameter_group#description RdsDbClusterParameterGroup#description}

---

##### `family`<sup>Required</sup> <a name="family" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.Initializer.parameter.family"></a>

- *Type:* java.lang.String

The DB cluster parameter group family name.

A DB cluster parameter group can be associated with one and only one DB cluster parameter group family, and can be applied only to a DB cluster running a database engine and engine version compatible with that DB cluster parameter group family.
*Aurora MySQL*
Example: `aurora-mysql5.7`, `aurora-mysql8.0`
*Aurora PostgreSQL*
Example: `aurora-postgresql14`
*RDS for MySQL*
Example: `mysql8.0`
*RDS for PostgreSQL*
Example: `postgres13`
To list all of the available parameter group families for a DB engine, use the following command:
`aws rds describe-db-engine-versions --query "DBEngineVersions[].DBParameterGroupFamily" --engine <engine>`
For example, to list all of the available parameter group families for the Aurora PostgreSQL DB engine, use the following command:
`aws rds describe-db-engine-versions --query "DBEngineVersions[].DBParameterGroupFamily" --engine aurora-postgresql`
The output contains duplicates.
The following are the valid DB engine values:

* `aurora-mysql`
* `aurora-postgresql`
* `mysql`
* `postgres`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster_parameter_group#family RdsDbClusterParameterGroup#family}

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.Initializer.parameter.parameters"></a>

- *Type:* java.lang.String

Provides a list of parameters for the DB cluster parameter group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster_parameter_group#parameters RdsDbClusterParameterGroup#parameters}

---

##### `dbClusterParameterGroupName`<sup>Optional</sup> <a name="dbClusterParameterGroupName" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.Initializer.parameter.dbClusterParameterGroupName"></a>

- *Type:* java.lang.String

The name of the DB cluster parameter group.

Constraints:

* Must not match the name of an existing DB cluster parameter group.

This value is stored as a lowercase string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster_parameter_group#db_cluster_parameter_group_name RdsDbClusterParameterGroup#db_cluster_parameter_group_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTags">RdsDbClusterParameterGroupTags</a>>

Tags to assign to the DB cluster parameter group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster_parameter_group#tags RdsDbClusterParameterGroup#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.resetDbClusterParameterGroupName">resetDbClusterParameterGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<RdsDbClusterParameterGroupTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTags">RdsDbClusterParameterGroupTags</a>>

---

##### `resetDbClusterParameterGroupName` <a name="resetDbClusterParameterGroupName" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.resetDbClusterParameterGroupName"></a>

```java
public void resetDbClusterParameterGroupName()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a RdsDbClusterParameterGroup resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.isConstruct"></a>

```java
import io.cdktn.providers.awscc.rds_db_cluster_parameter_group.RdsDbClusterParameterGroup;

RdsDbClusterParameterGroup.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.rds_db_cluster_parameter_group.RdsDbClusterParameterGroup;

RdsDbClusterParameterGroup.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.rds_db_cluster_parameter_group.RdsDbClusterParameterGroup;

RdsDbClusterParameterGroup.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.rds_db_cluster_parameter_group.RdsDbClusterParameterGroup;

RdsDbClusterParameterGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),RdsDbClusterParameterGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a RdsDbClusterParameterGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the RdsDbClusterParameterGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing RdsDbClusterParameterGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster_parameter_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the RdsDbClusterParameterGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTagsList">RdsDbClusterParameterGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.property.dbClusterParameterGroupNameInput">dbClusterParameterGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.property.familyInput">familyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.property.parametersInput">parametersInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTags">RdsDbClusterParameterGroupTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.property.dbClusterParameterGroupName">dbClusterParameterGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.property.family">family</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.property.parameters">parameters</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.property.tags"></a>

```java
public RdsDbClusterParameterGroupTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTagsList">RdsDbClusterParameterGroupTagsList</a>

---

##### `dbClusterParameterGroupNameInput`<sup>Optional</sup> <a name="dbClusterParameterGroupNameInput" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.property.dbClusterParameterGroupNameInput"></a>

```java
public java.lang.String getDbClusterParameterGroupNameInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `familyInput`<sup>Optional</sup> <a name="familyInput" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.property.familyInput"></a>

```java
public java.lang.String getFamilyInput();
```

- *Type:* java.lang.String

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.property.parametersInput"></a>

```java
public java.lang.String getParametersInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.property.tagsInput"></a>

```java
public IResolvable|java.util.List<RdsDbClusterParameterGroupTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTags">RdsDbClusterParameterGroupTags</a>>

---

##### `dbClusterParameterGroupName`<sup>Required</sup> <a name="dbClusterParameterGroupName" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.property.dbClusterParameterGroupName"></a>

```java
public java.lang.String getDbClusterParameterGroupName();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `family`<sup>Required</sup> <a name="family" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.property.family"></a>

```java
public java.lang.String getFamily();
```

- *Type:* java.lang.String

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.property.parameters"></a>

```java
public java.lang.String getParameters();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroup.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### RdsDbClusterParameterGroupConfig <a name="RdsDbClusterParameterGroupConfig" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.rds_db_cluster_parameter_group.RdsDbClusterParameterGroupConfig;

RdsDbClusterParameterGroupConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .description(java.lang.String)
    .family(java.lang.String)
    .parameters(java.lang.String)
//  .dbClusterParameterGroupName(java.lang.String)
//  .tags(IResolvable|java.util.List<RdsDbClusterParameterGroupTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description for the DB cluster parameter group. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupConfig.property.family">family</a></code> | <code>java.lang.String</code> | The DB cluster parameter group family name. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupConfig.property.parameters">parameters</a></code> | <code>java.lang.String</code> | Provides a list of parameters for the DB cluster parameter group. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupConfig.property.dbClusterParameterGroupName">dbClusterParameterGroupName</a></code> | <code>java.lang.String</code> | The name of the DB cluster parameter group. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTags">RdsDbClusterParameterGroupTags</a>></code> | Tags to assign to the DB cluster parameter group. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description for the DB cluster parameter group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster_parameter_group#description RdsDbClusterParameterGroup#description}

---

##### `family`<sup>Required</sup> <a name="family" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupConfig.property.family"></a>

```java
public java.lang.String getFamily();
```

- *Type:* java.lang.String

The DB cluster parameter group family name.

A DB cluster parameter group can be associated with one and only one DB cluster parameter group family, and can be applied only to a DB cluster running a database engine and engine version compatible with that DB cluster parameter group family.
*Aurora MySQL*
Example: `aurora-mysql5.7`, `aurora-mysql8.0`
*Aurora PostgreSQL*
Example: `aurora-postgresql14`
*RDS for MySQL*
Example: `mysql8.0`
*RDS for PostgreSQL*
Example: `postgres13`
To list all of the available parameter group families for a DB engine, use the following command:
`aws rds describe-db-engine-versions --query "DBEngineVersions[].DBParameterGroupFamily" --engine <engine>`
For example, to list all of the available parameter group families for the Aurora PostgreSQL DB engine, use the following command:
`aws rds describe-db-engine-versions --query "DBEngineVersions[].DBParameterGroupFamily" --engine aurora-postgresql`
The output contains duplicates.
The following are the valid DB engine values:

* `aurora-mysql`
* `aurora-postgresql`
* `mysql`
* `postgres`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster_parameter_group#family RdsDbClusterParameterGroup#family}

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupConfig.property.parameters"></a>

```java
public java.lang.String getParameters();
```

- *Type:* java.lang.String

Provides a list of parameters for the DB cluster parameter group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster_parameter_group#parameters RdsDbClusterParameterGroup#parameters}

---

##### `dbClusterParameterGroupName`<sup>Optional</sup> <a name="dbClusterParameterGroupName" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupConfig.property.dbClusterParameterGroupName"></a>

```java
public java.lang.String getDbClusterParameterGroupName();
```

- *Type:* java.lang.String

The name of the DB cluster parameter group.

Constraints:

* Must not match the name of an existing DB cluster parameter group.

This value is stored as a lowercase string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster_parameter_group#db_cluster_parameter_group_name RdsDbClusterParameterGroup#db_cluster_parameter_group_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupConfig.property.tags"></a>

```java
public IResolvable|java.util.List<RdsDbClusterParameterGroupTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTags">RdsDbClusterParameterGroupTags</a>>

Tags to assign to the DB cluster parameter group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster_parameter_group#tags RdsDbClusterParameterGroup#tags}

---

### RdsDbClusterParameterGroupTags <a name="RdsDbClusterParameterGroupTags" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.rds_db_cluster_parameter_group.RdsDbClusterParameterGroupTags;

RdsDbClusterParameterGroupTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTags.property.key">key</a></code> | <code>java.lang.String</code> | A key is the required name of the tag. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTags.property.value">value</a></code> | <code>java.lang.String</code> | A value is the optional value of the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

A key is the required name of the tag.

The string value can be from 1 to 128 Unicode characters in length and can't be prefixed with `aws:` or `rds:`. The string can only contain only the set of Unicode letters, digits, white-space, '*', '.', ':', '/', '=', '+', '-', '@' (Java regex: "^([\p{L}\p{Z}\p{N}*.:/=+\-@]*)$").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster_parameter_group#key RdsDbClusterParameterGroup#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

A value is the optional value of the tag.

The string value can be from 1 to 256 Unicode characters in length and can't be prefixed with `aws:` or `rds:`. The string can only contain only the set of Unicode letters, digits, white-space, '*', '.', ':', '/', '=', '+', '-', '@' (Java regex: "^([\p{L}\p{Z}\p{N}*.:/=+\-@]*)$").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster_parameter_group#value RdsDbClusterParameterGroup#value}

---

## Classes <a name="Classes" id="Classes"></a>

### RdsDbClusterParameterGroupTagsList <a name="RdsDbClusterParameterGroupTagsList" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.rds_db_cluster_parameter_group.RdsDbClusterParameterGroupTagsList;

new RdsDbClusterParameterGroupTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTagsList.get"></a>

```java
public RdsDbClusterParameterGroupTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTags">RdsDbClusterParameterGroupTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<RdsDbClusterParameterGroupTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTags">RdsDbClusterParameterGroupTags</a>>

---


### RdsDbClusterParameterGroupTagsOutputReference <a name="RdsDbClusterParameterGroupTagsOutputReference" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.rds_db_cluster_parameter_group.RdsDbClusterParameterGroupTagsOutputReference;

new RdsDbClusterParameterGroupTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTags">RdsDbClusterParameterGroupTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|RdsDbClusterParameterGroupTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rdsDbClusterParameterGroup.RdsDbClusterParameterGroupTags">RdsDbClusterParameterGroupTags</a>

---



