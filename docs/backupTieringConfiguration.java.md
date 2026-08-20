# `backupTieringConfiguration` Submodule <a name="`backupTieringConfiguration` Submodule" id="@cdktn/provider-awscc.backupTieringConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BackupTieringConfiguration <a name="BackupTieringConfiguration" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_tiering_configuration awscc_backup_tiering_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.backup_tiering_configuration.BackupTieringConfiguration;

BackupTieringConfiguration.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .backupVaultName(java.lang.String)
    .resourceSelection(IResolvable|java.util.List<BackupTieringConfigurationResourceSelection>)
    .tieringConfigurationName(java.lang.String)
//  .tieringConfigurationTags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.Initializer.parameter.backupVaultName">backupVaultName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_tiering_configuration#backup_vault_name BackupTieringConfiguration#backup_vault_name}. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.Initializer.parameter.resourceSelection">resourceSelection</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelection">BackupTieringConfigurationResourceSelection</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_tiering_configuration#resource_selection BackupTieringConfiguration#resource_selection}. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.Initializer.parameter.tieringConfigurationName">tieringConfigurationName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_tiering_configuration#tiering_configuration_name BackupTieringConfiguration#tiering_configuration_name}. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.Initializer.parameter.tieringConfigurationTags">tieringConfigurationTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_tiering_configuration#tiering_configuration_tags BackupTieringConfiguration#tiering_configuration_tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `backupVaultName`<sup>Required</sup> <a name="backupVaultName" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.Initializer.parameter.backupVaultName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_tiering_configuration#backup_vault_name BackupTieringConfiguration#backup_vault_name}.

---

##### `resourceSelection`<sup>Required</sup> <a name="resourceSelection" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.Initializer.parameter.resourceSelection"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelection">BackupTieringConfigurationResourceSelection</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_tiering_configuration#resource_selection BackupTieringConfiguration#resource_selection}.

---

##### `tieringConfigurationName`<sup>Required</sup> <a name="tieringConfigurationName" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.Initializer.parameter.tieringConfigurationName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_tiering_configuration#tiering_configuration_name BackupTieringConfiguration#tiering_configuration_name}.

---

##### `tieringConfigurationTags`<sup>Optional</sup> <a name="tieringConfigurationTags" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.Initializer.parameter.tieringConfigurationTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_tiering_configuration#tiering_configuration_tags BackupTieringConfiguration#tiering_configuration_tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.putResourceSelection">putResourceSelection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.resetTieringConfigurationTags">resetTieringConfigurationTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putResourceSelection` <a name="putResourceSelection" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.putResourceSelection"></a>

```java
public void putResourceSelection(IResolvable|java.util.List<BackupTieringConfigurationResourceSelection> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.putResourceSelection.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelection">BackupTieringConfigurationResourceSelection</a>>

---

##### `resetTieringConfigurationTags` <a name="resetTieringConfigurationTags" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.resetTieringConfigurationTags"></a>

```java
public void resetTieringConfigurationTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BackupTieringConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.isConstruct"></a>

