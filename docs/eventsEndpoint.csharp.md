# `eventsEndpoint` Submodule <a name="`eventsEndpoint` Submodule" id="@cdktn/provider-awscc.eventsEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EventsEndpoint <a name="EventsEndpoint" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/events_endpoint awscc_events_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EventsEndpoint(Construct Scope, string Id, EventsEndpointConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointConfig">EventsEndpointConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointConfig">EventsEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.putEventBuses">PutEventBuses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.putReplicationConfig">PutReplicationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.putRoutingConfig">PutRoutingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.resetReplicationConfig">ResetReplicationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.resetRoleArn">ResetRoleArn</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEventBuses` <a name="PutEventBuses" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.putEventBuses"></a>

```csharp
private void PutEventBuses(IResolvable|EventsEndpointEventBuses[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.putEventBuses.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBuses">EventsEndpointEventBuses</a>[]

---

##### `PutReplicationConfig` <a name="PutReplicationConfig" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.putReplicationConfig"></a>

```csharp
private void PutReplicationConfig(EventsEndpointReplicationConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.putReplicationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfig">EventsEndpointReplicationConfig</a>

---

##### `PutRoutingConfig` <a name="PutRoutingConfig" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.putRoutingConfig"></a>

```csharp
private void PutRoutingConfig(EventsEndpointRoutingConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.putRoutingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfig">EventsEndpointRoutingConfig</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetReplicationConfig` <a name="ResetReplicationConfig" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.resetReplicationConfig"></a>

```csharp
private void ResetReplicationConfig()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.resetRoleArn"></a>

```csharp
private void ResetRoleArn()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a EventsEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

EventsEndpoint.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

EventsEndpoint.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

EventsEndpoint.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

EventsEndpoint.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a EventsEndpoint resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EventsEndpoint to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EventsEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/events_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the EventsEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.endpointId">EndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.endpointUrl">EndpointUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.eventBuses">EventBuses</a></code> | <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesList">EventsEndpointEventBusesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.replicationConfig">ReplicationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference">EventsEndpointReplicationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.routingConfig">RoutingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference">EventsEndpointRoutingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.stateReason">StateReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.eventBusesInput">EventBusesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBuses">EventsEndpointEventBuses</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.replicationConfigInput">ReplicationConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfig">EventsEndpointReplicationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.routingConfigInput">RoutingConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfig">EventsEndpointRoutingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `EndpointId`<sup>Required</sup> <a name="EndpointId" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.endpointId"></a>

```csharp
public string EndpointId { get; }
```

- *Type:* string

---

##### `EndpointUrl`<sup>Required</sup> <a name="EndpointUrl" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.endpointUrl"></a>

```csharp
public string EndpointUrl { get; }
```

- *Type:* string

---

##### `EventBuses`<sup>Required</sup> <a name="EventBuses" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.eventBuses"></a>

```csharp
public EventsEndpointEventBusesList EventBuses { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesList">EventsEndpointEventBusesList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ReplicationConfig`<sup>Required</sup> <a name="ReplicationConfig" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.replicationConfig"></a>

```csharp
public EventsEndpointReplicationConfigOutputReference ReplicationConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference">EventsEndpointReplicationConfigOutputReference</a>

---

##### `RoutingConfig`<sup>Required</sup> <a name="RoutingConfig" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.routingConfig"></a>

```csharp
public EventsEndpointRoutingConfigOutputReference RoutingConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference">EventsEndpointRoutingConfigOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `StateReason`<sup>Required</sup> <a name="StateReason" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.stateReason"></a>

```csharp
public string StateReason { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EventBusesInput`<sup>Optional</sup> <a name="EventBusesInput" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.eventBusesInput"></a>

```csharp
public IResolvable|EventsEndpointEventBuses[] EventBusesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBuses">EventsEndpointEventBuses</a>[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ReplicationConfigInput`<sup>Optional</sup> <a name="ReplicationConfigInput" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.replicationConfigInput"></a>

```csharp
public IResolvable|EventsEndpointReplicationConfig ReplicationConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfig">EventsEndpointReplicationConfig</a>

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `RoutingConfigInput`<sup>Optional</sup> <a name="RoutingConfigInput" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.routingConfigInput"></a>

```csharp
public IResolvable|EventsEndpointRoutingConfig RoutingConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfig">EventsEndpointRoutingConfig</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EventsEndpointConfig <a name="EventsEndpointConfig" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EventsEndpointConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    IResolvable|EventsEndpointEventBuses[] EventBuses,
    EventsEndpointRoutingConfig RoutingConfig,
    string Description = null,
    string Name = null,
    EventsEndpointReplicationConfig ReplicationConfig = null,
    string RoleArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointConfig.property.eventBuses">EventBuses</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBuses">EventsEndpointEventBuses</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/events_endpoint#event_buses EventsEndpoint#event_buses}. |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointConfig.property.routingConfig">RoutingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfig">EventsEndpointRoutingConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/events_endpoint#routing_config EventsEndpoint#routing_config}. |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/events_endpoint#description EventsEndpoint#description}. |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/events_endpoint#name EventsEndpoint#name}. |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointConfig.property.replicationConfig">ReplicationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfig">EventsEndpointReplicationConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/events_endpoint#replication_config EventsEndpoint#replication_config}. |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointConfig.property.roleArn">RoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/events_endpoint#role_arn EventsEndpoint#role_arn}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `EventBuses`<sup>Required</sup> <a name="EventBuses" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointConfig.property.eventBuses"></a>

```csharp
public IResolvable|EventsEndpointEventBuses[] EventBuses { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBuses">EventsEndpointEventBuses</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/events_endpoint#event_buses EventsEndpoint#event_buses}.

---

##### `RoutingConfig`<sup>Required</sup> <a name="RoutingConfig" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointConfig.property.routingConfig"></a>

```csharp
public EventsEndpointRoutingConfig RoutingConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfig">EventsEndpointRoutingConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/events_endpoint#routing_config EventsEndpoint#routing_config}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/events_endpoint#description EventsEndpoint#description}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/events_endpoint#name EventsEndpoint#name}.

---

##### `ReplicationConfig`<sup>Optional</sup> <a name="ReplicationConfig" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointConfig.property.replicationConfig"></a>

```csharp
public EventsEndpointReplicationConfig ReplicationConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfig">EventsEndpointReplicationConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/events_endpoint#replication_config EventsEndpoint#replication_config}.

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointConfig.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/events_endpoint#role_arn EventsEndpoint#role_arn}.

---

### EventsEndpointEventBuses <a name="EventsEndpointEventBuses" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBuses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBuses.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EventsEndpointEventBuses {
    string EventBusArn
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBuses.property.eventBusArn">EventBusArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/events_endpoint#event_bus_arn EventsEndpoint#event_bus_arn}. |

---

##### `EventBusArn`<sup>Required</sup> <a name="EventBusArn" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBuses.property.eventBusArn"></a>

```csharp
public string EventBusArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/events_endpoint#event_bus_arn EventsEndpoint#event_bus_arn}.

---

### EventsEndpointReplicationConfig <a name="EventsEndpointReplicationConfig" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EventsEndpointReplicationConfig {
    string State = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/events_endpoint#state EventsEndpoint#state}. |

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/events_endpoint#state EventsEndpoint#state}.

---

### EventsEndpointRoutingConfig <a name="EventsEndpointRoutingConfig" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EventsEndpointRoutingConfig {
    EventsEndpointRoutingConfigFailoverConfig FailoverConfig
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfig.property.failoverConfig">FailoverConfig</a></code> | <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfig">EventsEndpointRoutingConfigFailoverConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/events_endpoint#failover_config EventsEndpoint#failover_config}. |

---

##### `FailoverConfig`<sup>Required</sup> <a name="FailoverConfig" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfig.property.failoverConfig"></a>

```csharp
public EventsEndpointRoutingConfigFailoverConfig FailoverConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfig">EventsEndpointRoutingConfigFailoverConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/events_endpoint#failover_config EventsEndpoint#failover_config}.

---

### EventsEndpointRoutingConfigFailoverConfig <a name="EventsEndpointRoutingConfigFailoverConfig" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EventsEndpointRoutingConfigFailoverConfig {
    EventsEndpointRoutingConfigFailoverConfigPrimary Primary,
    EventsEndpointRoutingConfigFailoverConfigSecondary Secondary
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfig.property.primary">Primary</a></code> | <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimary">EventsEndpointRoutingConfigFailoverConfigPrimary</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/events_endpoint#primary EventsEndpoint#primary}. |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfig.property.secondary">Secondary</a></code> | <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondary">EventsEndpointRoutingConfigFailoverConfigSecondary</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/events_endpoint#secondary EventsEndpoint#secondary}. |

---

##### `Primary`<sup>Required</sup> <a name="Primary" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfig.property.primary"></a>

```csharp
public EventsEndpointRoutingConfigFailoverConfigPrimary Primary { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimary">EventsEndpointRoutingConfigFailoverConfigPrimary</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/events_endpoint#primary EventsEndpoint#primary}.

---

##### `Secondary`<sup>Required</sup> <a name="Secondary" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfig.property.secondary"></a>

```csharp
public EventsEndpointRoutingConfigFailoverConfigSecondary Secondary { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondary">EventsEndpointRoutingConfigFailoverConfigSecondary</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/events_endpoint#secondary EventsEndpoint#secondary}.

---

### EventsEndpointRoutingConfigFailoverConfigPrimary <a name="EventsEndpointRoutingConfigFailoverConfigPrimary" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimary"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimary.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EventsEndpointRoutingConfigFailoverConfigPrimary {
    string HealthCheck
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimary.property.healthCheck">HealthCheck</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/events_endpoint#health_check EventsEndpoint#health_check}. |

---

##### `HealthCheck`<sup>Required</sup> <a name="HealthCheck" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimary.property.healthCheck"></a>

```csharp
public string HealthCheck { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/events_endpoint#health_check EventsEndpoint#health_check}.

---

### EventsEndpointRoutingConfigFailoverConfigSecondary <a name="EventsEndpointRoutingConfigFailoverConfigSecondary" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondary"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondary.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EventsEndpointRoutingConfigFailoverConfigSecondary {
    string Route
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondary.property.route">Route</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/events_endpoint#route EventsEndpoint#route}. |

---

##### `Route`<sup>Required</sup> <a name="Route" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondary.property.route"></a>

```csharp
public string Route { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/events_endpoint#route EventsEndpoint#route}.

---

## Classes <a name="Classes" id="Classes"></a>

### EventsEndpointEventBusesList <a name="EventsEndpointEventBusesList" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EventsEndpointEventBusesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesList.get"></a>

```csharp
private EventsEndpointEventBusesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBuses">EventsEndpointEventBuses</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesList.property.internalValue"></a>

```csharp
public IResolvable|EventsEndpointEventBuses[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBuses">EventsEndpointEventBuses</a>[]

---


### EventsEndpointEventBusesOutputReference <a name="EventsEndpointEventBusesOutputReference" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EventsEndpointEventBusesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.property.eventBusArnInput">EventBusArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.property.eventBusArn">EventBusArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBuses">EventsEndpointEventBuses</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EventBusArnInput`<sup>Optional</sup> <a name="EventBusArnInput" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.property.eventBusArnInput"></a>

```csharp
public string EventBusArnInput { get; }
```

- *Type:* string

---

##### `EventBusArn`<sup>Required</sup> <a name="EventBusArn" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.property.eventBusArn"></a>

```csharp
public string EventBusArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EventsEndpointEventBuses InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBuses">EventsEndpointEventBuses</a>

---


### EventsEndpointReplicationConfigOutputReference <a name="EventsEndpointReplicationConfigOutputReference" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EventsEndpointReplicationConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference.resetState">ResetState</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetState` <a name="ResetState" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference.resetState"></a>

```csharp
private void ResetState()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfig">EventsEndpointReplicationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EventsEndpointReplicationConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfig">EventsEndpointReplicationConfig</a>

---


### EventsEndpointRoutingConfigFailoverConfigOutputReference <a name="EventsEndpointRoutingConfigFailoverConfigOutputReference" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EventsEndpointRoutingConfigFailoverConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.putPrimary">PutPrimary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.putSecondary">PutSecondary</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPrimary` <a name="PutPrimary" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.putPrimary"></a>

```csharp
private void PutPrimary(EventsEndpointRoutingConfigFailoverConfigPrimary Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.putPrimary.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimary">EventsEndpointRoutingConfigFailoverConfigPrimary</a>

---

##### `PutSecondary` <a name="PutSecondary" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.putSecondary"></a>

```csharp
private void PutSecondary(EventsEndpointRoutingConfigFailoverConfigSecondary Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.putSecondary.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondary">EventsEndpointRoutingConfigFailoverConfigSecondary</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.property.primary">Primary</a></code> | <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference">EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.property.secondary">Secondary</a></code> | <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference">EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.property.primaryInput">PrimaryInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimary">EventsEndpointRoutingConfigFailoverConfigPrimary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.property.secondaryInput">SecondaryInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondary">EventsEndpointRoutingConfigFailoverConfigSecondary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfig">EventsEndpointRoutingConfigFailoverConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Primary`<sup>Required</sup> <a name="Primary" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.property.primary"></a>

```csharp
public EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference Primary { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference">EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference</a>

---

##### `Secondary`<sup>Required</sup> <a name="Secondary" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.property.secondary"></a>

```csharp
public EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference Secondary { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference">EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference</a>

---

##### `PrimaryInput`<sup>Optional</sup> <a name="PrimaryInput" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.property.primaryInput"></a>

```csharp
public IResolvable|EventsEndpointRoutingConfigFailoverConfigPrimary PrimaryInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimary">EventsEndpointRoutingConfigFailoverConfigPrimary</a>

---

##### `SecondaryInput`<sup>Optional</sup> <a name="SecondaryInput" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.property.secondaryInput"></a>

```csharp
public IResolvable|EventsEndpointRoutingConfigFailoverConfigSecondary SecondaryInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondary">EventsEndpointRoutingConfigFailoverConfigSecondary</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EventsEndpointRoutingConfigFailoverConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfig">EventsEndpointRoutingConfigFailoverConfig</a>

---


### EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference <a name="EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.property.healthCheckInput">HealthCheckInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.property.healthCheck">HealthCheck</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimary">EventsEndpointRoutingConfigFailoverConfigPrimary</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HealthCheckInput`<sup>Optional</sup> <a name="HealthCheckInput" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.property.healthCheckInput"></a>

```csharp
public string HealthCheckInput { get; }
```

- *Type:* string

---

##### `HealthCheck`<sup>Required</sup> <a name="HealthCheck" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.property.healthCheck"></a>

```csharp
public string HealthCheck { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EventsEndpointRoutingConfigFailoverConfigPrimary InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimary">EventsEndpointRoutingConfigFailoverConfigPrimary</a>

---


### EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference <a name="EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.property.routeInput">RouteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.property.route">Route</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondary">EventsEndpointRoutingConfigFailoverConfigSecondary</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RouteInput`<sup>Optional</sup> <a name="RouteInput" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.property.routeInput"></a>

```csharp
public string RouteInput { get; }
```

- *Type:* string

---

##### `Route`<sup>Required</sup> <a name="Route" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.property.route"></a>

```csharp
public string Route { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EventsEndpointRoutingConfigFailoverConfigSecondary InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondary">EventsEndpointRoutingConfigFailoverConfigSecondary</a>

---


### EventsEndpointRoutingConfigOutputReference <a name="EventsEndpointRoutingConfigOutputReference" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EventsEndpointRoutingConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.putFailoverConfig">PutFailoverConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFailoverConfig` <a name="PutFailoverConfig" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.putFailoverConfig"></a>

```csharp
private void PutFailoverConfig(EventsEndpointRoutingConfigFailoverConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.putFailoverConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfig">EventsEndpointRoutingConfigFailoverConfig</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.property.failoverConfig">FailoverConfig</a></code> | <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference">EventsEndpointRoutingConfigFailoverConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.property.failoverConfigInput">FailoverConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfig">EventsEndpointRoutingConfigFailoverConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfig">EventsEndpointRoutingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FailoverConfig`<sup>Required</sup> <a name="FailoverConfig" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.property.failoverConfig"></a>

```csharp
public EventsEndpointRoutingConfigFailoverConfigOutputReference FailoverConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference">EventsEndpointRoutingConfigFailoverConfigOutputReference</a>

---

##### `FailoverConfigInput`<sup>Optional</sup> <a name="FailoverConfigInput" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.property.failoverConfigInput"></a>

```csharp
public IResolvable|EventsEndpointRoutingConfigFailoverConfig FailoverConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfig">EventsEndpointRoutingConfigFailoverConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EventsEndpointRoutingConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfig">EventsEndpointRoutingConfig</a>

---



