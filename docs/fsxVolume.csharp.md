# `fsxVolume` Submodule <a name="`fsxVolume` Submodule" id="@cdktn/provider-awscc.fsxVolume"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FsxVolume <a name="FsxVolume" id="@cdktn/provider-awscc.fsxVolume.FsxVolume"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume awscc_fsx_volume}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new FsxVolume(Construct Scope, string Id, FsxVolumeConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig">FsxVolumeConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig">FsxVolumeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.putOntapConfiguration">PutOntapConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.putOpenZfsConfiguration">PutOpenZfsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.resetBackupId">ResetBackupId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.resetOntapConfiguration">ResetOntapConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.resetOpenZfsConfiguration">ResetOpenZfsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.resetVolumeType">ResetVolumeType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutOntapConfiguration` <a name="PutOntapConfiguration" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.putOntapConfiguration"></a>

```csharp
private void PutOntapConfiguration(FsxVolumeOntapConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.putOntapConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration">FsxVolumeOntapConfiguration</a>

---

##### `PutOpenZfsConfiguration` <a name="PutOpenZfsConfiguration" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.putOpenZfsConfiguration"></a>

```csharp
private void PutOpenZfsConfiguration(FsxVolumeOpenZfsConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.putOpenZfsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration">FsxVolumeOpenZfsConfiguration</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.putTags"></a>

```csharp
private void PutTags(IResolvable|FsxVolumeTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTags">FsxVolumeTags</a>[]

---

##### `ResetBackupId` <a name="ResetBackupId" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.resetBackupId"></a>

```csharp
private void ResetBackupId()
```

##### `ResetOntapConfiguration` <a name="ResetOntapConfiguration" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.resetOntapConfiguration"></a>

```csharp
private void ResetOntapConfiguration()
```

##### `ResetOpenZfsConfiguration` <a name="ResetOpenZfsConfiguration" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.resetOpenZfsConfiguration"></a>

```csharp
private void ResetOpenZfsConfiguration()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetVolumeType` <a name="ResetVolumeType" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.resetVolumeType"></a>

```csharp
private void ResetVolumeType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a FsxVolume resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

FsxVolume.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

FsxVolume.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

FsxVolume.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

FsxVolume.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a FsxVolume resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FsxVolume to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FsxVolume that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the FsxVolume to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.ontapConfiguration">OntapConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference">FsxVolumeOntapConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.openZfsConfiguration">OpenZfsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference">FsxVolumeOpenZfsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.resourceArn">ResourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList">FsxVolumeTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.uuid">Uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.volumeId">VolumeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.backupIdInput">BackupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.ontapConfigurationInput">OntapConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration">FsxVolumeOntapConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.openZfsConfigurationInput">OpenZfsConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration">FsxVolumeOpenZfsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTags">FsxVolumeTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.volumeTypeInput">VolumeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.backupId">BackupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.volumeType">VolumeType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `OntapConfiguration`<sup>Required</sup> <a name="OntapConfiguration" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.ontapConfiguration"></a>

```csharp
public FsxVolumeOntapConfigurationOutputReference OntapConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference">FsxVolumeOntapConfigurationOutputReference</a>

---

##### `OpenZfsConfiguration`<sup>Required</sup> <a name="OpenZfsConfiguration" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.openZfsConfiguration"></a>

```csharp
public FsxVolumeOpenZfsConfigurationOutputReference OpenZfsConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference">FsxVolumeOpenZfsConfigurationOutputReference</a>

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.resourceArn"></a>

```csharp
public string ResourceArn { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.tags"></a>

```csharp
public FsxVolumeTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList">FsxVolumeTagsList</a>

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.uuid"></a>

```csharp
public string Uuid { get; }
```

- *Type:* string

---

##### `VolumeId`<sup>Required</sup> <a name="VolumeId" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.volumeId"></a>

```csharp
public string VolumeId { get; }
```

- *Type:* string

---

##### `BackupIdInput`<sup>Optional</sup> <a name="BackupIdInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.backupIdInput"></a>

```csharp
public string BackupIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OntapConfigurationInput`<sup>Optional</sup> <a name="OntapConfigurationInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.ontapConfigurationInput"></a>

```csharp
public IResolvable|FsxVolumeOntapConfiguration OntapConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration">FsxVolumeOntapConfiguration</a>

---

##### `OpenZfsConfigurationInput`<sup>Optional</sup> <a name="OpenZfsConfigurationInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.openZfsConfigurationInput"></a>

```csharp
public IResolvable|FsxVolumeOpenZfsConfiguration OpenZfsConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration">FsxVolumeOpenZfsConfiguration</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.tagsInput"></a>

```csharp
public IResolvable|FsxVolumeTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTags">FsxVolumeTags</a>[]

---

##### `VolumeTypeInput`<sup>Optional</sup> <a name="VolumeTypeInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.volumeTypeInput"></a>

```csharp
public string VolumeTypeInput { get; }
```

- *Type:* string

---

##### `BackupId`<sup>Required</sup> <a name="BackupId" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.backupId"></a>

```csharp
public string BackupId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `VolumeType`<sup>Required</sup> <a name="VolumeType" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.volumeType"></a>

```csharp
public string VolumeType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FsxVolumeConfig <a name="FsxVolumeConfig" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new FsxVolumeConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string BackupId = null,
    FsxVolumeOntapConfiguration OntapConfiguration = null,
    FsxVolumeOpenZfsConfiguration OpenZfsConfiguration = null,
    IResolvable|FsxVolumeTags[] Tags = null,
    string VolumeType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig.property.name">Name</a></code> | <code>string</code> | The name of the volume. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig.property.backupId">BackupId</a></code> | <code>string</code> | Specifies the ID of the volume backup to use to create a new volume. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig.property.ontapConfiguration">OntapConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration">FsxVolumeOntapConfiguration</a></code> | The configuration of an Amazon FSx for NetApp ONTAP volume. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig.property.openZfsConfiguration">OpenZfsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration">FsxVolumeOpenZfsConfiguration</a></code> | The configuration of an Amazon FSx for OpenZFS volume. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTags">FsxVolumeTags</a>[]</code> | One or more tags. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig.property.volumeType">VolumeType</a></code> | <code>string</code> | The type of the volume. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#name FsxVolume#name}

---

##### `BackupId`<sup>Optional</sup> <a name="BackupId" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig.property.backupId"></a>

```csharp
public string BackupId { get; set; }
```

- *Type:* string

Specifies the ID of the volume backup to use to create a new volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#backup_id FsxVolume#backup_id}

---

##### `OntapConfiguration`<sup>Optional</sup> <a name="OntapConfiguration" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig.property.ontapConfiguration"></a>

```csharp
public FsxVolumeOntapConfiguration OntapConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration">FsxVolumeOntapConfiguration</a>

The configuration of an Amazon FSx for NetApp ONTAP volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#ontap_configuration FsxVolume#ontap_configuration}

---

##### `OpenZfsConfiguration`<sup>Optional</sup> <a name="OpenZfsConfiguration" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig.property.openZfsConfiguration"></a>

```csharp
public FsxVolumeOpenZfsConfiguration OpenZfsConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration">FsxVolumeOpenZfsConfiguration</a>

The configuration of an Amazon FSx for OpenZFS volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#open_zfs_configuration FsxVolume#open_zfs_configuration}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig.property.tags"></a>

```csharp
public IResolvable|FsxVolumeTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTags">FsxVolumeTags</a>[]

One or more tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#tags FsxVolume#tags}

---

##### `VolumeType`<sup>Optional</sup> <a name="VolumeType" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig.property.volumeType"></a>

```csharp
public string VolumeType { get; set; }
```

- *Type:* string

The type of the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#volume_type FsxVolume#volume_type}

---

### FsxVolumeOntapConfiguration <a name="FsxVolumeOntapConfiguration" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new FsxVolumeOntapConfiguration {
    FsxVolumeOntapConfigurationAggregateConfiguration AggregateConfiguration = null,
    string CopyTagsToBackups = null,
    string JunctionPath = null,
    string OntapVolumeType = null,
    string SecurityStyle = null,
    string SizeInBytes = null,
    string SizeInMegabytes = null,
    FsxVolumeOntapConfigurationSnaplockConfiguration SnaplockConfiguration = null,
    string SnapshotPolicy = null,
    string StorageEfficiencyEnabled = null,
    string StorageVirtualMachineId = null,
    FsxVolumeOntapConfigurationTieringPolicy TieringPolicy = null,
    string VolumeStyle = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration.property.aggregateConfiguration">AggregateConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfiguration">FsxVolumeOntapConfigurationAggregateConfiguration</a></code> | Used to specify the configuration options for an FSx for ONTAP volume's storage aggregate or aggregates. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration.property.copyTagsToBackups">CopyTagsToBackups</a></code> | <code>string</code> | A boolean flag indicating whether tags for the volume should be copied to backups. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration.property.junctionPath">JunctionPath</a></code> | <code>string</code> | Specifies the location in the SVM's namespace where the volume is mounted. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration.property.ontapVolumeType">OntapVolumeType</a></code> | <code>string</code> | Specifies the type of volume you are creating. Valid values are the following: RW or DP. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration.property.securityStyle">SecurityStyle</a></code> | <code>string</code> | Specifies the security style for the volume. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration.property.sizeInBytes">SizeInBytes</a></code> | <code>string</code> | Specifies the configured size of the volume, in bytes. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration.property.sizeInMegabytes">SizeInMegabytes</a></code> | <code>string</code> | Use SizeInBytes instead. Specifies the size of the volume, in megabytes (MB), that you are creating. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration.property.snaplockConfiguration">SnaplockConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfiguration">FsxVolumeOntapConfigurationSnaplockConfiguration</a></code> | The SnapLock configuration object for an FSx for ONTAP SnapLock volume. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration.property.snapshotPolicy">SnapshotPolicy</a></code> | <code>string</code> | Specifies the snapshot policy for the volume. There are three built-in snapshot policies: default, default-1weekly, none. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration.property.storageEfficiencyEnabled">StorageEfficiencyEnabled</a></code> | <code>string</code> | Set to true to enable deduplication, compression, and compaction storage efficiency features on the volume, or set to false to disable them. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration.property.storageVirtualMachineId">StorageVirtualMachineId</a></code> | <code>string</code> | Specifies the ONTAP SVM in which to create the volume. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration.property.tieringPolicy">TieringPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicy">FsxVolumeOntapConfigurationTieringPolicy</a></code> | Describes the data tiering policy for an ONTAP volume. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration.property.volumeStyle">VolumeStyle</a></code> | <code>string</code> | Use to specify the style of an ONTAP volume. |

---

##### `AggregateConfiguration`<sup>Optional</sup> <a name="AggregateConfiguration" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration.property.aggregateConfiguration"></a>

```csharp
public FsxVolumeOntapConfigurationAggregateConfiguration AggregateConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfiguration">FsxVolumeOntapConfigurationAggregateConfiguration</a>

Used to specify the configuration options for an FSx for ONTAP volume's storage aggregate or aggregates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#aggregate_configuration FsxVolume#aggregate_configuration}

---

##### `CopyTagsToBackups`<sup>Optional</sup> <a name="CopyTagsToBackups" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration.property.copyTagsToBackups"></a>

```csharp
public string CopyTagsToBackups { get; set; }
```

- *Type:* string

A boolean flag indicating whether tags for the volume should be copied to backups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#copy_tags_to_backups FsxVolume#copy_tags_to_backups}

---

##### `JunctionPath`<sup>Optional</sup> <a name="JunctionPath" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration.property.junctionPath"></a>

```csharp
public string JunctionPath { get; set; }
```

- *Type:* string

Specifies the location in the SVM's namespace where the volume is mounted.

This parameter is required. The JunctionPath must have a leading forward slash, such as /vol3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#junction_path FsxVolume#junction_path}

---

##### `OntapVolumeType`<sup>Optional</sup> <a name="OntapVolumeType" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration.property.ontapVolumeType"></a>

```csharp
public string OntapVolumeType { get; set; }
```

- *Type:* string

Specifies the type of volume you are creating. Valid values are the following: RW or DP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#ontap_volume_type FsxVolume#ontap_volume_type}

---

##### `SecurityStyle`<sup>Optional</sup> <a name="SecurityStyle" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration.property.securityStyle"></a>

```csharp
public string SecurityStyle { get; set; }
```

- *Type:* string

Specifies the security style for the volume.

If a volume's security style is not specified, it is automatically set to the root volume's security style.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#security_style FsxVolume#security_style}

---

##### `SizeInBytes`<sup>Optional</sup> <a name="SizeInBytes" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration.property.sizeInBytes"></a>

```csharp
public string SizeInBytes { get; set; }
```

- *Type:* string

Specifies the configured size of the volume, in bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#size_in_bytes FsxVolume#size_in_bytes}

---

##### `SizeInMegabytes`<sup>Optional</sup> <a name="SizeInMegabytes" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration.property.sizeInMegabytes"></a>

```csharp
public string SizeInMegabytes { get; set; }
```

- *Type:* string

Use SizeInBytes instead. Specifies the size of the volume, in megabytes (MB), that you are creating.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#size_in_megabytes FsxVolume#size_in_megabytes}

---

##### `SnaplockConfiguration`<sup>Optional</sup> <a name="SnaplockConfiguration" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration.property.snaplockConfiguration"></a>

```csharp
public FsxVolumeOntapConfigurationSnaplockConfiguration SnaplockConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfiguration">FsxVolumeOntapConfigurationSnaplockConfiguration</a>

The SnapLock configuration object for an FSx for ONTAP SnapLock volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#snaplock_configuration FsxVolume#snaplock_configuration}

---

##### `SnapshotPolicy`<sup>Optional</sup> <a name="SnapshotPolicy" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration.property.snapshotPolicy"></a>

```csharp
public string SnapshotPolicy { get; set; }
```

- *Type:* string

Specifies the snapshot policy for the volume. There are three built-in snapshot policies: default, default-1weekly, none.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#snapshot_policy FsxVolume#snapshot_policy}

---

##### `StorageEfficiencyEnabled`<sup>Optional</sup> <a name="StorageEfficiencyEnabled" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration.property.storageEfficiencyEnabled"></a>

```csharp
public string StorageEfficiencyEnabled { get; set; }
```

- *Type:* string

Set to true to enable deduplication, compression, and compaction storage efficiency features on the volume, or set to false to disable them.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#storage_efficiency_enabled FsxVolume#storage_efficiency_enabled}

---

##### `StorageVirtualMachineId`<sup>Optional</sup> <a name="StorageVirtualMachineId" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration.property.storageVirtualMachineId"></a>

```csharp
public string StorageVirtualMachineId { get; set; }
```

- *Type:* string

Specifies the ONTAP SVM in which to create the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#storage_virtual_machine_id FsxVolume#storage_virtual_machine_id}

---

##### `TieringPolicy`<sup>Optional</sup> <a name="TieringPolicy" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration.property.tieringPolicy"></a>

```csharp
public FsxVolumeOntapConfigurationTieringPolicy TieringPolicy { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicy">FsxVolumeOntapConfigurationTieringPolicy</a>

Describes the data tiering policy for an ONTAP volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#tiering_policy FsxVolume#tiering_policy}

---

##### `VolumeStyle`<sup>Optional</sup> <a name="VolumeStyle" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration.property.volumeStyle"></a>

```csharp
public string VolumeStyle { get; set; }
```

- *Type:* string

Use to specify the style of an ONTAP volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#volume_style FsxVolume#volume_style}

---

### FsxVolumeOntapConfigurationAggregateConfiguration <a name="FsxVolumeOntapConfigurationAggregateConfiguration" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new FsxVolumeOntapConfigurationAggregateConfiguration {
    string[] Aggregates = null,
    double ConstituentsPerAggregate = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfiguration.property.aggregates">Aggregates</a></code> | <code>string[]</code> | The list of aggregates that this volume resides on. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfiguration.property.constituentsPerAggregate">ConstituentsPerAggregate</a></code> | <code>double</code> | Used to explicitly set the number of constituents within the FlexGroup per storage aggregate. |

---

##### `Aggregates`<sup>Optional</sup> <a name="Aggregates" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfiguration.property.aggregates"></a>

```csharp
public string[] Aggregates { get; set; }
```

- *Type:* string[]

The list of aggregates that this volume resides on.

Aggregates are storage pools which make up your primary storage tier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#aggregates FsxVolume#aggregates}

---

##### `ConstituentsPerAggregate`<sup>Optional</sup> <a name="ConstituentsPerAggregate" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfiguration.property.constituentsPerAggregate"></a>

```csharp
public double ConstituentsPerAggregate { get; set; }
```

- *Type:* double

Used to explicitly set the number of constituents within the FlexGroup per storage aggregate.

This field is optional when creating a FlexGroup volume. If unspecified, the default value will be 8. This field cannot be provided when creating a FlexVol volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#constituents_per_aggregate FsxVolume#constituents_per_aggregate}

---

### FsxVolumeOntapConfigurationSnaplockConfiguration <a name="FsxVolumeOntapConfigurationSnaplockConfiguration" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new FsxVolumeOntapConfigurationSnaplockConfiguration {
    string AuditLogVolume = null,
    FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod AutocommitPeriod = null,
    string PrivilegedDelete = null,
    FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod RetentionPeriod = null,
    string SnaplockType = null,
    string VolumeAppendModeEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfiguration.property.auditLogVolume">AuditLogVolume</a></code> | <code>string</code> | Enables or disables the audit log volume for an FSx for ONTAP SnapLock volume. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfiguration.property.autocommitPeriod">AutocommitPeriod</a></code> | <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod">FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod</a></code> | The configuration object for setting the autocommit period of files in an FSx for ONTAP SnapLock volume. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfiguration.property.privilegedDelete">PrivilegedDelete</a></code> | <code>string</code> | Enables, disables, or permanently disables privileged delete on an FSx for ONTAP SnapLock Enterprise volume. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfiguration.property.retentionPeriod">RetentionPeriod</a></code> | <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod</a></code> | Specifies the retention period of an FSx for ONTAP SnapLock volume. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfiguration.property.snaplockType">SnaplockType</a></code> | <code>string</code> | Specifies the retention mode of an FSx for ONTAP SnapLock volume. After it is set, it can't be changed. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfiguration.property.volumeAppendModeEnabled">VolumeAppendModeEnabled</a></code> | <code>string</code> | Enables or disables volume-append mode on an FSx for ONTAP SnapLock volume. |

---

##### `AuditLogVolume`<sup>Optional</sup> <a name="AuditLogVolume" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfiguration.property.auditLogVolume"></a>

```csharp
public string AuditLogVolume { get; set; }
```

- *Type:* string

Enables or disables the audit log volume for an FSx for ONTAP SnapLock volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#audit_log_volume FsxVolume#audit_log_volume}

---

##### `AutocommitPeriod`<sup>Optional</sup> <a name="AutocommitPeriod" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfiguration.property.autocommitPeriod"></a>

```csharp
public FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod AutocommitPeriod { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod">FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod</a>

The configuration object for setting the autocommit period of files in an FSx for ONTAP SnapLock volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#autocommit_period FsxVolume#autocommit_period}

---

##### `PrivilegedDelete`<sup>Optional</sup> <a name="PrivilegedDelete" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfiguration.property.privilegedDelete"></a>

```csharp
public string PrivilegedDelete { get; set; }
```

- *Type:* string

Enables, disables, or permanently disables privileged delete on an FSx for ONTAP SnapLock Enterprise volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#privileged_delete FsxVolume#privileged_delete}

---

##### `RetentionPeriod`<sup>Optional</sup> <a name="RetentionPeriod" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfiguration.property.retentionPeriod"></a>

```csharp
public FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod RetentionPeriod { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod</a>

Specifies the retention period of an FSx for ONTAP SnapLock volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#retention_period FsxVolume#retention_period}

---

##### `SnaplockType`<sup>Optional</sup> <a name="SnaplockType" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfiguration.property.snaplockType"></a>

```csharp
public string SnaplockType { get; set; }
```

- *Type:* string

Specifies the retention mode of an FSx for ONTAP SnapLock volume. After it is set, it can't be changed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#snaplock_type FsxVolume#snaplock_type}

---

##### `VolumeAppendModeEnabled`<sup>Optional</sup> <a name="VolumeAppendModeEnabled" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfiguration.property.volumeAppendModeEnabled"></a>

```csharp
public string VolumeAppendModeEnabled { get; set; }
```

- *Type:* string

Enables or disables volume-append mode on an FSx for ONTAP SnapLock volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#volume_append_mode_enabled FsxVolume#volume_append_mode_enabled}

---

### FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod <a name="FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod {
    string Type = null,
    double Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod.property.type">Type</a></code> | <code>string</code> | Defines the type of time for the autocommit period of a file in an FSx for ONTAP SnapLock volume. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod.property.value">Value</a></code> | <code>double</code> | Defines the amount of time for the autocommit period of a file in an FSx for ONTAP SnapLock volume. |

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Defines the type of time for the autocommit period of a file in an FSx for ONTAP SnapLock volume.

Setting this value to NONE disables autocommit. The default value is NONE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#type FsxVolume#type}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod.property.value"></a>

```csharp
public double Value { get; set; }
```

- *Type:* double

Defines the amount of time for the autocommit period of a file in an FSx for ONTAP SnapLock volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#value FsxVolume#value}

---

### FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod <a name="FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod {
    FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention DefaultRetention = null,
    FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention MaximumRetention = null,
    FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention MinimumRetention = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod.property.defaultRetention">DefaultRetention</a></code> | <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention</a></code> | The retention period assigned to a write once, read many (WORM) file by default if an explicit retention period is not set for an FSx for ONTAP SnapLock volume. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod.property.maximumRetention">MaximumRetention</a></code> | <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention</a></code> | The longest retention period that can be assigned to a WORM file on an FSx for ONTAP SnapLock volume. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod.property.minimumRetention">MinimumRetention</a></code> | <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention</a></code> | The shortest retention period that can be assigned to a WORM file on an FSx for ONTAP SnapLock volume. |

---

##### `DefaultRetention`<sup>Optional</sup> <a name="DefaultRetention" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod.property.defaultRetention"></a>

```csharp
public FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention DefaultRetention { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention</a>

The retention period assigned to a write once, read many (WORM) file by default if an explicit retention period is not set for an FSx for ONTAP SnapLock volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#default_retention FsxVolume#default_retention}

---

##### `MaximumRetention`<sup>Optional</sup> <a name="MaximumRetention" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod.property.maximumRetention"></a>

```csharp
public FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention MaximumRetention { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention</a>

The longest retention period that can be assigned to a WORM file on an FSx for ONTAP SnapLock volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#maximum_retention FsxVolume#maximum_retention}

---

##### `MinimumRetention`<sup>Optional</sup> <a name="MinimumRetention" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod.property.minimumRetention"></a>

```csharp
public FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention MinimumRetention { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention</a>

The shortest retention period that can be assigned to a WORM file on an FSx for ONTAP SnapLock volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#minimum_retention FsxVolume#minimum_retention}

---

### FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention <a name="FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention {
    string Type = null,
    double Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention.property.type">Type</a></code> | <code>string</code> | Defines the type of time for the retention period of an FSx for ONTAP SnapLock volume. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention.property.value">Value</a></code> | <code>double</code> | Defines the amount of time for the retention period of an FSx for ONTAP SnapLock volume. |

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Defines the type of time for the retention period of an FSx for ONTAP SnapLock volume.

Set it to one of the valid types. If you set it to INFINITE, the files are retained forever. If you set it to UNSPECIFIED, the files are retained until you set an explicit retention period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#type FsxVolume#type}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention.property.value"></a>

```csharp
public double Value { get; set; }
```

- *Type:* double

Defines the amount of time for the retention period of an FSx for ONTAP SnapLock volume.

You can't set a value for INFINITE or UNSPECIFIED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#value FsxVolume#value}

---

### FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention <a name="FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention {
    string Type = null,
    double Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention.property.type">Type</a></code> | <code>string</code> | Defines the type of time for the retention period of an FSx for ONTAP SnapLock volume. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention.property.value">Value</a></code> | <code>double</code> | Defines the amount of time for the retention period of an FSx for ONTAP SnapLock volume. |

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Defines the type of time for the retention period of an FSx for ONTAP SnapLock volume.

Set it to one of the valid types. If you set it to INFINITE, the files are retained forever. If you set it to UNSPECIFIED, the files are retained until you set an explicit retention period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#type FsxVolume#type}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention.property.value"></a>

```csharp
public double Value { get; set; }
```

- *Type:* double

Defines the amount of time for the retention period of an FSx for ONTAP SnapLock volume.

You can't set a value for INFINITE or UNSPECIFIED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#value FsxVolume#value}

---

### FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention <a name="FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention {
    string Type = null,
    double Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention.property.type">Type</a></code> | <code>string</code> | Defines the type of time for the retention period of an FSx for ONTAP SnapLock volume. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention.property.value">Value</a></code> | <code>double</code> | Defines the amount of time for the retention period of an FSx for ONTAP SnapLock volume. |

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Defines the type of time for the retention period of an FSx for ONTAP SnapLock volume.

Set it to one of the valid types. If you set it to INFINITE, the files are retained forever. If you set it to UNSPECIFIED, the files are retained until you set an explicit retention period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#type FsxVolume#type}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention.property.value"></a>

```csharp
public double Value { get; set; }
```

- *Type:* double

Defines the amount of time for the retention period of an FSx for ONTAP SnapLock volume.

You can't set a value for INFINITE or UNSPECIFIED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#value FsxVolume#value}

---

### FsxVolumeOntapConfigurationTieringPolicy <a name="FsxVolumeOntapConfigurationTieringPolicy" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new FsxVolumeOntapConfigurationTieringPolicy {
    double CoolingPeriod = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicy.property.coolingPeriod">CoolingPeriod</a></code> | <code>double</code> | Specifies the number of days that user data in a volume must remain inactive before it is considered "cold" and moved to the capacity pool. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicy.property.name">Name</a></code> | <code>string</code> | Specifies the tiering policy used to transition data. Default value is SNAPSHOT_ONLY. |

---

##### `CoolingPeriod`<sup>Optional</sup> <a name="CoolingPeriod" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicy.property.coolingPeriod"></a>

```csharp
public double CoolingPeriod { get; set; }
```

- *Type:* double

Specifies the number of days that user data in a volume must remain inactive before it is considered "cold" and moved to the capacity pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#cooling_period FsxVolume#cooling_period}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicy.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Specifies the tiering policy used to transition data. Default value is SNAPSHOT_ONLY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#name FsxVolume#name}

---

### FsxVolumeOpenZfsConfiguration <a name="FsxVolumeOpenZfsConfiguration" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new FsxVolumeOpenZfsConfiguration {
    bool|IResolvable CopyTagsToSnapshots = null,
    string DataCompressionType = null,
    IResolvable|FsxVolumeOpenZfsConfigurationNfsExports[] NfsExports = null,
    string[] Options = null,
    FsxVolumeOpenZfsConfigurationOriginSnapshot OriginSnapshot = null,
    string ParentVolumeId = null,
    bool|IResolvable ReadOnly = null,
    double RecordSizeKiB = null,
    double StorageCapacityQuotaGiB = null,
    double StorageCapacityReservationGiB = null,
    IResolvable|FsxVolumeOpenZfsConfigurationUserAndGroupQuotas[] UserAndGroupQuotas = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration.property.copyTagsToSnapshots">CopyTagsToSnapshots</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | A Boolean value indicating whether tags for the volume should be copied to snapshots. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration.property.dataCompressionType">DataCompressionType</a></code> | <code>string</code> | Specifies the method used to compress the data on the volume. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration.property.nfsExports">NfsExports</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExports">FsxVolumeOpenZfsConfigurationNfsExports</a>[]</code> | The configuration object for mounting a Network File System (NFS) file system. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration.property.options">Options</a></code> | <code>string[]</code> | The configuration object for mounting a Network File System (NFS) file system. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration.property.originSnapshot">OriginSnapshot</a></code> | <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshot">FsxVolumeOpenZfsConfigurationOriginSnapshot</a></code> | The configuration of an Amazon FSx for OpenZFS volume. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration.property.parentVolumeId">ParentVolumeId</a></code> | <code>string</code> | The ID of the volume to use as the parent volume of the volume that you are creating. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration.property.readOnly">ReadOnly</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | A Boolean value indicating whether the volume is read-only. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration.property.recordSizeKiB">RecordSizeKiB</a></code> | <code>double</code> | Specifies the suggested block size for a volume in a ZFS dataset, in kibibytes (KiB). |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration.property.storageCapacityQuotaGiB">StorageCapacityQuotaGiB</a></code> | <code>double</code> | Sets the maximum storage size in gibibytes (GiB) for the volume. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration.property.storageCapacityReservationGiB">StorageCapacityReservationGiB</a></code> | <code>double</code> | Specifies the amount of storage in gibibytes (GiB) to reserve from the parent volume. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration.property.userAndGroupQuotas">UserAndGroupQuotas</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotas">FsxVolumeOpenZfsConfigurationUserAndGroupQuotas</a>[]</code> | Configures how much storage users and groups can use on the volume. |

---

##### `CopyTagsToSnapshots`<sup>Optional</sup> <a name="CopyTagsToSnapshots" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration.property.copyTagsToSnapshots"></a>

```csharp
public bool|IResolvable CopyTagsToSnapshots { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

A Boolean value indicating whether tags for the volume should be copied to snapshots.

This value defaults to false. If this value is set to true, and you do not specify any tags, all tags for the original volume are copied over to snapshots. If this value is set to true, and you do specify one or more tags, only the specified tags for the original volume are copied over to snapshots. If you specify one or more tags when creating a new snapshot, no tags are copied over from the original volume, regardless of this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#copy_tags_to_snapshots FsxVolume#copy_tags_to_snapshots}

---

##### `DataCompressionType`<sup>Optional</sup> <a name="DataCompressionType" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration.property.dataCompressionType"></a>

```csharp
public string DataCompressionType { get; set; }
```

- *Type:* string

Specifies the method used to compress the data on the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#data_compression_type FsxVolume#data_compression_type}

---

##### `NfsExports`<sup>Optional</sup> <a name="NfsExports" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration.property.nfsExports"></a>

```csharp
public IResolvable|FsxVolumeOpenZfsConfigurationNfsExports[] NfsExports { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExports">FsxVolumeOpenZfsConfigurationNfsExports</a>[]

The configuration object for mounting a Network File System (NFS) file system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#nfs_exports FsxVolume#nfs_exports}

---

##### `Options`<sup>Optional</sup> <a name="Options" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration.property.options"></a>

```csharp
public string[] Options { get; set; }
```

- *Type:* string[]

The configuration object for mounting a Network File System (NFS) file system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#options FsxVolume#options}

---

##### `OriginSnapshot`<sup>Optional</sup> <a name="OriginSnapshot" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration.property.originSnapshot"></a>

```csharp
public FsxVolumeOpenZfsConfigurationOriginSnapshot OriginSnapshot { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshot">FsxVolumeOpenZfsConfigurationOriginSnapshot</a>

The configuration of an Amazon FSx for OpenZFS volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#origin_snapshot FsxVolume#origin_snapshot}

---

##### `ParentVolumeId`<sup>Optional</sup> <a name="ParentVolumeId" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration.property.parentVolumeId"></a>

```csharp
public string ParentVolumeId { get; set; }
```

- *Type:* string

The ID of the volume to use as the parent volume of the volume that you are creating.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#parent_volume_id FsxVolume#parent_volume_id}

---

##### `ReadOnly`<sup>Optional</sup> <a name="ReadOnly" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration.property.readOnly"></a>

```csharp
public bool|IResolvable ReadOnly { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

A Boolean value indicating whether the volume is read-only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#read_only FsxVolume#read_only}

---

##### `RecordSizeKiB`<sup>Optional</sup> <a name="RecordSizeKiB" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration.property.recordSizeKiB"></a>

```csharp
public double RecordSizeKiB { get; set; }
```

- *Type:* double

Specifies the suggested block size for a volume in a ZFS dataset, in kibibytes (KiB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#record_size_ki_b FsxVolume#record_size_ki_b}

---

##### `StorageCapacityQuotaGiB`<sup>Optional</sup> <a name="StorageCapacityQuotaGiB" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration.property.storageCapacityQuotaGiB"></a>

```csharp
public double StorageCapacityQuotaGiB { get; set; }
```

- *Type:* double

Sets the maximum storage size in gibibytes (GiB) for the volume.

You can specify a quota that is larger than the storage on the parent volume. A volume quota limits the amount of storage that the volume can consume to the configured amount, but does not guarantee the space will be available on the parent volume. To guarantee quota space, you must also set StorageCapacityReservationGiB. To not specify a storage capacity quota, set this to -1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#storage_capacity_quota_gi_b FsxVolume#storage_capacity_quota_gi_b}

---

##### `StorageCapacityReservationGiB`<sup>Optional</sup> <a name="StorageCapacityReservationGiB" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration.property.storageCapacityReservationGiB"></a>

```csharp
public double StorageCapacityReservationGiB { get; set; }
```

- *Type:* double

Specifies the amount of storage in gibibytes (GiB) to reserve from the parent volume.

Setting StorageCapacityReservationGiB guarantees that the specified amount of storage space on the parent volume will always be available for the volume. You can't reserve more storage than the parent volume has. To not specify a storage capacity reservation, set this to 0 or -1. For more information, see Volume properties in the Amazon FSx for OpenZFS User Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#storage_capacity_reservation_gi_b FsxVolume#storage_capacity_reservation_gi_b}

---

##### `UserAndGroupQuotas`<sup>Optional</sup> <a name="UserAndGroupQuotas" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration.property.userAndGroupQuotas"></a>

```csharp
public IResolvable|FsxVolumeOpenZfsConfigurationUserAndGroupQuotas[] UserAndGroupQuotas { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotas">FsxVolumeOpenZfsConfigurationUserAndGroupQuotas</a>[]

Configures how much storage users and groups can use on the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#user_and_group_quotas FsxVolume#user_and_group_quotas}

---

### FsxVolumeOpenZfsConfigurationNfsExports <a name="FsxVolumeOpenZfsConfigurationNfsExports" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExports"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExports.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new FsxVolumeOpenZfsConfigurationNfsExports {
    IResolvable|FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations[] ClientConfigurations = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExports.property.clientConfigurations">ClientConfigurations</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations">FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations</a>[]</code> | The configuration object for mounting a Network File System (NFS) file system. |

---

##### `ClientConfigurations`<sup>Optional</sup> <a name="ClientConfigurations" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExports.property.clientConfigurations"></a>

```csharp
public IResolvable|FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations[] ClientConfigurations { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations">FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations</a>[]

The configuration object for mounting a Network File System (NFS) file system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#client_configurations FsxVolume#client_configurations}

---

### FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations <a name="FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations {
    string Clients = null,
    string[] Options = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations.property.clients">Clients</a></code> | <code>string</code> | A value that specifies who can mount the file system. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations.property.options">Options</a></code> | <code>string[]</code> | The configuration object for mounting a Network File System (NFS) file system. |

---

##### `Clients`<sup>Optional</sup> <a name="Clients" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations.property.clients"></a>

```csharp
public string Clients { get; set; }
```

- *Type:* string

A value that specifies who can mount the file system.

You can provide a wildcard character (*), an IP address (0.0.0.0), or a CIDR address (192.0.2.0/24). By default, Amazon FSx uses the wildcard character when specifying the client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#clients FsxVolume#clients}

---

##### `Options`<sup>Optional</sup> <a name="Options" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations.property.options"></a>

```csharp
public string[] Options { get; set; }
```

- *Type:* string[]

The configuration object for mounting a Network File System (NFS) file system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#options FsxVolume#options}

---

### FsxVolumeOpenZfsConfigurationOriginSnapshot <a name="FsxVolumeOpenZfsConfigurationOriginSnapshot" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshot"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshot.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new FsxVolumeOpenZfsConfigurationOriginSnapshot {
    string CopyStrategy = null,
    string SnapshotArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshot.property.copyStrategy">CopyStrategy</a></code> | <code>string</code> | The configuration object for mounting a Network File System (NFS) file system. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshot.property.snapshotArn">SnapshotArn</a></code> | <code>string</code> | Specifies the snapshot to use when creating an OpenZFS volume from a snapshot. |

---

##### `CopyStrategy`<sup>Optional</sup> <a name="CopyStrategy" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshot.property.copyStrategy"></a>

```csharp
public string CopyStrategy { get; set; }
```

- *Type:* string

The configuration object for mounting a Network File System (NFS) file system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#copy_strategy FsxVolume#copy_strategy}

---

##### `SnapshotArn`<sup>Optional</sup> <a name="SnapshotArn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshot.property.snapshotArn"></a>

```csharp
public string SnapshotArn { get; set; }
```

- *Type:* string

Specifies the snapshot to use when creating an OpenZFS volume from a snapshot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#snapshot_arn FsxVolume#snapshot_arn}

---

### FsxVolumeOpenZfsConfigurationUserAndGroupQuotas <a name="FsxVolumeOpenZfsConfigurationUserAndGroupQuotas" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotas"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotas.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new FsxVolumeOpenZfsConfigurationUserAndGroupQuotas {
    double Id = null,
    double StorageCapacityQuotaGiB = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotas.property.id">Id</a></code> | <code>double</code> | The ID of the user or group that the quota applies to. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotas.property.storageCapacityQuotaGiB">StorageCapacityQuotaGiB</a></code> | <code>double</code> | The user or group's storage quota, in gibibytes (GiB). |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotas.property.type">Type</a></code> | <code>string</code> | Specifies whether the quota applies to a user or group. |

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotas.property.id"></a>

```csharp
public double Id { get; set; }
```

- *Type:* double

The ID of the user or group that the quota applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#id FsxVolume#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `StorageCapacityQuotaGiB`<sup>Optional</sup> <a name="StorageCapacityQuotaGiB" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotas.property.storageCapacityQuotaGiB"></a>

```csharp
public double StorageCapacityQuotaGiB { get; set; }
```

- *Type:* double

The user or group's storage quota, in gibibytes (GiB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#storage_capacity_quota_gi_b FsxVolume#storage_capacity_quota_gi_b}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotas.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Specifies whether the quota applies to a user or group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#type FsxVolume#type}

---

### FsxVolumeTags <a name="FsxVolumeTags" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new FsxVolumeTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTags.property.key">Key</a></code> | <code>string</code> | A value that specifies the TagKey, the name of the tag. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTags.property.value">Value</a></code> | <code>string</code> | A value that specifies the TagValue, the value assigned to the corresponding tag key. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

A value that specifies the TagKey, the name of the tag.

Tag keys must be unique for the resource to which they are attached.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#key FsxVolume#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

A value that specifies the TagValue, the value assigned to the corresponding tag key.

Tag values can be null and don't have to be unique in a tag set. For example, you can have a key-value pair in a tag set of finances : April and also of payroll : April.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#value FsxVolume#value}

---

## Classes <a name="Classes" id="Classes"></a>

### FsxVolumeOntapConfigurationAggregateConfigurationOutputReference <a name="FsxVolumeOntapConfigurationAggregateConfigurationOutputReference" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new FsxVolumeOntapConfigurationAggregateConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.resetAggregates">ResetAggregates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.resetConstituentsPerAggregate">ResetConstituentsPerAggregate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAggregates` <a name="ResetAggregates" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.resetAggregates"></a>

```csharp
private void ResetAggregates()
```

##### `ResetConstituentsPerAggregate` <a name="ResetConstituentsPerAggregate" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.resetConstituentsPerAggregate"></a>

```csharp
private void ResetConstituentsPerAggregate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.property.aggregatesInput">AggregatesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.property.constituentsPerAggregateInput">ConstituentsPerAggregateInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.property.aggregates">Aggregates</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.property.constituentsPerAggregate">ConstituentsPerAggregate</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfiguration">FsxVolumeOntapConfigurationAggregateConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AggregatesInput`<sup>Optional</sup> <a name="AggregatesInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.property.aggregatesInput"></a>

```csharp
public string[] AggregatesInput { get; }
```

- *Type:* string[]

---

##### `ConstituentsPerAggregateInput`<sup>Optional</sup> <a name="ConstituentsPerAggregateInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.property.constituentsPerAggregateInput"></a>

```csharp
public double ConstituentsPerAggregateInput { get; }
```

- *Type:* double

---

##### `Aggregates`<sup>Required</sup> <a name="Aggregates" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.property.aggregates"></a>

```csharp
public string[] Aggregates { get; }
```

- *Type:* string[]

---

##### `ConstituentsPerAggregate`<sup>Required</sup> <a name="ConstituentsPerAggregate" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.property.constituentsPerAggregate"></a>

```csharp
public double ConstituentsPerAggregate { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|FsxVolumeOntapConfigurationAggregateConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfiguration">FsxVolumeOntapConfigurationAggregateConfiguration</a>

---


### FsxVolumeOntapConfigurationOutputReference <a name="FsxVolumeOntapConfigurationOutputReference" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new FsxVolumeOntapConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.putAggregateConfiguration">PutAggregateConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.putSnaplockConfiguration">PutSnaplockConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.putTieringPolicy">PutTieringPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resetAggregateConfiguration">ResetAggregateConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resetCopyTagsToBackups">ResetCopyTagsToBackups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resetJunctionPath">ResetJunctionPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resetOntapVolumeType">ResetOntapVolumeType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resetSecurityStyle">ResetSecurityStyle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resetSizeInBytes">ResetSizeInBytes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resetSizeInMegabytes">ResetSizeInMegabytes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resetSnaplockConfiguration">ResetSnaplockConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resetSnapshotPolicy">ResetSnapshotPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resetStorageEfficiencyEnabled">ResetStorageEfficiencyEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resetStorageVirtualMachineId">ResetStorageVirtualMachineId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resetTieringPolicy">ResetTieringPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resetVolumeStyle">ResetVolumeStyle</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAggregateConfiguration` <a name="PutAggregateConfiguration" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.putAggregateConfiguration"></a>

```csharp
private void PutAggregateConfiguration(FsxVolumeOntapConfigurationAggregateConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.putAggregateConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfiguration">FsxVolumeOntapConfigurationAggregateConfiguration</a>

---

##### `PutSnaplockConfiguration` <a name="PutSnaplockConfiguration" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.putSnaplockConfiguration"></a>

```csharp
private void PutSnaplockConfiguration(FsxVolumeOntapConfigurationSnaplockConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.putSnaplockConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfiguration">FsxVolumeOntapConfigurationSnaplockConfiguration</a>

---

##### `PutTieringPolicy` <a name="PutTieringPolicy" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.putTieringPolicy"></a>

```csharp
private void PutTieringPolicy(FsxVolumeOntapConfigurationTieringPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.putTieringPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicy">FsxVolumeOntapConfigurationTieringPolicy</a>

---

##### `ResetAggregateConfiguration` <a name="ResetAggregateConfiguration" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resetAggregateConfiguration"></a>

```csharp
private void ResetAggregateConfiguration()
```

##### `ResetCopyTagsToBackups` <a name="ResetCopyTagsToBackups" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resetCopyTagsToBackups"></a>

```csharp
private void ResetCopyTagsToBackups()
```

##### `ResetJunctionPath` <a name="ResetJunctionPath" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resetJunctionPath"></a>

```csharp
private void ResetJunctionPath()
```

##### `ResetOntapVolumeType` <a name="ResetOntapVolumeType" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resetOntapVolumeType"></a>

```csharp
private void ResetOntapVolumeType()
```

##### `ResetSecurityStyle` <a name="ResetSecurityStyle" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resetSecurityStyle"></a>

```csharp
private void ResetSecurityStyle()
```

##### `ResetSizeInBytes` <a name="ResetSizeInBytes" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resetSizeInBytes"></a>

```csharp
private void ResetSizeInBytes()
```

##### `ResetSizeInMegabytes` <a name="ResetSizeInMegabytes" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resetSizeInMegabytes"></a>

```csharp
private void ResetSizeInMegabytes()
```

##### `ResetSnaplockConfiguration` <a name="ResetSnaplockConfiguration" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resetSnaplockConfiguration"></a>

```csharp
private void ResetSnaplockConfiguration()
```

##### `ResetSnapshotPolicy` <a name="ResetSnapshotPolicy" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resetSnapshotPolicy"></a>

```csharp
private void ResetSnapshotPolicy()
```

##### `ResetStorageEfficiencyEnabled` <a name="ResetStorageEfficiencyEnabled" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resetStorageEfficiencyEnabled"></a>

```csharp
private void ResetStorageEfficiencyEnabled()
```

##### `ResetStorageVirtualMachineId` <a name="ResetStorageVirtualMachineId" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resetStorageVirtualMachineId"></a>

```csharp
private void ResetStorageVirtualMachineId()
```

##### `ResetTieringPolicy` <a name="ResetTieringPolicy" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resetTieringPolicy"></a>

```csharp
private void ResetTieringPolicy()
```

##### `ResetVolumeStyle` <a name="ResetVolumeStyle" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resetVolumeStyle"></a>

```csharp
private void ResetVolumeStyle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.aggregateConfiguration">AggregateConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference">FsxVolumeOntapConfigurationAggregateConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.snaplockConfiguration">SnaplockConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference">FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.tieringPolicy">TieringPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference">FsxVolumeOntapConfigurationTieringPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.aggregateConfigurationInput">AggregateConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfiguration">FsxVolumeOntapConfigurationAggregateConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.copyTagsToBackupsInput">CopyTagsToBackupsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.junctionPathInput">JunctionPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.ontapVolumeTypeInput">OntapVolumeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.securityStyleInput">SecurityStyleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.sizeInBytesInput">SizeInBytesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.sizeInMegabytesInput">SizeInMegabytesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.snaplockConfigurationInput">SnaplockConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfiguration">FsxVolumeOntapConfigurationSnaplockConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.snapshotPolicyInput">SnapshotPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.storageEfficiencyEnabledInput">StorageEfficiencyEnabledInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.storageVirtualMachineIdInput">StorageVirtualMachineIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.tieringPolicyInput">TieringPolicyInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicy">FsxVolumeOntapConfigurationTieringPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.volumeStyleInput">VolumeStyleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.copyTagsToBackups">CopyTagsToBackups</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.junctionPath">JunctionPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.ontapVolumeType">OntapVolumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.securityStyle">SecurityStyle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.sizeInBytes">SizeInBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.sizeInMegabytes">SizeInMegabytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.snapshotPolicy">SnapshotPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.storageEfficiencyEnabled">StorageEfficiencyEnabled</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.storageVirtualMachineId">StorageVirtualMachineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.volumeStyle">VolumeStyle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration">FsxVolumeOntapConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AggregateConfiguration`<sup>Required</sup> <a name="AggregateConfiguration" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.aggregateConfiguration"></a>

```csharp
public FsxVolumeOntapConfigurationAggregateConfigurationOutputReference AggregateConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference">FsxVolumeOntapConfigurationAggregateConfigurationOutputReference</a>

---

##### `SnaplockConfiguration`<sup>Required</sup> <a name="SnaplockConfiguration" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.snaplockConfiguration"></a>

```csharp
public FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference SnaplockConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference">FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference</a>

---

##### `TieringPolicy`<sup>Required</sup> <a name="TieringPolicy" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.tieringPolicy"></a>

```csharp
public FsxVolumeOntapConfigurationTieringPolicyOutputReference TieringPolicy { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference">FsxVolumeOntapConfigurationTieringPolicyOutputReference</a>

---

##### `AggregateConfigurationInput`<sup>Optional</sup> <a name="AggregateConfigurationInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.aggregateConfigurationInput"></a>

```csharp
public IResolvable|FsxVolumeOntapConfigurationAggregateConfiguration AggregateConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfiguration">FsxVolumeOntapConfigurationAggregateConfiguration</a>

---

##### `CopyTagsToBackupsInput`<sup>Optional</sup> <a name="CopyTagsToBackupsInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.copyTagsToBackupsInput"></a>

```csharp
public string CopyTagsToBackupsInput { get; }
```

- *Type:* string

---

##### `JunctionPathInput`<sup>Optional</sup> <a name="JunctionPathInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.junctionPathInput"></a>

```csharp
public string JunctionPathInput { get; }
```

- *Type:* string

---

##### `OntapVolumeTypeInput`<sup>Optional</sup> <a name="OntapVolumeTypeInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.ontapVolumeTypeInput"></a>

```csharp
public string OntapVolumeTypeInput { get; }
```

- *Type:* string

---

##### `SecurityStyleInput`<sup>Optional</sup> <a name="SecurityStyleInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.securityStyleInput"></a>

```csharp
public string SecurityStyleInput { get; }
```

- *Type:* string

---

##### `SizeInBytesInput`<sup>Optional</sup> <a name="SizeInBytesInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.sizeInBytesInput"></a>

```csharp
public string SizeInBytesInput { get; }
```

- *Type:* string

---

##### `SizeInMegabytesInput`<sup>Optional</sup> <a name="SizeInMegabytesInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.sizeInMegabytesInput"></a>

```csharp
public string SizeInMegabytesInput { get; }
```

- *Type:* string

---

##### `SnaplockConfigurationInput`<sup>Optional</sup> <a name="SnaplockConfigurationInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.snaplockConfigurationInput"></a>

```csharp
public IResolvable|FsxVolumeOntapConfigurationSnaplockConfiguration SnaplockConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfiguration">FsxVolumeOntapConfigurationSnaplockConfiguration</a>

---

##### `SnapshotPolicyInput`<sup>Optional</sup> <a name="SnapshotPolicyInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.snapshotPolicyInput"></a>

```csharp
public string SnapshotPolicyInput { get; }
```

- *Type:* string

---

##### `StorageEfficiencyEnabledInput`<sup>Optional</sup> <a name="StorageEfficiencyEnabledInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.storageEfficiencyEnabledInput"></a>

```csharp
public string StorageEfficiencyEnabledInput { get; }
```

- *Type:* string

---

##### `StorageVirtualMachineIdInput`<sup>Optional</sup> <a name="StorageVirtualMachineIdInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.storageVirtualMachineIdInput"></a>

```csharp
public string StorageVirtualMachineIdInput { get; }
```

- *Type:* string

---

##### `TieringPolicyInput`<sup>Optional</sup> <a name="TieringPolicyInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.tieringPolicyInput"></a>

```csharp
public IResolvable|FsxVolumeOntapConfigurationTieringPolicy TieringPolicyInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicy">FsxVolumeOntapConfigurationTieringPolicy</a>

---

##### `VolumeStyleInput`<sup>Optional</sup> <a name="VolumeStyleInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.volumeStyleInput"></a>

```csharp
public string VolumeStyleInput { get; }
```

- *Type:* string

---

##### `CopyTagsToBackups`<sup>Required</sup> <a name="CopyTagsToBackups" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.copyTagsToBackups"></a>

```csharp
public string CopyTagsToBackups { get; }
```

- *Type:* string

---

##### `JunctionPath`<sup>Required</sup> <a name="JunctionPath" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.junctionPath"></a>

```csharp
public string JunctionPath { get; }
```

- *Type:* string

---

##### `OntapVolumeType`<sup>Required</sup> <a name="OntapVolumeType" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.ontapVolumeType"></a>

```csharp
public string OntapVolumeType { get; }
```

- *Type:* string

---

##### `SecurityStyle`<sup>Required</sup> <a name="SecurityStyle" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.securityStyle"></a>

```csharp
public string SecurityStyle { get; }
```

- *Type:* string

---

##### `SizeInBytes`<sup>Required</sup> <a name="SizeInBytes" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.sizeInBytes"></a>

```csharp
public string SizeInBytes { get; }
```

- *Type:* string

---

##### `SizeInMegabytes`<sup>Required</sup> <a name="SizeInMegabytes" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.sizeInMegabytes"></a>

```csharp
public string SizeInMegabytes { get; }
```

- *Type:* string

---

##### `SnapshotPolicy`<sup>Required</sup> <a name="SnapshotPolicy" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.snapshotPolicy"></a>

```csharp
public string SnapshotPolicy { get; }
```

- *Type:* string

---

##### `StorageEfficiencyEnabled`<sup>Required</sup> <a name="StorageEfficiencyEnabled" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.storageEfficiencyEnabled"></a>

```csharp
public string StorageEfficiencyEnabled { get; }
```

- *Type:* string

---

##### `StorageVirtualMachineId`<sup>Required</sup> <a name="StorageVirtualMachineId" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.storageVirtualMachineId"></a>

```csharp
public string StorageVirtualMachineId { get; }
```

- *Type:* string

---

##### `VolumeStyle`<sup>Required</sup> <a name="VolumeStyle" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.volumeStyle"></a>

```csharp
public string VolumeStyle { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|FsxVolumeOntapConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration">FsxVolumeOntapConfiguration</a>

---


### FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference <a name="FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.resetType"></a>

```csharp
private void ResetType()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.property.valueInput">ValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod">FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.property.valueInput"></a>

```csharp
public double ValueInput { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.property.internalValue"></a>

```csharp
public IResolvable|FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod">FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod</a>

---


### FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference <a name="FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.putAutocommitPeriod">PutAutocommitPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.putRetentionPeriod">PutRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.resetAuditLogVolume">ResetAuditLogVolume</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.resetAutocommitPeriod">ResetAutocommitPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.resetPrivilegedDelete">ResetPrivilegedDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.resetRetentionPeriod">ResetRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.resetSnaplockType">ResetSnaplockType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.resetVolumeAppendModeEnabled">ResetVolumeAppendModeEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAutocommitPeriod` <a name="PutAutocommitPeriod" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.putAutocommitPeriod"></a>

```csharp
private void PutAutocommitPeriod(FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.putAutocommitPeriod.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod">FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod</a>

---

##### `PutRetentionPeriod` <a name="PutRetentionPeriod" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.putRetentionPeriod"></a>

```csharp
private void PutRetentionPeriod(FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.putRetentionPeriod.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod</a>

---

##### `ResetAuditLogVolume` <a name="ResetAuditLogVolume" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.resetAuditLogVolume"></a>

```csharp
private void ResetAuditLogVolume()
```

##### `ResetAutocommitPeriod` <a name="ResetAutocommitPeriod" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.resetAutocommitPeriod"></a>

```csharp
private void ResetAutocommitPeriod()
```

##### `ResetPrivilegedDelete` <a name="ResetPrivilegedDelete" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.resetPrivilegedDelete"></a>

```csharp
private void ResetPrivilegedDelete()
```

##### `ResetRetentionPeriod` <a name="ResetRetentionPeriod" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.resetRetentionPeriod"></a>

```csharp
private void ResetRetentionPeriod()
```

##### `ResetSnaplockType` <a name="ResetSnaplockType" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.resetSnaplockType"></a>

```csharp
private void ResetSnaplockType()
```

##### `ResetVolumeAppendModeEnabled` <a name="ResetVolumeAppendModeEnabled" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.resetVolumeAppendModeEnabled"></a>

```csharp
private void ResetVolumeAppendModeEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.autocommitPeriod">AutocommitPeriod</a></code> | <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference">FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.retentionPeriod">RetentionPeriod</a></code> | <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.auditLogVolumeInput">AuditLogVolumeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.autocommitPeriodInput">AutocommitPeriodInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod">FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.privilegedDeleteInput">PrivilegedDeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.retentionPeriodInput">RetentionPeriodInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.snaplockTypeInput">SnaplockTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.volumeAppendModeEnabledInput">VolumeAppendModeEnabledInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.auditLogVolume">AuditLogVolume</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.privilegedDelete">PrivilegedDelete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.snaplockType">SnaplockType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.volumeAppendModeEnabled">VolumeAppendModeEnabled</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfiguration">FsxVolumeOntapConfigurationSnaplockConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutocommitPeriod`<sup>Required</sup> <a name="AutocommitPeriod" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.autocommitPeriod"></a>

```csharp
public FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference AutocommitPeriod { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference">FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference</a>

---

##### `RetentionPeriod`<sup>Required</sup> <a name="RetentionPeriod" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.retentionPeriod"></a>

```csharp
public FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference RetentionPeriod { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference</a>

---

##### `AuditLogVolumeInput`<sup>Optional</sup> <a name="AuditLogVolumeInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.auditLogVolumeInput"></a>

```csharp
public string AuditLogVolumeInput { get; }
```

- *Type:* string

---

##### `AutocommitPeriodInput`<sup>Optional</sup> <a name="AutocommitPeriodInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.autocommitPeriodInput"></a>

```csharp
public IResolvable|FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod AutocommitPeriodInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod">FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod</a>

---

##### `PrivilegedDeleteInput`<sup>Optional</sup> <a name="PrivilegedDeleteInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.privilegedDeleteInput"></a>

```csharp
public string PrivilegedDeleteInput { get; }
```

- *Type:* string

---

##### `RetentionPeriodInput`<sup>Optional</sup> <a name="RetentionPeriodInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.retentionPeriodInput"></a>

```csharp
public IResolvable|FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod RetentionPeriodInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod</a>

---

##### `SnaplockTypeInput`<sup>Optional</sup> <a name="SnaplockTypeInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.snaplockTypeInput"></a>

```csharp
public string SnaplockTypeInput { get; }
```

- *Type:* string

---

##### `VolumeAppendModeEnabledInput`<sup>Optional</sup> <a name="VolumeAppendModeEnabledInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.volumeAppendModeEnabledInput"></a>

```csharp
public string VolumeAppendModeEnabledInput { get; }
```

- *Type:* string

---

##### `AuditLogVolume`<sup>Required</sup> <a name="AuditLogVolume" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.auditLogVolume"></a>

```csharp
public string AuditLogVolume { get; }
```

- *Type:* string

---

##### `PrivilegedDelete`<sup>Required</sup> <a name="PrivilegedDelete" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.privilegedDelete"></a>

```csharp
public string PrivilegedDelete { get; }
```

- *Type:* string

---

##### `SnaplockType`<sup>Required</sup> <a name="SnaplockType" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.snaplockType"></a>

```csharp
public string SnaplockType { get; }
```

- *Type:* string

---

##### `VolumeAppendModeEnabled`<sup>Required</sup> <a name="VolumeAppendModeEnabled" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.volumeAppendModeEnabled"></a>

```csharp
public string VolumeAppendModeEnabled { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|FsxVolumeOntapConfigurationSnaplockConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfiguration">FsxVolumeOntapConfigurationSnaplockConfiguration</a>

---


### FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference <a name="FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.resetType"></a>

```csharp
private void ResetType()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.valueInput">ValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.valueInput"></a>

```csharp
public double ValueInput { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention</a>

---


### FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference <a name="FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.resetType"></a>

```csharp
private void ResetType()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.valueInput">ValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.valueInput"></a>

```csharp
public double ValueInput { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention</a>

---


### FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference <a name="FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.resetType"></a>

```csharp
private void ResetType()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.valueInput">ValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.valueInput"></a>

```csharp
public double ValueInput { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention</a>

---


### FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference <a name="FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.putDefaultRetention">PutDefaultRetention</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.putMaximumRetention">PutMaximumRetention</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.putMinimumRetention">PutMinimumRetention</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.resetDefaultRetention">ResetDefaultRetention</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.resetMaximumRetention">ResetMaximumRetention</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.resetMinimumRetention">ResetMinimumRetention</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDefaultRetention` <a name="PutDefaultRetention" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.putDefaultRetention"></a>

```csharp
private void PutDefaultRetention(FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.putDefaultRetention.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention</a>

---

##### `PutMaximumRetention` <a name="PutMaximumRetention" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.putMaximumRetention"></a>

```csharp
private void PutMaximumRetention(FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.putMaximumRetention.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention</a>

---

##### `PutMinimumRetention` <a name="PutMinimumRetention" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.putMinimumRetention"></a>

```csharp
private void PutMinimumRetention(FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.putMinimumRetention.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention</a>

---

##### `ResetDefaultRetention` <a name="ResetDefaultRetention" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.resetDefaultRetention"></a>

```csharp
private void ResetDefaultRetention()
```

##### `ResetMaximumRetention` <a name="ResetMaximumRetention" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.resetMaximumRetention"></a>

```csharp
private void ResetMaximumRetention()
```

##### `ResetMinimumRetention` <a name="ResetMinimumRetention" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.resetMinimumRetention"></a>

```csharp
private void ResetMinimumRetention()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.property.defaultRetention">DefaultRetention</a></code> | <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.property.maximumRetention">MaximumRetention</a></code> | <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.property.minimumRetention">MinimumRetention</a></code> | <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.property.defaultRetentionInput">DefaultRetentionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.property.maximumRetentionInput">MaximumRetentionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.property.minimumRetentionInput">MinimumRetentionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefaultRetention`<sup>Required</sup> <a name="DefaultRetention" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.property.defaultRetention"></a>

```csharp
public FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference DefaultRetention { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference</a>

---

##### `MaximumRetention`<sup>Required</sup> <a name="MaximumRetention" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.property.maximumRetention"></a>

```csharp
public FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference MaximumRetention { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference</a>

---

##### `MinimumRetention`<sup>Required</sup> <a name="MinimumRetention" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.property.minimumRetention"></a>

```csharp
public FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference MinimumRetention { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference</a>

---

##### `DefaultRetentionInput`<sup>Optional</sup> <a name="DefaultRetentionInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.property.defaultRetentionInput"></a>

```csharp
public IResolvable|FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention DefaultRetentionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention</a>

---

##### `MaximumRetentionInput`<sup>Optional</sup> <a name="MaximumRetentionInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.property.maximumRetentionInput"></a>

```csharp
public IResolvable|FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention MaximumRetentionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention</a>

---

##### `MinimumRetentionInput`<sup>Optional</sup> <a name="MinimumRetentionInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.property.minimumRetentionInput"></a>

```csharp
public IResolvable|FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention MinimumRetentionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.property.internalValue"></a>

```csharp
public IResolvable|FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod</a>

---


### FsxVolumeOntapConfigurationTieringPolicyOutputReference <a name="FsxVolumeOntapConfigurationTieringPolicyOutputReference" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new FsxVolumeOntapConfigurationTieringPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.resetCoolingPeriod">ResetCoolingPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCoolingPeriod` <a name="ResetCoolingPeriod" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.resetCoolingPeriod"></a>

```csharp
private void ResetCoolingPeriod()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.property.coolingPeriodInput">CoolingPeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.property.coolingPeriod">CoolingPeriod</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicy">FsxVolumeOntapConfigurationTieringPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CoolingPeriodInput`<sup>Optional</sup> <a name="CoolingPeriodInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.property.coolingPeriodInput"></a>

```csharp
public double CoolingPeriodInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `CoolingPeriod`<sup>Required</sup> <a name="CoolingPeriod" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.property.coolingPeriod"></a>

```csharp
public double CoolingPeriod { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|FsxVolumeOntapConfigurationTieringPolicy InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicy">FsxVolumeOntapConfigurationTieringPolicy</a>

---


### FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList <a name="FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.get"></a>

```csharp
private FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations">FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.property.internalValue"></a>

```csharp
public IResolvable|FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations">FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations</a>[]

---


### FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference <a name="FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.resetClients">ResetClients</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.resetOptions">ResetOptions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClients` <a name="ResetClients" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.resetClients"></a>

```csharp
private void ResetClients()
```

##### `ResetOptions` <a name="ResetOptions" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.resetOptions"></a>

```csharp
private void ResetOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.property.clientsInput">ClientsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.property.optionsInput">OptionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.property.clients">Clients</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.property.options">Options</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations">FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientsInput`<sup>Optional</sup> <a name="ClientsInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.property.clientsInput"></a>

```csharp
public string ClientsInput { get; }
```

- *Type:* string

---

##### `OptionsInput`<sup>Optional</sup> <a name="OptionsInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.property.optionsInput"></a>

```csharp
public string[] OptionsInput { get; }
```

- *Type:* string[]

---

##### `Clients`<sup>Required</sup> <a name="Clients" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.property.clients"></a>

```csharp
public string Clients { get; }
```

- *Type:* string

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.property.options"></a>

```csharp
public string[] Options { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations">FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations</a>

---


### FsxVolumeOpenZfsConfigurationNfsExportsList <a name="FsxVolumeOpenZfsConfigurationNfsExportsList" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new FsxVolumeOpenZfsConfigurationNfsExportsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList.get"></a>

```csharp
private FsxVolumeOpenZfsConfigurationNfsExportsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExports">FsxVolumeOpenZfsConfigurationNfsExports</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList.property.internalValue"></a>

```csharp
public IResolvable|FsxVolumeOpenZfsConfigurationNfsExports[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExports">FsxVolumeOpenZfsConfigurationNfsExports</a>[]

---


### FsxVolumeOpenZfsConfigurationNfsExportsOutputReference <a name="FsxVolumeOpenZfsConfigurationNfsExportsOutputReference" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new FsxVolumeOpenZfsConfigurationNfsExportsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.putClientConfigurations">PutClientConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.resetClientConfigurations">ResetClientConfigurations</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutClientConfigurations` <a name="PutClientConfigurations" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.putClientConfigurations"></a>

```csharp
private void PutClientConfigurations(IResolvable|FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.putClientConfigurations.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations">FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations</a>[]

---

##### `ResetClientConfigurations` <a name="ResetClientConfigurations" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.resetClientConfigurations"></a>

```csharp
private void ResetClientConfigurations()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.property.clientConfigurations">ClientConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList">FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.property.clientConfigurationsInput">ClientConfigurationsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations">FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExports">FsxVolumeOpenZfsConfigurationNfsExports</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientConfigurations`<sup>Required</sup> <a name="ClientConfigurations" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.property.clientConfigurations"></a>

```csharp
public FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList ClientConfigurations { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList">FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList</a>

---

##### `ClientConfigurationsInput`<sup>Optional</sup> <a name="ClientConfigurationsInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.property.clientConfigurationsInput"></a>

```csharp
public IResolvable|FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations[] ClientConfigurationsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations">FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|FsxVolumeOpenZfsConfigurationNfsExports InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExports">FsxVolumeOpenZfsConfigurationNfsExports</a>

---


### FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference <a name="FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.resetCopyStrategy">ResetCopyStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.resetSnapshotArn">ResetSnapshotArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCopyStrategy` <a name="ResetCopyStrategy" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.resetCopyStrategy"></a>

```csharp
private void ResetCopyStrategy()
```

##### `ResetSnapshotArn` <a name="ResetSnapshotArn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.resetSnapshotArn"></a>

```csharp
private void ResetSnapshotArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.property.copyStrategyInput">CopyStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.property.snapshotArnInput">SnapshotArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.property.copyStrategy">CopyStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.property.snapshotArn">SnapshotArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshot">FsxVolumeOpenZfsConfigurationOriginSnapshot</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CopyStrategyInput`<sup>Optional</sup> <a name="CopyStrategyInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.property.copyStrategyInput"></a>

```csharp
public string CopyStrategyInput { get; }
```

- *Type:* string

---

##### `SnapshotArnInput`<sup>Optional</sup> <a name="SnapshotArnInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.property.snapshotArnInput"></a>

```csharp
public string SnapshotArnInput { get; }
```

- *Type:* string

---

##### `CopyStrategy`<sup>Required</sup> <a name="CopyStrategy" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.property.copyStrategy"></a>

```csharp
public string CopyStrategy { get; }
```

- *Type:* string

---

##### `SnapshotArn`<sup>Required</sup> <a name="SnapshotArn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.property.snapshotArn"></a>

```csharp
public string SnapshotArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.property.internalValue"></a>

```csharp
public IResolvable|FsxVolumeOpenZfsConfigurationOriginSnapshot InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshot">FsxVolumeOpenZfsConfigurationOriginSnapshot</a>

---


### FsxVolumeOpenZfsConfigurationOutputReference <a name="FsxVolumeOpenZfsConfigurationOutputReference" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new FsxVolumeOpenZfsConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.putNfsExports">PutNfsExports</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.putOriginSnapshot">PutOriginSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.putUserAndGroupQuotas">PutUserAndGroupQuotas</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.resetCopyTagsToSnapshots">ResetCopyTagsToSnapshots</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.resetDataCompressionType">ResetDataCompressionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.resetNfsExports">ResetNfsExports</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.resetOptions">ResetOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.resetOriginSnapshot">ResetOriginSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.resetParentVolumeId">ResetParentVolumeId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.resetReadOnly">ResetReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.resetRecordSizeKiB">ResetRecordSizeKiB</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.resetStorageCapacityQuotaGiB">ResetStorageCapacityQuotaGiB</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.resetStorageCapacityReservationGiB">ResetStorageCapacityReservationGiB</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.resetUserAndGroupQuotas">ResetUserAndGroupQuotas</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNfsExports` <a name="PutNfsExports" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.putNfsExports"></a>

```csharp
private void PutNfsExports(IResolvable|FsxVolumeOpenZfsConfigurationNfsExports[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.putNfsExports.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExports">FsxVolumeOpenZfsConfigurationNfsExports</a>[]

---

##### `PutOriginSnapshot` <a name="PutOriginSnapshot" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.putOriginSnapshot"></a>

```csharp
private void PutOriginSnapshot(FsxVolumeOpenZfsConfigurationOriginSnapshot Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.putOriginSnapshot.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshot">FsxVolumeOpenZfsConfigurationOriginSnapshot</a>

---

##### `PutUserAndGroupQuotas` <a name="PutUserAndGroupQuotas" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.putUserAndGroupQuotas"></a>

```csharp
private void PutUserAndGroupQuotas(IResolvable|FsxVolumeOpenZfsConfigurationUserAndGroupQuotas[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.putUserAndGroupQuotas.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotas">FsxVolumeOpenZfsConfigurationUserAndGroupQuotas</a>[]

---

##### `ResetCopyTagsToSnapshots` <a name="ResetCopyTagsToSnapshots" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.resetCopyTagsToSnapshots"></a>

```csharp
private void ResetCopyTagsToSnapshots()
```

##### `ResetDataCompressionType` <a name="ResetDataCompressionType" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.resetDataCompressionType"></a>

```csharp
private void ResetDataCompressionType()
```

##### `ResetNfsExports` <a name="ResetNfsExports" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.resetNfsExports"></a>

```csharp
private void ResetNfsExports()
```

##### `ResetOptions` <a name="ResetOptions" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.resetOptions"></a>

```csharp
private void ResetOptions()
```

##### `ResetOriginSnapshot` <a name="ResetOriginSnapshot" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.resetOriginSnapshot"></a>

```csharp
private void ResetOriginSnapshot()
```

##### `ResetParentVolumeId` <a name="ResetParentVolumeId" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.resetParentVolumeId"></a>

```csharp
private void ResetParentVolumeId()
```

##### `ResetReadOnly` <a name="ResetReadOnly" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.resetReadOnly"></a>

```csharp
private void ResetReadOnly()
```

##### `ResetRecordSizeKiB` <a name="ResetRecordSizeKiB" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.resetRecordSizeKiB"></a>

```csharp
private void ResetRecordSizeKiB()
```

##### `ResetStorageCapacityQuotaGiB` <a name="ResetStorageCapacityQuotaGiB" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.resetStorageCapacityQuotaGiB"></a>

```csharp
private void ResetStorageCapacityQuotaGiB()
```

##### `ResetStorageCapacityReservationGiB` <a name="ResetStorageCapacityReservationGiB" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.resetStorageCapacityReservationGiB"></a>

```csharp
private void ResetStorageCapacityReservationGiB()
```

##### `ResetUserAndGroupQuotas` <a name="ResetUserAndGroupQuotas" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.resetUserAndGroupQuotas"></a>

```csharp
private void ResetUserAndGroupQuotas()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.nfsExports">NfsExports</a></code> | <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList">FsxVolumeOpenZfsConfigurationNfsExportsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.originSnapshot">OriginSnapshot</a></code> | <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference">FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.userAndGroupQuotas">UserAndGroupQuotas</a></code> | <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList">FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.copyTagsToSnapshotsInput">CopyTagsToSnapshotsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.dataCompressionTypeInput">DataCompressionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.nfsExportsInput">NfsExportsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExports">FsxVolumeOpenZfsConfigurationNfsExports</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.optionsInput">OptionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.originSnapshotInput">OriginSnapshotInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshot">FsxVolumeOpenZfsConfigurationOriginSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.parentVolumeIdInput">ParentVolumeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.readOnlyInput">ReadOnlyInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.recordSizeKiBInput">RecordSizeKiBInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.storageCapacityQuotaGiBInput">StorageCapacityQuotaGiBInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.storageCapacityReservationGiBInput">StorageCapacityReservationGiBInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.userAndGroupQuotasInput">UserAndGroupQuotasInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotas">FsxVolumeOpenZfsConfigurationUserAndGroupQuotas</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.copyTagsToSnapshots">CopyTagsToSnapshots</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.dataCompressionType">DataCompressionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.options">Options</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.parentVolumeId">ParentVolumeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.readOnly">ReadOnly</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.recordSizeKiB">RecordSizeKiB</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.storageCapacityQuotaGiB">StorageCapacityQuotaGiB</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.storageCapacityReservationGiB">StorageCapacityReservationGiB</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration">FsxVolumeOpenZfsConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NfsExports`<sup>Required</sup> <a name="NfsExports" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.nfsExports"></a>

```csharp
public FsxVolumeOpenZfsConfigurationNfsExportsList NfsExports { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList">FsxVolumeOpenZfsConfigurationNfsExportsList</a>

---

##### `OriginSnapshot`<sup>Required</sup> <a name="OriginSnapshot" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.originSnapshot"></a>

```csharp
public FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference OriginSnapshot { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference">FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference</a>

---

##### `UserAndGroupQuotas`<sup>Required</sup> <a name="UserAndGroupQuotas" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.userAndGroupQuotas"></a>

```csharp
public FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList UserAndGroupQuotas { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList">FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList</a>

---

##### `CopyTagsToSnapshotsInput`<sup>Optional</sup> <a name="CopyTagsToSnapshotsInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.copyTagsToSnapshotsInput"></a>

```csharp
public bool|IResolvable CopyTagsToSnapshotsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DataCompressionTypeInput`<sup>Optional</sup> <a name="DataCompressionTypeInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.dataCompressionTypeInput"></a>

```csharp
public string DataCompressionTypeInput { get; }
```

- *Type:* string

---

##### `NfsExportsInput`<sup>Optional</sup> <a name="NfsExportsInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.nfsExportsInput"></a>

```csharp
public IResolvable|FsxVolumeOpenZfsConfigurationNfsExports[] NfsExportsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExports">FsxVolumeOpenZfsConfigurationNfsExports</a>[]

---

##### `OptionsInput`<sup>Optional</sup> <a name="OptionsInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.optionsInput"></a>

```csharp
public string[] OptionsInput { get; }
```

- *Type:* string[]

---

##### `OriginSnapshotInput`<sup>Optional</sup> <a name="OriginSnapshotInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.originSnapshotInput"></a>

```csharp
public IResolvable|FsxVolumeOpenZfsConfigurationOriginSnapshot OriginSnapshotInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshot">FsxVolumeOpenZfsConfigurationOriginSnapshot</a>

---

##### `ParentVolumeIdInput`<sup>Optional</sup> <a name="ParentVolumeIdInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.parentVolumeIdInput"></a>

```csharp
public string ParentVolumeIdInput { get; }
```

- *Type:* string

---

##### `ReadOnlyInput`<sup>Optional</sup> <a name="ReadOnlyInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.readOnlyInput"></a>

```csharp
public bool|IResolvable ReadOnlyInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RecordSizeKiBInput`<sup>Optional</sup> <a name="RecordSizeKiBInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.recordSizeKiBInput"></a>

```csharp
public double RecordSizeKiBInput { get; }
```

- *Type:* double

---

##### `StorageCapacityQuotaGiBInput`<sup>Optional</sup> <a name="StorageCapacityQuotaGiBInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.storageCapacityQuotaGiBInput"></a>

```csharp
public double StorageCapacityQuotaGiBInput { get; }
```

- *Type:* double

---

##### `StorageCapacityReservationGiBInput`<sup>Optional</sup> <a name="StorageCapacityReservationGiBInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.storageCapacityReservationGiBInput"></a>

```csharp
public double StorageCapacityReservationGiBInput { get; }
```

- *Type:* double

---

##### `UserAndGroupQuotasInput`<sup>Optional</sup> <a name="UserAndGroupQuotasInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.userAndGroupQuotasInput"></a>

```csharp
public IResolvable|FsxVolumeOpenZfsConfigurationUserAndGroupQuotas[] UserAndGroupQuotasInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotas">FsxVolumeOpenZfsConfigurationUserAndGroupQuotas</a>[]

---

##### `CopyTagsToSnapshots`<sup>Required</sup> <a name="CopyTagsToSnapshots" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.copyTagsToSnapshots"></a>

```csharp
public bool|IResolvable CopyTagsToSnapshots { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DataCompressionType`<sup>Required</sup> <a name="DataCompressionType" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.dataCompressionType"></a>

```csharp
public string DataCompressionType { get; }
```

- *Type:* string

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.options"></a>

```csharp
public string[] Options { get; }
```

- *Type:* string[]

---

##### `ParentVolumeId`<sup>Required</sup> <a name="ParentVolumeId" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.parentVolumeId"></a>

```csharp
public string ParentVolumeId { get; }
```

- *Type:* string

---

##### `ReadOnly`<sup>Required</sup> <a name="ReadOnly" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.readOnly"></a>

```csharp
public bool|IResolvable ReadOnly { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RecordSizeKiB`<sup>Required</sup> <a name="RecordSizeKiB" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.recordSizeKiB"></a>

```csharp
public double RecordSizeKiB { get; }
```

- *Type:* double

---

##### `StorageCapacityQuotaGiB`<sup>Required</sup> <a name="StorageCapacityQuotaGiB" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.storageCapacityQuotaGiB"></a>

```csharp
public double StorageCapacityQuotaGiB { get; }
```

- *Type:* double

---

##### `StorageCapacityReservationGiB`<sup>Required</sup> <a name="StorageCapacityReservationGiB" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.storageCapacityReservationGiB"></a>

```csharp
public double StorageCapacityReservationGiB { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|FsxVolumeOpenZfsConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration">FsxVolumeOpenZfsConfiguration</a>

---


### FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList <a name="FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.get"></a>

```csharp
private FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotas">FsxVolumeOpenZfsConfigurationUserAndGroupQuotas</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.property.internalValue"></a>

```csharp
public IResolvable|FsxVolumeOpenZfsConfigurationUserAndGroupQuotas[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotas">FsxVolumeOpenZfsConfigurationUserAndGroupQuotas</a>[]

---


### FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference <a name="FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.resetStorageCapacityQuotaGiB">ResetStorageCapacityQuotaGiB</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetStorageCapacityQuotaGiB` <a name="ResetStorageCapacityQuotaGiB" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.resetStorageCapacityQuotaGiB"></a>

```csharp
private void ResetStorageCapacityQuotaGiB()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.property.idInput">IdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.property.storageCapacityQuotaGiBInput">StorageCapacityQuotaGiBInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.property.id">Id</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.property.storageCapacityQuotaGiB">StorageCapacityQuotaGiB</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotas">FsxVolumeOpenZfsConfigurationUserAndGroupQuotas</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.property.idInput"></a>

```csharp
public double IdInput { get; }
```

- *Type:* double

---

##### `StorageCapacityQuotaGiBInput`<sup>Optional</sup> <a name="StorageCapacityQuotaGiBInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.property.storageCapacityQuotaGiBInput"></a>

```csharp
public double StorageCapacityQuotaGiBInput { get; }
```

- *Type:* double

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.property.id"></a>

```csharp
public double Id { get; }
```

- *Type:* double

---

##### `StorageCapacityQuotaGiB`<sup>Required</sup> <a name="StorageCapacityQuotaGiB" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.property.storageCapacityQuotaGiB"></a>

```csharp
public double StorageCapacityQuotaGiB { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.property.internalValue"></a>

```csharp
public IResolvable|FsxVolumeOpenZfsConfigurationUserAndGroupQuotas InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotas">FsxVolumeOpenZfsConfigurationUserAndGroupQuotas</a>

---


### FsxVolumeTagsList <a name="FsxVolumeTagsList" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new FsxVolumeTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList.get"></a>

```csharp
private FsxVolumeTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTags">FsxVolumeTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList.property.internalValue"></a>

```csharp
public IResolvable|FsxVolumeTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTags">FsxVolumeTags</a>[]

---


### FsxVolumeTagsOutputReference <a name="FsxVolumeTagsOutputReference" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new FsxVolumeTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTags">FsxVolumeTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|FsxVolumeTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTags">FsxVolumeTags</a>

---



