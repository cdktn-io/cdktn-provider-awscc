# `eventschemasDiscoverer` Submodule <a name="`eventschemasDiscoverer` Submodule" id="@cdktn/provider-awscc.eventschemasDiscoverer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EventschemasDiscoverer <a name="EventschemasDiscoverer" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eventschemas_discoverer awscc_eventschemas_discoverer}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EventschemasDiscoverer(Construct Scope, string Id, EventschemasDiscovererConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererConfig">EventschemasDiscovererConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererConfig">EventschemasDiscovererConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.resetCrossAccount">ResetCrossAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.putTags"></a>

```csharp
private void PutTags(IResolvable|EventschemasDiscovererTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTags">EventschemasDiscovererTags</a>[]

---

##### `ResetCrossAccount` <a name="ResetCrossAccount" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.resetCrossAccount"></a>

```csharp
private void ResetCrossAccount()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a EventschemasDiscoverer resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

EventschemasDiscoverer.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

EventschemasDiscoverer.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

EventschemasDiscoverer.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

EventschemasDiscoverer.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a EventschemasDiscoverer resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EventschemasDiscoverer to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EventschemasDiscoverer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eventschemas_discoverer#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the EventschemasDiscoverer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.discovererArn">DiscovererArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.discovererId">DiscovererId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsList">EventschemasDiscovererTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.crossAccountInput">CrossAccountInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.sourceArnInput">SourceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTags">EventschemasDiscovererTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.crossAccount">CrossAccount</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.sourceArn">SourceArn</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DiscovererArn`<sup>Required</sup> <a name="DiscovererArn" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.discovererArn"></a>

```csharp
public string DiscovererArn { get; }
```

- *Type:* string

---

##### `DiscovererId`<sup>Required</sup> <a name="DiscovererId" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.discovererId"></a>

```csharp
public string DiscovererId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.tags"></a>

```csharp
public EventschemasDiscovererTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsList">EventschemasDiscovererTagsList</a>

---

##### `CrossAccountInput`<sup>Optional</sup> <a name="CrossAccountInput" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.crossAccountInput"></a>

```csharp
public bool|IResolvable CrossAccountInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `SourceArnInput`<sup>Optional</sup> <a name="SourceArnInput" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.sourceArnInput"></a>

```csharp
public string SourceArnInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.tagsInput"></a>

```csharp
public IResolvable|EventschemasDiscovererTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTags">EventschemasDiscovererTags</a>[]

---

##### `CrossAccount`<sup>Required</sup> <a name="CrossAccount" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.crossAccount"></a>

```csharp
public bool|IResolvable CrossAccount { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `SourceArn`<sup>Required</sup> <a name="SourceArn" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.sourceArn"></a>

```csharp
public string SourceArn { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EventschemasDiscovererConfig <a name="EventschemasDiscovererConfig" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EventschemasDiscovererConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string SourceArn,
    bool|IResolvable CrossAccount = null,
    string Description = null,
    IResolvable|EventschemasDiscovererTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererConfig.property.sourceArn">SourceArn</a></code> | <code>string</code> | The ARN of the event bus. |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererConfig.property.crossAccount">CrossAccount</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Defines whether event schemas from other accounts are discovered. Default is True. |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererConfig.property.description">Description</a></code> | <code>string</code> | A description for the discoverer. |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTags">EventschemasDiscovererTags</a>[]</code> | Tags associated with the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `SourceArn`<sup>Required</sup> <a name="SourceArn" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererConfig.property.sourceArn"></a>

```csharp
public string SourceArn { get; set; }
```

- *Type:* string

The ARN of the event bus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eventschemas_discoverer#source_arn EventschemasDiscoverer#source_arn}

---

##### `CrossAccount`<sup>Optional</sup> <a name="CrossAccount" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererConfig.property.crossAccount"></a>

```csharp
public bool|IResolvable CrossAccount { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Defines whether event schemas from other accounts are discovered. Default is True.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eventschemas_discoverer#cross_account EventschemasDiscoverer#cross_account}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description for the discoverer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eventschemas_discoverer#description EventschemasDiscoverer#description}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererConfig.property.tags"></a>

```csharp
public IResolvable|EventschemasDiscovererTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTags">EventschemasDiscovererTags</a>[]

Tags associated with the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eventschemas_discoverer#tags EventschemasDiscoverer#tags}

---

### EventschemasDiscovererTags <a name="EventschemasDiscovererTags" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EventschemasDiscovererTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eventschemas_discoverer#key EventschemasDiscoverer#key}. |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eventschemas_discoverer#value EventschemasDiscoverer#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eventschemas_discoverer#key EventschemasDiscoverer#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eventschemas_discoverer#value EventschemasDiscoverer#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### EventschemasDiscovererTagsList <a name="EventschemasDiscovererTagsList" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EventschemasDiscovererTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsList.get"></a>

```csharp
private EventschemasDiscovererTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTags">EventschemasDiscovererTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsList.property.internalValue"></a>

```csharp
public IResolvable|EventschemasDiscovererTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTags">EventschemasDiscovererTags</a>[]

---


### EventschemasDiscovererTagsOutputReference <a name="EventschemasDiscovererTagsOutputReference" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EventschemasDiscovererTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTags">EventschemasDiscovererTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EventschemasDiscovererTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTags">EventschemasDiscovererTags</a>

---



