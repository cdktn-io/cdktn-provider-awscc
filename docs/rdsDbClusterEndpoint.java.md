# `rdsDbClusterEndpoint` Submodule <a name="`rdsDbClusterEndpoint` Submodule" id="@cdktn/provider-awscc.rdsDbClusterEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RdsDbClusterEndpointA <a name="RdsDbClusterEndpointA" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/rds_db_cluster_endpoint awscc_rds_db_cluster_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.Initializer"></a>

```java
import io.cdktn.providers.awscc.rds_db_cluster_endpoint.RdsDbClusterEndpointA;

RdsDbClusterEndpointA.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .customEndpointType(java.lang.String)
    .dbClusterEndpointIdentifier(java.lang.String)
    .dbClusterIdentifier(java.lang.String)
//  .excludedMembers(java.util.List<java.lang.String>)
//  .staticMembers(java.util.List<java.lang.String>)
//  .tags(IResolvable|java.util.List<RdsDbClusterEndpointTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.Initializer.parameter.customEndpointType">customEndpointType</a></code> | <code>java.lang.String</code> | The type of the custom endpoint. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.Initializer.parameter.dbClusterEndpointIdentifier">dbClusterEndpointIdentifier</a></code> | <code>java.lang.String</code> | The identifier to use for the new endpoint. This parameter is stored as a lowercase string. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.Initializer.parameter.dbClusterIdentifier">dbClusterIdentifier</a></code> | <code>java.lang.String</code> | The DB cluster identifier of the DB cluster associated with the endpoint. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.Initializer.parameter.excludedMembers">excludedMembers</a></code> | <code>java.util.List<java.lang.String></code> | List of DB instance identifiers that aren't part of the custom endpoint group. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.Initializer.parameter.staticMembers">staticMembers</a></code> | <code>java.util.List<java.lang.String></code> | List of DB instance identifiers that are part of the custom endpoint group. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTags">RdsDbClusterEndpointTags</a>></code> | The tags to be assigned to the DB cluster endpoint. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `customEndpointType`<sup>Required</sup> <a name="customEndpointType" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.Initializer.parameter.customEndpointType"></a>

- *Type:* java.lang.String

The type of the custom endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/rds_db_cluster_endpoint#custom_endpoint_type RdsDbClusterEndpointA#custom_endpoint_type}

---

##### `dbClusterEndpointIdentifier`<sup>Required</sup> <a name="dbClusterEndpointIdentifier" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.Initializer.parameter.dbClusterEndpointIdentifier"></a>

- *Type:* java.lang.String

The identifier to use for the new endpoint. This parameter is stored as a lowercase string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/rds_db_cluster_endpoint#db_cluster_endpoint_identifier RdsDbClusterEndpointA#db_cluster_endpoint_identifier}

---

##### `dbClusterIdentifier`<sup>Required</sup> <a name="dbClusterIdentifier" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.Initializer.parameter.dbClusterIdentifier"></a>

- *Type:* java.lang.String

The DB cluster identifier of the DB cluster associated with the endpoint.

This parameter is stored as a lowercase string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/rds_db_cluster_endpoint#db_cluster_identifier RdsDbClusterEndpointA#db_cluster_identifier}

---

##### `excludedMembers`<sup>Optional</sup> <a name="excludedMembers" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.Initializer.parameter.excludedMembers"></a>

- *Type:* java.util.List<java.lang.String>

List of DB instance identifiers that aren't part of the custom endpoint group.

All other eligible instances are reachable through the custom endpoint. Only relevant if the list of static members is empty. Once either member list is set, it can be changed or replaced by the other list, but both lists cannot be removed in place; removing them requires replacing the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/rds_db_cluster_endpoint#excluded_members RdsDbClusterEndpointA#excluded_members}

---

##### `staticMembers`<sup>Optional</sup> <a name="staticMembers" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.Initializer.parameter.staticMembers"></a>

- *Type:* java.util.List<java.lang.String>

List of DB instance identifiers that are part of the custom endpoint group.

Once either member list is set, it can be changed or replaced by the other list, but both lists cannot be removed in place; removing them requires replacing the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/rds_db_cluster_endpoint#static_members RdsDbClusterEndpointA#static_members}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTags">RdsDbClusterEndpointTags</a>>

The tags to be assigned to the DB cluster endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/rds_db_cluster_endpoint#tags RdsDbClusterEndpointA#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.resetExcludedMembers">resetExcludedMembers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.resetStaticMembers">resetStaticMembers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<RdsDbClusterEndpointTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTags">RdsDbClusterEndpointTags</a>>

---

##### `resetExcludedMembers` <a name="resetExcludedMembers" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.resetExcludedMembers"></a>

```java
public void resetExcludedMembers()
```

##### `resetStaticMembers` <a name="resetStaticMembers" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.resetStaticMembers"></a>

```java
public void resetStaticMembers()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a RdsDbClusterEndpointA resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.isConstruct"></a>

