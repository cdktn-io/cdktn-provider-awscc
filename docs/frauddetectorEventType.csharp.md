# `frauddetectorEventType` Submodule <a name="`frauddetectorEventType` Submodule" id="@cdktn/provider-awscc.frauddetectorEventType"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FrauddetectorEventType <a name="FrauddetectorEventType" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_event_type awscc_frauddetector_event_type}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new FrauddetectorEventType(Construct Scope, string Id, FrauddetectorEventTypeConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeConfig">FrauddetectorEventTypeConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeConfig">FrauddetectorEventTypeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.putEntityTypes">PutEntityTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.putEventVariables">PutEventVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.putLabels">PutLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEntityTypes` <a name="PutEntityTypes" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.putEntityTypes"></a>

```csharp
private void PutEntityTypes(IResolvable|FrauddetectorEventTypeEntityTypes[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.putEntityTypes.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypes">FrauddetectorEventTypeEntityTypes</a>[]

---

##### `PutEventVariables` <a name="PutEventVariables" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.putEventVariables"></a>

```csharp
private void PutEventVariables(IResolvable|FrauddetectorEventTypeEventVariables[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.putEventVariables.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariables">FrauddetectorEventTypeEventVariables</a>[]

---

##### `PutLabels` <a name="PutLabels" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.putLabels"></a>

```csharp
private void PutLabels(IResolvable|FrauddetectorEventTypeLabels[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.putLabels.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabels">FrauddetectorEventTypeLabels</a>[]

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.putTags"></a>

```csharp
private void PutTags(IResolvable|FrauddetectorEventTypeTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTags">FrauddetectorEventTypeTags</a>[]

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a FrauddetectorEventType resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

FrauddetectorEventType.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

FrauddetectorEventType.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

FrauddetectorEventType.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

FrauddetectorEventType.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a FrauddetectorEventType resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FrauddetectorEventType to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FrauddetectorEventType that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_event_type#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the FrauddetectorEventType to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.createdTime">CreatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.entityTypes">EntityTypes</a></code> | <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesList">FrauddetectorEventTypeEntityTypesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.eventVariables">EventVariables</a></code> | <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesList">FrauddetectorEventTypeEventVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.labels">Labels</a></code> | <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsList">FrauddetectorEventTypeLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.lastUpdatedTime">LastUpdatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsList">FrauddetectorEventTypeTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.entityTypesInput">EntityTypesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypes">FrauddetectorEventTypeEntityTypes</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.eventVariablesInput">EventVariablesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariables">FrauddetectorEventTypeEventVariables</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.labelsInput">LabelsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabels">FrauddetectorEventTypeLabels</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTags">FrauddetectorEventTypeTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreatedTime`<sup>Required</sup> <a name="CreatedTime" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.createdTime"></a>

```csharp
public string CreatedTime { get; }
```

- *Type:* string

---

##### `EntityTypes`<sup>Required</sup> <a name="EntityTypes" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.entityTypes"></a>

```csharp
public FrauddetectorEventTypeEntityTypesList EntityTypes { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesList">FrauddetectorEventTypeEntityTypesList</a>

---

##### `EventVariables`<sup>Required</sup> <a name="EventVariables" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.eventVariables"></a>

```csharp
public FrauddetectorEventTypeEventVariablesList EventVariables { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesList">FrauddetectorEventTypeEventVariablesList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.labels"></a>

```csharp
public FrauddetectorEventTypeLabelsList Labels { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsList">FrauddetectorEventTypeLabelsList</a>

---

##### `LastUpdatedTime`<sup>Required</sup> <a name="LastUpdatedTime" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.lastUpdatedTime"></a>

```csharp
public string LastUpdatedTime { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.tags"></a>

```csharp
public FrauddetectorEventTypeTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsList">FrauddetectorEventTypeTagsList</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EntityTypesInput`<sup>Optional</sup> <a name="EntityTypesInput" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.entityTypesInput"></a>

```csharp
public IResolvable|FrauddetectorEventTypeEntityTypes[] EntityTypesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypes">FrauddetectorEventTypeEntityTypes</a>[]

---

##### `EventVariablesInput`<sup>Optional</sup> <a name="EventVariablesInput" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.eventVariablesInput"></a>

```csharp
public IResolvable|FrauddetectorEventTypeEventVariables[] EventVariablesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariables">FrauddetectorEventTypeEventVariables</a>[]

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.labelsInput"></a>

```csharp
public IResolvable|FrauddetectorEventTypeLabels[] LabelsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabels">FrauddetectorEventTypeLabels</a>[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.tagsInput"></a>

```csharp
public IResolvable|FrauddetectorEventTypeTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTags">FrauddetectorEventTypeTags</a>[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FrauddetectorEventTypeConfig <a name="FrauddetectorEventTypeConfig" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new FrauddetectorEventTypeConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    IResolvable|FrauddetectorEventTypeEntityTypes[] EntityTypes,
    IResolvable|FrauddetectorEventTypeEventVariables[] EventVariables,
    IResolvable|FrauddetectorEventTypeLabels[] Labels,
    string Name,
    string Description = null,
    IResolvable|FrauddetectorEventTypeTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeConfig.property.entityTypes">EntityTypes</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypes">FrauddetectorEventTypeEntityTypes</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_event_type#entity_types FrauddetectorEventType#entity_types}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeConfig.property.eventVariables">EventVariables</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariables">FrauddetectorEventTypeEventVariables</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_event_type#event_variables FrauddetectorEventType#event_variables}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeConfig.property.labels">Labels</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabels">FrauddetectorEventTypeLabels</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_event_type#labels FrauddetectorEventType#labels}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeConfig.property.name">Name</a></code> | <code>string</code> | The name for the event type. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeConfig.property.description">Description</a></code> | <code>string</code> | The description of the event type. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTags">FrauddetectorEventTypeTags</a>[]</code> | Tags associated with this event type. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `EntityTypes`<sup>Required</sup> <a name="EntityTypes" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeConfig.property.entityTypes"></a>

```csharp
public IResolvable|FrauddetectorEventTypeEntityTypes[] EntityTypes { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypes">FrauddetectorEventTypeEntityTypes</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_event_type#entity_types FrauddetectorEventType#entity_types}.

---

##### `EventVariables`<sup>Required</sup> <a name="EventVariables" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeConfig.property.eventVariables"></a>

```csharp
public IResolvable|FrauddetectorEventTypeEventVariables[] EventVariables { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariables">FrauddetectorEventTypeEventVariables</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_event_type#event_variables FrauddetectorEventType#event_variables}.

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeConfig.property.labels"></a>

```csharp
public IResolvable|FrauddetectorEventTypeLabels[] Labels { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabels">FrauddetectorEventTypeLabels</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_event_type#labels FrauddetectorEventType#labels}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name for the event type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_event_type#name FrauddetectorEventType#name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the event type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_event_type#description FrauddetectorEventType#description}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeConfig.property.tags"></a>

```csharp
public IResolvable|FrauddetectorEventTypeTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTags">FrauddetectorEventTypeTags</a>[]

Tags associated with this event type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_event_type#tags FrauddetectorEventType#tags}

---

### FrauddetectorEventTypeEntityTypes <a name="FrauddetectorEventTypeEntityTypes" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypes.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new FrauddetectorEventTypeEntityTypes {
    string Arn = null,
    string CreatedTime = null,
    string Description = null,
    bool|IResolvable Inline = null,
    string LastUpdatedTime = null,
    string Name = null,
    IResolvable|FrauddetectorEventTypeEntityTypesTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypes.property.arn">Arn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_event_type#arn FrauddetectorEventType#arn}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypes.property.createdTime">CreatedTime</a></code> | <code>string</code> | The time when the event type was created. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypes.property.description">Description</a></code> | <code>string</code> | The description. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypes.property.inline">Inline</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_event_type#inline FrauddetectorEventType#inline}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypes.property.lastUpdatedTime">LastUpdatedTime</a></code> | <code>string</code> | The time when the event type was last updated. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypes.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_event_type#name FrauddetectorEventType#name}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypes.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTags">FrauddetectorEventTypeEntityTypesTags</a>[]</code> | Tags associated with this event type. |

---

##### `Arn`<sup>Optional</sup> <a name="Arn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypes.property.arn"></a>

```csharp
public string Arn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_event_type#arn FrauddetectorEventType#arn}.

---

##### `CreatedTime`<sup>Optional</sup> <a name="CreatedTime" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypes.property.createdTime"></a>

```csharp
public string CreatedTime { get; set; }
```

- *Type:* string

The time when the event type was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_event_type#created_time FrauddetectorEventType#created_time}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypes.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_event_type#description FrauddetectorEventType#description}

---

##### `Inline`<sup>Optional</sup> <a name="Inline" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypes.property.inline"></a>

```csharp
public bool|IResolvable Inline { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_event_type#inline FrauddetectorEventType#inline}.

---

##### `LastUpdatedTime`<sup>Optional</sup> <a name="LastUpdatedTime" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypes.property.lastUpdatedTime"></a>

```csharp
public string LastUpdatedTime { get; set; }
```

- *Type:* string

The time when the event type was last updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_event_type#last_updated_time FrauddetectorEventType#last_updated_time}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypes.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_event_type#name FrauddetectorEventType#name}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypes.property.tags"></a>

```csharp
public IResolvable|FrauddetectorEventTypeEntityTypesTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTags">FrauddetectorEventTypeEntityTypesTags</a>[]

Tags associated with this event type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_event_type#tags FrauddetectorEventType#tags}

---

### FrauddetectorEventTypeEntityTypesTags <a name="FrauddetectorEventTypeEntityTypesTags" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new FrauddetectorEventTypeEntityTypesTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_event_type#key FrauddetectorEventType#key}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_event_type#value FrauddetectorEventType#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_event_type#key FrauddetectorEventType#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_event_type#value FrauddetectorEventType#value}.

---

### FrauddetectorEventTypeEventVariables <a name="FrauddetectorEventTypeEventVariables" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariables.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new FrauddetectorEventTypeEventVariables {
    string Arn = null,
    string CreatedTime = null,
    string DataSource = null,
    string DataType = null,
    string DefaultValue = null,
    string Description = null,
    bool|IResolvable Inline = null,
    string LastUpdatedTime = null,
    string Name = null,
    IResolvable|FrauddetectorEventTypeEventVariablesTags[] Tags = null,
    string VariableType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariables.property.arn">Arn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_event_type#arn FrauddetectorEventType#arn}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariables.property.createdTime">CreatedTime</a></code> | <code>string</code> | The time when the event type was created. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariables.property.dataSource">DataSource</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_event_type#data_source FrauddetectorEventType#data_source}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariables.property.dataType">DataType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_event_type#data_type FrauddetectorEventType#data_type}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariables.property.defaultValue">DefaultValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_event_type#default_value FrauddetectorEventType#default_value}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariables.property.description">Description</a></code> | <code>string</code> | The description. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariables.property.inline">Inline</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_event_type#inline FrauddetectorEventType#inline}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariables.property.lastUpdatedTime">LastUpdatedTime</a></code> | <code>string</code> | The time when the event type was last updated. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariables.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_event_type#name FrauddetectorEventType#name}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariables.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTags">FrauddetectorEventTypeEventVariablesTags</a>[]</code> | Tags associated with this event type. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariables.property.variableType">VariableType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_event_type#variable_type FrauddetectorEventType#variable_type}. |

---

##### `Arn`<sup>Optional</sup> <a name="Arn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariables.property.arn"></a>

```csharp
public string Arn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_event_type#arn FrauddetectorEventType#arn}.

---

##### `CreatedTime`<sup>Optional</sup> <a name="CreatedTime" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariables.property.createdTime"></a>

```csharp
public string CreatedTime { get; set; }
```

- *Type:* string

The time when the event type was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_event_type#created_time FrauddetectorEventType#created_time}

---

##### `DataSource`<sup>Optional</sup> <a name="DataSource" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariables.property.dataSource"></a>

```csharp
public string DataSource { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_event_type#data_source FrauddetectorEventType#data_source}.

---

##### `DataType`<sup>Optional</sup> <a name="DataType" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariables.property.dataType"></a>

```csharp
public string DataType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_event_type#data_type FrauddetectorEventType#data_type}.

---

##### `DefaultValue`<sup>Optional</sup> <a name="DefaultValue" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariables.property.defaultValue"></a>

```csharp
public string DefaultValue { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_event_type#default_value FrauddetectorEventType#default_value}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariables.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_event_type#description FrauddetectorEventType#description}

---

##### `Inline`<sup>Optional</sup> <a name="Inline" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariables.property.inline"></a>

```csharp
public bool|IResolvable Inline { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_event_type#inline FrauddetectorEventType#inline}.

---

##### `LastUpdatedTime`<sup>Optional</sup> <a name="LastUpdatedTime" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariables.property.lastUpdatedTime"></a>

```csharp
public string LastUpdatedTime { get; set; }
```

- *Type:* string

The time when the event type was last updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_event_type#last_updated_time FrauddetectorEventType#last_updated_time}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariables.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_event_type#name FrauddetectorEventType#name}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariables.property.tags"></a>

```csharp
public IResolvable|FrauddetectorEventTypeEventVariablesTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTags">FrauddetectorEventTypeEventVariablesTags</a>[]

Tags associated with this event type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_event_type#tags FrauddetectorEventType#tags}

---

##### `VariableType`<sup>Optional</sup> <a name="VariableType" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariables.property.variableType"></a>

```csharp
public string VariableType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_event_type#variable_type FrauddetectorEventType#variable_type}.

---

### FrauddetectorEventTypeEventVariablesTags <a name="FrauddetectorEventTypeEventVariablesTags" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new FrauddetectorEventTypeEventVariablesTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_event_type#key FrauddetectorEventType#key}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_event_type#value FrauddetectorEventType#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_event_type#key FrauddetectorEventType#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_event_type#value FrauddetectorEventType#value}.

---

### FrauddetectorEventTypeLabels <a name="FrauddetectorEventTypeLabels" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabels"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabels.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new FrauddetectorEventTypeLabels {
    string Arn = null,
    string CreatedTime = null,
    string Description = null,
    bool|IResolvable Inline = null,
    string LastUpdatedTime = null,
    string Name = null,
    IResolvable|FrauddetectorEventTypeLabelsTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabels.property.arn">Arn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_event_type#arn FrauddetectorEventType#arn}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabels.property.createdTime">CreatedTime</a></code> | <code>string</code> | The time when the event type was created. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabels.property.description">Description</a></code> | <code>string</code> | The description. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabels.property.inline">Inline</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_event_type#inline FrauddetectorEventType#inline}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabels.property.lastUpdatedTime">LastUpdatedTime</a></code> | <code>string</code> | The time when the event type was last updated. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabels.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_event_type#name FrauddetectorEventType#name}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabels.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTags">FrauddetectorEventTypeLabelsTags</a>[]</code> | Tags associated with this event type. |

---

##### `Arn`<sup>Optional</sup> <a name="Arn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabels.property.arn"></a>

```csharp
public string Arn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_event_type#arn FrauddetectorEventType#arn}.

---

##### `CreatedTime`<sup>Optional</sup> <a name="CreatedTime" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabels.property.createdTime"></a>

```csharp
public string CreatedTime { get; set; }
```

- *Type:* string

The time when the event type was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_event_type#created_time FrauddetectorEventType#created_time}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabels.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_event_type#description FrauddetectorEventType#description}

---

##### `Inline`<sup>Optional</sup> <a name="Inline" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabels.property.inline"></a>

```csharp
public bool|IResolvable Inline { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_event_type#inline FrauddetectorEventType#inline}.

---

##### `LastUpdatedTime`<sup>Optional</sup> <a name="LastUpdatedTime" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabels.property.lastUpdatedTime"></a>

```csharp
public string LastUpdatedTime { get; set; }
```

- *Type:* string

The time when the event type was last updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_event_type#last_updated_time FrauddetectorEventType#last_updated_time}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabels.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_event_type#name FrauddetectorEventType#name}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabels.property.tags"></a>

```csharp
public IResolvable|FrauddetectorEventTypeLabelsTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTags">FrauddetectorEventTypeLabelsTags</a>[]

Tags associated with this event type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_event_type#tags FrauddetectorEventType#tags}

---

### FrauddetectorEventTypeLabelsTags <a name="FrauddetectorEventTypeLabelsTags" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new FrauddetectorEventTypeLabelsTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_event_type#key FrauddetectorEventType#key}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_event_type#value FrauddetectorEventType#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_event_type#key FrauddetectorEventType#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_event_type#value FrauddetectorEventType#value}.

---

### FrauddetectorEventTypeTags <a name="FrauddetectorEventTypeTags" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new FrauddetectorEventTypeTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_event_type#key FrauddetectorEventType#key}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_event_type#value FrauddetectorEventType#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_event_type#key FrauddetectorEventType#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_event_type#value FrauddetectorEventType#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### FrauddetectorEventTypeEntityTypesList <a name="FrauddetectorEventTypeEntityTypesList" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new FrauddetectorEventTypeEntityTypesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesList.get"></a>

```csharp
private FrauddetectorEventTypeEntityTypesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypes">FrauddetectorEventTypeEntityTypes</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesList.property.internalValue"></a>

```csharp
public IResolvable|FrauddetectorEventTypeEntityTypes[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypes">FrauddetectorEventTypeEntityTypes</a>[]

---


### FrauddetectorEventTypeEntityTypesOutputReference <a name="FrauddetectorEventTypeEntityTypesOutputReference" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new FrauddetectorEventTypeEntityTypesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.resetArn">ResetArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.resetCreatedTime">ResetCreatedTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.resetInline">ResetInline</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.resetLastUpdatedTime">ResetLastUpdatedTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.putTags"></a>

```csharp
private void PutTags(IResolvable|FrauddetectorEventTypeEntityTypesTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTags">FrauddetectorEventTypeEntityTypesTags</a>[]

---

##### `ResetArn` <a name="ResetArn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.resetArn"></a>

```csharp
private void ResetArn()
```

##### `ResetCreatedTime` <a name="ResetCreatedTime" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.resetCreatedTime"></a>

```csharp
private void ResetCreatedTime()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetInline` <a name="ResetInline" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.resetInline"></a>

```csharp
private void ResetInline()
```

##### `ResetLastUpdatedTime` <a name="ResetLastUpdatedTime" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.resetLastUpdatedTime"></a>

```csharp
private void ResetLastUpdatedTime()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.resetTags"></a>

```csharp
private void ResetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsList">FrauddetectorEventTypeEntityTypesTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.property.arnInput">ArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.property.createdTimeInput">CreatedTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.property.inlineInput">InlineInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.property.lastUpdatedTimeInput">LastUpdatedTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTags">FrauddetectorEventTypeEntityTypesTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.property.createdTime">CreatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.property.inline">Inline</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.property.lastUpdatedTime">LastUpdatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypes">FrauddetectorEventTypeEntityTypes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.property.tags"></a>

```csharp
public FrauddetectorEventTypeEntityTypesTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsList">FrauddetectorEventTypeEntityTypesTagsList</a>

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.property.arnInput"></a>

```csharp
public string ArnInput { get; }
```

- *Type:* string

---

##### `CreatedTimeInput`<sup>Optional</sup> <a name="CreatedTimeInput" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.property.createdTimeInput"></a>

```csharp
public string CreatedTimeInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `InlineInput`<sup>Optional</sup> <a name="InlineInput" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.property.inlineInput"></a>

```csharp
public bool|IResolvable InlineInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `LastUpdatedTimeInput`<sup>Optional</sup> <a name="LastUpdatedTimeInput" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.property.lastUpdatedTimeInput"></a>

```csharp
public string LastUpdatedTimeInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.property.tagsInput"></a>

```csharp
public IResolvable|FrauddetectorEventTypeEntityTypesTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTags">FrauddetectorEventTypeEntityTypesTags</a>[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreatedTime`<sup>Required</sup> <a name="CreatedTime" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.property.createdTime"></a>

```csharp
public string CreatedTime { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Inline`<sup>Required</sup> <a name="Inline" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.property.inline"></a>

```csharp
public bool|IResolvable Inline { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `LastUpdatedTime`<sup>Required</sup> <a name="LastUpdatedTime" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.property.lastUpdatedTime"></a>

```csharp
public string LastUpdatedTime { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|FrauddetectorEventTypeEntityTypes InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypes">FrauddetectorEventTypeEntityTypes</a>

---


### FrauddetectorEventTypeEntityTypesTagsList <a name="FrauddetectorEventTypeEntityTypesTagsList" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new FrauddetectorEventTypeEntityTypesTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsList.get"></a>

```csharp
private FrauddetectorEventTypeEntityTypesTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTags">FrauddetectorEventTypeEntityTypesTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsList.property.internalValue"></a>

```csharp
public IResolvable|FrauddetectorEventTypeEntityTypesTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTags">FrauddetectorEventTypeEntityTypesTags</a>[]

---


### FrauddetectorEventTypeEntityTypesTagsOutputReference <a name="FrauddetectorEventTypeEntityTypesTagsOutputReference" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new FrauddetectorEventTypeEntityTypesTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTags">FrauddetectorEventTypeEntityTypesTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|FrauddetectorEventTypeEntityTypesTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTags">FrauddetectorEventTypeEntityTypesTags</a>

---


### FrauddetectorEventTypeEventVariablesList <a name="FrauddetectorEventTypeEventVariablesList" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new FrauddetectorEventTypeEventVariablesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesList.get"></a>

```csharp
private FrauddetectorEventTypeEventVariablesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariables">FrauddetectorEventTypeEventVariables</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesList.property.internalValue"></a>

```csharp
public IResolvable|FrauddetectorEventTypeEventVariables[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariables">FrauddetectorEventTypeEventVariables</a>[]

---


### FrauddetectorEventTypeEventVariablesOutputReference <a name="FrauddetectorEventTypeEventVariablesOutputReference" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new FrauddetectorEventTypeEventVariablesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.resetArn">ResetArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.resetCreatedTime">ResetCreatedTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.resetDataSource">ResetDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.resetDataType">ResetDataType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.resetDefaultValue">ResetDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.resetInline">ResetInline</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.resetLastUpdatedTime">ResetLastUpdatedTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.resetVariableType">ResetVariableType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.putTags"></a>

```csharp
private void PutTags(IResolvable|FrauddetectorEventTypeEventVariablesTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTags">FrauddetectorEventTypeEventVariablesTags</a>[]

---

##### `ResetArn` <a name="ResetArn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.resetArn"></a>

```csharp
private void ResetArn()
```

##### `ResetCreatedTime` <a name="ResetCreatedTime" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.resetCreatedTime"></a>

```csharp
private void ResetCreatedTime()
```

##### `ResetDataSource` <a name="ResetDataSource" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.resetDataSource"></a>

```csharp
private void ResetDataSource()
```

##### `ResetDataType` <a name="ResetDataType" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.resetDataType"></a>

```csharp
private void ResetDataType()
```

##### `ResetDefaultValue` <a name="ResetDefaultValue" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.resetDefaultValue"></a>

```csharp
private void ResetDefaultValue()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetInline` <a name="ResetInline" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.resetInline"></a>

```csharp
private void ResetInline()
```

##### `ResetLastUpdatedTime` <a name="ResetLastUpdatedTime" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.resetLastUpdatedTime"></a>

```csharp
private void ResetLastUpdatedTime()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetVariableType` <a name="ResetVariableType" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.resetVariableType"></a>

```csharp
private void ResetVariableType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsList">FrauddetectorEventTypeEventVariablesTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.arnInput">ArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.createdTimeInput">CreatedTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.dataSourceInput">DataSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.dataTypeInput">DataTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.defaultValueInput">DefaultValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.inlineInput">InlineInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.lastUpdatedTimeInput">LastUpdatedTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTags">FrauddetectorEventTypeEventVariablesTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.variableTypeInput">VariableTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.createdTime">CreatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.dataSource">DataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.dataType">DataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.defaultValue">DefaultValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.inline">Inline</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.lastUpdatedTime">LastUpdatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.variableType">VariableType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariables">FrauddetectorEventTypeEventVariables</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.tags"></a>

```csharp
public FrauddetectorEventTypeEventVariablesTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsList">FrauddetectorEventTypeEventVariablesTagsList</a>

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.arnInput"></a>

```csharp
public string ArnInput { get; }
```

- *Type:* string

---

##### `CreatedTimeInput`<sup>Optional</sup> <a name="CreatedTimeInput" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.createdTimeInput"></a>

```csharp
public string CreatedTimeInput { get; }
```

- *Type:* string

---

##### `DataSourceInput`<sup>Optional</sup> <a name="DataSourceInput" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.dataSourceInput"></a>

```csharp
public string DataSourceInput { get; }
```

- *Type:* string

---

##### `DataTypeInput`<sup>Optional</sup> <a name="DataTypeInput" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.dataTypeInput"></a>

```csharp
public string DataTypeInput { get; }
```

- *Type:* string

---

##### `DefaultValueInput`<sup>Optional</sup> <a name="DefaultValueInput" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.defaultValueInput"></a>

```csharp
public string DefaultValueInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `InlineInput`<sup>Optional</sup> <a name="InlineInput" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.inlineInput"></a>

```csharp
public bool|IResolvable InlineInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `LastUpdatedTimeInput`<sup>Optional</sup> <a name="LastUpdatedTimeInput" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.lastUpdatedTimeInput"></a>

```csharp
public string LastUpdatedTimeInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.tagsInput"></a>

```csharp
public IResolvable|FrauddetectorEventTypeEventVariablesTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTags">FrauddetectorEventTypeEventVariablesTags</a>[]

---

##### `VariableTypeInput`<sup>Optional</sup> <a name="VariableTypeInput" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.variableTypeInput"></a>

```csharp
public string VariableTypeInput { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreatedTime`<sup>Required</sup> <a name="CreatedTime" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.createdTime"></a>

```csharp
public string CreatedTime { get; }
```

- *Type:* string

---

##### `DataSource`<sup>Required</sup> <a name="DataSource" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.dataSource"></a>

```csharp
public string DataSource { get; }
```

- *Type:* string

---

##### `DataType`<sup>Required</sup> <a name="DataType" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.dataType"></a>

```csharp
public string DataType { get; }
```

- *Type:* string

---

##### `DefaultValue`<sup>Required</sup> <a name="DefaultValue" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.defaultValue"></a>

```csharp
public string DefaultValue { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Inline`<sup>Required</sup> <a name="Inline" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.inline"></a>

```csharp
public bool|IResolvable Inline { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `LastUpdatedTime`<sup>Required</sup> <a name="LastUpdatedTime" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.lastUpdatedTime"></a>

```csharp
public string LastUpdatedTime { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `VariableType`<sup>Required</sup> <a name="VariableType" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.variableType"></a>

```csharp
public string VariableType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|FrauddetectorEventTypeEventVariables InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariables">FrauddetectorEventTypeEventVariables</a>

---


### FrauddetectorEventTypeEventVariablesTagsList <a name="FrauddetectorEventTypeEventVariablesTagsList" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new FrauddetectorEventTypeEventVariablesTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsList.get"></a>

```csharp
private FrauddetectorEventTypeEventVariablesTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTags">FrauddetectorEventTypeEventVariablesTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsList.property.internalValue"></a>

```csharp
public IResolvable|FrauddetectorEventTypeEventVariablesTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTags">FrauddetectorEventTypeEventVariablesTags</a>[]

---


### FrauddetectorEventTypeEventVariablesTagsOutputReference <a name="FrauddetectorEventTypeEventVariablesTagsOutputReference" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new FrauddetectorEventTypeEventVariablesTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTags">FrauddetectorEventTypeEventVariablesTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|FrauddetectorEventTypeEventVariablesTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTags">FrauddetectorEventTypeEventVariablesTags</a>

---


### FrauddetectorEventTypeLabelsList <a name="FrauddetectorEventTypeLabelsList" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new FrauddetectorEventTypeLabelsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsList.get"></a>

```csharp
private FrauddetectorEventTypeLabelsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabels">FrauddetectorEventTypeLabels</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsList.property.internalValue"></a>

```csharp
public IResolvable|FrauddetectorEventTypeLabels[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabels">FrauddetectorEventTypeLabels</a>[]

---


### FrauddetectorEventTypeLabelsOutputReference <a name="FrauddetectorEventTypeLabelsOutputReference" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new FrauddetectorEventTypeLabelsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.resetArn">ResetArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.resetCreatedTime">ResetCreatedTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.resetInline">ResetInline</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.resetLastUpdatedTime">ResetLastUpdatedTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.putTags"></a>

```csharp
private void PutTags(IResolvable|FrauddetectorEventTypeLabelsTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTags">FrauddetectorEventTypeLabelsTags</a>[]

---

##### `ResetArn` <a name="ResetArn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.resetArn"></a>

```csharp
private void ResetArn()
```

##### `ResetCreatedTime` <a name="ResetCreatedTime" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.resetCreatedTime"></a>

```csharp
private void ResetCreatedTime()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetInline` <a name="ResetInline" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.resetInline"></a>

```csharp
private void ResetInline()
```

##### `ResetLastUpdatedTime` <a name="ResetLastUpdatedTime" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.resetLastUpdatedTime"></a>

```csharp
private void ResetLastUpdatedTime()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.resetTags"></a>

```csharp
private void ResetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsList">FrauddetectorEventTypeLabelsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.property.arnInput">ArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.property.createdTimeInput">CreatedTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.property.inlineInput">InlineInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.property.lastUpdatedTimeInput">LastUpdatedTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTags">FrauddetectorEventTypeLabelsTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.property.createdTime">CreatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.property.inline">Inline</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.property.lastUpdatedTime">LastUpdatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabels">FrauddetectorEventTypeLabels</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.property.tags"></a>

```csharp
public FrauddetectorEventTypeLabelsTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsList">FrauddetectorEventTypeLabelsTagsList</a>

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.property.arnInput"></a>

```csharp
public string ArnInput { get; }
```

- *Type:* string

---

##### `CreatedTimeInput`<sup>Optional</sup> <a name="CreatedTimeInput" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.property.createdTimeInput"></a>

```csharp
public string CreatedTimeInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `InlineInput`<sup>Optional</sup> <a name="InlineInput" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.property.inlineInput"></a>

```csharp
public bool|IResolvable InlineInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `LastUpdatedTimeInput`<sup>Optional</sup> <a name="LastUpdatedTimeInput" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.property.lastUpdatedTimeInput"></a>

```csharp
public string LastUpdatedTimeInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.property.tagsInput"></a>

```csharp
public IResolvable|FrauddetectorEventTypeLabelsTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTags">FrauddetectorEventTypeLabelsTags</a>[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreatedTime`<sup>Required</sup> <a name="CreatedTime" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.property.createdTime"></a>

```csharp
public string CreatedTime { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Inline`<sup>Required</sup> <a name="Inline" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.property.inline"></a>

```csharp
public bool|IResolvable Inline { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `LastUpdatedTime`<sup>Required</sup> <a name="LastUpdatedTime" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.property.lastUpdatedTime"></a>

```csharp
public string LastUpdatedTime { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|FrauddetectorEventTypeLabels InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabels">FrauddetectorEventTypeLabels</a>

---


### FrauddetectorEventTypeLabelsTagsList <a name="FrauddetectorEventTypeLabelsTagsList" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new FrauddetectorEventTypeLabelsTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsList.get"></a>

```csharp
private FrauddetectorEventTypeLabelsTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTags">FrauddetectorEventTypeLabelsTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsList.property.internalValue"></a>

```csharp
public IResolvable|FrauddetectorEventTypeLabelsTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTags">FrauddetectorEventTypeLabelsTags</a>[]

---


### FrauddetectorEventTypeLabelsTagsOutputReference <a name="FrauddetectorEventTypeLabelsTagsOutputReference" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new FrauddetectorEventTypeLabelsTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTags">FrauddetectorEventTypeLabelsTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|FrauddetectorEventTypeLabelsTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTags">FrauddetectorEventTypeLabelsTags</a>

---


### FrauddetectorEventTypeTagsList <a name="FrauddetectorEventTypeTagsList" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new FrauddetectorEventTypeTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsList.get"></a>

```csharp
private FrauddetectorEventTypeTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTags">FrauddetectorEventTypeTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsList.property.internalValue"></a>

```csharp
public IResolvable|FrauddetectorEventTypeTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTags">FrauddetectorEventTypeTags</a>[]

---


### FrauddetectorEventTypeTagsOutputReference <a name="FrauddetectorEventTypeTagsOutputReference" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new FrauddetectorEventTypeTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTags">FrauddetectorEventTypeTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|FrauddetectorEventTypeTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTags">FrauddetectorEventTypeTags</a>

---



