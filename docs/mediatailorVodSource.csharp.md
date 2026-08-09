# `mediatailorVodSource` Submodule <a name="`mediatailorVodSource` Submodule" id="@cdktn/provider-awscc.mediatailorVodSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediatailorVodSource <a name="MediatailorVodSource" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediatailor_vod_source awscc_mediatailor_vod_source}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediatailorVodSource(Construct Scope, string Id, MediatailorVodSourceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceConfig">MediatailorVodSourceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceConfig">MediatailorVodSourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.putHttpPackageConfigurations">PutHttpPackageConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutHttpPackageConfigurations` <a name="PutHttpPackageConfigurations" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.putHttpPackageConfigurations"></a>

```csharp
private void PutHttpPackageConfigurations(IResolvable|MediatailorVodSourceHttpPackageConfigurations[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.putHttpPackageConfigurations.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurations">MediatailorVodSourceHttpPackageConfigurations</a>[]

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.putTags"></a>

```csharp
private void PutTags(IResolvable|MediatailorVodSourceTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceTags">MediatailorVodSourceTags</a>[]

---

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a MediatailorVodSource resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MediatailorVodSource.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MediatailorVodSource.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MediatailorVodSource.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MediatailorVodSource.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a MediatailorVodSource resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MediatailorVodSource to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MediatailorVodSource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediatailor_vod_source#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the MediatailorVodSource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.property.httpPackageConfigurations">HttpPackageConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurationsList">MediatailorVodSourceHttpPackageConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceTagsList">MediatailorVodSourceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.property.httpPackageConfigurationsInput">HttpPackageConfigurationsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurations">MediatailorVodSourceHttpPackageConfigurations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.property.sourceLocationNameInput">SourceLocationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceTags">MediatailorVodSourceTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.property.vodSourceNameInput">VodSourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.property.sourceLocationName">SourceLocationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.property.vodSourceName">VodSourceName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `HttpPackageConfigurations`<sup>Required</sup> <a name="HttpPackageConfigurations" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.property.httpPackageConfigurations"></a>

```csharp
public MediatailorVodSourceHttpPackageConfigurationsList HttpPackageConfigurations { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurationsList">MediatailorVodSourceHttpPackageConfigurationsList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.property.tags"></a>

```csharp
public MediatailorVodSourceTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceTagsList">MediatailorVodSourceTagsList</a>

---

##### `HttpPackageConfigurationsInput`<sup>Optional</sup> <a name="HttpPackageConfigurationsInput" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.property.httpPackageConfigurationsInput"></a>

```csharp
public IResolvable|MediatailorVodSourceHttpPackageConfigurations[] HttpPackageConfigurationsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurations">MediatailorVodSourceHttpPackageConfigurations</a>[]

---

##### `SourceLocationNameInput`<sup>Optional</sup> <a name="SourceLocationNameInput" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.property.sourceLocationNameInput"></a>

```csharp
public string SourceLocationNameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.property.tagsInput"></a>

```csharp
public IResolvable|MediatailorVodSourceTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceTags">MediatailorVodSourceTags</a>[]

---

##### `VodSourceNameInput`<sup>Optional</sup> <a name="VodSourceNameInput" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.property.vodSourceNameInput"></a>

```csharp
public string VodSourceNameInput { get; }
```

- *Type:* string

---

##### `SourceLocationName`<sup>Required</sup> <a name="SourceLocationName" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.property.sourceLocationName"></a>

```csharp
public string SourceLocationName { get; }
```

- *Type:* string

---

##### `VodSourceName`<sup>Required</sup> <a name="VodSourceName" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.property.vodSourceName"></a>

```csharp
public string VodSourceName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSource.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MediatailorVodSourceConfig <a name="MediatailorVodSourceConfig" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediatailorVodSourceConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    IResolvable|MediatailorVodSourceHttpPackageConfigurations[] HttpPackageConfigurations,
    string SourceLocationName,
    string VodSourceName,
    IResolvable|MediatailorVodSourceTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceConfig.property.httpPackageConfigurations">HttpPackageConfigurations</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurations">MediatailorVodSourceHttpPackageConfigurations</a>[]</code> | <p>A list of HTTP package configuration parameters for this VOD source.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceConfig.property.sourceLocationName">SourceLocationName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediatailor_vod_source#source_location_name MediatailorVodSource#source_location_name}. |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceConfig.property.vodSourceName">VodSourceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediatailor_vod_source#vod_source_name MediatailorVodSource#vod_source_name}. |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceTags">MediatailorVodSourceTags</a>[]</code> | The tags to assign to the VOD source. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `HttpPackageConfigurations`<sup>Required</sup> <a name="HttpPackageConfigurations" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceConfig.property.httpPackageConfigurations"></a>

```csharp
public IResolvable|MediatailorVodSourceHttpPackageConfigurations[] HttpPackageConfigurations { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurations">MediatailorVodSourceHttpPackageConfigurations</a>[]

<p>A list of HTTP package configuration parameters for this VOD source.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediatailor_vod_source#http_package_configurations MediatailorVodSource#http_package_configurations}

---

##### `SourceLocationName`<sup>Required</sup> <a name="SourceLocationName" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceConfig.property.sourceLocationName"></a>

```csharp
public string SourceLocationName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediatailor_vod_source#source_location_name MediatailorVodSource#source_location_name}.

---

##### `VodSourceName`<sup>Required</sup> <a name="VodSourceName" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceConfig.property.vodSourceName"></a>

```csharp
public string VodSourceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediatailor_vod_source#vod_source_name MediatailorVodSource#vod_source_name}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceConfig.property.tags"></a>

```csharp
public IResolvable|MediatailorVodSourceTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceTags">MediatailorVodSourceTags</a>[]

The tags to assign to the VOD source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediatailor_vod_source#tags MediatailorVodSource#tags}

---

### MediatailorVodSourceHttpPackageConfigurations <a name="MediatailorVodSourceHttpPackageConfigurations" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediatailorVodSourceHttpPackageConfigurations {
    string Path,
    string SourceGroup,
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurations.property.path">Path</a></code> | <code>string</code> | <p>The relative path to the URL for this VOD source. |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurations.property.sourceGroup">SourceGroup</a></code> | <code>string</code> | <p>The name of the source group. This has to match one of the <code>Channel::Outputs::SourceGroup</code>.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurations.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediatailor_vod_source#type MediatailorVodSource#type}. |

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurations.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

<p>The relative path to the URL for this VOD source.

This is combined with <code>SourceLocation::HttpConfiguration::BaseUrl</code> to form a valid URL.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediatailor_vod_source#path MediatailorVodSource#path}

---

##### `SourceGroup`<sup>Required</sup> <a name="SourceGroup" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurations.property.sourceGroup"></a>

```csharp
public string SourceGroup { get; set; }
```

- *Type:* string

<p>The name of the source group. This has to match one of the <code>Channel::Outputs::SourceGroup</code>.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediatailor_vod_source#source_group MediatailorVodSource#source_group}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurations.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediatailor_vod_source#type MediatailorVodSource#type}.

---

### MediatailorVodSourceTags <a name="MediatailorVodSourceTags" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediatailorVodSourceTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediatailor_vod_source#key MediatailorVodSource#key}. |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediatailor_vod_source#value MediatailorVodSource#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediatailor_vod_source#key MediatailorVodSource#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediatailor_vod_source#value MediatailorVodSource#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### MediatailorVodSourceHttpPackageConfigurationsList <a name="MediatailorVodSourceHttpPackageConfigurationsList" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediatailorVodSourceHttpPackageConfigurationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurationsList.get"></a>

```csharp
private MediatailorVodSourceHttpPackageConfigurationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurationsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurations">MediatailorVodSourceHttpPackageConfigurations</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurationsList.property.internalValue"></a>

```csharp
public IResolvable|MediatailorVodSourceHttpPackageConfigurations[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurations">MediatailorVodSourceHttpPackageConfigurations</a>[]

---


### MediatailorVodSourceHttpPackageConfigurationsOutputReference <a name="MediatailorVodSourceHttpPackageConfigurationsOutputReference" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediatailorVodSourceHttpPackageConfigurationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurationsOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurationsOutputReference.property.sourceGroupInput">SourceGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurationsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurationsOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurationsOutputReference.property.sourceGroup">SourceGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurationsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurations">MediatailorVodSourceHttpPackageConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurationsOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `SourceGroupInput`<sup>Optional</sup> <a name="SourceGroupInput" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurationsOutputReference.property.sourceGroupInput"></a>

```csharp
public string SourceGroupInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurationsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurationsOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `SourceGroup`<sup>Required</sup> <a name="SourceGroup" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurationsOutputReference.property.sourceGroup"></a>

```csharp
public string SourceGroup { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurationsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurationsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MediatailorVodSourceHttpPackageConfigurations InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceHttpPackageConfigurations">MediatailorVodSourceHttpPackageConfigurations</a>

---


### MediatailorVodSourceTagsList <a name="MediatailorVodSourceTagsList" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediatailorVodSourceTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceTagsList.get"></a>

```csharp
private MediatailorVodSourceTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceTags">MediatailorVodSourceTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceTagsList.property.internalValue"></a>

```csharp
public IResolvable|MediatailorVodSourceTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceTags">MediatailorVodSourceTags</a>[]

---


### MediatailorVodSourceTagsOutputReference <a name="MediatailorVodSourceTagsOutputReference" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediatailorVodSourceTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceTags">MediatailorVodSourceTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MediatailorVodSourceTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorVodSource.MediatailorVodSourceTags">MediatailorVodSourceTags</a>

---



