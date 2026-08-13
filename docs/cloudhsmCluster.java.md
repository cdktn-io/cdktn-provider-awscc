# `cloudhsmCluster` Submodule <a name="`cloudhsmCluster` Submodule" id="@cdktn/provider-awscc.cloudhsmCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudhsmCluster <a name="CloudhsmCluster" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudhsm_cluster awscc_cloudhsm_cluster}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudhsm_cluster.CloudhsmCluster;

CloudhsmCluster.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .hsmType(java.lang.String)
//  .backupRetentionPolicy(CloudhsmClusterBackupRetentionPolicy)
//  .mode(java.lang.String)
//  .networkType(java.lang.String)
//  .subnetIds(java.util.List<java.lang.String>)
//  .tags(IResolvable|java.util.List<CloudhsmClusterTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.Initializer.parameter.hsmType">hsmType</a></code> | <code>java.lang.String</code> | The type of HSM to use in the cluster. |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.Initializer.parameter.backupRetentionPolicy">backupRetentionPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterBackupRetentionPolicy">CloudhsmClusterBackupRetentionPolicy</a></code> | A policy that defines how the service retains backups. |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.Initializer.parameter.mode">mode</a></code> | <code>java.lang.String</code> | The mode to use in the cluster. |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.Initializer.parameter.networkType">networkType</a></code> | <code>java.lang.String</code> | The NetworkType to create a cluster with. |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.Initializer.parameter.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | The identifiers (IDs) of the subnets where the cluster is created. You must specify at least one subnet. |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTags">CloudhsmClusterTags</a>></code> | Tags to apply to the CloudHSM cluster. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `hsmType`<sup>Required</sup> <a name="hsmType" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.Initializer.parameter.hsmType"></a>

- *Type:* java.lang.String

The type of HSM to use in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudhsm_cluster#hsm_type CloudhsmCluster#hsm_type}

---

##### `backupRetentionPolicy`<sup>Optional</sup> <a name="backupRetentionPolicy" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.Initializer.parameter.backupRetentionPolicy"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterBackupRetentionPolicy">CloudhsmClusterBackupRetentionPolicy</a>

A policy that defines how the service retains backups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudhsm_cluster#backup_retention_policy CloudhsmCluster#backup_retention_policy}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.Initializer.parameter.mode"></a>

- *Type:* java.lang.String

The mode to use in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudhsm_cluster#mode CloudhsmCluster#mode}

---

##### `networkType`<sup>Optional</sup> <a name="networkType" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.Initializer.parameter.networkType"></a>

- *Type:* java.lang.String

The NetworkType to create a cluster with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudhsm_cluster#network_type CloudhsmCluster#network_type}

---

##### `subnetIds`<sup>Optional</sup> <a name="subnetIds" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.Initializer.parameter.subnetIds"></a>

- *Type:* java.util.List<java.lang.String>

The identifiers (IDs) of the subnets where the cluster is created. You must specify at least one subnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudhsm_cluster#subnet_ids CloudhsmCluster#subnet_ids}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTags">CloudhsmClusterTags</a>>

Tags to apply to the CloudHSM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudhsm_cluster#tags CloudhsmCluster#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.putBackupRetentionPolicy">putBackupRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.resetBackupRetentionPolicy">resetBackupRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.resetNetworkType">resetNetworkType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.resetSubnetIds">resetSubnetIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBackupRetentionPolicy` <a name="putBackupRetentionPolicy" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.putBackupRetentionPolicy"></a>

```java
public void putBackupRetentionPolicy(CloudhsmClusterBackupRetentionPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.putBackupRetentionPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterBackupRetentionPolicy">CloudhsmClusterBackupRetentionPolicy</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<CloudhsmClusterTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTags">CloudhsmClusterTags</a>>

---

##### `resetBackupRetentionPolicy` <a name="resetBackupRetentionPolicy" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.resetBackupRetentionPolicy"></a>

```java
public void resetBackupRetentionPolicy()
```

##### `resetMode` <a name="resetMode" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.resetMode"></a>

```java
public void resetMode()
```

##### `resetNetworkType` <a name="resetNetworkType" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.resetNetworkType"></a>

```java
public void resetNetworkType()
```

##### `resetSubnetIds` <a name="resetSubnetIds" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.resetSubnetIds"></a>

```java
public void resetSubnetIds()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CloudhsmCluster resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.isConstruct"></a>

