# `efsFileSystem` Submodule <a name="`efsFileSystem` Submodule" id="@cdktn/provider-awscc.efsFileSystem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EfsFileSystem <a name="EfsFileSystem" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/efs_file_system awscc_efs_file_system}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EfsFileSystem(Construct Scope, string Id, EfsFileSystemConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig">EfsFileSystemConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig">EfsFileSystemConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.putBackupPolicy">PutBackupPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.putFileSystemProtection">PutFileSystemProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.putFileSystemTags">PutFileSystemTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.putLifecyclePolicies">PutLifecyclePolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.putReplicationConfiguration">PutReplicationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetAvailabilityZoneName">ResetAvailabilityZoneName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetBackupPolicy">ResetBackupPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetBypassPolicyLockoutSafetyCheck">ResetBypassPolicyLockoutSafetyCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetEncrypted">ResetEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetFileSystemPolicy">ResetFileSystemPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetFileSystemProtection">ResetFileSystemProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetFileSystemTags">ResetFileSystemTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetLifecyclePolicies">ResetLifecyclePolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetPerformanceMode">ResetPerformanceMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetProvisionedThroughputInMibps">ResetProvisionedThroughputInMibps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetReplicationConfiguration">ResetReplicationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetThroughputMode">ResetThroughputMode</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBackupPolicy` <a name="PutBackupPolicy" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.putBackupPolicy"></a>

