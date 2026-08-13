# `workspacesinstancesVolume` Submodule <a name="`workspacesinstancesVolume` Submodule" id="@cdktn/provider-awscc.workspacesinstancesVolume"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkspacesinstancesVolume <a name="WorkspacesinstancesVolume" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_volume awscc_workspacesinstances_volume}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WorkspacesinstancesVolume(Construct Scope, string Id, WorkspacesinstancesVolumeConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeConfig">WorkspacesinstancesVolumeConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeConfig">WorkspacesinstancesVolumeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.putTagSpecifications">PutTagSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.resetEncrypted">ResetEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.resetIops">ResetIops</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.resetSizeInGb">ResetSizeInGb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.resetSnapshotId">ResetSnapshotId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.resetTagSpecifications">ResetTagSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.resetThroughput">ResetThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.resetVolumeType">ResetVolumeType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTagSpecifications` <a name="PutTagSpecifications" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.putTagSpecifications"></a>

```csharp
private void PutTagSpecifications(IResolvable|WorkspacesinstancesVolumeTagSpecifications[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.putTagSpecifications.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecifications">WorkspacesinstancesVolumeTagSpecifications</a>[]

---

##### `ResetEncrypted` <a name="ResetEncrypted" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.resetEncrypted"></a>

```csharp
private void ResetEncrypted()
```

##### `ResetIops` <a name="ResetIops" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.resetIops"></a>

```csharp
private void ResetIops()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```

##### `ResetSizeInGb` <a name="ResetSizeInGb" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.resetSizeInGb"></a>

```csharp
private void ResetSizeInGb()
```

##### `ResetSnapshotId` <a name="ResetSnapshotId" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.resetSnapshotId"></a>

```csharp
private void ResetSnapshotId()
```

##### `ResetTagSpecifications` <a name="ResetTagSpecifications" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.resetTagSpecifications"></a>

```csharp
private void ResetTagSpecifications()
```

##### `ResetThroughput` <a name="ResetThroughput" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.resetThroughput"></a>

```csharp
private void ResetThroughput()
```

##### `ResetVolumeType` <a name="ResetVolumeType" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.resetVolumeType"></a>

```csharp
private void ResetVolumeType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a WorkspacesinstancesVolume resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

WorkspacesinstancesVolume.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

WorkspacesinstancesVolume.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

WorkspacesinstancesVolume.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

WorkspacesinstancesVolume.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a WorkspacesinstancesVolume resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WorkspacesinstancesVolume to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WorkspacesinstancesVolume that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_volume#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the WorkspacesinstancesVolume to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.tagSpecifications">TagSpecifications</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsList">WorkspacesinstancesVolumeTagSpecificationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.volumeId">VolumeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.availabilityZoneInput">AvailabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.encryptedInput">EncryptedInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.iopsInput">IopsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.sizeInGbInput">SizeInGbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.snapshotIdInput">SnapshotIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.tagSpecificationsInput">TagSpecificationsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecifications">WorkspacesinstancesVolumeTagSpecifications</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.throughputInput">ThroughputInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.volumeTypeInput">VolumeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.encrypted">Encrypted</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.iops">Iops</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.sizeInGb">SizeInGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.snapshotId">SnapshotId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.throughput">Throughput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.volumeType">VolumeType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `TagSpecifications`<sup>Required</sup> <a name="TagSpecifications" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.tagSpecifications"></a>

```csharp
public WorkspacesinstancesVolumeTagSpecificationsList TagSpecifications { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsList">WorkspacesinstancesVolumeTagSpecificationsList</a>

---

##### `VolumeId`<sup>Required</sup> <a name="VolumeId" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.volumeId"></a>

```csharp
public string VolumeId { get; }
```

- *Type:* string

---

##### `AvailabilityZoneInput`<sup>Optional</sup> <a name="AvailabilityZoneInput" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.availabilityZoneInput"></a>

```csharp
public string AvailabilityZoneInput { get; }
```

- *Type:* string

---

##### `EncryptedInput`<sup>Optional</sup> <a name="EncryptedInput" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.encryptedInput"></a>

```csharp
public bool|IResolvable EncryptedInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IopsInput`<sup>Optional</sup> <a name="IopsInput" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.iopsInput"></a>

```csharp
public double IopsInput { get; }
```

- *Type:* double

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `SizeInGbInput`<sup>Optional</sup> <a name="SizeInGbInput" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.sizeInGbInput"></a>

```csharp
public double SizeInGbInput { get; }
```

- *Type:* double

---

##### `SnapshotIdInput`<sup>Optional</sup> <a name="SnapshotIdInput" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.snapshotIdInput"></a>

```csharp
public string SnapshotIdInput { get; }
```

- *Type:* string

---

##### `TagSpecificationsInput`<sup>Optional</sup> <a name="TagSpecificationsInput" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.tagSpecificationsInput"></a>

```csharp
public IResolvable|WorkspacesinstancesVolumeTagSpecifications[] TagSpecificationsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecifications">WorkspacesinstancesVolumeTagSpecifications</a>[]

