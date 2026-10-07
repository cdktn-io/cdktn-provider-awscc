# `scnDataIntegrationFlow` Submodule <a name="`scnDataIntegrationFlow` Submodule" id="@cdktn/provider-awscc.scnDataIntegrationFlow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ScnDataIntegrationFlow <a name="ScnDataIntegrationFlow" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/scn_data_integration_flow awscc_scn_data_integration_flow}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ScnDataIntegrationFlow(Construct Scope, string Id, ScnDataIntegrationFlowConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowConfig">ScnDataIntegrationFlowConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowConfig">ScnDataIntegrationFlowConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.putSources">PutSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.putTarget">PutTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.putTransformation">PutTransformation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSources` <a name="PutSources" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.putSources"></a>

```csharp
private void PutSources(IResolvable|ScnDataIntegrationFlowSources[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.putSources.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSources">ScnDataIntegrationFlowSources</a>[]

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.putTags"></a>

```csharp
private void PutTags(IResolvable|ScnDataIntegrationFlowTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTags">ScnDataIntegrationFlowTags</a>[]

---

##### `PutTarget` <a name="PutTarget" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.putTarget"></a>

```csharp
private void PutTarget(ScnDataIntegrationFlowTarget Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.putTarget.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTarget">ScnDataIntegrationFlowTarget</a>

---

##### `PutTransformation` <a name="PutTransformation" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.putTransformation"></a>

```csharp
private void PutTransformation(ScnDataIntegrationFlowTransformation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.putTransformation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformation">ScnDataIntegrationFlowTransformation</a>

---

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ScnDataIntegrationFlow resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ScnDataIntegrationFlow.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ScnDataIntegrationFlow.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ScnDataIntegrationFlow.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ScnDataIntegrationFlow.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ScnDataIntegrationFlow resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ScnDataIntegrationFlow to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ScnDataIntegrationFlow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/scn_data_integration_flow#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ScnDataIntegrationFlow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.createdTime">CreatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.lastModifiedTime">LastModifiedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.sources">Sources</a></code> | <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesList">ScnDataIntegrationFlowSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsList">ScnDataIntegrationFlowTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.target">Target</a></code> | <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference">ScnDataIntegrationFlowTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.transformation">Transformation</a></code> | <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference">ScnDataIntegrationFlowTransformationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.instanceIdInput">InstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.sourcesInput">SourcesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSources">ScnDataIntegrationFlowSources</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTags">ScnDataIntegrationFlowTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.targetInput">TargetInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTarget">ScnDataIntegrationFlowTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.transformationInput">TransformationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformation">ScnDataIntegrationFlowTransformation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.instanceId">InstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreatedTime`<sup>Required</sup> <a name="CreatedTime" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.createdTime"></a>

```csharp
public string CreatedTime { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LastModifiedTime`<sup>Required</sup> <a name="LastModifiedTime" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.lastModifiedTime"></a>

```csharp
public string LastModifiedTime { get; }
```

- *Type:* string

---

##### `Sources`<sup>Required</sup> <a name="Sources" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.sources"></a>

```csharp
public ScnDataIntegrationFlowSourcesList Sources { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesList">ScnDataIntegrationFlowSourcesList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.tags"></a>

```csharp
public ScnDataIntegrationFlowTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsList">ScnDataIntegrationFlowTagsList</a>

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.target"></a>

```csharp
public ScnDataIntegrationFlowTargetOutputReference Target { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference">ScnDataIntegrationFlowTargetOutputReference</a>

---

##### `Transformation`<sup>Required</sup> <a name="Transformation" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.transformation"></a>

```csharp
public ScnDataIntegrationFlowTransformationOutputReference Transformation { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference">ScnDataIntegrationFlowTransformationOutputReference</a>

---

##### `InstanceIdInput`<sup>Optional</sup> <a name="InstanceIdInput" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.instanceIdInput"></a>

```csharp
public string InstanceIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SourcesInput`<sup>Optional</sup> <a name="SourcesInput" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.sourcesInput"></a>

```csharp
public IResolvable|ScnDataIntegrationFlowSources[] SourcesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSources">ScnDataIntegrationFlowSources</a>[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.tagsInput"></a>

```csharp
public IResolvable|ScnDataIntegrationFlowTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTags">ScnDataIntegrationFlowTags</a>[]

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.targetInput"></a>

```csharp
public IResolvable|ScnDataIntegrationFlowTarget TargetInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTarget">ScnDataIntegrationFlowTarget</a>

---

##### `TransformationInput`<sup>Optional</sup> <a name="TransformationInput" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.transformationInput"></a>

```csharp
public IResolvable|ScnDataIntegrationFlowTransformation TransformationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformation">ScnDataIntegrationFlowTransformation</a>

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.instanceId"></a>

```csharp
public string InstanceId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ScnDataIntegrationFlowConfig <a name="ScnDataIntegrationFlowConfig" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ScnDataIntegrationFlowConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string InstanceId,
    string Name,
    IResolvable|ScnDataIntegrationFlowSources[] Sources,
    ScnDataIntegrationFlowTarget Target,
    ScnDataIntegrationFlowTransformation Transformation,
    IResolvable|ScnDataIntegrationFlowTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowConfig.property.instanceId">InstanceId</a></code> | <code>string</code> | The Amazon Web Services Supply Chain instance identifier. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowConfig.property.name">Name</a></code> | <code>string</code> | The name of the DataIntegrationFlow. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowConfig.property.sources">Sources</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSources">ScnDataIntegrationFlowSources</a>[]</code> | The source configurations for the DataIntegrationFlow. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowConfig.property.target">Target</a></code> | <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTarget">ScnDataIntegrationFlowTarget</a></code> | The DataIntegrationFlow target parameters. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowConfig.property.transformation">Transformation</a></code> | <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformation">ScnDataIntegrationFlowTransformation</a></code> | The DataIntegrationFlow transformation parameters. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTags">ScnDataIntegrationFlowTags</a>[]</code> | The tags for the DataIntegrationFlow. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowConfig.property.instanceId"></a>

```csharp
public string InstanceId { get; set; }
```

- *Type:* string

The Amazon Web Services Supply Chain instance identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/scn_data_integration_flow#instance_id ScnDataIntegrationFlow#instance_id}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the DataIntegrationFlow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/scn_data_integration_flow#name ScnDataIntegrationFlow#name}

---

##### `Sources`<sup>Required</sup> <a name="Sources" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowConfig.property.sources"></a>

```csharp
public IResolvable|ScnDataIntegrationFlowSources[] Sources { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSources">ScnDataIntegrationFlowSources</a>[]

The source configurations for the DataIntegrationFlow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/scn_data_integration_flow#sources ScnDataIntegrationFlow#sources}

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowConfig.property.target"></a>

```csharp
public ScnDataIntegrationFlowTarget Target { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTarget">ScnDataIntegrationFlowTarget</a>

The DataIntegrationFlow target parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/scn_data_integration_flow#target ScnDataIntegrationFlow#target}

---

##### `Transformation`<sup>Required</sup> <a name="Transformation" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowConfig.property.transformation"></a>

```csharp
public ScnDataIntegrationFlowTransformation Transformation { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformation">ScnDataIntegrationFlowTransformation</a>

The DataIntegrationFlow transformation parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/scn_data_integration_flow#transformation ScnDataIntegrationFlow#transformation}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowConfig.property.tags"></a>

```csharp
public IResolvable|ScnDataIntegrationFlowTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTags">ScnDataIntegrationFlowTags</a>[]

The tags for the DataIntegrationFlow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/scn_data_integration_flow#tags ScnDataIntegrationFlow#tags}

---

### ScnDataIntegrationFlowSources <a name="ScnDataIntegrationFlowSources" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSources.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ScnDataIntegrationFlowSources {
    string SourceName,
    string SourceType,
    ScnDataIntegrationFlowSourcesDatasetSource DatasetSource = null,
    ScnDataIntegrationFlowSourcesS3Source S3Source = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSources.property.sourceName">SourceName</a></code> | <code>string</code> | The source name that can be used as table alias in SQL transformation query. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSources.property.sourceType">SourceType</a></code> | <code>string</code> | The source type. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSources.property.datasetSource">DatasetSource</a></code> | <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSource">ScnDataIntegrationFlowSourcesDatasetSource</a></code> | The dataset source configuration parameters. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSources.property.s3Source">S3Source</a></code> | <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3Source">ScnDataIntegrationFlowSourcesS3Source</a></code> | The S3 source configuration parameters. |

---

##### `SourceName`<sup>Required</sup> <a name="SourceName" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSources.property.sourceName"></a>

```csharp
public string SourceName { get; set; }
```

- *Type:* string

The source name that can be used as table alias in SQL transformation query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/scn_data_integration_flow#source_name ScnDataIntegrationFlow#source_name}

---

##### `SourceType`<sup>Required</sup> <a name="SourceType" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSources.property.sourceType"></a>

```csharp
public string SourceType { get; set; }
```

- *Type:* string

The source type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/scn_data_integration_flow#source_type ScnDataIntegrationFlow#source_type}

---

##### `DatasetSource`<sup>Optional</sup> <a name="DatasetSource" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSources.property.datasetSource"></a>

```csharp
public ScnDataIntegrationFlowSourcesDatasetSource DatasetSource { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSource">ScnDataIntegrationFlowSourcesDatasetSource</a>

The dataset source configuration parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/scn_data_integration_flow#dataset_source ScnDataIntegrationFlow#dataset_source}

---

##### `S3Source`<sup>Optional</sup> <a name="S3Source" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSources.property.s3Source"></a>

```csharp
public ScnDataIntegrationFlowSourcesS3Source S3Source { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3Source">ScnDataIntegrationFlowSourcesS3Source</a>

The S3 source configuration parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/scn_data_integration_flow#s3_source ScnDataIntegrationFlow#s3_source}

---

### ScnDataIntegrationFlowSourcesDatasetSource <a name="ScnDataIntegrationFlowSourcesDatasetSource" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ScnDataIntegrationFlowSourcesDatasetSource {
    string DatasetIdentifier = null,
    ScnDataIntegrationFlowSourcesDatasetSourceOptions Options = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSource.property.datasetIdentifier">DatasetIdentifier</a></code> | <code>string</code> | The ARN of the dataset. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSource.property.options">Options</a></code> | <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptions">ScnDataIntegrationFlowSourcesDatasetSourceOptions</a></code> | The dataset options. |

---

##### `DatasetIdentifier`<sup>Optional</sup> <a name="DatasetIdentifier" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSource.property.datasetIdentifier"></a>

```csharp
public string DatasetIdentifier { get; set; }
```

- *Type:* string

The ARN of the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/scn_data_integration_flow#dataset_identifier ScnDataIntegrationFlow#dataset_identifier}

---

##### `Options`<sup>Optional</sup> <a name="Options" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSource.property.options"></a>

```csharp
public ScnDataIntegrationFlowSourcesDatasetSourceOptions Options { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptions">ScnDataIntegrationFlowSourcesDatasetSourceOptions</a>

The dataset options.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/scn_data_integration_flow#options ScnDataIntegrationFlow#options}

---

### ScnDataIntegrationFlowSourcesDatasetSourceOptions <a name="ScnDataIntegrationFlowSourcesDatasetSourceOptions" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ScnDataIntegrationFlowSourcesDatasetSourceOptions {
    bool|IResolvable DedupeRecords = null,
    ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategy DedupeStrategy = null,
    string LoadType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptions.property.dedupeRecords">DedupeRecords</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | The option to perform deduplication on data records sharing same primary key values. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptions.property.dedupeStrategy">DedupeStrategy</a></code> | <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategy">ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategy</a></code> | The deduplication strategy. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptions.property.loadType">LoadType</a></code> | <code>string</code> | The load type. |

---

##### `DedupeRecords`<sup>Optional</sup> <a name="DedupeRecords" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptions.property.dedupeRecords"></a>

```csharp
public bool|IResolvable DedupeRecords { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

The option to perform deduplication on data records sharing same primary key values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/scn_data_integration_flow#dedupe_records ScnDataIntegrationFlow#dedupe_records}

---

##### `DedupeStrategy`<sup>Optional</sup> <a name="DedupeStrategy" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptions.property.dedupeStrategy"></a>

```csharp
public ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategy DedupeStrategy { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategy">ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategy</a>

The deduplication strategy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/scn_data_integration_flow#dedupe_strategy ScnDataIntegrationFlow#dedupe_strategy}

---

##### `LoadType`<sup>Optional</sup> <a name="LoadType" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptions.property.loadType"></a>

```csharp
public string LoadType { get; set; }
```

- *Type:* string

The load type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/scn_data_integration_flow#load_type ScnDataIntegrationFlow#load_type}

---

### ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategy <a name="ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategy" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategy {
    ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriority FieldPriority = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategy.property.fieldPriority">FieldPriority</a></code> | <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriority">ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriority</a></code> | The field priority deduplication strategy configuration. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategy.property.type">Type</a></code> | <code>string</code> | The deduplication strategy type. |

---

##### `FieldPriority`<sup>Optional</sup> <a name="FieldPriority" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategy.property.fieldPriority"></a>

```csharp
public ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriority FieldPriority { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriority">ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriority</a>

The field priority deduplication strategy configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/scn_data_integration_flow#field_priority ScnDataIntegrationFlow#field_priority}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategy.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The deduplication strategy type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/scn_data_integration_flow#type ScnDataIntegrationFlow#type}

---

### ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriority <a name="ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriority" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriority"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriority.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriority {
    IResolvable|ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFields[] Fields = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriority.property.fields">Fields</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFields">ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFields</a>[]</code> | The list of field names and their sort order for deduplication. |

---

##### `Fields`<sup>Optional</sup> <a name="Fields" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriority.property.fields"></a>

```csharp
public IResolvable|ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFields[] Fields { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFields">ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFields</a>[]

The list of field names and their sort order for deduplication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/scn_data_integration_flow#fields ScnDataIntegrationFlow#fields}

---

### ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFields <a name="ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFields" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFields.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFields {
    string Name = null,
    string SortOrder = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFields.property.name">Name</a></code> | <code>string</code> | The name of the deduplication field. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFields.property.sortOrder">SortOrder</a></code> | <code>string</code> | The sort order. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFields.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the deduplication field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/scn_data_integration_flow#name ScnDataIntegrationFlow#name}

---

##### `SortOrder`<sup>Optional</sup> <a name="SortOrder" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFields.property.sortOrder"></a>

```csharp
public string SortOrder { get; set; }
```

- *Type:* string

The sort order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/scn_data_integration_flow#sort_order ScnDataIntegrationFlow#sort_order}

---

### ScnDataIntegrationFlowSourcesS3Source <a name="ScnDataIntegrationFlowSourcesS3Source" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3Source"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3Source.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ScnDataIntegrationFlowSourcesS3Source {
    string BucketName = null,
    ScnDataIntegrationFlowSourcesS3SourceOptions Options = null,
    string Prefix = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3Source.property.bucketName">BucketName</a></code> | <code>string</code> | The S3 bucket name. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3Source.property.options">Options</a></code> | <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptions">ScnDataIntegrationFlowSourcesS3SourceOptions</a></code> | The Amazon S3 options. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3Source.property.prefix">Prefix</a></code> | <code>string</code> | The S3 prefix. |

---

##### `BucketName`<sup>Optional</sup> <a name="BucketName" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3Source.property.bucketName"></a>

```csharp
public string BucketName { get; set; }
```

- *Type:* string

The S3 bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/scn_data_integration_flow#bucket_name ScnDataIntegrationFlow#bucket_name}

---

##### `Options`<sup>Optional</sup> <a name="Options" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3Source.property.options"></a>

```csharp
public ScnDataIntegrationFlowSourcesS3SourceOptions Options { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptions">ScnDataIntegrationFlowSourcesS3SourceOptions</a>

The Amazon S3 options.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/scn_data_integration_flow#options ScnDataIntegrationFlow#options}

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3Source.property.prefix"></a>

```csharp
public string Prefix { get; set; }
```

- *Type:* string

The S3 prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/scn_data_integration_flow#prefix ScnDataIntegrationFlow#prefix}

---

### ScnDataIntegrationFlowSourcesS3SourceOptions <a name="ScnDataIntegrationFlowSourcesS3SourceOptions" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ScnDataIntegrationFlowSourcesS3SourceOptions {
    string FileType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptions.property.fileType">FileType</a></code> | <code>string</code> | The file type. |

---

##### `FileType`<sup>Optional</sup> <a name="FileType" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptions.property.fileType"></a>

```csharp
public string FileType { get; set; }
```

- *Type:* string

The file type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/scn_data_integration_flow#file_type ScnDataIntegrationFlow#file_type}

---

### ScnDataIntegrationFlowTags <a name="ScnDataIntegrationFlowTags" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ScnDataIntegrationFlowTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/scn_data_integration_flow#key ScnDataIntegrationFlow#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/scn_data_integration_flow#value ScnDataIntegrationFlow#value}

---

### ScnDataIntegrationFlowTarget <a name="ScnDataIntegrationFlowTarget" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTarget.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ScnDataIntegrationFlowTarget {
    string TargetType,
    ScnDataIntegrationFlowTargetDatasetTarget DatasetTarget = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTarget.property.targetType">TargetType</a></code> | <code>string</code> | The target type. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTarget.property.datasetTarget">DatasetTarget</a></code> | <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTarget">ScnDataIntegrationFlowTargetDatasetTarget</a></code> | The dataset target configuration parameters. |

---

##### `TargetType`<sup>Required</sup> <a name="TargetType" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTarget.property.targetType"></a>

```csharp
public string TargetType { get; set; }
```

- *Type:* string

The target type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/scn_data_integration_flow#target_type ScnDataIntegrationFlow#target_type}

---

##### `DatasetTarget`<sup>Optional</sup> <a name="DatasetTarget" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTarget.property.datasetTarget"></a>

```csharp
public ScnDataIntegrationFlowTargetDatasetTarget DatasetTarget { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTarget">ScnDataIntegrationFlowTargetDatasetTarget</a>

The dataset target configuration parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/scn_data_integration_flow#dataset_target ScnDataIntegrationFlow#dataset_target}

---

### ScnDataIntegrationFlowTargetDatasetTarget <a name="ScnDataIntegrationFlowTargetDatasetTarget" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTarget.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ScnDataIntegrationFlowTargetDatasetTarget {
    string DatasetIdentifier = null,
    ScnDataIntegrationFlowTargetDatasetTargetOptions Options = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTarget.property.datasetIdentifier">DatasetIdentifier</a></code> | <code>string</code> | The dataset ARN. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTarget.property.options">Options</a></code> | <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptions">ScnDataIntegrationFlowTargetDatasetTargetOptions</a></code> | The dataset options. |

---

##### `DatasetIdentifier`<sup>Optional</sup> <a name="DatasetIdentifier" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTarget.property.datasetIdentifier"></a>

```csharp
public string DatasetIdentifier { get; set; }
```

- *Type:* string

The dataset ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/scn_data_integration_flow#dataset_identifier ScnDataIntegrationFlow#dataset_identifier}

---

##### `Options`<sup>Optional</sup> <a name="Options" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTarget.property.options"></a>

```csharp
public ScnDataIntegrationFlowTargetDatasetTargetOptions Options { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptions">ScnDataIntegrationFlowTargetDatasetTargetOptions</a>

The dataset options.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/scn_data_integration_flow#options ScnDataIntegrationFlow#options}

---

### ScnDataIntegrationFlowTargetDatasetTargetOptions <a name="ScnDataIntegrationFlowTargetDatasetTargetOptions" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ScnDataIntegrationFlowTargetDatasetTargetOptions {
    bool|IResolvable DedupeRecords = null,
    ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategy DedupeStrategy = null,
    string LoadType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptions.property.dedupeRecords">DedupeRecords</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | The option to perform deduplication on data records sharing same primary key values. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptions.property.dedupeStrategy">DedupeStrategy</a></code> | <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategy">ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategy</a></code> | The deduplication strategy. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptions.property.loadType">LoadType</a></code> | <code>string</code> | The load type. |

---

##### `DedupeRecords`<sup>Optional</sup> <a name="DedupeRecords" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptions.property.dedupeRecords"></a>

```csharp
public bool|IResolvable DedupeRecords { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

The option to perform deduplication on data records sharing same primary key values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/scn_data_integration_flow#dedupe_records ScnDataIntegrationFlow#dedupe_records}

---

##### `DedupeStrategy`<sup>Optional</sup> <a name="DedupeStrategy" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptions.property.dedupeStrategy"></a>

```csharp
public ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategy DedupeStrategy { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategy">ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategy</a>

The deduplication strategy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/scn_data_integration_flow#dedupe_strategy ScnDataIntegrationFlow#dedupe_strategy}

---

##### `LoadType`<sup>Optional</sup> <a name="LoadType" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptions.property.loadType"></a>

```csharp
public string LoadType { get; set; }
```

- *Type:* string

The load type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/scn_data_integration_flow#load_type ScnDataIntegrationFlow#load_type}

---

### ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategy <a name="ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategy" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategy {
    ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriority FieldPriority = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategy.property.fieldPriority">FieldPriority</a></code> | <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriority">ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriority</a></code> | The field priority deduplication strategy configuration. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategy.property.type">Type</a></code> | <code>string</code> | The deduplication strategy type. |

---

##### `FieldPriority`<sup>Optional</sup> <a name="FieldPriority" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategy.property.fieldPriority"></a>

```csharp
public ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriority FieldPriority { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriority">ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriority</a>

The field priority deduplication strategy configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/scn_data_integration_flow#field_priority ScnDataIntegrationFlow#field_priority}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategy.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The deduplication strategy type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/scn_data_integration_flow#type ScnDataIntegrationFlow#type}

---

### ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriority <a name="ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriority" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriority"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriority.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriority {
    IResolvable|ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFields[] Fields = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriority.property.fields">Fields</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFields">ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFields</a>[]</code> | The list of field names and their sort order for deduplication. |

---

##### `Fields`<sup>Optional</sup> <a name="Fields" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriority.property.fields"></a>

```csharp
public IResolvable|ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFields[] Fields { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFields">ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFields</a>[]

The list of field names and their sort order for deduplication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/scn_data_integration_flow#fields ScnDataIntegrationFlow#fields}

---

### ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFields <a name="ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFields" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFields.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFields {
    string Name = null,
    string SortOrder = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFields.property.name">Name</a></code> | <code>string</code> | The name of the deduplication field. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFields.property.sortOrder">SortOrder</a></code> | <code>string</code> | The sort order. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFields.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the deduplication field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/scn_data_integration_flow#name ScnDataIntegrationFlow#name}

---

##### `SortOrder`<sup>Optional</sup> <a name="SortOrder" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFields.property.sortOrder"></a>

```csharp
public string SortOrder { get; set; }
```

- *Type:* string

The sort order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/scn_data_integration_flow#sort_order ScnDataIntegrationFlow#sort_order}

---

### ScnDataIntegrationFlowTransformation <a name="ScnDataIntegrationFlowTransformation" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ScnDataIntegrationFlowTransformation {
    string TransformationType,
    ScnDataIntegrationFlowTransformationSqlTransformation SqlTransformation = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformation.property.transformationType">TransformationType</a></code> | <code>string</code> | The transformation type. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformation.property.sqlTransformation">SqlTransformation</a></code> | <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformation">ScnDataIntegrationFlowTransformationSqlTransformation</a></code> | The SQL transformation configuration parameters. |

---

##### `TransformationType`<sup>Required</sup> <a name="TransformationType" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformation.property.transformationType"></a>

```csharp
public string TransformationType { get; set; }
```

- *Type:* string

The transformation type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/scn_data_integration_flow#transformation_type ScnDataIntegrationFlow#transformation_type}

---

##### `SqlTransformation`<sup>Optional</sup> <a name="SqlTransformation" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformation.property.sqlTransformation"></a>

```csharp
public ScnDataIntegrationFlowTransformationSqlTransformation SqlTransformation { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformation">ScnDataIntegrationFlowTransformationSqlTransformation</a>

The SQL transformation configuration parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/scn_data_integration_flow#sql_transformation ScnDataIntegrationFlow#sql_transformation}

---

### ScnDataIntegrationFlowTransformationSqlTransformation <a name="ScnDataIntegrationFlowTransformationSqlTransformation" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ScnDataIntegrationFlowTransformationSqlTransformation {
    string Query = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformation.property.query">Query</a></code> | <code>string</code> | The transformation SQL query body based on SparkSQL. |

---

##### `Query`<sup>Optional</sup> <a name="Query" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformation.property.query"></a>

```csharp
public string Query { get; set; }
```

- *Type:* string

The transformation SQL query body based on SparkSQL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/scn_data_integration_flow#query ScnDataIntegrationFlow#query}

---

## Classes <a name="Classes" id="Classes"></a>

### ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList <a name="ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList.get"></a>

```csharp
private ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFields">ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFields</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList.property.internalValue"></a>

```csharp
public IResolvable|ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFields[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFields">ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFields</a>[]

---


### ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference <a name="ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.resetSortOrder">ResetSortOrder</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetSortOrder` <a name="ResetSortOrder" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.resetSortOrder"></a>

```csharp
private void ResetSortOrder()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.property.sortOrderInput">SortOrderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.property.sortOrder">SortOrder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFields">ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFields</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SortOrderInput`<sup>Optional</sup> <a name="SortOrderInput" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.property.sortOrderInput"></a>

```csharp
public string SortOrderInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SortOrder`<sup>Required</sup> <a name="SortOrder" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.property.sortOrder"></a>

```csharp
public string SortOrder { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFields InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFields">ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFields</a>

---


### ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference <a name="ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.putFields">PutFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.resetFields">ResetFields</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFields` <a name="PutFields" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.putFields"></a>

```csharp
private void PutFields(IResolvable|ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFields[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.putFields.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFields">ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFields</a>[]

---

##### `ResetFields` <a name="ResetFields" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.resetFields"></a>

```csharp
private void ResetFields()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.property.fields">Fields</a></code> | <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList">ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.property.fieldsInput">FieldsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFields">ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFields</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriority">ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriority</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Fields`<sup>Required</sup> <a name="Fields" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.property.fields"></a>

```csharp
public ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList Fields { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList">ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList</a>

---

##### `FieldsInput`<sup>Optional</sup> <a name="FieldsInput" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.property.fieldsInput"></a>

```csharp
public IResolvable|ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFields[] FieldsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFields">ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFields</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriority InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriority">ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriority</a>

---


### ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference <a name="ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.putFieldPriority">PutFieldPriority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.resetFieldPriority">ResetFieldPriority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFieldPriority` <a name="PutFieldPriority" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.putFieldPriority"></a>

```csharp
private void PutFieldPriority(ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriority Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.putFieldPriority.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriority">ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriority</a>

---

##### `ResetFieldPriority` <a name="ResetFieldPriority" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.resetFieldPriority"></a>

```csharp
private void ResetFieldPriority()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.property.fieldPriority">FieldPriority</a></code> | <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference">ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.property.fieldPriorityInput">FieldPriorityInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriority">ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategy">ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FieldPriority`<sup>Required</sup> <a name="FieldPriority" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.property.fieldPriority"></a>

```csharp
public ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference FieldPriority { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference">ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference</a>

---

##### `FieldPriorityInput`<sup>Optional</sup> <a name="FieldPriorityInput" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.property.fieldPriorityInput"></a>

```csharp
public IResolvable|ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriority FieldPriorityInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriority">ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriority</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategy InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategy">ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategy</a>

---


### ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference <a name="ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.putDedupeStrategy">PutDedupeStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.resetDedupeRecords">ResetDedupeRecords</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.resetDedupeStrategy">ResetDedupeStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.resetLoadType">ResetLoadType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDedupeStrategy` <a name="PutDedupeStrategy" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.putDedupeStrategy"></a>

```csharp
private void PutDedupeStrategy(ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.putDedupeStrategy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategy">ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategy</a>

---

##### `ResetDedupeRecords` <a name="ResetDedupeRecords" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.resetDedupeRecords"></a>

```csharp
private void ResetDedupeRecords()
```

##### `ResetDedupeStrategy` <a name="ResetDedupeStrategy" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.resetDedupeStrategy"></a>

```csharp
private void ResetDedupeStrategy()
```

##### `ResetLoadType` <a name="ResetLoadType" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.resetLoadType"></a>

```csharp
private void ResetLoadType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.property.dedupeStrategy">DedupeStrategy</a></code> | <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference">ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.property.dedupeRecordsInput">DedupeRecordsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.property.dedupeStrategyInput">DedupeStrategyInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategy">ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.property.loadTypeInput">LoadTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.property.dedupeRecords">DedupeRecords</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.property.loadType">LoadType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptions">ScnDataIntegrationFlowSourcesDatasetSourceOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DedupeStrategy`<sup>Required</sup> <a name="DedupeStrategy" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.property.dedupeStrategy"></a>

```csharp
public ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference DedupeStrategy { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference">ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference</a>

---

##### `DedupeRecordsInput`<sup>Optional</sup> <a name="DedupeRecordsInput" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.property.dedupeRecordsInput"></a>

```csharp
public bool|IResolvable DedupeRecordsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DedupeStrategyInput`<sup>Optional</sup> <a name="DedupeStrategyInput" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.property.dedupeStrategyInput"></a>

```csharp
public IResolvable|ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategy DedupeStrategyInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategy">ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategy</a>

---

##### `LoadTypeInput`<sup>Optional</sup> <a name="LoadTypeInput" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.property.loadTypeInput"></a>

```csharp
public string LoadTypeInput { get; }
```

- *Type:* string

---

##### `DedupeRecords`<sup>Required</sup> <a name="DedupeRecords" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.property.dedupeRecords"></a>

```csharp
public bool|IResolvable DedupeRecords { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `LoadType`<sup>Required</sup> <a name="LoadType" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.property.loadType"></a>

```csharp
public string LoadType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ScnDataIntegrationFlowSourcesDatasetSourceOptions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptions">ScnDataIntegrationFlowSourcesDatasetSourceOptions</a>

---


### ScnDataIntegrationFlowSourcesDatasetSourceOutputReference <a name="ScnDataIntegrationFlowSourcesDatasetSourceOutputReference" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ScnDataIntegrationFlowSourcesDatasetSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.putOptions">PutOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.resetDatasetIdentifier">ResetDatasetIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.resetOptions">ResetOptions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOptions` <a name="PutOptions" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.putOptions"></a>

```csharp
private void PutOptions(ScnDataIntegrationFlowSourcesDatasetSourceOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.putOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptions">ScnDataIntegrationFlowSourcesDatasetSourceOptions</a>

---

##### `ResetDatasetIdentifier` <a name="ResetDatasetIdentifier" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.resetDatasetIdentifier"></a>

```csharp
private void ResetDatasetIdentifier()
```

##### `ResetOptions` <a name="ResetOptions" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.resetOptions"></a>

```csharp
private void ResetOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.property.options">Options</a></code> | <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference">ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.property.datasetIdentifierInput">DatasetIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.property.optionsInput">OptionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptions">ScnDataIntegrationFlowSourcesDatasetSourceOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.property.datasetIdentifier">DatasetIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSource">ScnDataIntegrationFlowSourcesDatasetSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.property.options"></a>

```csharp
public ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference Options { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference">ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference</a>

---

##### `DatasetIdentifierInput`<sup>Optional</sup> <a name="DatasetIdentifierInput" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.property.datasetIdentifierInput"></a>

```csharp
public string DatasetIdentifierInput { get; }
```

- *Type:* string

---

##### `OptionsInput`<sup>Optional</sup> <a name="OptionsInput" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.property.optionsInput"></a>

```csharp
public IResolvable|ScnDataIntegrationFlowSourcesDatasetSourceOptions OptionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptions">ScnDataIntegrationFlowSourcesDatasetSourceOptions</a>

---

##### `DatasetIdentifier`<sup>Required</sup> <a name="DatasetIdentifier" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.property.datasetIdentifier"></a>

```csharp
public string DatasetIdentifier { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ScnDataIntegrationFlowSourcesDatasetSource InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSource">ScnDataIntegrationFlowSourcesDatasetSource</a>

---


### ScnDataIntegrationFlowSourcesList <a name="ScnDataIntegrationFlowSourcesList" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ScnDataIntegrationFlowSourcesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesList.get"></a>

```csharp
private ScnDataIntegrationFlowSourcesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSources">ScnDataIntegrationFlowSources</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesList.property.internalValue"></a>

```csharp
public IResolvable|ScnDataIntegrationFlowSources[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSources">ScnDataIntegrationFlowSources</a>[]

---


### ScnDataIntegrationFlowSourcesOutputReference <a name="ScnDataIntegrationFlowSourcesOutputReference" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ScnDataIntegrationFlowSourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.putDatasetSource">PutDatasetSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.putS3Source">PutS3Source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.resetDatasetSource">ResetDatasetSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.resetS3Source">ResetS3Source</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDatasetSource` <a name="PutDatasetSource" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.putDatasetSource"></a>

```csharp
private void PutDatasetSource(ScnDataIntegrationFlowSourcesDatasetSource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.putDatasetSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSource">ScnDataIntegrationFlowSourcesDatasetSource</a>

---

##### `PutS3Source` <a name="PutS3Source" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.putS3Source"></a>

```csharp
private void PutS3Source(ScnDataIntegrationFlowSourcesS3Source Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.putS3Source.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3Source">ScnDataIntegrationFlowSourcesS3Source</a>

---

##### `ResetDatasetSource` <a name="ResetDatasetSource" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.resetDatasetSource"></a>

```csharp
private void ResetDatasetSource()
```

##### `ResetS3Source` <a name="ResetS3Source" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.resetS3Source"></a>

```csharp
private void ResetS3Source()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.property.datasetSource">DatasetSource</a></code> | <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference">ScnDataIntegrationFlowSourcesDatasetSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.property.s3Source">S3Source</a></code> | <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference">ScnDataIntegrationFlowSourcesS3SourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.property.datasetSourceInput">DatasetSourceInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSource">ScnDataIntegrationFlowSourcesDatasetSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.property.s3SourceInput">S3SourceInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3Source">ScnDataIntegrationFlowSourcesS3Source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.property.sourceNameInput">SourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.property.sourceTypeInput">SourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.property.sourceName">SourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.property.sourceType">SourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSources">ScnDataIntegrationFlowSources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatasetSource`<sup>Required</sup> <a name="DatasetSource" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.property.datasetSource"></a>

```csharp
public ScnDataIntegrationFlowSourcesDatasetSourceOutputReference DatasetSource { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference">ScnDataIntegrationFlowSourcesDatasetSourceOutputReference</a>

---

##### `S3Source`<sup>Required</sup> <a name="S3Source" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.property.s3Source"></a>

```csharp
public ScnDataIntegrationFlowSourcesS3SourceOutputReference S3Source { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference">ScnDataIntegrationFlowSourcesS3SourceOutputReference</a>

---

##### `DatasetSourceInput`<sup>Optional</sup> <a name="DatasetSourceInput" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.property.datasetSourceInput"></a>

```csharp
public IResolvable|ScnDataIntegrationFlowSourcesDatasetSource DatasetSourceInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSource">ScnDataIntegrationFlowSourcesDatasetSource</a>

---

##### `S3SourceInput`<sup>Optional</sup> <a name="S3SourceInput" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.property.s3SourceInput"></a>

```csharp
public IResolvable|ScnDataIntegrationFlowSourcesS3Source S3SourceInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3Source">ScnDataIntegrationFlowSourcesS3Source</a>

---

##### `SourceNameInput`<sup>Optional</sup> <a name="SourceNameInput" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.property.sourceNameInput"></a>

```csharp
public string SourceNameInput { get; }
```

- *Type:* string

---

##### `SourceTypeInput`<sup>Optional</sup> <a name="SourceTypeInput" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.property.sourceTypeInput"></a>

```csharp
public string SourceTypeInput { get; }
```

- *Type:* string

---

##### `SourceName`<sup>Required</sup> <a name="SourceName" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.property.sourceName"></a>

```csharp
public string SourceName { get; }
```

- *Type:* string

---

##### `SourceType`<sup>Required</sup> <a name="SourceType" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.property.sourceType"></a>

```csharp
public string SourceType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ScnDataIntegrationFlowSources InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSources">ScnDataIntegrationFlowSources</a>

---


### ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference <a name="ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.resetFileType">ResetFileType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFileType` <a name="ResetFileType" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.resetFileType"></a>

```csharp
private void ResetFileType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.property.fileTypeInput">FileTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.property.fileType">FileType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptions">ScnDataIntegrationFlowSourcesS3SourceOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FileTypeInput`<sup>Optional</sup> <a name="FileTypeInput" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.property.fileTypeInput"></a>

```csharp
public string FileTypeInput { get; }
```

- *Type:* string

---

##### `FileType`<sup>Required</sup> <a name="FileType" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.property.fileType"></a>

```csharp
public string FileType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ScnDataIntegrationFlowSourcesS3SourceOptions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptions">ScnDataIntegrationFlowSourcesS3SourceOptions</a>

---


### ScnDataIntegrationFlowSourcesS3SourceOutputReference <a name="ScnDataIntegrationFlowSourcesS3SourceOutputReference" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ScnDataIntegrationFlowSourcesS3SourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.putOptions">PutOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.resetBucketName">ResetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.resetOptions">ResetOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOptions` <a name="PutOptions" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.putOptions"></a>

```csharp
private void PutOptions(ScnDataIntegrationFlowSourcesS3SourceOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.putOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptions">ScnDataIntegrationFlowSourcesS3SourceOptions</a>

---

##### `ResetBucketName` <a name="ResetBucketName" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.resetBucketName"></a>

```csharp
private void ResetBucketName()
```

##### `ResetOptions` <a name="ResetOptions" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.resetOptions"></a>

```csharp
private void ResetOptions()
```

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.resetPrefix"></a>

```csharp
private void ResetPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.property.options">Options</a></code> | <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference">ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.property.bucketNameInput">BucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.property.optionsInput">OptionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptions">ScnDataIntegrationFlowSourcesS3SourceOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.property.prefixInput">PrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.property.bucketName">BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3Source">ScnDataIntegrationFlowSourcesS3Source</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.property.options"></a>

```csharp
public ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference Options { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference">ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference</a>

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.property.bucketNameInput"></a>

```csharp
public string BucketNameInput { get; }
```

- *Type:* string

---

##### `OptionsInput`<sup>Optional</sup> <a name="OptionsInput" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.property.optionsInput"></a>

```csharp
public IResolvable|ScnDataIntegrationFlowSourcesS3SourceOptions OptionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptions">ScnDataIntegrationFlowSourcesS3SourceOptions</a>

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.property.prefixInput"></a>

```csharp
public string PrefixInput { get; }
```

- *Type:* string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.property.bucketName"></a>

```csharp
public string BucketName { get; }
```

- *Type:* string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ScnDataIntegrationFlowSourcesS3Source InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3Source">ScnDataIntegrationFlowSourcesS3Source</a>

---


### ScnDataIntegrationFlowTagsList <a name="ScnDataIntegrationFlowTagsList" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ScnDataIntegrationFlowTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsList.get"></a>

```csharp
private ScnDataIntegrationFlowTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTags">ScnDataIntegrationFlowTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsList.property.internalValue"></a>

```csharp
public IResolvable|ScnDataIntegrationFlowTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTags">ScnDataIntegrationFlowTags</a>[]

---


### ScnDataIntegrationFlowTagsOutputReference <a name="ScnDataIntegrationFlowTagsOutputReference" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ScnDataIntegrationFlowTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTags">ScnDataIntegrationFlowTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ScnDataIntegrationFlowTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTags">ScnDataIntegrationFlowTags</a>

---


### ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList <a name="ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList.get"></a>

```csharp
private ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFields">ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFields</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList.property.internalValue"></a>

```csharp
public IResolvable|ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFields[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFields">ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFields</a>[]

---


### ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference <a name="ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.resetSortOrder">ResetSortOrder</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetSortOrder` <a name="ResetSortOrder" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.resetSortOrder"></a>

```csharp
private void ResetSortOrder()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.property.sortOrderInput">SortOrderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.property.sortOrder">SortOrder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFields">ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFields</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SortOrderInput`<sup>Optional</sup> <a name="SortOrderInput" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.property.sortOrderInput"></a>

```csharp
public string SortOrderInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SortOrder`<sup>Required</sup> <a name="SortOrder" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.property.sortOrder"></a>

```csharp
public string SortOrder { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFields InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFields">ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFields</a>

---


### ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference <a name="ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.putFields">PutFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.resetFields">ResetFields</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFields` <a name="PutFields" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.putFields"></a>

```csharp
private void PutFields(IResolvable|ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFields[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.putFields.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFields">ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFields</a>[]

---

##### `ResetFields` <a name="ResetFields" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.resetFields"></a>

```csharp
private void ResetFields()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.property.fields">Fields</a></code> | <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList">ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.property.fieldsInput">FieldsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFields">ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFields</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriority">ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriority</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Fields`<sup>Required</sup> <a name="Fields" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.property.fields"></a>

```csharp
public ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList Fields { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList">ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList</a>

---

##### `FieldsInput`<sup>Optional</sup> <a name="FieldsInput" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.property.fieldsInput"></a>

```csharp
public IResolvable|ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFields[] FieldsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFields">ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFields</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriority InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriority">ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriority</a>

---


### ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference <a name="ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.putFieldPriority">PutFieldPriority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.resetFieldPriority">ResetFieldPriority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFieldPriority` <a name="PutFieldPriority" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.putFieldPriority"></a>

```csharp
private void PutFieldPriority(ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriority Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.putFieldPriority.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriority">ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriority</a>

---

##### `ResetFieldPriority` <a name="ResetFieldPriority" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.resetFieldPriority"></a>

```csharp
private void ResetFieldPriority()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.property.fieldPriority">FieldPriority</a></code> | <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference">ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.property.fieldPriorityInput">FieldPriorityInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriority">ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategy">ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FieldPriority`<sup>Required</sup> <a name="FieldPriority" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.property.fieldPriority"></a>

```csharp
public ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference FieldPriority { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference">ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference</a>

---

##### `FieldPriorityInput`<sup>Optional</sup> <a name="FieldPriorityInput" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.property.fieldPriorityInput"></a>

```csharp
public IResolvable|ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriority FieldPriorityInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriority">ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriority</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategy InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategy">ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategy</a>

---


### ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference <a name="ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.putDedupeStrategy">PutDedupeStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.resetDedupeRecords">ResetDedupeRecords</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.resetDedupeStrategy">ResetDedupeStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.resetLoadType">ResetLoadType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDedupeStrategy` <a name="PutDedupeStrategy" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.putDedupeStrategy"></a>

```csharp
private void PutDedupeStrategy(ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.putDedupeStrategy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategy">ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategy</a>

---

##### `ResetDedupeRecords` <a name="ResetDedupeRecords" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.resetDedupeRecords"></a>

```csharp
private void ResetDedupeRecords()
```

##### `ResetDedupeStrategy` <a name="ResetDedupeStrategy" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.resetDedupeStrategy"></a>

```csharp
private void ResetDedupeStrategy()
```

##### `ResetLoadType` <a name="ResetLoadType" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.resetLoadType"></a>

```csharp
private void ResetLoadType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.property.dedupeStrategy">DedupeStrategy</a></code> | <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference">ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.property.dedupeRecordsInput">DedupeRecordsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.property.dedupeStrategyInput">DedupeStrategyInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategy">ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.property.loadTypeInput">LoadTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.property.dedupeRecords">DedupeRecords</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.property.loadType">LoadType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptions">ScnDataIntegrationFlowTargetDatasetTargetOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DedupeStrategy`<sup>Required</sup> <a name="DedupeStrategy" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.property.dedupeStrategy"></a>

```csharp
public ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference DedupeStrategy { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference">ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference</a>

---

##### `DedupeRecordsInput`<sup>Optional</sup> <a name="DedupeRecordsInput" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.property.dedupeRecordsInput"></a>

```csharp
public bool|IResolvable DedupeRecordsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DedupeStrategyInput`<sup>Optional</sup> <a name="DedupeStrategyInput" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.property.dedupeStrategyInput"></a>

```csharp
public IResolvable|ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategy DedupeStrategyInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategy">ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategy</a>

---

##### `LoadTypeInput`<sup>Optional</sup> <a name="LoadTypeInput" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.property.loadTypeInput"></a>

```csharp
public string LoadTypeInput { get; }
```

- *Type:* string

---

##### `DedupeRecords`<sup>Required</sup> <a name="DedupeRecords" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.property.dedupeRecords"></a>

```csharp
public bool|IResolvable DedupeRecords { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `LoadType`<sup>Required</sup> <a name="LoadType" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.property.loadType"></a>

```csharp
public string LoadType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ScnDataIntegrationFlowTargetDatasetTargetOptions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptions">ScnDataIntegrationFlowTargetDatasetTargetOptions</a>

---


### ScnDataIntegrationFlowTargetDatasetTargetOutputReference <a name="ScnDataIntegrationFlowTargetDatasetTargetOutputReference" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ScnDataIntegrationFlowTargetDatasetTargetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.putOptions">PutOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.resetDatasetIdentifier">ResetDatasetIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.resetOptions">ResetOptions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOptions` <a name="PutOptions" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.putOptions"></a>

```csharp
private void PutOptions(ScnDataIntegrationFlowTargetDatasetTargetOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.putOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptions">ScnDataIntegrationFlowTargetDatasetTargetOptions</a>

---

##### `ResetDatasetIdentifier` <a name="ResetDatasetIdentifier" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.resetDatasetIdentifier"></a>

```csharp
private void ResetDatasetIdentifier()
```

##### `ResetOptions` <a name="ResetOptions" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.resetOptions"></a>

```csharp
private void ResetOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.property.options">Options</a></code> | <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference">ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.property.datasetIdentifierInput">DatasetIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.property.optionsInput">OptionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptions">ScnDataIntegrationFlowTargetDatasetTargetOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.property.datasetIdentifier">DatasetIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTarget">ScnDataIntegrationFlowTargetDatasetTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.property.options"></a>

```csharp
public ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference Options { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference">ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference</a>

---

##### `DatasetIdentifierInput`<sup>Optional</sup> <a name="DatasetIdentifierInput" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.property.datasetIdentifierInput"></a>

```csharp
public string DatasetIdentifierInput { get; }
```

- *Type:* string

---

##### `OptionsInput`<sup>Optional</sup> <a name="OptionsInput" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.property.optionsInput"></a>

```csharp
public IResolvable|ScnDataIntegrationFlowTargetDatasetTargetOptions OptionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptions">ScnDataIntegrationFlowTargetDatasetTargetOptions</a>

---

##### `DatasetIdentifier`<sup>Required</sup> <a name="DatasetIdentifier" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.property.datasetIdentifier"></a>

```csharp
public string DatasetIdentifier { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ScnDataIntegrationFlowTargetDatasetTarget InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTarget">ScnDataIntegrationFlowTargetDatasetTarget</a>

---


### ScnDataIntegrationFlowTargetOutputReference <a name="ScnDataIntegrationFlowTargetOutputReference" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ScnDataIntegrationFlowTargetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.putDatasetTarget">PutDatasetTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.resetDatasetTarget">ResetDatasetTarget</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDatasetTarget` <a name="PutDatasetTarget" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.putDatasetTarget"></a>

```csharp
private void PutDatasetTarget(ScnDataIntegrationFlowTargetDatasetTarget Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.putDatasetTarget.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTarget">ScnDataIntegrationFlowTargetDatasetTarget</a>

---

##### `ResetDatasetTarget` <a name="ResetDatasetTarget" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.resetDatasetTarget"></a>

```csharp
private void ResetDatasetTarget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.property.datasetTarget">DatasetTarget</a></code> | <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference">ScnDataIntegrationFlowTargetDatasetTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.property.datasetTargetInput">DatasetTargetInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTarget">ScnDataIntegrationFlowTargetDatasetTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.property.targetTypeInput">TargetTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.property.targetType">TargetType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTarget">ScnDataIntegrationFlowTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatasetTarget`<sup>Required</sup> <a name="DatasetTarget" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.property.datasetTarget"></a>

```csharp
public ScnDataIntegrationFlowTargetDatasetTargetOutputReference DatasetTarget { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference">ScnDataIntegrationFlowTargetDatasetTargetOutputReference</a>

---

##### `DatasetTargetInput`<sup>Optional</sup> <a name="DatasetTargetInput" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.property.datasetTargetInput"></a>

```csharp
public IResolvable|ScnDataIntegrationFlowTargetDatasetTarget DatasetTargetInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTarget">ScnDataIntegrationFlowTargetDatasetTarget</a>

---

##### `TargetTypeInput`<sup>Optional</sup> <a name="TargetTypeInput" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.property.targetTypeInput"></a>

```csharp
public string TargetTypeInput { get; }
```

- *Type:* string

---

##### `TargetType`<sup>Required</sup> <a name="TargetType" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.property.targetType"></a>

```csharp
public string TargetType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ScnDataIntegrationFlowTarget InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTarget">ScnDataIntegrationFlowTarget</a>

---


### ScnDataIntegrationFlowTransformationOutputReference <a name="ScnDataIntegrationFlowTransformationOutputReference" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ScnDataIntegrationFlowTransformationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.putSqlTransformation">PutSqlTransformation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.resetSqlTransformation">ResetSqlTransformation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSqlTransformation` <a name="PutSqlTransformation" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.putSqlTransformation"></a>

```csharp
private void PutSqlTransformation(ScnDataIntegrationFlowTransformationSqlTransformation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.putSqlTransformation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformation">ScnDataIntegrationFlowTransformationSqlTransformation</a>

---

##### `ResetSqlTransformation` <a name="ResetSqlTransformation" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.resetSqlTransformation"></a>

```csharp
private void ResetSqlTransformation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.property.sqlTransformation">SqlTransformation</a></code> | <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference">ScnDataIntegrationFlowTransformationSqlTransformationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.property.sqlTransformationInput">SqlTransformationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformation">ScnDataIntegrationFlowTransformationSqlTransformation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.property.transformationTypeInput">TransformationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.property.transformationType">TransformationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformation">ScnDataIntegrationFlowTransformation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SqlTransformation`<sup>Required</sup> <a name="SqlTransformation" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.property.sqlTransformation"></a>

```csharp
public ScnDataIntegrationFlowTransformationSqlTransformationOutputReference SqlTransformation { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference">ScnDataIntegrationFlowTransformationSqlTransformationOutputReference</a>

---

##### `SqlTransformationInput`<sup>Optional</sup> <a name="SqlTransformationInput" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.property.sqlTransformationInput"></a>

```csharp
public IResolvable|ScnDataIntegrationFlowTransformationSqlTransformation SqlTransformationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformation">ScnDataIntegrationFlowTransformationSqlTransformation</a>

---

##### `TransformationTypeInput`<sup>Optional</sup> <a name="TransformationTypeInput" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.property.transformationTypeInput"></a>

```csharp
public string TransformationTypeInput { get; }
```

- *Type:* string

---

##### `TransformationType`<sup>Required</sup> <a name="TransformationType" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.property.transformationType"></a>

```csharp
public string TransformationType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ScnDataIntegrationFlowTransformation InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformation">ScnDataIntegrationFlowTransformation</a>

---


### ScnDataIntegrationFlowTransformationSqlTransformationOutputReference <a name="ScnDataIntegrationFlowTransformationSqlTransformationOutputReference" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ScnDataIntegrationFlowTransformationSqlTransformationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference.resetQuery">ResetQuery</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetQuery` <a name="ResetQuery" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference.resetQuery"></a>

```csharp
private void ResetQuery()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference.property.queryInput">QueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference.property.query">Query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformation">ScnDataIntegrationFlowTransformationSqlTransformation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference.property.queryInput"></a>

```csharp
public string QueryInput { get; }
```

- *Type:* string

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference.property.query"></a>

```csharp
public string Query { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ScnDataIntegrationFlowTransformationSqlTransformation InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformation">ScnDataIntegrationFlowTransformationSqlTransformation</a>

---