```csharp
private void PutBackupPolicy(EfsFileSystemBackupPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.putBackupPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicy">EfsFileSystemBackupPolicy</a>

---

##### `PutFileSystemProtection` <a name="PutFileSystemProtection" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.putFileSystemProtection"></a>

```csharp
private void PutFileSystemProtection(EfsFileSystemFileSystemProtection Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.putFileSystemProtection.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtection">EfsFileSystemFileSystemProtection</a>

---

##### `PutFileSystemTags` <a name="PutFileSystemTags" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.putFileSystemTags"></a>

```csharp
private void PutFileSystemTags(IResolvable|EfsFileSystemFileSystemTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.putFileSystemTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTags">EfsFileSystemFileSystemTags</a>[]

---

##### `PutLifecyclePolicies` <a name="PutLifecyclePolicies" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.putLifecyclePolicies"></a>

```csharp
private void PutLifecyclePolicies(IResolvable|EfsFileSystemLifecyclePolicies[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.putLifecyclePolicies.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePolicies">EfsFileSystemLifecyclePolicies</a>[]

---

##### `PutReplicationConfiguration` <a name="PutReplicationConfiguration" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.putReplicationConfiguration"></a>

```csharp
private void PutReplicationConfiguration(EfsFileSystemReplicationConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.putReplicationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfiguration">EfsFileSystemReplicationConfiguration</a>

---

##### `ResetAvailabilityZoneName` <a name="ResetAvailabilityZoneName" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetAvailabilityZoneName"></a>

```csharp
private void ResetAvailabilityZoneName()
```

##### `ResetBackupPolicy` <a name="ResetBackupPolicy" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetBackupPolicy"></a>

```csharp
private void ResetBackupPolicy()
```

##### `ResetBypassPolicyLockoutSafetyCheck` <a name="ResetBypassPolicyLockoutSafetyCheck" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetBypassPolicyLockoutSafetyCheck"></a>

```csharp
private void ResetBypassPolicyLockoutSafetyCheck()
```

##### `ResetEncrypted` <a name="ResetEncrypted" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetEncrypted"></a>

```csharp
private void ResetEncrypted()
```

##### `ResetFileSystemPolicy` <a name="ResetFileSystemPolicy" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetFileSystemPolicy"></a>

```csharp
private void ResetFileSystemPolicy()
```

##### `ResetFileSystemProtection` <a name="ResetFileSystemProtection" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetFileSystemProtection"></a>

```csharp
private void ResetFileSystemProtection()
```

##### `ResetFileSystemTags` <a name="ResetFileSystemTags" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetFileSystemTags"></a>

```csharp
private void ResetFileSystemTags()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```

##### `ResetLifecyclePolicies` <a name="ResetLifecyclePolicies" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetLifecyclePolicies"></a>

```csharp
private void ResetLifecyclePolicies()
```

##### `ResetPerformanceMode` <a name="ResetPerformanceMode" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetPerformanceMode"></a>

```csharp
private void ResetPerformanceMode()
```

##### `ResetProvisionedThroughputInMibps` <a name="ResetProvisionedThroughputInMibps" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetProvisionedThroughputInMibps"></a>

```csharp
private void ResetProvisionedThroughputInMibps()
```

##### `ResetReplicationConfiguration` <a name="ResetReplicationConfiguration" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetReplicationConfiguration"></a>

```csharp
private void ResetReplicationConfiguration()
```

##### `ResetThroughputMode` <a name="ResetThroughputMode" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetThroughputMode"></a>

```csharp
private void ResetThroughputMode()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a EfsFileSystem resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

EfsFileSystem.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

EfsFileSystem.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

EfsFileSystem.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

EfsFileSystem.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a EfsFileSystem resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EfsFileSystem to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EfsFileSystem that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/efs_file_system#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the EfsFileSystem to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.backupPolicy">BackupPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference">EfsFileSystemBackupPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.fileSystemId">FileSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.fileSystemProtection">FileSystemProtection</a></code> | <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference">EfsFileSystemFileSystemProtectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.fileSystemTags">FileSystemTags</a></code> | <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList">EfsFileSystemFileSystemTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.lifecyclePolicies">LifecyclePolicies</a></code> | <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList">EfsFileSystemLifecyclePoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.replicationConfiguration">ReplicationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference">EfsFileSystemReplicationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.availabilityZoneNameInput">AvailabilityZoneNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.backupPolicyInput">BackupPolicyInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicy">EfsFileSystemBackupPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.bypassPolicyLockoutSafetyCheckInput">BypassPolicyLockoutSafetyCheckInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.encryptedInput">EncryptedInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.fileSystemPolicyInput">FileSystemPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.fileSystemProtectionInput">FileSystemProtectionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtection">EfsFileSystemFileSystemProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.fileSystemTagsInput">FileSystemTagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTags">EfsFileSystemFileSystemTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.lifecyclePoliciesInput">LifecyclePoliciesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePolicies">EfsFileSystemLifecyclePolicies</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.performanceModeInput">PerformanceModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.provisionedThroughputInMibpsInput">ProvisionedThroughputInMibpsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.replicationConfigurationInput">ReplicationConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfiguration">EfsFileSystemReplicationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.throughputModeInput">ThroughputModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.availabilityZoneName">AvailabilityZoneName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.bypassPolicyLockoutSafetyCheck">BypassPolicyLockoutSafetyCheck</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.encrypted">Encrypted</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.fileSystemPolicy">FileSystemPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.performanceMode">PerformanceMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.provisionedThroughputInMibps">ProvisionedThroughputInMibps</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.throughputMode">ThroughputMode</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `BackupPolicy`<sup>Required</sup> <a name="BackupPolicy" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.backupPolicy"></a>

```csharp
public EfsFileSystemBackupPolicyOutputReference BackupPolicy { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference">EfsFileSystemBackupPolicyOutputReference</a>

---

##### `FileSystemId`<sup>Required</sup> <a name="FileSystemId" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.fileSystemId"></a>

```csharp
public string FileSystemId { get; }
```

- *Type:* string

---

##### `FileSystemProtection`<sup>Required</sup> <a name="FileSystemProtection" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.fileSystemProtection"></a>

```csharp
public EfsFileSystemFileSystemProtectionOutputReference FileSystemProtection { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference">EfsFileSystemFileSystemProtectionOutputReference</a>

---

##### `FileSystemTags`<sup>Required</sup> <a name="FileSystemTags" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.fileSystemTags"></a>

```csharp
public EfsFileSystemFileSystemTagsList FileSystemTags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList">EfsFileSystemFileSystemTagsList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LifecyclePolicies`<sup>Required</sup> <a name="LifecyclePolicies" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.lifecyclePolicies"></a>

```csharp
public EfsFileSystemLifecyclePoliciesList LifecyclePolicies { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList">EfsFileSystemLifecyclePoliciesList</a>

---

##### `ReplicationConfiguration`<sup>Required</sup> <a name="ReplicationConfiguration" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.replicationConfiguration"></a>

```csharp
public EfsFileSystemReplicationConfigurationOutputReference ReplicationConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference">EfsFileSystemReplicationConfigurationOutputReference</a>

---

##### `AvailabilityZoneNameInput`<sup>Optional</sup> <a name="AvailabilityZoneNameInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.availabilityZoneNameInput"></a>

```csharp
public string AvailabilityZoneNameInput { get; }
```

- *Type:* string

---

##### `BackupPolicyInput`<sup>Optional</sup> <a name="BackupPolicyInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.backupPolicyInput"></a>

```csharp
public IResolvable|EfsFileSystemBackupPolicy BackupPolicyInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicy">EfsFileSystemBackupPolicy</a>

---

##### `BypassPolicyLockoutSafetyCheckInput`<sup>Optional</sup> <a name="BypassPolicyLockoutSafetyCheckInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.bypassPolicyLockoutSafetyCheckInput"></a>

```csharp
public bool|IResolvable BypassPolicyLockoutSafetyCheckInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EncryptedInput`<sup>Optional</sup> <a name="EncryptedInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.encryptedInput"></a>

```csharp
public bool|IResolvable EncryptedInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `FileSystemPolicyInput`<sup>Optional</sup> <a name="FileSystemPolicyInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.fileSystemPolicyInput"></a>

```csharp
public string FileSystemPolicyInput { get; }
```

- *Type:* string

---

##### `FileSystemProtectionInput`<sup>Optional</sup> <a name="FileSystemProtectionInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.fileSystemProtectionInput"></a>

```csharp
public IResolvable|EfsFileSystemFileSystemProtection FileSystemProtectionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtection">EfsFileSystemFileSystemProtection</a>

---

##### `FileSystemTagsInput`<sup>Optional</sup> <a name="FileSystemTagsInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.fileSystemTagsInput"></a>

```csharp
public IResolvable|EfsFileSystemFileSystemTags[] FileSystemTagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTags">EfsFileSystemFileSystemTags</a>[]

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `LifecyclePoliciesInput`<sup>Optional</sup> <a name="LifecyclePoliciesInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.lifecyclePoliciesInput"></a>

```csharp
public IResolvable|EfsFileSystemLifecyclePolicies[] LifecyclePoliciesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePolicies">EfsFileSystemLifecyclePolicies</a>[]

---

##### `PerformanceModeInput`<sup>Optional</sup> <a name="PerformanceModeInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.performanceModeInput"></a>

```csharp
public string PerformanceModeInput { get; }
```

- *Type:* string

---

##### `ProvisionedThroughputInMibpsInput`<sup>Optional</sup> <a name="ProvisionedThroughputInMibpsInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.provisionedThroughputInMibpsInput"></a>

```csharp
public double ProvisionedThroughputInMibpsInput { get; }
```

- *Type:* double

---

##### `ReplicationConfigurationInput`<sup>Optional</sup> <a name="ReplicationConfigurationInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.replicationConfigurationInput"></a>

```csharp
public IResolvable|EfsFileSystemReplicationConfiguration ReplicationConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfiguration">EfsFileSystemReplicationConfiguration</a>

---

##### `ThroughputModeInput`<sup>Optional</sup> <a name="ThroughputModeInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.throughputModeInput"></a>

```csharp
public string ThroughputModeInput { get; }
```

- *Type:* string

---

##### `AvailabilityZoneName`<sup>Required</sup> <a name="AvailabilityZoneName" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.availabilityZoneName"></a>

```csharp
public string AvailabilityZoneName { get; }
```

- *Type:* string

---

##### `BypassPolicyLockoutSafetyCheck`<sup>Required</sup> <a name="BypassPolicyLockoutSafetyCheck" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.bypassPolicyLockoutSafetyCheck"></a>

```csharp
public bool|IResolvable BypassPolicyLockoutSafetyCheck { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Encrypted`<sup>Required</sup> <a name="Encrypted" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.encrypted"></a>

```csharp
public bool|IResolvable Encrypted { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `FileSystemPolicy`<sup>Required</sup> <a name="FileSystemPolicy" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.fileSystemPolicy"></a>

```csharp
public string FileSystemPolicy { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `PerformanceMode`<sup>Required</sup> <a name="PerformanceMode" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.performanceMode"></a>

```csharp
public string PerformanceMode { get; }
```

- *Type:* string

---

##### `ProvisionedThroughputInMibps`<sup>Required</sup> <a name="ProvisionedThroughputInMibps" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.provisionedThroughputInMibps"></a>

```csharp
public double ProvisionedThroughputInMibps { get; }
```

- *Type:* double

---

##### `ThroughputMode`<sup>Required</sup> <a name="ThroughputMode" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.throughputMode"></a>

```csharp
public string ThroughputMode { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EfsFileSystemBackupPolicy <a name="EfsFileSystemBackupPolicy" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EfsFileSystemBackupPolicy {
    string Status = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicy.property.status">Status</a></code> | <code>string</code> | Set the backup policy status for the file system. |

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicy.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Set the backup policy status for the file system.

* *ENABLED* - Turns automatic backups on for the file system.
* *DISABLED* - Turns automatic backups off for the file system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/efs_file_system#status EfsFileSystem#status}

---

### EfsFileSystemConfig <a name="EfsFileSystemConfig" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EfsFileSystemConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AvailabilityZoneName = null,
    EfsFileSystemBackupPolicy BackupPolicy = null,
    bool|IResolvable BypassPolicyLockoutSafetyCheck = null,
    bool|IResolvable Encrypted = null,
    string FileSystemPolicy = null,
    EfsFileSystemFileSystemProtection FileSystemProtection = null,
    IResolvable|EfsFileSystemFileSystemTags[] FileSystemTags = null,
    string KmsKeyId = null,
    IResolvable|EfsFileSystemLifecyclePolicies[] LifecyclePolicies = null,
    string PerformanceMode = null,
    double ProvisionedThroughputInMibps = null,
    EfsFileSystemReplicationConfiguration ReplicationConfiguration = null,
    string ThroughputMode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.availabilityZoneName">AvailabilityZoneName</a></code> | <code>string</code> | For One Zone file systems, specify the AWS Availability Zone in which to create the file system. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.backupPolicy">BackupPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicy">EfsFileSystemBackupPolicy</a></code> | Use the ``BackupPolicy`` to turn automatic backups on or off for the file system. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.bypassPolicyLockoutSafetyCheck">BypassPolicyLockoutSafetyCheck</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | (Optional) A boolean that specifies whether or not to bypass the ``FileSystemPolicy`` lockout safety check. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.encrypted">Encrypted</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | A Boolean value that, if true, creates an encrypted file system. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.fileSystemPolicy">FileSystemPolicy</a></code> | <code>string</code> | The ``FileSystemPolicy`` for the EFS file system. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.fileSystemProtection">FileSystemProtection</a></code> | <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtection">EfsFileSystemFileSystemProtection</a></code> | Describes the protection on the file system. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.fileSystemTags">FileSystemTags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTags">EfsFileSystemFileSystemTags</a>[]</code> | Use to create one or more tags associated with the file system. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | The ID of the kms-key-long to be used to protect the encrypted file system. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.lifecyclePolicies">LifecyclePolicies</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePolicies">EfsFileSystemLifecyclePolicies</a>[]</code> | An array of ``LifecyclePolicy`` objects that define the file system's ``LifecycleConfiguration`` object. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.performanceMode">PerformanceMode</a></code> | <code>string</code> | The performance mode of the file system. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.provisionedThroughputInMibps">ProvisionedThroughputInMibps</a></code> | <code>double</code> | The throughput, measured in mebibytes per second (MiBps), that you want to provision for a file system that you're creating. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.replicationConfiguration">ReplicationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfiguration">EfsFileSystemReplicationConfiguration</a></code> | Describes the replication configuration for a specific file system. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.throughputMode">ThroughputMode</a></code> | <code>string</code> | Specifies the throughput mode for the file system. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AvailabilityZoneName`<sup>Optional</sup> <a name="AvailabilityZoneName" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.availabilityZoneName"></a>

```csharp
public string AvailabilityZoneName { get; set; }
```

- *Type:* string

For One Zone file systems, specify the AWS Availability Zone in which to create the file system.

Use the format `us-east-1a` to specify the Availability Zone. For more information about One Zone file systems, see [EFS file system types](https://docs.aws.amazon.com/efs/latest/ug/availability-durability.html#file-system-type) in the *Amazon EFS User Guide*.
One Zone file systems are not available in all Availability Zones in AWS-Regions where Amazon EFS is available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/efs_file_system#availability_zone_name EfsFileSystem#availability_zone_name}

---

##### `BackupPolicy`<sup>Optional</sup> <a name="BackupPolicy" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.backupPolicy"></a>

```csharp
public EfsFileSystemBackupPolicy BackupPolicy { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicy">EfsFileSystemBackupPolicy</a>

Use the ``BackupPolicy`` to turn automatic backups on or off for the file system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/efs_file_system#backup_policy EfsFileSystem#backup_policy}

---

##### `BypassPolicyLockoutSafetyCheck`<sup>Optional</sup> <a name="BypassPolicyLockoutSafetyCheck" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.bypassPolicyLockoutSafetyCheck"></a>

```csharp
public bool|IResolvable BypassPolicyLockoutSafetyCheck { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

(Optional) A boolean that specifies whether or not to bypass the ``FileSystemPolicy`` lockout safety check.

The lockout safety check determines whether the policy in the request will lock out, or prevent, the IAM principal that is making the request from making future `PutFileSystemPolicy` requests on this file system. Set `BypassPolicyLockoutSafetyCheck` to `True` only when you intend to prevent the IAM principal that is making the request from making subsequent `PutFileSystemPolicy` requests on this file system. The default value is `False`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/efs_file_system#bypass_policy_lockout_safety_check EfsFileSystem#bypass_policy_lockout_safety_check}

---

##### `Encrypted`<sup>Optional</sup> <a name="Encrypted" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.encrypted"></a>

```csharp
public bool|IResolvable Encrypted { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

A Boolean value that, if true, creates an encrypted file system.

When creating an encrypted file system, you have the option of specifying a KmsKeyId for an existing kms-key-long. If you don't specify a kms-key, then the default kms-key for EFS, `/aws/elasticfilesystem`, is used to protect the encrypted file system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/efs_file_system#encrypted EfsFileSystem#encrypted}

---

##### `FileSystemPolicy`<sup>Optional</sup> <a name="FileSystemPolicy" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.fileSystemPolicy"></a>

```csharp
public string FileSystemPolicy { get; set; }
```

- *Type:* string

The ``FileSystemPolicy`` for the EFS file system.

A file system policy is an IAM resource policy used to control NFS access to an EFS file system. For more information, see [Using to control NFS access to Amazon EFS](https://docs.aws.amazon.com/efs/latest/ug/iam-access-control-nfs-efs.html) in the *Amazon EFS User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/efs_file_system#file_system_policy EfsFileSystem#file_system_policy}

---

##### `FileSystemProtection`<sup>Optional</sup> <a name="FileSystemProtection" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.fileSystemProtection"></a>

```csharp
public EfsFileSystemFileSystemProtection FileSystemProtection { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtection">EfsFileSystemFileSystemProtection</a>

Describes the protection on the file system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/efs_file_system#file_system_protection EfsFileSystem#file_system_protection}

---

##### `FileSystemTags`<sup>Optional</sup> <a name="FileSystemTags" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.fileSystemTags"></a>

```csharp
public IResolvable|EfsFileSystemFileSystemTags[] FileSystemTags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTags">EfsFileSystemFileSystemTags</a>[]

Use to create one or more tags associated with the file system.

Each tag is a user-defined key-value pair. Name your file system on creation by including a `"Key":"Name","Value":"{value}"` key-value pair. Each key must be unique. For more information, see [Tagging resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html) in the *General Reference Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/efs_file_system#file_system_tags EfsFileSystem#file_system_tags}

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

The ID of the kms-key-long to be used to protect the encrypted file system.

This parameter is only required if you want to use a nondefault kms-key. If this parameter is not specified, the default kms-key for EFS is used. This ID can be in one of the following formats:

* Key ID - A unique identifier of the key, for example `1234abcd-12ab-34cd-56ef-1234567890ab`.
* ARN - An Amazon Resource Name (ARN) for the key, for example `arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab`.
* Key alias - A previously created display name for a key, for example `alias/projectKey1`.
* Key alias ARN - An ARN for a key alias, for example `arn:aws:kms:us-west-2:444455556666:alias/projectKey1`.

If `KmsKeyId` is specified, the `Encrypted` parameter must be set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/efs_file_system#kms_key_id EfsFileSystem#kms_key_id}

---

##### `LifecyclePolicies`<sup>Optional</sup> <a name="LifecyclePolicies" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.lifecyclePolicies"></a>

```csharp
public IResolvable|EfsFileSystemLifecyclePolicies[] LifecyclePolicies { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePolicies">EfsFileSystemLifecyclePolicies</a>[]

An array of ``LifecyclePolicy`` objects that define the file system's ``LifecycleConfiguration`` object.

A `LifecycleConfiguration` object informs Lifecycle management of the following:

* When to move files in the file system from primary storage to IA storage.
* When to move files in the file system from primary storage or IA storage to Archive storage.
* When to move files that are in IA or Archive storage to primary storage.

EFS requires that each `LifecyclePolicy` object have only a single transition. This means that in a request body, `LifecyclePolicies` needs to be structured as an array of `LifecyclePolicy` objects, one object for each transition, `TransitionToIA`, `TransitionToArchive````TransitionToPrimaryStorageClass`. See the example requests in the following section for more information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/efs_file_system#lifecycle_policies EfsFileSystem#lifecycle_policies}

---

##### `PerformanceMode`<sup>Optional</sup> <a name="PerformanceMode" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.performanceMode"></a>

```csharp
public string PerformanceMode { get; set; }
```

- *Type:* string

The performance mode of the file system.

We recommend `generalPurpose` performance mode for all file systems. File systems using the `maxIO` performance mode can scale to higher levels of aggregate throughput and operations per second with a tradeoff of slightly higher latencies for most file operations. The performance mode can't be changed after the file system has been created. The `maxIO` mode is not supported on One Zone file systems.
Due to the higher per-operation latencies with Max I/O, we recommend using General Purpose performance mode for all file systems.
Default is `generalPurpose`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/efs_file_system#performance_mode EfsFileSystem#performance_mode}

---

##### `ProvisionedThroughputInMibps`<sup>Optional</sup> <a name="ProvisionedThroughputInMibps" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.provisionedThroughputInMibps"></a>

```csharp
public double ProvisionedThroughputInMibps { get; set; }
```

- *Type:* double

The throughput, measured in mebibytes per second (MiBps), that you want to provision for a file system that you're creating.

Required if `ThroughputMode` is set to `provisioned`. Valid values are 1-3414 MiBps, with the upper limit depending on Region. To increase this limit, contact SUP. For more information, see [Amazon EFS quotas that you can increase](https://docs.aws.amazon.com/efs/latest/ug/limits.html#soft-limits) in the *Amazon EFS User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/efs_file_system#provisioned_throughput_in_mibps EfsFileSystem#provisioned_throughput_in_mibps}

---

##### `ReplicationConfiguration`<sup>Optional</sup> <a name="ReplicationConfiguration" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.replicationConfiguration"></a>

```csharp
public EfsFileSystemReplicationConfiguration ReplicationConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfiguration">EfsFileSystemReplicationConfiguration</a>

Describes the replication configuration for a specific file system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/efs_file_system#replication_configuration EfsFileSystem#replication_configuration}

---

##### `ThroughputMode`<sup>Optional</sup> <a name="ThroughputMode" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.throughputMode"></a>

```csharp
public string ThroughputMode { get; set; }
```

- *Type:* string

Specifies the throughput mode for the file system.

The mode can be `bursting`, `provisioned`, or `elastic`. If you set `ThroughputMode` to `provisioned`, you must also set a value for `ProvisionedThroughputInMibps`. After you create the file system, you can decrease your file system's Provisioned throughput or change between the throughput modes, with certain time restrictions. For more information, see [Specifying throughput with provisioned mode](https://docs.aws.amazon.com/efs/latest/ug/performance.html#provisioned-throughput) in the *Amazon EFS User Guide*.
Default is `bursting`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/efs_file_system#throughput_mode EfsFileSystem#throughput_mode}

---

### EfsFileSystemFileSystemProtection <a name="EfsFileSystemFileSystemProtection" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtection.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EfsFileSystemFileSystemProtection {
    string ReplicationOverwriteProtection = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtection.property.replicationOverwriteProtection">ReplicationOverwriteProtection</a></code> | <code>string</code> | The status of the file system's replication overwrite protection. |

---

##### `ReplicationOverwriteProtection`<sup>Optional</sup> <a name="ReplicationOverwriteProtection" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtection.property.replicationOverwriteProtection"></a>

```csharp
public string ReplicationOverwriteProtection { get; set; }
```

- *Type:* string

The status of the file system's replication overwrite protection.

* `ENABLED` ? The file system cannot be used as the destination file system in a replication configuration. The file system is writeable. Replication overwrite protection is `ENABLED` by default.
* `DISABLED` ? The file system can be used as the destination file system in a replication configuration. The file system is read-only and can only be modified by EFS replication.
* `REPLICATING` ? The file system is being used as the destination file system in a replication configuration. The file system is read-only and is modified only by EFS replication.

If the replication configuration is deleted, the file system's replication overwrite protection is re-enabled, the file system becomes writeable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/efs_file_system#replication_overwrite_protection EfsFileSystem#replication_overwrite_protection}

---

### EfsFileSystemFileSystemTags <a name="EfsFileSystemFileSystemTags" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EfsFileSystemFileSystemTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTags.property.key">Key</a></code> | <code>string</code> | The tag key (String). The key can't start with ``aws:``. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTags.property.value">Value</a></code> | <code>string</code> | The value of the tag key. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The tag key (String). The key can't start with ``aws:``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/efs_file_system#key EfsFileSystem#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value of the tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/efs_file_system#value EfsFileSystem#value}

---

### EfsFileSystemLifecyclePolicies <a name="EfsFileSystemLifecyclePolicies" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePolicies.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EfsFileSystemLifecyclePolicies {
    string TransitionToArchive = null,
    string TransitionToIa = null,
    string TransitionToPrimaryStorageClass = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePolicies.property.transitionToArchive">TransitionToArchive</a></code> | <code>string</code> | The number of days after files were last accessed in primary storage (the Standard storage class) at which to move them to Archive storage. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePolicies.property.transitionToIa">TransitionToIa</a></code> | <code>string</code> | The number of days after files were last accessed in primary storage (the Standard storage class) at which to move them to Infrequent Access (IA) storage. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePolicies.property.transitionToPrimaryStorageClass">TransitionToPrimaryStorageClass</a></code> | <code>string</code> | Whether to move files back to primary (Standard) storage after they are accessed in IA or Archive storage. |

---

##### `TransitionToArchive`<sup>Optional</sup> <a name="TransitionToArchive" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePolicies.property.transitionToArchive"></a>

```csharp
public string TransitionToArchive { get; set; }
```

- *Type:* string

The number of days after files were last accessed in primary storage (the Standard storage class) at which to move them to Archive storage.

Metadata operations such as listing the contents of a directory don't count as file access events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/efs_file_system#transition_to_archive EfsFileSystem#transition_to_archive}

---

##### `TransitionToIa`<sup>Optional</sup> <a name="TransitionToIa" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePolicies.property.transitionToIa"></a>

```csharp
public string TransitionToIa { get; set; }
```

- *Type:* string

The number of days after files were last accessed in primary storage (the Standard storage class) at which to move them to Infrequent Access (IA) storage.

Metadata operations such as listing the contents of a directory don't count as file access events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/efs_file_system#transition_to_ia EfsFileSystem#transition_to_ia}

---

##### `TransitionToPrimaryStorageClass`<sup>Optional</sup> <a name="TransitionToPrimaryStorageClass" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePolicies.property.transitionToPrimaryStorageClass"></a>

```csharp
public string TransitionToPrimaryStorageClass { get; set; }
```

- *Type:* string

Whether to move files back to primary (Standard) storage after they are accessed in IA or Archive storage.

Metadata operations such as listing the contents of a directory don't count as file access events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/efs_file_system#transition_to_primary_storage_class EfsFileSystem#transition_to_primary_storage_class}

---

### EfsFileSystemReplicationConfiguration <a name="EfsFileSystemReplicationConfiguration" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EfsFileSystemReplicationConfiguration {
    IResolvable|EfsFileSystemReplicationConfigurationDestinations[] Destinations = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfiguration.property.destinations">Destinations</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations">EfsFileSystemReplicationConfigurationDestinations</a>[]</code> | An array of destination objects. Only one destination object is supported. |

---

##### `Destinations`<sup>Optional</sup> <a name="Destinations" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfiguration.property.destinations"></a>

```csharp
public IResolvable|EfsFileSystemReplicationConfigurationDestinations[] Destinations { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations">EfsFileSystemReplicationConfigurationDestinations</a>[]

An array of destination objects. Only one destination object is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/efs_file_system#destinations EfsFileSystem#destinations}

---

### EfsFileSystemReplicationConfigurationDestinations <a name="EfsFileSystemReplicationConfigurationDestinations" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EfsFileSystemReplicationConfigurationDestinations {
    string AvailabilityZoneName = null,
    string FileSystemId = null,
    string KmsKeyId = null,
    string Region = null,
    string RoleArn = null,
    string Status = null,
    string StatusMessage = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations.property.availabilityZoneName">AvailabilityZoneName</a></code> | <code>string</code> | For One Zone file systems, the replication configuration must specify the Availability Zone in which the destination file system is located. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations.property.fileSystemId">FileSystemId</a></code> | <code>string</code> | The ID of the destination Amazon EFS file system. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | The ID of an kms-key-long used to protect the encrypted file system. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations.property.region">Region</a></code> | <code>string</code> | The AWS-Region in which the destination file system is located. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations.property.roleArn">RoleArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the current source file system in the replication configuration. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations.property.status">Status</a></code> | <code>string</code> | Describes the status of the replication configuration. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations.property.statusMessage">StatusMessage</a></code> | <code>string</code> | Message that provides details about the ``PAUSED`` or ``ERRROR`` state of the replication destination configuration. |

---

##### `AvailabilityZoneName`<sup>Optional</sup> <a name="AvailabilityZoneName" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations.property.availabilityZoneName"></a>

```csharp
public string AvailabilityZoneName { get; set; }
```

- *Type:* string

For One Zone file systems, the replication configuration must specify the Availability Zone in which the destination file system is located.

Use the format `us-east-1a` to specify the Availability Zone. For more information about One Zone file systems, see [EFS file system types](https://docs.aws.amazon.com/efs/latest/ug/storage-classes.html) in the *Amazon EFS User Guide*.
One Zone file system type is not available in all Availability Zones in AWS-Regions where Amazon EFS is available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/efs_file_system#availability_zone_name EfsFileSystem#availability_zone_name}

---

##### `FileSystemId`<sup>Optional</sup> <a name="FileSystemId" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations.property.fileSystemId"></a>

```csharp
public string FileSystemId { get; set; }
```

- *Type:* string

The ID of the destination Amazon EFS file system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/efs_file_system#file_system_id EfsFileSystem#file_system_id}

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

The ID of an kms-key-long used to protect the encrypted file system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/efs_file_system#kms_key_id EfsFileSystem#kms_key_id}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

The AWS-Region in which the destination file system is located.

For One Zone file systems, the replication configuration must specify the AWS-Region in which the destination file system is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/efs_file_system#region EfsFileSystem#region}

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the current source file system in the replication configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/efs_file_system#role_arn EfsFileSystem#role_arn}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Describes the status of the replication configuration.

For more information about replication status, see [Viewing replication details](https://docs.aws.amazon.com//efs/latest/ug/awsbackup.html#restoring-backup-efsmonitoring-replication-status.html) in the *Amazon EFS User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/efs_file_system#status EfsFileSystem#status}

---

##### `StatusMessage`<sup>Optional</sup> <a name="StatusMessage" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations.property.statusMessage"></a>

```csharp
public string StatusMessage { get; set; }
```

- *Type:* string

Message that provides details about the ``PAUSED`` or ``ERRROR`` state of the replication destination configuration.

For more information about replication status messages, see [Viewing replication details](https://docs.aws.amazon.com//efs/latest/ug/awsbackup.html#restoring-backup-efsmonitoring-replication-status.html) in the *Amazon EFS User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/efs_file_system#status_message EfsFileSystem#status_message}

---

## Classes <a name="Classes" id="Classes"></a>

### EfsFileSystemBackupPolicyOutputReference <a name="EfsFileSystemBackupPolicyOutputReference" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EfsFileSystemBackupPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetStatus` <a name="ResetStatus" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.resetStatus"></a>

```csharp
private void ResetStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicy">EfsFileSystemBackupPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EfsFileSystemBackupPolicy InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicy">EfsFileSystemBackupPolicy</a>

---


### EfsFileSystemFileSystemProtectionOutputReference <a name="EfsFileSystemFileSystemProtectionOutputReference" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EfsFileSystemFileSystemProtectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.resetReplicationOverwriteProtection">ResetReplicationOverwriteProtection</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetReplicationOverwriteProtection` <a name="ResetReplicationOverwriteProtection" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.resetReplicationOverwriteProtection"></a>

```csharp
private void ResetReplicationOverwriteProtection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.property.replicationOverwriteProtectionInput">ReplicationOverwriteProtectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.property.replicationOverwriteProtection">ReplicationOverwriteProtection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtection">EfsFileSystemFileSystemProtection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReplicationOverwriteProtectionInput`<sup>Optional</sup> <a name="ReplicationOverwriteProtectionInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.property.replicationOverwriteProtectionInput"></a>

```csharp
public string ReplicationOverwriteProtectionInput { get; }
```

- *Type:* string

---

##### `ReplicationOverwriteProtection`<sup>Required</sup> <a name="ReplicationOverwriteProtection" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.property.replicationOverwriteProtection"></a>

```csharp
public string ReplicationOverwriteProtection { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EfsFileSystemFileSystemProtection InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtection">EfsFileSystemFileSystemProtection</a>

---


### EfsFileSystemFileSystemTagsList <a name="EfsFileSystemFileSystemTagsList" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EfsFileSystemFileSystemTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.get"></a>

```csharp
private EfsFileSystemFileSystemTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTags">EfsFileSystemFileSystemTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.property.internalValue"></a>

```csharp
public IResolvable|EfsFileSystemFileSystemTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTags">EfsFileSystemFileSystemTags</a>[]

---


### EfsFileSystemFileSystemTagsOutputReference <a name="EfsFileSystemFileSystemTagsOutputReference" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EfsFileSystemFileSystemTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTags">EfsFileSystemFileSystemTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EfsFileSystemFileSystemTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTags">EfsFileSystemFileSystemTags</a>

---


### EfsFileSystemLifecyclePoliciesList <a name="EfsFileSystemLifecyclePoliciesList" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EfsFileSystemLifecyclePoliciesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.get"></a>

```csharp
private EfsFileSystemLifecyclePoliciesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePolicies">EfsFileSystemLifecyclePolicies</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.property.internalValue"></a>

```csharp
public IResolvable|EfsFileSystemLifecyclePolicies[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePolicies">EfsFileSystemLifecyclePolicies</a>[]

---


### EfsFileSystemLifecyclePoliciesOutputReference <a name="EfsFileSystemLifecyclePoliciesOutputReference" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EfsFileSystemLifecyclePoliciesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.resetTransitionToArchive">ResetTransitionToArchive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.resetTransitionToIa">ResetTransitionToIa</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.resetTransitionToPrimaryStorageClass">ResetTransitionToPrimaryStorageClass</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTransitionToArchive` <a name="ResetTransitionToArchive" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.resetTransitionToArchive"></a>

```csharp
private void ResetTransitionToArchive()
```

##### `ResetTransitionToIa` <a name="ResetTransitionToIa" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.resetTransitionToIa"></a>

```csharp
private void ResetTransitionToIa()
```

##### `ResetTransitionToPrimaryStorageClass` <a name="ResetTransitionToPrimaryStorageClass" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.resetTransitionToPrimaryStorageClass"></a>

```csharp
private void ResetTransitionToPrimaryStorageClass()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.property.transitionToArchiveInput">TransitionToArchiveInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.property.transitionToIaInput">TransitionToIaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.property.transitionToPrimaryStorageClassInput">TransitionToPrimaryStorageClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.property.transitionToArchive">TransitionToArchive</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.property.transitionToIa">TransitionToIa</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.property.transitionToPrimaryStorageClass">TransitionToPrimaryStorageClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePolicies">EfsFileSystemLifecyclePolicies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TransitionToArchiveInput`<sup>Optional</sup> <a name="TransitionToArchiveInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.property.transitionToArchiveInput"></a>

```csharp
public string TransitionToArchiveInput { get; }
```

- *Type:* string

---

##### `TransitionToIaInput`<sup>Optional</sup> <a name="TransitionToIaInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.property.transitionToIaInput"></a>

```csharp
public string TransitionToIaInput { get; }
```

- *Type:* string

---

##### `TransitionToPrimaryStorageClassInput`<sup>Optional</sup> <a name="TransitionToPrimaryStorageClassInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.property.transitionToPrimaryStorageClassInput"></a>

```csharp
public string TransitionToPrimaryStorageClassInput { get; }
```

- *Type:* string

---

##### `TransitionToArchive`<sup>Required</sup> <a name="TransitionToArchive" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.property.transitionToArchive"></a>

```csharp
public string TransitionToArchive { get; }
```

- *Type:* string

---

##### `TransitionToIa`<sup>Required</sup> <a name="TransitionToIa" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.property.transitionToIa"></a>

```csharp
public string TransitionToIa { get; }
```

- *Type:* string

---

##### `TransitionToPrimaryStorageClass`<sup>Required</sup> <a name="TransitionToPrimaryStorageClass" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.property.transitionToPrimaryStorageClass"></a>

```csharp
public string TransitionToPrimaryStorageClass { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EfsFileSystemLifecyclePolicies InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePolicies">EfsFileSystemLifecyclePolicies</a>

---


### EfsFileSystemReplicationConfigurationDestinationsList <a name="EfsFileSystemReplicationConfigurationDestinationsList" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EfsFileSystemReplicationConfigurationDestinationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.get"></a>

```csharp
private EfsFileSystemReplicationConfigurationDestinationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations">EfsFileSystemReplicationConfigurationDestinations</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.property.internalValue"></a>

```csharp
public IResolvable|EfsFileSystemReplicationConfigurationDestinations[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations">EfsFileSystemReplicationConfigurationDestinations</a>[]

---


### EfsFileSystemReplicationConfigurationDestinationsOutputReference <a name="EfsFileSystemReplicationConfigurationDestinationsOutputReference" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EfsFileSystemReplicationConfigurationDestinationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.resetAvailabilityZoneName">ResetAvailabilityZoneName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.resetFileSystemId">ResetFileSystemId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.resetRoleArn">ResetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.resetStatusMessage">ResetStatusMessage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAvailabilityZoneName` <a name="ResetAvailabilityZoneName" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.resetAvailabilityZoneName"></a>

```csharp
private void ResetAvailabilityZoneName()
```

##### `ResetFileSystemId` <a name="ResetFileSystemId" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.resetFileSystemId"></a>

```csharp
private void ResetFileSystemId()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.resetRoleArn"></a>

```csharp
private void ResetRoleArn()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.resetStatus"></a>

```csharp
private void ResetStatus()
```

##### `ResetStatusMessage` <a name="ResetStatusMessage" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.resetStatusMessage"></a>

```csharp
private void ResetStatusMessage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.availabilityZoneNameInput">AvailabilityZoneNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.fileSystemIdInput">FileSystemIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.statusMessageInput">StatusMessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.availabilityZoneName">AvailabilityZoneName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.fileSystemId">FileSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.statusMessage">StatusMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations">EfsFileSystemReplicationConfigurationDestinations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailabilityZoneNameInput`<sup>Optional</sup> <a name="AvailabilityZoneNameInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.availabilityZoneNameInput"></a>

```csharp
public string AvailabilityZoneNameInput { get; }
```

- *Type:* string

---

##### `FileSystemIdInput`<sup>Optional</sup> <a name="FileSystemIdInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.fileSystemIdInput"></a>

```csharp
public string FileSystemIdInput { get; }
```

- *Type:* string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `StatusMessageInput`<sup>Optional</sup> <a name="StatusMessageInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.statusMessageInput"></a>

```csharp
public string StatusMessageInput { get; }
```

- *Type:* string

---

##### `AvailabilityZoneName`<sup>Required</sup> <a name="AvailabilityZoneName" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.availabilityZoneName"></a>

```csharp
public string AvailabilityZoneName { get; }
```

- *Type:* string

---

##### `FileSystemId`<sup>Required</sup> <a name="FileSystemId" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.fileSystemId"></a>

```csharp
public string FileSystemId { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `StatusMessage`<sup>Required</sup> <a name="StatusMessage" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.statusMessage"></a>

```csharp
public string StatusMessage { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EfsFileSystemReplicationConfigurationDestinations InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations">EfsFileSystemReplicationConfigurationDestinations</a>

---


### EfsFileSystemReplicationConfigurationOutputReference <a name="EfsFileSystemReplicationConfigurationOutputReference" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EfsFileSystemReplicationConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.putDestinations">PutDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.resetDestinations">ResetDestinations</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDestinations` <a name="PutDestinations" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.putDestinations"></a>

```csharp
private void PutDestinations(IResolvable|EfsFileSystemReplicationConfigurationDestinations[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.putDestinations.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations">EfsFileSystemReplicationConfigurationDestinations</a>[]

---

##### `ResetDestinations` <a name="ResetDestinations" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.resetDestinations"></a>

```csharp
private void ResetDestinations()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.property.destinations">Destinations</a></code> | <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList">EfsFileSystemReplicationConfigurationDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.property.destinationsInput">DestinationsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations">EfsFileSystemReplicationConfigurationDestinations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfiguration">EfsFileSystemReplicationConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Destinations`<sup>Required</sup> <a name="Destinations" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.property.destinations"></a>

```csharp
public EfsFileSystemReplicationConfigurationDestinationsList Destinations { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList">EfsFileSystemReplicationConfigurationDestinationsList</a>

---

##### `DestinationsInput`<sup>Optional</sup> <a name="DestinationsInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.property.destinationsInput"></a>

```csharp
public IResolvable|EfsFileSystemReplicationConfigurationDestinations[] DestinationsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations">EfsFileSystemReplicationConfigurationDestinations</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EfsFileSystemReplicationConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfiguration">EfsFileSystemReplicationConfiguration</a>

---