---

##### `ThroughputInput`<sup>Optional</sup> <a name="ThroughputInput" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.throughputInput"></a>

```csharp
public double ThroughputInput { get; }
```

- *Type:* double

---

##### `VolumeTypeInput`<sup>Optional</sup> <a name="VolumeTypeInput" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.volumeTypeInput"></a>

```csharp
public string VolumeTypeInput { get; }
```

- *Type:* string

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; }
```

- *Type:* string

---

##### `Encrypted`<sup>Required</sup> <a name="Encrypted" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.encrypted"></a>

```csharp
public bool|IResolvable Encrypted { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Iops`<sup>Required</sup> <a name="Iops" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.iops"></a>

```csharp
public double Iops { get; }
```

- *Type:* double

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `SizeInGb`<sup>Required</sup> <a name="SizeInGb" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.sizeInGb"></a>

```csharp
public double SizeInGb { get; }
```

- *Type:* double

---

##### `SnapshotId`<sup>Required</sup> <a name="SnapshotId" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.snapshotId"></a>

```csharp
public string SnapshotId { get; }
```

- *Type:* string

---

##### `Throughput`<sup>Required</sup> <a name="Throughput" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.throughput"></a>

```csharp
public double Throughput { get; }
```

- *Type:* double

---

##### `VolumeType`<sup>Required</sup> <a name="VolumeType" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.volumeType"></a>

```csharp
public string VolumeType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolume.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WorkspacesinstancesVolumeConfig <a name="WorkspacesinstancesVolumeConfig" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WorkspacesinstancesVolumeConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AvailabilityZone,
    bool|IResolvable Encrypted = null,
    double Iops = null,
    string KmsKeyId = null,
    double SizeInGb = null,
    string SnapshotId = null,
    IResolvable|WorkspacesinstancesVolumeTagSpecifications[] TagSpecifications = null,
    double Throughput = null,
    string VolumeType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeConfig.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | The Availability Zone in which to create the volume. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeConfig.property.encrypted">Encrypted</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates whether the volume should be encrypted. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeConfig.property.iops">Iops</a></code> | <code>double</code> | The number of I/O operations per second (IOPS). |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | The identifier of the AWS Key Management Service (AWS KMS) customer master key (CMK) to use for Amazon EBS encryption. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeConfig.property.sizeInGb">SizeInGb</a></code> | <code>double</code> | The size of the volume, in GiBs. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeConfig.property.snapshotId">SnapshotId</a></code> | <code>string</code> | The snapshot from which to create the volume. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeConfig.property.tagSpecifications">TagSpecifications</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecifications">WorkspacesinstancesVolumeTagSpecifications</a>[]</code> | The tags passed to EBS volume. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeConfig.property.throughput">Throughput</a></code> | <code>double</code> | The throughput to provision for a volume, with a maximum of 1,000 MiB/s. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeConfig.property.volumeType">VolumeType</a></code> | <code>string</code> | The volume type. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeConfig.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; set; }
