# `eventsEventBusPolicy` Submodule <a name="`eventsEventBusPolicy` Submodule" id="@cdktn/provider-awscc.eventsEventBusPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EventsEventBusPolicy <a name="EventsEventBusPolicy" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_event_bus_policy awscc_events_event_bus_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EventsEventBusPolicy(Construct Scope, string Id, EventsEventBusPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig">EventsEventBusPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig">EventsEventBusPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.resetEventBusName">ResetEventBusName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.resetPrincipal">ResetPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.resetStatement">ResetStatement</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCondition` <a name="PutCondition" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.putCondition"></a>

```csharp
private void PutCondition(EventsEventBusPolicyCondition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyCondition">EventsEventBusPolicyCondition</a>

---

##### `ResetAction` <a name="ResetAction" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.resetAction"></a>

```csharp
private void ResetAction()
```

##### `ResetCondition` <a name="ResetCondition" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.resetCondition"></a>

```csharp
private void ResetCondition()
```

##### `ResetEventBusName` <a name="ResetEventBusName" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.resetEventBusName"></a>

```csharp
private void ResetEventBusName()
```

##### `ResetPrincipal` <a name="ResetPrincipal" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.resetPrincipal"></a>

```csharp
private void ResetPrincipal()
```

##### `ResetStatement` <a name="ResetStatement" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.resetStatement"></a>

```csharp
private void ResetStatement()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a EventsEventBusPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

EventsEventBusPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

EventsEventBusPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

EventsEventBusPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

EventsEventBusPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a EventsEventBusPolicy resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EventsEventBusPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EventsEventBusPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_event_bus_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the EventsEventBusPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.condition">Condition</a></code> | <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference">EventsEventBusPolicyConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.actionInput">ActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.conditionInput">ConditionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyCondition">EventsEventBusPolicyCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.eventBusNameInput">EventBusNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.principalInput">PrincipalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.statementIdInput">StatementIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.statementInput">StatementInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.eventBusName">EventBusName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.principal">Principal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.statement">Statement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.statementId">StatementId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.condition"></a>

```csharp
public EventsEventBusPolicyConditionOutputReference Condition { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference">EventsEventBusPolicyConditionOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.actionInput"></a>

```csharp
public string ActionInput { get; }
```

- *Type:* string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.conditionInput"></a>

```csharp
public IResolvable|EventsEventBusPolicyCondition ConditionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyCondition">EventsEventBusPolicyCondition</a>

---

##### `EventBusNameInput`<sup>Optional</sup> <a name="EventBusNameInput" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.eventBusNameInput"></a>

```csharp
public string EventBusNameInput { get; }
```

- *Type:* string

---

##### `PrincipalInput`<sup>Optional</sup> <a name="PrincipalInput" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.principalInput"></a>

```csharp
public string PrincipalInput { get; }
```

- *Type:* string

---

##### `StatementIdInput`<sup>Optional</sup> <a name="StatementIdInput" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.statementIdInput"></a>

```csharp
public string StatementIdInput { get; }
```

- *Type:* string

---

##### `StatementInput`<sup>Optional</sup> <a name="StatementInput" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.statementInput"></a>

