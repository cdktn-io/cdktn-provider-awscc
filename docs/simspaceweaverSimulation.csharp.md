# `simspaceweaverSimulation` Submodule <a name="`simspaceweaverSimulation` Submodule" id="@cdktn/provider-awscc.simspaceweaverSimulation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SimspaceweaverSimulation <a name="SimspaceweaverSimulation" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/simspaceweaver_simulation awscc_simspaceweaver_simulation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SimspaceweaverSimulation(Construct Scope, string Id, SimspaceweaverSimulationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig">SimspaceweaverSimulationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig">SimspaceweaverSimulationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.putSchemaS3Location">PutSchemaS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.putSnapshotS3Location">PutSnapshotS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.resetMaximumDuration">ResetMaximumDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.resetSchemaS3Location">ResetSchemaS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.resetSnapshotS3Location">ResetSnapshotS3Location</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSchemaS3Location` <a name="PutSchemaS3Location" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.putSchemaS3Location"></a>

```csharp
private void PutSchemaS3Location(SimspaceweaverSimulationSchemaS3Location Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.putSchemaS3Location.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3Location">SimspaceweaverSimulationSchemaS3Location</a>

---

##### `PutSnapshotS3Location` <a name="PutSnapshotS3Location" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.putSnapshotS3Location"></a>

```csharp
private void PutSnapshotS3Location(SimspaceweaverSimulationSnapshotS3Location Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.putSnapshotS3Location.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3Location">SimspaceweaverSimulationSnapshotS3Location</a>

---

##### `ResetMaximumDuration` <a name="ResetMaximumDuration" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.resetMaximumDuration"></a>

```csharp
private void ResetMaximumDuration()
```

##### `ResetSchemaS3Location` <a name="ResetSchemaS3Location" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.resetSchemaS3Location"></a>

```csharp
private void ResetSchemaS3Location()
```

##### `ResetSnapshotS3Location` <a name="ResetSnapshotS3Location" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.resetSnapshotS3Location"></a>

```csharp
private void ResetSnapshotS3Location()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SimspaceweaverSimulation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SimspaceweaverSimulation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SimspaceweaverSimulation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SimspaceweaverSimulation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SimspaceweaverSimulation.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SimspaceweaverSimulation resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SimspaceweaverSimulation to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SimspaceweaverSimulation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/simspaceweaver_simulation#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SimspaceweaverSimulation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.describePayload">DescribePayload</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.schemaS3Location">SchemaS3Location</a></code> | <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference">SimspaceweaverSimulationSchemaS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.snapshotS3Location">SnapshotS3Location</a></code> | <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference">SimspaceweaverSimulationSnapshotS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.maximumDurationInput">MaximumDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.schemaS3LocationInput">SchemaS3LocationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3Location">SimspaceweaverSimulationSchemaS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.snapshotS3LocationInput">SnapshotS3LocationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3Location">SimspaceweaverSimulationSnapshotS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.maximumDuration">MaximumDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DescribePayload`<sup>Required</sup> <a name="DescribePayload" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.describePayload"></a>

```csharp
public string DescribePayload { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `SchemaS3Location`<sup>Required</sup> <a name="SchemaS3Location" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.schemaS3Location"></a>

```csharp
public SimspaceweaverSimulationSchemaS3LocationOutputReference SchemaS3Location { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference">SimspaceweaverSimulationSchemaS3LocationOutputReference</a>

---

##### `SnapshotS3Location`<sup>Required</sup> <a name="SnapshotS3Location" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.snapshotS3Location"></a>

```csharp
public SimspaceweaverSimulationSnapshotS3LocationOutputReference SnapshotS3Location { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference">SimspaceweaverSimulationSnapshotS3LocationOutputReference</a>

---

##### `MaximumDurationInput`<sup>Optional</sup> <a name="MaximumDurationInput" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.maximumDurationInput"></a>

```csharp
public string MaximumDurationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `SchemaS3LocationInput`<sup>Optional</sup> <a name="SchemaS3LocationInput" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.schemaS3LocationInput"></a>

```csharp
public IResolvable|SimspaceweaverSimulationSchemaS3Location SchemaS3LocationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3Location">SimspaceweaverSimulationSchemaS3Location</a>

---

##### `SnapshotS3LocationInput`<sup>Optional</sup> <a name="SnapshotS3LocationInput" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.snapshotS3LocationInput"></a>

```csharp
public IResolvable|SimspaceweaverSimulationSnapshotS3Location SnapshotS3LocationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3Location">SimspaceweaverSimulationSnapshotS3Location</a>

---

##### `MaximumDuration`<sup>Required</sup> <a name="MaximumDuration" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.maximumDuration"></a>

```csharp
public string MaximumDuration { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SimspaceweaverSimulationConfig <a name="SimspaceweaverSimulationConfig" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SimspaceweaverSimulationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string RoleArn,
    string MaximumDuration = null,
    SimspaceweaverSimulationSchemaS3Location SchemaS3Location = null,
    SimspaceweaverSimulationSnapshotS3Location SnapshotS3Location = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.name">Name</a></code> | <code>string</code> | The name of the simulation. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.roleArn">RoleArn</a></code> | <code>string</code> | Role ARN. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.maximumDuration">MaximumDuration</a></code> | <code>string</code> | The maximum running time of the simulation. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.schemaS3Location">SchemaS3Location</a></code> | <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3Location">SimspaceweaverSimulationSchemaS3Location</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/simspaceweaver_simulation#schema_s3_location SimspaceweaverSimulation#schema_s3_location}. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.snapshotS3Location">SnapshotS3Location</a></code> | <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3Location">SimspaceweaverSimulationSnapshotS3Location</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/simspaceweaver_simulation#snapshot_s3_location SimspaceweaverSimulation#snapshot_s3_location}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the simulation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/simspaceweaver_simulation#name SimspaceweaverSimulation#name}

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

Role ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/simspaceweaver_simulation#role_arn SimspaceweaverSimulation#role_arn}

---

##### `MaximumDuration`<sup>Optional</sup> <a name="MaximumDuration" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.maximumDuration"></a>

```csharp
public string MaximumDuration { get; set; }
```

- *Type:* string

The maximum running time of the simulation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/simspaceweaver_simulation#maximum_duration SimspaceweaverSimulation#maximum_duration}

---

##### `SchemaS3Location`<sup>Optional</sup> <a name="SchemaS3Location" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.schemaS3Location"></a>

```csharp
public SimspaceweaverSimulationSchemaS3Location SchemaS3Location { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3Location">SimspaceweaverSimulationSchemaS3Location</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/simspaceweaver_simulation#schema_s3_location SimspaceweaverSimulation#schema_s3_location}.

---

##### `SnapshotS3Location`<sup>Optional</sup> <a name="SnapshotS3Location" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.snapshotS3Location"></a>

```csharp
public SimspaceweaverSimulationSnapshotS3Location SnapshotS3Location { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3Location">SimspaceweaverSimulationSnapshotS3Location</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/simspaceweaver_simulation#snapshot_s3_location SimspaceweaverSimulation#snapshot_s3_location}.

---

### SimspaceweaverSimulationSchemaS3Location <a name="SimspaceweaverSimulationSchemaS3Location" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3Location.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SimspaceweaverSimulationSchemaS3Location {
    string BucketName = null,
    string ObjectKey = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3Location.property.bucketName">BucketName</a></code> | <code>string</code> | The Schema S3 bucket name. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3Location.property.objectKey">ObjectKey</a></code> | <code>string</code> | This is the schema S3 object key, which includes the full path of "folders" from the bucket root to the schema. |

---

##### `BucketName`<sup>Optional</sup> <a name="BucketName" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3Location.property.bucketName"></a>

```csharp
public string BucketName { get; set; }
```

- *Type:* string

The Schema S3 bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/simspaceweaver_simulation#bucket_name SimspaceweaverSimulation#bucket_name}

---

##### `ObjectKey`<sup>Optional</sup> <a name="ObjectKey" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3Location.property.objectKey"></a>

```csharp
public string ObjectKey { get; set; }
```

- *Type:* string

This is the schema S3 object key, which includes the full path of "folders" from the bucket root to the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/simspaceweaver_simulation#object_key SimspaceweaverSimulation#object_key}

---

### SimspaceweaverSimulationSnapshotS3Location <a name="SimspaceweaverSimulationSnapshotS3Location" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3Location.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SimspaceweaverSimulationSnapshotS3Location {
    string BucketName = null,
    string ObjectKey = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3Location.property.bucketName">BucketName</a></code> | <code>string</code> | The Schema S3 bucket name. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3Location.property.objectKey">ObjectKey</a></code> | <code>string</code> | This is the schema S3 object key, which includes the full path of "folders" from the bucket root to the schema. |

---

##### `BucketName`<sup>Optional</sup> <a name="BucketName" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3Location.property.bucketName"></a>

```csharp
public string BucketName { get; set; }
```

- *Type:* string

The Schema S3 bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/simspaceweaver_simulation#bucket_name SimspaceweaverSimulation#bucket_name}

---

##### `ObjectKey`<sup>Optional</sup> <a name="ObjectKey" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3Location.property.objectKey"></a>

```csharp
public string ObjectKey { get; set; }
```

- *Type:* string

This is the schema S3 object key, which includes the full path of "folders" from the bucket root to the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/simspaceweaver_simulation#object_key SimspaceweaverSimulation#object_key}

---

## Classes <a name="Classes" id="Classes"></a>

### SimspaceweaverSimulationSchemaS3LocationOutputReference <a name="SimspaceweaverSimulationSchemaS3LocationOutputReference" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SimspaceweaverSimulationSchemaS3LocationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.resetBucketName">ResetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.resetObjectKey">ResetObjectKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucketName` <a name="ResetBucketName" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.resetBucketName"></a>

```csharp
private void ResetBucketName()
```

##### `ResetObjectKey` <a name="ResetObjectKey" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.resetObjectKey"></a>

```csharp
private void ResetObjectKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.property.bucketNameInput">BucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.property.objectKeyInput">ObjectKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.property.bucketName">BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.property.objectKey">ObjectKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3Location">SimspaceweaverSimulationSchemaS3Location</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.property.bucketNameInput"></a>

```csharp
public string BucketNameInput { get; }
```

- *Type:* string

---

##### `ObjectKeyInput`<sup>Optional</sup> <a name="ObjectKeyInput" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.property.objectKeyInput"></a>

```csharp
public string ObjectKeyInput { get; }
```

- *Type:* string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.property.bucketName"></a>

```csharp
public string BucketName { get; }
```

- *Type:* string

---

##### `ObjectKey`<sup>Required</sup> <a name="ObjectKey" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.property.objectKey"></a>

```csharp
public string ObjectKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SimspaceweaverSimulationSchemaS3Location InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3Location">SimspaceweaverSimulationSchemaS3Location</a>

---


### SimspaceweaverSimulationSnapshotS3LocationOutputReference <a name="SimspaceweaverSimulationSnapshotS3LocationOutputReference" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SimspaceweaverSimulationSnapshotS3LocationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.resetBucketName">ResetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.resetObjectKey">ResetObjectKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucketName` <a name="ResetBucketName" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.resetBucketName"></a>

```csharp
private void ResetBucketName()
```

##### `ResetObjectKey` <a name="ResetObjectKey" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.resetObjectKey"></a>

```csharp
private void ResetObjectKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.property.bucketNameInput">BucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.property.objectKeyInput">ObjectKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.property.bucketName">BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.property.objectKey">ObjectKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3Location">SimspaceweaverSimulationSnapshotS3Location</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.property.bucketNameInput"></a>

```csharp
public string BucketNameInput { get; }
```

- *Type:* string

---

##### `ObjectKeyInput`<sup>Optional</sup> <a name="ObjectKeyInput" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.property.objectKeyInput"></a>

```csharp
public string ObjectKeyInput { get; }
```

- *Type:* string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.property.bucketName"></a>

```csharp
public string BucketName { get; }
```

- *Type:* string

---

##### `ObjectKey`<sup>Required</sup> <a name="ObjectKey" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.property.objectKey"></a>

```csharp
public string ObjectKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SimspaceweaverSimulationSnapshotS3Location InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3Location">SimspaceweaverSimulationSnapshotS3Location</a>

---



