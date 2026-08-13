# `eventsEventBus` Submodule <a name="`eventsEventBus` Submodule" id="@cdktn/provider-awscc.eventsEventBus"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EventsEventBus <a name="EventsEventBus" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_event_bus awscc_events_event_bus}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EventsEventBus(Construct Scope, string Id, EventsEventBusConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusConfig">EventsEventBusConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusConfig">EventsEventBusConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.putDeadLetterConfig">PutDeadLetterConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.putLogConfig">PutLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.resetDeadLetterConfig">ResetDeadLetterConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.resetEventSourceName">ResetEventSourceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.resetKmsKeyIdentifier">ResetKmsKeyIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.resetLogConfig">ResetLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.resetPolicy">ResetPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDeadLetterConfig` <a name="PutDeadLetterConfig" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.putDeadLetterConfig"></a>

```csharp
private void PutDeadLetterConfig(EventsEventBusDeadLetterConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.putDeadLetterConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfig">EventsEventBusDeadLetterConfig</a>

---

##### `PutLogConfig` <a name="PutLogConfig" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.putLogConfig"></a>

```csharp
private void PutLogConfig(EventsEventBusLogConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.putLogConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfig">EventsEventBusLogConfig</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.putTags"></a>

```csharp
private void PutTags(IResolvable|EventsEventBusTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusTags">EventsEventBusTags</a>[]

---

##### `ResetDeadLetterConfig` <a name="ResetDeadLetterConfig" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.resetDeadLetterConfig"></a>

```csharp
private void ResetDeadLetterConfig()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEventSourceName` <a name="ResetEventSourceName" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.resetEventSourceName"></a>

```csharp
private void ResetEventSourceName()
```

##### `ResetKmsKeyIdentifier` <a name="ResetKmsKeyIdentifier" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.resetKmsKeyIdentifier"></a>

```csharp
private void ResetKmsKeyIdentifier()
```

##### `ResetLogConfig` <a name="ResetLogConfig" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.resetLogConfig"></a>

```csharp
private void ResetLogConfig()
```

##### `ResetPolicy` <a name="ResetPolicy" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.resetPolicy"></a>

```csharp
private void ResetPolicy()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a EventsEventBus resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

EventsEventBus.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

EventsEventBus.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

EventsEventBus.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

EventsEventBus.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a EventsEventBus resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EventsEventBus to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EventsEventBus that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_event_bus#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the EventsEventBus to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.deadLetterConfig">DeadLetterConfig</a></code> | <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference">EventsEventBusDeadLetterConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.logConfig">LogConfig</a></code> | <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference">EventsEventBusLogConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsList">EventsEventBusTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.deadLetterConfigInput">DeadLetterConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfig">EventsEventBusDeadLetterConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.eventSourceNameInput">EventSourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.kmsKeyIdentifierInput">KmsKeyIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.logConfigInput">LogConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfig">EventsEventBusLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.policyInput">PolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusTags">EventsEventBusTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.eventSourceName">EventSourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.kmsKeyIdentifier">KmsKeyIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.policy">Policy</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `DeadLetterConfig`<sup>Required</sup> <a name="DeadLetterConfig" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.deadLetterConfig"></a>

```csharp
public EventsEventBusDeadLetterConfigOutputReference DeadLetterConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference">EventsEventBusDeadLetterConfigOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LogConfig`<sup>Required</sup> <a name="LogConfig" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.logConfig"></a>

```csharp
public EventsEventBusLogConfigOutputReference LogConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference">EventsEventBusLogConfigOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.tags"></a>

```csharp
public EventsEventBusTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsList">EventsEventBusTagsList</a>

---

##### `DeadLetterConfigInput`<sup>Optional</sup> <a name="DeadLetterConfigInput" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.deadLetterConfigInput"></a>

```csharp
public IResolvable|EventsEventBusDeadLetterConfig DeadLetterConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfig">EventsEventBusDeadLetterConfig</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EventSourceNameInput`<sup>Optional</sup> <a name="EventSourceNameInput" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.eventSourceNameInput"></a>

```csharp
public string EventSourceNameInput { get; }
```

- *Type:* string

---

##### `KmsKeyIdentifierInput`<sup>Optional</sup> <a name="KmsKeyIdentifierInput" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.kmsKeyIdentifierInput"></a>

```csharp
public string KmsKeyIdentifierInput { get; }
```

- *Type:* string

---

##### `LogConfigInput`<sup>Optional</sup> <a name="LogConfigInput" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.logConfigInput"></a>

```csharp
public IResolvable|EventsEventBusLogConfig LogConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfig">EventsEventBusLogConfig</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PolicyInput`<sup>Optional</sup> <a name="PolicyInput" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.policyInput"></a>

```csharp
public string PolicyInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.tagsInput"></a>

```csharp
public IResolvable|EventsEventBusTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusTags">EventsEventBusTags</a>[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EventSourceName`<sup>Required</sup> <a name="EventSourceName" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.eventSourceName"></a>

```csharp
public string EventSourceName { get; }
```

- *Type:* string

---

##### `KmsKeyIdentifier`<sup>Required</sup> <a name="KmsKeyIdentifier" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.kmsKeyIdentifier"></a>

```csharp
public string KmsKeyIdentifier { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.policy"></a>

```csharp
public string Policy { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EventsEventBusConfig <a name="EventsEventBusConfig" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EventsEventBusConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    EventsEventBusDeadLetterConfig DeadLetterConfig = null,
    string Description = null,
    string EventSourceName = null,
    string KmsKeyIdentifier = null,
    EventsEventBusLogConfig LogConfig = null,
    string Policy = null,
    IResolvable|EventsEventBusTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusConfig.property.name">Name</a></code> | <code>string</code> | The name of the event bus. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusConfig.property.deadLetterConfig">DeadLetterConfig</a></code> | <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfig">EventsEventBusDeadLetterConfig</a></code> | Dead Letter Queue for the event bus. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusConfig.property.description">Description</a></code> | <code>string</code> | The description of the event bus. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusConfig.property.eventSourceName">EventSourceName</a></code> | <code>string</code> | If you are creating a partner event bus, this specifies the partner event source that the new event bus will be matched with. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusConfig.property.kmsKeyIdentifier">KmsKeyIdentifier</a></code> | <code>string</code> | Kms Key Identifier used to encrypt events at rest in the event bus. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusConfig.property.logConfig">LogConfig</a></code> | <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfig">EventsEventBusLogConfig</a></code> | The logging configuration settings for vended logs. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusConfig.property.policy">Policy</a></code> | <code>string</code> | A JSON string that describes the permission policy statement for the event bus. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusTags">EventsEventBusTags</a>[]</code> | Any tags assigned to the event bus. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the event bus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_event_bus#name EventsEventBus#name}

---

##### `DeadLetterConfig`<sup>Optional</sup> <a name="DeadLetterConfig" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusConfig.property.deadLetterConfig"></a>

```csharp
public EventsEventBusDeadLetterConfig DeadLetterConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfig">EventsEventBusDeadLetterConfig</a>

Dead Letter Queue for the event bus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_event_bus#dead_letter_config EventsEventBus#dead_letter_config}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the event bus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_event_bus#description EventsEventBus#description}

---

##### `EventSourceName`<sup>Optional</sup> <a name="EventSourceName" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusConfig.property.eventSourceName"></a>

```csharp
public string EventSourceName { get; set; }
```

- *Type:* string

If you are creating a partner event bus, this specifies the partner event source that the new event bus will be matched with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_event_bus#event_source_name EventsEventBus#event_source_name}

---

##### `KmsKeyIdentifier`<sup>Optional</sup> <a name="KmsKeyIdentifier" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusConfig.property.kmsKeyIdentifier"></a>

```csharp
public string KmsKeyIdentifier { get; set; }
```

- *Type:* string

Kms Key Identifier used to encrypt events at rest in the event bus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_event_bus#kms_key_identifier EventsEventBus#kms_key_identifier}

---

##### `LogConfig`<sup>Optional</sup> <a name="LogConfig" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusConfig.property.logConfig"></a>

```csharp
public EventsEventBusLogConfig LogConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfig">EventsEventBusLogConfig</a>

The logging configuration settings for vended logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_event_bus#log_config EventsEventBus#log_config}

---

##### `Policy`<sup>Optional</sup> <a name="Policy" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusConfig.property.policy"></a>

```csharp
public string Policy { get; set; }
```

- *Type:* string

A JSON string that describes the permission policy statement for the event bus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_event_bus#policy EventsEventBus#policy}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusConfig.property.tags"></a>

```csharp
public IResolvable|EventsEventBusTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusTags">EventsEventBusTags</a>[]

Any tags assigned to the event bus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_event_bus#tags EventsEventBus#tags}

---

### EventsEventBusDeadLetterConfig <a name="EventsEventBusDeadLetterConfig" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EventsEventBusDeadLetterConfig {
    string Arn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfig.property.arn">Arn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_event_bus#arn EventsEventBus#arn}. |

---

##### `Arn`<sup>Optional</sup> <a name="Arn" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfig.property.arn"></a>

```csharp
public string Arn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_event_bus#arn EventsEventBus#arn}.

---

### EventsEventBusLogConfig <a name="EventsEventBusLogConfig" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EventsEventBusLogConfig {
    string IncludeDetail = null,
    string Level = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfig.property.includeDetail">IncludeDetail</a></code> | <code>string</code> | Configures whether or not to include event detail, input transformer details, target properties, and target input in the applicable log messages. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfig.property.level">Level</a></code> | <code>string</code> | Configures the log level of the EventBus and determines which log messages are sent to Ingestion Hub for delivery. |

---

##### `IncludeDetail`<sup>Optional</sup> <a name="IncludeDetail" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfig.property.includeDetail"></a>

```csharp
public string IncludeDetail { get; set; }
```

- *Type:* string

Configures whether or not to include event detail, input transformer details, target properties, and target input in the applicable log messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_event_bus#include_detail EventsEventBus#include_detail}

---

##### `Level`<sup>Optional</sup> <a name="Level" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfig.property.level"></a>

```csharp
public string Level { get; set; }
```

- *Type:* string

Configures the log level of the EventBus and determines which log messages are sent to Ingestion Hub for delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_event_bus#level EventsEventBus#level}

---

### EventsEventBusTags <a name="EventsEventBusTags" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EventsEventBusTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_event_bus#key EventsEventBus#key}. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_event_bus#value EventsEventBus#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_event_bus#key EventsEventBus#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_event_bus#value EventsEventBus#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### EventsEventBusDeadLetterConfigOutputReference <a name="EventsEventBusDeadLetterConfigOutputReference" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EventsEventBusDeadLetterConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference.resetArn">ResetArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetArn` <a name="ResetArn" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference.resetArn"></a>

```csharp
private void ResetArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference.property.arnInput">ArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfig">EventsEventBusDeadLetterConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference.property.arnInput"></a>

```csharp
public string ArnInput { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EventsEventBusDeadLetterConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfig">EventsEventBusDeadLetterConfig</a>

---


### EventsEventBusLogConfigOutputReference <a name="EventsEventBusLogConfigOutputReference" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EventsEventBusLogConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.resetIncludeDetail">ResetIncludeDetail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.resetLevel">ResetLevel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIncludeDetail` <a name="ResetIncludeDetail" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.resetIncludeDetail"></a>

```csharp
private void ResetIncludeDetail()
```

##### `ResetLevel` <a name="ResetLevel" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.resetLevel"></a>

```csharp
private void ResetLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.property.includeDetailInput">IncludeDetailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.property.levelInput">LevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.property.includeDetail">IncludeDetail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.property.level">Level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfig">EventsEventBusLogConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IncludeDetailInput`<sup>Optional</sup> <a name="IncludeDetailInput" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.property.includeDetailInput"></a>

```csharp
public string IncludeDetailInput { get; }
```

- *Type:* string

---

##### `LevelInput`<sup>Optional</sup> <a name="LevelInput" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.property.levelInput"></a>

```csharp
public string LevelInput { get; }
```

- *Type:* string

---

##### `IncludeDetail`<sup>Required</sup> <a name="IncludeDetail" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.property.includeDetail"></a>

```csharp
public string IncludeDetail { get; }
```

- *Type:* string

---

##### `Level`<sup>Required</sup> <a name="Level" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.property.level"></a>

```csharp
public string Level { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EventsEventBusLogConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfig">EventsEventBusLogConfig</a>

---


### EventsEventBusTagsList <a name="EventsEventBusTagsList" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EventsEventBusTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsList.get"></a>

```csharp
private EventsEventBusTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusTags">EventsEventBusTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsList.property.internalValue"></a>

```csharp
public IResolvable|EventsEventBusTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusTags">EventsEventBusTags</a>[]

---


### EventsEventBusTagsOutputReference <a name="EventsEventBusTagsOutputReference" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EventsEventBusTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusTags">EventsEventBusTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EventsEventBusTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusTags">EventsEventBusTags</a>

---



