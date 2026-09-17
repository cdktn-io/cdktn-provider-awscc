# `redshiftSnapshotCopyGrant` Submodule <a name="`redshiftSnapshotCopyGrant` Submodule" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedshiftSnapshotCopyGrant <a name="RedshiftSnapshotCopyGrant" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/redshift_snapshot_copy_grant awscc_redshift_snapshot_copy_grant}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.Initializer"></a>

```java
import io.cdktn.providers.awscc.redshift_snapshot_copy_grant.RedshiftSnapshotCopyGrant;

RedshiftSnapshotCopyGrant.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .snapshotCopyGrantName(java.lang.String)
//  .kmsKeyId(java.lang.String)
//  .tags(IResolvable|java.util.List<RedshiftSnapshotCopyGrantTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.Initializer.parameter.snapshotCopyGrantName">snapshotCopyGrantName</a></code> | <code>java.lang.String</code> | The name of the snapshot copy grant. This name must be unique in the region for the AWS account. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.Initializer.parameter.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | The unique identifier of the encrypted symmetric key to which to grant Amazon Redshift permission. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTags">RedshiftSnapshotCopyGrantTags</a>></code> | A list of tag instances. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `snapshotCopyGrantName`<sup>Required</sup> <a name="snapshotCopyGrantName" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.Initializer.parameter.snapshotCopyGrantName"></a>

- *Type:* java.lang.String

The name of the snapshot copy grant. This name must be unique in the region for the AWS account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/redshift_snapshot_copy_grant#snapshot_copy_grant_name RedshiftSnapshotCopyGrant#snapshot_copy_grant_name}

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.Initializer.parameter.kmsKeyId"></a>

- *Type:* java.lang.String

The unique identifier of the encrypted symmetric key to which to grant Amazon Redshift permission.

If no key is specified, the default key is used. Marked writeOnly because Create accepts aliases/key-ids but Describe returns the resolved key ARN, which would fail drift detection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/redshift_snapshot_copy_grant#kms_key_id RedshiftSnapshotCopyGrant#kms_key_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTags">RedshiftSnapshotCopyGrantTags</a>>

A list of tag instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/redshift_snapshot_copy_grant#tags RedshiftSnapshotCopyGrant#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<RedshiftSnapshotCopyGrantTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTags">RedshiftSnapshotCopyGrantTags</a>>

---

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.resetKmsKeyId"></a>

```java
public void resetKmsKeyId()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a RedshiftSnapshotCopyGrant resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.isConstruct"></a>

```java
import io.cdktn.providers.awscc.redshift_snapshot_copy_grant.RedshiftSnapshotCopyGrant;

RedshiftSnapshotCopyGrant.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.redshift_snapshot_copy_grant.RedshiftSnapshotCopyGrant;

RedshiftSnapshotCopyGrant.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.redshift_snapshot_copy_grant.RedshiftSnapshotCopyGrant;

RedshiftSnapshotCopyGrant.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.redshift_snapshot_copy_grant.RedshiftSnapshotCopyGrant;

RedshiftSnapshotCopyGrant.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),RedshiftSnapshotCopyGrant.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a RedshiftSnapshotCopyGrant resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the RedshiftSnapshotCopyGrant to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing RedshiftSnapshotCopyGrant that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/redshift_snapshot_copy_grant#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the RedshiftSnapshotCopyGrant to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList">RedshiftSnapshotCopyGrantTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.snapshotCopyGrantNameInput">snapshotCopyGrantNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTags">RedshiftSnapshotCopyGrantTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.snapshotCopyGrantName">snapshotCopyGrantName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.tags"></a>

```java
public RedshiftSnapshotCopyGrantTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList">RedshiftSnapshotCopyGrantTagsList</a>

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `snapshotCopyGrantNameInput`<sup>Optional</sup> <a name="snapshotCopyGrantNameInput" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.snapshotCopyGrantNameInput"></a>