```

- *Type:* string

The Availability Zone in which to create the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_volume#availability_zone WorkspacesinstancesVolume#availability_zone}

---

##### `Encrypted`<sup>Optional</sup> <a name="Encrypted" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeConfig.property.encrypted"></a>

```csharp
public bool|IResolvable Encrypted { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates whether the volume should be encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_volume#encrypted WorkspacesinstancesVolume#encrypted}

---

##### `Iops`<sup>Optional</sup> <a name="Iops" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeConfig.property.iops"></a>

```csharp
public double Iops { get; set; }
```

- *Type:* double

The number of I/O operations per second (IOPS).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_volume#iops WorkspacesinstancesVolume#iops}

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeConfig.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

The identifier of the AWS Key Management Service (AWS KMS) customer master key (CMK) to use for Amazon EBS encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_volume#kms_key_id WorkspacesinstancesVolume#kms_key_id}

---

##### `SizeInGb`<sup>Optional</sup> <a name="SizeInGb" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeConfig.property.sizeInGb"></a>

```csharp
public double SizeInGb { get; set; }
```

- *Type:* double

The size of the volume, in GiBs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_volume#size_in_gb WorkspacesinstancesVolume#size_in_gb}

---

##### `SnapshotId`<sup>Optional</sup> <a name="SnapshotId" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeConfig.property.snapshotId"></a>

```csharp
public string SnapshotId { get; set; }
```

- *Type:* string

The snapshot from which to create the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_volume#snapshot_id WorkspacesinstancesVolume#snapshot_id}

---

##### `TagSpecifications`<sup>Optional</sup> <a name="TagSpecifications" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeConfig.property.tagSpecifications"></a>

```csharp
public IResolvable|WorkspacesinstancesVolumeTagSpecifications[] TagSpecifications { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecifications">WorkspacesinstancesVolumeTagSpecifications</a>[]

The tags passed to EBS volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_volume#tag_specifications WorkspacesinstancesVolume#tag_specifications}

---

##### `Throughput`<sup>Optional</sup> <a name="Throughput" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeConfig.property.throughput"></a>

```csharp
public double Throughput { get; set; }
```

- *Type:* double

The throughput to provision for a volume, with a maximum of 1,000 MiB/s.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_volume#throughput WorkspacesinstancesVolume#throughput}

---

##### `VolumeType`<sup>Optional</sup> <a name="VolumeType" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeConfig.property.volumeType"></a>

```csharp
public string VolumeType { get; set; }
```

- *Type:* string

The volume type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_volume#volume_type WorkspacesinstancesVolume#volume_type}

---

### WorkspacesinstancesVolumeTagSpecifications <a name="WorkspacesinstancesVolumeTagSpecifications" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecifications.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WorkspacesinstancesVolumeTagSpecifications {
    string ResourceType = null,
    IResolvable|WorkspacesinstancesVolumeTagSpecificationsTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecifications.property.resourceType">ResourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_volume#resource_type WorkspacesinstancesVolume#resource_type}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecifications.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTags">WorkspacesinstancesVolumeTagSpecificationsTags</a>[]</code> | The tags to apply to the resource. |

---

##### `ResourceType`<sup>Optional</sup> <a name="ResourceType" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecifications.property.resourceType"></a>

```csharp
public string ResourceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_volume#resource_type WorkspacesinstancesVolume#resource_type}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecifications.property.tags"></a>

```csharp
public IResolvable|WorkspacesinstancesVolumeTagSpecificationsTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTags">WorkspacesinstancesVolumeTagSpecificationsTags</a>[]

The tags to apply to the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_volume#tags WorkspacesinstancesVolume#tags}

---

### WorkspacesinstancesVolumeTagSpecificationsTags <a name="WorkspacesinstancesVolumeTagSpecificationsTags" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WorkspacesinstancesVolumeTagSpecificationsTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_volume#key WorkspacesinstancesVolume#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_volume#value WorkspacesinstancesVolume#value}

---

## Classes <a name="Classes" id="Classes"></a>

### WorkspacesinstancesVolumeTagSpecificationsList <a name="WorkspacesinstancesVolumeTagSpecificationsList" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WorkspacesinstancesVolumeTagSpecificationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsList.get"></a>

```csharp
private WorkspacesinstancesVolumeTagSpecificationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecifications">WorkspacesinstancesVolumeTagSpecifications</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsList.property.internalValue"></a>

```csharp
public IResolvable|WorkspacesinstancesVolumeTagSpecifications[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecifications">WorkspacesinstancesVolumeTagSpecifications</a>[]

---


### WorkspacesinstancesVolumeTagSpecificationsOutputReference <a name="WorkspacesinstancesVolumeTagSpecificationsOutputReference" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WorkspacesinstancesVolumeTagSpecificationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.resetResourceType">ResetResourceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.putTags"></a>

```csharp
private void PutTags(IResolvable|WorkspacesinstancesVolumeTagSpecificationsTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTags">WorkspacesinstancesVolumeTagSpecificationsTags</a>[]

---

##### `ResetResourceType` <a name="ResetResourceType" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.resetResourceType"></a>

```csharp
private void ResetResourceType()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.resetTags"></a>

```csharp
private void ResetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsList">WorkspacesinstancesVolumeTagSpecificationsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.property.resourceTypeInput">ResourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTags">WorkspacesinstancesVolumeTagSpecificationsTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecifications">WorkspacesinstancesVolumeTagSpecifications</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.property.tags"></a>

```csharp
public WorkspacesinstancesVolumeTagSpecificationsTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsList">WorkspacesinstancesVolumeTagSpecificationsTagsList</a>

---

##### `ResourceTypeInput`<sup>Optional</sup> <a name="ResourceTypeInput" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.property.resourceTypeInput"></a>

```csharp
public string ResourceTypeInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.property.tagsInput"></a>

```csharp
public IResolvable|WorkspacesinstancesVolumeTagSpecificationsTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTags">WorkspacesinstancesVolumeTagSpecificationsTags</a>[]

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WorkspacesinstancesVolumeTagSpecifications InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecifications">WorkspacesinstancesVolumeTagSpecifications</a>

---


### WorkspacesinstancesVolumeTagSpecificationsTagsList <a name="WorkspacesinstancesVolumeTagSpecificationsTagsList" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WorkspacesinstancesVolumeTagSpecificationsTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsList.get"></a>

```csharp
private WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTags">WorkspacesinstancesVolumeTagSpecificationsTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsList.property.internalValue"></a>

```csharp
public IResolvable|WorkspacesinstancesVolumeTagSpecificationsTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTags">WorkspacesinstancesVolumeTagSpecificationsTags</a>[]

---


### WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference <a name="WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTags">WorkspacesinstancesVolumeTagSpecificationsTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WorkspacesinstancesVolumeTagSpecificationsTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspacesinstancesVolume.WorkspacesinstancesVolumeTagSpecificationsTags">WorkspacesinstancesVolumeTagSpecificationsTags</a>

---