```java
import io.cdktn.providers.awscc.rds_db_cluster_endpoint.RdsDbClusterEndpointA;

RdsDbClusterEndpointA.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.rds_db_cluster_endpoint.RdsDbClusterEndpointA;

RdsDbClusterEndpointA.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.rds_db_cluster_endpoint.RdsDbClusterEndpointA;

RdsDbClusterEndpointA.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.rds_db_cluster_endpoint.RdsDbClusterEndpointA;

RdsDbClusterEndpointA.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),RdsDbClusterEndpointA.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a RdsDbClusterEndpointA resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the RdsDbClusterEndpointA to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing RdsDbClusterEndpointA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/rds_db_cluster_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the RdsDbClusterEndpointA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.dbClusterEndpointArn">dbClusterEndpointArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.dbClusterEndpointResourceIdentifier">dbClusterEndpointResourceIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.endpointType">endpointType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList">RdsDbClusterEndpointTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.customEndpointTypeInput">customEndpointTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.dbClusterEndpointIdentifierInput">dbClusterEndpointIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.dbClusterIdentifierInput">dbClusterIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.excludedMembersInput">excludedMembersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.staticMembersInput">staticMembersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTags">RdsDbClusterEndpointTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.customEndpointType">customEndpointType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.dbClusterEndpointIdentifier">dbClusterEndpointIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.dbClusterIdentifier">dbClusterIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.excludedMembers">excludedMembers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.staticMembers">staticMembers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `dbClusterEndpointArn`<sup>Required</sup> <a name="dbClusterEndpointArn" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.dbClusterEndpointArn"></a>

```java
public java.lang.String getDbClusterEndpointArn();
```

- *Type:* java.lang.String

---

##### `dbClusterEndpointResourceIdentifier`<sup>Required</sup> <a name="dbClusterEndpointResourceIdentifier" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.dbClusterEndpointResourceIdentifier"></a>

```java
public java.lang.String getDbClusterEndpointResourceIdentifier();
```

- *Type:* java.lang.String

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

---

##### `endpointType`<sup>Required</sup> <a name="endpointType" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.endpointType"></a>

```java
public java.lang.String getEndpointType();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.tags"></a>

```java
public RdsDbClusterEndpointTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList">RdsDbClusterEndpointTagsList</a>

---

##### `customEndpointTypeInput`<sup>Optional</sup> <a name="customEndpointTypeInput" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.customEndpointTypeInput"></a>

```java
public java.lang.String getCustomEndpointTypeInput();
```

- *Type:* java.lang.String

---

##### `dbClusterEndpointIdentifierInput`<sup>Optional</sup> <a name="dbClusterEndpointIdentifierInput" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.dbClusterEndpointIdentifierInput"></a>

```java
public java.lang.String getDbClusterEndpointIdentifierInput();
```

- *Type:* java.lang.String

---

##### `dbClusterIdentifierInput`<sup>Optional</sup> <a name="dbClusterIdentifierInput" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.dbClusterIdentifierInput"></a>

```java
public java.lang.String getDbClusterIdentifierInput();
```

- *Type:* java.lang.String

---

##### `excludedMembersInput`<sup>Optional</sup> <a name="excludedMembersInput" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.excludedMembersInput"></a>

```java
public java.util.List<java.lang.String> getExcludedMembersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `staticMembersInput`<sup>Optional</sup> <a name="staticMembersInput" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.staticMembersInput"></a>

```java
public java.util.List<java.lang.String> getStaticMembersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.tagsInput"></a>

```java
public IResolvable|java.util.List<RdsDbClusterEndpointTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTags">RdsDbClusterEndpointTags</a>>

---

##### `customEndpointType`<sup>Required</sup> <a name="customEndpointType" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.customEndpointType"></a>

```java
public java.lang.String getCustomEndpointType();
```

- *Type:* java.lang.String

---

##### `dbClusterEndpointIdentifier`<sup>Required</sup> <a name="dbClusterEndpointIdentifier" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.dbClusterEndpointIdentifier"></a>

```java
public java.lang.String getDbClusterEndpointIdentifier();
```

- *Type:* java.lang.String

---

##### `dbClusterIdentifier`<sup>Required</sup> <a name="dbClusterIdentifier" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.dbClusterIdentifier"></a>

```java
public java.lang.String getDbClusterIdentifier();
```

- *Type:* java.lang.String

---

##### `excludedMembers`<sup>Required</sup> <a name="excludedMembers" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.excludedMembers"></a>

```java
public java.util.List<java.lang.String> getExcludedMembers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `staticMembers`<sup>Required</sup> <a name="staticMembers" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.staticMembers"></a>

```java
public java.util.List<java.lang.String> getStaticMembers();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### RdsDbClusterEndpointAConfig <a name="RdsDbClusterEndpointAConfig" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.rds_db_cluster_endpoint.RdsDbClusterEndpointAConfig;

RdsDbClusterEndpointAConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .customEndpointType(java.lang.String)
    .dbClusterEndpointIdentifier(java.lang.String)
    .dbClusterIdentifier(java.lang.String)
