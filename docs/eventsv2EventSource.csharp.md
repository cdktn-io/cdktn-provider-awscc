# `eventsv2EventSource` Submodule <a name="`eventsv2EventSource` Submodule" id="@cdktn/provider-awscc.eventsv2EventSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Eventsv2EventSource <a name="Eventsv2EventSource" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source awscc_eventsv2_event_source}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Eventsv2EventSource(Construct Scope, string Id, Eventsv2EventSourceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfig">Eventsv2EventSourceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfig">Eventsv2EventSourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.putConfiguration">PutConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.putDetails">PutDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.resetDetails">ResetDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConfiguration` <a name="PutConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.putConfiguration"></a>

```csharp
private void PutConfiguration(Eventsv2EventSourceConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.putConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfiguration">Eventsv2EventSourceConfiguration</a>

---

##### `PutDetails` <a name="PutDetails" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.putDetails"></a>

```csharp
private void PutDetails(Eventsv2EventSourceDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.putDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetails">Eventsv2EventSourceDetails</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.putTags"></a>

```csharp
private void PutTags(IResolvable|Eventsv2EventSourceTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTags">Eventsv2EventSourceTags</a>[]

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDetails` <a name="ResetDetails" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.resetDetails"></a>

```csharp
private void ResetDetails()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Eventsv2EventSource resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Eventsv2EventSource.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Eventsv2EventSource.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Eventsv2EventSource.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Eventsv2EventSource.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a Eventsv2EventSource resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Eventsv2EventSource to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Eventsv2EventSource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the Eventsv2EventSource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.configuration">Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference">Eventsv2EventSourceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.creationTime">CreationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.details">Details</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference">Eventsv2EventSourceDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.eventSourceArn">EventSourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.lastModifiedTime">LastModifiedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.revoked">Revoked</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsList">Eventsv2EventSourceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.configurationInput">ConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfiguration">Eventsv2EventSourceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.detailsInput">DetailsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetails">Eventsv2EventSourceDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.eventBusArnInput">EventBusArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTags">Eventsv2EventSourceTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.eventBusArn">EventBusArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.configuration"></a>

```csharp
public Eventsv2EventSourceConfigurationOutputReference Configuration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference">Eventsv2EventSourceConfigurationOutputReference</a>

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.creationTime"></a>

```csharp
public string CreationTime { get; }
```

- *Type:* string

---

##### `Details`<sup>Required</sup> <a name="Details" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.details"></a>

```csharp
public Eventsv2EventSourceDetailsOutputReference Details { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference">Eventsv2EventSourceDetailsOutputReference</a>

---

##### `EventSourceArn`<sup>Required</sup> <a name="EventSourceArn" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.eventSourceArn"></a>

```csharp
public string EventSourceArn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LastModifiedTime`<sup>Required</sup> <a name="LastModifiedTime" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.lastModifiedTime"></a>

```csharp
public string LastModifiedTime { get; }
```

- *Type:* string

---

##### `Revoked`<sup>Required</sup> <a name="Revoked" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.revoked"></a>

```csharp
public IResolvable Revoked { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.tags"></a>

```csharp
public Eventsv2EventSourceTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsList">Eventsv2EventSourceTagsList</a>

---

##### `ConfigurationInput`<sup>Optional</sup> <a name="ConfigurationInput" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.configurationInput"></a>

```csharp
public IResolvable|Eventsv2EventSourceConfiguration ConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfiguration">Eventsv2EventSourceConfiguration</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DetailsInput`<sup>Optional</sup> <a name="DetailsInput" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.detailsInput"></a>

```csharp
public IResolvable|Eventsv2EventSourceDetails DetailsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetails">Eventsv2EventSourceDetails</a>

---

##### `EventBusArnInput`<sup>Optional</sup> <a name="EventBusArnInput" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.eventBusArnInput"></a>

```csharp
public string EventBusArnInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.tagsInput"></a>

```csharp
public IResolvable|Eventsv2EventSourceTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTags">Eventsv2EventSourceTags</a>[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EventBusArn`<sup>Required</sup> <a name="EventBusArn" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.eventBusArn"></a>

```csharp
public string EventBusArn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Eventsv2EventSourceConfig <a name="Eventsv2EventSourceConfig" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Eventsv2EventSourceConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    Eventsv2EventSourceConfiguration Configuration,
    string EventBusArn,
    string Name,
    string Description = null,
    Eventsv2EventSourceDetails Details = null,
    IResolvable|Eventsv2EventSourceTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfig.property.configuration">Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfiguration">Eventsv2EventSourceConfiguration</a></code> | The event source configuration. Specify exactly one of AwsServiceEventsConfiguration, PartnerEventsConfiguration or WebhookEventsConfiguration. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfig.property.eventBusArn">EventBusArn</a></code> | <code>string</code> | The ARN of the custom event bus the event source forwards onto. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfig.property.name">Name</a></code> | <code>string</code> | The name of the event source. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfig.property.description">Description</a></code> | <code>string</code> | A description of the event source. Control characters and Unicode line separators are not allowed. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfig.property.details">Details</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetails">Eventsv2EventSourceDetails</a></code> | Values EventBridge generated for the event source, such as a webhook's URL and the ARN of its secret. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTags">Eventsv2EventSourceTags</a>[]</code> | The tags assigned to the event source. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfig.property.configuration"></a>

```csharp
public Eventsv2EventSourceConfiguration Configuration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfiguration">Eventsv2EventSourceConfiguration</a>

The event source configuration. Specify exactly one of AwsServiceEventsConfiguration, PartnerEventsConfiguration or WebhookEventsConfiguration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#configuration Eventsv2EventSource#configuration}

---

##### `EventBusArn`<sup>Required</sup> <a name="EventBusArn" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfig.property.eventBusArn"></a>

```csharp
public string EventBusArn { get; set; }
```

- *Type:* string

The ARN of the custom event bus the event source forwards onto.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#event_bus_arn Eventsv2EventSource#event_bus_arn}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the event source.

The first character must be alphanumeric; the remaining characters may also include '.', '-', and '_'. Names cannot begin with the reserved aws. prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#name Eventsv2EventSource#name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description of the event source. Control characters and Unicode line separators are not allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#description Eventsv2EventSource#description}

---

##### `Details`<sup>Optional</sup> <a name="Details" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfig.property.details"></a>

```csharp
public Eventsv2EventSourceDetails Details { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetails">Eventsv2EventSourceDetails</a>

Values EventBridge generated for the event source, such as a webhook's URL and the ARN of its secret.

Absent for event source types that have no generated values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#details Eventsv2EventSource#details}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfig.property.tags"></a>

```csharp
public IResolvable|Eventsv2EventSourceTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTags">Eventsv2EventSourceTags</a>[]

The tags assigned to the event source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#tags Eventsv2EventSource#tags}

---

### Eventsv2EventSourceConfiguration <a name="Eventsv2EventSourceConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Eventsv2EventSourceConfiguration {
    Eventsv2EventSourceConfigurationAwsServiceEventsConfiguration AwsServiceEventsConfiguration = null,
    Eventsv2EventSourceConfigurationPartnerEventsConfiguration PartnerEventsConfiguration = null,
    Eventsv2EventSourceConfigurationWebhookEventsConfiguration WebhookEventsConfiguration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfiguration.property.awsServiceEventsConfiguration">AwsServiceEventsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfiguration">Eventsv2EventSourceConfigurationAwsServiceEventsConfiguration</a></code> | Configuration for forwarding a single AWS service's events. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfiguration.property.partnerEventsConfiguration">PartnerEventsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfiguration">Eventsv2EventSourceConfigurationPartnerEventsConfiguration</a></code> | Configuration for forwarding a partner event source's events. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfiguration.property.webhookEventsConfiguration">WebhookEventsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfiguration">Eventsv2EventSourceConfigurationWebhookEventsConfiguration</a></code> | Configuration for receiving events that an external provider sends to a webhook URL. |

---

##### `AwsServiceEventsConfiguration`<sup>Optional</sup> <a name="AwsServiceEventsConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfiguration.property.awsServiceEventsConfiguration"></a>

```csharp
public Eventsv2EventSourceConfigurationAwsServiceEventsConfiguration AwsServiceEventsConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfiguration">Eventsv2EventSourceConfigurationAwsServiceEventsConfiguration</a>

Configuration for forwarding a single AWS service's events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#aws_service_events_configuration Eventsv2EventSource#aws_service_events_configuration}

---

##### `PartnerEventsConfiguration`<sup>Optional</sup> <a name="PartnerEventsConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfiguration.property.partnerEventsConfiguration"></a>

```csharp
public Eventsv2EventSourceConfigurationPartnerEventsConfiguration PartnerEventsConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfiguration">Eventsv2EventSourceConfigurationPartnerEventsConfiguration</a>

Configuration for forwarding a partner event source's events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#partner_events_configuration Eventsv2EventSource#partner_events_configuration}

---

##### `WebhookEventsConfiguration`<sup>Optional</sup> <a name="WebhookEventsConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfiguration.property.webhookEventsConfiguration"></a>

```csharp
public Eventsv2EventSourceConfigurationWebhookEventsConfiguration WebhookEventsConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfiguration">Eventsv2EventSourceConfigurationWebhookEventsConfiguration</a>

Configuration for receiving events that an external provider sends to a webhook URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#webhook_events_configuration Eventsv2EventSource#webhook_events_configuration}

---

### Eventsv2EventSourceConfigurationAwsServiceEventsConfiguration <a name="Eventsv2EventSourceConfigurationAwsServiceEventsConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Eventsv2EventSourceConfigurationAwsServiceEventsConfiguration {
    string AwsService = null,
    Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfiguration OnFailureConfiguration = null,
    string Pattern = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfiguration.property.awsService">AwsService</a></code> | <code>string</code> | A single AWS service source identifier, for example aws.s3. Wildcards and lists are not allowed. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfiguration.property.onFailureConfiguration">OnFailureConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfiguration">Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfiguration</a></code> | The destination for events that could not be forwarded. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfiguration.property.pattern">Pattern</a></code> | <code>string</code> | A filter pattern, as a JSON string, that defines which events from the specified AWS service are forwarded to the event bus. |

---

##### `AwsService`<sup>Optional</sup> <a name="AwsService" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfiguration.property.awsService"></a>

```csharp
public string AwsService { get; set; }
```

- *Type:* string

A single AWS service source identifier, for example aws.s3. Wildcards and lists are not allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#aws_service Eventsv2EventSource#aws_service}

---

##### `OnFailureConfiguration`<sup>Optional</sup> <a name="OnFailureConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfiguration.property.onFailureConfiguration"></a>

```csharp
public Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfiguration OnFailureConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfiguration">Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfiguration</a>

The destination for events that could not be forwarded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#on_failure_configuration Eventsv2EventSource#on_failure_configuration}

---

##### `Pattern`<sup>Optional</sup> <a name="Pattern" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfiguration.property.pattern"></a>

```csharp
public string Pattern { get; set; }
```

- *Type:* string

A filter pattern, as a JSON string, that defines which events from the specified AWS service are forwarded to the event bus.

Do not include source, account, or region as top-level fields. If you do not specify a pattern, all events from the service are forwarded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#pattern Eventsv2EventSource#pattern}

---

### Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfiguration <a name="Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfiguration {
    string Arn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfiguration.property.arn">Arn</a></code> | <code>string</code> | The ARN of the Amazon SQS standard queue that receives events that could not be forwarded. |

---

##### `Arn`<sup>Optional</sup> <a name="Arn" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfiguration.property.arn"></a>

```csharp
public string Arn { get; set; }
```

- *Type:* string

The ARN of the Amazon SQS standard queue that receives events that could not be forwarded.

FIFO queues are not supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#arn Eventsv2EventSource#arn}

---

### Eventsv2EventSourceConfigurationPartnerEventsConfiguration <a name="Eventsv2EventSourceConfigurationPartnerEventsConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Eventsv2EventSourceConfigurationPartnerEventsConfiguration {
    Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfiguration OnFailureConfiguration = null,
    string PartnerBusKmsKeyIdentifier = null,
    string PartnerEventSourceArn = null,
    string Pattern = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfiguration.property.onFailureConfiguration">OnFailureConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfiguration">Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfiguration</a></code> | The destination for events that could not be forwarded, covering both the forwarding target and the managed partner event bus. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfiguration.property.partnerBusKmsKeyIdentifier">PartnerBusKmsKeyIdentifier</a></code> | <code>string</code> | The identifier of the AWS KMS customer managed key for EventBridge to use, if you choose to use a customer managed key to encrypt events on the managed partner event bus. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfiguration.property.partnerEventSourceArn">PartnerEventSourceArn</a></code> | <code>string</code> | The ARN of the partner event source to forward. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfiguration.property.pattern">Pattern</a></code> | <code>string</code> | A filter pattern, as a JSON string, that defines which events from the specified partner event source are forwarded to the event bus. |

---

##### `OnFailureConfiguration`<sup>Optional</sup> <a name="OnFailureConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfiguration.property.onFailureConfiguration"></a>

```csharp
public Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfiguration OnFailureConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfiguration">Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfiguration</a>

The destination for events that could not be forwarded, covering both the forwarding target and the managed partner event bus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#on_failure_configuration Eventsv2EventSource#on_failure_configuration}

---

##### `PartnerBusKmsKeyIdentifier`<sup>Optional</sup> <a name="PartnerBusKmsKeyIdentifier" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfiguration.property.partnerBusKmsKeyIdentifier"></a>

```csharp
public string PartnerBusKmsKeyIdentifier { get; set; }
```

- *Type:* string

The identifier of the AWS KMS customer managed key for EventBridge to use, if you choose to use a customer managed key to encrypt events on the managed partner event bus.

The identifier can be the key Amazon Resource Name (ARN), KeyId, key alias, or key alias ARN. If you do not specify a customer managed key identifier, EventBridge uses an AWS owned key to encrypt events on the event bus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#partner_bus_kms_key_identifier Eventsv2EventSource#partner_bus_kms_key_identifier}

---

##### `PartnerEventSourceArn`<sup>Optional</sup> <a name="PartnerEventSourceArn" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfiguration.property.partnerEventSourceArn"></a>

```csharp
public string PartnerEventSourceArn { get; set; }
```

- *Type:* string

The ARN of the partner event source to forward.

The partner owns the event source, so the ARN's account segment is empty. Changing this property replaces the event source. Because Name and EventBusArn together identify an event source, and the replacement is created before the old resource is deleted, change Name in the same update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#partner_event_source_arn Eventsv2EventSource#partner_event_source_arn}

---

##### `Pattern`<sup>Optional</sup> <a name="Pattern" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfiguration.property.pattern"></a>

```csharp
public string Pattern { get; set; }
```

- *Type:* string

A filter pattern, as a JSON string, that defines which events from the specified partner event source are forwarded to the event bus.

If you do not specify a pattern, all events from the partner event source are forwarded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#pattern Eventsv2EventSource#pattern}

---

### Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfiguration <a name="Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfiguration {
    string Arn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfiguration.property.arn">Arn</a></code> | <code>string</code> | The ARN of the Amazon SQS standard queue that receives events that could not be forwarded. |

---

##### `Arn`<sup>Optional</sup> <a name="Arn" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfiguration.property.arn"></a>

```csharp
public string Arn { get; set; }
```

- *Type:* string

The ARN of the Amazon SQS standard queue that receives events that could not be forwarded.

FIFO queues are not supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#arn Eventsv2EventSource#arn}

---

### Eventsv2EventSourceConfigurationWebhookEventsConfiguration <a name="Eventsv2EventSourceConfigurationWebhookEventsConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Eventsv2EventSourceConfigurationWebhookEventsConfiguration {
    Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfiguration AuthConfiguration = null,
    Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfiguration DeduplicationConfiguration = null,
    string KmsKeyIdentifier = null,
    Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfiguration LogConfiguration = null,
    string[] MetadataHttpHeaders = null,
    string RoleArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfiguration.property.authConfiguration">AuthConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfiguration">Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfiguration</a></code> | How the provider authenticates its requests. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfiguration.property.deduplicationConfiguration">DeduplicationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfiguration">Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfiguration</a></code> | Deduplicates the event source's events on the event bus. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfiguration.property.kmsKeyIdentifier">KmsKeyIdentifier</a></code> | <code>string</code> | The AWS KMS key that encrypts the event source's secret in AWS Secrets Manager. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfiguration.property.logConfiguration">LogConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfiguration">Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfiguration</a></code> | The log records Amazon EventBridge delivers for the webhook requests this event source receives. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfiguration.property.metadataHttpHeaders">MetadataHttpHeaders</a></code> | <code>string[]</code> | The HTTP request headers to add to each event's metadata, up to 20. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfiguration.property.roleArn">RoleArn</a></code> | <code>string</code> | The ARN of the IAM role that Amazon EventBridge assumes to put the webhook's events on the event bus. |

---

##### `AuthConfiguration`<sup>Optional</sup> <a name="AuthConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfiguration.property.authConfiguration"></a>

```csharp
public Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfiguration AuthConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfiguration">Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfiguration</a>

How the provider authenticates its requests.

Set exactly one authentication type. You can't change the type after you create the event source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#auth_configuration Eventsv2EventSource#auth_configuration}

---

##### `DeduplicationConfiguration`<sup>Optional</sup> <a name="DeduplicationConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfiguration.property.deduplicationConfiguration"></a>

```csharp
public Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfiguration DeduplicationConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfiguration">Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfiguration</a>

Deduplicates the event source's events on the event bus.

If you do not specify a configuration, EventBridge does not deduplicate events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#deduplication_configuration Eventsv2EventSource#deduplication_configuration}

---

##### `KmsKeyIdentifier`<sup>Optional</sup> <a name="KmsKeyIdentifier" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfiguration.property.kmsKeyIdentifier"></a>

```csharp
public string KmsKeyIdentifier { get; set; }
```

- *Type:* string

The AWS KMS key that encrypts the event source's secret in AWS Secrets Manager.

If you do not specify a key, the secret is encrypted with the AWS managed key aws/secretsmanager. A key you specify must be an enabled customer managed key in your account and Region. Changing the key re-encrypts the secret under the new key. The previous key can still decrypt the stored versions until the credential is next rotated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#kms_key_identifier Eventsv2EventSource#kms_key_identifier}

---

##### `LogConfiguration`<sup>Optional</sup> <a name="LogConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfiguration.property.logConfiguration"></a>

```csharp
public Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfiguration LogConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfiguration">Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfiguration</a>

The log records Amazon EventBridge delivers for the webhook requests this event source receives.

If you do not specify a configuration, EventBridge delivers no logs. Logs are delivered to the destinations you configure with Amazon CloudWatch Logs vended log delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#log_configuration Eventsv2EventSource#log_configuration}

---

##### `MetadataHttpHeaders`<sup>Optional</sup> <a name="MetadataHttpHeaders" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfiguration.property.metadataHttpHeaders"></a>

```csharp
public string[] MetadataHttpHeaders { get; set; }
```

- *Type:* string[]

The HTTP request headers to add to each event's metadata, up to 20.

Header names are case-insensitive and cannot repeat. Amazon EventBridge adds each header under its lowercase name. If you do not specify headers, EventBridge adds none. You cannot list headers that carry credentials or describe the network path, or the header that carries the static token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#metadata_http_headers Eventsv2EventSource#metadata_http_headers}

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfiguration.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

The ARN of the IAM role that Amazon EventBridge assumes to put the webhook's events on the event bus.

The role must belong to the calling account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#role_arn Eventsv2EventSource#role_arn}

---

### Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfiguration <a name="Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfiguration {
    Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfiguration BasicHttpAuthConfiguration = null,
    Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration HmacAuthConfiguration = null,
    Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfiguration StaticTokenAuthConfiguration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfiguration.property.basicHttpAuthConfiguration">BasicHttpAuthConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfiguration">Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfiguration</a></code> | The provider sends HTTP Basic authentication credentials. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfiguration.property.hmacAuthConfiguration">HmacAuthConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration">Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration</a></code> | The provider signs each request with a hash-based message authentication code (HMAC) of the secret. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfiguration.property.staticTokenAuthConfiguration">StaticTokenAuthConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfiguration">Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfiguration</a></code> | The provider sends the secret as the value of an HTTP header. |

---

##### `BasicHttpAuthConfiguration`<sup>Optional</sup> <a name="BasicHttpAuthConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfiguration.property.basicHttpAuthConfiguration"></a>

```csharp
public Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfiguration BasicHttpAuthConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfiguration">Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfiguration</a>

The provider sends HTTP Basic authentication credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#basic_http_auth_configuration Eventsv2EventSource#basic_http_auth_configuration}

---

##### `HmacAuthConfiguration`<sup>Optional</sup> <a name="HmacAuthConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfiguration.property.hmacAuthConfiguration"></a>

```csharp
public Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration HmacAuthConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration">Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration</a>

The provider signs each request with a hash-based message authentication code (HMAC) of the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#hmac_auth_configuration Eventsv2EventSource#hmac_auth_configuration}

---

##### `StaticTokenAuthConfiguration`<sup>Optional</sup> <a name="StaticTokenAuthConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfiguration.property.staticTokenAuthConfiguration"></a>

```csharp
public Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfiguration StaticTokenAuthConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfiguration">Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfiguration</a>

The provider sends the secret as the value of an HTTP header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#static_token_auth_configuration Eventsv2EventSource#static_token_auth_configuration}

---

### Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfiguration <a name="Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfiguration {
    string Password = null,
    string Username = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfiguration.property.password">Password</a></code> | <code>string</code> | The password. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfiguration.property.username">Username</a></code> | <code>string</code> | The username. |

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfiguration.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

The password.

Set on create only: changing this value in a template has no effect. To change the password, call RotateWebhookCredentials. The username and the webhook URL do not change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#password Eventsv2EventSource#password}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfiguration.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

The username.

Cannot contain a colon or whitespace. Changing the username requires replacing the event source, which also requires a new Name and gives the event source a new webhook URL. RotateWebhookCredentials cannot change the username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#username Eventsv2EventSource#username}

---

### Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration <a name="Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration {
    string Algorithm = null,
    string Delimiter = null,
    string Encoding = null,
    string MessageIdHttpHeader = null,
    string SecretEncoding = null,
    string SecretValue = null,
    string SignatureHttpHeader = null,
    string SignaturePrefix = null,
    string SignedMessageComposition = null,
    string TimestampHttpHeader = null,
    string TimestampPrefix = null,
    double TimestampToleranceInSeconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration.property.algorithm">Algorithm</a></code> | <code>string</code> | The hash algorithm the provider uses to compute the signature. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration.property.delimiter">Delimiter</a></code> | <code>string</code> | The separator between parts of the signature header value, for example a comma for a header value of t=1727816400,v1=<signature>, or a space when the header carries several signatures. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration.property.encoding">Encoding</a></code> | <code>string</code> | How the provider encodes the signature in the header. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration.property.messageIdHttpHeader">MessageIdHttpHeader</a></code> | <code>string</code> | The name of the header that carries the message ID. Required when SignedMessageComposition is MESSAGE_ID_DOT_TIMESTAMP_DOT_BODY. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration.property.secretEncoding">SecretEncoding</a></code> | <code>string</code> | How the secret is encoded. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration.property.secretValue">SecretValue</a></code> | <code>string</code> | The signing key shared with the provider. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration.property.signatureHttpHeader">SignatureHttpHeader</a></code> | <code>string</code> | The name of the header that carries the signature, for example X-Hub-Signature-256. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration.property.signaturePrefix">SignaturePrefix</a></code> | <code>string</code> | The text that precedes the signature in the header value, for example sha256=. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration.property.signedMessageComposition">SignedMessageComposition</a></code> | <code>string</code> | How the provider assembles the message it signs from the request. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration.property.timestampHttpHeader">TimestampHttpHeader</a></code> | <code>string</code> | The name of the header that carries the request timestamp. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration.property.timestampPrefix">TimestampPrefix</a></code> | <code>string</code> | The text that precedes the timestamp in the header value, for example t=. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration.property.timestampToleranceInSeconds">TimestampToleranceInSeconds</a></code> | <code>double</code> | The maximum difference, in seconds, allowed between the request timestamp and the time EventBridge receives the request. |

---

##### `Algorithm`<sup>Optional</sup> <a name="Algorithm" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration.property.algorithm"></a>

```csharp
public string Algorithm { get; set; }
```

- *Type:* string

The hash algorithm the provider uses to compute the signature.

Valid values:

* SHA256 - SHA-256.
* SHA1 - SHA-1. Not recommended. Use SHA1 only for interoperability with a provider that cannot sign with SHA-256.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#algorithm Eventsv2EventSource#algorithm}

---

##### `Delimiter`<sup>Optional</sup> <a name="Delimiter" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration.property.delimiter"></a>

```csharp
public string Delimiter { get; set; }
```

- *Type:* string

The separator between parts of the signature header value, for example a comma for a header value of t=1727816400,v1=<signature>, or a space when the header carries several signatures.

Required when TimestampHttpHeader is the same header as SignatureHttpHeader.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#delimiter Eventsv2EventSource#delimiter}

---

##### `Encoding`<sup>Optional</sup> <a name="Encoding" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration.property.encoding"></a>

```csharp
public string Encoding { get; set; }
```

- *Type:* string

How the provider encodes the signature in the header.

Valid values:

* HEX - Hexadecimal.
* BASE64 - Base64.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#encoding Eventsv2EventSource#encoding}

---

##### `MessageIdHttpHeader`<sup>Optional</sup> <a name="MessageIdHttpHeader" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration.property.messageIdHttpHeader"></a>

```csharp
public string MessageIdHttpHeader { get; set; }
```

- *Type:* string

The name of the header that carries the message ID. Required when SignedMessageComposition is MESSAGE_ID_DOT_TIMESTAMP_DOT_BODY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#message_id_http_header Eventsv2EventSource#message_id_http_header}

---

##### `SecretEncoding`<sup>Optional</sup> <a name="SecretEncoding" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration.property.secretEncoding"></a>

```csharp
public string SecretEncoding { get; set; }
```

- *Type:* string

How the secret is encoded.

RAW uses the secret's characters as the signing key. BASE64 decodes the secret first, as required by providers that issue Base64-encoded signing keys, such as those following the Standard Webhooks specification. If you do not specify an encoding, EventBridge uses RAW. Changing the encoding replaces the event source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#secret_encoding Eventsv2EventSource#secret_encoding}

---

##### `SecretValue`<sup>Optional</sup> <a name="SecretValue" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration.property.secretValue"></a>

```csharp
public string SecretValue { get; set; }
```

- *Type:* string

The signing key shared with the provider.

If you do not specify a key, EventBridge generates one. EventBridge stores the key only in AWS Secrets Manager and never returns it. Set on create only: changing this value in a template has no effect. To change the key, call RotateWebhookCredentials. The webhook URL does not change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#secret_value Eventsv2EventSource#secret_value}

---

##### `SignatureHttpHeader`<sup>Optional</sup> <a name="SignatureHttpHeader" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration.property.signatureHttpHeader"></a>

```csharp
public string SignatureHttpHeader { get; set; }
```

- *Type:* string

The name of the header that carries the signature, for example X-Hub-Signature-256.

When TimestampHttpHeader names the same header, Delimiter, SignaturePrefix and TimestampPrefix are all required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#signature_http_header Eventsv2EventSource#signature_http_header}

---

##### `SignaturePrefix`<sup>Optional</sup> <a name="SignaturePrefix" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration.property.signaturePrefix"></a>

```csharp
public string SignaturePrefix { get; set; }
```

- *Type:* string

The text that precedes the signature in the header value, for example sha256=.

Required when TimestampHttpHeader is the same header as SignatureHttpHeader.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#signature_prefix Eventsv2EventSource#signature_prefix}

---

##### `SignedMessageComposition`<sup>Optional</sup> <a name="SignedMessageComposition" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration.property.signedMessageComposition"></a>

```csharp
public string SignedMessageComposition { get; set; }
```

- *Type:* string

How the provider assembles the message it signs from the request.

Valid values:

* BODY - The request body alone.
* TIMESTAMP_DOT_BODY - <timestamp>.<body>. Requires TimestampHttpHeader.
* MESSAGE_ID_DOT_TIMESTAMP_DOT_BODY - <messageId>.<timestamp>.<body>, as in the Standard Webhooks specification. Requires TimestampHttpHeader and MessageIdHttpHeader.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#signed_message_composition Eventsv2EventSource#signed_message_composition}

---

##### `TimestampHttpHeader`<sup>Optional</sup> <a name="TimestampHttpHeader" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration.property.timestampHttpHeader"></a>

```csharp
public string TimestampHttpHeader { get; set; }
```

- *Type:* string

The name of the header that carries the request timestamp.

Required when SignedMessageComposition is TIMESTAMP_DOT_BODY or MESSAGE_ID_DOT_TIMESTAMP_DOT_BODY, or when TimestampToleranceInSeconds is set. When it names the same header as SignatureHttpHeader, Delimiter, SignaturePrefix and TimestampPrefix are all required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#timestamp_http_header Eventsv2EventSource#timestamp_http_header}

---

##### `TimestampPrefix`<sup>Optional</sup> <a name="TimestampPrefix" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration.property.timestampPrefix"></a>

```csharp
public string TimestampPrefix { get; set; }
```

- *Type:* string

The text that precedes the timestamp in the header value, for example t=.

Required when TimestampHttpHeader is the same header as SignatureHttpHeader.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#timestamp_prefix Eventsv2EventSource#timestamp_prefix}

---

##### `TimestampToleranceInSeconds`<sup>Optional</sup> <a name="TimestampToleranceInSeconds" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration.property.timestampToleranceInSeconds"></a>

```csharp
public double TimestampToleranceInSeconds { get; set; }
```

- *Type:* double

The maximum difference, in seconds, allowed between the request timestamp and the time EventBridge receives the request.

Requests outside this window are rejected. If you do not specify a tolerance, EventBridge uses 300 seconds. Requires TimestampHttpHeader.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#timestamp_tolerance_in_seconds Eventsv2EventSource#timestamp_tolerance_in_seconds}

---

### Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfiguration <a name="Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfiguration {
    string SecretValue = null,
    string TokenHttpHeader = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfiguration.property.secretValue">SecretValue</a></code> | <code>string</code> | The token the provider sends in the header. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfiguration.property.tokenHttpHeader">TokenHttpHeader</a></code> | <code>string</code> | The name of the header that carries the secret, for example X-Webhook-Secret. |

---

##### `SecretValue`<sup>Optional</sup> <a name="SecretValue" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfiguration.property.secretValue"></a>

```csharp
public string SecretValue { get; set; }
```

- *Type:* string

The token the provider sends in the header.

If you do not specify a token, Amazon EventBridge generates one. EventBridge stores the token only in AWS Secrets Manager and never returns it. Set on create only: changing this value in a template has no effect. To change the token, call RotateWebhookCredentials. The webhook URL does not change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#secret_value Eventsv2EventSource#secret_value}

---

##### `TokenHttpHeader`<sup>Optional</sup> <a name="TokenHttpHeader" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfiguration.property.tokenHttpHeader"></a>

```csharp
public string TokenHttpHeader { get; set; }
```

- *Type:* string

The name of the header that carries the secret, for example X-Webhook-Secret.

Must be a valid header name as defined in RFC 7230.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#token_http_header Eventsv2EventSource#token_http_header}

---

### Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfiguration <a name="Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfiguration {
    string DeduplicationType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfiguration.property.deduplicationType">DeduplicationType</a></code> | <code>string</code> | How EventBridge detects duplicate events. |

---

##### `DeduplicationType`<sup>Optional</sup> <a name="DeduplicationType" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfiguration.property.deduplicationType"></a>

```csharp
public string DeduplicationType { get; set; }
```

- *Type:* string

How EventBridge detects duplicate events.

Valid values:

* CONTENT_BASED - Detects duplicates by a hash of the event content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#deduplication_type Eventsv2EventSource#deduplication_type}

---

### Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfiguration <a name="Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfiguration {
    string IncludePayload = null,
    string Level = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfiguration.property.includePayload">IncludePayload</a></code> | <code>string</code> | Whether the event payload is included in emitted log records: FULL includes it in every emitted record, and ON_ERROR_ONLY includes it only in error records. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfiguration.property.level">Level</a></code> | <code>string</code> | The minimum log level: OFF (no logging), ERROR, or INFO. |

---

##### `IncludePayload`<sup>Optional</sup> <a name="IncludePayload" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfiguration.property.includePayload"></a>

```csharp
public string IncludePayload { get; set; }
```

- *Type:* string

Whether the event payload is included in emitted log records: FULL includes it in every emitted record, and ON_ERROR_ONLY includes it only in error records.

The default is ON_ERROR_ONLY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#include_payload Eventsv2EventSource#include_payload}

---

##### `Level`<sup>Optional</sup> <a name="Level" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfiguration.property.level"></a>

```csharp
public string Level { get; set; }
```

- *Type:* string

The minimum log level: OFF (no logging), ERROR, or INFO.

Records below this level are not emitted. The default is OFF.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#level Eventsv2EventSource#level}

---

### Eventsv2EventSourceDetails <a name="Eventsv2EventSourceDetails" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetails.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Eventsv2EventSourceDetails {
    Eventsv2EventSourceDetailsWebhookDetails WebhookDetails = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetails.property.webhookDetails">WebhookDetails</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetails">Eventsv2EventSourceDetailsWebhookDetails</a></code> | Values generated for a webhook event source. |

---

##### `WebhookDetails`<sup>Optional</sup> <a name="WebhookDetails" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetails.property.webhookDetails"></a>

```csharp
public Eventsv2EventSourceDetailsWebhookDetails WebhookDetails { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetails">Eventsv2EventSourceDetailsWebhookDetails</a>

Values generated for a webhook event source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#webhook_details Eventsv2EventSource#webhook_details}

---

### Eventsv2EventSourceDetailsWebhookDetails <a name="Eventsv2EventSourceDetailsWebhookDetails" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetails.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Eventsv2EventSourceDetailsWebhookDetails {

};
```


### Eventsv2EventSourceTags <a name="Eventsv2EventSourceTags" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Eventsv2EventSourceTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTags.property.key">Key</a></code> | <code>string</code> | The tag key. Unique per resource; keys are case sensitive. No leading or trailing whitespace (interior whitespace is allowed). |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTags.property.value">Value</a></code> | <code>string</code> | The tag value. May be empty. No leading or trailing whitespace (interior whitespace is allowed). |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The tag key. Unique per resource; keys are case sensitive. No leading or trailing whitespace (interior whitespace is allowed).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#key Eventsv2EventSource#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The tag value. May be empty. No leading or trailing whitespace (interior whitespace is allowed).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#value Eventsv2EventSource#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference <a name="Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.resetArn">ResetArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetArn` <a name="ResetArn" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.resetArn"></a>

```csharp
private void ResetArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.property.arnInput">ArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfiguration">Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.property.arnInput"></a>

```csharp
public string ArnInput { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfiguration">Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfiguration</a>

---


### Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference <a name="Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.putOnFailureConfiguration">PutOnFailureConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.resetAwsService">ResetAwsService</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.resetOnFailureConfiguration">ResetOnFailureConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.resetPattern">ResetPattern</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOnFailureConfiguration` <a name="PutOnFailureConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.putOnFailureConfiguration"></a>

```csharp
private void PutOnFailureConfiguration(Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.putOnFailureConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfiguration">Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfiguration</a>

---

##### `ResetAwsService` <a name="ResetAwsService" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.resetAwsService"></a>

```csharp
private void ResetAwsService()
```

##### `ResetOnFailureConfiguration` <a name="ResetOnFailureConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.resetOnFailureConfiguration"></a>

```csharp
private void ResetOnFailureConfiguration()
```

##### `ResetPattern` <a name="ResetPattern" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.resetPattern"></a>

```csharp
private void ResetPattern()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.property.onFailureConfiguration">OnFailureConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference">Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.property.awsServiceInput">AwsServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.property.onFailureConfigurationInput">OnFailureConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfiguration">Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.property.patternInput">PatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.property.awsService">AwsService</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.property.pattern">Pattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfiguration">Eventsv2EventSourceConfigurationAwsServiceEventsConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OnFailureConfiguration`<sup>Required</sup> <a name="OnFailureConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.property.onFailureConfiguration"></a>

```csharp
public Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference OnFailureConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference">Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference</a>

---

##### `AwsServiceInput`<sup>Optional</sup> <a name="AwsServiceInput" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.property.awsServiceInput"></a>

```csharp
public string AwsServiceInput { get; }
```

- *Type:* string

---

##### `OnFailureConfigurationInput`<sup>Optional</sup> <a name="OnFailureConfigurationInput" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.property.onFailureConfigurationInput"></a>

```csharp
public IResolvable|Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfiguration OnFailureConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfiguration">Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfiguration</a>

---

##### `PatternInput`<sup>Optional</sup> <a name="PatternInput" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.property.patternInput"></a>

```csharp
public string PatternInput { get; }
```

- *Type:* string

---

##### `AwsService`<sup>Required</sup> <a name="AwsService" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.property.awsService"></a>

```csharp
public string AwsService { get; }
```

- *Type:* string

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.property.pattern"></a>

```csharp
public string Pattern { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Eventsv2EventSourceConfigurationAwsServiceEventsConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfiguration">Eventsv2EventSourceConfigurationAwsServiceEventsConfiguration</a>

---


### Eventsv2EventSourceConfigurationOutputReference <a name="Eventsv2EventSourceConfigurationOutputReference" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Eventsv2EventSourceConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.putAwsServiceEventsConfiguration">PutAwsServiceEventsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.putPartnerEventsConfiguration">PutPartnerEventsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.putWebhookEventsConfiguration">PutWebhookEventsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.resetAwsServiceEventsConfiguration">ResetAwsServiceEventsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.resetPartnerEventsConfiguration">ResetPartnerEventsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.resetWebhookEventsConfiguration">ResetWebhookEventsConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAwsServiceEventsConfiguration` <a name="PutAwsServiceEventsConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.putAwsServiceEventsConfiguration"></a>

```csharp
private void PutAwsServiceEventsConfiguration(Eventsv2EventSourceConfigurationAwsServiceEventsConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.putAwsServiceEventsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfiguration">Eventsv2EventSourceConfigurationAwsServiceEventsConfiguration</a>

---

##### `PutPartnerEventsConfiguration` <a name="PutPartnerEventsConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.putPartnerEventsConfiguration"></a>

```csharp
private void PutPartnerEventsConfiguration(Eventsv2EventSourceConfigurationPartnerEventsConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.putPartnerEventsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfiguration">Eventsv2EventSourceConfigurationPartnerEventsConfiguration</a>

---

##### `PutWebhookEventsConfiguration` <a name="PutWebhookEventsConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.putWebhookEventsConfiguration"></a>

```csharp
private void PutWebhookEventsConfiguration(Eventsv2EventSourceConfigurationWebhookEventsConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.putWebhookEventsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfiguration">Eventsv2EventSourceConfigurationWebhookEventsConfiguration</a>

---

##### `ResetAwsServiceEventsConfiguration` <a name="ResetAwsServiceEventsConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.resetAwsServiceEventsConfiguration"></a>

```csharp
private void ResetAwsServiceEventsConfiguration()
```

##### `ResetPartnerEventsConfiguration` <a name="ResetPartnerEventsConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.resetPartnerEventsConfiguration"></a>

```csharp
private void ResetPartnerEventsConfiguration()
```

##### `ResetWebhookEventsConfiguration` <a name="ResetWebhookEventsConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.resetWebhookEventsConfiguration"></a>

```csharp
private void ResetWebhookEventsConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.property.awsServiceEventsConfiguration">AwsServiceEventsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference">Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.property.partnerEventsConfiguration">PartnerEventsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference">Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.property.webhookEventsConfiguration">WebhookEventsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference">Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.property.awsServiceEventsConfigurationInput">AwsServiceEventsConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfiguration">Eventsv2EventSourceConfigurationAwsServiceEventsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.property.partnerEventsConfigurationInput">PartnerEventsConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfiguration">Eventsv2EventSourceConfigurationPartnerEventsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.property.webhookEventsConfigurationInput">WebhookEventsConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfiguration">Eventsv2EventSourceConfigurationWebhookEventsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfiguration">Eventsv2EventSourceConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AwsServiceEventsConfiguration`<sup>Required</sup> <a name="AwsServiceEventsConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.property.awsServiceEventsConfiguration"></a>

```csharp
public Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference AwsServiceEventsConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference">Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference</a>

---

##### `PartnerEventsConfiguration`<sup>Required</sup> <a name="PartnerEventsConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.property.partnerEventsConfiguration"></a>

```csharp
public Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference PartnerEventsConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference">Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference</a>

---

##### `WebhookEventsConfiguration`<sup>Required</sup> <a name="WebhookEventsConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.property.webhookEventsConfiguration"></a>

```csharp
public Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference WebhookEventsConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference">Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference</a>

---

##### `AwsServiceEventsConfigurationInput`<sup>Optional</sup> <a name="AwsServiceEventsConfigurationInput" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.property.awsServiceEventsConfigurationInput"></a>

```csharp
public IResolvable|Eventsv2EventSourceConfigurationAwsServiceEventsConfiguration AwsServiceEventsConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfiguration">Eventsv2EventSourceConfigurationAwsServiceEventsConfiguration</a>

---

##### `PartnerEventsConfigurationInput`<sup>Optional</sup> <a name="PartnerEventsConfigurationInput" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.property.partnerEventsConfigurationInput"></a>

```csharp
public IResolvable|Eventsv2EventSourceConfigurationPartnerEventsConfiguration PartnerEventsConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfiguration">Eventsv2EventSourceConfigurationPartnerEventsConfiguration</a>

---

##### `WebhookEventsConfigurationInput`<sup>Optional</sup> <a name="WebhookEventsConfigurationInput" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.property.webhookEventsConfigurationInput"></a>

```csharp
public IResolvable|Eventsv2EventSourceConfigurationWebhookEventsConfiguration WebhookEventsConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfiguration">Eventsv2EventSourceConfigurationWebhookEventsConfiguration</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Eventsv2EventSourceConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfiguration">Eventsv2EventSourceConfiguration</a>

---


### Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference <a name="Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.resetArn">ResetArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetArn` <a name="ResetArn" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.resetArn"></a>

```csharp
private void ResetArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.property.arnInput">ArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfiguration">Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.property.arnInput"></a>

```csharp
public string ArnInput { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfiguration">Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfiguration</a>

---


### Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference <a name="Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.putOnFailureConfiguration">PutOnFailureConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.resetOnFailureConfiguration">ResetOnFailureConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.resetPartnerBusKmsKeyIdentifier">ResetPartnerBusKmsKeyIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.resetPartnerEventSourceArn">ResetPartnerEventSourceArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.resetPattern">ResetPattern</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOnFailureConfiguration` <a name="PutOnFailureConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.putOnFailureConfiguration"></a>

```csharp
private void PutOnFailureConfiguration(Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.putOnFailureConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfiguration">Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfiguration</a>

---

##### `ResetOnFailureConfiguration` <a name="ResetOnFailureConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.resetOnFailureConfiguration"></a>

```csharp
private void ResetOnFailureConfiguration()
```

##### `ResetPartnerBusKmsKeyIdentifier` <a name="ResetPartnerBusKmsKeyIdentifier" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.resetPartnerBusKmsKeyIdentifier"></a>

```csharp
private void ResetPartnerBusKmsKeyIdentifier()
```

##### `ResetPartnerEventSourceArn` <a name="ResetPartnerEventSourceArn" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.resetPartnerEventSourceArn"></a>

```csharp
private void ResetPartnerEventSourceArn()
```

##### `ResetPattern` <a name="ResetPattern" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.resetPattern"></a>

```csharp
private void ResetPattern()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.property.onFailureConfiguration">OnFailureConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference">Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.property.onFailureConfigurationInput">OnFailureConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfiguration">Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.property.partnerBusKmsKeyIdentifierInput">PartnerBusKmsKeyIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.property.partnerEventSourceArnInput">PartnerEventSourceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.property.patternInput">PatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.property.partnerBusKmsKeyIdentifier">PartnerBusKmsKeyIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.property.partnerEventSourceArn">PartnerEventSourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.property.pattern">Pattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfiguration">Eventsv2EventSourceConfigurationPartnerEventsConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OnFailureConfiguration`<sup>Required</sup> <a name="OnFailureConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.property.onFailureConfiguration"></a>

```csharp
public Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference OnFailureConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference">Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference</a>

---

##### `OnFailureConfigurationInput`<sup>Optional</sup> <a name="OnFailureConfigurationInput" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.property.onFailureConfigurationInput"></a>

```csharp
public IResolvable|Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfiguration OnFailureConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfiguration">Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfiguration</a>

---

##### `PartnerBusKmsKeyIdentifierInput`<sup>Optional</sup> <a name="PartnerBusKmsKeyIdentifierInput" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.property.partnerBusKmsKeyIdentifierInput"></a>

```csharp
public string PartnerBusKmsKeyIdentifierInput { get; }
```

- *Type:* string

---

##### `PartnerEventSourceArnInput`<sup>Optional</sup> <a name="PartnerEventSourceArnInput" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.property.partnerEventSourceArnInput"></a>

```csharp
public string PartnerEventSourceArnInput { get; }
```

- *Type:* string

---

##### `PatternInput`<sup>Optional</sup> <a name="PatternInput" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.property.patternInput"></a>

```csharp
public string PatternInput { get; }
```

- *Type:* string

---

##### `PartnerBusKmsKeyIdentifier`<sup>Required</sup> <a name="PartnerBusKmsKeyIdentifier" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.property.partnerBusKmsKeyIdentifier"></a>

```csharp
public string PartnerBusKmsKeyIdentifier { get; }
```

- *Type:* string

---

##### `PartnerEventSourceArn`<sup>Required</sup> <a name="PartnerEventSourceArn" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.property.partnerEventSourceArn"></a>

```csharp
public string PartnerEventSourceArn { get; }
```

- *Type:* string

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.property.pattern"></a>

```csharp
public string Pattern { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Eventsv2EventSourceConfigurationPartnerEventsConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfiguration">Eventsv2EventSourceConfigurationPartnerEventsConfiguration</a>

---


### Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference <a name="Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPassword` <a name="ResetPassword" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.resetUsername"></a>

```csharp
private void ResetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfiguration">Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfiguration">Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfiguration</a>

---


### Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference <a name="Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.resetAlgorithm">ResetAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.resetDelimiter">ResetDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.resetEncoding">ResetEncoding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.resetMessageIdHttpHeader">ResetMessageIdHttpHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.resetSecretEncoding">ResetSecretEncoding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.resetSecretValue">ResetSecretValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.resetSignatureHttpHeader">ResetSignatureHttpHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.resetSignaturePrefix">ResetSignaturePrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.resetSignedMessageComposition">ResetSignedMessageComposition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.resetTimestampHttpHeader">ResetTimestampHttpHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.resetTimestampPrefix">ResetTimestampPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.resetTimestampToleranceInSeconds">ResetTimestampToleranceInSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAlgorithm` <a name="ResetAlgorithm" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.resetAlgorithm"></a>

```csharp
private void ResetAlgorithm()
```

##### `ResetDelimiter` <a name="ResetDelimiter" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.resetDelimiter"></a>

```csharp
private void ResetDelimiter()
```

##### `ResetEncoding` <a name="ResetEncoding" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.resetEncoding"></a>

```csharp
private void ResetEncoding()
```

##### `ResetMessageIdHttpHeader` <a name="ResetMessageIdHttpHeader" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.resetMessageIdHttpHeader"></a>

```csharp
private void ResetMessageIdHttpHeader()
```

##### `ResetSecretEncoding` <a name="ResetSecretEncoding" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.resetSecretEncoding"></a>

```csharp
private void ResetSecretEncoding()
```

##### `ResetSecretValue` <a name="ResetSecretValue" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.resetSecretValue"></a>

```csharp
private void ResetSecretValue()
```

##### `ResetSignatureHttpHeader` <a name="ResetSignatureHttpHeader" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.resetSignatureHttpHeader"></a>

```csharp
private void ResetSignatureHttpHeader()
```

##### `ResetSignaturePrefix` <a name="ResetSignaturePrefix" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.resetSignaturePrefix"></a>

```csharp
private void ResetSignaturePrefix()
```

##### `ResetSignedMessageComposition` <a name="ResetSignedMessageComposition" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.resetSignedMessageComposition"></a>

```csharp
private void ResetSignedMessageComposition()
```

##### `ResetTimestampHttpHeader` <a name="ResetTimestampHttpHeader" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.resetTimestampHttpHeader"></a>

```csharp
private void ResetTimestampHttpHeader()
```

##### `ResetTimestampPrefix` <a name="ResetTimestampPrefix" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.resetTimestampPrefix"></a>

```csharp
private void ResetTimestampPrefix()
```

##### `ResetTimestampToleranceInSeconds` <a name="ResetTimestampToleranceInSeconds" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.resetTimestampToleranceInSeconds"></a>

```csharp
private void ResetTimestampToleranceInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.algorithmInput">AlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.delimiterInput">DelimiterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.encodingInput">EncodingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.messageIdHttpHeaderInput">MessageIdHttpHeaderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.secretEncodingInput">SecretEncodingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.secretValueInput">SecretValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.signatureHttpHeaderInput">SignatureHttpHeaderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.signaturePrefixInput">SignaturePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.signedMessageCompositionInput">SignedMessageCompositionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.timestampHttpHeaderInput">TimestampHttpHeaderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.timestampPrefixInput">TimestampPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.timestampToleranceInSecondsInput">TimestampToleranceInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.algorithm">Algorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.delimiter">Delimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.encoding">Encoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.messageIdHttpHeader">MessageIdHttpHeader</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.secretEncoding">SecretEncoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.secretValue">SecretValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.signatureHttpHeader">SignatureHttpHeader</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.signaturePrefix">SignaturePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.signedMessageComposition">SignedMessageComposition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.timestampHttpHeader">TimestampHttpHeader</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.timestampPrefix">TimestampPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.timestampToleranceInSeconds">TimestampToleranceInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration">Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AlgorithmInput`<sup>Optional</sup> <a name="AlgorithmInput" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.algorithmInput"></a>

```csharp
public string AlgorithmInput { get; }
```

- *Type:* string

---

##### `DelimiterInput`<sup>Optional</sup> <a name="DelimiterInput" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.delimiterInput"></a>

```csharp
public string DelimiterInput { get; }
```

- *Type:* string

---

##### `EncodingInput`<sup>Optional</sup> <a name="EncodingInput" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.encodingInput"></a>

```csharp
public string EncodingInput { get; }
```

- *Type:* string

---

##### `MessageIdHttpHeaderInput`<sup>Optional</sup> <a name="MessageIdHttpHeaderInput" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.messageIdHttpHeaderInput"></a>

```csharp
public string MessageIdHttpHeaderInput { get; }
```

- *Type:* string

---

##### `SecretEncodingInput`<sup>Optional</sup> <a name="SecretEncodingInput" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.secretEncodingInput"></a>

```csharp
public string SecretEncodingInput { get; }
```

- *Type:* string

---

##### `SecretValueInput`<sup>Optional</sup> <a name="SecretValueInput" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.secretValueInput"></a>

```csharp
public string SecretValueInput { get; }
```

- *Type:* string

---

##### `SignatureHttpHeaderInput`<sup>Optional</sup> <a name="SignatureHttpHeaderInput" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.signatureHttpHeaderInput"></a>

```csharp
public string SignatureHttpHeaderInput { get; }
```

- *Type:* string

---

##### `SignaturePrefixInput`<sup>Optional</sup> <a name="SignaturePrefixInput" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.signaturePrefixInput"></a>

```csharp
public string SignaturePrefixInput { get; }
```

- *Type:* string

---

##### `SignedMessageCompositionInput`<sup>Optional</sup> <a name="SignedMessageCompositionInput" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.signedMessageCompositionInput"></a>

```csharp
public string SignedMessageCompositionInput { get; }
```

- *Type:* string

---

##### `TimestampHttpHeaderInput`<sup>Optional</sup> <a name="TimestampHttpHeaderInput" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.timestampHttpHeaderInput"></a>

```csharp
public string TimestampHttpHeaderInput { get; }
```

- *Type:* string

---

##### `TimestampPrefixInput`<sup>Optional</sup> <a name="TimestampPrefixInput" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.timestampPrefixInput"></a>

```csharp
public string TimestampPrefixInput { get; }
```

- *Type:* string

---

##### `TimestampToleranceInSecondsInput`<sup>Optional</sup> <a name="TimestampToleranceInSecondsInput" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.timestampToleranceInSecondsInput"></a>

```csharp
public double TimestampToleranceInSecondsInput { get; }
```

- *Type:* double

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.algorithm"></a>

```csharp
public string Algorithm { get; }
```

- *Type:* string

---

##### `Delimiter`<sup>Required</sup> <a name="Delimiter" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.delimiter"></a>

```csharp
public string Delimiter { get; }
```

- *Type:* string

---

##### `Encoding`<sup>Required</sup> <a name="Encoding" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.encoding"></a>

```csharp
public string Encoding { get; }
```

- *Type:* string

---

##### `MessageIdHttpHeader`<sup>Required</sup> <a name="MessageIdHttpHeader" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.messageIdHttpHeader"></a>

```csharp
public string MessageIdHttpHeader { get; }
```

- *Type:* string

---

##### `SecretEncoding`<sup>Required</sup> <a name="SecretEncoding" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.secretEncoding"></a>

```csharp
public string SecretEncoding { get; }
```

- *Type:* string

---

##### `SecretValue`<sup>Required</sup> <a name="SecretValue" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.secretValue"></a>

```csharp
public string SecretValue { get; }
```

- *Type:* string

---

##### `SignatureHttpHeader`<sup>Required</sup> <a name="SignatureHttpHeader" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.signatureHttpHeader"></a>

```csharp
public string SignatureHttpHeader { get; }
```

- *Type:* string

---

##### `SignaturePrefix`<sup>Required</sup> <a name="SignaturePrefix" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.signaturePrefix"></a>

```csharp
public string SignaturePrefix { get; }
```

- *Type:* string

---

##### `SignedMessageComposition`<sup>Required</sup> <a name="SignedMessageComposition" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.signedMessageComposition"></a>

```csharp
public string SignedMessageComposition { get; }
```

- *Type:* string

---

##### `TimestampHttpHeader`<sup>Required</sup> <a name="TimestampHttpHeader" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.timestampHttpHeader"></a>

```csharp
public string TimestampHttpHeader { get; }
```

- *Type:* string

---

##### `TimestampPrefix`<sup>Required</sup> <a name="TimestampPrefix" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.timestampPrefix"></a>

```csharp
public string TimestampPrefix { get; }
```

- *Type:* string

---

##### `TimestampToleranceInSeconds`<sup>Required</sup> <a name="TimestampToleranceInSeconds" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.timestampToleranceInSeconds"></a>

```csharp
public double TimestampToleranceInSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration">Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration</a>

---


### Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference <a name="Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.putBasicHttpAuthConfiguration">PutBasicHttpAuthConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.putHmacAuthConfiguration">PutHmacAuthConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.putStaticTokenAuthConfiguration">PutStaticTokenAuthConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.resetBasicHttpAuthConfiguration">ResetBasicHttpAuthConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.resetHmacAuthConfiguration">ResetHmacAuthConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.resetStaticTokenAuthConfiguration">ResetStaticTokenAuthConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBasicHttpAuthConfiguration` <a name="PutBasicHttpAuthConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.putBasicHttpAuthConfiguration"></a>

```csharp
private void PutBasicHttpAuthConfiguration(Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.putBasicHttpAuthConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfiguration">Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfiguration</a>

---

##### `PutHmacAuthConfiguration` <a name="PutHmacAuthConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.putHmacAuthConfiguration"></a>

```csharp
private void PutHmacAuthConfiguration(Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.putHmacAuthConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration">Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration</a>

---

##### `PutStaticTokenAuthConfiguration` <a name="PutStaticTokenAuthConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.putStaticTokenAuthConfiguration"></a>

```csharp
private void PutStaticTokenAuthConfiguration(Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.putStaticTokenAuthConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfiguration">Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfiguration</a>

---

##### `ResetBasicHttpAuthConfiguration` <a name="ResetBasicHttpAuthConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.resetBasicHttpAuthConfiguration"></a>

```csharp
private void ResetBasicHttpAuthConfiguration()
```

##### `ResetHmacAuthConfiguration` <a name="ResetHmacAuthConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.resetHmacAuthConfiguration"></a>

```csharp
private void ResetHmacAuthConfiguration()
```

##### `ResetStaticTokenAuthConfiguration` <a name="ResetStaticTokenAuthConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.resetStaticTokenAuthConfiguration"></a>

```csharp
private void ResetStaticTokenAuthConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.property.basicHttpAuthConfiguration">BasicHttpAuthConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference">Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.property.hmacAuthConfiguration">HmacAuthConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference">Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.property.staticTokenAuthConfiguration">StaticTokenAuthConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference">Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.property.basicHttpAuthConfigurationInput">BasicHttpAuthConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfiguration">Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.property.hmacAuthConfigurationInput">HmacAuthConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration">Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.property.staticTokenAuthConfigurationInput">StaticTokenAuthConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfiguration">Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfiguration">Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BasicHttpAuthConfiguration`<sup>Required</sup> <a name="BasicHttpAuthConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.property.basicHttpAuthConfiguration"></a>

```csharp
public Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference BasicHttpAuthConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference">Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference</a>

---

##### `HmacAuthConfiguration`<sup>Required</sup> <a name="HmacAuthConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.property.hmacAuthConfiguration"></a>

```csharp
public Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference HmacAuthConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference">Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference</a>

---

##### `StaticTokenAuthConfiguration`<sup>Required</sup> <a name="StaticTokenAuthConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.property.staticTokenAuthConfiguration"></a>

```csharp
public Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference StaticTokenAuthConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference">Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference</a>

---

##### `BasicHttpAuthConfigurationInput`<sup>Optional</sup> <a name="BasicHttpAuthConfigurationInput" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.property.basicHttpAuthConfigurationInput"></a>

```csharp
public IResolvable|Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfiguration BasicHttpAuthConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfiguration">Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfiguration</a>

---

##### `HmacAuthConfigurationInput`<sup>Optional</sup> <a name="HmacAuthConfigurationInput" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.property.hmacAuthConfigurationInput"></a>

```csharp
public IResolvable|Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration HmacAuthConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration">Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration</a>

---

##### `StaticTokenAuthConfigurationInput`<sup>Optional</sup> <a name="StaticTokenAuthConfigurationInput" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.property.staticTokenAuthConfigurationInput"></a>

```csharp
public IResolvable|Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfiguration StaticTokenAuthConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfiguration">Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfiguration</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfiguration">Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfiguration</a>

---


### Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference <a name="Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.resetSecretValue">ResetSecretValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.resetTokenHttpHeader">ResetTokenHttpHeader</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecretValue` <a name="ResetSecretValue" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.resetSecretValue"></a>

```csharp
private void ResetSecretValue()
```

##### `ResetTokenHttpHeader` <a name="ResetTokenHttpHeader" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.resetTokenHttpHeader"></a>

```csharp
private void ResetTokenHttpHeader()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.property.secretValueInput">SecretValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.property.tokenHttpHeaderInput">TokenHttpHeaderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.property.secretValue">SecretValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.property.tokenHttpHeader">TokenHttpHeader</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfiguration">Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecretValueInput`<sup>Optional</sup> <a name="SecretValueInput" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.property.secretValueInput"></a>

```csharp
public string SecretValueInput { get; }
```

- *Type:* string

---

##### `TokenHttpHeaderInput`<sup>Optional</sup> <a name="TokenHttpHeaderInput" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.property.tokenHttpHeaderInput"></a>

```csharp
public string TokenHttpHeaderInput { get; }
```

- *Type:* string

---

##### `SecretValue`<sup>Required</sup> <a name="SecretValue" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.property.secretValue"></a>

```csharp
public string SecretValue { get; }
```

- *Type:* string

---

##### `TokenHttpHeader`<sup>Required</sup> <a name="TokenHttpHeader" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.property.tokenHttpHeader"></a>

```csharp
public string TokenHttpHeader { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfiguration">Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfiguration</a>

---


### Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference <a name="Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.resetDeduplicationType">ResetDeduplicationType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeduplicationType` <a name="ResetDeduplicationType" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.resetDeduplicationType"></a>

```csharp
private void ResetDeduplicationType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.property.deduplicationTypeInput">DeduplicationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.property.deduplicationType">DeduplicationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfiguration">Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeduplicationTypeInput`<sup>Optional</sup> <a name="DeduplicationTypeInput" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.property.deduplicationTypeInput"></a>

```csharp
public string DeduplicationTypeInput { get; }
```

- *Type:* string

---

##### `DeduplicationType`<sup>Required</sup> <a name="DeduplicationType" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.property.deduplicationType"></a>

```csharp
public string DeduplicationType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfiguration">Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfiguration</a>

---


### Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference <a name="Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.resetIncludePayload">ResetIncludePayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.resetLevel">ResetLevel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIncludePayload` <a name="ResetIncludePayload" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.resetIncludePayload"></a>

```csharp
private void ResetIncludePayload()
```

##### `ResetLevel` <a name="ResetLevel" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.resetLevel"></a>

```csharp
private void ResetLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.property.includePayloadInput">IncludePayloadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.property.levelInput">LevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.property.includePayload">IncludePayload</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.property.level">Level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfiguration">Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IncludePayloadInput`<sup>Optional</sup> <a name="IncludePayloadInput" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.property.includePayloadInput"></a>

```csharp
public string IncludePayloadInput { get; }
```

- *Type:* string

---

##### `LevelInput`<sup>Optional</sup> <a name="LevelInput" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.property.levelInput"></a>

```csharp
public string LevelInput { get; }
```

- *Type:* string

---

##### `IncludePayload`<sup>Required</sup> <a name="IncludePayload" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.property.includePayload"></a>

```csharp
public string IncludePayload { get; }
```

- *Type:* string

---

##### `Level`<sup>Required</sup> <a name="Level" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.property.level"></a>

```csharp
public string Level { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfiguration">Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfiguration</a>

---


### Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference <a name="Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.putAuthConfiguration">PutAuthConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.putDeduplicationConfiguration">PutDeduplicationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.putLogConfiguration">PutLogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.resetAuthConfiguration">ResetAuthConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.resetDeduplicationConfiguration">ResetDeduplicationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.resetKmsKeyIdentifier">ResetKmsKeyIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.resetLogConfiguration">ResetLogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.resetMetadataHttpHeaders">ResetMetadataHttpHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.resetRoleArn">ResetRoleArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuthConfiguration` <a name="PutAuthConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.putAuthConfiguration"></a>

```csharp
private void PutAuthConfiguration(Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.putAuthConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfiguration">Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfiguration</a>

---

##### `PutDeduplicationConfiguration` <a name="PutDeduplicationConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.putDeduplicationConfiguration"></a>

```csharp
private void PutDeduplicationConfiguration(Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.putDeduplicationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfiguration">Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfiguration</a>

---

##### `PutLogConfiguration` <a name="PutLogConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.putLogConfiguration"></a>

```csharp
private void PutLogConfiguration(Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.putLogConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfiguration">Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfiguration</a>

---

##### `ResetAuthConfiguration` <a name="ResetAuthConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.resetAuthConfiguration"></a>

```csharp
private void ResetAuthConfiguration()
```

##### `ResetDeduplicationConfiguration` <a name="ResetDeduplicationConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.resetDeduplicationConfiguration"></a>

```csharp
private void ResetDeduplicationConfiguration()
```

##### `ResetKmsKeyIdentifier` <a name="ResetKmsKeyIdentifier" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.resetKmsKeyIdentifier"></a>

```csharp
private void ResetKmsKeyIdentifier()
```

##### `ResetLogConfiguration` <a name="ResetLogConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.resetLogConfiguration"></a>

```csharp
private void ResetLogConfiguration()
```

##### `ResetMetadataHttpHeaders` <a name="ResetMetadataHttpHeaders" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.resetMetadataHttpHeaders"></a>

```csharp
private void ResetMetadataHttpHeaders()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.resetRoleArn"></a>

```csharp
private void ResetRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.property.authConfiguration">AuthConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference">Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.property.deduplicationConfiguration">DeduplicationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference">Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.property.logConfiguration">LogConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference">Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.property.authConfigurationInput">AuthConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfiguration">Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.property.deduplicationConfigurationInput">DeduplicationConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfiguration">Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.property.kmsKeyIdentifierInput">KmsKeyIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.property.logConfigurationInput">LogConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfiguration">Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.property.metadataHttpHeadersInput">MetadataHttpHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.property.kmsKeyIdentifier">KmsKeyIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.property.metadataHttpHeaders">MetadataHttpHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfiguration">Eventsv2EventSourceConfigurationWebhookEventsConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthConfiguration`<sup>Required</sup> <a name="AuthConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.property.authConfiguration"></a>

```csharp
public Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference AuthConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference">Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference</a>

---

##### `DeduplicationConfiguration`<sup>Required</sup> <a name="DeduplicationConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.property.deduplicationConfiguration"></a>

```csharp
public Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference DeduplicationConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference">Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference</a>

---

##### `LogConfiguration`<sup>Required</sup> <a name="LogConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.property.logConfiguration"></a>

```csharp
public Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference LogConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference">Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference</a>

---

##### `AuthConfigurationInput`<sup>Optional</sup> <a name="AuthConfigurationInput" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.property.authConfigurationInput"></a>

```csharp
public IResolvable|Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfiguration AuthConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfiguration">Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfiguration</a>

---

##### `DeduplicationConfigurationInput`<sup>Optional</sup> <a name="DeduplicationConfigurationInput" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.property.deduplicationConfigurationInput"></a>

```csharp
public IResolvable|Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfiguration DeduplicationConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfiguration">Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfiguration</a>

---

##### `KmsKeyIdentifierInput`<sup>Optional</sup> <a name="KmsKeyIdentifierInput" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.property.kmsKeyIdentifierInput"></a>

```csharp
public string KmsKeyIdentifierInput { get; }
```

- *Type:* string

---

##### `LogConfigurationInput`<sup>Optional</sup> <a name="LogConfigurationInput" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.property.logConfigurationInput"></a>

```csharp
public IResolvable|Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfiguration LogConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfiguration">Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfiguration</a>

---

##### `MetadataHttpHeadersInput`<sup>Optional</sup> <a name="MetadataHttpHeadersInput" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.property.metadataHttpHeadersInput"></a>

```csharp
public string[] MetadataHttpHeadersInput { get; }
```

- *Type:* string[]

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `KmsKeyIdentifier`<sup>Required</sup> <a name="KmsKeyIdentifier" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.property.kmsKeyIdentifier"></a>

```csharp
public string KmsKeyIdentifier { get; }
```

- *Type:* string

---

##### `MetadataHttpHeaders`<sup>Required</sup> <a name="MetadataHttpHeaders" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.property.metadataHttpHeaders"></a>

```csharp
public string[] MetadataHttpHeaders { get; }
```

- *Type:* string[]

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Eventsv2EventSourceConfigurationWebhookEventsConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfiguration">Eventsv2EventSourceConfigurationWebhookEventsConfiguration</a>

---


### Eventsv2EventSourceDetailsOutputReference <a name="Eventsv2EventSourceDetailsOutputReference" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Eventsv2EventSourceDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.putWebhookDetails">PutWebhookDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.resetWebhookDetails">ResetWebhookDetails</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutWebhookDetails` <a name="PutWebhookDetails" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.putWebhookDetails"></a>

```csharp
private void PutWebhookDetails(Eventsv2EventSourceDetailsWebhookDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.putWebhookDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetails">Eventsv2EventSourceDetailsWebhookDetails</a>

---

##### `ResetWebhookDetails` <a name="ResetWebhookDetails" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.resetWebhookDetails"></a>

```csharp
private void ResetWebhookDetails()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.property.webhookDetails">WebhookDetails</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetailsOutputReference">Eventsv2EventSourceDetailsWebhookDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.property.webhookDetailsInput">WebhookDetailsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetails">Eventsv2EventSourceDetailsWebhookDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetails">Eventsv2EventSourceDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WebhookDetails`<sup>Required</sup> <a name="WebhookDetails" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.property.webhookDetails"></a>

```csharp
public Eventsv2EventSourceDetailsWebhookDetailsOutputReference WebhookDetails { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetailsOutputReference">Eventsv2EventSourceDetailsWebhookDetailsOutputReference</a>

---

##### `WebhookDetailsInput`<sup>Optional</sup> <a name="WebhookDetailsInput" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.property.webhookDetailsInput"></a>

```csharp
public IResolvable|Eventsv2EventSourceDetailsWebhookDetails WebhookDetailsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetails">Eventsv2EventSourceDetailsWebhookDetails</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Eventsv2EventSourceDetails InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetails">Eventsv2EventSourceDetails</a>

---


### Eventsv2EventSourceDetailsWebhookDetailsOutputReference <a name="Eventsv2EventSourceDetailsWebhookDetailsOutputReference" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetailsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Eventsv2EventSourceDetailsWebhookDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetailsOutputReference.property.secretArn">SecretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetailsOutputReference.property.webhookUrl">WebhookUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetails">Eventsv2EventSourceDetailsWebhookDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetailsOutputReference.property.secretArn"></a>

```csharp
public string SecretArn { get; }
```

- *Type:* string

---

##### `WebhookUrl`<sup>Required</sup> <a name="WebhookUrl" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetailsOutputReference.property.webhookUrl"></a>

```csharp
public string WebhookUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetailsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Eventsv2EventSourceDetailsWebhookDetails InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetails">Eventsv2EventSourceDetailsWebhookDetails</a>

---


### Eventsv2EventSourceTagsList <a name="Eventsv2EventSourceTagsList" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Eventsv2EventSourceTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsList.get"></a>

```csharp
private Eventsv2EventSourceTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTags">Eventsv2EventSourceTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsList.property.internalValue"></a>

```csharp
public IResolvable|Eventsv2EventSourceTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTags">Eventsv2EventSourceTags</a>[]

---


### Eventsv2EventSourceTagsOutputReference <a name="Eventsv2EventSourceTagsOutputReference" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Eventsv2EventSourceTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTags">Eventsv2EventSourceTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Eventsv2EventSourceTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTags">Eventsv2EventSourceTags</a>

---