```csharp
public string StatementInput { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `EventBusName`<sup>Required</sup> <a name="EventBusName" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.eventBusName"></a>

```csharp
public string EventBusName { get; }
```

- *Type:* string

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.principal"></a>

```csharp
public string Principal { get; }
```

- *Type:* string

---

##### `Statement`<sup>Required</sup> <a name="Statement" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.statement"></a>

```csharp
public string Statement { get; }
```

- *Type:* string

---

##### `StatementId`<sup>Required</sup> <a name="StatementId" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.statementId"></a>

```csharp
public string StatementId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EventsEventBusPolicyCondition <a name="EventsEventBusPolicyCondition" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyCondition.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EventsEventBusPolicyCondition {
    string Key = null,
    string Type = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyCondition.property.key">Key</a></code> | <code>string</code> | Specifies the value for the key. Currently, this must be the ID of the organization. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyCondition.property.type">Type</a></code> | <code>string</code> | Specifies the type of condition. Currently the only supported value is StringEquals. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyCondition.property.value">Value</a></code> | <code>string</code> | Specifies the key for the condition. Currently the only supported key is aws:PrincipalOrgID. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyCondition.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Specifies the value for the key. Currently, this must be the ID of the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_event_bus_policy#key EventsEventBusPolicy#key}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyCondition.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Specifies the type of condition. Currently the only supported value is StringEquals.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_event_bus_policy#type EventsEventBusPolicy#type}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyCondition.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Specifies the key for the condition. Currently the only supported key is aws:PrincipalOrgID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_event_bus_policy#value EventsEventBusPolicy#value}

---

### EventsEventBusPolicyConfig <a name="EventsEventBusPolicyConfig" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EventsEventBusPolicyConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string StatementId,
    string Action = null,
    EventsEventBusPolicyCondition Condition = null,
    string EventBusName = null,
    string Principal = null,
    string Statement = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig.property.statementId">StatementId</a></code> | <code>string</code> | An identifier string for the external account that you are granting permissions to. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig.property.action">Action</a></code> | <code>string</code> | The action that you are enabling the other account to perform. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig.property.condition">Condition</a></code> | <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyCondition">EventsEventBusPolicyCondition</a></code> | This parameter enables you to limit the permission to accounts that fulfill a certain condition, such as being a member of a certain AWS organization. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig.property.eventBusName">EventBusName</a></code> | <code>string</code> | The name of the event bus associated with the rule. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig.property.principal">Principal</a></code> | <code>string</code> | The 12-digit AWS account ID that you are permitting to put events to your default event bus. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig.property.statement">Statement</a></code> | <code>string</code> | A JSON string that describes the permission policy statement. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `StatementId`<sup>Required</sup> <a name="StatementId" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig.property.statementId"></a>

```csharp
public string StatementId { get; set; }
```

- *Type:* string

An identifier string for the external account that you are granting permissions to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_event_bus_policy#statement_id EventsEventBusPolicy#statement_id}

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig.property.action"></a>

```csharp
public string Action { get; set; }
```

- *Type:* string

The action that you are enabling the other account to perform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_event_bus_policy#action EventsEventBusPolicy#action}

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig.property.condition"></a>

```csharp
public EventsEventBusPolicyCondition Condition { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyCondition">EventsEventBusPolicyCondition</a>

This parameter enables you to limit the permission to accounts that fulfill a certain condition, such as being a member of a certain AWS organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_event_bus_policy#condition EventsEventBusPolicy#condition}

---

##### `EventBusName`<sup>Optional</sup> <a name="EventBusName" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig.property.eventBusName"></a>

```csharp
public string EventBusName { get; set; }
```

- *Type:* string

The name of the event bus associated with the rule.

If you omit this, the default event bus is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_event_bus_policy#event_bus_name EventsEventBusPolicy#event_bus_name}

---

##### `Principal`<sup>Optional</sup> <a name="Principal" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig.property.principal"></a>

```csharp
public string Principal { get; set; }
```

- *Type:* string

The 12-digit AWS account ID that you are permitting to put events to your default event bus.

Specify "*" to permit any account to put events to your default event bus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_event_bus_policy#principal EventsEventBusPolicy#principal}

---

##### `Statement`<sup>Optional</sup> <a name="Statement" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig.property.statement"></a>

```csharp
public string Statement { get; set; }
```

- *Type:* string

A JSON string that describes the permission policy statement.

You can include a Policy parameter in the request instead of using the StatementId, Action, Principal, or Condition parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_event_bus_policy#statement EventsEventBusPolicy#statement}

---

## Classes <a name="Classes" id="Classes"></a>

### EventsEventBusPolicyConditionOutputReference <a name="EventsEventBusPolicyConditionOutputReference" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EventsEventBusPolicyConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.resetType"></a>

```csharp
private void ResetType()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyCondition">EventsEventBusPolicyCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EventsEventBusPolicyCondition InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyCondition">EventsEventBusPolicyCondition</a>

---



