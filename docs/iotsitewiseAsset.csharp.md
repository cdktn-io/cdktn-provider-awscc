# `iotsitewiseAsset` Submodule <a name="`iotsitewiseAsset` Submodule" id="@cdktn/provider-awscc.iotsitewiseAsset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotsitewiseAsset <a name="IotsitewiseAsset" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_asset awscc_iotsitewise_asset}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotsitewiseAsset(Construct Scope, string Id, IotsitewiseAssetConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig">IotsitewiseAssetConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig">IotsitewiseAssetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.putAssetHierarchies">PutAssetHierarchies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.putAssetProperties">PutAssetProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.resetAssetDescription">ResetAssetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.resetAssetExternalId">ResetAssetExternalId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.resetAssetHierarchies">ResetAssetHierarchies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.resetAssetProperties">ResetAssetProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAssetHierarchies` <a name="PutAssetHierarchies" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.putAssetHierarchies"></a>

```csharp
private void PutAssetHierarchies(IResolvable|IotsitewiseAssetAssetHierarchies[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.putAssetHierarchies.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchies">IotsitewiseAssetAssetHierarchies</a>[]

---

##### `PutAssetProperties` <a name="PutAssetProperties" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.putAssetProperties"></a>

```csharp
private void PutAssetProperties(IResolvable|IotsitewiseAssetAssetProperties[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.putAssetProperties.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetProperties">IotsitewiseAssetAssetProperties</a>[]

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.putTags"></a>

```csharp
private void PutTags(IResolvable|IotsitewiseAssetTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTags">IotsitewiseAssetTags</a>[]

---

##### `ResetAssetDescription` <a name="ResetAssetDescription" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.resetAssetDescription"></a>

```csharp
private void ResetAssetDescription()
```

##### `ResetAssetExternalId` <a name="ResetAssetExternalId" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.resetAssetExternalId"></a>

```csharp
private void ResetAssetExternalId()
```

##### `ResetAssetHierarchies` <a name="ResetAssetHierarchies" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.resetAssetHierarchies"></a>

```csharp
private void ResetAssetHierarchies()
```

##### `ResetAssetProperties` <a name="ResetAssetProperties" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.resetAssetProperties"></a>

```csharp
private void ResetAssetProperties()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a IotsitewiseAsset resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IotsitewiseAsset.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IotsitewiseAsset.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IotsitewiseAsset.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IotsitewiseAsset.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a IotsitewiseAsset resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IotsitewiseAsset to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IotsitewiseAsset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_asset#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the IotsitewiseAsset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetArn">AssetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetHierarchies">AssetHierarchies</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList">IotsitewiseAssetAssetHierarchiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetId">AssetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetProperties">AssetProperties</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList">IotsitewiseAssetAssetPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList">IotsitewiseAssetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetDescriptionInput">AssetDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetExternalIdInput">AssetExternalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetHierarchiesInput">AssetHierarchiesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchies">IotsitewiseAssetAssetHierarchies</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetModelIdInput">AssetModelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetNameInput">AssetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetPropertiesInput">AssetPropertiesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetProperties">IotsitewiseAssetAssetProperties</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTags">IotsitewiseAssetTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetDescription">AssetDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetExternalId">AssetExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetModelId">AssetModelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetName">AssetName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AssetArn`<sup>Required</sup> <a name="AssetArn" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetArn"></a>

```csharp
public string AssetArn { get; }
```

- *Type:* string

---

##### `AssetHierarchies`<sup>Required</sup> <a name="AssetHierarchies" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetHierarchies"></a>

```csharp
public IotsitewiseAssetAssetHierarchiesList AssetHierarchies { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList">IotsitewiseAssetAssetHierarchiesList</a>

---

##### `AssetId`<sup>Required</sup> <a name="AssetId" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetId"></a>

```csharp
public string AssetId { get; }
```

- *Type:* string

---

##### `AssetProperties`<sup>Required</sup> <a name="AssetProperties" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetProperties"></a>

```csharp
public IotsitewiseAssetAssetPropertiesList AssetProperties { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList">IotsitewiseAssetAssetPropertiesList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.tags"></a>

```csharp
public IotsitewiseAssetTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList">IotsitewiseAssetTagsList</a>

---

##### `AssetDescriptionInput`<sup>Optional</sup> <a name="AssetDescriptionInput" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetDescriptionInput"></a>

```csharp
public string AssetDescriptionInput { get; }
```

- *Type:* string

---

##### `AssetExternalIdInput`<sup>Optional</sup> <a name="AssetExternalIdInput" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetExternalIdInput"></a>

```csharp
public string AssetExternalIdInput { get; }
```

- *Type:* string

---

##### `AssetHierarchiesInput`<sup>Optional</sup> <a name="AssetHierarchiesInput" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetHierarchiesInput"></a>

```csharp
public IResolvable|IotsitewiseAssetAssetHierarchies[] AssetHierarchiesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchies">IotsitewiseAssetAssetHierarchies</a>[]

---

##### `AssetModelIdInput`<sup>Optional</sup> <a name="AssetModelIdInput" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetModelIdInput"></a>

```csharp
public string AssetModelIdInput { get; }
```

- *Type:* string

---

##### `AssetNameInput`<sup>Optional</sup> <a name="AssetNameInput" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetNameInput"></a>

```csharp
public string AssetNameInput { get; }
```

- *Type:* string

---

##### `AssetPropertiesInput`<sup>Optional</sup> <a name="AssetPropertiesInput" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetPropertiesInput"></a>

```csharp
public IResolvable|IotsitewiseAssetAssetProperties[] AssetPropertiesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetProperties">IotsitewiseAssetAssetProperties</a>[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.tagsInput"></a>

```csharp
public IResolvable|IotsitewiseAssetTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTags">IotsitewiseAssetTags</a>[]

---

##### `AssetDescription`<sup>Required</sup> <a name="AssetDescription" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetDescription"></a>

```csharp
public string AssetDescription { get; }
```

- *Type:* string

---

##### `AssetExternalId`<sup>Required</sup> <a name="AssetExternalId" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetExternalId"></a>

```csharp
public string AssetExternalId { get; }
```

- *Type:* string

---

##### `AssetModelId`<sup>Required</sup> <a name="AssetModelId" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetModelId"></a>

```csharp
public string AssetModelId { get; }
```

- *Type:* string

---

##### `AssetName`<sup>Required</sup> <a name="AssetName" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetName"></a>

```csharp
public string AssetName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IotsitewiseAssetAssetHierarchies <a name="IotsitewiseAssetAssetHierarchies" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchies.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotsitewiseAssetAssetHierarchies {
    string ChildAssetId = null,
    string ExternalId = null,
    string Id = null,
    string LogicalId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchies.property.childAssetId">ChildAssetId</a></code> | <code>string</code> | The ID of the child asset to be associated. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchies.property.externalId">ExternalId</a></code> | <code>string</code> | String-friendly customer provided external ID. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchies.property.id">Id</a></code> | <code>string</code> | Customer provided actual UUID for property. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchies.property.logicalId">LogicalId</a></code> | <code>string</code> | The LogicalID of a hierarchy in the parent asset's model. |

---

##### `ChildAssetId`<sup>Optional</sup> <a name="ChildAssetId" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchies.property.childAssetId"></a>

```csharp
public string ChildAssetId { get; set; }
```

- *Type:* string

The ID of the child asset to be associated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_asset#child_asset_id IotsitewiseAsset#child_asset_id}

---

##### `ExternalId`<sup>Optional</sup> <a name="ExternalId" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchies.property.externalId"></a>

```csharp
public string ExternalId { get; set; }
```

- *Type:* string

String-friendly customer provided external ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_asset#external_id IotsitewiseAsset#external_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchies.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Customer provided actual UUID for property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_asset#id IotsitewiseAsset#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LogicalId`<sup>Optional</sup> <a name="LogicalId" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchies.property.logicalId"></a>

```csharp
public string LogicalId { get; set; }
```

- *Type:* string

The LogicalID of a hierarchy in the parent asset's model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_asset#logical_id IotsitewiseAsset#logical_id}

---

### IotsitewiseAssetAssetProperties <a name="IotsitewiseAssetAssetProperties" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetProperties.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotsitewiseAssetAssetProperties {
    string Alias = null,
    string ExternalId = null,
    string Id = null,
    string LogicalId = null,
    string NotificationState = null,
    string Unit = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetProperties.property.alias">Alias</a></code> | <code>string</code> | The property alias that identifies the property. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetProperties.property.externalId">ExternalId</a></code> | <code>string</code> | String-friendly customer provided external ID. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetProperties.property.id">Id</a></code> | <code>string</code> | Customer provided actual UUID for property. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetProperties.property.logicalId">LogicalId</a></code> | <code>string</code> | Customer provided ID for property. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetProperties.property.notificationState">NotificationState</a></code> | <code>string</code> | The MQTT notification state (ENABLED or DISABLED) for this asset property. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetProperties.property.unit">Unit</a></code> | <code>string</code> | The unit of measure (such as Newtons or RPM) of the asset property. |

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetProperties.property.alias"></a>

```csharp
public string Alias { get; set; }
```

- *Type:* string

The property alias that identifies the property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_asset#alias IotsitewiseAsset#alias}

---

##### `ExternalId`<sup>Optional</sup> <a name="ExternalId" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetProperties.property.externalId"></a>

```csharp
public string ExternalId { get; set; }
```

- *Type:* string

String-friendly customer provided external ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_asset#external_id IotsitewiseAsset#external_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetProperties.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Customer provided actual UUID for property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_asset#id IotsitewiseAsset#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LogicalId`<sup>Optional</sup> <a name="LogicalId" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetProperties.property.logicalId"></a>

```csharp
public string LogicalId { get; set; }
```

- *Type:* string

Customer provided ID for property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_asset#logical_id IotsitewiseAsset#logical_id}

---

##### `NotificationState`<sup>Optional</sup> <a name="NotificationState" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetProperties.property.notificationState"></a>

```csharp
public string NotificationState { get; set; }
```

- *Type:* string

The MQTT notification state (ENABLED or DISABLED) for this asset property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_asset#notification_state IotsitewiseAsset#notification_state}

---

##### `Unit`<sup>Optional</sup> <a name="Unit" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetProperties.property.unit"></a>

```csharp
public string Unit { get; set; }
```

- *Type:* string

The unit of measure (such as Newtons or RPM) of the asset property.

If you don't specify a value for this parameter, the service uses the value of the assetModelProperty in the asset model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_asset#unit IotsitewiseAsset#unit}

---

### IotsitewiseAssetConfig <a name="IotsitewiseAssetConfig" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotsitewiseAssetConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AssetModelId,
    string AssetName,
    string AssetDescription = null,
    string AssetExternalId = null,
    IResolvable|IotsitewiseAssetAssetHierarchies[] AssetHierarchies = null,
    IResolvable|IotsitewiseAssetAssetProperties[] AssetProperties = null,
    IResolvable|IotsitewiseAssetTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.assetModelId">AssetModelId</a></code> | <code>string</code> | The ID of the asset model from which to create the asset. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.assetName">AssetName</a></code> | <code>string</code> | A unique, friendly name for the asset. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.assetDescription">AssetDescription</a></code> | <code>string</code> | A description for the asset. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.assetExternalId">AssetExternalId</a></code> | <code>string</code> | The External ID of the asset. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.assetHierarchies">AssetHierarchies</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchies">IotsitewiseAssetAssetHierarchies</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_asset#asset_hierarchies IotsitewiseAsset#asset_hierarchies}. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.assetProperties">AssetProperties</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetProperties">IotsitewiseAssetAssetProperties</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_asset#asset_properties IotsitewiseAsset#asset_properties}. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTags">IotsitewiseAssetTags</a>[]</code> | A list of key-value pairs that contain metadata for the asset. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AssetModelId`<sup>Required</sup> <a name="AssetModelId" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.assetModelId"></a>

```csharp
public string AssetModelId { get; set; }
```

- *Type:* string

The ID of the asset model from which to create the asset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_asset#asset_model_id IotsitewiseAsset#asset_model_id}

---

##### `AssetName`<sup>Required</sup> <a name="AssetName" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.assetName"></a>

```csharp
public string AssetName { get; set; }
```

- *Type:* string

A unique, friendly name for the asset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_asset#asset_name IotsitewiseAsset#asset_name}

---

##### `AssetDescription`<sup>Optional</sup> <a name="AssetDescription" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.assetDescription"></a>

```csharp
public string AssetDescription { get; set; }
```

- *Type:* string

A description for the asset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_asset#asset_description IotsitewiseAsset#asset_description}

---

##### `AssetExternalId`<sup>Optional</sup> <a name="AssetExternalId" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.assetExternalId"></a>

```csharp
public string AssetExternalId { get; set; }
```

- *Type:* string

The External ID of the asset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_asset#asset_external_id IotsitewiseAsset#asset_external_id}

---

##### `AssetHierarchies`<sup>Optional</sup> <a name="AssetHierarchies" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.assetHierarchies"></a>

```csharp
public IResolvable|IotsitewiseAssetAssetHierarchies[] AssetHierarchies { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchies">IotsitewiseAssetAssetHierarchies</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_asset#asset_hierarchies IotsitewiseAsset#asset_hierarchies}.

---

##### `AssetProperties`<sup>Optional</sup> <a name="AssetProperties" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.assetProperties"></a>

```csharp
public IResolvable|IotsitewiseAssetAssetProperties[] AssetProperties { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetProperties">IotsitewiseAssetAssetProperties</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_asset#asset_properties IotsitewiseAsset#asset_properties}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.tags"></a>

```csharp
public IResolvable|IotsitewiseAssetTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTags">IotsitewiseAssetTags</a>[]

A list of key-value pairs that contain metadata for the asset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_asset#tags IotsitewiseAsset#tags}

---

### IotsitewiseAssetTags <a name="IotsitewiseAssetTags" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotsitewiseAssetTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_asset#key IotsitewiseAsset#key}. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_asset#value IotsitewiseAsset#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_asset#key IotsitewiseAsset#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_asset#value IotsitewiseAsset#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotsitewiseAssetAssetHierarchiesList <a name="IotsitewiseAssetAssetHierarchiesList" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotsitewiseAssetAssetHierarchiesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList.get"></a>

```csharp
private IotsitewiseAssetAssetHierarchiesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchies">IotsitewiseAssetAssetHierarchies</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList.property.internalValue"></a>

```csharp
public IResolvable|IotsitewiseAssetAssetHierarchies[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchies">IotsitewiseAssetAssetHierarchies</a>[]

---


### IotsitewiseAssetAssetHierarchiesOutputReference <a name="IotsitewiseAssetAssetHierarchiesOutputReference" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotsitewiseAssetAssetHierarchiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.resetChildAssetId">ResetChildAssetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.resetExternalId">ResetExternalId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.resetLogicalId">ResetLogicalId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetChildAssetId` <a name="ResetChildAssetId" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.resetChildAssetId"></a>

```csharp
private void ResetChildAssetId()
```

##### `ResetExternalId` <a name="ResetExternalId" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.resetExternalId"></a>

```csharp
private void ResetExternalId()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLogicalId` <a name="ResetLogicalId" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.resetLogicalId"></a>

```csharp
private void ResetLogicalId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.property.childAssetIdInput">ChildAssetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.property.externalIdInput">ExternalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.property.logicalIdInput">LogicalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.property.childAssetId">ChildAssetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.property.externalId">ExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.property.logicalId">LogicalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchies">IotsitewiseAssetAssetHierarchies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ChildAssetIdInput`<sup>Optional</sup> <a name="ChildAssetIdInput" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.property.childAssetIdInput"></a>

```csharp
public string ChildAssetIdInput { get; }
```

- *Type:* string

---

##### `ExternalIdInput`<sup>Optional</sup> <a name="ExternalIdInput" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.property.externalIdInput"></a>

```csharp
public string ExternalIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LogicalIdInput`<sup>Optional</sup> <a name="LogicalIdInput" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.property.logicalIdInput"></a>

```csharp
public string LogicalIdInput { get; }
```

- *Type:* string

---

##### `ChildAssetId`<sup>Required</sup> <a name="ChildAssetId" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.property.childAssetId"></a>

```csharp
public string ChildAssetId { get; }
```

- *Type:* string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.property.externalId"></a>

```csharp
public string ExternalId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LogicalId`<sup>Required</sup> <a name="LogicalId" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.property.logicalId"></a>

```csharp
public string LogicalId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotsitewiseAssetAssetHierarchies InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchies">IotsitewiseAssetAssetHierarchies</a>

---


### IotsitewiseAssetAssetPropertiesList <a name="IotsitewiseAssetAssetPropertiesList" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotsitewiseAssetAssetPropertiesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList.get"></a>

```csharp
private IotsitewiseAssetAssetPropertiesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetProperties">IotsitewiseAssetAssetProperties</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList.property.internalValue"></a>

```csharp
public IResolvable|IotsitewiseAssetAssetProperties[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetProperties">IotsitewiseAssetAssetProperties</a>[]

---


### IotsitewiseAssetAssetPropertiesOutputReference <a name="IotsitewiseAssetAssetPropertiesOutputReference" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotsitewiseAssetAssetPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.resetExternalId">ResetExternalId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.resetLogicalId">ResetLogicalId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.resetNotificationState">ResetNotificationState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.resetUnit">ResetUnit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAlias` <a name="ResetAlias" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.resetAlias"></a>

```csharp
private void ResetAlias()
```

##### `ResetExternalId` <a name="ResetExternalId" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.resetExternalId"></a>

```csharp
private void ResetExternalId()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLogicalId` <a name="ResetLogicalId" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.resetLogicalId"></a>

```csharp
private void ResetLogicalId()
```

##### `ResetNotificationState` <a name="ResetNotificationState" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.resetNotificationState"></a>

```csharp
private void ResetNotificationState()
```

##### `ResetUnit` <a name="ResetUnit" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.resetUnit"></a>

```csharp
private void ResetUnit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.aliasInput">AliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.externalIdInput">ExternalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.logicalIdInput">LogicalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.notificationStateInput">NotificationStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.unitInput">UnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.alias">Alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.externalId">ExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.logicalId">LogicalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.notificationState">NotificationState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.unit">Unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetProperties">IotsitewiseAssetAssetProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.aliasInput"></a>

```csharp
public string AliasInput { get; }
```

- *Type:* string

---

##### `ExternalIdInput`<sup>Optional</sup> <a name="ExternalIdInput" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.externalIdInput"></a>

```csharp
public string ExternalIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LogicalIdInput`<sup>Optional</sup> <a name="LogicalIdInput" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.logicalIdInput"></a>

```csharp
public string LogicalIdInput { get; }
```

- *Type:* string

---

##### `NotificationStateInput`<sup>Optional</sup> <a name="NotificationStateInput" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.notificationStateInput"></a>

```csharp
public string NotificationStateInput { get; }
```

- *Type:* string

---

##### `UnitInput`<sup>Optional</sup> <a name="UnitInput" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.unitInput"></a>

```csharp
public string UnitInput { get; }
```

- *Type:* string

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.alias"></a>

```csharp
public string Alias { get; }
```

- *Type:* string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.externalId"></a>

```csharp
public string ExternalId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LogicalId`<sup>Required</sup> <a name="LogicalId" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.logicalId"></a>

```csharp
public string LogicalId { get; }
```

- *Type:* string

---

##### `NotificationState`<sup>Required</sup> <a name="NotificationState" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.notificationState"></a>

```csharp
public string NotificationState { get; }
```

- *Type:* string

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.unit"></a>

```csharp
public string Unit { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotsitewiseAssetAssetProperties InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetProperties">IotsitewiseAssetAssetProperties</a>

---


### IotsitewiseAssetTagsList <a name="IotsitewiseAssetTagsList" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotsitewiseAssetTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList.get"></a>

```csharp
private IotsitewiseAssetTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTags">IotsitewiseAssetTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList.property.internalValue"></a>

```csharp
public IResolvable|IotsitewiseAssetTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTags">IotsitewiseAssetTags</a>[]

---


### IotsitewiseAssetTagsOutputReference <a name="IotsitewiseAssetTagsOutputReference" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotsitewiseAssetTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTags">IotsitewiseAssetTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotsitewiseAssetTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTags">IotsitewiseAssetTags</a>

---



