# `datazoneConnection` Submodule <a name="`datazoneConnection` Submodule" id="@cdktn/provider-awscc.datazoneConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatazoneConnection <a name="DatazoneConnection" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection awscc_datazone_connection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneConnection(Construct Scope, string Id, DatazoneConnectionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig">DatazoneConnectionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig">DatazoneConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.putAwsLocation">PutAwsLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.putConfigurations">PutConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.putProps">PutProps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.resetAwsLocation">ResetAwsLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.resetConfigurations">ResetConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.resetEnableTrustedIdentityPropagation">ResetEnableTrustedIdentityPropagation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.resetEnvironmentIdentifier">ResetEnvironmentIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.resetProjectIdentifier">ResetProjectIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.resetProps">ResetProps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.resetScope">ResetScope</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAwsLocation` <a name="PutAwsLocation" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.putAwsLocation"></a>

```csharp
private void PutAwsLocation(DatazoneConnectionAwsLocation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.putAwsLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocation">DatazoneConnectionAwsLocation</a>

---

##### `PutConfigurations` <a name="PutConfigurations" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.putConfigurations"></a>

```csharp
private void PutConfigurations(IResolvable|DatazoneConnectionConfigurations[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.putConfigurations.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurations">DatazoneConnectionConfigurations</a>[]

---

##### `PutProps` <a name="PutProps" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.putProps"></a>

```csharp
private void PutProps(DatazoneConnectionProps Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.putProps.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps">DatazoneConnectionProps</a>

---

##### `ResetAwsLocation` <a name="ResetAwsLocation" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.resetAwsLocation"></a>

```csharp
private void ResetAwsLocation()
```

##### `ResetConfigurations` <a name="ResetConfigurations" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.resetConfigurations"></a>

```csharp
private void ResetConfigurations()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEnableTrustedIdentityPropagation` <a name="ResetEnableTrustedIdentityPropagation" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.resetEnableTrustedIdentityPropagation"></a>

```csharp
private void ResetEnableTrustedIdentityPropagation()
```

##### `ResetEnvironmentIdentifier` <a name="ResetEnvironmentIdentifier" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.resetEnvironmentIdentifier"></a>

```csharp
private void ResetEnvironmentIdentifier()
```

##### `ResetProjectIdentifier` <a name="ResetProjectIdentifier" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.resetProjectIdentifier"></a>

```csharp
private void ResetProjectIdentifier()
```

##### `ResetProps` <a name="ResetProps" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.resetProps"></a>

```csharp
private void ResetProps()
```

##### `ResetScope` <a name="ResetScope" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.resetScope"></a>

```csharp
private void ResetScope()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DatazoneConnection resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DatazoneConnection.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DatazoneConnection.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DatazoneConnection.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DatazoneConnection.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DatazoneConnection resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatazoneConnection to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatazoneConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DatazoneConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.awsLocation">AwsLocation</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference">DatazoneConnectionAwsLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.configurations">Configurations</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList">DatazoneConnectionConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.connectionId">ConnectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.domainId">DomainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.domainUnitId">DomainUnitId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.environmentId">EnvironmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.environmentUserRole">EnvironmentUserRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.props">Props</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference">DatazoneConnectionPropsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.awsLocationInput">AwsLocationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocation">DatazoneConnectionAwsLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.configurationsInput">ConfigurationsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurations">DatazoneConnectionConfigurations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.domainIdentifierInput">DomainIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.enableTrustedIdentityPropagationInput">EnableTrustedIdentityPropagationInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.environmentIdentifierInput">EnvironmentIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.projectIdentifierInput">ProjectIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.propsInput">PropsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps">DatazoneConnectionProps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.scopeInput">ScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.domainIdentifier">DomainIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.enableTrustedIdentityPropagation">EnableTrustedIdentityPropagation</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.environmentIdentifier">EnvironmentIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.projectIdentifier">ProjectIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.scope">Scope</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AwsLocation`<sup>Required</sup> <a name="AwsLocation" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.awsLocation"></a>

```csharp
public DatazoneConnectionAwsLocationOutputReference AwsLocation { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference">DatazoneConnectionAwsLocationOutputReference</a>

---

##### `Configurations`<sup>Required</sup> <a name="Configurations" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.configurations"></a>

```csharp
public DatazoneConnectionConfigurationsList Configurations { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList">DatazoneConnectionConfigurationsList</a>

---

##### `ConnectionId`<sup>Required</sup> <a name="ConnectionId" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.connectionId"></a>

```csharp
public string ConnectionId { get; }
```

- *Type:* string

---

##### `DomainId`<sup>Required</sup> <a name="DomainId" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.domainId"></a>

```csharp
public string DomainId { get; }
```

- *Type:* string

---

##### `DomainUnitId`<sup>Required</sup> <a name="DomainUnitId" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.domainUnitId"></a>

```csharp
public string DomainUnitId { get; }
```

- *Type:* string

---

##### `EnvironmentId`<sup>Required</sup> <a name="EnvironmentId" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.environmentId"></a>

```csharp
public string EnvironmentId { get; }
```

- *Type:* string

---

##### `EnvironmentUserRole`<sup>Required</sup> <a name="EnvironmentUserRole" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.environmentUserRole"></a>

```csharp
public string EnvironmentUserRole { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `Props`<sup>Required</sup> <a name="Props" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.props"></a>

```csharp
public DatazoneConnectionPropsOutputReference Props { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference">DatazoneConnectionPropsOutputReference</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `AwsLocationInput`<sup>Optional</sup> <a name="AwsLocationInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.awsLocationInput"></a>

```csharp
public IResolvable|DatazoneConnectionAwsLocation AwsLocationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocation">DatazoneConnectionAwsLocation</a>

---

##### `ConfigurationsInput`<sup>Optional</sup> <a name="ConfigurationsInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.configurationsInput"></a>

```csharp
public IResolvable|DatazoneConnectionConfigurations[] ConfigurationsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurations">DatazoneConnectionConfigurations</a>[]

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DomainIdentifierInput`<sup>Optional</sup> <a name="DomainIdentifierInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.domainIdentifierInput"></a>

```csharp
public string DomainIdentifierInput { get; }
```

- *Type:* string

---

##### `EnableTrustedIdentityPropagationInput`<sup>Optional</sup> <a name="EnableTrustedIdentityPropagationInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.enableTrustedIdentityPropagationInput"></a>

```csharp
public bool|IResolvable EnableTrustedIdentityPropagationInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnvironmentIdentifierInput`<sup>Optional</sup> <a name="EnvironmentIdentifierInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.environmentIdentifierInput"></a>

```csharp
public string EnvironmentIdentifierInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectIdentifierInput`<sup>Optional</sup> <a name="ProjectIdentifierInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.projectIdentifierInput"></a>

```csharp
public string ProjectIdentifierInput { get; }
```

- *Type:* string

---

##### `PropsInput`<sup>Optional</sup> <a name="PropsInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.propsInput"></a>

```csharp
public IResolvable|DatazoneConnectionProps PropsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps">DatazoneConnectionProps</a>

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.scopeInput"></a>

```csharp
public string ScopeInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DomainIdentifier`<sup>Required</sup> <a name="DomainIdentifier" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.domainIdentifier"></a>

```csharp
public string DomainIdentifier { get; }
```

- *Type:* string

---

##### `EnableTrustedIdentityPropagation`<sup>Required</sup> <a name="EnableTrustedIdentityPropagation" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.enableTrustedIdentityPropagation"></a>

```csharp
public bool|IResolvable EnableTrustedIdentityPropagation { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnvironmentIdentifier`<sup>Required</sup> <a name="EnvironmentIdentifier" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.environmentIdentifier"></a>

```csharp
public string EnvironmentIdentifier { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ProjectIdentifier`<sup>Required</sup> <a name="ProjectIdentifier" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.projectIdentifier"></a>

```csharp
public string ProjectIdentifier { get; }
```

- *Type:* string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.scope"></a>

```csharp
public string Scope { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatazoneConnectionAwsLocation <a name="DatazoneConnectionAwsLocation" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneConnectionAwsLocation {
    string AccessRole = null,
    string AwsAccountId = null,
    string AwsRegion = null,
    string IamConnectionId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocation.property.accessRole">AccessRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#access_role DatazoneConnection#access_role}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocation.property.awsAccountId">AwsAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#aws_account_id DatazoneConnection#aws_account_id}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocation.property.awsRegion">AwsRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#aws_region DatazoneConnection#aws_region}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocation.property.iamConnectionId">IamConnectionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#iam_connection_id DatazoneConnection#iam_connection_id}. |

---

##### `AccessRole`<sup>Optional</sup> <a name="AccessRole" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocation.property.accessRole"></a>

```csharp
public string AccessRole { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#access_role DatazoneConnection#access_role}.

---

##### `AwsAccountId`<sup>Optional</sup> <a name="AwsAccountId" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocation.property.awsAccountId"></a>

```csharp
public string AwsAccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#aws_account_id DatazoneConnection#aws_account_id}.

---

##### `AwsRegion`<sup>Optional</sup> <a name="AwsRegion" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocation.property.awsRegion"></a>

```csharp
public string AwsRegion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#aws_region DatazoneConnection#aws_region}.

---

##### `IamConnectionId`<sup>Optional</sup> <a name="IamConnectionId" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocation.property.iamConnectionId"></a>

```csharp
public string IamConnectionId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#iam_connection_id DatazoneConnection#iam_connection_id}.

---

### DatazoneConnectionConfig <a name="DatazoneConnectionConfig" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneConnectionConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DomainIdentifier,
    string Name,
    DatazoneConnectionAwsLocation AwsLocation = null,
    IResolvable|DatazoneConnectionConfigurations[] Configurations = null,
    string Description = null,
    bool|IResolvable EnableTrustedIdentityPropagation = null,
    string EnvironmentIdentifier = null,
    string ProjectIdentifier = null,
    DatazoneConnectionProps Props = null,
    string Scope = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.domainIdentifier">DomainIdentifier</a></code> | <code>string</code> | The identifier of the domain in which the connection is created. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.name">Name</a></code> | <code>string</code> | The name of the connection. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.awsLocation">AwsLocation</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocation">DatazoneConnectionAwsLocation</a></code> | AWS Location of project. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.configurations">Configurations</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurations">DatazoneConnectionConfigurations</a>[]</code> | The configurations of the connection. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.description">Description</a></code> | <code>string</code> | The description of the connection. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.enableTrustedIdentityPropagation">EnableTrustedIdentityPropagation</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Specifies whether the trusted identity propagation is enabled. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.environmentIdentifier">EnvironmentIdentifier</a></code> | <code>string</code> | The identifier of the environment in which the connection is created. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.projectIdentifier">ProjectIdentifier</a></code> | <code>string</code> | The identifier of the project in which the connection should be created. If. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.props">Props</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps">DatazoneConnectionProps</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#props DatazoneConnection#props}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.scope">Scope</a></code> | <code>string</code> | The scope of the connection. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DomainIdentifier`<sup>Required</sup> <a name="DomainIdentifier" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.domainIdentifier"></a>

```csharp
public string DomainIdentifier { get; set; }
```

- *Type:* string

The identifier of the domain in which the connection is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#domain_identifier DatazoneConnection#domain_identifier}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#name DatazoneConnection#name}

---

##### `AwsLocation`<sup>Optional</sup> <a name="AwsLocation" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.awsLocation"></a>

```csharp
public DatazoneConnectionAwsLocation AwsLocation { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocation">DatazoneConnectionAwsLocation</a>

AWS Location of project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#aws_location DatazoneConnection#aws_location}

---

##### `Configurations`<sup>Optional</sup> <a name="Configurations" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.configurations"></a>

```csharp
public IResolvable|DatazoneConnectionConfigurations[] Configurations { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurations">DatazoneConnectionConfigurations</a>[]

The configurations of the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#configurations DatazoneConnection#configurations}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#description DatazoneConnection#description}

---

##### `EnableTrustedIdentityPropagation`<sup>Optional</sup> <a name="EnableTrustedIdentityPropagation" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.enableTrustedIdentityPropagation"></a>

```csharp
public bool|IResolvable EnableTrustedIdentityPropagation { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Specifies whether the trusted identity propagation is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#enable_trusted_identity_propagation DatazoneConnection#enable_trusted_identity_propagation}

---

##### `EnvironmentIdentifier`<sup>Optional</sup> <a name="EnvironmentIdentifier" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.environmentIdentifier"></a>

```csharp
public string EnvironmentIdentifier { get; set; }
```

- *Type:* string

The identifier of the environment in which the connection is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#environment_identifier DatazoneConnection#environment_identifier}

---

##### `ProjectIdentifier`<sup>Optional</sup> <a name="ProjectIdentifier" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.projectIdentifier"></a>

```csharp
public string ProjectIdentifier { get; set; }
```

- *Type:* string

The identifier of the project in which the connection should be created. If.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#project_identifier DatazoneConnection#project_identifier}

---

##### `Props`<sup>Optional</sup> <a name="Props" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.props"></a>

```csharp
public DatazoneConnectionProps Props { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps">DatazoneConnectionProps</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#props DatazoneConnection#props}.

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.scope"></a>

```csharp
public string Scope { get; set; }
```

- *Type:* string

The scope of the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#scope DatazoneConnection#scope}

---

### DatazoneConnectionConfigurations <a name="DatazoneConnectionConfigurations" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneConnectionConfigurations {
    string Classification = null,
    System.Collections.Generic.IDictionary<string, string> Properties = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurations.property.classification">Classification</a></code> | <code>string</code> | The classification of the connection configuration. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurations.property.properties">Properties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Property Map. |

---

##### `Classification`<sup>Optional</sup> <a name="Classification" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurations.property.classification"></a>

```csharp
public string Classification { get; set; }
```

- *Type:* string

The classification of the connection configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#classification DatazoneConnection#classification}

---

##### `Properties`<sup>Optional</sup> <a name="Properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurations.property.properties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Properties { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Property Map.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#properties DatazoneConnection#properties}

---

### DatazoneConnectionProps <a name="DatazoneConnectionProps" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneConnectionProps {
    DatazoneConnectionPropsAmazonQProperties AmazonQProperties = null,
    DatazoneConnectionPropsAthenaProperties AthenaProperties = null,
    DatazoneConnectionPropsGlueProperties GlueProperties = null,
    DatazoneConnectionPropsHyperPodProperties HyperPodProperties = null,
    DatazoneConnectionPropsIamProperties IamProperties = null,
    DatazoneConnectionPropsLakehouseProperties LakehouseProperties = null,
    DatazoneConnectionPropsMlflowProperties MlflowProperties = null,
    DatazoneConnectionPropsRedshiftProperties RedshiftProperties = null,
    DatazoneConnectionPropsS3Properties S3Properties = null,
    DatazoneConnectionPropsSparkEmrProperties SparkEmrProperties = null,
    DatazoneConnectionPropsSparkGlueProperties SparkGlueProperties = null,
    DatazoneConnectionPropsWorkflowsMwaaProperties WorkflowsMwaaProperties = null,
    string WorkflowsServerlessProperties = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps.property.amazonQProperties">AmazonQProperties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQProperties">DatazoneConnectionPropsAmazonQProperties</a></code> | Amazon Q properties of the connection. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps.property.athenaProperties">AthenaProperties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaProperties">DatazoneConnectionPropsAthenaProperties</a></code> | Athena Properties Input. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps.property.glueProperties">GlueProperties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGlueProperties">DatazoneConnectionPropsGlueProperties</a></code> | Glue Properties Input. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps.property.hyperPodProperties">HyperPodProperties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodProperties">DatazoneConnectionPropsHyperPodProperties</a></code> | HyperPod Properties Input. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps.property.iamProperties">IamProperties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamProperties">DatazoneConnectionPropsIamProperties</a></code> | IAM Properties Input. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps.property.lakehouseProperties">LakehouseProperties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehouseProperties">DatazoneConnectionPropsLakehouseProperties</a></code> | Lakehouse Properties Input. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps.property.mlflowProperties">MlflowProperties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowProperties">DatazoneConnectionPropsMlflowProperties</a></code> | MLflow Properties Input. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps.property.redshiftProperties">RedshiftProperties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftProperties">DatazoneConnectionPropsRedshiftProperties</a></code> | Redshift Properties Input. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps.property.s3Properties">S3Properties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3Properties">DatazoneConnectionPropsS3Properties</a></code> | S3 Properties Input. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps.property.sparkEmrProperties">SparkEmrProperties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrProperties">DatazoneConnectionPropsSparkEmrProperties</a></code> | Spark EMR Properties Input. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps.property.sparkGlueProperties">SparkGlueProperties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGlueProperties">DatazoneConnectionPropsSparkGlueProperties</a></code> | Spark Glue Properties Input. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps.property.workflowsMwaaProperties">WorkflowsMwaaProperties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaProperties">DatazoneConnectionPropsWorkflowsMwaaProperties</a></code> | Workflows MWAA Properties Input. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps.property.workflowsServerlessProperties">WorkflowsServerlessProperties</a></code> | <code>string</code> | Workflows Serverless Properties Input. |

---

##### `AmazonQProperties`<sup>Optional</sup> <a name="AmazonQProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps.property.amazonQProperties"></a>

```csharp
public DatazoneConnectionPropsAmazonQProperties AmazonQProperties { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQProperties">DatazoneConnectionPropsAmazonQProperties</a>

Amazon Q properties of the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#amazon_q_properties DatazoneConnection#amazon_q_properties}

---

##### `AthenaProperties`<sup>Optional</sup> <a name="AthenaProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps.property.athenaProperties"></a>

```csharp
public DatazoneConnectionPropsAthenaProperties AthenaProperties { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaProperties">DatazoneConnectionPropsAthenaProperties</a>

Athena Properties Input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#athena_properties DatazoneConnection#athena_properties}

---

##### `GlueProperties`<sup>Optional</sup> <a name="GlueProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps.property.glueProperties"></a>

```csharp
public DatazoneConnectionPropsGlueProperties GlueProperties { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGlueProperties">DatazoneConnectionPropsGlueProperties</a>

Glue Properties Input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#glue_properties DatazoneConnection#glue_properties}

---

##### `HyperPodProperties`<sup>Optional</sup> <a name="HyperPodProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps.property.hyperPodProperties"></a>

```csharp
public DatazoneConnectionPropsHyperPodProperties HyperPodProperties { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodProperties">DatazoneConnectionPropsHyperPodProperties</a>

HyperPod Properties Input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#hyper_pod_properties DatazoneConnection#hyper_pod_properties}

---

##### `IamProperties`<sup>Optional</sup> <a name="IamProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps.property.iamProperties"></a>

```csharp
public DatazoneConnectionPropsIamProperties IamProperties { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamProperties">DatazoneConnectionPropsIamProperties</a>

IAM Properties Input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#iam_properties DatazoneConnection#iam_properties}

---

##### `LakehouseProperties`<sup>Optional</sup> <a name="LakehouseProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps.property.lakehouseProperties"></a>

```csharp
public DatazoneConnectionPropsLakehouseProperties LakehouseProperties { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehouseProperties">DatazoneConnectionPropsLakehouseProperties</a>

Lakehouse Properties Input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#lakehouse_properties DatazoneConnection#lakehouse_properties}

---

##### `MlflowProperties`<sup>Optional</sup> <a name="MlflowProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps.property.mlflowProperties"></a>

```csharp
public DatazoneConnectionPropsMlflowProperties MlflowProperties { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowProperties">DatazoneConnectionPropsMlflowProperties</a>

MLflow Properties Input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#mlflow_properties DatazoneConnection#mlflow_properties}

---

##### `RedshiftProperties`<sup>Optional</sup> <a name="RedshiftProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps.property.redshiftProperties"></a>

```csharp
public DatazoneConnectionPropsRedshiftProperties RedshiftProperties { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftProperties">DatazoneConnectionPropsRedshiftProperties</a>

Redshift Properties Input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#redshift_properties DatazoneConnection#redshift_properties}

---

##### `S3Properties`<sup>Optional</sup> <a name="S3Properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps.property.s3Properties"></a>

```csharp
public DatazoneConnectionPropsS3Properties S3Properties { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3Properties">DatazoneConnectionPropsS3Properties</a>

S3 Properties Input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#s3_properties DatazoneConnection#s3_properties}

---

##### `SparkEmrProperties`<sup>Optional</sup> <a name="SparkEmrProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps.property.sparkEmrProperties"></a>

```csharp
public DatazoneConnectionPropsSparkEmrProperties SparkEmrProperties { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrProperties">DatazoneConnectionPropsSparkEmrProperties</a>

Spark EMR Properties Input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#spark_emr_properties DatazoneConnection#spark_emr_properties}

---

##### `SparkGlueProperties`<sup>Optional</sup> <a name="SparkGlueProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps.property.sparkGlueProperties"></a>

```csharp
public DatazoneConnectionPropsSparkGlueProperties SparkGlueProperties { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGlueProperties">DatazoneConnectionPropsSparkGlueProperties</a>

Spark Glue Properties Input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#spark_glue_properties DatazoneConnection#spark_glue_properties}

---

##### `WorkflowsMwaaProperties`<sup>Optional</sup> <a name="WorkflowsMwaaProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps.property.workflowsMwaaProperties"></a>

```csharp
public DatazoneConnectionPropsWorkflowsMwaaProperties WorkflowsMwaaProperties { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaProperties">DatazoneConnectionPropsWorkflowsMwaaProperties</a>

Workflows MWAA Properties Input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#workflows_mwaa_properties DatazoneConnection#workflows_mwaa_properties}

---

##### `WorkflowsServerlessProperties`<sup>Optional</sup> <a name="WorkflowsServerlessProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps.property.workflowsServerlessProperties"></a>

```csharp
public string WorkflowsServerlessProperties { get; set; }
```

- *Type:* string

Workflows Serverless Properties Input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#workflows_serverless_properties DatazoneConnection#workflows_serverless_properties}

---

### DatazoneConnectionPropsAmazonQProperties <a name="DatazoneConnectionPropsAmazonQProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQProperties.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneConnectionPropsAmazonQProperties {
    string AuthMode = null,
    bool|IResolvable IsEnabled = null,
    string ProfileArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQProperties.property.authMode">AuthMode</a></code> | <code>string</code> | The authentication mode of the connection's AmazonQ properties. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQProperties.property.isEnabled">IsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Specifies whether Amazon Q is enabled for the connection. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQProperties.property.profileArn">ProfileArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#profile_arn DatazoneConnection#profile_arn}. |

---

##### `AuthMode`<sup>Optional</sup> <a name="AuthMode" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQProperties.property.authMode"></a>

```csharp
public string AuthMode { get; set; }
```

- *Type:* string

The authentication mode of the connection's AmazonQ properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#auth_mode DatazoneConnection#auth_mode}

---

##### `IsEnabled`<sup>Optional</sup> <a name="IsEnabled" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQProperties.property.isEnabled"></a>

```csharp
public bool|IResolvable IsEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Specifies whether Amazon Q is enabled for the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#is_enabled DatazoneConnection#is_enabled}

---

##### `ProfileArn`<sup>Optional</sup> <a name="ProfileArn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQProperties.property.profileArn"></a>

```csharp
public string ProfileArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#profile_arn DatazoneConnection#profile_arn}.

---

### DatazoneConnectionPropsAthenaProperties <a name="DatazoneConnectionPropsAthenaProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaProperties.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneConnectionPropsAthenaProperties {
    string WorkgroupName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaProperties.property.workgroupName">WorkgroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#workgroup_name DatazoneConnection#workgroup_name}. |

---

##### `WorkgroupName`<sup>Optional</sup> <a name="WorkgroupName" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaProperties.property.workgroupName"></a>

```csharp
public string WorkgroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#workgroup_name DatazoneConnection#workgroup_name}.

---

### DatazoneConnectionPropsGlueProperties <a name="DatazoneConnectionPropsGlueProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGlueProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGlueProperties.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneConnectionPropsGlueProperties {
    DatazoneConnectionPropsGluePropertiesGlueConnectionInput GlueConnectionInput = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGlueProperties.property.glueConnectionInput">GlueConnectionInput</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput">DatazoneConnectionPropsGluePropertiesGlueConnectionInput</a></code> | Glue Connection Input. |

---

##### `GlueConnectionInput`<sup>Optional</sup> <a name="GlueConnectionInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGlueProperties.property.glueConnectionInput"></a>

```csharp
public DatazoneConnectionPropsGluePropertiesGlueConnectionInput GlueConnectionInput { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput">DatazoneConnectionPropsGluePropertiesGlueConnectionInput</a>

Glue Connection Input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#glue_connection_input DatazoneConnection#glue_connection_input}

---

### DatazoneConnectionPropsGluePropertiesGlueConnectionInput <a name="DatazoneConnectionPropsGluePropertiesGlueConnectionInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneConnectionPropsGluePropertiesGlueConnectionInput {
    System.Collections.Generic.IDictionary<string, string> AthenaProperties = null,
    DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration AuthenticationConfiguration = null,
    System.Collections.Generic.IDictionary<string, string> ConnectionProperties = null,
    string ConnectionType = null,
    string Description = null,
    string MatchCriteria = null,
    string Name = null,
    DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements PhysicalConnectionRequirements = null,
    System.Collections.Generic.IDictionary<string, string> PythonProperties = null,
    System.Collections.Generic.IDictionary<string, string> SparkProperties = null,
    bool|IResolvable ValidateCredentials = null,
    string[] ValidateForComputeEnvironments = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput.property.athenaProperties">AthenaProperties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Property Map. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput.property.authenticationConfiguration">AuthenticationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration</a></code> | Authentication Configuration Input. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput.property.connectionProperties">ConnectionProperties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Connection Properties. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput.property.connectionType">ConnectionType</a></code> | <code>string</code> | Glue Connection Type. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#description DatazoneConnection#description}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput.property.matchCriteria">MatchCriteria</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#match_criteria DatazoneConnection#match_criteria}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#name DatazoneConnection#name}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput.property.physicalConnectionRequirements">PhysicalConnectionRequirements</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements">DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements</a></code> | Physical Connection Requirements. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput.property.pythonProperties">PythonProperties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Property Map. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput.property.sparkProperties">SparkProperties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Property Map. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput.property.validateCredentials">ValidateCredentials</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#validate_credentials DatazoneConnection#validate_credentials}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput.property.validateForComputeEnvironments">ValidateForComputeEnvironments</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#validate_for_compute_environments DatazoneConnection#validate_for_compute_environments}. |

---

##### `AthenaProperties`<sup>Optional</sup> <a name="AthenaProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput.property.athenaProperties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AthenaProperties { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Property Map.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#athena_properties DatazoneConnection#athena_properties}

---

##### `AuthenticationConfiguration`<sup>Optional</sup> <a name="AuthenticationConfiguration" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput.property.authenticationConfiguration"></a>

```csharp
public DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration AuthenticationConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration</a>

Authentication Configuration Input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#authentication_configuration DatazoneConnection#authentication_configuration}

---

##### `ConnectionProperties`<sup>Optional</sup> <a name="ConnectionProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput.property.connectionProperties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ConnectionProperties { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Connection Properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#connection_properties DatazoneConnection#connection_properties}

---

##### `ConnectionType`<sup>Optional</sup> <a name="ConnectionType" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput.property.connectionType"></a>

```csharp
public string ConnectionType { get; set; }
```

- *Type:* string

Glue Connection Type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#connection_type DatazoneConnection#connection_type}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#description DatazoneConnection#description}.

---

##### `MatchCriteria`<sup>Optional</sup> <a name="MatchCriteria" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput.property.matchCriteria"></a>

```csharp
public string MatchCriteria { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#match_criteria DatazoneConnection#match_criteria}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#name DatazoneConnection#name}.

---

##### `PhysicalConnectionRequirements`<sup>Optional</sup> <a name="PhysicalConnectionRequirements" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput.property.physicalConnectionRequirements"></a>

```csharp
public DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements PhysicalConnectionRequirements { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements">DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements</a>

Physical Connection Requirements.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#physical_connection_requirements DatazoneConnection#physical_connection_requirements}

---

##### `PythonProperties`<sup>Optional</sup> <a name="PythonProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput.property.pythonProperties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> PythonProperties { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Property Map.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#python_properties DatazoneConnection#python_properties}

---

##### `SparkProperties`<sup>Optional</sup> <a name="SparkProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput.property.sparkProperties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SparkProperties { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Property Map.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#spark_properties DatazoneConnection#spark_properties}

---

##### `ValidateCredentials`<sup>Optional</sup> <a name="ValidateCredentials" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput.property.validateCredentials"></a>

```csharp
public bool|IResolvable ValidateCredentials { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#validate_credentials DatazoneConnection#validate_credentials}.

---

##### `ValidateForComputeEnvironments`<sup>Optional</sup> <a name="ValidateForComputeEnvironments" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput.property.validateForComputeEnvironments"></a>

```csharp
public string[] ValidateForComputeEnvironments { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#validate_for_compute_environments DatazoneConnection#validate_for_compute_environments}.

---

### DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration <a name="DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration {
    string AuthenticationType = null,
    DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials BasicAuthenticationCredentials = null,
    System.Collections.Generic.IDictionary<string, string> CustomAuthenticationCredentials = null,
    string KmsKeyArn = null,
    DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties OAuth2Properties = null,
    string SecretArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration.property.authenticationType">AuthenticationType</a></code> | <code>string</code> | Authentication Type. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration.property.basicAuthenticationCredentials">BasicAuthenticationCredentials</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials</a></code> | Basic Authentication Credentials. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration.property.customAuthenticationCredentials">CustomAuthenticationCredentials</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Credential Map. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#kms_key_arn DatazoneConnection#kms_key_arn}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration.property.oAuth2Properties">OAuth2Properties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties</a></code> | OAuth2 Properties. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration.property.secretArn">SecretArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#secret_arn DatazoneConnection#secret_arn}. |

---

##### `AuthenticationType`<sup>Optional</sup> <a name="AuthenticationType" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration.property.authenticationType"></a>

```csharp
public string AuthenticationType { get; set; }
```

- *Type:* string

Authentication Type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#authentication_type DatazoneConnection#authentication_type}

---

##### `BasicAuthenticationCredentials`<sup>Optional</sup> <a name="BasicAuthenticationCredentials" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration.property.basicAuthenticationCredentials"></a>

```csharp
public DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials BasicAuthenticationCredentials { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials</a>

Basic Authentication Credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#basic_authentication_credentials DatazoneConnection#basic_authentication_credentials}

---

##### `CustomAuthenticationCredentials`<sup>Optional</sup> <a name="CustomAuthenticationCredentials" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration.property.customAuthenticationCredentials"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CustomAuthenticationCredentials { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Credential Map.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#custom_authentication_credentials DatazoneConnection#custom_authentication_credentials}

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#kms_key_arn DatazoneConnection#kms_key_arn}.

---

##### `OAuth2Properties`<sup>Optional</sup> <a name="OAuth2Properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration.property.oAuth2Properties"></a>

```csharp
public DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties OAuth2Properties { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties</a>

OAuth2 Properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#o_auth_2_properties DatazoneConnection#o_auth_2_properties}

---

##### `SecretArn`<sup>Optional</sup> <a name="SecretArn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration.property.secretArn"></a>

```csharp
public string SecretArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#secret_arn DatazoneConnection#secret_arn}.

---

### DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials <a name="DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials {
    string Password = null,
    string UserName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials.property.password">Password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#password DatazoneConnection#password}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials.property.userName">UserName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#user_name DatazoneConnection#user_name}. |

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#password DatazoneConnection#password}.

---

##### `UserName`<sup>Optional</sup> <a name="UserName" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials.property.userName"></a>

```csharp
public string UserName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#user_name DatazoneConnection#user_name}.

---

### DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties <a name="DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties {
    DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties AuthorizationCodeProperties = null,
    DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication OAuth2ClientApplication = null,
    DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials OAuth2Credentials = null,
    string OAuth2GrantType = null,
    string TokenUrl = null,
    System.Collections.Generic.IDictionary<string, string> TokenUrlParametersMap = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties.property.authorizationCodeProperties">AuthorizationCodeProperties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties</a></code> | Authorization Code Properties. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties.property.oAuth2ClientApplication">OAuth2ClientApplication</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication</a></code> | OAuth2 Client Application. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties.property.oAuth2Credentials">OAuth2Credentials</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials</a></code> | Glue OAuth2 Credentials. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties.property.oAuth2GrantType">OAuth2GrantType</a></code> | <code>string</code> | OAuth2 Grant Type. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties.property.tokenUrl">TokenUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#token_url DatazoneConnection#token_url}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties.property.tokenUrlParametersMap">TokenUrlParametersMap</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The token URL parameters. |

---

##### `AuthorizationCodeProperties`<sup>Optional</sup> <a name="AuthorizationCodeProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties.property.authorizationCodeProperties"></a>

```csharp
public DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties AuthorizationCodeProperties { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties</a>

Authorization Code Properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#authorization_code_properties DatazoneConnection#authorization_code_properties}

---

##### `OAuth2ClientApplication`<sup>Optional</sup> <a name="OAuth2ClientApplication" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties.property.oAuth2ClientApplication"></a>

```csharp
public DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication OAuth2ClientApplication { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication</a>

OAuth2 Client Application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#o_auth_2_client_application DatazoneConnection#o_auth_2_client_application}

---

##### `OAuth2Credentials`<sup>Optional</sup> <a name="OAuth2Credentials" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties.property.oAuth2Credentials"></a>

```csharp
public DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials OAuth2Credentials { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials</a>

Glue OAuth2 Credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#o_auth_2_credentials DatazoneConnection#o_auth_2_credentials}

---

##### `OAuth2GrantType`<sup>Optional</sup> <a name="OAuth2GrantType" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties.property.oAuth2GrantType"></a>

```csharp
public string OAuth2GrantType { get; set; }
```

- *Type:* string

OAuth2 Grant Type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#o_auth_2_grant_type DatazoneConnection#o_auth_2_grant_type}

---

##### `TokenUrl`<sup>Optional</sup> <a name="TokenUrl" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties.property.tokenUrl"></a>

```csharp
public string TokenUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#token_url DatazoneConnection#token_url}.

---

##### `TokenUrlParametersMap`<sup>Optional</sup> <a name="TokenUrlParametersMap" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties.property.tokenUrlParametersMap"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TokenUrlParametersMap { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The token URL parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#token_url_parameters_map DatazoneConnection#token_url_parameters_map}

---

### DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties <a name="DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties {
    string AuthorizationCode = null,
    string RedirectUri = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties.property.authorizationCode">AuthorizationCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#authorization_code DatazoneConnection#authorization_code}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties.property.redirectUri">RedirectUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#redirect_uri DatazoneConnection#redirect_uri}. |

---

##### `AuthorizationCode`<sup>Optional</sup> <a name="AuthorizationCode" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties.property.authorizationCode"></a>

```csharp
public string AuthorizationCode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#authorization_code DatazoneConnection#authorization_code}.

---

##### `RedirectUri`<sup>Optional</sup> <a name="RedirectUri" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties.property.redirectUri"></a>

```csharp
public string RedirectUri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#redirect_uri DatazoneConnection#redirect_uri}.

---

### DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication <a name="DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication {
    string AwsManagedClientApplicationReference = null,
    string UserManagedClientApplicationClientId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication.property.awsManagedClientApplicationReference">AwsManagedClientApplicationReference</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#aws_managed_client_application_reference DatazoneConnection#aws_managed_client_application_reference}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication.property.userManagedClientApplicationClientId">UserManagedClientApplicationClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#user_managed_client_application_client_id DatazoneConnection#user_managed_client_application_client_id}. |

---

##### `AwsManagedClientApplicationReference`<sup>Optional</sup> <a name="AwsManagedClientApplicationReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication.property.awsManagedClientApplicationReference"></a>

```csharp
public string AwsManagedClientApplicationReference { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#aws_managed_client_application_reference DatazoneConnection#aws_managed_client_application_reference}.

---

##### `UserManagedClientApplicationClientId`<sup>Optional</sup> <a name="UserManagedClientApplicationClientId" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication.property.userManagedClientApplicationClientId"></a>

```csharp
public string UserManagedClientApplicationClientId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#user_managed_client_application_client_id DatazoneConnection#user_managed_client_application_client_id}.

---

### DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials <a name="DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials {
    string AccessToken = null,
    string JwtToken = null,
    string RefreshToken = null,
    string UserManagedClientApplicationClientSecret = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials.property.accessToken">AccessToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#access_token DatazoneConnection#access_token}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials.property.jwtToken">JwtToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#jwt_token DatazoneConnection#jwt_token}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials.property.refreshToken">RefreshToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#refresh_token DatazoneConnection#refresh_token}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials.property.userManagedClientApplicationClientSecret">UserManagedClientApplicationClientSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#user_managed_client_application_client_secret DatazoneConnection#user_managed_client_application_client_secret}. |

---

##### `AccessToken`<sup>Optional</sup> <a name="AccessToken" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials.property.accessToken"></a>

```csharp
public string AccessToken { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#access_token DatazoneConnection#access_token}.

---

##### `JwtToken`<sup>Optional</sup> <a name="JwtToken" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials.property.jwtToken"></a>

```csharp
public string JwtToken { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#jwt_token DatazoneConnection#jwt_token}.

---

##### `RefreshToken`<sup>Optional</sup> <a name="RefreshToken" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials.property.refreshToken"></a>

```csharp
public string RefreshToken { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#refresh_token DatazoneConnection#refresh_token}.

---

##### `UserManagedClientApplicationClientSecret`<sup>Optional</sup> <a name="UserManagedClientApplicationClientSecret" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials.property.userManagedClientApplicationClientSecret"></a>

```csharp
public string UserManagedClientApplicationClientSecret { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#user_managed_client_application_client_secret DatazoneConnection#user_managed_client_application_client_secret}.

---

### DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements <a name="DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements {
    string AvailabilityZone = null,
    string[] SecurityGroupIdList = null,
    string SubnetId = null,
    string[] SubnetIdList = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#availability_zone DatazoneConnection#availability_zone}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements.property.securityGroupIdList">SecurityGroupIdList</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#security_group_id_list DatazoneConnection#security_group_id_list}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#subnet_id DatazoneConnection#subnet_id}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements.property.subnetIdList">SubnetIdList</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#subnet_id_list DatazoneConnection#subnet_id_list}. |

---

##### `AvailabilityZone`<sup>Optional</sup> <a name="AvailabilityZone" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#availability_zone DatazoneConnection#availability_zone}.

---

##### `SecurityGroupIdList`<sup>Optional</sup> <a name="SecurityGroupIdList" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements.property.securityGroupIdList"></a>

```csharp
public string[] SecurityGroupIdList { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#security_group_id_list DatazoneConnection#security_group_id_list}.

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#subnet_id DatazoneConnection#subnet_id}.

---

##### `SubnetIdList`<sup>Optional</sup> <a name="SubnetIdList" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements.property.subnetIdList"></a>

```csharp
public string[] SubnetIdList { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#subnet_id_list DatazoneConnection#subnet_id_list}.

---

### DatazoneConnectionPropsHyperPodProperties <a name="DatazoneConnectionPropsHyperPodProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodProperties.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneConnectionPropsHyperPodProperties {
    string ClusterName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodProperties.property.clusterName">ClusterName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#cluster_name DatazoneConnection#cluster_name}. |

---

##### `ClusterName`<sup>Optional</sup> <a name="ClusterName" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodProperties.property.clusterName"></a>

```csharp
public string ClusterName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#cluster_name DatazoneConnection#cluster_name}.

---

### DatazoneConnectionPropsIamProperties <a name="DatazoneConnectionPropsIamProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamProperties.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneConnectionPropsIamProperties {
    bool|IResolvable GlueLineageSyncEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamProperties.property.glueLineageSyncEnabled">GlueLineageSyncEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#glue_lineage_sync_enabled DatazoneConnection#glue_lineage_sync_enabled}. |

---

##### `GlueLineageSyncEnabled`<sup>Optional</sup> <a name="GlueLineageSyncEnabled" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamProperties.property.glueLineageSyncEnabled"></a>

```csharp
public bool|IResolvable GlueLineageSyncEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#glue_lineage_sync_enabled DatazoneConnection#glue_lineage_sync_enabled}.

---

### DatazoneConnectionPropsLakehouseProperties <a name="DatazoneConnectionPropsLakehouseProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehouseProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehouseProperties.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneConnectionPropsLakehouseProperties {
    bool|IResolvable GlueLineageSyncEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehouseProperties.property.glueLineageSyncEnabled">GlueLineageSyncEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Specifies whether Glue lineage sync is enabled for the lakehouse connection. |

---

##### `GlueLineageSyncEnabled`<sup>Optional</sup> <a name="GlueLineageSyncEnabled" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehouseProperties.property.glueLineageSyncEnabled"></a>

```csharp
public bool|IResolvable GlueLineageSyncEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Specifies whether Glue lineage sync is enabled for the lakehouse connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#glue_lineage_sync_enabled DatazoneConnection#glue_lineage_sync_enabled}

---

### DatazoneConnectionPropsMlflowProperties <a name="DatazoneConnectionPropsMlflowProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowProperties.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneConnectionPropsMlflowProperties {
    string TrackingServerArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowProperties.property.trackingServerArn">TrackingServerArn</a></code> | <code>string</code> | The ARN of the MLflow tracking server. |

---

##### `TrackingServerArn`<sup>Optional</sup> <a name="TrackingServerArn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowProperties.property.trackingServerArn"></a>

```csharp
public string TrackingServerArn { get; set; }
```

- *Type:* string

The ARN of the MLflow tracking server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#tracking_server_arn DatazoneConnection#tracking_server_arn}

---

### DatazoneConnectionPropsRedshiftProperties <a name="DatazoneConnectionPropsRedshiftProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftProperties.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneConnectionPropsRedshiftProperties {
    DatazoneConnectionPropsRedshiftPropertiesCredentials Credentials = null,
    string DatabaseName = null,
    string Host = null,
    DatazoneConnectionPropsRedshiftPropertiesLineageSync LineageSync = null,
    double Port = null,
    DatazoneConnectionPropsRedshiftPropertiesStorage Storage = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftProperties.property.credentials">Credentials</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentials">DatazoneConnectionPropsRedshiftPropertiesCredentials</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#credentials DatazoneConnection#credentials}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftProperties.property.databaseName">DatabaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#database_name DatazoneConnection#database_name}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftProperties.property.host">Host</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#host DatazoneConnection#host}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftProperties.property.lineageSync">LineageSync</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSync">DatazoneConnectionPropsRedshiftPropertiesLineageSync</a></code> | Redshift Lineage Sync Configuration Input. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftProperties.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#port DatazoneConnection#port}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftProperties.property.storage">Storage</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorage">DatazoneConnectionPropsRedshiftPropertiesStorage</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#storage DatazoneConnection#storage}. |

---

##### `Credentials`<sup>Optional</sup> <a name="Credentials" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftProperties.property.credentials"></a>

```csharp
public DatazoneConnectionPropsRedshiftPropertiesCredentials Credentials { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentials">DatazoneConnectionPropsRedshiftPropertiesCredentials</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#credentials DatazoneConnection#credentials}.

---

##### `DatabaseName`<sup>Optional</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftProperties.property.databaseName"></a>

```csharp
public string DatabaseName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#database_name DatazoneConnection#database_name}.

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftProperties.property.host"></a>

```csharp
public string Host { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#host DatazoneConnection#host}.

---

##### `LineageSync`<sup>Optional</sup> <a name="LineageSync" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftProperties.property.lineageSync"></a>

```csharp
public DatazoneConnectionPropsRedshiftPropertiesLineageSync LineageSync { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSync">DatazoneConnectionPropsRedshiftPropertiesLineageSync</a>

Redshift Lineage Sync Configuration Input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#lineage_sync DatazoneConnection#lineage_sync}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftProperties.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#port DatazoneConnection#port}.

---

##### `Storage`<sup>Optional</sup> <a name="Storage" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftProperties.property.storage"></a>

```csharp
public DatazoneConnectionPropsRedshiftPropertiesStorage Storage { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorage">DatazoneConnectionPropsRedshiftPropertiesStorage</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#storage DatazoneConnection#storage}.

---

### DatazoneConnectionPropsRedshiftPropertiesCredentials <a name="DatazoneConnectionPropsRedshiftPropertiesCredentials" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentials.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneConnectionPropsRedshiftPropertiesCredentials {
    string SecretArn = null,
    DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword UsernamePassword = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentials.property.secretArn">SecretArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#secret_arn DatazoneConnection#secret_arn}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentials.property.usernamePassword">UsernamePassword</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword">DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword</a></code> | The username and password to be used for authentication. |

---

##### `SecretArn`<sup>Optional</sup> <a name="SecretArn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentials.property.secretArn"></a>

```csharp
public string SecretArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#secret_arn DatazoneConnection#secret_arn}.

---

##### `UsernamePassword`<sup>Optional</sup> <a name="UsernamePassword" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentials.property.usernamePassword"></a>

```csharp
public DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword UsernamePassword { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword">DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword</a>

The username and password to be used for authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#username_password DatazoneConnection#username_password}

---

### DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword <a name="DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword {
    string Password = null,
    string Username = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword.property.password">Password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#password DatazoneConnection#password}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword.property.username">Username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#username DatazoneConnection#username}. |

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#password DatazoneConnection#password}.

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#username DatazoneConnection#username}.

---

### DatazoneConnectionPropsRedshiftPropertiesLineageSync <a name="DatazoneConnectionPropsRedshiftPropertiesLineageSync" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSync"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSync.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneConnectionPropsRedshiftPropertiesLineageSync {
    bool|IResolvable Enabled = null,
    DatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule Schedule = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSync.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#enabled DatazoneConnection#enabled}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSync.property.schedule">Schedule</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule">DatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule</a></code> | Lineage Sync Schedule. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSync.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#enabled DatazoneConnection#enabled}.

---

##### `Schedule`<sup>Optional</sup> <a name="Schedule" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSync.property.schedule"></a>

```csharp
public DatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule Schedule { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule">DatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule</a>

Lineage Sync Schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#schedule DatazoneConnection#schedule}

---

### DatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule <a name="DatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule {
    string Schedule = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule.property.schedule">Schedule</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#schedule DatazoneConnection#schedule}. |

---

##### `Schedule`<sup>Optional</sup> <a name="Schedule" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule.property.schedule"></a>

```csharp
public string Schedule { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#schedule DatazoneConnection#schedule}.

---

### DatazoneConnectionPropsRedshiftPropertiesStorage <a name="DatazoneConnectionPropsRedshiftPropertiesStorage" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorage.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneConnectionPropsRedshiftPropertiesStorage {
    string ClusterName = null,
    string WorkgroupName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorage.property.clusterName">ClusterName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#cluster_name DatazoneConnection#cluster_name}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorage.property.workgroupName">WorkgroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#workgroup_name DatazoneConnection#workgroup_name}. |

---

##### `ClusterName`<sup>Optional</sup> <a name="ClusterName" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorage.property.clusterName"></a>

```csharp
public string ClusterName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#cluster_name DatazoneConnection#cluster_name}.

---

##### `WorkgroupName`<sup>Optional</sup> <a name="WorkgroupName" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorage.property.workgroupName"></a>

```csharp
public string WorkgroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#workgroup_name DatazoneConnection#workgroup_name}.

---

### DatazoneConnectionPropsS3Properties <a name="DatazoneConnectionPropsS3Properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3Properties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3Properties.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneConnectionPropsS3Properties {
    bool|IResolvable RegisterS3AccessGrantLocation = null,
    string S3AccessGrantLocationId = null,
    string S3Uri = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3Properties.property.registerS3AccessGrantLocation">RegisterS3AccessGrantLocation</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Specifies whether to register the S3 Access Grant location. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3Properties.property.s3AccessGrantLocationId">S3AccessGrantLocationId</a></code> | <code>string</code> | The Amazon S3 Access Grant location ID that's part of the Amazon S3 properties of a connection. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3Properties.property.s3Uri">S3Uri</a></code> | <code>string</code> | The Amazon S3 URI that's part of the Amazon S3 properties of a connection. |

---

##### `RegisterS3AccessGrantLocation`<sup>Optional</sup> <a name="RegisterS3AccessGrantLocation" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3Properties.property.registerS3AccessGrantLocation"></a>

```csharp
public bool|IResolvable RegisterS3AccessGrantLocation { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Specifies whether to register the S3 Access Grant location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#register_s3_access_grant_location DatazoneConnection#register_s3_access_grant_location}

---

##### `S3AccessGrantLocationId`<sup>Optional</sup> <a name="S3AccessGrantLocationId" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3Properties.property.s3AccessGrantLocationId"></a>

```csharp
public string S3AccessGrantLocationId { get; set; }
```

- *Type:* string

The Amazon S3 Access Grant location ID that's part of the Amazon S3 properties of a connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#s3_access_grant_location_id DatazoneConnection#s3_access_grant_location_id}

---

##### `S3Uri`<sup>Optional</sup> <a name="S3Uri" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3Properties.property.s3Uri"></a>

```csharp
public string S3Uri { get; set; }
```

- *Type:* string

The Amazon S3 URI that's part of the Amazon S3 properties of a connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#s3_uri DatazoneConnection#s3_uri}

---

### DatazoneConnectionPropsSparkEmrProperties <a name="DatazoneConnectionPropsSparkEmrProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrProperties.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneConnectionPropsSparkEmrProperties {
    string ComputeArn = null,
    string InstanceProfileArn = null,
    string JavaVirtualEnv = null,
    string LogUri = null,
    string ManagedEndpointArn = null,
    string PythonVirtualEnv = null,
    string RuntimeRole = null,
    string TrustedCertificatesS3Uri = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrProperties.property.computeArn">ComputeArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#compute_arn DatazoneConnection#compute_arn}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrProperties.property.instanceProfileArn">InstanceProfileArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#instance_profile_arn DatazoneConnection#instance_profile_arn}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrProperties.property.javaVirtualEnv">JavaVirtualEnv</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#java_virtual_env DatazoneConnection#java_virtual_env}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrProperties.property.logUri">LogUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#log_uri DatazoneConnection#log_uri}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrProperties.property.managedEndpointArn">ManagedEndpointArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#managed_endpoint_arn DatazoneConnection#managed_endpoint_arn}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrProperties.property.pythonVirtualEnv">PythonVirtualEnv</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#python_virtual_env DatazoneConnection#python_virtual_env}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrProperties.property.runtimeRole">RuntimeRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#runtime_role DatazoneConnection#runtime_role}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrProperties.property.trustedCertificatesS3Uri">TrustedCertificatesS3Uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#trusted_certificates_s3_uri DatazoneConnection#trusted_certificates_s3_uri}. |

---

##### `ComputeArn`<sup>Optional</sup> <a name="ComputeArn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrProperties.property.computeArn"></a>

```csharp
public string ComputeArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#compute_arn DatazoneConnection#compute_arn}.

---

##### `InstanceProfileArn`<sup>Optional</sup> <a name="InstanceProfileArn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrProperties.property.instanceProfileArn"></a>

```csharp
public string InstanceProfileArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#instance_profile_arn DatazoneConnection#instance_profile_arn}.

---

##### `JavaVirtualEnv`<sup>Optional</sup> <a name="JavaVirtualEnv" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrProperties.property.javaVirtualEnv"></a>

```csharp
public string JavaVirtualEnv { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#java_virtual_env DatazoneConnection#java_virtual_env}.

---

##### `LogUri`<sup>Optional</sup> <a name="LogUri" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrProperties.property.logUri"></a>

```csharp
public string LogUri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#log_uri DatazoneConnection#log_uri}.

---

##### `ManagedEndpointArn`<sup>Optional</sup> <a name="ManagedEndpointArn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrProperties.property.managedEndpointArn"></a>

```csharp
public string ManagedEndpointArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#managed_endpoint_arn DatazoneConnection#managed_endpoint_arn}.

---

##### `PythonVirtualEnv`<sup>Optional</sup> <a name="PythonVirtualEnv" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrProperties.property.pythonVirtualEnv"></a>

```csharp
public string PythonVirtualEnv { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#python_virtual_env DatazoneConnection#python_virtual_env}.

---

##### `RuntimeRole`<sup>Optional</sup> <a name="RuntimeRole" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrProperties.property.runtimeRole"></a>

```csharp
public string RuntimeRole { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#runtime_role DatazoneConnection#runtime_role}.

---

##### `TrustedCertificatesS3Uri`<sup>Optional</sup> <a name="TrustedCertificatesS3Uri" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrProperties.property.trustedCertificatesS3Uri"></a>

```csharp
public string TrustedCertificatesS3Uri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#trusted_certificates_s3_uri DatazoneConnection#trusted_certificates_s3_uri}.

---

### DatazoneConnectionPropsSparkGlueProperties <a name="DatazoneConnectionPropsSparkGlueProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGlueProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGlueProperties.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneConnectionPropsSparkGlueProperties {
    DatazoneConnectionPropsSparkGluePropertiesAdditionalArgs AdditionalArgs = null,
    string GlueConnectionName = null,
    string GlueVersion = null,
    double IdleTimeout = null,
    string JavaVirtualEnv = null,
    double NumberOfWorkers = null,
    string PythonVirtualEnv = null,
    string WorkerType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGlueProperties.property.additionalArgs">AdditionalArgs</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgs">DatazoneConnectionPropsSparkGluePropertiesAdditionalArgs</a></code> | Spark Glue Args. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGlueProperties.property.glueConnectionName">GlueConnectionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#glue_connection_name DatazoneConnection#glue_connection_name}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGlueProperties.property.glueVersion">GlueVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#glue_version DatazoneConnection#glue_version}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGlueProperties.property.idleTimeout">IdleTimeout</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#idle_timeout DatazoneConnection#idle_timeout}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGlueProperties.property.javaVirtualEnv">JavaVirtualEnv</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#java_virtual_env DatazoneConnection#java_virtual_env}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGlueProperties.property.numberOfWorkers">NumberOfWorkers</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#number_of_workers DatazoneConnection#number_of_workers}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGlueProperties.property.pythonVirtualEnv">PythonVirtualEnv</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#python_virtual_env DatazoneConnection#python_virtual_env}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGlueProperties.property.workerType">WorkerType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#worker_type DatazoneConnection#worker_type}. |

---

##### `AdditionalArgs`<sup>Optional</sup> <a name="AdditionalArgs" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGlueProperties.property.additionalArgs"></a>

```csharp
public DatazoneConnectionPropsSparkGluePropertiesAdditionalArgs AdditionalArgs { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgs">DatazoneConnectionPropsSparkGluePropertiesAdditionalArgs</a>

Spark Glue Args.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#additional_args DatazoneConnection#additional_args}

---

##### `GlueConnectionName`<sup>Optional</sup> <a name="GlueConnectionName" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGlueProperties.property.glueConnectionName"></a>

```csharp
public string GlueConnectionName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#glue_connection_name DatazoneConnection#glue_connection_name}.

---

##### `GlueVersion`<sup>Optional</sup> <a name="GlueVersion" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGlueProperties.property.glueVersion"></a>

```csharp
public string GlueVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#glue_version DatazoneConnection#glue_version}.

---

##### `IdleTimeout`<sup>Optional</sup> <a name="IdleTimeout" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGlueProperties.property.idleTimeout"></a>

```csharp
public double IdleTimeout { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#idle_timeout DatazoneConnection#idle_timeout}.

---

##### `JavaVirtualEnv`<sup>Optional</sup> <a name="JavaVirtualEnv" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGlueProperties.property.javaVirtualEnv"></a>

```csharp
public string JavaVirtualEnv { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#java_virtual_env DatazoneConnection#java_virtual_env}.

---

##### `NumberOfWorkers`<sup>Optional</sup> <a name="NumberOfWorkers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGlueProperties.property.numberOfWorkers"></a>

```csharp
public double NumberOfWorkers { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#number_of_workers DatazoneConnection#number_of_workers}.

---

##### `PythonVirtualEnv`<sup>Optional</sup> <a name="PythonVirtualEnv" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGlueProperties.property.pythonVirtualEnv"></a>

```csharp
public string PythonVirtualEnv { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#python_virtual_env DatazoneConnection#python_virtual_env}.

---

##### `WorkerType`<sup>Optional</sup> <a name="WorkerType" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGlueProperties.property.workerType"></a>

```csharp
public string WorkerType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#worker_type DatazoneConnection#worker_type}.

---

### DatazoneConnectionPropsSparkGluePropertiesAdditionalArgs <a name="DatazoneConnectionPropsSparkGluePropertiesAdditionalArgs" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneConnectionPropsSparkGluePropertiesAdditionalArgs {
    string Connection = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgs.property.connection">Connection</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#connection DatazoneConnection#connection}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgs.property.connection"></a>

```csharp
public string Connection { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#connection DatazoneConnection#connection}.

---

### DatazoneConnectionPropsWorkflowsMwaaProperties <a name="DatazoneConnectionPropsWorkflowsMwaaProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaProperties.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneConnectionPropsWorkflowsMwaaProperties {
    string MwaaEnvironmentName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaProperties.property.mwaaEnvironmentName">MwaaEnvironmentName</a></code> | <code>string</code> | The name of the MWAA environment. |

---

##### `MwaaEnvironmentName`<sup>Optional</sup> <a name="MwaaEnvironmentName" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaProperties.property.mwaaEnvironmentName"></a>

```csharp
public string MwaaEnvironmentName { get; set; }
```

- *Type:* string

The name of the MWAA environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_connection#mwaa_environment_name DatazoneConnection#mwaa_environment_name}

---

## Classes <a name="Classes" id="Classes"></a>

### DatazoneConnectionAwsLocationOutputReference <a name="DatazoneConnectionAwsLocationOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneConnectionAwsLocationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.resetAccessRole">ResetAccessRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.resetAwsAccountId">ResetAwsAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.resetAwsRegion">ResetAwsRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.resetIamConnectionId">ResetIamConnectionId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessRole` <a name="ResetAccessRole" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.resetAccessRole"></a>

```csharp
private void ResetAccessRole()
```

##### `ResetAwsAccountId` <a name="ResetAwsAccountId" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.resetAwsAccountId"></a>

```csharp
private void ResetAwsAccountId()
```

##### `ResetAwsRegion` <a name="ResetAwsRegion" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.resetAwsRegion"></a>

```csharp
private void ResetAwsRegion()
```

##### `ResetIamConnectionId` <a name="ResetIamConnectionId" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.resetIamConnectionId"></a>

```csharp
private void ResetIamConnectionId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.property.accessRoleInput">AccessRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.property.awsAccountIdInput">AwsAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.property.awsRegionInput">AwsRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.property.iamConnectionIdInput">IamConnectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.property.accessRole">AccessRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.property.awsAccountId">AwsAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.property.awsRegion">AwsRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.property.iamConnectionId">IamConnectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocation">DatazoneConnectionAwsLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessRoleInput`<sup>Optional</sup> <a name="AccessRoleInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.property.accessRoleInput"></a>

```csharp
public string AccessRoleInput { get; }
```

- *Type:* string

---

##### `AwsAccountIdInput`<sup>Optional</sup> <a name="AwsAccountIdInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.property.awsAccountIdInput"></a>

```csharp
public string AwsAccountIdInput { get; }
```

- *Type:* string

---

##### `AwsRegionInput`<sup>Optional</sup> <a name="AwsRegionInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.property.awsRegionInput"></a>

```csharp
public string AwsRegionInput { get; }
```

- *Type:* string

---

##### `IamConnectionIdInput`<sup>Optional</sup> <a name="IamConnectionIdInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.property.iamConnectionIdInput"></a>

```csharp
public string IamConnectionIdInput { get; }
```

- *Type:* string

---

##### `AccessRole`<sup>Required</sup> <a name="AccessRole" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.property.accessRole"></a>

```csharp
public string AccessRole { get; }
```

- *Type:* string

---

##### `AwsAccountId`<sup>Required</sup> <a name="AwsAccountId" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.property.awsAccountId"></a>

```csharp
public string AwsAccountId { get; }
```

- *Type:* string

---

##### `AwsRegion`<sup>Required</sup> <a name="AwsRegion" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.property.awsRegion"></a>

```csharp
public string AwsRegion { get; }
```

- *Type:* string

---

##### `IamConnectionId`<sup>Required</sup> <a name="IamConnectionId" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.property.iamConnectionId"></a>

```csharp
public string IamConnectionId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatazoneConnectionAwsLocation InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocation">DatazoneConnectionAwsLocation</a>

---


### DatazoneConnectionConfigurationsList <a name="DatazoneConnectionConfigurationsList" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneConnectionConfigurationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList.get"></a>

```csharp
private DatazoneConnectionConfigurationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurations">DatazoneConnectionConfigurations</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList.property.internalValue"></a>

```csharp
public IResolvable|DatazoneConnectionConfigurations[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurations">DatazoneConnectionConfigurations</a>[]

---


### DatazoneConnectionConfigurationsOutputReference <a name="DatazoneConnectionConfigurationsOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneConnectionConfigurationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.resetClassification">ResetClassification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.resetProperties">ResetProperties</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClassification` <a name="ResetClassification" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.resetClassification"></a>

```csharp
private void ResetClassification()
```

##### `ResetProperties` <a name="ResetProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.resetProperties"></a>

```csharp
private void ResetProperties()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.property.classificationInput">ClassificationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.property.propertiesInput">PropertiesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.property.classification">Classification</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.property.properties">Properties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurations">DatazoneConnectionConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClassificationInput`<sup>Optional</sup> <a name="ClassificationInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.property.classificationInput"></a>

```csharp
public string ClassificationInput { get; }
```

- *Type:* string

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.property.propertiesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> PropertiesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Classification`<sup>Required</sup> <a name="Classification" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.property.classification"></a>

```csharp
public string Classification { get; }
```

- *Type:* string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.property.properties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Properties { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatazoneConnectionConfigurations InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurations">DatazoneConnectionConfigurations</a>

---


### DatazoneConnectionPropsAmazonQPropertiesOutputReference <a name="DatazoneConnectionPropsAmazonQPropertiesOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneConnectionPropsAmazonQPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.resetAuthMode">ResetAuthMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.resetIsEnabled">ResetIsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.resetProfileArn">ResetProfileArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthMode` <a name="ResetAuthMode" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.resetAuthMode"></a>

```csharp
private void ResetAuthMode()
```

##### `ResetIsEnabled` <a name="ResetIsEnabled" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.resetIsEnabled"></a>

```csharp
private void ResetIsEnabled()
```

##### `ResetProfileArn` <a name="ResetProfileArn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.resetProfileArn"></a>

```csharp
private void ResetProfileArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.property.authModeInput">AuthModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.property.isEnabledInput">IsEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.property.profileArnInput">ProfileArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.property.authMode">AuthMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.property.isEnabled">IsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.property.profileArn">ProfileArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQProperties">DatazoneConnectionPropsAmazonQProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthModeInput`<sup>Optional</sup> <a name="AuthModeInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.property.authModeInput"></a>

```csharp
public string AuthModeInput { get; }
```

- *Type:* string

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.property.isEnabledInput"></a>

```csharp
public bool|IResolvable IsEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ProfileArnInput`<sup>Optional</sup> <a name="ProfileArnInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.property.profileArnInput"></a>

```csharp
public string ProfileArnInput { get; }
```

- *Type:* string

---

##### `AuthMode`<sup>Required</sup> <a name="AuthMode" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.property.authMode"></a>

```csharp
public string AuthMode { get; }
```

- *Type:* string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.property.isEnabled"></a>

```csharp
public bool|IResolvable IsEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ProfileArn`<sup>Required</sup> <a name="ProfileArn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.property.profileArn"></a>

```csharp
public string ProfileArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatazoneConnectionPropsAmazonQProperties InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQProperties">DatazoneConnectionPropsAmazonQProperties</a>

---


### DatazoneConnectionPropsAthenaPropertiesOutputReference <a name="DatazoneConnectionPropsAthenaPropertiesOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneConnectionPropsAthenaPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.resetWorkgroupName">ResetWorkgroupName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkgroupName` <a name="ResetWorkgroupName" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.resetWorkgroupName"></a>

```csharp
private void ResetWorkgroupName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.property.workgroupNameInput">WorkgroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.property.workgroupName">WorkgroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaProperties">DatazoneConnectionPropsAthenaProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkgroupNameInput`<sup>Optional</sup> <a name="WorkgroupNameInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.property.workgroupNameInput"></a>

```csharp
public string WorkgroupNameInput { get; }
```

- *Type:* string

---

##### `WorkgroupName`<sup>Required</sup> <a name="WorkgroupName" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.property.workgroupName"></a>

```csharp
public string WorkgroupName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatazoneConnectionPropsAthenaProperties InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaProperties">DatazoneConnectionPropsAthenaProperties</a>

---


### DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference <a name="DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.resetUserName">ResetUserName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPassword` <a name="ResetPassword" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetUserName` <a name="ResetUserName" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.resetUserName"></a>

```csharp
private void ResetUserName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.userNameInput">UserNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.userName">UserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `UserNameInput`<sup>Optional</sup> <a name="UserNameInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.userNameInput"></a>

```csharp
public string UserNameInput { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.userName"></a>

```csharp
public string UserName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials</a>

---


### DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference <a name="DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.resetAuthorizationCode">ResetAuthorizationCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.resetRedirectUri">ResetRedirectUri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthorizationCode` <a name="ResetAuthorizationCode" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.resetAuthorizationCode"></a>

```csharp
private void ResetAuthorizationCode()
```

##### `ResetRedirectUri` <a name="ResetRedirectUri" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.resetRedirectUri"></a>

```csharp
private void ResetRedirectUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.authorizationCodeInput">AuthorizationCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.redirectUriInput">RedirectUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.authorizationCode">AuthorizationCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.redirectUri">RedirectUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthorizationCodeInput`<sup>Optional</sup> <a name="AuthorizationCodeInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.authorizationCodeInput"></a>

```csharp
public string AuthorizationCodeInput { get; }
```

- *Type:* string

---

##### `RedirectUriInput`<sup>Optional</sup> <a name="RedirectUriInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.redirectUriInput"></a>

```csharp
public string RedirectUriInput { get; }
```

- *Type:* string

---

##### `AuthorizationCode`<sup>Required</sup> <a name="AuthorizationCode" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.authorizationCode"></a>

```csharp
public string AuthorizationCode { get; }
```

- *Type:* string

---

##### `RedirectUri`<sup>Required</sup> <a name="RedirectUri" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.redirectUri"></a>

```csharp
public string RedirectUri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties</a>

---


### DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference <a name="DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.resetAwsManagedClientApplicationReference">ResetAwsManagedClientApplicationReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.resetUserManagedClientApplicationClientId">ResetUserManagedClientApplicationClientId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAwsManagedClientApplicationReference` <a name="ResetAwsManagedClientApplicationReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.resetAwsManagedClientApplicationReference"></a>

```csharp
private void ResetAwsManagedClientApplicationReference()
```

##### `ResetUserManagedClientApplicationClientId` <a name="ResetUserManagedClientApplicationClientId" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.resetUserManagedClientApplicationClientId"></a>

```csharp
private void ResetUserManagedClientApplicationClientId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.awsManagedClientApplicationReferenceInput">AwsManagedClientApplicationReferenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.userManagedClientApplicationClientIdInput">UserManagedClientApplicationClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.awsManagedClientApplicationReference">AwsManagedClientApplicationReference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.userManagedClientApplicationClientId">UserManagedClientApplicationClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AwsManagedClientApplicationReferenceInput`<sup>Optional</sup> <a name="AwsManagedClientApplicationReferenceInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.awsManagedClientApplicationReferenceInput"></a>

```csharp
public string AwsManagedClientApplicationReferenceInput { get; }
```

- *Type:* string

---

##### `UserManagedClientApplicationClientIdInput`<sup>Optional</sup> <a name="UserManagedClientApplicationClientIdInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.userManagedClientApplicationClientIdInput"></a>

```csharp
public string UserManagedClientApplicationClientIdInput { get; }
```

- *Type:* string

---

##### `AwsManagedClientApplicationReference`<sup>Required</sup> <a name="AwsManagedClientApplicationReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.awsManagedClientApplicationReference"></a>

```csharp
public string AwsManagedClientApplicationReference { get; }
```

- *Type:* string

---

##### `UserManagedClientApplicationClientId`<sup>Required</sup> <a name="UserManagedClientApplicationClientId" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.userManagedClientApplicationClientId"></a>

```csharp
public string UserManagedClientApplicationClientId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication</a>

---


### DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference <a name="DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.resetAccessToken">ResetAccessToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.resetJwtToken">ResetJwtToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.resetRefreshToken">ResetRefreshToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.resetUserManagedClientApplicationClientSecret">ResetUserManagedClientApplicationClientSecret</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessToken` <a name="ResetAccessToken" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.resetAccessToken"></a>

```csharp
private void ResetAccessToken()
```

##### `ResetJwtToken` <a name="ResetJwtToken" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.resetJwtToken"></a>

```csharp
private void ResetJwtToken()
```

##### `ResetRefreshToken` <a name="ResetRefreshToken" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.resetRefreshToken"></a>

```csharp
private void ResetRefreshToken()
```

##### `ResetUserManagedClientApplicationClientSecret` <a name="ResetUserManagedClientApplicationClientSecret" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.resetUserManagedClientApplicationClientSecret"></a>

```csharp
private void ResetUserManagedClientApplicationClientSecret()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.accessTokenInput">AccessTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.jwtTokenInput">JwtTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.refreshTokenInput">RefreshTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.userManagedClientApplicationClientSecretInput">UserManagedClientApplicationClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.accessToken">AccessToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.jwtToken">JwtToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.refreshToken">RefreshToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.userManagedClientApplicationClientSecret">UserManagedClientApplicationClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessTokenInput`<sup>Optional</sup> <a name="AccessTokenInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.accessTokenInput"></a>

```csharp
public string AccessTokenInput { get; }
```

- *Type:* string

---

##### `JwtTokenInput`<sup>Optional</sup> <a name="JwtTokenInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.jwtTokenInput"></a>

```csharp
public string JwtTokenInput { get; }
```

- *Type:* string

---

##### `RefreshTokenInput`<sup>Optional</sup> <a name="RefreshTokenInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.refreshTokenInput"></a>

```csharp
public string RefreshTokenInput { get; }
```

- *Type:* string

---

##### `UserManagedClientApplicationClientSecretInput`<sup>Optional</sup> <a name="UserManagedClientApplicationClientSecretInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.userManagedClientApplicationClientSecretInput"></a>

```csharp
public string UserManagedClientApplicationClientSecretInput { get; }
```

- *Type:* string

---

##### `AccessToken`<sup>Required</sup> <a name="AccessToken" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.accessToken"></a>

```csharp
public string AccessToken { get; }
```

- *Type:* string

---

##### `JwtToken`<sup>Required</sup> <a name="JwtToken" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.jwtToken"></a>

```csharp
public string JwtToken { get; }
```

- *Type:* string

---

##### `RefreshToken`<sup>Required</sup> <a name="RefreshToken" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.refreshToken"></a>

```csharp
public string RefreshToken { get; }
```

- *Type:* string

---

##### `UserManagedClientApplicationClientSecret`<sup>Required</sup> <a name="UserManagedClientApplicationClientSecret" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.userManagedClientApplicationClientSecret"></a>

```csharp
public string UserManagedClientApplicationClientSecret { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials</a>

---


### DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference <a name="DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.putAuthorizationCodeProperties">PutAuthorizationCodeProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.putOAuth2ClientApplication">PutOAuth2ClientApplication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.putOAuth2Credentials">PutOAuth2Credentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resetAuthorizationCodeProperties">ResetAuthorizationCodeProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resetOAuth2ClientApplication">ResetOAuth2ClientApplication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resetOAuth2Credentials">ResetOAuth2Credentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resetOAuth2GrantType">ResetOAuth2GrantType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resetTokenUrl">ResetTokenUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resetTokenUrlParametersMap">ResetTokenUrlParametersMap</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuthorizationCodeProperties` <a name="PutAuthorizationCodeProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.putAuthorizationCodeProperties"></a>

```csharp
private void PutAuthorizationCodeProperties(DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.putAuthorizationCodeProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties</a>

---

##### `PutOAuth2ClientApplication` <a name="PutOAuth2ClientApplication" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.putOAuth2ClientApplication"></a>

```csharp
private void PutOAuth2ClientApplication(DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.putOAuth2ClientApplication.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication</a>

---

##### `PutOAuth2Credentials` <a name="PutOAuth2Credentials" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.putOAuth2Credentials"></a>

```csharp
private void PutOAuth2Credentials(DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.putOAuth2Credentials.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials</a>

---

##### `ResetAuthorizationCodeProperties` <a name="ResetAuthorizationCodeProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resetAuthorizationCodeProperties"></a>

```csharp
private void ResetAuthorizationCodeProperties()
```

##### `ResetOAuth2ClientApplication` <a name="ResetOAuth2ClientApplication" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resetOAuth2ClientApplication"></a>

```csharp
private void ResetOAuth2ClientApplication()
```

##### `ResetOAuth2Credentials` <a name="ResetOAuth2Credentials" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resetOAuth2Credentials"></a>

```csharp
private void ResetOAuth2Credentials()
```

##### `ResetOAuth2GrantType` <a name="ResetOAuth2GrantType" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resetOAuth2GrantType"></a>

```csharp
private void ResetOAuth2GrantType()
```

##### `ResetTokenUrl` <a name="ResetTokenUrl" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resetTokenUrl"></a>

```csharp
private void ResetTokenUrl()
```

##### `ResetTokenUrlParametersMap` <a name="ResetTokenUrlParametersMap" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resetTokenUrlParametersMap"></a>

```csharp
private void ResetTokenUrlParametersMap()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.authorizationCodeProperties">AuthorizationCodeProperties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.oAuth2ClientApplication">OAuth2ClientApplication</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.oAuth2Credentials">OAuth2Credentials</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.authorizationCodePropertiesInput">AuthorizationCodePropertiesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.oAuth2ClientApplicationInput">OAuth2ClientApplicationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.oAuth2CredentialsInput">OAuth2CredentialsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.oAuth2GrantTypeInput">OAuth2GrantTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.tokenUrlInput">TokenUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.tokenUrlParametersMapInput">TokenUrlParametersMapInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.oAuth2GrantType">OAuth2GrantType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.tokenUrl">TokenUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.tokenUrlParametersMap">TokenUrlParametersMap</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthorizationCodeProperties`<sup>Required</sup> <a name="AuthorizationCodeProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.authorizationCodeProperties"></a>

```csharp
public DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference AuthorizationCodeProperties { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference</a>

---

##### `OAuth2ClientApplication`<sup>Required</sup> <a name="OAuth2ClientApplication" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.oAuth2ClientApplication"></a>

```csharp
public DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference OAuth2ClientApplication { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference</a>

---

##### `OAuth2Credentials`<sup>Required</sup> <a name="OAuth2Credentials" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.oAuth2Credentials"></a>

```csharp
public DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference OAuth2Credentials { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference</a>

---

##### `AuthorizationCodePropertiesInput`<sup>Optional</sup> <a name="AuthorizationCodePropertiesInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.authorizationCodePropertiesInput"></a>

```csharp
public IResolvable|DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties AuthorizationCodePropertiesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties</a>

---

##### `OAuth2ClientApplicationInput`<sup>Optional</sup> <a name="OAuth2ClientApplicationInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.oAuth2ClientApplicationInput"></a>

```csharp
public IResolvable|DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication OAuth2ClientApplicationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication</a>

---

##### `OAuth2CredentialsInput`<sup>Optional</sup> <a name="OAuth2CredentialsInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.oAuth2CredentialsInput"></a>

```csharp
public IResolvable|DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials OAuth2CredentialsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials</a>

---

##### `OAuth2GrantTypeInput`<sup>Optional</sup> <a name="OAuth2GrantTypeInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.oAuth2GrantTypeInput"></a>

```csharp
public string OAuth2GrantTypeInput { get; }
```

- *Type:* string

---

##### `TokenUrlInput`<sup>Optional</sup> <a name="TokenUrlInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.tokenUrlInput"></a>

```csharp
public string TokenUrlInput { get; }
```

- *Type:* string

---

##### `TokenUrlParametersMapInput`<sup>Optional</sup> <a name="TokenUrlParametersMapInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.tokenUrlParametersMapInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TokenUrlParametersMapInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `OAuth2GrantType`<sup>Required</sup> <a name="OAuth2GrantType" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.oAuth2GrantType"></a>

```csharp
public string OAuth2GrantType { get; }
```

- *Type:* string

---

##### `TokenUrl`<sup>Required</sup> <a name="TokenUrl" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.tokenUrl"></a>

```csharp
public string TokenUrl { get; }
```

- *Type:* string

---

##### `TokenUrlParametersMap`<sup>Required</sup> <a name="TokenUrlParametersMap" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.tokenUrlParametersMap"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TokenUrlParametersMap { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties</a>

---


### DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference <a name="DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.putBasicAuthenticationCredentials">PutBasicAuthenticationCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.putOAuth2Properties">PutOAuth2Properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.resetAuthenticationType">ResetAuthenticationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.resetBasicAuthenticationCredentials">ResetBasicAuthenticationCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.resetCustomAuthenticationCredentials">ResetCustomAuthenticationCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.resetOAuth2Properties">ResetOAuth2Properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.resetSecretArn">ResetSecretArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBasicAuthenticationCredentials` <a name="PutBasicAuthenticationCredentials" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.putBasicAuthenticationCredentials"></a>

```csharp
private void PutBasicAuthenticationCredentials(DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.putBasicAuthenticationCredentials.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials</a>

---

##### `PutOAuth2Properties` <a name="PutOAuth2Properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.putOAuth2Properties"></a>

```csharp
private void PutOAuth2Properties(DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.putOAuth2Properties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties</a>

---

##### `ResetAuthenticationType` <a name="ResetAuthenticationType" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.resetAuthenticationType"></a>

```csharp
private void ResetAuthenticationType()
```

##### `ResetBasicAuthenticationCredentials` <a name="ResetBasicAuthenticationCredentials" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.resetBasicAuthenticationCredentials"></a>

```csharp
private void ResetBasicAuthenticationCredentials()
```

##### `ResetCustomAuthenticationCredentials` <a name="ResetCustomAuthenticationCredentials" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.resetCustomAuthenticationCredentials"></a>

```csharp
private void ResetCustomAuthenticationCredentials()
```

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.resetKmsKeyArn"></a>

```csharp
private void ResetKmsKeyArn()
```

##### `ResetOAuth2Properties` <a name="ResetOAuth2Properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.resetOAuth2Properties"></a>

```csharp
private void ResetOAuth2Properties()
```

##### `ResetSecretArn` <a name="ResetSecretArn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.resetSecretArn"></a>

```csharp
private void ResetSecretArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.basicAuthenticationCredentials">BasicAuthenticationCredentials</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.oAuth2Properties">OAuth2Properties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.authenticationTypeInput">AuthenticationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.basicAuthenticationCredentialsInput">BasicAuthenticationCredentialsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.customAuthenticationCredentialsInput">CustomAuthenticationCredentialsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.oAuth2PropertiesInput">OAuth2PropertiesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.secretArnInput">SecretArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.authenticationType">AuthenticationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.customAuthenticationCredentials">CustomAuthenticationCredentials</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.secretArn">SecretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BasicAuthenticationCredentials`<sup>Required</sup> <a name="BasicAuthenticationCredentials" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.basicAuthenticationCredentials"></a>

```csharp
public DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference BasicAuthenticationCredentials { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference</a>

---

##### `OAuth2Properties`<sup>Required</sup> <a name="OAuth2Properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.oAuth2Properties"></a>

```csharp
public DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference OAuth2Properties { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference</a>

---

##### `AuthenticationTypeInput`<sup>Optional</sup> <a name="AuthenticationTypeInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.authenticationTypeInput"></a>

```csharp
public string AuthenticationTypeInput { get; }
```

- *Type:* string

---

##### `BasicAuthenticationCredentialsInput`<sup>Optional</sup> <a name="BasicAuthenticationCredentialsInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.basicAuthenticationCredentialsInput"></a>

```csharp
public IResolvable|DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials BasicAuthenticationCredentialsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials</a>

---

##### `CustomAuthenticationCredentialsInput`<sup>Optional</sup> <a name="CustomAuthenticationCredentialsInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.customAuthenticationCredentialsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CustomAuthenticationCredentialsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.kmsKeyArnInput"></a>

```csharp
public string KmsKeyArnInput { get; }
```

- *Type:* string

---

##### `OAuth2PropertiesInput`<sup>Optional</sup> <a name="OAuth2PropertiesInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.oAuth2PropertiesInput"></a>

```csharp
public IResolvable|DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties OAuth2PropertiesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties</a>

---

##### `SecretArnInput`<sup>Optional</sup> <a name="SecretArnInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.secretArnInput"></a>

```csharp
public string SecretArnInput { get; }
```

- *Type:* string

---

##### `AuthenticationType`<sup>Required</sup> <a name="AuthenticationType" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.authenticationType"></a>

```csharp
public string AuthenticationType { get; }
```

- *Type:* string

---

##### `CustomAuthenticationCredentials`<sup>Required</sup> <a name="CustomAuthenticationCredentials" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.customAuthenticationCredentials"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CustomAuthenticationCredentials { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; }
```

- *Type:* string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.secretArn"></a>

```csharp
public string SecretArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration</a>

---


### DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference <a name="DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.putAuthenticationConfiguration">PutAuthenticationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.putPhysicalConnectionRequirements">PutPhysicalConnectionRequirements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resetAthenaProperties">ResetAthenaProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resetAuthenticationConfiguration">ResetAuthenticationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resetConnectionProperties">ResetConnectionProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resetConnectionType">ResetConnectionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resetMatchCriteria">ResetMatchCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resetPhysicalConnectionRequirements">ResetPhysicalConnectionRequirements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resetPythonProperties">ResetPythonProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resetSparkProperties">ResetSparkProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resetValidateCredentials">ResetValidateCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resetValidateForComputeEnvironments">ResetValidateForComputeEnvironments</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuthenticationConfiguration` <a name="PutAuthenticationConfiguration" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.putAuthenticationConfiguration"></a>

```csharp
private void PutAuthenticationConfiguration(DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.putAuthenticationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration</a>

---

##### `PutPhysicalConnectionRequirements` <a name="PutPhysicalConnectionRequirements" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.putPhysicalConnectionRequirements"></a>

```csharp
private void PutPhysicalConnectionRequirements(DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.putPhysicalConnectionRequirements.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements">DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements</a>

---

##### `ResetAthenaProperties` <a name="ResetAthenaProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resetAthenaProperties"></a>

```csharp
private void ResetAthenaProperties()
```

##### `ResetAuthenticationConfiguration` <a name="ResetAuthenticationConfiguration" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resetAuthenticationConfiguration"></a>

```csharp
private void ResetAuthenticationConfiguration()
```

##### `ResetConnectionProperties` <a name="ResetConnectionProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resetConnectionProperties"></a>

```csharp
private void ResetConnectionProperties()
```

##### `ResetConnectionType` <a name="ResetConnectionType" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resetConnectionType"></a>

```csharp
private void ResetConnectionType()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetMatchCriteria` <a name="ResetMatchCriteria" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resetMatchCriteria"></a>

```csharp
private void ResetMatchCriteria()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetPhysicalConnectionRequirements` <a name="ResetPhysicalConnectionRequirements" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resetPhysicalConnectionRequirements"></a>

```csharp
private void ResetPhysicalConnectionRequirements()
```

##### `ResetPythonProperties` <a name="ResetPythonProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resetPythonProperties"></a>

```csharp
private void ResetPythonProperties()
```

##### `ResetSparkProperties` <a name="ResetSparkProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resetSparkProperties"></a>

```csharp
private void ResetSparkProperties()
```

##### `ResetValidateCredentials` <a name="ResetValidateCredentials" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resetValidateCredentials"></a>

```csharp
private void ResetValidateCredentials()
```

##### `ResetValidateForComputeEnvironments` <a name="ResetValidateForComputeEnvironments" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resetValidateForComputeEnvironments"></a>

```csharp
private void ResetValidateForComputeEnvironments()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.authenticationConfiguration">AuthenticationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.physicalConnectionRequirements">PhysicalConnectionRequirements</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference">DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.athenaPropertiesInput">AthenaPropertiesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.authenticationConfigurationInput">AuthenticationConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.connectionPropertiesInput">ConnectionPropertiesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.connectionTypeInput">ConnectionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.matchCriteriaInput">MatchCriteriaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.physicalConnectionRequirementsInput">PhysicalConnectionRequirementsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements">DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.pythonPropertiesInput">PythonPropertiesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.sparkPropertiesInput">SparkPropertiesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.validateCredentialsInput">ValidateCredentialsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.validateForComputeEnvironmentsInput">ValidateForComputeEnvironmentsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.athenaProperties">AthenaProperties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.connectionProperties">ConnectionProperties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.connectionType">ConnectionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.matchCriteria">MatchCriteria</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.pythonProperties">PythonProperties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.sparkProperties">SparkProperties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.validateCredentials">ValidateCredentials</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.validateForComputeEnvironments">ValidateForComputeEnvironments</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput">DatazoneConnectionPropsGluePropertiesGlueConnectionInput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthenticationConfiguration`<sup>Required</sup> <a name="AuthenticationConfiguration" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.authenticationConfiguration"></a>

```csharp
public DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference AuthenticationConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference</a>

---

##### `PhysicalConnectionRequirements`<sup>Required</sup> <a name="PhysicalConnectionRequirements" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.physicalConnectionRequirements"></a>

```csharp
public DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference PhysicalConnectionRequirements { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference">DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference</a>

---

##### `AthenaPropertiesInput`<sup>Optional</sup> <a name="AthenaPropertiesInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.athenaPropertiesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AthenaPropertiesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AuthenticationConfigurationInput`<sup>Optional</sup> <a name="AuthenticationConfigurationInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.authenticationConfigurationInput"></a>

```csharp
public IResolvable|DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration AuthenticationConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration</a>

---

##### `ConnectionPropertiesInput`<sup>Optional</sup> <a name="ConnectionPropertiesInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.connectionPropertiesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ConnectionPropertiesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ConnectionTypeInput`<sup>Optional</sup> <a name="ConnectionTypeInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.connectionTypeInput"></a>

```csharp
public string ConnectionTypeInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `MatchCriteriaInput`<sup>Optional</sup> <a name="MatchCriteriaInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.matchCriteriaInput"></a>

```csharp
public string MatchCriteriaInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PhysicalConnectionRequirementsInput`<sup>Optional</sup> <a name="PhysicalConnectionRequirementsInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.physicalConnectionRequirementsInput"></a>

```csharp
public IResolvable|DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements PhysicalConnectionRequirementsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements">DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements</a>

---

##### `PythonPropertiesInput`<sup>Optional</sup> <a name="PythonPropertiesInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.pythonPropertiesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> PythonPropertiesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `SparkPropertiesInput`<sup>Optional</sup> <a name="SparkPropertiesInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.sparkPropertiesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SparkPropertiesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ValidateCredentialsInput`<sup>Optional</sup> <a name="ValidateCredentialsInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.validateCredentialsInput"></a>

```csharp
public bool|IResolvable ValidateCredentialsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ValidateForComputeEnvironmentsInput`<sup>Optional</sup> <a name="ValidateForComputeEnvironmentsInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.validateForComputeEnvironmentsInput"></a>

```csharp
public string[] ValidateForComputeEnvironmentsInput { get; }
```

- *Type:* string[]

---

##### `AthenaProperties`<sup>Required</sup> <a name="AthenaProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.athenaProperties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AthenaProperties { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ConnectionProperties`<sup>Required</sup> <a name="ConnectionProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.connectionProperties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ConnectionProperties { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ConnectionType`<sup>Required</sup> <a name="ConnectionType" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.connectionType"></a>

```csharp
public string ConnectionType { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `MatchCriteria`<sup>Required</sup> <a name="MatchCriteria" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.matchCriteria"></a>

```csharp
public string MatchCriteria { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PythonProperties`<sup>Required</sup> <a name="PythonProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.pythonProperties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> PythonProperties { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `SparkProperties`<sup>Required</sup> <a name="SparkProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.sparkProperties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SparkProperties { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ValidateCredentials`<sup>Required</sup> <a name="ValidateCredentials" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.validateCredentials"></a>

```csharp
public bool|IResolvable ValidateCredentials { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ValidateForComputeEnvironments`<sup>Required</sup> <a name="ValidateForComputeEnvironments" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.validateForComputeEnvironments"></a>

```csharp
public string[] ValidateForComputeEnvironments { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatazoneConnectionPropsGluePropertiesGlueConnectionInput InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput">DatazoneConnectionPropsGluePropertiesGlueConnectionInput</a>

---


### DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference <a name="DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.resetAvailabilityZone">ResetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.resetSecurityGroupIdList">ResetSecurityGroupIdList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.resetSubnetId">ResetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.resetSubnetIdList">ResetSubnetIdList</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAvailabilityZone` <a name="ResetAvailabilityZone" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.resetAvailabilityZone"></a>

```csharp
private void ResetAvailabilityZone()
```

##### `ResetSecurityGroupIdList` <a name="ResetSecurityGroupIdList" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.resetSecurityGroupIdList"></a>

```csharp
private void ResetSecurityGroupIdList()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.resetSubnetId"></a>

```csharp
private void ResetSubnetId()
```

##### `ResetSubnetIdList` <a name="ResetSubnetIdList" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.resetSubnetIdList"></a>

```csharp
private void ResetSubnetIdList()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.availabilityZoneInput">AvailabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.securityGroupIdListInput">SecurityGroupIdListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.subnetIdListInput">SubnetIdListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.securityGroupIdList">SecurityGroupIdList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.subnetIdList">SubnetIdList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements">DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailabilityZoneInput`<sup>Optional</sup> <a name="AvailabilityZoneInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.availabilityZoneInput"></a>

```csharp
public string AvailabilityZoneInput { get; }
```

- *Type:* string

---

##### `SecurityGroupIdListInput`<sup>Optional</sup> <a name="SecurityGroupIdListInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.securityGroupIdListInput"></a>

```csharp
public string[] SecurityGroupIdListInput { get; }
```

- *Type:* string[]

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `SubnetIdListInput`<sup>Optional</sup> <a name="SubnetIdListInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.subnetIdListInput"></a>

```csharp
public string[] SubnetIdListInput { get; }
```

- *Type:* string[]

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; }
```

- *Type:* string

---

##### `SecurityGroupIdList`<sup>Required</sup> <a name="SecurityGroupIdList" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.securityGroupIdList"></a>

```csharp
public string[] SecurityGroupIdList { get; }
```

- *Type:* string[]

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `SubnetIdList`<sup>Required</sup> <a name="SubnetIdList" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.subnetIdList"></a>

```csharp
public string[] SubnetIdList { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements">DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements</a>

---


### DatazoneConnectionPropsGluePropertiesOutputReference <a name="DatazoneConnectionPropsGluePropertiesOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneConnectionPropsGluePropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.putGlueConnectionInput">PutGlueConnectionInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.resetGlueConnectionInput">ResetGlueConnectionInput</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGlueConnectionInput` <a name="PutGlueConnectionInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.putGlueConnectionInput"></a>

```csharp
private void PutGlueConnectionInput(DatazoneConnectionPropsGluePropertiesGlueConnectionInput Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.putGlueConnectionInput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput">DatazoneConnectionPropsGluePropertiesGlueConnectionInput</a>

---

##### `ResetGlueConnectionInput` <a name="ResetGlueConnectionInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.resetGlueConnectionInput"></a>

```csharp
private void ResetGlueConnectionInput()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.property.glueConnectionInput">GlueConnectionInput</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference">DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.property.glueConnectionInputInput">GlueConnectionInputInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput">DatazoneConnectionPropsGluePropertiesGlueConnectionInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGlueProperties">DatazoneConnectionPropsGlueProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GlueConnectionInput`<sup>Required</sup> <a name="GlueConnectionInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.property.glueConnectionInput"></a>

```csharp
public DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference GlueConnectionInput { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference">DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference</a>

---

##### `GlueConnectionInputInput`<sup>Optional</sup> <a name="GlueConnectionInputInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.property.glueConnectionInputInput"></a>

```csharp
public IResolvable|DatazoneConnectionPropsGluePropertiesGlueConnectionInput GlueConnectionInputInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput">DatazoneConnectionPropsGluePropertiesGlueConnectionInput</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatazoneConnectionPropsGlueProperties InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGlueProperties">DatazoneConnectionPropsGlueProperties</a>

---


### DatazoneConnectionPropsHyperPodPropertiesOutputReference <a name="DatazoneConnectionPropsHyperPodPropertiesOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneConnectionPropsHyperPodPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.resetClusterName">ResetClusterName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClusterName` <a name="ResetClusterName" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.resetClusterName"></a>

```csharp
private void ResetClusterName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.property.clusterNameInput">ClusterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.property.clusterName">ClusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodProperties">DatazoneConnectionPropsHyperPodProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClusterNameInput`<sup>Optional</sup> <a name="ClusterNameInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.property.clusterNameInput"></a>

```csharp
public string ClusterNameInput { get; }
```

- *Type:* string

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.property.clusterName"></a>

```csharp
public string ClusterName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatazoneConnectionPropsHyperPodProperties InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodProperties">DatazoneConnectionPropsHyperPodProperties</a>

---


### DatazoneConnectionPropsIamPropertiesOutputReference <a name="DatazoneConnectionPropsIamPropertiesOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneConnectionPropsIamPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.resetGlueLineageSyncEnabled">ResetGlueLineageSyncEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGlueLineageSyncEnabled` <a name="ResetGlueLineageSyncEnabled" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.resetGlueLineageSyncEnabled"></a>

```csharp
private void ResetGlueLineageSyncEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.property.glueLineageSyncEnabledInput">GlueLineageSyncEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.property.glueLineageSyncEnabled">GlueLineageSyncEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamProperties">DatazoneConnectionPropsIamProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GlueLineageSyncEnabledInput`<sup>Optional</sup> <a name="GlueLineageSyncEnabledInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.property.glueLineageSyncEnabledInput"></a>

```csharp
public bool|IResolvable GlueLineageSyncEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `GlueLineageSyncEnabled`<sup>Required</sup> <a name="GlueLineageSyncEnabled" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.property.glueLineageSyncEnabled"></a>

```csharp
public bool|IResolvable GlueLineageSyncEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatazoneConnectionPropsIamProperties InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamProperties">DatazoneConnectionPropsIamProperties</a>

---


### DatazoneConnectionPropsLakehousePropertiesOutputReference <a name="DatazoneConnectionPropsLakehousePropertiesOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneConnectionPropsLakehousePropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.resetGlueLineageSyncEnabled">ResetGlueLineageSyncEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGlueLineageSyncEnabled` <a name="ResetGlueLineageSyncEnabled" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.resetGlueLineageSyncEnabled"></a>

```csharp
private void ResetGlueLineageSyncEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.property.glueLineageSyncEnabledInput">GlueLineageSyncEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.property.glueLineageSyncEnabled">GlueLineageSyncEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehouseProperties">DatazoneConnectionPropsLakehouseProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GlueLineageSyncEnabledInput`<sup>Optional</sup> <a name="GlueLineageSyncEnabledInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.property.glueLineageSyncEnabledInput"></a>

```csharp
public bool|IResolvable GlueLineageSyncEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `GlueLineageSyncEnabled`<sup>Required</sup> <a name="GlueLineageSyncEnabled" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.property.glueLineageSyncEnabled"></a>

```csharp
public bool|IResolvable GlueLineageSyncEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatazoneConnectionPropsLakehouseProperties InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehouseProperties">DatazoneConnectionPropsLakehouseProperties</a>

---


### DatazoneConnectionPropsMlflowPropertiesOutputReference <a name="DatazoneConnectionPropsMlflowPropertiesOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneConnectionPropsMlflowPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.resetTrackingServerArn">ResetTrackingServerArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTrackingServerArn` <a name="ResetTrackingServerArn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.resetTrackingServerArn"></a>

```csharp
private void ResetTrackingServerArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.property.trackingServerArnInput">TrackingServerArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.property.trackingServerArn">TrackingServerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowProperties">DatazoneConnectionPropsMlflowProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TrackingServerArnInput`<sup>Optional</sup> <a name="TrackingServerArnInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.property.trackingServerArnInput"></a>

```csharp
public string TrackingServerArnInput { get; }
```

- *Type:* string

---

##### `TrackingServerArn`<sup>Required</sup> <a name="TrackingServerArn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.property.trackingServerArn"></a>

```csharp
public string TrackingServerArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatazoneConnectionPropsMlflowProperties InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowProperties">DatazoneConnectionPropsMlflowProperties</a>

---


### DatazoneConnectionPropsOutputReference <a name="DatazoneConnectionPropsOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneConnectionPropsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putAmazonQProperties">PutAmazonQProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putAthenaProperties">PutAthenaProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putGlueProperties">PutGlueProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putHyperPodProperties">PutHyperPodProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putIamProperties">PutIamProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putLakehouseProperties">PutLakehouseProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putMlflowProperties">PutMlflowProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putRedshiftProperties">PutRedshiftProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putS3Properties">PutS3Properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putSparkEmrProperties">PutSparkEmrProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putSparkGlueProperties">PutSparkGlueProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putWorkflowsMwaaProperties">PutWorkflowsMwaaProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resetAmazonQProperties">ResetAmazonQProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resetAthenaProperties">ResetAthenaProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resetGlueProperties">ResetGlueProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resetHyperPodProperties">ResetHyperPodProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resetIamProperties">ResetIamProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resetLakehouseProperties">ResetLakehouseProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resetMlflowProperties">ResetMlflowProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resetRedshiftProperties">ResetRedshiftProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resetS3Properties">ResetS3Properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resetSparkEmrProperties">ResetSparkEmrProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resetSparkGlueProperties">ResetSparkGlueProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resetWorkflowsMwaaProperties">ResetWorkflowsMwaaProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resetWorkflowsServerlessProperties">ResetWorkflowsServerlessProperties</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAmazonQProperties` <a name="PutAmazonQProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putAmazonQProperties"></a>

```csharp
private void PutAmazonQProperties(DatazoneConnectionPropsAmazonQProperties Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putAmazonQProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQProperties">DatazoneConnectionPropsAmazonQProperties</a>

---

##### `PutAthenaProperties` <a name="PutAthenaProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putAthenaProperties"></a>

```csharp
private void PutAthenaProperties(DatazoneConnectionPropsAthenaProperties Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putAthenaProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaProperties">DatazoneConnectionPropsAthenaProperties</a>

---

##### `PutGlueProperties` <a name="PutGlueProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putGlueProperties"></a>

```csharp
private void PutGlueProperties(DatazoneConnectionPropsGlueProperties Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putGlueProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGlueProperties">DatazoneConnectionPropsGlueProperties</a>

---

##### `PutHyperPodProperties` <a name="PutHyperPodProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putHyperPodProperties"></a>

```csharp
private void PutHyperPodProperties(DatazoneConnectionPropsHyperPodProperties Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putHyperPodProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodProperties">DatazoneConnectionPropsHyperPodProperties</a>

---

##### `PutIamProperties` <a name="PutIamProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putIamProperties"></a>

```csharp
private void PutIamProperties(DatazoneConnectionPropsIamProperties Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putIamProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamProperties">DatazoneConnectionPropsIamProperties</a>

---

##### `PutLakehouseProperties` <a name="PutLakehouseProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putLakehouseProperties"></a>

```csharp
private void PutLakehouseProperties(DatazoneConnectionPropsLakehouseProperties Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putLakehouseProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehouseProperties">DatazoneConnectionPropsLakehouseProperties</a>

---

##### `PutMlflowProperties` <a name="PutMlflowProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putMlflowProperties"></a>

```csharp
private void PutMlflowProperties(DatazoneConnectionPropsMlflowProperties Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putMlflowProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowProperties">DatazoneConnectionPropsMlflowProperties</a>

---

##### `PutRedshiftProperties` <a name="PutRedshiftProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putRedshiftProperties"></a>

```csharp
private void PutRedshiftProperties(DatazoneConnectionPropsRedshiftProperties Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putRedshiftProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftProperties">DatazoneConnectionPropsRedshiftProperties</a>

---

##### `PutS3Properties` <a name="PutS3Properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putS3Properties"></a>

```csharp
private void PutS3Properties(DatazoneConnectionPropsS3Properties Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putS3Properties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3Properties">DatazoneConnectionPropsS3Properties</a>

---

##### `PutSparkEmrProperties` <a name="PutSparkEmrProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putSparkEmrProperties"></a>

```csharp
private void PutSparkEmrProperties(DatazoneConnectionPropsSparkEmrProperties Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putSparkEmrProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrProperties">DatazoneConnectionPropsSparkEmrProperties</a>

---

##### `PutSparkGlueProperties` <a name="PutSparkGlueProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putSparkGlueProperties"></a>

```csharp
private void PutSparkGlueProperties(DatazoneConnectionPropsSparkGlueProperties Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putSparkGlueProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGlueProperties">DatazoneConnectionPropsSparkGlueProperties</a>

---

##### `PutWorkflowsMwaaProperties` <a name="PutWorkflowsMwaaProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putWorkflowsMwaaProperties"></a>

```csharp
private void PutWorkflowsMwaaProperties(DatazoneConnectionPropsWorkflowsMwaaProperties Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putWorkflowsMwaaProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaProperties">DatazoneConnectionPropsWorkflowsMwaaProperties</a>

---

##### `ResetAmazonQProperties` <a name="ResetAmazonQProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resetAmazonQProperties"></a>

```csharp
private void ResetAmazonQProperties()
```

##### `ResetAthenaProperties` <a name="ResetAthenaProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resetAthenaProperties"></a>

```csharp
private void ResetAthenaProperties()
```

##### `ResetGlueProperties` <a name="ResetGlueProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resetGlueProperties"></a>

```csharp
private void ResetGlueProperties()
```

##### `ResetHyperPodProperties` <a name="ResetHyperPodProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resetHyperPodProperties"></a>

```csharp
private void ResetHyperPodProperties()
```

##### `ResetIamProperties` <a name="ResetIamProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resetIamProperties"></a>

```csharp
private void ResetIamProperties()
```

##### `ResetLakehouseProperties` <a name="ResetLakehouseProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resetLakehouseProperties"></a>

```csharp
private void ResetLakehouseProperties()
```

##### `ResetMlflowProperties` <a name="ResetMlflowProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resetMlflowProperties"></a>

```csharp
private void ResetMlflowProperties()
```

##### `ResetRedshiftProperties` <a name="ResetRedshiftProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resetRedshiftProperties"></a>

```csharp
private void ResetRedshiftProperties()
```

##### `ResetS3Properties` <a name="ResetS3Properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resetS3Properties"></a>

```csharp
private void ResetS3Properties()
```

##### `ResetSparkEmrProperties` <a name="ResetSparkEmrProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resetSparkEmrProperties"></a>

```csharp
private void ResetSparkEmrProperties()
```

##### `ResetSparkGlueProperties` <a name="ResetSparkGlueProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resetSparkGlueProperties"></a>

```csharp
private void ResetSparkGlueProperties()
```

##### `ResetWorkflowsMwaaProperties` <a name="ResetWorkflowsMwaaProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resetWorkflowsMwaaProperties"></a>

```csharp
private void ResetWorkflowsMwaaProperties()
```

##### `ResetWorkflowsServerlessProperties` <a name="ResetWorkflowsServerlessProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resetWorkflowsServerlessProperties"></a>

```csharp
private void ResetWorkflowsServerlessProperties()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.amazonQProperties">AmazonQProperties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference">DatazoneConnectionPropsAmazonQPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.athenaProperties">AthenaProperties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference">DatazoneConnectionPropsAthenaPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.glueProperties">GlueProperties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference">DatazoneConnectionPropsGluePropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.hyperPodProperties">HyperPodProperties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference">DatazoneConnectionPropsHyperPodPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.iamProperties">IamProperties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference">DatazoneConnectionPropsIamPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.lakehouseProperties">LakehouseProperties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference">DatazoneConnectionPropsLakehousePropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.mlflowProperties">MlflowProperties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference">DatazoneConnectionPropsMlflowPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.redshiftProperties">RedshiftProperties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference">DatazoneConnectionPropsRedshiftPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.s3Properties">S3Properties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference">DatazoneConnectionPropsS3PropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.sparkEmrProperties">SparkEmrProperties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference">DatazoneConnectionPropsSparkEmrPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.sparkGlueProperties">SparkGlueProperties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference">DatazoneConnectionPropsSparkGluePropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.workflowsMwaaProperties">WorkflowsMwaaProperties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference">DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.amazonQPropertiesInput">AmazonQPropertiesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQProperties">DatazoneConnectionPropsAmazonQProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.athenaPropertiesInput">AthenaPropertiesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaProperties">DatazoneConnectionPropsAthenaProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.gluePropertiesInput">GluePropertiesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGlueProperties">DatazoneConnectionPropsGlueProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.hyperPodPropertiesInput">HyperPodPropertiesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodProperties">DatazoneConnectionPropsHyperPodProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.iamPropertiesInput">IamPropertiesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamProperties">DatazoneConnectionPropsIamProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.lakehousePropertiesInput">LakehousePropertiesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehouseProperties">DatazoneConnectionPropsLakehouseProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.mlflowPropertiesInput">MlflowPropertiesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowProperties">DatazoneConnectionPropsMlflowProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.redshiftPropertiesInput">RedshiftPropertiesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftProperties">DatazoneConnectionPropsRedshiftProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.s3PropertiesInput">S3PropertiesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3Properties">DatazoneConnectionPropsS3Properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.sparkEmrPropertiesInput">SparkEmrPropertiesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrProperties">DatazoneConnectionPropsSparkEmrProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.sparkGluePropertiesInput">SparkGluePropertiesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGlueProperties">DatazoneConnectionPropsSparkGlueProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.workflowsMwaaPropertiesInput">WorkflowsMwaaPropertiesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaProperties">DatazoneConnectionPropsWorkflowsMwaaProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.workflowsServerlessPropertiesInput">WorkflowsServerlessPropertiesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.workflowsServerlessProperties">WorkflowsServerlessProperties</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps">DatazoneConnectionProps</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AmazonQProperties`<sup>Required</sup> <a name="AmazonQProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.amazonQProperties"></a>

```csharp
public DatazoneConnectionPropsAmazonQPropertiesOutputReference AmazonQProperties { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference">DatazoneConnectionPropsAmazonQPropertiesOutputReference</a>

---

##### `AthenaProperties`<sup>Required</sup> <a name="AthenaProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.athenaProperties"></a>

```csharp
public DatazoneConnectionPropsAthenaPropertiesOutputReference AthenaProperties { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference">DatazoneConnectionPropsAthenaPropertiesOutputReference</a>

---

##### `GlueProperties`<sup>Required</sup> <a name="GlueProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.glueProperties"></a>

```csharp
public DatazoneConnectionPropsGluePropertiesOutputReference GlueProperties { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference">DatazoneConnectionPropsGluePropertiesOutputReference</a>

---

##### `HyperPodProperties`<sup>Required</sup> <a name="HyperPodProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.hyperPodProperties"></a>

```csharp
public DatazoneConnectionPropsHyperPodPropertiesOutputReference HyperPodProperties { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference">DatazoneConnectionPropsHyperPodPropertiesOutputReference</a>

---

##### `IamProperties`<sup>Required</sup> <a name="IamProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.iamProperties"></a>

```csharp
public DatazoneConnectionPropsIamPropertiesOutputReference IamProperties { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference">DatazoneConnectionPropsIamPropertiesOutputReference</a>

---

##### `LakehouseProperties`<sup>Required</sup> <a name="LakehouseProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.lakehouseProperties"></a>

```csharp
public DatazoneConnectionPropsLakehousePropertiesOutputReference LakehouseProperties { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference">DatazoneConnectionPropsLakehousePropertiesOutputReference</a>

---

##### `MlflowProperties`<sup>Required</sup> <a name="MlflowProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.mlflowProperties"></a>

```csharp
public DatazoneConnectionPropsMlflowPropertiesOutputReference MlflowProperties { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference">DatazoneConnectionPropsMlflowPropertiesOutputReference</a>

---

##### `RedshiftProperties`<sup>Required</sup> <a name="RedshiftProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.redshiftProperties"></a>

```csharp
public DatazoneConnectionPropsRedshiftPropertiesOutputReference RedshiftProperties { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference">DatazoneConnectionPropsRedshiftPropertiesOutputReference</a>

---

##### `S3Properties`<sup>Required</sup> <a name="S3Properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.s3Properties"></a>

```csharp
public DatazoneConnectionPropsS3PropertiesOutputReference S3Properties { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference">DatazoneConnectionPropsS3PropertiesOutputReference</a>

---

##### `SparkEmrProperties`<sup>Required</sup> <a name="SparkEmrProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.sparkEmrProperties"></a>

```csharp
public DatazoneConnectionPropsSparkEmrPropertiesOutputReference SparkEmrProperties { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference">DatazoneConnectionPropsSparkEmrPropertiesOutputReference</a>

---

##### `SparkGlueProperties`<sup>Required</sup> <a name="SparkGlueProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.sparkGlueProperties"></a>

```csharp
public DatazoneConnectionPropsSparkGluePropertiesOutputReference SparkGlueProperties { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference">DatazoneConnectionPropsSparkGluePropertiesOutputReference</a>

---

##### `WorkflowsMwaaProperties`<sup>Required</sup> <a name="WorkflowsMwaaProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.workflowsMwaaProperties"></a>

```csharp
public DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference WorkflowsMwaaProperties { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference">DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference</a>

---

##### `AmazonQPropertiesInput`<sup>Optional</sup> <a name="AmazonQPropertiesInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.amazonQPropertiesInput"></a>

```csharp
public IResolvable|DatazoneConnectionPropsAmazonQProperties AmazonQPropertiesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQProperties">DatazoneConnectionPropsAmazonQProperties</a>

---

##### `AthenaPropertiesInput`<sup>Optional</sup> <a name="AthenaPropertiesInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.athenaPropertiesInput"></a>

```csharp
public IResolvable|DatazoneConnectionPropsAthenaProperties AthenaPropertiesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaProperties">DatazoneConnectionPropsAthenaProperties</a>

---

##### `GluePropertiesInput`<sup>Optional</sup> <a name="GluePropertiesInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.gluePropertiesInput"></a>

```csharp
public IResolvable|DatazoneConnectionPropsGlueProperties GluePropertiesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGlueProperties">DatazoneConnectionPropsGlueProperties</a>

---

##### `HyperPodPropertiesInput`<sup>Optional</sup> <a name="HyperPodPropertiesInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.hyperPodPropertiesInput"></a>

```csharp
public IResolvable|DatazoneConnectionPropsHyperPodProperties HyperPodPropertiesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodProperties">DatazoneConnectionPropsHyperPodProperties</a>

---

##### `IamPropertiesInput`<sup>Optional</sup> <a name="IamPropertiesInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.iamPropertiesInput"></a>

```csharp
public IResolvable|DatazoneConnectionPropsIamProperties IamPropertiesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamProperties">DatazoneConnectionPropsIamProperties</a>

---

##### `LakehousePropertiesInput`<sup>Optional</sup> <a name="LakehousePropertiesInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.lakehousePropertiesInput"></a>

```csharp
public IResolvable|DatazoneConnectionPropsLakehouseProperties LakehousePropertiesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehouseProperties">DatazoneConnectionPropsLakehouseProperties</a>

---

##### `MlflowPropertiesInput`<sup>Optional</sup> <a name="MlflowPropertiesInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.mlflowPropertiesInput"></a>

```csharp
public IResolvable|DatazoneConnectionPropsMlflowProperties MlflowPropertiesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowProperties">DatazoneConnectionPropsMlflowProperties</a>

---

##### `RedshiftPropertiesInput`<sup>Optional</sup> <a name="RedshiftPropertiesInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.redshiftPropertiesInput"></a>

```csharp
public IResolvable|DatazoneConnectionPropsRedshiftProperties RedshiftPropertiesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftProperties">DatazoneConnectionPropsRedshiftProperties</a>

---

##### `S3PropertiesInput`<sup>Optional</sup> <a name="S3PropertiesInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.s3PropertiesInput"></a>

```csharp
public IResolvable|DatazoneConnectionPropsS3Properties S3PropertiesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3Properties">DatazoneConnectionPropsS3Properties</a>

---

##### `SparkEmrPropertiesInput`<sup>Optional</sup> <a name="SparkEmrPropertiesInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.sparkEmrPropertiesInput"></a>

```csharp
public IResolvable|DatazoneConnectionPropsSparkEmrProperties SparkEmrPropertiesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrProperties">DatazoneConnectionPropsSparkEmrProperties</a>

---

##### `SparkGluePropertiesInput`<sup>Optional</sup> <a name="SparkGluePropertiesInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.sparkGluePropertiesInput"></a>

```csharp
public IResolvable|DatazoneConnectionPropsSparkGlueProperties SparkGluePropertiesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGlueProperties">DatazoneConnectionPropsSparkGlueProperties</a>

---

##### `WorkflowsMwaaPropertiesInput`<sup>Optional</sup> <a name="WorkflowsMwaaPropertiesInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.workflowsMwaaPropertiesInput"></a>

```csharp
public IResolvable|DatazoneConnectionPropsWorkflowsMwaaProperties WorkflowsMwaaPropertiesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaProperties">DatazoneConnectionPropsWorkflowsMwaaProperties</a>

---

##### `WorkflowsServerlessPropertiesInput`<sup>Optional</sup> <a name="WorkflowsServerlessPropertiesInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.workflowsServerlessPropertiesInput"></a>

```csharp
public string WorkflowsServerlessPropertiesInput { get; }
```

- *Type:* string

---

##### `WorkflowsServerlessProperties`<sup>Required</sup> <a name="WorkflowsServerlessProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.workflowsServerlessProperties"></a>

```csharp
public string WorkflowsServerlessProperties { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatazoneConnectionProps InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps">DatazoneConnectionProps</a>

---


### DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference <a name="DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.putUsernamePassword">PutUsernamePassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.resetSecretArn">ResetSecretArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.resetUsernamePassword">ResetUsernamePassword</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutUsernamePassword` <a name="PutUsernamePassword" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.putUsernamePassword"></a>

```csharp
private void PutUsernamePassword(DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.putUsernamePassword.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword">DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword</a>

---

##### `ResetSecretArn` <a name="ResetSecretArn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.resetSecretArn"></a>

```csharp
private void ResetSecretArn()
```

##### `ResetUsernamePassword` <a name="ResetUsernamePassword" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.resetUsernamePassword"></a>

```csharp
private void ResetUsernamePassword()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.property.usernamePassword">UsernamePassword</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference">DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.property.secretArnInput">SecretArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.property.usernamePasswordInput">UsernamePasswordInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword">DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.property.secretArn">SecretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentials">DatazoneConnectionPropsRedshiftPropertiesCredentials</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UsernamePassword`<sup>Required</sup> <a name="UsernamePassword" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.property.usernamePassword"></a>

```csharp
public DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference UsernamePassword { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference">DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference</a>

---

##### `SecretArnInput`<sup>Optional</sup> <a name="SecretArnInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.property.secretArnInput"></a>

```csharp
public string SecretArnInput { get; }
```

- *Type:* string

---

##### `UsernamePasswordInput`<sup>Optional</sup> <a name="UsernamePasswordInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.property.usernamePasswordInput"></a>

```csharp
public IResolvable|DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword UsernamePasswordInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword">DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword</a>

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.property.secretArn"></a>

```csharp
public string SecretArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatazoneConnectionPropsRedshiftPropertiesCredentials InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentials">DatazoneConnectionPropsRedshiftPropertiesCredentials</a>

---


### DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference <a name="DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPassword` <a name="ResetPassword" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.resetUsername"></a>

```csharp
private void ResetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword">DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword">DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword</a>

---


### DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference <a name="DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.putSchedule">PutSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.resetSchedule">ResetSchedule</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSchedule` <a name="PutSchedule" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.putSchedule"></a>

```csharp
private void PutSchedule(DatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule">DatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule</a>

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetSchedule` <a name="ResetSchedule" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.resetSchedule"></a>

```csharp
private void ResetSchedule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.property.schedule">Schedule</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference">DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.property.scheduleInput">ScheduleInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule">DatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSync">DatazoneConnectionPropsRedshiftPropertiesLineageSync</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.property.schedule"></a>

```csharp
public DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference Schedule { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference">DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.property.scheduleInput"></a>

```csharp
public IResolvable|DatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule ScheduleInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule">DatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule</a>

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatazoneConnectionPropsRedshiftPropertiesLineageSync InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSync">DatazoneConnectionPropsRedshiftPropertiesLineageSync</a>

---


### DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference <a name="DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.resetSchedule">ResetSchedule</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSchedule` <a name="ResetSchedule" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.resetSchedule"></a>

```csharp
private void ResetSchedule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.property.scheduleInput">ScheduleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.property.schedule">Schedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule">DatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.property.scheduleInput"></a>

```csharp
public string ScheduleInput { get; }
```

- *Type:* string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.property.schedule"></a>

```csharp
public string Schedule { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule">DatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule</a>

---


### DatazoneConnectionPropsRedshiftPropertiesOutputReference <a name="DatazoneConnectionPropsRedshiftPropertiesOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneConnectionPropsRedshiftPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.putCredentials">PutCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.putLineageSync">PutLineageSync</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.putStorage">PutStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.resetCredentials">ResetCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.resetDatabaseName">ResetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.resetHost">ResetHost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.resetLineageSync">ResetLineageSync</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.resetStorage">ResetStorage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCredentials` <a name="PutCredentials" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.putCredentials"></a>

```csharp
private void PutCredentials(DatazoneConnectionPropsRedshiftPropertiesCredentials Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.putCredentials.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentials">DatazoneConnectionPropsRedshiftPropertiesCredentials</a>

---

##### `PutLineageSync` <a name="PutLineageSync" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.putLineageSync"></a>

```csharp
private void PutLineageSync(DatazoneConnectionPropsRedshiftPropertiesLineageSync Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.putLineageSync.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSync">DatazoneConnectionPropsRedshiftPropertiesLineageSync</a>

---

##### `PutStorage` <a name="PutStorage" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.putStorage"></a>

```csharp
private void PutStorage(DatazoneConnectionPropsRedshiftPropertiesStorage Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.putStorage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorage">DatazoneConnectionPropsRedshiftPropertiesStorage</a>

---

##### `ResetCredentials` <a name="ResetCredentials" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.resetCredentials"></a>

```csharp
private void ResetCredentials()
```

##### `ResetDatabaseName` <a name="ResetDatabaseName" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.resetDatabaseName"></a>

```csharp
private void ResetDatabaseName()
```

##### `ResetHost` <a name="ResetHost" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.resetHost"></a>

```csharp
private void ResetHost()
```

##### `ResetLineageSync` <a name="ResetLineageSync" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.resetLineageSync"></a>

```csharp
private void ResetLineageSync()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetStorage` <a name="ResetStorage" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.resetStorage"></a>

```csharp
private void ResetStorage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.credentials">Credentials</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference">DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.lineageSync">LineageSync</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference">DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.storage">Storage</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference">DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.credentialsInput">CredentialsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentials">DatazoneConnectionPropsRedshiftPropertiesCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.hostInput">HostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.lineageSyncInput">LineageSyncInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSync">DatazoneConnectionPropsRedshiftPropertiesLineageSync</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.storageInput">StorageInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorage">DatazoneConnectionPropsRedshiftPropertiesStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftProperties">DatazoneConnectionPropsRedshiftProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Credentials`<sup>Required</sup> <a name="Credentials" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.credentials"></a>

```csharp
public DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference Credentials { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference">DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference</a>

---

##### `LineageSync`<sup>Required</sup> <a name="LineageSync" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.lineageSync"></a>

```csharp
public DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference LineageSync { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference">DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference</a>

---

##### `Storage`<sup>Required</sup> <a name="Storage" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.storage"></a>

```csharp
public DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference Storage { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference">DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference</a>

---

##### `CredentialsInput`<sup>Optional</sup> <a name="CredentialsInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.credentialsInput"></a>

```csharp
public IResolvable|DatazoneConnectionPropsRedshiftPropertiesCredentials CredentialsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentials">DatazoneConnectionPropsRedshiftPropertiesCredentials</a>

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.databaseNameInput"></a>

```csharp
public string DatabaseNameInput { get; }
```

- *Type:* string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.hostInput"></a>

```csharp
public string HostInput { get; }
```

- *Type:* string

---

##### `LineageSyncInput`<sup>Optional</sup> <a name="LineageSyncInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.lineageSyncInput"></a>

```csharp
public IResolvable|DatazoneConnectionPropsRedshiftPropertiesLineageSync LineageSyncInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSync">DatazoneConnectionPropsRedshiftPropertiesLineageSync</a>

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `StorageInput`<sup>Optional</sup> <a name="StorageInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.storageInput"></a>

```csharp
public IResolvable|DatazoneConnectionPropsRedshiftPropertiesStorage StorageInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorage">DatazoneConnectionPropsRedshiftPropertiesStorage</a>

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatazoneConnectionPropsRedshiftProperties InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftProperties">DatazoneConnectionPropsRedshiftProperties</a>

---


### DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference <a name="DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.resetClusterName">ResetClusterName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.resetWorkgroupName">ResetWorkgroupName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClusterName` <a name="ResetClusterName" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.resetClusterName"></a>

```csharp
private void ResetClusterName()
```

##### `ResetWorkgroupName` <a name="ResetWorkgroupName" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.resetWorkgroupName"></a>

```csharp
private void ResetWorkgroupName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.property.clusterNameInput">ClusterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.property.workgroupNameInput">WorkgroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.property.clusterName">ClusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.property.workgroupName">WorkgroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorage">DatazoneConnectionPropsRedshiftPropertiesStorage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClusterNameInput`<sup>Optional</sup> <a name="ClusterNameInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.property.clusterNameInput"></a>

```csharp
public string ClusterNameInput { get; }
```

- *Type:* string

---

##### `WorkgroupNameInput`<sup>Optional</sup> <a name="WorkgroupNameInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.property.workgroupNameInput"></a>

```csharp
public string WorkgroupNameInput { get; }
```

- *Type:* string

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.property.clusterName"></a>

```csharp
public string ClusterName { get; }
```

- *Type:* string

---

##### `WorkgroupName`<sup>Required</sup> <a name="WorkgroupName" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.property.workgroupName"></a>

```csharp
public string WorkgroupName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatazoneConnectionPropsRedshiftPropertiesStorage InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorage">DatazoneConnectionPropsRedshiftPropertiesStorage</a>

---


### DatazoneConnectionPropsS3PropertiesOutputReference <a name="DatazoneConnectionPropsS3PropertiesOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneConnectionPropsS3PropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.resetRegisterS3AccessGrantLocation">ResetRegisterS3AccessGrantLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.resetS3AccessGrantLocationId">ResetS3AccessGrantLocationId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.resetS3Uri">ResetS3Uri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegisterS3AccessGrantLocation` <a name="ResetRegisterS3AccessGrantLocation" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.resetRegisterS3AccessGrantLocation"></a>

```csharp
private void ResetRegisterS3AccessGrantLocation()
```

##### `ResetS3AccessGrantLocationId` <a name="ResetS3AccessGrantLocationId" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.resetS3AccessGrantLocationId"></a>

```csharp
private void ResetS3AccessGrantLocationId()
```

##### `ResetS3Uri` <a name="ResetS3Uri" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.resetS3Uri"></a>

```csharp
private void ResetS3Uri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.property.registerS3AccessGrantLocationInput">RegisterS3AccessGrantLocationInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.property.s3AccessGrantLocationIdInput">S3AccessGrantLocationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.property.s3UriInput">S3UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.property.registerS3AccessGrantLocation">RegisterS3AccessGrantLocation</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.property.s3AccessGrantLocationId">S3AccessGrantLocationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.property.s3Uri">S3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3Properties">DatazoneConnectionPropsS3Properties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RegisterS3AccessGrantLocationInput`<sup>Optional</sup> <a name="RegisterS3AccessGrantLocationInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.property.registerS3AccessGrantLocationInput"></a>

```csharp
public bool|IResolvable RegisterS3AccessGrantLocationInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `S3AccessGrantLocationIdInput`<sup>Optional</sup> <a name="S3AccessGrantLocationIdInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.property.s3AccessGrantLocationIdInput"></a>

```csharp
public string S3AccessGrantLocationIdInput { get; }
```

- *Type:* string

---

##### `S3UriInput`<sup>Optional</sup> <a name="S3UriInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.property.s3UriInput"></a>

```csharp
public string S3UriInput { get; }
```

- *Type:* string

---

##### `RegisterS3AccessGrantLocation`<sup>Required</sup> <a name="RegisterS3AccessGrantLocation" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.property.registerS3AccessGrantLocation"></a>

```csharp
public bool|IResolvable RegisterS3AccessGrantLocation { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `S3AccessGrantLocationId`<sup>Required</sup> <a name="S3AccessGrantLocationId" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.property.s3AccessGrantLocationId"></a>

```csharp
public string S3AccessGrantLocationId { get; }
```

- *Type:* string

---

##### `S3Uri`<sup>Required</sup> <a name="S3Uri" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.property.s3Uri"></a>

```csharp
public string S3Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatazoneConnectionPropsS3Properties InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3Properties">DatazoneConnectionPropsS3Properties</a>

---


### DatazoneConnectionPropsSparkEmrPropertiesOutputReference <a name="DatazoneConnectionPropsSparkEmrPropertiesOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneConnectionPropsSparkEmrPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.resetComputeArn">ResetComputeArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.resetInstanceProfileArn">ResetInstanceProfileArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.resetJavaVirtualEnv">ResetJavaVirtualEnv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.resetLogUri">ResetLogUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.resetManagedEndpointArn">ResetManagedEndpointArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.resetPythonVirtualEnv">ResetPythonVirtualEnv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.resetRuntimeRole">ResetRuntimeRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.resetTrustedCertificatesS3Uri">ResetTrustedCertificatesS3Uri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetComputeArn` <a name="ResetComputeArn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.resetComputeArn"></a>

```csharp
private void ResetComputeArn()
```

##### `ResetInstanceProfileArn` <a name="ResetInstanceProfileArn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.resetInstanceProfileArn"></a>

```csharp
private void ResetInstanceProfileArn()
```

##### `ResetJavaVirtualEnv` <a name="ResetJavaVirtualEnv" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.resetJavaVirtualEnv"></a>

```csharp
private void ResetJavaVirtualEnv()
```

##### `ResetLogUri` <a name="ResetLogUri" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.resetLogUri"></a>

```csharp
private void ResetLogUri()
```

##### `ResetManagedEndpointArn` <a name="ResetManagedEndpointArn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.resetManagedEndpointArn"></a>

```csharp
private void ResetManagedEndpointArn()
```

##### `ResetPythonVirtualEnv` <a name="ResetPythonVirtualEnv" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.resetPythonVirtualEnv"></a>

```csharp
private void ResetPythonVirtualEnv()
```

##### `ResetRuntimeRole` <a name="ResetRuntimeRole" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.resetRuntimeRole"></a>

```csharp
private void ResetRuntimeRole()
```

##### `ResetTrustedCertificatesS3Uri` <a name="ResetTrustedCertificatesS3Uri" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.resetTrustedCertificatesS3Uri"></a>

```csharp
private void ResetTrustedCertificatesS3Uri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.computeArnInput">ComputeArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.instanceProfileArnInput">InstanceProfileArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.javaVirtualEnvInput">JavaVirtualEnvInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.logUriInput">LogUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.managedEndpointArnInput">ManagedEndpointArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.pythonVirtualEnvInput">PythonVirtualEnvInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.runtimeRoleInput">RuntimeRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.trustedCertificatesS3UriInput">TrustedCertificatesS3UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.computeArn">ComputeArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.instanceProfileArn">InstanceProfileArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.javaVirtualEnv">JavaVirtualEnv</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.logUri">LogUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.managedEndpointArn">ManagedEndpointArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.pythonVirtualEnv">PythonVirtualEnv</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.runtimeRole">RuntimeRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.trustedCertificatesS3Uri">TrustedCertificatesS3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrProperties">DatazoneConnectionPropsSparkEmrProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ComputeArnInput`<sup>Optional</sup> <a name="ComputeArnInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.computeArnInput"></a>

```csharp
public string ComputeArnInput { get; }
```

- *Type:* string

---

##### `InstanceProfileArnInput`<sup>Optional</sup> <a name="InstanceProfileArnInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.instanceProfileArnInput"></a>

```csharp
public string InstanceProfileArnInput { get; }
```

- *Type:* string

---

##### `JavaVirtualEnvInput`<sup>Optional</sup> <a name="JavaVirtualEnvInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.javaVirtualEnvInput"></a>

```csharp
public string JavaVirtualEnvInput { get; }
```

- *Type:* string

---

##### `LogUriInput`<sup>Optional</sup> <a name="LogUriInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.logUriInput"></a>

```csharp
public string LogUriInput { get; }
```

- *Type:* string

---

##### `ManagedEndpointArnInput`<sup>Optional</sup> <a name="ManagedEndpointArnInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.managedEndpointArnInput"></a>

```csharp
public string ManagedEndpointArnInput { get; }
```

- *Type:* string

---

##### `PythonVirtualEnvInput`<sup>Optional</sup> <a name="PythonVirtualEnvInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.pythonVirtualEnvInput"></a>

```csharp
public string PythonVirtualEnvInput { get; }
```

- *Type:* string

---

##### `RuntimeRoleInput`<sup>Optional</sup> <a name="RuntimeRoleInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.runtimeRoleInput"></a>

```csharp
public string RuntimeRoleInput { get; }
```

- *Type:* string

---

##### `TrustedCertificatesS3UriInput`<sup>Optional</sup> <a name="TrustedCertificatesS3UriInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.trustedCertificatesS3UriInput"></a>

```csharp
public string TrustedCertificatesS3UriInput { get; }
```

- *Type:* string

---

##### `ComputeArn`<sup>Required</sup> <a name="ComputeArn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.computeArn"></a>

```csharp
public string ComputeArn { get; }
```

- *Type:* string

---

##### `InstanceProfileArn`<sup>Required</sup> <a name="InstanceProfileArn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.instanceProfileArn"></a>

```csharp
public string InstanceProfileArn { get; }
```

- *Type:* string

---

##### `JavaVirtualEnv`<sup>Required</sup> <a name="JavaVirtualEnv" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.javaVirtualEnv"></a>

```csharp
public string JavaVirtualEnv { get; }
```

- *Type:* string

---

##### `LogUri`<sup>Required</sup> <a name="LogUri" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.logUri"></a>

```csharp
public string LogUri { get; }
```

- *Type:* string

---

##### `ManagedEndpointArn`<sup>Required</sup> <a name="ManagedEndpointArn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.managedEndpointArn"></a>

```csharp
public string ManagedEndpointArn { get; }
```

- *Type:* string

---

##### `PythonVirtualEnv`<sup>Required</sup> <a name="PythonVirtualEnv" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.pythonVirtualEnv"></a>

```csharp
public string PythonVirtualEnv { get; }
```

- *Type:* string

---

##### `RuntimeRole`<sup>Required</sup> <a name="RuntimeRole" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.runtimeRole"></a>

```csharp
public string RuntimeRole { get; }
```

- *Type:* string

---

##### `TrustedCertificatesS3Uri`<sup>Required</sup> <a name="TrustedCertificatesS3Uri" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.trustedCertificatesS3Uri"></a>

```csharp
public string TrustedCertificatesS3Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatazoneConnectionPropsSparkEmrProperties InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrProperties">DatazoneConnectionPropsSparkEmrProperties</a>

---


### DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference <a name="DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.resetConnection">ResetConnection</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConnection` <a name="ResetConnection" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.resetConnection"></a>

```csharp
private void ResetConnection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.property.connectionInput">ConnectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.property.connection">Connection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgs">DatazoneConnectionPropsSparkGluePropertiesAdditionalArgs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConnectionInput`<sup>Optional</sup> <a name="ConnectionInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.property.connectionInput"></a>

```csharp
public string ConnectionInput { get; }
```

- *Type:* string

---

##### `Connection`<sup>Required</sup> <a name="Connection" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.property.connection"></a>

```csharp
public string Connection { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatazoneConnectionPropsSparkGluePropertiesAdditionalArgs InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgs">DatazoneConnectionPropsSparkGluePropertiesAdditionalArgs</a>

---


### DatazoneConnectionPropsSparkGluePropertiesOutputReference <a name="DatazoneConnectionPropsSparkGluePropertiesOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneConnectionPropsSparkGluePropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.putAdditionalArgs">PutAdditionalArgs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.resetAdditionalArgs">ResetAdditionalArgs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.resetGlueConnectionName">ResetGlueConnectionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.resetGlueVersion">ResetGlueVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.resetIdleTimeout">ResetIdleTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.resetJavaVirtualEnv">ResetJavaVirtualEnv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.resetNumberOfWorkers">ResetNumberOfWorkers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.resetPythonVirtualEnv">ResetPythonVirtualEnv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.resetWorkerType">ResetWorkerType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAdditionalArgs` <a name="PutAdditionalArgs" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.putAdditionalArgs"></a>

```csharp
private void PutAdditionalArgs(DatazoneConnectionPropsSparkGluePropertiesAdditionalArgs Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.putAdditionalArgs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgs">DatazoneConnectionPropsSparkGluePropertiesAdditionalArgs</a>

---

##### `ResetAdditionalArgs` <a name="ResetAdditionalArgs" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.resetAdditionalArgs"></a>

```csharp
private void ResetAdditionalArgs()
```

##### `ResetGlueConnectionName` <a name="ResetGlueConnectionName" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.resetGlueConnectionName"></a>

```csharp
private void ResetGlueConnectionName()
```

##### `ResetGlueVersion` <a name="ResetGlueVersion" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.resetGlueVersion"></a>

```csharp
private void ResetGlueVersion()
```

##### `ResetIdleTimeout` <a name="ResetIdleTimeout" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.resetIdleTimeout"></a>

```csharp
private void ResetIdleTimeout()
```

##### `ResetJavaVirtualEnv` <a name="ResetJavaVirtualEnv" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.resetJavaVirtualEnv"></a>

```csharp
private void ResetJavaVirtualEnv()
```

##### `ResetNumberOfWorkers` <a name="ResetNumberOfWorkers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.resetNumberOfWorkers"></a>

```csharp
private void ResetNumberOfWorkers()
```

##### `ResetPythonVirtualEnv` <a name="ResetPythonVirtualEnv" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.resetPythonVirtualEnv"></a>

```csharp
private void ResetPythonVirtualEnv()
```

##### `ResetWorkerType` <a name="ResetWorkerType" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.resetWorkerType"></a>

```csharp
private void ResetWorkerType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.additionalArgs">AdditionalArgs</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference">DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.additionalArgsInput">AdditionalArgsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgs">DatazoneConnectionPropsSparkGluePropertiesAdditionalArgs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.glueConnectionNameInput">GlueConnectionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.glueVersionInput">GlueVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.idleTimeoutInput">IdleTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.javaVirtualEnvInput">JavaVirtualEnvInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.numberOfWorkersInput">NumberOfWorkersInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.pythonVirtualEnvInput">PythonVirtualEnvInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.workerTypeInput">WorkerTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.glueConnectionName">GlueConnectionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.glueVersion">GlueVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.idleTimeout">IdleTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.javaVirtualEnv">JavaVirtualEnv</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.numberOfWorkers">NumberOfWorkers</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.pythonVirtualEnv">PythonVirtualEnv</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.workerType">WorkerType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGlueProperties">DatazoneConnectionPropsSparkGlueProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdditionalArgs`<sup>Required</sup> <a name="AdditionalArgs" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.additionalArgs"></a>

```csharp
public DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference AdditionalArgs { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference">DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference</a>

---

##### `AdditionalArgsInput`<sup>Optional</sup> <a name="AdditionalArgsInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.additionalArgsInput"></a>

```csharp
public IResolvable|DatazoneConnectionPropsSparkGluePropertiesAdditionalArgs AdditionalArgsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgs">DatazoneConnectionPropsSparkGluePropertiesAdditionalArgs</a>

---

##### `GlueConnectionNameInput`<sup>Optional</sup> <a name="GlueConnectionNameInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.glueConnectionNameInput"></a>

```csharp
public string GlueConnectionNameInput { get; }
```

- *Type:* string

---

##### `GlueVersionInput`<sup>Optional</sup> <a name="GlueVersionInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.glueVersionInput"></a>

```csharp
public string GlueVersionInput { get; }
```

- *Type:* string

---

##### `IdleTimeoutInput`<sup>Optional</sup> <a name="IdleTimeoutInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.idleTimeoutInput"></a>

```csharp
public double IdleTimeoutInput { get; }
```

- *Type:* double

---

##### `JavaVirtualEnvInput`<sup>Optional</sup> <a name="JavaVirtualEnvInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.javaVirtualEnvInput"></a>

```csharp
public string JavaVirtualEnvInput { get; }
```

- *Type:* string

---

##### `NumberOfWorkersInput`<sup>Optional</sup> <a name="NumberOfWorkersInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.numberOfWorkersInput"></a>

```csharp
public double NumberOfWorkersInput { get; }
```

- *Type:* double

---

##### `PythonVirtualEnvInput`<sup>Optional</sup> <a name="PythonVirtualEnvInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.pythonVirtualEnvInput"></a>

```csharp
public string PythonVirtualEnvInput { get; }
```

- *Type:* string

---

##### `WorkerTypeInput`<sup>Optional</sup> <a name="WorkerTypeInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.workerTypeInput"></a>

```csharp
public string WorkerTypeInput { get; }
```

- *Type:* string

---

##### `GlueConnectionName`<sup>Required</sup> <a name="GlueConnectionName" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.glueConnectionName"></a>

```csharp
public string GlueConnectionName { get; }
```

- *Type:* string

---

##### `GlueVersion`<sup>Required</sup> <a name="GlueVersion" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.glueVersion"></a>

```csharp
public string GlueVersion { get; }
```

- *Type:* string

---

##### `IdleTimeout`<sup>Required</sup> <a name="IdleTimeout" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.idleTimeout"></a>

```csharp
public double IdleTimeout { get; }
```

- *Type:* double

---

##### `JavaVirtualEnv`<sup>Required</sup> <a name="JavaVirtualEnv" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.javaVirtualEnv"></a>

```csharp
public string JavaVirtualEnv { get; }
```

- *Type:* string

---

##### `NumberOfWorkers`<sup>Required</sup> <a name="NumberOfWorkers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.numberOfWorkers"></a>

```csharp
public double NumberOfWorkers { get; }
```

- *Type:* double

---

##### `PythonVirtualEnv`<sup>Required</sup> <a name="PythonVirtualEnv" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.pythonVirtualEnv"></a>

```csharp
public string PythonVirtualEnv { get; }
```

- *Type:* string

---

##### `WorkerType`<sup>Required</sup> <a name="WorkerType" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.workerType"></a>

```csharp
public string WorkerType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatazoneConnectionPropsSparkGlueProperties InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGlueProperties">DatazoneConnectionPropsSparkGlueProperties</a>

---


### DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference <a name="DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.resetMwaaEnvironmentName">ResetMwaaEnvironmentName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMwaaEnvironmentName` <a name="ResetMwaaEnvironmentName" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.resetMwaaEnvironmentName"></a>

```csharp
private void ResetMwaaEnvironmentName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.property.mwaaEnvironmentNameInput">MwaaEnvironmentNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.property.mwaaEnvironmentName">MwaaEnvironmentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaProperties">DatazoneConnectionPropsWorkflowsMwaaProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MwaaEnvironmentNameInput`<sup>Optional</sup> <a name="MwaaEnvironmentNameInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.property.mwaaEnvironmentNameInput"></a>

```csharp
public string MwaaEnvironmentNameInput { get; }
```

- *Type:* string

---

##### `MwaaEnvironmentName`<sup>Required</sup> <a name="MwaaEnvironmentName" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.property.mwaaEnvironmentName"></a>

```csharp
public string MwaaEnvironmentName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatazoneConnectionPropsWorkflowsMwaaProperties InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaProperties">DatazoneConnectionPropsWorkflowsMwaaProperties</a>

---



