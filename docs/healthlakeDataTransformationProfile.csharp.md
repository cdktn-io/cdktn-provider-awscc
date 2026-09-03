# `healthlakeDataTransformationProfile` Submodule <a name="`healthlakeDataTransformationProfile` Submodule" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HealthlakeDataTransformationProfile <a name="HealthlakeDataTransformationProfile" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/healthlake_data_transformation_profile awscc_healthlake_data_transformation_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new HealthlakeDataTransformationProfile(Construct Scope, string Id, HealthlakeDataTransformationProfileConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig">HealthlakeDataTransformationProfileConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig">HealthlakeDataTransformationProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.putSource">PutSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.resetProfileDescription">ResetProfileDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.resetSource">ResetSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSource` <a name="PutSource" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.putSource"></a>

```csharp
private void PutSource(HealthlakeDataTransformationProfileSource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSource">HealthlakeDataTransformationProfileSource</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.putTags"></a>

```csharp
private void PutTags(IResolvable|HealthlakeDataTransformationProfileTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTags">HealthlakeDataTransformationProfileTags</a>[]

---

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```

##### `ResetProfileDescription` <a name="ResetProfileDescription" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.resetProfileDescription"></a>

```csharp
private void ResetProfileDescription()
```

##### `ResetSource` <a name="ResetSource" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.resetSource"></a>

```csharp
private void ResetSource()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a HealthlakeDataTransformationProfile resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

HealthlakeDataTransformationProfile.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

HealthlakeDataTransformationProfile.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

HealthlakeDataTransformationProfile.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

HealthlakeDataTransformationProfile.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a HealthlakeDataTransformationProfile resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the HealthlakeDataTransformationProfile to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing HealthlakeDataTransformationProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/healthlake_data_transformation_profile#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the HealthlakeDataTransformationProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.profileId">ProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.source">Source</a></code> | <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference">HealthlakeDataTransformationProfileSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList">HealthlakeDataTransformationProfileTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.targetFormat">TargetFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.profileDescriptionInput">ProfileDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.profileNameInput">ProfileNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.sourceFormatInput">SourceFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.sourceInput">SourceInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSource">HealthlakeDataTransformationProfileSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTags">HealthlakeDataTransformationProfileTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.profileDescription">ProfileDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.profileName">ProfileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.sourceFormat">SourceFormat</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ProfileId`<sup>Required</sup> <a name="ProfileId" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.profileId"></a>

```csharp
public string ProfileId { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.source"></a>

```csharp
public HealthlakeDataTransformationProfileSourceOutputReference Source { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference">HealthlakeDataTransformationProfileSourceOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.tags"></a>

```csharp
public HealthlakeDataTransformationProfileTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList">HealthlakeDataTransformationProfileTagsList</a>

---

##### `TargetFormat`<sup>Required</sup> <a name="TargetFormat" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.targetFormat"></a>

```csharp
public string TargetFormat { get; }
```

- *Type:* string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `ProfileDescriptionInput`<sup>Optional</sup> <a name="ProfileDescriptionInput" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.profileDescriptionInput"></a>

```csharp
public string ProfileDescriptionInput { get; }
```

- *Type:* string

---

##### `ProfileNameInput`<sup>Optional</sup> <a name="ProfileNameInput" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.profileNameInput"></a>

```csharp
public string ProfileNameInput { get; }
```

- *Type:* string

---

##### `SourceFormatInput`<sup>Optional</sup> <a name="SourceFormatInput" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.sourceFormatInput"></a>

```csharp
public string SourceFormatInput { get; }
```

- *Type:* string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.sourceInput"></a>

```csharp
public IResolvable|HealthlakeDataTransformationProfileSource SourceInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSource">HealthlakeDataTransformationProfileSource</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.tagsInput"></a>

```csharp
public IResolvable|HealthlakeDataTransformationProfileTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTags">HealthlakeDataTransformationProfileTags</a>[]

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `ProfileDescription`<sup>Required</sup> <a name="ProfileDescription" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.profileDescription"></a>

```csharp
public string ProfileDescription { get; }
```

- *Type:* string

---

##### `ProfileName`<sup>Required</sup> <a name="ProfileName" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.profileName"></a>

```csharp
public string ProfileName { get; }
```

- *Type:* string

---

##### `SourceFormat`<sup>Required</sup> <a name="SourceFormat" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.sourceFormat"></a>

```csharp
public string SourceFormat { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### HealthlakeDataTransformationProfileConfig <a name="HealthlakeDataTransformationProfileConfig" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new HealthlakeDataTransformationProfileConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ProfileName,
    string SourceFormat,
    string KmsKeyId = null,
    string ProfileDescription = null,
    HealthlakeDataTransformationProfileSource Source = null,
    IResolvable|HealthlakeDataTransformationProfileTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig.property.profileName">ProfileName</a></code> | <code>string</code> | The human-readable name of the profile. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig.property.sourceFormat">SourceFormat</a></code> | <code>string</code> | The source format that this profile converts from. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | The identifier (key ID or ARN) of a customer-managed KMS key used to encrypt the profile's template content at rest. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig.property.profileDescription">ProfileDescription</a></code> | <code>string</code> | A human-readable description of the profile's purpose. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig.property.source">Source</a></code> | <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSource">HealthlakeDataTransformationProfileSource</a></code> | The source from which to create the profile's initial template content. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTags">HealthlakeDataTransformationProfileTags</a>[]</code> | An array of key-value pairs to apply to this profile. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ProfileName`<sup>Required</sup> <a name="ProfileName" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig.property.profileName"></a>

```csharp
public string ProfileName { get; set; }
```

- *Type:* string

The human-readable name of the profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/healthlake_data_transformation_profile#profile_name HealthlakeDataTransformationProfile#profile_name}

---

##### `SourceFormat`<sup>Required</sup> <a name="SourceFormat" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig.property.sourceFormat"></a>

```csharp
public string SourceFormat { get; set; }
```

- *Type:* string

The source format that this profile converts from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/healthlake_data_transformation_profile#source_format HealthlakeDataTransformationProfile#source_format}

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

The identifier (key ID or ARN) of a customer-managed KMS key used to encrypt the profile's template content at rest.

If omitted, an AWS owned key is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/healthlake_data_transformation_profile#kms_key_id HealthlakeDataTransformationProfile#kms_key_id}

---

##### `ProfileDescription`<sup>Optional</sup> <a name="ProfileDescription" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig.property.profileDescription"></a>

```csharp
public string ProfileDescription { get; set; }
```

- *Type:* string

A human-readable description of the profile's purpose.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/healthlake_data_transformation_profile#profile_description HealthlakeDataTransformationProfile#profile_description}

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig.property.source"></a>

```csharp
public HealthlakeDataTransformationProfileSource Source { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSource">HealthlakeDataTransformationProfileSource</a>

The source from which to create the profile's initial template content.

Exactly one of the members must be specified. Use StarterProfile (C-CDA only), ProfileMapping (C-CDA or CSV), or ExistingVersionedProfileId to clone an existing profile. Each produces a published profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/healthlake_data_transformation_profile#source HealthlakeDataTransformationProfile#source}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig.property.tags"></a>

```csharp
public IResolvable|HealthlakeDataTransformationProfileTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTags">HealthlakeDataTransformationProfileTags</a>[]

An array of key-value pairs to apply to this profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/healthlake_data_transformation_profile#tags HealthlakeDataTransformationProfile#tags}

---

### HealthlakeDataTransformationProfileSource <a name="HealthlakeDataTransformationProfileSource" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new HealthlakeDataTransformationProfileSource {
    HealthlakeDataTransformationProfileSourceExistingVersionedProfileId ExistingVersionedProfileId = null,
    HealthlakeDataTransformationProfileSourceProfileMapping ProfileMapping = null,
    HealthlakeDataTransformationProfileSourceStarterProfile StarterProfile = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSource.property.existingVersionedProfileId">ExistingVersionedProfileId</a></code> | <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileId">HealthlakeDataTransformationProfileSourceExistingVersionedProfileId</a></code> | Create the profile by cloning a specific version of an existing profile. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSource.property.profileMapping">ProfileMapping</a></code> | <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMapping">HealthlakeDataTransformationProfileSourceProfileMapping</a></code> | Create the profile from raw Velocity template mapping content. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSource.property.starterProfile">StarterProfile</a></code> | <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfile">HealthlakeDataTransformationProfileSourceStarterProfile</a></code> | Create the profile from a predefined starter profile of transformation templates. |

---

##### `ExistingVersionedProfileId`<sup>Optional</sup> <a name="ExistingVersionedProfileId" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSource.property.existingVersionedProfileId"></a>

```csharp
public HealthlakeDataTransformationProfileSourceExistingVersionedProfileId ExistingVersionedProfileId { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileId">HealthlakeDataTransformationProfileSourceExistingVersionedProfileId</a>

Create the profile by cloning a specific version of an existing profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/healthlake_data_transformation_profile#existing_versioned_profile_id HealthlakeDataTransformationProfile#existing_versioned_profile_id}

---

##### `ProfileMapping`<sup>Optional</sup> <a name="ProfileMapping" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSource.property.profileMapping"></a>

```csharp
public HealthlakeDataTransformationProfileSourceProfileMapping ProfileMapping { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMapping">HealthlakeDataTransformationProfileSourceProfileMapping</a>

Create the profile from raw Velocity template mapping content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/healthlake_data_transformation_profile#profile_mapping HealthlakeDataTransformationProfile#profile_mapping}

---

##### `StarterProfile`<sup>Optional</sup> <a name="StarterProfile" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSource.property.starterProfile"></a>

```csharp
public HealthlakeDataTransformationProfileSourceStarterProfile StarterProfile { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfile">HealthlakeDataTransformationProfileSourceStarterProfile</a>

Create the profile from a predefined starter profile of transformation templates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/healthlake_data_transformation_profile#starter_profile HealthlakeDataTransformationProfile#starter_profile}

---

### HealthlakeDataTransformationProfileSourceExistingVersionedProfileId <a name="HealthlakeDataTransformationProfileSourceExistingVersionedProfileId" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileId"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileId.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new HealthlakeDataTransformationProfileSourceExistingVersionedProfileId {
    string ProfileId = null,
    double Version = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileId.property.profileId">ProfileId</a></code> | <code>string</code> | The unique identifier of the source profile to clone. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileId.property.version">Version</a></code> | <code>double</code> | The version number of the source profile to clone. |

---

##### `ProfileId`<sup>Optional</sup> <a name="ProfileId" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileId.property.profileId"></a>

```csharp
public string ProfileId { get; set; }
```

- *Type:* string

The unique identifier of the source profile to clone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/healthlake_data_transformation_profile#profile_id HealthlakeDataTransformationProfile#profile_id}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileId.property.version"></a>

```csharp
public double Version { get; set; }
```

- *Type:* double

The version number of the source profile to clone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/healthlake_data_transformation_profile#version HealthlakeDataTransformationProfile#version}

---

### HealthlakeDataTransformationProfileSourceProfileMapping <a name="HealthlakeDataTransformationProfileSourceProfileMapping" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMapping"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMapping.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new HealthlakeDataTransformationProfileSourceProfileMapping {
    System.Collections.Generic.IDictionary<string, string> ProfileMapping = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMapping.property.profileMapping">ProfileMapping</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Map of template file paths to their Velocity template content. |

---

##### `ProfileMapping`<sup>Optional</sup> <a name="ProfileMapping" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMapping.property.profileMapping"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ProfileMapping { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Map of template file paths to their Velocity template content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/healthlake_data_transformation_profile#profile_mapping HealthlakeDataTransformationProfile#profile_mapping}

---

### HealthlakeDataTransformationProfileSourceStarterProfile <a name="HealthlakeDataTransformationProfileSourceStarterProfile" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfile.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new HealthlakeDataTransformationProfileSourceStarterProfile {
    string StarterProfileName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfile.property.starterProfileName">StarterProfileName</a></code> | <code>string</code> | The name of the starter profile to seed the profile from. |

---

##### `StarterProfileName`<sup>Optional</sup> <a name="StarterProfileName" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfile.property.starterProfileName"></a>

```csharp
public string StarterProfileName { get; set; }
```

- *Type:* string

The name of the starter profile to seed the profile from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/healthlake_data_transformation_profile#starter_profile_name HealthlakeDataTransformationProfile#starter_profile_name}

---

### HealthlakeDataTransformationProfileTags <a name="HealthlakeDataTransformationProfileTags" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new HealthlakeDataTransformationProfileTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTags.property.key">Key</a></code> | <code>string</code> | The key of the tag. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTags.property.value">Value</a></code> | <code>string</code> | The value of the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/healthlake_data_transformation_profile#key HealthlakeDataTransformationProfile#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/healthlake_data_transformation_profile#value HealthlakeDataTransformationProfile#value}

---

## Classes <a name="Classes" id="Classes"></a>

### HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference <a name="HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.resetProfileId">ResetProfileId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetProfileId` <a name="ResetProfileId" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.resetProfileId"></a>

```csharp
private void ResetProfileId()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.resetVersion"></a>

```csharp
private void ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.property.profileIdInput">ProfileIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.property.versionInput">VersionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.property.profileId">ProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.property.version">Version</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileId">HealthlakeDataTransformationProfileSourceExistingVersionedProfileId</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ProfileIdInput`<sup>Optional</sup> <a name="ProfileIdInput" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.property.profileIdInput"></a>

```csharp
public string ProfileIdInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.property.versionInput"></a>

```csharp
public double VersionInput { get; }
```

- *Type:* double

---

##### `ProfileId`<sup>Required</sup> <a name="ProfileId" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.property.profileId"></a>

```csharp
public string ProfileId { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.property.version"></a>

```csharp
public double Version { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.property.internalValue"></a>

```csharp
public IResolvable|HealthlakeDataTransformationProfileSourceExistingVersionedProfileId InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileId">HealthlakeDataTransformationProfileSourceExistingVersionedProfileId</a>

---


### HealthlakeDataTransformationProfileSourceOutputReference <a name="HealthlakeDataTransformationProfileSourceOutputReference" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new HealthlakeDataTransformationProfileSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.putExistingVersionedProfileId">PutExistingVersionedProfileId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.putProfileMapping">PutProfileMapping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.putStarterProfile">PutStarterProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.resetExistingVersionedProfileId">ResetExistingVersionedProfileId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.resetProfileMapping">ResetProfileMapping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.resetStarterProfile">ResetStarterProfile</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExistingVersionedProfileId` <a name="PutExistingVersionedProfileId" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.putExistingVersionedProfileId"></a>

```csharp
private void PutExistingVersionedProfileId(HealthlakeDataTransformationProfileSourceExistingVersionedProfileId Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.putExistingVersionedProfileId.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileId">HealthlakeDataTransformationProfileSourceExistingVersionedProfileId</a>

---

##### `PutProfileMapping` <a name="PutProfileMapping" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.putProfileMapping"></a>

```csharp
private void PutProfileMapping(HealthlakeDataTransformationProfileSourceProfileMapping Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.putProfileMapping.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMapping">HealthlakeDataTransformationProfileSourceProfileMapping</a>

---

##### `PutStarterProfile` <a name="PutStarterProfile" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.putStarterProfile"></a>

```csharp
private void PutStarterProfile(HealthlakeDataTransformationProfileSourceStarterProfile Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.putStarterProfile.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfile">HealthlakeDataTransformationProfileSourceStarterProfile</a>

---

##### `ResetExistingVersionedProfileId` <a name="ResetExistingVersionedProfileId" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.resetExistingVersionedProfileId"></a>

```csharp
private void ResetExistingVersionedProfileId()
```

##### `ResetProfileMapping` <a name="ResetProfileMapping" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.resetProfileMapping"></a>

```csharp
private void ResetProfileMapping()
```

##### `ResetStarterProfile` <a name="ResetStarterProfile" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.resetStarterProfile"></a>

```csharp
private void ResetStarterProfile()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.property.existingVersionedProfileId">ExistingVersionedProfileId</a></code> | <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference">HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.property.profileMapping">ProfileMapping</a></code> | <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference">HealthlakeDataTransformationProfileSourceProfileMappingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.property.starterProfile">StarterProfile</a></code> | <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference">HealthlakeDataTransformationProfileSourceStarterProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.property.existingVersionedProfileIdInput">ExistingVersionedProfileIdInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileId">HealthlakeDataTransformationProfileSourceExistingVersionedProfileId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.property.profileMappingInput">ProfileMappingInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMapping">HealthlakeDataTransformationProfileSourceProfileMapping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.property.starterProfileInput">StarterProfileInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfile">HealthlakeDataTransformationProfileSourceStarterProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSource">HealthlakeDataTransformationProfileSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExistingVersionedProfileId`<sup>Required</sup> <a name="ExistingVersionedProfileId" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.property.existingVersionedProfileId"></a>

```csharp
public HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference ExistingVersionedProfileId { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference">HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference</a>

---

##### `ProfileMapping`<sup>Required</sup> <a name="ProfileMapping" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.property.profileMapping"></a>

```csharp
public HealthlakeDataTransformationProfileSourceProfileMappingOutputReference ProfileMapping { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference">HealthlakeDataTransformationProfileSourceProfileMappingOutputReference</a>

---

##### `StarterProfile`<sup>Required</sup> <a name="StarterProfile" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.property.starterProfile"></a>

```csharp
public HealthlakeDataTransformationProfileSourceStarterProfileOutputReference StarterProfile { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference">HealthlakeDataTransformationProfileSourceStarterProfileOutputReference</a>

---

##### `ExistingVersionedProfileIdInput`<sup>Optional</sup> <a name="ExistingVersionedProfileIdInput" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.property.existingVersionedProfileIdInput"></a>

```csharp
public IResolvable|HealthlakeDataTransformationProfileSourceExistingVersionedProfileId ExistingVersionedProfileIdInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileId">HealthlakeDataTransformationProfileSourceExistingVersionedProfileId</a>

---

##### `ProfileMappingInput`<sup>Optional</sup> <a name="ProfileMappingInput" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.property.profileMappingInput"></a>

```csharp
public IResolvable|HealthlakeDataTransformationProfileSourceProfileMapping ProfileMappingInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMapping">HealthlakeDataTransformationProfileSourceProfileMapping</a>

---

##### `StarterProfileInput`<sup>Optional</sup> <a name="StarterProfileInput" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.property.starterProfileInput"></a>

```csharp
public IResolvable|HealthlakeDataTransformationProfileSourceStarterProfile StarterProfileInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfile">HealthlakeDataTransformationProfileSourceStarterProfile</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.property.internalValue"></a>

```csharp
public IResolvable|HealthlakeDataTransformationProfileSource InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSource">HealthlakeDataTransformationProfileSource</a>

---


### HealthlakeDataTransformationProfileSourceProfileMappingOutputReference <a name="HealthlakeDataTransformationProfileSourceProfileMappingOutputReference" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new HealthlakeDataTransformationProfileSourceProfileMappingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.resetProfileMapping">ResetProfileMapping</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetProfileMapping` <a name="ResetProfileMapping" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.resetProfileMapping"></a>

```csharp
private void ResetProfileMapping()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.property.profileMappingInput">ProfileMappingInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.property.profileMapping">ProfileMapping</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMapping">HealthlakeDataTransformationProfileSourceProfileMapping</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ProfileMappingInput`<sup>Optional</sup> <a name="ProfileMappingInput" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.property.profileMappingInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ProfileMappingInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ProfileMapping`<sup>Required</sup> <a name="ProfileMapping" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.property.profileMapping"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ProfileMapping { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.property.internalValue"></a>

```csharp
public IResolvable|HealthlakeDataTransformationProfileSourceProfileMapping InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMapping">HealthlakeDataTransformationProfileSourceProfileMapping</a>

---


### HealthlakeDataTransformationProfileSourceStarterProfileOutputReference <a name="HealthlakeDataTransformationProfileSourceStarterProfileOutputReference" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new HealthlakeDataTransformationProfileSourceStarterProfileOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.resetStarterProfileName">ResetStarterProfileName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetStarterProfileName` <a name="ResetStarterProfileName" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.resetStarterProfileName"></a>

```csharp
private void ResetStarterProfileName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.property.starterProfileNameInput">StarterProfileNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.property.starterProfileName">StarterProfileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfile">HealthlakeDataTransformationProfileSourceStarterProfile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StarterProfileNameInput`<sup>Optional</sup> <a name="StarterProfileNameInput" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.property.starterProfileNameInput"></a>

```csharp
public string StarterProfileNameInput { get; }
```

- *Type:* string

---

##### `StarterProfileName`<sup>Required</sup> <a name="StarterProfileName" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.property.starterProfileName"></a>

```csharp
public string StarterProfileName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.property.internalValue"></a>

```csharp
public IResolvable|HealthlakeDataTransformationProfileSourceStarterProfile InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfile">HealthlakeDataTransformationProfileSourceStarterProfile</a>

---


### HealthlakeDataTransformationProfileTagsList <a name="HealthlakeDataTransformationProfileTagsList" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new HealthlakeDataTransformationProfileTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList.get"></a>

```csharp
private HealthlakeDataTransformationProfileTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTags">HealthlakeDataTransformationProfileTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList.property.internalValue"></a>

```csharp
public IResolvable|HealthlakeDataTransformationProfileTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTags">HealthlakeDataTransformationProfileTags</a>[]

---


### HealthlakeDataTransformationProfileTagsOutputReference <a name="HealthlakeDataTransformationProfileTagsOutputReference" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new HealthlakeDataTransformationProfileTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTags">HealthlakeDataTransformationProfileTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|HealthlakeDataTransformationProfileTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTags">HealthlakeDataTransformationProfileTags</a>

---



