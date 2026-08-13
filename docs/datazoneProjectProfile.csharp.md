# `datazoneProjectProfile` Submodule <a name="`datazoneProjectProfile` Submodule" id="@cdktn/provider-awscc.datazoneProjectProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatazoneProjectProfile <a name="DatazoneProjectProfile" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile awscc_datazone_project_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneProjectProfile(Construct Scope, string Id, DatazoneProjectProfileConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig">DatazoneProjectProfileConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig">DatazoneProjectProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.putEnvironmentConfigurations">PutEnvironmentConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.putProjectResourceTags">PutProjectResourceTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.resetAllowCustomProjectResourceTags">ResetAllowCustomProjectResourceTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.resetDomainIdentifier">ResetDomainIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.resetDomainUnitIdentifier">ResetDomainUnitIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.resetEnvironmentConfigurations">ResetEnvironmentConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.resetProjectResourceTags">ResetProjectResourceTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.resetProjectResourceTagsDescription">ResetProjectResourceTagsDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.resetUseDefaultConfigurations">ResetUseDefaultConfigurations</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEnvironmentConfigurations` <a name="PutEnvironmentConfigurations" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.putEnvironmentConfigurations"></a>

```csharp
private void PutEnvironmentConfigurations(IResolvable|DatazoneProjectProfileEnvironmentConfigurations[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.putEnvironmentConfigurations.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurations">DatazoneProjectProfileEnvironmentConfigurations</a>[]

---

##### `PutProjectResourceTags` <a name="PutProjectResourceTags" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.putProjectResourceTags"></a>

```csharp
private void PutProjectResourceTags(IResolvable|DatazoneProjectProfileProjectResourceTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.putProjectResourceTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTags">DatazoneProjectProfileProjectResourceTags</a>[]

---

##### `ResetAllowCustomProjectResourceTags` <a name="ResetAllowCustomProjectResourceTags" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.resetAllowCustomProjectResourceTags"></a>

```csharp
private void ResetAllowCustomProjectResourceTags()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDomainIdentifier` <a name="ResetDomainIdentifier" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.resetDomainIdentifier"></a>

```csharp
private void ResetDomainIdentifier()
```

##### `ResetDomainUnitIdentifier` <a name="ResetDomainUnitIdentifier" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.resetDomainUnitIdentifier"></a>

```csharp
private void ResetDomainUnitIdentifier()
```

##### `ResetEnvironmentConfigurations` <a name="ResetEnvironmentConfigurations" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.resetEnvironmentConfigurations"></a>

```csharp
private void ResetEnvironmentConfigurations()
```

##### `ResetProjectResourceTags` <a name="ResetProjectResourceTags" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.resetProjectResourceTags"></a>

```csharp
private void ResetProjectResourceTags()
```

##### `ResetProjectResourceTagsDescription` <a name="ResetProjectResourceTagsDescription" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.resetProjectResourceTagsDescription"></a>

```csharp
private void ResetProjectResourceTagsDescription()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.resetStatus"></a>

```csharp
private void ResetStatus()
```

##### `ResetUseDefaultConfigurations` <a name="ResetUseDefaultConfigurations" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.resetUseDefaultConfigurations"></a>

```csharp
private void ResetUseDefaultConfigurations()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DatazoneProjectProfile resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DatazoneProjectProfile.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DatazoneProjectProfile.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DatazoneProjectProfile.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DatazoneProjectProfile.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DatazoneProjectProfile resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatazoneProjectProfile to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatazoneProjectProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DatazoneProjectProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.createdBy">CreatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.domainId">DomainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.domainUnitId">DomainUnitId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.environmentConfigurations">EnvironmentConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsList">DatazoneProjectProfileEnvironmentConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.identifier">Identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.lastUpdatedAt">LastUpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.projectProfileId">ProjectProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.projectResourceTags">ProjectResourceTags</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsList">DatazoneProjectProfileProjectResourceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.allowCustomProjectResourceTagsInput">AllowCustomProjectResourceTagsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.domainIdentifierInput">DomainIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.domainUnitIdentifierInput">DomainUnitIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.environmentConfigurationsInput">EnvironmentConfigurationsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurations">DatazoneProjectProfileEnvironmentConfigurations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.projectResourceTagsDescriptionInput">ProjectResourceTagsDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.projectResourceTagsInput">ProjectResourceTagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTags">DatazoneProjectProfileProjectResourceTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.useDefaultConfigurationsInput">UseDefaultConfigurationsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.allowCustomProjectResourceTags">AllowCustomProjectResourceTags</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.domainIdentifier">DomainIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.domainUnitIdentifier">DomainUnitIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.projectResourceTagsDescription">ProjectResourceTagsDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.useDefaultConfigurations">UseDefaultConfigurations</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.createdBy"></a>

```csharp
public string CreatedBy { get; }
```

- *Type:* string

---

##### `DomainId`<sup>Required</sup> <a name="DomainId" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.domainId"></a>

```csharp
public string DomainId { get; }
```

- *Type:* string

---

##### `DomainUnitId`<sup>Required</sup> <a name="DomainUnitId" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.domainUnitId"></a>

```csharp
public string DomainUnitId { get; }
```

- *Type:* string

---

##### `EnvironmentConfigurations`<sup>Required</sup> <a name="EnvironmentConfigurations" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.environmentConfigurations"></a>

```csharp
public DatazoneProjectProfileEnvironmentConfigurationsList EnvironmentConfigurations { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsList">DatazoneProjectProfileEnvironmentConfigurationsList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.identifier"></a>

```csharp
public string Identifier { get; }
```

- *Type:* string

---

##### `LastUpdatedAt`<sup>Required</sup> <a name="LastUpdatedAt" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.lastUpdatedAt"></a>

```csharp
public string LastUpdatedAt { get; }
```

- *Type:* string

---

##### `ProjectProfileId`<sup>Required</sup> <a name="ProjectProfileId" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.projectProfileId"></a>

```csharp
public string ProjectProfileId { get; }
```

- *Type:* string

---

##### `ProjectResourceTags`<sup>Required</sup> <a name="ProjectResourceTags" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.projectResourceTags"></a>

```csharp
public DatazoneProjectProfileProjectResourceTagsList ProjectResourceTags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsList">DatazoneProjectProfileProjectResourceTagsList</a>

---

##### `AllowCustomProjectResourceTagsInput`<sup>Optional</sup> <a name="AllowCustomProjectResourceTagsInput" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.allowCustomProjectResourceTagsInput"></a>

```csharp
public bool|IResolvable AllowCustomProjectResourceTagsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DomainIdentifierInput`<sup>Optional</sup> <a name="DomainIdentifierInput" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.domainIdentifierInput"></a>

```csharp
public string DomainIdentifierInput { get; }
```

- *Type:* string

---

##### `DomainUnitIdentifierInput`<sup>Optional</sup> <a name="DomainUnitIdentifierInput" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.domainUnitIdentifierInput"></a>

```csharp
public string DomainUnitIdentifierInput { get; }
```

- *Type:* string

---

##### `EnvironmentConfigurationsInput`<sup>Optional</sup> <a name="EnvironmentConfigurationsInput" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.environmentConfigurationsInput"></a>

```csharp
public IResolvable|DatazoneProjectProfileEnvironmentConfigurations[] EnvironmentConfigurationsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurations">DatazoneProjectProfileEnvironmentConfigurations</a>[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectResourceTagsDescriptionInput`<sup>Optional</sup> <a name="ProjectResourceTagsDescriptionInput" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.projectResourceTagsDescriptionInput"></a>

```csharp
public string ProjectResourceTagsDescriptionInput { get; }
```

- *Type:* string

---

##### `ProjectResourceTagsInput`<sup>Optional</sup> <a name="ProjectResourceTagsInput" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.projectResourceTagsInput"></a>

```csharp
public IResolvable|DatazoneProjectProfileProjectResourceTags[] ProjectResourceTagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTags">DatazoneProjectProfileProjectResourceTags</a>[]

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `UseDefaultConfigurationsInput`<sup>Optional</sup> <a name="UseDefaultConfigurationsInput" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.useDefaultConfigurationsInput"></a>

```csharp
public bool|IResolvable UseDefaultConfigurationsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AllowCustomProjectResourceTags`<sup>Required</sup> <a name="AllowCustomProjectResourceTags" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.allowCustomProjectResourceTags"></a>

```csharp
public bool|IResolvable AllowCustomProjectResourceTags { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DomainIdentifier`<sup>Required</sup> <a name="DomainIdentifier" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.domainIdentifier"></a>

```csharp
public string DomainIdentifier { get; }
```

- *Type:* string

---

##### `DomainUnitIdentifier`<sup>Required</sup> <a name="DomainUnitIdentifier" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.domainUnitIdentifier"></a>

```csharp
public string DomainUnitIdentifier { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ProjectResourceTagsDescription`<sup>Required</sup> <a name="ProjectResourceTagsDescription" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.projectResourceTagsDescription"></a>

```csharp
public string ProjectResourceTagsDescription { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `UseDefaultConfigurations`<sup>Required</sup> <a name="UseDefaultConfigurations" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.useDefaultConfigurations"></a>

```csharp
public bool|IResolvable UseDefaultConfigurations { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatazoneProjectProfileConfig <a name="DatazoneProjectProfileConfig" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneProjectProfileConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    bool|IResolvable AllowCustomProjectResourceTags = null,
    string Description = null,
    string DomainIdentifier = null,
    string DomainUnitIdentifier = null,
    IResolvable|DatazoneProjectProfileEnvironmentConfigurations[] EnvironmentConfigurations = null,
    IResolvable|DatazoneProjectProfileProjectResourceTags[] ProjectResourceTags = null,
    string ProjectResourceTagsDescription = null,
    string Status = null,
    bool|IResolvable UseDefaultConfigurations = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#name DatazoneProjectProfile#name}. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig.property.allowCustomProjectResourceTags">AllowCustomProjectResourceTags</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#allow_custom_project_resource_tags DatazoneProjectProfile#allow_custom_project_resource_tags}. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#description DatazoneProjectProfile#description}. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig.property.domainIdentifier">DomainIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#domain_identifier DatazoneProjectProfile#domain_identifier}. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig.property.domainUnitIdentifier">DomainUnitIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#domain_unit_identifier DatazoneProjectProfile#domain_unit_identifier}. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig.property.environmentConfigurations">EnvironmentConfigurations</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurations">DatazoneProjectProfileEnvironmentConfigurations</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#environment_configurations DatazoneProjectProfile#environment_configurations}. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig.property.projectResourceTags">ProjectResourceTags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTags">DatazoneProjectProfileProjectResourceTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#project_resource_tags DatazoneProjectProfile#project_resource_tags}. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig.property.projectResourceTagsDescription">ProjectResourceTagsDescription</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#project_resource_tags_description DatazoneProjectProfile#project_resource_tags_description}. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#status DatazoneProjectProfile#status}. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig.property.useDefaultConfigurations">UseDefaultConfigurations</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#use_default_configurations DatazoneProjectProfile#use_default_configurations}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#name DatazoneProjectProfile#name}.

---

##### `AllowCustomProjectResourceTags`<sup>Optional</sup> <a name="AllowCustomProjectResourceTags" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig.property.allowCustomProjectResourceTags"></a>

```csharp
public bool|IResolvable AllowCustomProjectResourceTags { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#allow_custom_project_resource_tags DatazoneProjectProfile#allow_custom_project_resource_tags}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#description DatazoneProjectProfile#description}.

---

##### `DomainIdentifier`<sup>Optional</sup> <a name="DomainIdentifier" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig.property.domainIdentifier"></a>

```csharp
public string DomainIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#domain_identifier DatazoneProjectProfile#domain_identifier}.

---

##### `DomainUnitIdentifier`<sup>Optional</sup> <a name="DomainUnitIdentifier" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig.property.domainUnitIdentifier"></a>

```csharp
public string DomainUnitIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#domain_unit_identifier DatazoneProjectProfile#domain_unit_identifier}.

---

##### `EnvironmentConfigurations`<sup>Optional</sup> <a name="EnvironmentConfigurations" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig.property.environmentConfigurations"></a>

```csharp
public IResolvable|DatazoneProjectProfileEnvironmentConfigurations[] EnvironmentConfigurations { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurations">DatazoneProjectProfileEnvironmentConfigurations</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#environment_configurations DatazoneProjectProfile#environment_configurations}.

---

##### `ProjectResourceTags`<sup>Optional</sup> <a name="ProjectResourceTags" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig.property.projectResourceTags"></a>

```csharp
public IResolvable|DatazoneProjectProfileProjectResourceTags[] ProjectResourceTags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTags">DatazoneProjectProfileProjectResourceTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#project_resource_tags DatazoneProjectProfile#project_resource_tags}.

---

##### `ProjectResourceTagsDescription`<sup>Optional</sup> <a name="ProjectResourceTagsDescription" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig.property.projectResourceTagsDescription"></a>

```csharp
public string ProjectResourceTagsDescription { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#project_resource_tags_description DatazoneProjectProfile#project_resource_tags_description}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#status DatazoneProjectProfile#status}.

---

##### `UseDefaultConfigurations`<sup>Optional</sup> <a name="UseDefaultConfigurations" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig.property.useDefaultConfigurations"></a>

```csharp
public bool|IResolvable UseDefaultConfigurations { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#use_default_configurations DatazoneProjectProfile#use_default_configurations}.

---

### DatazoneProjectProfileEnvironmentConfigurations <a name="DatazoneProjectProfileEnvironmentConfigurations" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneProjectProfileEnvironmentConfigurations {
    DatazoneProjectProfileEnvironmentConfigurationsAwsAccount AwsAccount = null,
    DatazoneProjectProfileEnvironmentConfigurationsAwsRegion AwsRegion = null,
    DatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters ConfigurationParameters = null,
    string DeploymentMode = null,
    double DeploymentOrder = null,
    string Description = null,
    string EnvironmentBlueprintId = null,
    string EnvironmentConfigurationId = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurations.property.awsAccount">AwsAccount</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccount">DatazoneProjectProfileEnvironmentConfigurationsAwsAccount</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#aws_account DatazoneProjectProfile#aws_account}. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurations.property.awsRegion">AwsRegion</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegion">DatazoneProjectProfileEnvironmentConfigurationsAwsRegion</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#aws_region DatazoneProjectProfile#aws_region}. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurations.property.configurationParameters">ConfigurationParameters</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters">DatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#configuration_parameters DatazoneProjectProfile#configuration_parameters}. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurations.property.deploymentMode">DeploymentMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#deployment_mode DatazoneProjectProfile#deployment_mode}. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurations.property.deploymentOrder">DeploymentOrder</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#deployment_order DatazoneProjectProfile#deployment_order}. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurations.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#description DatazoneProjectProfile#description}. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurations.property.environmentBlueprintId">EnvironmentBlueprintId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#environment_blueprint_id DatazoneProjectProfile#environment_blueprint_id}. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurations.property.environmentConfigurationId">EnvironmentConfigurationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#environment_configuration_id DatazoneProjectProfile#environment_configuration_id}. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurations.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#name DatazoneProjectProfile#name}. |

---

##### `AwsAccount`<sup>Optional</sup> <a name="AwsAccount" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurations.property.awsAccount"></a>

```csharp
public DatazoneProjectProfileEnvironmentConfigurationsAwsAccount AwsAccount { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccount">DatazoneProjectProfileEnvironmentConfigurationsAwsAccount</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#aws_account DatazoneProjectProfile#aws_account}.

---

##### `AwsRegion`<sup>Optional</sup> <a name="AwsRegion" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurations.property.awsRegion"></a>

```csharp
public DatazoneProjectProfileEnvironmentConfigurationsAwsRegion AwsRegion { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegion">DatazoneProjectProfileEnvironmentConfigurationsAwsRegion</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#aws_region DatazoneProjectProfile#aws_region}.

---

##### `ConfigurationParameters`<sup>Optional</sup> <a name="ConfigurationParameters" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurations.property.configurationParameters"></a>

```csharp
public DatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters ConfigurationParameters { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters">DatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#configuration_parameters DatazoneProjectProfile#configuration_parameters}.

---

##### `DeploymentMode`<sup>Optional</sup> <a name="DeploymentMode" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurations.property.deploymentMode"></a>

```csharp
public string DeploymentMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#deployment_mode DatazoneProjectProfile#deployment_mode}.

---

##### `DeploymentOrder`<sup>Optional</sup> <a name="DeploymentOrder" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurations.property.deploymentOrder"></a>

```csharp
public double DeploymentOrder { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#deployment_order DatazoneProjectProfile#deployment_order}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurations.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#description DatazoneProjectProfile#description}.

---

##### `EnvironmentBlueprintId`<sup>Optional</sup> <a name="EnvironmentBlueprintId" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurations.property.environmentBlueprintId"></a>

```csharp
public string EnvironmentBlueprintId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#environment_blueprint_id DatazoneProjectProfile#environment_blueprint_id}.

---

##### `EnvironmentConfigurationId`<sup>Optional</sup> <a name="EnvironmentConfigurationId" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurations.property.environmentConfigurationId"></a>

```csharp
public string EnvironmentConfigurationId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#environment_configuration_id DatazoneProjectProfile#environment_configuration_id}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurations.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#name DatazoneProjectProfile#name}.

---

### DatazoneProjectProfileEnvironmentConfigurationsAwsAccount <a name="DatazoneProjectProfileEnvironmentConfigurationsAwsAccount" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccount"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccount.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneProjectProfileEnvironmentConfigurationsAwsAccount {
    string AwsAccountId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccount.property.awsAccountId">AwsAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#aws_account_id DatazoneProjectProfile#aws_account_id}. |

---

##### `AwsAccountId`<sup>Optional</sup> <a name="AwsAccountId" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccount.property.awsAccountId"></a>

```csharp
public string AwsAccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#aws_account_id DatazoneProjectProfile#aws_account_id}.

---

### DatazoneProjectProfileEnvironmentConfigurationsAwsRegion <a name="DatazoneProjectProfileEnvironmentConfigurationsAwsRegion" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegion.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneProjectProfileEnvironmentConfigurationsAwsRegion {
    string RegionName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegion.property.regionName">RegionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#region_name DatazoneProjectProfile#region_name}. |

---

##### `RegionName`<sup>Optional</sup> <a name="RegionName" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegion.property.regionName"></a>

```csharp
public string RegionName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#region_name DatazoneProjectProfile#region_name}.

---

### DatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters <a name="DatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters {
    IResolvable|DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides[] ParameterOverrides = null,
    IResolvable|DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters[] ResolvedParameters = null,
    string SsmPath = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters.property.parameterOverrides">ParameterOverrides</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides">DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#parameter_overrides DatazoneProjectProfile#parameter_overrides}. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters.property.resolvedParameters">ResolvedParameters</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters">DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#resolved_parameters DatazoneProjectProfile#resolved_parameters}. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters.property.ssmPath">SsmPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#ssm_path DatazoneProjectProfile#ssm_path}. |

---

##### `ParameterOverrides`<sup>Optional</sup> <a name="ParameterOverrides" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters.property.parameterOverrides"></a>

```csharp
public IResolvable|DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides[] ParameterOverrides { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides">DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#parameter_overrides DatazoneProjectProfile#parameter_overrides}.

---

##### `ResolvedParameters`<sup>Optional</sup> <a name="ResolvedParameters" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters.property.resolvedParameters"></a>

```csharp
public IResolvable|DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters[] ResolvedParameters { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters">DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#resolved_parameters DatazoneProjectProfile#resolved_parameters}.

---

##### `SsmPath`<sup>Optional</sup> <a name="SsmPath" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters.property.ssmPath"></a>

```csharp
public string SsmPath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#ssm_path DatazoneProjectProfile#ssm_path}.

---

### DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides <a name="DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides {
    bool|IResolvable IsEditable = null,
    string Name = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides.property.isEditable">IsEditable</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#is_editable DatazoneProjectProfile#is_editable}. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#name DatazoneProjectProfile#name}. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#value DatazoneProjectProfile#value}. |

---

##### `IsEditable`<sup>Optional</sup> <a name="IsEditable" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides.property.isEditable"></a>

```csharp
public bool|IResolvable IsEditable { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#is_editable DatazoneProjectProfile#is_editable}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#name DatazoneProjectProfile#name}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#value DatazoneProjectProfile#value}.

---

### DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters <a name="DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters {
    bool|IResolvable IsEditable = null,
    string Name = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters.property.isEditable">IsEditable</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#is_editable DatazoneProjectProfile#is_editable}. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#name DatazoneProjectProfile#name}. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#value DatazoneProjectProfile#value}. |

---

##### `IsEditable`<sup>Optional</sup> <a name="IsEditable" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters.property.isEditable"></a>

```csharp
public bool|IResolvable IsEditable { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#is_editable DatazoneProjectProfile#is_editable}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#name DatazoneProjectProfile#name}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#value DatazoneProjectProfile#value}.

---

### DatazoneProjectProfileProjectResourceTags <a name="DatazoneProjectProfileProjectResourceTags" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneProjectProfileProjectResourceTags {
    bool|IResolvable IsValueEditable = null,
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTags.property.isValueEditable">IsValueEditable</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#is_value_editable DatazoneProjectProfile#is_value_editable}. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#key DatazoneProjectProfile#key}. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#value DatazoneProjectProfile#value}. |

---

##### `IsValueEditable`<sup>Optional</sup> <a name="IsValueEditable" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTags.property.isValueEditable"></a>

```csharp
public bool|IResolvable IsValueEditable { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#is_value_editable DatazoneProjectProfile#is_value_editable}.

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#key DatazoneProjectProfile#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#value DatazoneProjectProfile#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference <a name="DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.resetAwsAccountId">ResetAwsAccountId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAwsAccountId` <a name="ResetAwsAccountId" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.resetAwsAccountId"></a>

```csharp
private void ResetAwsAccountId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.property.awsAccountIdInput">AwsAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.property.awsAccountId">AwsAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccount">DatazoneProjectProfileEnvironmentConfigurationsAwsAccount</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AwsAccountIdInput`<sup>Optional</sup> <a name="AwsAccountIdInput" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.property.awsAccountIdInput"></a>

```csharp
public string AwsAccountIdInput { get; }
```

- *Type:* string

---

##### `AwsAccountId`<sup>Required</sup> <a name="AwsAccountId" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.property.awsAccountId"></a>

```csharp
public string AwsAccountId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatazoneProjectProfileEnvironmentConfigurationsAwsAccount InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccount">DatazoneProjectProfileEnvironmentConfigurationsAwsAccount</a>

---


### DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference <a name="DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.resetRegionName">ResetRegionName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegionName` <a name="ResetRegionName" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.resetRegionName"></a>

```csharp
private void ResetRegionName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.property.regionNameInput">RegionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.property.regionName">RegionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegion">DatazoneProjectProfileEnvironmentConfigurationsAwsRegion</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RegionNameInput`<sup>Optional</sup> <a name="RegionNameInput" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.property.regionNameInput"></a>

```csharp
public string RegionNameInput { get; }
```

- *Type:* string

---

##### `RegionName`<sup>Required</sup> <a name="RegionName" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.property.regionName"></a>

```csharp
public string RegionName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatazoneProjectProfileEnvironmentConfigurationsAwsRegion InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegion">DatazoneProjectProfileEnvironmentConfigurationsAwsRegion</a>

---


### DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference <a name="DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.putParameterOverrides">PutParameterOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.putResolvedParameters">PutResolvedParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.resetParameterOverrides">ResetParameterOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.resetResolvedParameters">ResetResolvedParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.resetSsmPath">ResetSsmPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutParameterOverrides` <a name="PutParameterOverrides" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.putParameterOverrides"></a>

```csharp
private void PutParameterOverrides(IResolvable|DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.putParameterOverrides.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides">DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides</a>[]

---

##### `PutResolvedParameters` <a name="PutResolvedParameters" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.putResolvedParameters"></a>

```csharp
private void PutResolvedParameters(IResolvable|DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.putResolvedParameters.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters">DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters</a>[]

---

##### `ResetParameterOverrides` <a name="ResetParameterOverrides" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.resetParameterOverrides"></a>

```csharp
private void ResetParameterOverrides()
```

##### `ResetResolvedParameters` <a name="ResetResolvedParameters" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.resetResolvedParameters"></a>

```csharp
private void ResetResolvedParameters()
```

##### `ResetSsmPath` <a name="ResetSsmPath" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.resetSsmPath"></a>

```csharp
private void ResetSsmPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.property.parameterOverrides">ParameterOverrides</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList">DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.property.resolvedParameters">ResolvedParameters</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList">DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.property.parameterOverridesInput">ParameterOverridesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides">DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.property.resolvedParametersInput">ResolvedParametersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters">DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.property.ssmPathInput">SsmPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.property.ssmPath">SsmPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters">DatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ParameterOverrides`<sup>Required</sup> <a name="ParameterOverrides" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.property.parameterOverrides"></a>

```csharp
public DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList ParameterOverrides { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList">DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList</a>

---

##### `ResolvedParameters`<sup>Required</sup> <a name="ResolvedParameters" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.property.resolvedParameters"></a>

```csharp
public DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList ResolvedParameters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList">DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList</a>

---

##### `ParameterOverridesInput`<sup>Optional</sup> <a name="ParameterOverridesInput" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.property.parameterOverridesInput"></a>

```csharp
public IResolvable|DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides[] ParameterOverridesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides">DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides</a>[]

---

##### `ResolvedParametersInput`<sup>Optional</sup> <a name="ResolvedParametersInput" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.property.resolvedParametersInput"></a>

```csharp
public IResolvable|DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters[] ResolvedParametersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters">DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters</a>[]

---

##### `SsmPathInput`<sup>Optional</sup> <a name="SsmPathInput" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.property.ssmPathInput"></a>

```csharp
public string SsmPathInput { get; }
```

- *Type:* string

---

##### `SsmPath`<sup>Required</sup> <a name="SsmPath" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.property.ssmPath"></a>

```csharp
public string SsmPath { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters">DatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters</a>

---


### DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList <a name="DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.get"></a>

```csharp
private DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides">DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.property.internalValue"></a>

```csharp
public IResolvable|DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides">DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides</a>[]

---


### DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference <a name="DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.resetIsEditable">ResetIsEditable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsEditable` <a name="ResetIsEditable" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.resetIsEditable"></a>

```csharp
private void ResetIsEditable()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.property.isEditableInput">IsEditableInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.property.isEditable">IsEditable</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides">DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsEditableInput`<sup>Optional</sup> <a name="IsEditableInput" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.property.isEditableInput"></a>

```csharp
public bool|IResolvable IsEditableInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `IsEditable`<sup>Required</sup> <a name="IsEditable" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.property.isEditable"></a>

```csharp
public bool|IResolvable IsEditable { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides">DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides</a>

---


### DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList <a name="DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.get"></a>

```csharp
private DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters">DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.property.internalValue"></a>

```csharp
public IResolvable|DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters">DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters</a>[]

---


### DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference <a name="DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.resetIsEditable">ResetIsEditable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsEditable` <a name="ResetIsEditable" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.resetIsEditable"></a>

```csharp
private void ResetIsEditable()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.property.isEditableInput">IsEditableInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.property.isEditable">IsEditable</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters">DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsEditableInput`<sup>Optional</sup> <a name="IsEditableInput" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.property.isEditableInput"></a>

```csharp
public bool|IResolvable IsEditableInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `IsEditable`<sup>Required</sup> <a name="IsEditable" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.property.isEditable"></a>

```csharp
public bool|IResolvable IsEditable { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters">DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters</a>

---


### DatazoneProjectProfileEnvironmentConfigurationsList <a name="DatazoneProjectProfileEnvironmentConfigurationsList" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneProjectProfileEnvironmentConfigurationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsList.get"></a>

```csharp
private DatazoneProjectProfileEnvironmentConfigurationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurations">DatazoneProjectProfileEnvironmentConfigurations</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsList.property.internalValue"></a>

```csharp
public IResolvable|DatazoneProjectProfileEnvironmentConfigurations[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurations">DatazoneProjectProfileEnvironmentConfigurations</a>[]

---


### DatazoneProjectProfileEnvironmentConfigurationsOutputReference <a name="DatazoneProjectProfileEnvironmentConfigurationsOutputReference" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneProjectProfileEnvironmentConfigurationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.putAwsAccount">PutAwsAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.putAwsRegion">PutAwsRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.putConfigurationParameters">PutConfigurationParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.resetAwsAccount">ResetAwsAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.resetAwsRegion">ResetAwsRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.resetConfigurationParameters">ResetConfigurationParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.resetDeploymentMode">ResetDeploymentMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.resetDeploymentOrder">ResetDeploymentOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.resetEnvironmentBlueprintId">ResetEnvironmentBlueprintId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.resetEnvironmentConfigurationId">ResetEnvironmentConfigurationId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAwsAccount` <a name="PutAwsAccount" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.putAwsAccount"></a>

```csharp
private void PutAwsAccount(DatazoneProjectProfileEnvironmentConfigurationsAwsAccount Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.putAwsAccount.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccount">DatazoneProjectProfileEnvironmentConfigurationsAwsAccount</a>

---

##### `PutAwsRegion` <a name="PutAwsRegion" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.putAwsRegion"></a>

```csharp
private void PutAwsRegion(DatazoneProjectProfileEnvironmentConfigurationsAwsRegion Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.putAwsRegion.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegion">DatazoneProjectProfileEnvironmentConfigurationsAwsRegion</a>

---

##### `PutConfigurationParameters` <a name="PutConfigurationParameters" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.putConfigurationParameters"></a>

```csharp
private void PutConfigurationParameters(DatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.putConfigurationParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters">DatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters</a>

---

##### `ResetAwsAccount` <a name="ResetAwsAccount" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.resetAwsAccount"></a>

```csharp
private void ResetAwsAccount()
```

##### `ResetAwsRegion` <a name="ResetAwsRegion" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.resetAwsRegion"></a>

```csharp
private void ResetAwsRegion()
```

##### `ResetConfigurationParameters` <a name="ResetConfigurationParameters" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.resetConfigurationParameters"></a>

```csharp
private void ResetConfigurationParameters()
```

##### `ResetDeploymentMode` <a name="ResetDeploymentMode" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.resetDeploymentMode"></a>

```csharp
private void ResetDeploymentMode()
```

##### `ResetDeploymentOrder` <a name="ResetDeploymentOrder" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.resetDeploymentOrder"></a>

```csharp
private void ResetDeploymentOrder()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEnvironmentBlueprintId` <a name="ResetEnvironmentBlueprintId" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.resetEnvironmentBlueprintId"></a>

```csharp
private void ResetEnvironmentBlueprintId()
```

##### `ResetEnvironmentConfigurationId` <a name="ResetEnvironmentConfigurationId" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.resetEnvironmentConfigurationId"></a>

```csharp
private void ResetEnvironmentConfigurationId()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.awsAccount">AwsAccount</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference">DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.awsRegion">AwsRegion</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference">DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.configurationParameters">ConfigurationParameters</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference">DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.awsAccountInput">AwsAccountInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccount">DatazoneProjectProfileEnvironmentConfigurationsAwsAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.awsRegionInput">AwsRegionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegion">DatazoneProjectProfileEnvironmentConfigurationsAwsRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.configurationParametersInput">ConfigurationParametersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters">DatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.deploymentModeInput">DeploymentModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.deploymentOrderInput">DeploymentOrderInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.environmentBlueprintIdInput">EnvironmentBlueprintIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.environmentConfigurationIdInput">EnvironmentConfigurationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.deploymentMode">DeploymentMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.deploymentOrder">DeploymentOrder</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.environmentBlueprintId">EnvironmentBlueprintId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.environmentConfigurationId">EnvironmentConfigurationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurations">DatazoneProjectProfileEnvironmentConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AwsAccount`<sup>Required</sup> <a name="AwsAccount" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.awsAccount"></a>

```csharp
public DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference AwsAccount { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference">DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference</a>

---

##### `AwsRegion`<sup>Required</sup> <a name="AwsRegion" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.awsRegion"></a>

```csharp
public DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference AwsRegion { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference">DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference</a>

---

##### `ConfigurationParameters`<sup>Required</sup> <a name="ConfigurationParameters" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.configurationParameters"></a>

```csharp
public DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference ConfigurationParameters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference">DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference</a>

---

##### `AwsAccountInput`<sup>Optional</sup> <a name="AwsAccountInput" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.awsAccountInput"></a>

```csharp
public IResolvable|DatazoneProjectProfileEnvironmentConfigurationsAwsAccount AwsAccountInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccount">DatazoneProjectProfileEnvironmentConfigurationsAwsAccount</a>

---

##### `AwsRegionInput`<sup>Optional</sup> <a name="AwsRegionInput" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.awsRegionInput"></a>

```csharp
public IResolvable|DatazoneProjectProfileEnvironmentConfigurationsAwsRegion AwsRegionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegion">DatazoneProjectProfileEnvironmentConfigurationsAwsRegion</a>

---

##### `ConfigurationParametersInput`<sup>Optional</sup> <a name="ConfigurationParametersInput" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.configurationParametersInput"></a>

```csharp
public IResolvable|DatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters ConfigurationParametersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters">DatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters</a>

---

##### `DeploymentModeInput`<sup>Optional</sup> <a name="DeploymentModeInput" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.deploymentModeInput"></a>

```csharp
public string DeploymentModeInput { get; }
```

- *Type:* string

---

##### `DeploymentOrderInput`<sup>Optional</sup> <a name="DeploymentOrderInput" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.deploymentOrderInput"></a>

```csharp
public double DeploymentOrderInput { get; }
```

- *Type:* double

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EnvironmentBlueprintIdInput`<sup>Optional</sup> <a name="EnvironmentBlueprintIdInput" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.environmentBlueprintIdInput"></a>

```csharp
public string EnvironmentBlueprintIdInput { get; }
```

- *Type:* string

---

##### `EnvironmentConfigurationIdInput`<sup>Optional</sup> <a name="EnvironmentConfigurationIdInput" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.environmentConfigurationIdInput"></a>

```csharp
public string EnvironmentConfigurationIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `DeploymentMode`<sup>Required</sup> <a name="DeploymentMode" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.deploymentMode"></a>

```csharp
public string DeploymentMode { get; }
```

- *Type:* string

---

##### `DeploymentOrder`<sup>Required</sup> <a name="DeploymentOrder" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.deploymentOrder"></a>

```csharp
public double DeploymentOrder { get; }
```

- *Type:* double

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EnvironmentBlueprintId`<sup>Required</sup> <a name="EnvironmentBlueprintId" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.environmentBlueprintId"></a>

```csharp
public string EnvironmentBlueprintId { get; }
```

- *Type:* string

---

##### `EnvironmentConfigurationId`<sup>Required</sup> <a name="EnvironmentConfigurationId" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.environmentConfigurationId"></a>

```csharp
public string EnvironmentConfigurationId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatazoneProjectProfileEnvironmentConfigurations InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurations">DatazoneProjectProfileEnvironmentConfigurations</a>

---


### DatazoneProjectProfileProjectResourceTagsList <a name="DatazoneProjectProfileProjectResourceTagsList" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneProjectProfileProjectResourceTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsList.get"></a>

```csharp
private DatazoneProjectProfileProjectResourceTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTags">DatazoneProjectProfileProjectResourceTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsList.property.internalValue"></a>

```csharp
public IResolvable|DatazoneProjectProfileProjectResourceTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTags">DatazoneProjectProfileProjectResourceTags</a>[]

---


### DatazoneProjectProfileProjectResourceTagsOutputReference <a name="DatazoneProjectProfileProjectResourceTagsOutputReference" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneProjectProfileProjectResourceTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.resetIsValueEditable">ResetIsValueEditable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsValueEditable` <a name="ResetIsValueEditable" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.resetIsValueEditable"></a>

```csharp
private void ResetIsValueEditable()
```

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.property.isValueEditableInput">IsValueEditableInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.property.isValueEditable">IsValueEditable</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTags">DatazoneProjectProfileProjectResourceTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsValueEditableInput`<sup>Optional</sup> <a name="IsValueEditableInput" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.property.isValueEditableInput"></a>

```csharp
public bool|IResolvable IsValueEditableInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `IsValueEditable`<sup>Required</sup> <a name="IsValueEditable" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.property.isValueEditable"></a>

```csharp
public bool|IResolvable IsValueEditable { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatazoneProjectProfileProjectResourceTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTags">DatazoneProjectProfileProjectResourceTags</a>

---