```java
import io.cdktn.providers.awscc.backup_tiering_configuration.BackupTieringConfiguration;

BackupTieringConfiguration.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.backup_tiering_configuration.BackupTieringConfiguration;

BackupTieringConfiguration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.backup_tiering_configuration.BackupTieringConfiguration;

BackupTieringConfiguration.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.backup_tiering_configuration.BackupTieringConfiguration;

BackupTieringConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),BackupTieringConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a BackupTieringConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the BackupTieringConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing BackupTieringConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_tiering_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the BackupTieringConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.creationTime">creationTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.lastUpdatedTime">lastUpdatedTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.resourceSelection">resourceSelection</a></code> | <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList">BackupTieringConfigurationResourceSelectionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.tieringConfigurationArn">tieringConfigurationArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.backupVaultNameInput">backupVaultNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.resourceSelectionInput">resourceSelectionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelection">BackupTieringConfigurationResourceSelection</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.tieringConfigurationNameInput">tieringConfigurationNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.tieringConfigurationTagsInput">tieringConfigurationTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.backupVaultName">backupVaultName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.tieringConfigurationName">tieringConfigurationName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.tieringConfigurationTags">tieringConfigurationTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.creationTime"></a>

```java
public java.lang.String getCreationTime();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lastUpdatedTime`<sup>Required</sup> <a name="lastUpdatedTime" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.lastUpdatedTime"></a>

```java
public java.lang.String getLastUpdatedTime();
```

- *Type:* java.lang.String

---

##### `resourceSelection`<sup>Required</sup> <a name="resourceSelection" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.resourceSelection"></a>

```java
public BackupTieringConfigurationResourceSelectionList getResourceSelection();
```

- *Type:* <a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList">BackupTieringConfigurationResourceSelectionList</a>

---

##### `tieringConfigurationArn`<sup>Required</sup> <a name="tieringConfigurationArn" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.tieringConfigurationArn"></a>

```java
public java.lang.String getTieringConfigurationArn();
```

- *Type:* java.lang.String

---

##### `backupVaultNameInput`<sup>Optional</sup> <a name="backupVaultNameInput" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.backupVaultNameInput"></a>

```java
public java.lang.String getBackupVaultNameInput();
```

- *Type:* java.lang.String

---

##### `resourceSelectionInput`<sup>Optional</sup> <a name="resourceSelectionInput" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.resourceSelectionInput"></a>

```java
public IResolvable|java.util.List<BackupTieringConfigurationResourceSelection> getResourceSelectionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelection">BackupTieringConfigurationResourceSelection</a>>

---

##### `tieringConfigurationNameInput`<sup>Optional</sup> <a name="tieringConfigurationNameInput" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.tieringConfigurationNameInput"></a>

```java
public java.lang.String getTieringConfigurationNameInput();
```

- *Type:* java.lang.String

---

##### `tieringConfigurationTagsInput`<sup>Optional</sup> <a name="tieringConfigurationTagsInput" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.tieringConfigurationTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTieringConfigurationTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `backupVaultName`<sup>Required</sup> <a name="backupVaultName" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.backupVaultName"></a>

```java
public java.lang.String getBackupVaultName();
```

- *Type:* java.lang.String

---

##### `tieringConfigurationName`<sup>Required</sup> <a name="tieringConfigurationName" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.tieringConfigurationName"></a>

```java
public java.lang.String getTieringConfigurationName();
```

- *Type:* java.lang.String

---

##### `tieringConfigurationTags`<sup>Required</sup> <a name="tieringConfigurationTags" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.tieringConfigurationTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTieringConfigurationTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### BackupTieringConfigurationConfig <a name="BackupTieringConfigurationConfig" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.backup_tiering_configuration.BackupTieringConfigurationConfig;

BackupTieringConfigurationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .backupVaultName(java.lang.String)
    .resourceSelection(IResolvable|java.util.List<BackupTieringConfigurationResourceSelection>)
    .tieringConfigurationName(java.lang.String)
//  .tieringConfigurationTags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationConfig.property.backupVaultName">backupVaultName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_tiering_configuration#backup_vault_name BackupTieringConfiguration#backup_vault_name}. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationConfig.property.resourceSelection">resourceSelection</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelection">BackupTieringConfigurationResourceSelection</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_tiering_configuration#resource_selection BackupTieringConfiguration#resource_selection}. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationConfig.property.tieringConfigurationName">tieringConfigurationName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_tiering_configuration#tiering_configuration_name BackupTieringConfiguration#tiering_configuration_name}. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationConfig.property.tieringConfigurationTags">tieringConfigurationTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_tiering_configuration#tiering_configuration_tags BackupTieringConfiguration#tiering_configuration_tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `backupVaultName`<sup>Required</sup> <a name="backupVaultName" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationConfig.property.backupVaultName"></a>

```java
public java.lang.String getBackupVaultName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_tiering_configuration#backup_vault_name BackupTieringConfiguration#backup_vault_name}.

---

##### `resourceSelection`<sup>Required</sup> <a name="resourceSelection" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationConfig.property.resourceSelection"></a>

```java
public IResolvable|java.util.List<BackupTieringConfigurationResourceSelection> getResourceSelection();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelection">BackupTieringConfigurationResourceSelection</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_tiering_configuration#resource_selection BackupTieringConfiguration#resource_selection}.

---