```java
import io.cdktn.providers.awscc.cloudhsm_cluster.CloudhsmCluster;

CloudhsmCluster.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.cloudhsm_cluster.CloudhsmCluster;

CloudhsmCluster.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.cloudhsm_cluster.CloudhsmCluster;

CloudhsmCluster.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.cloudhsm_cluster.CloudhsmCluster;

CloudhsmCluster.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CloudhsmCluster.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a CloudhsmCluster resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CloudhsmCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CloudhsmCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudhsm_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the CloudhsmCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.property.backupPolicy">backupPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.property.backupRetentionPolicy">backupRetentionPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterBackupRetentionPolicyOutputReference">CloudhsmClusterBackupRetentionPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.property.securityGroup">securityGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.property.subnetMapping">subnetMapping</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTagsList">CloudhsmClusterTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.property.backupRetentionPolicyInput">backupRetentionPolicyInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterBackupRetentionPolicy">CloudhsmClusterBackupRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.property.hsmTypeInput">hsmTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.property.modeInput">modeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.property.networkTypeInput">networkTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.property.subnetIdsInput">subnetIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTags">CloudhsmClusterTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.property.hsmType">hsmType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.property.networkType">networkType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `backupPolicy`<sup>Required</sup> <a name="backupPolicy" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.property.backupPolicy"></a>

```java
public java.lang.String getBackupPolicy();
```

- *Type:* java.lang.String

---

##### `backupRetentionPolicy`<sup>Required</sup> <a name="backupRetentionPolicy" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.property.backupRetentionPolicy"></a>

```java
public CloudhsmClusterBackupRetentionPolicyOutputReference getBackupRetentionPolicy();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterBackupRetentionPolicyOutputReference">CloudhsmClusterBackupRetentionPolicyOutputReference</a>

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `securityGroup`<sup>Required</sup> <a name="securityGroup" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.property.securityGroup"></a>

```java
public java.lang.String getSecurityGroup();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `subnetMapping`<sup>Required</sup> <a name="subnetMapping" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.property.subnetMapping"></a>

```java
public StringMap getSubnetMapping();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.property.tags"></a>

```java
public CloudhsmClusterTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTagsList">CloudhsmClusterTagsList</a>

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

---

##### `backupRetentionPolicyInput`<sup>Optional</sup> <a name="backupRetentionPolicyInput" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.property.backupRetentionPolicyInput"></a>

```java
public IResolvable|CloudhsmClusterBackupRetentionPolicy getBackupRetentionPolicyInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterBackupRetentionPolicy">CloudhsmClusterBackupRetentionPolicy</a>

---

##### `hsmTypeInput`<sup>Optional</sup> <a name="hsmTypeInput" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.property.hsmTypeInput"></a>

```java
public java.lang.String getHsmTypeInput();
```

- *Type:* java.lang.String

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.property.modeInput"></a>

```java
public java.lang.String getModeInput();
```

- *Type:* java.lang.String

---

##### `networkTypeInput`<sup>Optional</sup> <a name="networkTypeInput" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.property.networkTypeInput"></a>

```java
public java.lang.String getNetworkTypeInput();
```

- *Type:* java.lang.String

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.property.subnetIdsInput"></a>

```java
public java.util.List<java.lang.String> getSubnetIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.property.tagsInput"></a>

```java
public IResolvable|java.util.List<CloudhsmClusterTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTags">CloudhsmClusterTags</a>>

---

##### `hsmType`<sup>Required</sup> <a name="hsmType" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.property.hsmType"></a>

```java
public java.lang.String getHsmType();
```

- *Type:* java.lang.String

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `networkType`<sup>Required</sup> <a name="networkType" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.property.networkType"></a>

```java
public java.lang.String getNetworkType();
```

- *Type:* java.lang.String

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmCluster.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CloudhsmClusterBackupRetentionPolicy <a name="CloudhsmClusterBackupRetentionPolicy" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterBackupRetentionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterBackupRetentionPolicy.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudhsm_cluster.CloudhsmClusterBackupRetentionPolicy;

CloudhsmClusterBackupRetentionPolicy.builder()
//  .type(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterBackupRetentionPolicy.property.type">type</a></code> | <code>java.lang.String</code> | The type of backup retention policy. |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterBackupRetentionPolicy.property.value">value</a></code> | <code>java.lang.String</code> | Use a value between 7 - 379. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterBackupRetentionPolicy.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of backup retention policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudhsm_cluster#type CloudhsmCluster#type}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterBackupRetentionPolicy.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Use a value between 7 - 379.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudhsm_cluster#value CloudhsmCluster#value}

---

### CloudhsmClusterConfig <a name="CloudhsmClusterConfig" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudhsm_cluster.CloudhsmClusterConfig;

CloudhsmClusterConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .hsmType(java.lang.String)
//  .backupRetentionPolicy(CloudhsmClusterBackupRetentionPolicy)
//  .mode(java.lang.String)
//  .networkType(java.lang.String)
//  .subnetIds(java.util.List<java.lang.String>)
//  .tags(IResolvable|java.util.List<CloudhsmClusterTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterConfig.property.hsmType">hsmType</a></code> | <code>java.lang.String</code> | The type of HSM to use in the cluster. |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterConfig.property.backupRetentionPolicy">backupRetentionPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterBackupRetentionPolicy">CloudhsmClusterBackupRetentionPolicy</a></code> | A policy that defines how the service retains backups. |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterConfig.property.mode">mode</a></code> | <code>java.lang.String</code> | The mode to use in the cluster. |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterConfig.property.networkType">networkType</a></code> | <code>java.lang.String</code> | The NetworkType to create a cluster with. |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterConfig.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | The identifiers (IDs) of the subnets where the cluster is created. You must specify at least one subnet. |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTags">CloudhsmClusterTags</a>></code> | Tags to apply to the CloudHSM cluster. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `hsmType`<sup>Required</sup> <a name="hsmType" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterConfig.property.hsmType"></a>