//  .excludedMembers(java.util.List<java.lang.String>)
//  .staticMembers(java.util.List<java.lang.String>)
//  .tags(IResolvable|java.util.List<RdsDbClusterEndpointTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.customEndpointType">customEndpointType</a></code> | <code>java.lang.String</code> | The type of the custom endpoint. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.dbClusterEndpointIdentifier">dbClusterEndpointIdentifier</a></code> | <code>java.lang.String</code> | The identifier to use for the new endpoint. This parameter is stored as a lowercase string. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.dbClusterIdentifier">dbClusterIdentifier</a></code> | <code>java.lang.String</code> | The DB cluster identifier of the DB cluster associated with the endpoint. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.excludedMembers">excludedMembers</a></code> | <code>java.util.List<java.lang.String></code> | List of DB instance identifiers that aren't part of the custom endpoint group. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.staticMembers">staticMembers</a></code> | <code>java.util.List<java.lang.String></code> | List of DB instance identifiers that are part of the custom endpoint group. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTags">RdsDbClusterEndpointTags</a>></code> | The tags to be assigned to the DB cluster endpoint. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `customEndpointType`<sup>Required</sup> <a name="customEndpointType" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.customEndpointType"></a>

```java
public java.lang.String getCustomEndpointType();
```

- *Type:* java.lang.String

The type of the custom endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/rds_db_cluster_endpoint#custom_endpoint_type RdsDbClusterEndpointA#custom_endpoint_type}

---

##### `dbClusterEndpointIdentifier`<sup>Required</sup> <a name="dbClusterEndpointIdentifier" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.dbClusterEndpointIdentifier"></a>

```java
public java.lang.String getDbClusterEndpointIdentifier();
```

- *Type:* java.lang.String

The identifier to use for the new endpoint. This parameter is stored as a lowercase string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/rds_db_cluster_endpoint#db_cluster_endpoint_identifier RdsDbClusterEndpointA#db_cluster_endpoint_identifier}

---

##### `dbClusterIdentifier`<sup>Required</sup> <a name="dbClusterIdentifier" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.dbClusterIdentifier"></a>

```java
public java.lang.String getDbClusterIdentifier();
```

- *Type:* java.lang.String

The DB cluster identifier of the DB cluster associated with the endpoint.

This parameter is stored as a lowercase string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/rds_db_cluster_endpoint#db_cluster_identifier RdsDbClusterEndpointA#db_cluster_identifier}

---

##### `excludedMembers`<sup>Optional</sup> <a name="excludedMembers" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.excludedMembers"></a>

```java
public java.util.List<java.lang.String> getExcludedMembers();
```

- *Type:* java.util.List<java.lang.String>

List of DB instance identifiers that aren't part of the custom endpoint group.

All other eligible instances are reachable through the custom endpoint. Only relevant if the list of static members is empty. Once either member list is set, it can be changed or replaced by the other list, but both lists cannot be removed in place; removing them requires replacing the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/rds_db_cluster_endpoint#excluded_members RdsDbClusterEndpointA#excluded_members}

---

##### `staticMembers`<sup>Optional</sup> <a name="staticMembers" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.staticMembers"></a>

```java
public java.util.List<java.lang.String> getStaticMembers();
```

- *Type:* java.util.List<java.lang.String>

List of DB instance identifiers that are part of the custom endpoint group.

Once either member list is set, it can be changed or replaced by the other list, but both lists cannot be removed in place; removing them requires replacing the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/rds_db_cluster_endpoint#static_members RdsDbClusterEndpointA#static_members}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.tags"></a>

```java
public IResolvable|java.util.List<RdsDbClusterEndpointTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTags">RdsDbClusterEndpointTags</a>>

The tags to be assigned to the DB cluster endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/rds_db_cluster_endpoint#tags RdsDbClusterEndpointA#tags}

---

### RdsDbClusterEndpointTags <a name="RdsDbClusterEndpointTags" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.rds_db_cluster_endpoint.RdsDbClusterEndpointTags;

RdsDbClusterEndpointTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/rds_db_cluster_endpoint#key RdsDbClusterEndpointA#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/rds_db_cluster_endpoint#value RdsDbClusterEndpointA#value}

---

## Classes <a name="Classes" id="Classes"></a>

### RdsDbClusterEndpointTagsList <a name="RdsDbClusterEndpointTagsList" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.rds_db_cluster_endpoint.RdsDbClusterEndpointTagsList;

new RdsDbClusterEndpointTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.get"></a>

```java
public RdsDbClusterEndpointTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTags">RdsDbClusterEndpointTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<RdsDbClusterEndpointTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTags">RdsDbClusterEndpointTags</a>>

---


### RdsDbClusterEndpointTagsOutputReference <a name="RdsDbClusterEndpointTagsOutputReference" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.rds_db_cluster_endpoint.RdsDbClusterEndpointTagsOutputReference;

new RdsDbClusterEndpointTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTags">RdsDbClusterEndpointTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|RdsDbClusterEndpointTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTags">RdsDbClusterEndpointTags</a>

---