```java
public java.lang.String getSnapshotCopyGrantNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.tagsInput"></a>

```java
public IResolvable|java.util.List<RedshiftSnapshotCopyGrantTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTags">RedshiftSnapshotCopyGrantTags</a>>

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `snapshotCopyGrantName`<sup>Required</sup> <a name="snapshotCopyGrantName" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.snapshotCopyGrantName"></a>

```java
public java.lang.String getSnapshotCopyGrantName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### RedshiftSnapshotCopyGrantConfig <a name="RedshiftSnapshotCopyGrantConfig" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.redshift_snapshot_copy_grant.RedshiftSnapshotCopyGrantConfig;

RedshiftSnapshotCopyGrantConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .snapshotCopyGrantName(java.lang.String)
//  .kmsKeyId(java.lang.String)
//  .tags(IResolvable|java.util.List<RedshiftSnapshotCopyGrantTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig.property.snapshotCopyGrantName">snapshotCopyGrantName</a></code> | <code>java.lang.String</code> | The name of the snapshot copy grant. This name must be unique in the region for the AWS account. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | The unique identifier of the encrypted symmetric key to which to grant Amazon Redshift permission. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTags">RedshiftSnapshotCopyGrantTags</a>></code> | A list of tag instances. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `snapshotCopyGrantName`<sup>Required</sup> <a name="snapshotCopyGrantName" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig.property.snapshotCopyGrantName"></a>

```java
public java.lang.String getSnapshotCopyGrantName();
```

- *Type:* java.lang.String

The name of the snapshot copy grant. This name must be unique in the region for the AWS account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/redshift_snapshot_copy_grant#snapshot_copy_grant_name RedshiftSnapshotCopyGrant#snapshot_copy_grant_name}

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

The unique identifier of the encrypted symmetric key to which to grant Amazon Redshift permission.

If no key is specified, the default key is used. Marked writeOnly because Create accepts aliases/key-ids but Describe returns the resolved key ARN, which would fail drift detection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/redshift_snapshot_copy_grant#kms_key_id RedshiftSnapshotCopyGrant#kms_key_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig.property.tags"></a>

```java
public IResolvable|java.util.List<RedshiftSnapshotCopyGrantTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTags">RedshiftSnapshotCopyGrantTags</a>>

A list of tag instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/redshift_snapshot_copy_grant#tags RedshiftSnapshotCopyGrant#tags}

---

### RedshiftSnapshotCopyGrantTags <a name="RedshiftSnapshotCopyGrantTags" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.redshift_snapshot_copy_grant.RedshiftSnapshotCopyGrantTags;

RedshiftSnapshotCopyGrantTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTags.property.key">key</a></code> | <code>java.lang.String</code> | The key, or name, for the resource tag. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the resource tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key, or name, for the resource tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/redshift_snapshot_copy_grant#key RedshiftSnapshotCopyGrant#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the resource tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/redshift_snapshot_copy_grant#value RedshiftSnapshotCopyGrant#value}

---

## Classes <a name="Classes" id="Classes"></a>

### RedshiftSnapshotCopyGrantTagsList <a name="RedshiftSnapshotCopyGrantTagsList" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.redshift_snapshot_copy_grant.RedshiftSnapshotCopyGrantTagsList;

new RedshiftSnapshotCopyGrantTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.get"></a>

```java
public RedshiftSnapshotCopyGrantTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTags">RedshiftSnapshotCopyGrantTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<RedshiftSnapshotCopyGrantTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTags">RedshiftSnapshotCopyGrantTags</a>>

---


### RedshiftSnapshotCopyGrantTagsOutputReference <a name="RedshiftSnapshotCopyGrantTagsOutputReference" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.redshift_snapshot_copy_grant.RedshiftSnapshotCopyGrantTagsOutputReference;

new RedshiftSnapshotCopyGrantTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTags">RedshiftSnapshotCopyGrantTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|RedshiftSnapshotCopyGrantTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTags">RedshiftSnapshotCopyGrantTags</a>

---



