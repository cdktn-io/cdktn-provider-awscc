# `ivsEncoderConfiguration` Submodule <a name="`ivsEncoderConfiguration` Submodule" id="@cdktn/provider-awscc.ivsEncoderConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IvsEncoderConfiguration <a name="IvsEncoderConfiguration" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ivs_encoder_configuration awscc_ivs_encoder_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IvsEncoderConfiguration(Construct Scope, string Id, IvsEncoderConfigurationConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationConfig">IvsEncoderConfigurationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationConfig">IvsEncoderConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.putVideo">PutVideo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.resetVideo">ResetVideo</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.putTags"></a>

```csharp
private void PutTags(IResolvable|IvsEncoderConfigurationTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTags">IvsEncoderConfigurationTags</a>[]

---

##### `PutVideo` <a name="PutVideo" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.putVideo"></a>

```csharp
private void PutVideo(IvsEncoderConfigurationVideo Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.putVideo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideo">IvsEncoderConfigurationVideo</a>

---

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetVideo` <a name="ResetVideo" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.resetVideo"></a>

```csharp
private void ResetVideo()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a IvsEncoderConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IvsEncoderConfiguration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IvsEncoderConfiguration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IvsEncoderConfiguration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IvsEncoderConfiguration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a IvsEncoderConfiguration resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IvsEncoderConfiguration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IvsEncoderConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ivs_encoder_configuration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the IvsEncoderConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsList">IvsEncoderConfigurationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.video">Video</a></code> | <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference">IvsEncoderConfigurationVideoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTags">IvsEncoderConfigurationTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.videoInput">VideoInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideo">IvsEncoderConfigurationVideo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.tags"></a>

```csharp
public IvsEncoderConfigurationTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsList">IvsEncoderConfigurationTagsList</a>

---

##### `Video`<sup>Required</sup> <a name="Video" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.video"></a>

```csharp
public IvsEncoderConfigurationVideoOutputReference Video { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference">IvsEncoderConfigurationVideoOutputReference</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.tagsInput"></a>

```csharp
public IResolvable|IvsEncoderConfigurationTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTags">IvsEncoderConfigurationTags</a>[]

---

##### `VideoInput`<sup>Optional</sup> <a name="VideoInput" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.videoInput"></a>

```csharp
public IResolvable|IvsEncoderConfigurationVideo VideoInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideo">IvsEncoderConfigurationVideo</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IvsEncoderConfigurationConfig <a name="IvsEncoderConfigurationConfig" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IvsEncoderConfigurationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name = null,
    IResolvable|IvsEncoderConfigurationTags[] Tags = null,
    IvsEncoderConfigurationVideo Video = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationConfig.property.name">Name</a></code> | <code>string</code> | Encoder configuration name. |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTags">IvsEncoderConfigurationTags</a>[]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationConfig.property.video">Video</a></code> | <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideo">IvsEncoderConfigurationVideo</a></code> | Video configuration. Default: video resolution 1280x720, bitrate 2500 kbps, 30 fps. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Encoder configuration name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ivs_encoder_configuration#name IvsEncoderConfiguration#name}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationConfig.property.tags"></a>

```csharp
public IResolvable|IvsEncoderConfigurationTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTags">IvsEncoderConfigurationTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ivs_encoder_configuration#tags IvsEncoderConfiguration#tags}

---

##### `Video`<sup>Optional</sup> <a name="Video" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationConfig.property.video"></a>

```csharp
public IvsEncoderConfigurationVideo Video { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideo">IvsEncoderConfigurationVideo</a>

Video configuration. Default: video resolution 1280x720, bitrate 2500 kbps, 30 fps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ivs_encoder_configuration#video IvsEncoderConfiguration#video}

---

### IvsEncoderConfigurationTags <a name="IvsEncoderConfigurationTags" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IvsEncoderConfigurationTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ivs_encoder_configuration#key IvsEncoderConfiguration#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ivs_encoder_configuration#value IvsEncoderConfiguration#value}

---

### IvsEncoderConfigurationVideo <a name="IvsEncoderConfigurationVideo" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideo.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IvsEncoderConfigurationVideo {
    double Bitrate = null,
    double Framerate = null,
    double Height = null,
    double Width = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideo.property.bitrate">Bitrate</a></code> | <code>double</code> | Bitrate for generated output, in bps. Default: 2500000. |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideo.property.framerate">Framerate</a></code> | <code>double</code> | Video frame rate, in fps. Default: 30. |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideo.property.height">Height</a></code> | <code>double</code> | Video-resolution height. |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideo.property.width">Width</a></code> | <code>double</code> | Video-resolution width. |

---

##### `Bitrate`<sup>Optional</sup> <a name="Bitrate" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideo.property.bitrate"></a>

```csharp
public double Bitrate { get; set; }
```

- *Type:* double

Bitrate for generated output, in bps. Default: 2500000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ivs_encoder_configuration#bitrate IvsEncoderConfiguration#bitrate}

---

##### `Framerate`<sup>Optional</sup> <a name="Framerate" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideo.property.framerate"></a>

```csharp
public double Framerate { get; set; }
```

- *Type:* double

Video frame rate, in fps. Default: 30.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ivs_encoder_configuration#framerate IvsEncoderConfiguration#framerate}

---

##### `Height`<sup>Optional</sup> <a name="Height" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideo.property.height"></a>

```csharp
public double Height { get; set; }
```

- *Type:* double

Video-resolution height.

This must be an even number. Note that the maximum value is determined by width times height, such that the maximum total pixels is 2073600 (1920x1080 or 1080x1920). Default: 720.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ivs_encoder_configuration#height IvsEncoderConfiguration#height}

---

##### `Width`<sup>Optional</sup> <a name="Width" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideo.property.width"></a>

```csharp
public double Width { get; set; }
```

- *Type:* double

Video-resolution width.

This must be an even number. Note that the maximum value is determined by width times height, such that the maximum total pixels is 2073600 (1920x1080 or 1080x1920). Default: 1280.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ivs_encoder_configuration#width IvsEncoderConfiguration#width}

---

## Classes <a name="Classes" id="Classes"></a>

### IvsEncoderConfigurationTagsList <a name="IvsEncoderConfigurationTagsList" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IvsEncoderConfigurationTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsList.get"></a>

```csharp
private IvsEncoderConfigurationTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTags">IvsEncoderConfigurationTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsList.property.internalValue"></a>

```csharp
public IResolvable|IvsEncoderConfigurationTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTags">IvsEncoderConfigurationTags</a>[]

---


### IvsEncoderConfigurationTagsOutputReference <a name="IvsEncoderConfigurationTagsOutputReference" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IvsEncoderConfigurationTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTags">IvsEncoderConfigurationTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IvsEncoderConfigurationTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTags">IvsEncoderConfigurationTags</a>

---


### IvsEncoderConfigurationVideoOutputReference <a name="IvsEncoderConfigurationVideoOutputReference" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IvsEncoderConfigurationVideoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.resetBitrate">ResetBitrate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.resetFramerate">ResetFramerate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.resetHeight">ResetHeight</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.resetWidth">ResetWidth</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBitrate` <a name="ResetBitrate" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.resetBitrate"></a>

```csharp
private void ResetBitrate()
```

##### `ResetFramerate` <a name="ResetFramerate" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.resetFramerate"></a>

```csharp
private void ResetFramerate()
```

##### `ResetHeight` <a name="ResetHeight" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.resetHeight"></a>

```csharp
private void ResetHeight()
```

##### `ResetWidth` <a name="ResetWidth" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.resetWidth"></a>

```csharp
private void ResetWidth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.property.bitrateInput">BitrateInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.property.framerateInput">FramerateInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.property.heightInput">HeightInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.property.widthInput">WidthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.property.bitrate">Bitrate</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.property.framerate">Framerate</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.property.height">Height</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.property.width">Width</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideo">IvsEncoderConfigurationVideo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BitrateInput`<sup>Optional</sup> <a name="BitrateInput" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.property.bitrateInput"></a>

```csharp
public double BitrateInput { get; }
```

- *Type:* double

---

##### `FramerateInput`<sup>Optional</sup> <a name="FramerateInput" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.property.framerateInput"></a>

```csharp
public double FramerateInput { get; }
```

- *Type:* double

---

##### `HeightInput`<sup>Optional</sup> <a name="HeightInput" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.property.heightInput"></a>

```csharp
public double HeightInput { get; }
```

- *Type:* double

---

##### `WidthInput`<sup>Optional</sup> <a name="WidthInput" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.property.widthInput"></a>

```csharp
public double WidthInput { get; }
```

- *Type:* double

---

##### `Bitrate`<sup>Required</sup> <a name="Bitrate" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.property.bitrate"></a>

```csharp
public double Bitrate { get; }
```

- *Type:* double

---

##### `Framerate`<sup>Required</sup> <a name="Framerate" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.property.framerate"></a>

```csharp
public double Framerate { get; }
```

- *Type:* double

---

##### `Height`<sup>Required</sup> <a name="Height" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.property.height"></a>

```csharp
public double Height { get; }
```

- *Type:* double

---

##### `Width`<sup>Required</sup> <a name="Width" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.property.width"></a>

```csharp
public double Width { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IvsEncoderConfigurationVideo InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideo">IvsEncoderConfigurationVideo</a>

---