```java
public java.lang.String getHsmType();
```

- *Type:* java.lang.String

The type of HSM to use in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudhsm_cluster#hsm_type CloudhsmCluster#hsm_type}

---

##### `backupRetentionPolicy`<sup>Optional</sup> <a name="backupRetentionPolicy" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterConfig.property.backupRetentionPolicy"></a>

```java
public CloudhsmClusterBackupRetentionPolicy getBackupRetentionPolicy();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterBackupRetentionPolicy">CloudhsmClusterBackupRetentionPolicy</a>

A policy that defines how the service retains backups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudhsm_cluster#backup_retention_policy CloudhsmCluster#backup_retention_policy}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterConfig.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

The mode to use in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudhsm_cluster#mode CloudhsmCluster#mode}

---

##### `networkType`<sup>Optional</sup> <a name="networkType" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterConfig.property.networkType"></a>

```java
public java.lang.String getNetworkType();
```

- *Type:* java.lang.String

The NetworkType to create a cluster with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudhsm_cluster#network_type CloudhsmCluster#network_type}

---

##### `subnetIds`<sup>Optional</sup> <a name="subnetIds" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterConfig.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

The identifiers (IDs) of the subnets where the cluster is created. You must specify at least one subnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudhsm_cluster#subnet_ids CloudhsmCluster#subnet_ids}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterConfig.property.tags"></a>

```java
public IResolvable|java.util.List<CloudhsmClusterTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTags">CloudhsmClusterTags</a>>

Tags to apply to the CloudHSM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudhsm_cluster#tags CloudhsmCluster#tags}

---

### CloudhsmClusterTags <a name="CloudhsmClusterTags" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudhsm_cluster.CloudhsmClusterTags;

CloudhsmClusterTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTags.property.key">key</a></code> | <code>java.lang.String</code> | The key of the tag. |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTags.property.value">value</a></code> | <code>java.lang.String</code> | The value of the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudhsm_cluster#key CloudhsmCluster#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudhsm_cluster#value CloudhsmCluster#value}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudhsmClusterBackupRetentionPolicyOutputReference <a name="CloudhsmClusterBackupRetentionPolicyOutputReference" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterBackupRetentionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterBackupRetentionPolicyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudhsm_cluster.CloudhsmClusterBackupRetentionPolicyOutputReference;

new CloudhsmClusterBackupRetentionPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterBackupRetentionPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterBackupRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterBackupRetentionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterBackupRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterBackupRetentionPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterBackupRetentionPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterBackupRetentionPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterBackupRetentionPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterBackupRetentionPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterBackupRetentionPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterBackupRetentionPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterBackupRetentionPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterBackupRetentionPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterBackupRetentionPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterBackupRetentionPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterBackupRetentionPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterBackupRetentionPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterBackupRetentionPolicyOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterBackupRetentionPolicyOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterBackupRetentionPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterBackupRetentionPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterBackupRetentionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterBackupRetentionPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterBackupRetentionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterBackupRetentionPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterBackupRetentionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterBackupRetentionPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterBackupRetentionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterBackupRetentionPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterBackupRetentionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterBackupRetentionPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterBackupRetentionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterBackupRetentionPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterBackupRetentionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterBackupRetentionPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterBackupRetentionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterBackupRetentionPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterBackupRetentionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterBackupRetentionPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterBackupRetentionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterBackupRetentionPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterBackupRetentionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterBackupRetentionPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterBackupRetentionPolicyOutputReference.resetType"></a>

```java
public void resetType()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterBackupRetentionPolicyOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterBackupRetentionPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterBackupRetentionPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterBackupRetentionPolicyOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterBackupRetentionPolicyOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterBackupRetentionPolicyOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterBackupRetentionPolicyOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterBackupRetentionPolicyOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterBackupRetentionPolicy">CloudhsmClusterBackupRetentionPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterBackupRetentionPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterBackupRetentionPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterBackupRetentionPolicyOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterBackupRetentionPolicyOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterBackupRetentionPolicyOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterBackupRetentionPolicyOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterBackupRetentionPolicyOutputReference.property.internalValue"></a>

```java
public IResolvable|CloudhsmClusterBackupRetentionPolicy getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterBackupRetentionPolicy">CloudhsmClusterBackupRetentionPolicy</a>

---


### CloudhsmClusterTagsList <a name="CloudhsmClusterTagsList" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudhsm_cluster.CloudhsmClusterTagsList;

new CloudhsmClusterTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTagsList.get"></a>

```java
public CloudhsmClusterTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTags">CloudhsmClusterTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CloudhsmClusterTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTags">CloudhsmClusterTags</a>>

---


### CloudhsmClusterTagsOutputReference <a name="CloudhsmClusterTagsOutputReference" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudhsm_cluster.CloudhsmClusterTagsOutputReference;

new CloudhsmClusterTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTags">CloudhsmClusterTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|CloudhsmClusterTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudhsmCluster.CloudhsmClusterTags">CloudhsmClusterTags</a>

---



