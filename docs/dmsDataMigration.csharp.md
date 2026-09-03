# `dmsDataMigration` Submodule <a name="`dmsDataMigration` Submodule" id="@cdktn/provider-awscc.dmsDataMigration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DmsDataMigration <a name="DmsDataMigration" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_data_migration awscc_dms_data_migration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DmsDataMigration(Construct Scope, string Id, DmsDataMigrationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig">DmsDataMigrationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig">DmsDataMigrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.putDataMigrationSettings">PutDataMigrationSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.putSourceDataSettings">PutSourceDataSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.resetDataMigrationIdentifier">ResetDataMigrationIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.resetDataMigrationName">ResetDataMigrationName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.resetDataMigrationSettings">ResetDataMigrationSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.resetSourceDataSettings">ResetSourceDataSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDataMigrationSettings` <a name="PutDataMigrationSettings" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.putDataMigrationSettings"></a>

```csharp
private void PutDataMigrationSettings(DmsDataMigrationDataMigrationSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.putDataMigrationSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettings">DmsDataMigrationDataMigrationSettings</a>

---

##### `PutSourceDataSettings` <a name="PutSourceDataSettings" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.putSourceDataSettings"></a>

```csharp
private void PutSourceDataSettings(IResolvable|DmsDataMigrationSourceDataSettings[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.putSourceDataSettings.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettings">DmsDataMigrationSourceDataSettings</a>[]

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.putTags"></a>

```csharp
private void PutTags(IResolvable|DmsDataMigrationTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTags">DmsDataMigrationTags</a>[]

---

##### `ResetDataMigrationIdentifier` <a name="ResetDataMigrationIdentifier" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.resetDataMigrationIdentifier"></a>

```csharp
private void ResetDataMigrationIdentifier()
```

##### `ResetDataMigrationName` <a name="ResetDataMigrationName" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.resetDataMigrationName"></a>

```csharp
private void ResetDataMigrationName()
```

##### `ResetDataMigrationSettings` <a name="ResetDataMigrationSettings" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.resetDataMigrationSettings"></a>

```csharp
private void ResetDataMigrationSettings()
```

##### `ResetSourceDataSettings` <a name="ResetSourceDataSettings" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.resetSourceDataSettings"></a>

```csharp
private void ResetSourceDataSettings()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DmsDataMigration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DmsDataMigration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DmsDataMigration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DmsDataMigration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DmsDataMigration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DmsDataMigration resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DmsDataMigration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DmsDataMigration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_data_migration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DmsDataMigration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.dataMigrationArn">DataMigrationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.dataMigrationCreateTime">DataMigrationCreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.dataMigrationSettings">DataMigrationSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference">DmsDataMigrationDataMigrationSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.sourceDataSettings">SourceDataSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList">DmsDataMigrationSourceDataSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList">DmsDataMigrationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.dataMigrationIdentifierInput">DataMigrationIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.dataMigrationNameInput">DataMigrationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.dataMigrationSettingsInput">DataMigrationSettingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettings">DmsDataMigrationDataMigrationSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.dataMigrationTypeInput">DataMigrationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.migrationProjectIdentifierInput">MigrationProjectIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.serviceAccessRoleArnInput">ServiceAccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.sourceDataSettingsInput">SourceDataSettingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettings">DmsDataMigrationSourceDataSettings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTags">DmsDataMigrationTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.dataMigrationIdentifier">DataMigrationIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.dataMigrationName">DataMigrationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.dataMigrationType">DataMigrationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.migrationProjectIdentifier">MigrationProjectIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.serviceAccessRoleArn">ServiceAccessRoleArn</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DataMigrationArn`<sup>Required</sup> <a name="DataMigrationArn" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.dataMigrationArn"></a>

```csharp
public string DataMigrationArn { get; }
```

- *Type:* string

---

##### `DataMigrationCreateTime`<sup>Required</sup> <a name="DataMigrationCreateTime" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.dataMigrationCreateTime"></a>

```csharp
public string DataMigrationCreateTime { get; }
```

- *Type:* string

---

##### `DataMigrationSettings`<sup>Required</sup> <a name="DataMigrationSettings" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.dataMigrationSettings"></a>

```csharp
public DmsDataMigrationDataMigrationSettingsOutputReference DataMigrationSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference">DmsDataMigrationDataMigrationSettingsOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `SourceDataSettings`<sup>Required</sup> <a name="SourceDataSettings" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.sourceDataSettings"></a>

```csharp
public DmsDataMigrationSourceDataSettingsList SourceDataSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList">DmsDataMigrationSourceDataSettingsList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.tags"></a>

```csharp
public DmsDataMigrationTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList">DmsDataMigrationTagsList</a>

---

##### `DataMigrationIdentifierInput`<sup>Optional</sup> <a name="DataMigrationIdentifierInput" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.dataMigrationIdentifierInput"></a>

```csharp
public string DataMigrationIdentifierInput { get; }
```

- *Type:* string

---

##### `DataMigrationNameInput`<sup>Optional</sup> <a name="DataMigrationNameInput" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.dataMigrationNameInput"></a>

```csharp
public string DataMigrationNameInput { get; }
```

- *Type:* string

---

##### `DataMigrationSettingsInput`<sup>Optional</sup> <a name="DataMigrationSettingsInput" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.dataMigrationSettingsInput"></a>

```csharp
public IResolvable|DmsDataMigrationDataMigrationSettings DataMigrationSettingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettings">DmsDataMigrationDataMigrationSettings</a>

---

##### `DataMigrationTypeInput`<sup>Optional</sup> <a name="DataMigrationTypeInput" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.dataMigrationTypeInput"></a>

```csharp
public string DataMigrationTypeInput { get; }
```

- *Type:* string

---

##### `MigrationProjectIdentifierInput`<sup>Optional</sup> <a name="MigrationProjectIdentifierInput" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.migrationProjectIdentifierInput"></a>

```csharp
public string MigrationProjectIdentifierInput { get; }
```

- *Type:* string

---

##### `ServiceAccessRoleArnInput`<sup>Optional</sup> <a name="ServiceAccessRoleArnInput" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.serviceAccessRoleArnInput"></a>

```csharp
public string ServiceAccessRoleArnInput { get; }
```

- *Type:* string

---

##### `SourceDataSettingsInput`<sup>Optional</sup> <a name="SourceDataSettingsInput" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.sourceDataSettingsInput"></a>

```csharp
public IResolvable|DmsDataMigrationSourceDataSettings[] SourceDataSettingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettings">DmsDataMigrationSourceDataSettings</a>[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.tagsInput"></a>

```csharp
public IResolvable|DmsDataMigrationTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTags">DmsDataMigrationTags</a>[]

---

##### `DataMigrationIdentifier`<sup>Required</sup> <a name="DataMigrationIdentifier" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.dataMigrationIdentifier"></a>

```csharp
public string DataMigrationIdentifier { get; }
```

- *Type:* string

---

##### `DataMigrationName`<sup>Required</sup> <a name="DataMigrationName" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.dataMigrationName"></a>

```csharp
public string DataMigrationName { get; }
```

- *Type:* string

---

##### `DataMigrationType`<sup>Required</sup> <a name="DataMigrationType" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.dataMigrationType"></a>

```csharp
public string DataMigrationType { get; }
```

- *Type:* string

---

##### `MigrationProjectIdentifier`<sup>Required</sup> <a name="MigrationProjectIdentifier" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.migrationProjectIdentifier"></a>

```csharp
public string MigrationProjectIdentifier { get; }
```

- *Type:* string

---

##### `ServiceAccessRoleArn`<sup>Required</sup> <a name="ServiceAccessRoleArn" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.serviceAccessRoleArn"></a>

```csharp
public string ServiceAccessRoleArn { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DmsDataMigrationConfig <a name="DmsDataMigrationConfig" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DmsDataMigrationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DataMigrationType,
    string MigrationProjectIdentifier,
    string ServiceAccessRoleArn,
    string DataMigrationIdentifier = null,
    string DataMigrationName = null,
    DmsDataMigrationDataMigrationSettings DataMigrationSettings = null,
    IResolvable|DmsDataMigrationSourceDataSettings[] SourceDataSettings = null,
    IResolvable|DmsDataMigrationTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.dataMigrationType">DataMigrationType</a></code> | <code>string</code> | The property describes the type of migration. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.migrationProjectIdentifier">MigrationProjectIdentifier</a></code> | <code>string</code> | The property describes an identifier for the migration project. It is used for describing/deleting/modifying can be name/arn. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.serviceAccessRoleArn">ServiceAccessRoleArn</a></code> | <code>string</code> | The property describes Amazon Resource Name (ARN) of the service access role. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.dataMigrationIdentifier">DataMigrationIdentifier</a></code> | <code>string</code> | The property describes an ARN of the data migration. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.dataMigrationName">DataMigrationName</a></code> | <code>string</code> | The property describes a name to identify the data migration. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.dataMigrationSettings">DataMigrationSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettings">DmsDataMigrationDataMigrationSettings</a></code> | The property describes the settings for the data migration. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.sourceDataSettings">SourceDataSettings</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettings">DmsDataMigrationSourceDataSettings</a>[]</code> | The property describes the settings for the data migration. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTags">DmsDataMigrationTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DataMigrationType`<sup>Required</sup> <a name="DataMigrationType" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.dataMigrationType"></a>

```csharp
public string DataMigrationType { get; set; }
```

- *Type:* string

The property describes the type of migration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_data_migration#data_migration_type DmsDataMigration#data_migration_type}

---

##### `MigrationProjectIdentifier`<sup>Required</sup> <a name="MigrationProjectIdentifier" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.migrationProjectIdentifier"></a>

```csharp
public string MigrationProjectIdentifier { get; set; }
```

- *Type:* string

The property describes an identifier for the migration project. It is used for describing/deleting/modifying can be name/arn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_data_migration#migration_project_identifier DmsDataMigration#migration_project_identifier}

---

##### `ServiceAccessRoleArn`<sup>Required</sup> <a name="ServiceAccessRoleArn" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.serviceAccessRoleArn"></a>

```csharp
public string ServiceAccessRoleArn { get; set; }
```

- *Type:* string

The property describes Amazon Resource Name (ARN) of the service access role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_data_migration#service_access_role_arn DmsDataMigration#service_access_role_arn}

---

##### `DataMigrationIdentifier`<sup>Optional</sup> <a name="DataMigrationIdentifier" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.dataMigrationIdentifier"></a>

```csharp
public string DataMigrationIdentifier { get; set; }
```

- *Type:* string

The property describes an ARN of the data migration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_data_migration#data_migration_identifier DmsDataMigration#data_migration_identifier}

---

##### `DataMigrationName`<sup>Optional</sup> <a name="DataMigrationName" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.dataMigrationName"></a>

```csharp
public string DataMigrationName { get; set; }
```

- *Type:* string

The property describes a name to identify the data migration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_data_migration#data_migration_name DmsDataMigration#data_migration_name}

---

##### `DataMigrationSettings`<sup>Optional</sup> <a name="DataMigrationSettings" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.dataMigrationSettings"></a>

```csharp
public DmsDataMigrationDataMigrationSettings DataMigrationSettings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettings">DmsDataMigrationDataMigrationSettings</a>

The property describes the settings for the data migration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_data_migration#data_migration_settings DmsDataMigration#data_migration_settings}

---

##### `SourceDataSettings`<sup>Optional</sup> <a name="SourceDataSettings" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.sourceDataSettings"></a>

```csharp
public IResolvable|DmsDataMigrationSourceDataSettings[] SourceDataSettings { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettings">DmsDataMigrationSourceDataSettings</a>[]

The property describes the settings for the data migration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_data_migration#source_data_settings DmsDataMigration#source_data_settings}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.tags"></a>

```csharp
public IResolvable|DmsDataMigrationTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTags">DmsDataMigrationTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_data_migration#tags DmsDataMigration#tags}

---

### DmsDataMigrationDataMigrationSettings <a name="DmsDataMigrationDataMigrationSettings" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DmsDataMigrationDataMigrationSettings {
    bool|IResolvable CloudwatchLogsEnabled = null,
    double NumberOfJobs = null,
    string SelectionRules = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettings.property.cloudwatchLogsEnabled">CloudwatchLogsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | The property specifies whether to enable the CloudWatch log. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettings.property.numberOfJobs">NumberOfJobs</a></code> | <code>double</code> | The number of parallel jobs that trigger parallel threads to unload the tables from the source, and then load them to the target. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettings.property.selectionRules">SelectionRules</a></code> | <code>string</code> | The property specifies the rules of selecting objects for data migration. |

---

##### `CloudwatchLogsEnabled`<sup>Optional</sup> <a name="CloudwatchLogsEnabled" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettings.property.cloudwatchLogsEnabled"></a>

```csharp
public bool|IResolvable CloudwatchLogsEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

The property specifies whether to enable the CloudWatch log.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_data_migration#cloudwatch_logs_enabled DmsDataMigration#cloudwatch_logs_enabled}

---

##### `NumberOfJobs`<sup>Optional</sup> <a name="NumberOfJobs" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettings.property.numberOfJobs"></a>

```csharp
public double NumberOfJobs { get; set; }
```

- *Type:* double

The number of parallel jobs that trigger parallel threads to unload the tables from the source, and then load them to the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_data_migration#number_of_jobs DmsDataMigration#number_of_jobs}

---

##### `SelectionRules`<sup>Optional</sup> <a name="SelectionRules" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettings.property.selectionRules"></a>

```csharp
public string SelectionRules { get; set; }
```

- *Type:* string

The property specifies the rules of selecting objects for data migration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_data_migration#selection_rules DmsDataMigration#selection_rules}

---

### DmsDataMigrationSourceDataSettings <a name="DmsDataMigrationSourceDataSettings" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DmsDataMigrationSourceDataSettings {
    string CdcStartPosition = null,
    string CdcStartTime = null,
    string CdcStopTime = null,
    string SlotName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettings.property.cdcStartPosition">CdcStartPosition</a></code> | <code>string</code> | The property is a point in the database engine's log that defines a time where you can begin CDC. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettings.property.cdcStartTime">CdcStartTime</a></code> | <code>string</code> | The property indicates the start time for a change data capture (CDC) operation. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettings.property.cdcStopTime">CdcStopTime</a></code> | <code>string</code> | The property indicates the stop time for a change data capture (CDC) operation. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettings.property.slotName">SlotName</a></code> | <code>string</code> | The property sets the name of a previously created logical replication slot for a change data capture (CDC) load of the source instance. |

---

##### `CdcStartPosition`<sup>Optional</sup> <a name="CdcStartPosition" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettings.property.cdcStartPosition"></a>

```csharp
public string CdcStartPosition { get; set; }
```

- *Type:* string

The property is a point in the database engine's log that defines a time where you can begin CDC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_data_migration#cdc_start_position DmsDataMigration#cdc_start_position}

---

##### `CdcStartTime`<sup>Optional</sup> <a name="CdcStartTime" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettings.property.cdcStartTime"></a>

```csharp
public string CdcStartTime { get; set; }
```

- *Type:* string

The property indicates the start time for a change data capture (CDC) operation.

The value is server time in UTC format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_data_migration#cdc_start_time DmsDataMigration#cdc_start_time}

---

##### `CdcStopTime`<sup>Optional</sup> <a name="CdcStopTime" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettings.property.cdcStopTime"></a>

```csharp
public string CdcStopTime { get; set; }
```

- *Type:* string

The property indicates the stop time for a change data capture (CDC) operation.

The value is server time in UTC format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_data_migration#cdc_stop_time DmsDataMigration#cdc_stop_time}

---

##### `SlotName`<sup>Optional</sup> <a name="SlotName" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettings.property.slotName"></a>

```csharp
public string SlotName { get; set; }
```

- *Type:* string

The property sets the name of a previously created logical replication slot for a change data capture (CDC) load of the source instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_data_migration#slot_name DmsDataMigration#slot_name}

---

### DmsDataMigrationTags <a name="DmsDataMigrationTags" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DmsDataMigrationTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_data_migration#key DmsDataMigration#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_data_migration#value DmsDataMigration#value}

---

## Classes <a name="Classes" id="Classes"></a>

### DmsDataMigrationDataMigrationSettingsOutputReference <a name="DmsDataMigrationDataMigrationSettingsOutputReference" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DmsDataMigrationDataMigrationSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.resetCloudwatchLogsEnabled">ResetCloudwatchLogsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.resetNumberOfJobs">ResetNumberOfJobs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.resetSelectionRules">ResetSelectionRules</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCloudwatchLogsEnabled` <a name="ResetCloudwatchLogsEnabled" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.resetCloudwatchLogsEnabled"></a>

```csharp
private void ResetCloudwatchLogsEnabled()
```

##### `ResetNumberOfJobs` <a name="ResetNumberOfJobs" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.resetNumberOfJobs"></a>

```csharp
private void ResetNumberOfJobs()
```

##### `ResetSelectionRules` <a name="ResetSelectionRules" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.resetSelectionRules"></a>

```csharp
private void ResetSelectionRules()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.property.cloudwatchLogsEnabledInput">CloudwatchLogsEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.property.numberOfJobsInput">NumberOfJobsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.property.selectionRulesInput">SelectionRulesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.property.cloudwatchLogsEnabled">CloudwatchLogsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.property.numberOfJobs">NumberOfJobs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.property.selectionRules">SelectionRules</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettings">DmsDataMigrationDataMigrationSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudwatchLogsEnabledInput`<sup>Optional</sup> <a name="CloudwatchLogsEnabledInput" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.property.cloudwatchLogsEnabledInput"></a>

```csharp
public bool|IResolvable CloudwatchLogsEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `NumberOfJobsInput`<sup>Optional</sup> <a name="NumberOfJobsInput" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.property.numberOfJobsInput"></a>

```csharp
public double NumberOfJobsInput { get; }
```

- *Type:* double

---

##### `SelectionRulesInput`<sup>Optional</sup> <a name="SelectionRulesInput" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.property.selectionRulesInput"></a>

```csharp
public string SelectionRulesInput { get; }
```

- *Type:* string

---

##### `CloudwatchLogsEnabled`<sup>Required</sup> <a name="CloudwatchLogsEnabled" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.property.cloudwatchLogsEnabled"></a>

```csharp
public bool|IResolvable CloudwatchLogsEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `NumberOfJobs`<sup>Required</sup> <a name="NumberOfJobs" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.property.numberOfJobs"></a>

```csharp
public double NumberOfJobs { get; }
```

- *Type:* double

---

##### `SelectionRules`<sup>Required</sup> <a name="SelectionRules" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.property.selectionRules"></a>

```csharp
public string SelectionRules { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DmsDataMigrationDataMigrationSettings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettings">DmsDataMigrationDataMigrationSettings</a>

---


### DmsDataMigrationSourceDataSettingsList <a name="DmsDataMigrationSourceDataSettingsList" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DmsDataMigrationSourceDataSettingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList.get"></a>

```csharp
private DmsDataMigrationSourceDataSettingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettings">DmsDataMigrationSourceDataSettings</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList.property.internalValue"></a>

```csharp
public IResolvable|DmsDataMigrationSourceDataSettings[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettings">DmsDataMigrationSourceDataSettings</a>[]

---


### DmsDataMigrationSourceDataSettingsOutputReference <a name="DmsDataMigrationSourceDataSettingsOutputReference" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DmsDataMigrationSourceDataSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.resetCdcStartPosition">ResetCdcStartPosition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.resetCdcStartTime">ResetCdcStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.resetCdcStopTime">ResetCdcStopTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.resetSlotName">ResetSlotName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCdcStartPosition` <a name="ResetCdcStartPosition" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.resetCdcStartPosition"></a>

```csharp
private void ResetCdcStartPosition()
```

##### `ResetCdcStartTime` <a name="ResetCdcStartTime" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.resetCdcStartTime"></a>

```csharp
private void ResetCdcStartTime()
```

##### `ResetCdcStopTime` <a name="ResetCdcStopTime" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.resetCdcStopTime"></a>

```csharp
private void ResetCdcStopTime()
```

##### `ResetSlotName` <a name="ResetSlotName" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.resetSlotName"></a>

```csharp
private void ResetSlotName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.property.cdcStartPositionInput">CdcStartPositionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.property.cdcStartTimeInput">CdcStartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.property.cdcStopTimeInput">CdcStopTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.property.slotNameInput">SlotNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.property.cdcStartPosition">CdcStartPosition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.property.cdcStartTime">CdcStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.property.cdcStopTime">CdcStopTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.property.slotName">SlotName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettings">DmsDataMigrationSourceDataSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CdcStartPositionInput`<sup>Optional</sup> <a name="CdcStartPositionInput" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.property.cdcStartPositionInput"></a>

```csharp
public string CdcStartPositionInput { get; }
```

- *Type:* string

---

##### `CdcStartTimeInput`<sup>Optional</sup> <a name="CdcStartTimeInput" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.property.cdcStartTimeInput"></a>

```csharp
public string CdcStartTimeInput { get; }
```

- *Type:* string

---

##### `CdcStopTimeInput`<sup>Optional</sup> <a name="CdcStopTimeInput" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.property.cdcStopTimeInput"></a>

```csharp
public string CdcStopTimeInput { get; }
```

- *Type:* string

---

##### `SlotNameInput`<sup>Optional</sup> <a name="SlotNameInput" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.property.slotNameInput"></a>

```csharp
public string SlotNameInput { get; }
```

- *Type:* string

---

##### `CdcStartPosition`<sup>Required</sup> <a name="CdcStartPosition" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.property.cdcStartPosition"></a>

```csharp
public string CdcStartPosition { get; }
```

- *Type:* string

---

##### `CdcStartTime`<sup>Required</sup> <a name="CdcStartTime" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.property.cdcStartTime"></a>

```csharp
public string CdcStartTime { get; }
```

- *Type:* string

---

##### `CdcStopTime`<sup>Required</sup> <a name="CdcStopTime" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.property.cdcStopTime"></a>

```csharp
public string CdcStopTime { get; }
```

- *Type:* string

---

##### `SlotName`<sup>Required</sup> <a name="SlotName" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.property.slotName"></a>

```csharp
public string SlotName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DmsDataMigrationSourceDataSettings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettings">DmsDataMigrationSourceDataSettings</a>

---


### DmsDataMigrationTagsList <a name="DmsDataMigrationTagsList" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DmsDataMigrationTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList.get"></a>

```csharp
private DmsDataMigrationTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTags">DmsDataMigrationTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList.property.internalValue"></a>

```csharp
public IResolvable|DmsDataMigrationTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTags">DmsDataMigrationTags</a>[]

---


### DmsDataMigrationTagsOutputReference <a name="DmsDataMigrationTagsOutputReference" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DmsDataMigrationTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTags">DmsDataMigrationTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DmsDataMigrationTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTags">DmsDataMigrationTags</a>

---