##### `tieringConfigurationName`<sup>Required</sup> <a name="tieringConfigurationName" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationConfig.property.tieringConfigurationName"></a>

```java
public java.lang.String getTieringConfigurationName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_tiering_configuration#tiering_configuration_name BackupTieringConfiguration#tiering_configuration_name}.

---

##### `tieringConfigurationTags`<sup>Optional</sup> <a name="tieringConfigurationTags" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationConfig.property.tieringConfigurationTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTieringConfigurationTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_tiering_configuration#tiering_configuration_tags BackupTieringConfiguration#tiering_configuration_tags}.

---

### BackupTieringConfigurationResourceSelection <a name="BackupTieringConfigurationResourceSelection" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelection.Initializer"></a>

```java
import io.cdktn.providers.awscc.backup_tiering_configuration.BackupTieringConfigurationResourceSelection;

BackupTieringConfigurationResourceSelection.builder()
    .resources(java.util.List<java.lang.String>)
    .resourceType(java.lang.String)
    .tieringDownSettingsInDays(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelection.property.resources">resources</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_tiering_configuration#resources BackupTieringConfiguration#resources}. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelection.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_tiering_configuration#resource_type BackupTieringConfiguration#resource_type}. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelection.property.tieringDownSettingsInDays">tieringDownSettingsInDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_tiering_configuration#tiering_down_settings_in_days BackupTieringConfiguration#tiering_down_settings_in_days}. |

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelection.property.resources"></a>

```java
public java.util.List<java.lang.String> getResources();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_tiering_configuration#resources BackupTieringConfiguration#resources}.

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelection.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_tiering_configuration#resource_type BackupTieringConfiguration#resource_type}.

---

##### `tieringDownSettingsInDays`<sup>Required</sup> <a name="tieringDownSettingsInDays" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelection.property.tieringDownSettingsInDays"></a>

```java
public java.lang.Number getTieringDownSettingsInDays();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_tiering_configuration#tiering_down_settings_in_days BackupTieringConfiguration#tiering_down_settings_in_days}.

---

## Classes <a name="Classes" id="Classes"></a>

### BackupTieringConfigurationResourceSelectionList <a name="BackupTieringConfigurationResourceSelectionList" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList.Initializer"></a>

```java
import io.cdktn.providers.awscc.backup_tiering_configuration.BackupTieringConfigurationResourceSelectionList;

new BackupTieringConfigurationResourceSelectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList.get"></a>

```java
public BackupTieringConfigurationResourceSelectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelection">BackupTieringConfigurationResourceSelection</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BackupTieringConfigurationResourceSelection> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelection">BackupTieringConfigurationResourceSelection</a>>

---


### BackupTieringConfigurationResourceSelectionOutputReference <a name="BackupTieringConfigurationResourceSelectionOutputReference" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.backup_tiering_configuration.BackupTieringConfigurationResourceSelectionOutputReference;

new BackupTieringConfigurationResourceSelectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.property.resourcesInput">resourcesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.property.resourceTypeInput">resourceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.property.tieringDownSettingsInDaysInput">tieringDownSettingsInDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.property.resources">resources</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.property.tieringDownSettingsInDays">tieringDownSettingsInDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelection">BackupTieringConfigurationResourceSelection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `resourcesInput`<sup>Optional</sup> <a name="resourcesInput" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.property.resourcesInput"></a>

```java
public java.util.List<java.lang.String> getResourcesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.property.resourceTypeInput"></a>

```java
public java.lang.String getResourceTypeInput();
```

- *Type:* java.lang.String

---

##### `tieringDownSettingsInDaysInput`<sup>Optional</sup> <a name="tieringDownSettingsInDaysInput" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.property.tieringDownSettingsInDaysInput"></a>

```java
public java.lang.Number getTieringDownSettingsInDaysInput();
```

- *Type:* java.lang.Number

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.property.resources"></a>

```java
public java.util.List<java.lang.String> getResources();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

---

##### `tieringDownSettingsInDays`<sup>Required</sup> <a name="tieringDownSettingsInDays" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.property.tieringDownSettingsInDays"></a>

```java
public java.lang.Number getTieringDownSettingsInDays();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.property.internalValue"></a>

```java
public IResolvable|BackupTieringConfigurationResourceSelection getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelection">BackupTieringConfigurationResourceSelection</a>

---



